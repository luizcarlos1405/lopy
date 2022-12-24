import { liveQuery } from 'dexie';
import { dexieDb } from '../databases/dexieDb';
import { derived } from 'svelte/store';
import { DateTime } from 'luxon';
import { clientOnly } from '../helpers';

// liveQuery() returns a reactive Svelte Store (or actually
// an Observable that happens to comply with the The Svelte Store Contract).
export const envelopes = derived(
  liveQuery(async () => dexieDb.envelopes.toCollection().toArray()),
  array => array || []
);

export const saveEnvelope = ({ _id, ...envelope }) =>
  envelopes.update(async currentState => {
    const envelopeCount = await dexieDb.envelopes.count();

    return _id
      ? dexieDb.envelopes.update(_id, envelope)
      : dexieDb.envelopes.add({
        _id: crypto.randomUUID(),
        order: envelopeCount,
        value: 0,
        ...envelope,
      });
  });

export const deleteEnvelope = ({ _id }) =>
  dexieDb.envelopes.where({ _id }).delete();

export const reorderEnvelopes = async orderedEnvelopes => {
  dexieDb.transaction('rw', dexieDb.envelopes, async () =>
    orderedEnvelopes.map(({ _id }, index) =>
      dexieDb.envelopes.update(_id, { order: index })
    )
  );
};

export const saveTransaction = (transaction, envelopeId) =>
  new Promise((resolve, reject) => {
    const newTransaction = {
      _id: crypto.randomUUID(),
      envelopeId,
      date: DateTime.now().toMillis(),
      ...transaction,
    };
    dexieDb
      .transaction('rw', dexieDb.transactions, dexieDb.envelopes, async () => {
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
  });

// TODO actually make it paginated...
export const getTransactionsPaginated = clientOnly(
  {},
  ({ envelopeId, limit, offset }) => {
    return {
      transactions: dexieDb.transactions
        .where({ envelopeId })
        .reverse()
        .sortBy('date'),
      previous: () => { },
      next: () => { },
      refresh: async () => {
        const result = getTransactionsPaginated({
          envelopeId,
          limit,
          offset,
        });
        const transactions = await result.transactions;

        return { ...result, transactions };
      },
    };
  }
);

// TODO actually make it paginated...
export const getAllTransactionsPaginated = clientOnly(
  {},
  ({ limit, offset } = {}) => {
    return {
      transactions: dexieDb.transactions.reverse().sortBy('date'),
      previous: () => { },
      next: () => { },
      refresh: async () => {
        const result = getAllTransactionsPaginated({
          actions,
          limit,
          offset,
        });
        const transactions = await result.transactions;

        return { ...result, transactions };
      },
    };
  }
);

export const deleteTransactions = async (transactionIds, envelopeId) => {
  return dexieDb.transaction(
    'rw',
    dexieDb.transactions,
    dexieDb.envelopes,
    async () => {
      console.log('transactionIds', transactionIds);
      const dexieDbEnvelope = await dexieDb.envelopes.get(envelopeId);
      const transactionsCollection = dexieDb.transactions
        .where('_id')
        .anyOf(transactionIds);
      const dexieDbTransactions = await transactionsCollection.toArray();
      console.log('dexieDbTransactions', dexieDbTransactions);
      const newEnvelopeValue = dexieDbTransactions.reduce(
        (acc, { value }) => acc - value,
        dexieDbEnvelope.value
      );

      await dexieDb.envelopes.update(envelopeId, {
        value: newEnvelopeValue,
      });
      await dexieDb.transactions
        .bulkDelete(transactionIds)
        .then(num => console.log('transactions deleted', num));
    }
  );
};
