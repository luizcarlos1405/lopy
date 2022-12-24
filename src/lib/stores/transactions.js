import { liveQuery } from 'dexie';
import { dexieDb } from '../databases/dexieDb';
import { derived } from 'svelte/store';
import { clientOnly } from '../helpers';
import { DateTime } from 'luxon';

export const queryTransactions = envelopeId =>
  derived(
    liveQuery(async () =>
      envelopeId
        ? dexieDb.transactions.where({ envelopeId }).reverse().sortBy('date')
        : dexieDb.transactions.toCollection().reverse().sortBy('date')
    ),
    array => array || []
  );

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
