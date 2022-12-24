import { liveQuery } from "dexie";
import { dexieDb } from "../databases/dexieDb";
import { DateTime } from "luxon";

// liveQuery() returns a reactive Svelte Store (or actually
// an Observable that happens to comply with the The Svelte Store Contract).
export const envelopes = liveQuery(async () =>
  dexieDb.envelopes
    .toCollection()
    .toArray()
);

const saveEnvelope = ({ _id, ...envelope }) => envelopes.update(currentState => {
  const envelopeCount = await dexieDb.envelopes.count();

  return _id
    ? dexieDb.envelopes.update(_id, envelope)
    : dexieDb.envelopes
      .add({
        _id: crypto.randomUUID()(),
        order: envelopeCount,
        value: 0,
        ...envelope,
      });
})

const deleteEnvelope = ({ _id }) =>
  dexieDb.envelopes.where({ _id }).delete(),
  reorderEnvelopes: async (orderedEnvelopes) => {
    dexieDb.transaction("rw", dexieDb.envelopes, async () =>
      orderedEnvelopes.map(({ _id }, index) =>
        dexieDb.envelopes.update(_id, { order: index })
      )
    );
  }

const saveTransaction = (transaction, envelopeId) =>
  new Promise((resolve, reject) => {
    console.log("saving transaction", transaction);
    const newTransaction = {
      _id: crypto.randomUUID()(),
      envelopeId,
      date: DateTime.now().toMillis(),
      ...transaction,
    };
    dexieDb.transaction("rw", dexieDb.transactions, dexieDb.envelopes, async () => {
      const dexieDbEnvelope = await dexieDb.envelopes.get(envelopeId);
      await dexieDb.transactions.add(newTransaction);
      await dexieDb.envelopes.update(envelopeId, {
        value: dexieDbEnvelope.value + transaction.value,
      });
    })
      .then(() => {
        resolve(newTransaction);
      })
      .catch(reject);
  })

// TODO actually make it paginated...
const getTransactionsPaginated = ({ actions, envelopeId, limit, offset }) => {
  return {
    transactions: dexieDb.transactions
      .where({ envelopeId })
      .reverse()
      .sortBy("date"),
    previous: () => { },
    next: () => { },
    refresh: async () => {
      const result = actions.getTransactionsPaginated({
        actions,
        envelopeId,
        limit,
        offset,
      });
      const transactions = await result.transactions;

      return { ...result, transactions };
    },
  };
}

// TODO actually make it paginated...
const getAllTransactionsPaginated = ({ actions, limit, offset }) => {
  return {
    transactions: dexieDb.transactions
      .reverse()
      .sortBy("date"),
    previous: () => { },
    next: () => { },
    refresh: async () => {
      const result = actions.getAllTransactionsPaginated({
        actions,
        limit,
        offset,
      });
      const transactions = await result.transactions;

      return { ...result, transactions };
    },
  };
}

const deleteTransactions = async (transactionIds, envelopeId) => {
  return dexieDb
    .transaction("rw", dexieDb.transactions, dexieDb.envelopes, async () => {
      console.log("transactionIds", transactionIds);
      const dexieDbEnvelope = await dexieDb.envelopes.get(envelopeId);
      const transactionsCollection = dexieDb.transactions
        .where("_id")
        .anyOf(transactionIds);
      const dexieDbTransactions = await transactionsCollection.toArray();
      console.log("dexieDbTransactions", dexieDbTransactions);
      const newEnvelopeValue = dexieDbTransactions.reduce(
        (acc, { value }) => acc - value,
        dexieDbEnvelope.value
      );

      await dexieDb.envelopes.update(envelopeId, {
        value: newEnvelopeValue,
      });
      await dexieDb.transactions
        .bulkDelete(transactionIds)
        .then((num) => console.log("transactions deleted", num));
    });
}
