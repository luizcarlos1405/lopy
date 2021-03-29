import { readable, writable } from 'svelte/store';
import { isClient } from './helpers';
import { v4 as uuid } from 'uuid';

export const envelopes = writable([]);
let envelopesCollection;

if (isClient()) {
  const initDb = async () => {
    const db = new zango.Db('lopy', {
      envelopes: ['_id'],
    });
    envelopesCollection = db.collection('envelopes');
    const dbEnvelopes = await envelopesCollection
      .find({})
      .sort({ order: 1 })
      .toArray();

    console.log('dbEnvelopes', dbEnvelopes);

    envelopes.set(dbEnvelopes);

    return envelopesCollection;
  };

  initDb();
}

const refreshEnvelopes = () =>
  envelopesCollection
    .find({})
    .sort({ order: 1 })
    .toArray()
    .then(dbEnvelopes => {
      envelopes.set(dbEnvelopes);
    });

export const actions = readable({
  saveEnvelope: ({ _id, ...envelope }) => {
    const result = _id
      ? envelopesCollection.update({ _id }, { $set: envelope })
      : envelopesCollection.insert({
          _id: uuid(),
          transactions: [],
          value: 0,
          ...envelope,
        });
    result.then(refreshEnvelopes);

    return result;
  },
  deleteEnvelope: selector => {
    const result = envelopesCollection.remove(selector);
    result.then(refreshEnvelopes);

    return result;
  },
  reorderEnvelopes: async envelopes => {
    console.log('envelopes to reorder', envelopes);
    const result = envelopes.map(({ _id }, index) =>
      envelopesCollection.update({ _id }, { $set: { order: index } })
    );
    Promise.all(result).then(refreshEnvelopes);

    return result;
  },
  saveTransaction: async (transaction, envelopeId) => {
    const { transactions } = await envelopesCollection.findOne(
      { _id: envelopeId },
      { fields: { transactions: 1 } }
    );
    const result = envelopesCollection.update(
      { _id: envelopeId },
      {
        $set: {
          transactions: [{ _id: uuid(), ...transaction }, ...transactions],
        },
        $inc: { value: transaction.value },
      }
    );
    result.then(refreshEnvelopes);

    return result;
  },
  deleteTransactions: async (indexes, envelopeId) => {
    const { transactions } = await envelopesCollection.findOne(
      { _id: envelopeId },
      { fields: { transactions: 1 } }
    );
    const newTransactions = transactions.filter(
      (_, index) => indexes.indexOf(`${index}`) < 0
    );
    const valueCorrection = indexes
      .map(index => transactions[index])
      .reduce((acc, { value }) => acc - value, 0);
    const result = envelopesCollection.update(
      { _id: envelopeId },
      {
        $set: { transactions: newTransactions },
        $inc: { value: valueCorrection },
      }
    );
    result.then(refreshEnvelopes);

    return result;
  },
});
