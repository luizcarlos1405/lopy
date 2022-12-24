import { liveQuery } from 'dexie';
import { dexieDb } from '../databases/dexieDb';
import { derived } from 'svelte/store';

// liveQuery() returns a reactive Svelte Store (or actually
// an Observable that happens to comply with the The Svelte Store Contract).
export const envelopes = derived(
  liveQuery(async () => dexieDb.envelopes.toCollection().toArray()),
  array => array || []
);

export const saveEnvelope = async ({ _id, ...envelope }) => {
  const envelopeCount = await dexieDb.envelopes.count();

  return _id
    ? dexieDb.envelopes.update(_id, envelope)
    : dexieDb.envelopes.add({
      _id: crypto.randomUUID(),
      order: envelopeCount,
      value: 0,
      ...envelope,
    });
}

export const deleteEnvelope = ({ _id }) =>
  dexieDb.envelopes.where({ _id }).delete();

export const reorderEnvelopes = async orderedEnvelopes => {
  dexieDb.transaction('rw', dexieDb.envelopes, async () =>
    orderedEnvelopes.map(({ _id }, index) =>
      dexieDb.envelopes.update(_id, { order: index })
    )
  );
};

