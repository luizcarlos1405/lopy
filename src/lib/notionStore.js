import { writable } from 'svelte/store';
import { browser } from '$app/env';

const config = browser
  ? {
      token: localStorage.getItem('token'),
      pageId: localStorage.getItem('pageId'),
      transactionsDatabaseId: localStorage.getItem('transactionsDatabaseId'),
      envelopesDatabaseId: localStorage.getItem('envelopesDatabaseId'),
    }
  : {};

export const notionStore = writable({
  envelopes: [],
});

export const fetchEnvelopes = async () => {
  const headers = new Headers();
  headers.append('procedure', 'listEnvelopes');
  headers.append('Authorization', `Bearer ${config.token}`);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    envelopesDatabaseId: config.envelopesDatabaseId,
  });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
  };

  const envelopes = await fetch(
    'http://localhost:8000/api/notion-procedures',
    requestOptions
  )
    .then(response => response.json())
    .catch(error => (console.error(error), []));

  console.log(envelopes);
  notionStore.update(currentState => ({ ...currentState, envelopes }));
};

export const saveTransaction = async ({ envelopeId, transaction }) => {
  const headers = new Headers();
  headers.append('procedure', 'addTransaction');
  headers.append('Authorization', `Bearer ${config.token}`);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    transactionsDatabaseId: config.transactionsDatabaseId,
    envelopePageId: envelopeId,
    description: transaction.comment || '',
    value: transaction.value / 100.00,
  });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
  };

  await fetch('http://localhost:8000/api/notion-procedures', requestOptions)
    .then(response => response.json())
    .catch(error => (console.error(error), []));

  await fetchEnvelopes();
};
