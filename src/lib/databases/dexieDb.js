import Dexie from 'dexie';
import { browser } from '$app/environment';

export const dexieDb = browser && new Dexie('lopy');

if (browser) {
  dexieDb.version(2).stores({
    envelopes: '_id,order',
    transactions: '_id,envelopeId,date',
  });
}
