import Dexie from 'dexie';

export const dexieDb = new Dexie('lopy');
dexieDb.version(2).stores({
  envelopes: '_id,order',
  transactions: '_id,envelopeId,date',
});

// Log current dexieDb content
console.log('dexieDb', dexieDb);
dexieDb.envelopes
  .toCollection()
  .toArray()
  .then(result => console.log('envelopes', result));
dexieDb.transactions
  .toCollection()
  .toArray()
  .then(result => console.log('transactions', result));

export const saveEnvelope = async ({ _id, ...envelope }) => {
  const envelopeCount = await dexieDb.envelopes.count();

  return _id
    ? dexieDb.envelopes.update(_id, envelope)
    : dexieDb.envelopes.add({
      _id: uuid(),
      order: envelopeCount,
      value: 0,
      ...envelope,
    });
};
