import { readable, writable } from 'svelte/store';
import { isClient } from './helpers';
import { v4 as uuid } from 'uuid';
import Dexie from 'dexie';
import { DateTime } from 'luxon';

export const envelopes = writable([]);
let db;

const refreshEnvelopes = () =>
  db.envelopes
    .orderBy('order')
    .toArray()
    .then(dbEnvelopes => {
      console.log('dbEnvelopes', dbEnvelopes);
      envelopes.set(dbEnvelopes);
    });

if (isClient()) {
  db = new Dexie('lopy');
  db.version(1).stores({
    envelopes: '_id,order',
    transactions: '_id,envelopeId,date',
  });

  // Log current db content
  console.log('db', db);
  db.envelopes
    .toCollection()
    .toArray()
    .then(result => console.log('envelopes', result));
  db.transactions
    .toCollection()
    .toArray()
    .then(result => console.log('transactions', result));

  refreshEnvelopes();
}

export const actions = readable(
  isClient() && {
    saveEnvelope: async ({ _id, ...envelope }) => {
      const envelopeCount = await db.envelopes.count();

      return _id
        ? db.envelopes.update(_id, envelope).then(refreshEnvelopes)
        : db.envelopes
            .add({
              _id: uuid(),
              order: envelopeCount,
              value: 0,
              ...envelope,
            })
            .then(refreshEnvelopes);
    },
    deleteEnvelope: ({ _id }) =>
      db.envelopes.where({ _id }).delete().then(refreshEnvelopes),
    reorderEnvelopes: async orderedEnvelopes => {
      db.transaction('rw', db.envelopes, async () =>
        orderedEnvelopes.map(({ _id }, index) =>
          db.envelopes.update(_id, { order: index })
        )
      ).then(refreshEnvelopes);
    },
    saveTransaction: (transaction, envelopeId) => {
      console.log('saving transaction', transaction);
      return db
        .transaction('rw', db.transactions, db.envelopes, async () => {
          const dbEnvelope = await db.envelopes.get(envelopeId);
          await db.transactions.add({
            _id: uuid(),
            envelopeId,
            date: DateTime.now().toSeconds(),
            ...transaction,
          });
          await db.envelopes.update(envelopeId, {
            value: dbEnvelope.value + transaction.value,
          });
        })
        .then(refreshEnvelopes);
    },
    // TODO actually make it paginated...
    getTransactionsPaginated: ({ actions, envelopeId, limit, offset }) => {
      console.log('db.transactions', db.transactions);
      return {
        transactions: db.transactions
          .where({ envelopeId })
          .reverse()
          .sortBy('date'),
        previous: () => {},
        next: () => {},
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
    },
    deleteTransactions: async (transactionIds, envelopeId) => {
      return db
        .transaction('rw', db.transactions, db.envelopes, async () => {
          console.log('transactionIds', transactionIds);
          const dbEnvelope = await db.envelopes.get(envelopeId);
          const transactionsCollection = db.transactions
            .where('_id')
            .anyOf(transactionIds);
          const dbTransactions = await transactionsCollection.toArray();
          console.log('dbTransactions', dbTransactions);
          const newEnvelopeValue = dbTransactions.reduce(
            (acc, { value }) => acc - value,
            dbEnvelope.value
          );

          await db.envelopes.update(envelopeId, {
            value: newEnvelopeValue,
          });
          await db.transactions
            .bulkDelete(transactionIds)
            .then(num => console.log('transactions deleted', num));
        })
        .then(refreshEnvelopes);
    },
  }
);
