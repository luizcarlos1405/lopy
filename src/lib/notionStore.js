import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const config = browser
  ? {
      token: localStorage.getItem('token'),
      pageId: localStorage.getItem('pageId'),
      transactionsDatabaseId: localStorage.getItem('transactionsDatabaseId'),
      envelopesDatabaseId: localStorage.getItem('envelopesDatabaseId'),
      apiEndpoint: 'https://lopy-notion-api.deno.dev/api/',
    }
  : {};

export const notionStore = writable({
  envelopes: [],
});

export const fetchEnvelopes = async () => {
  if (!browser) {
    return;
  }

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
    `${config.apiEndpoint}notion-procedures`,
    requestOptions
  )
    .then(response => response.json())
    .catch(error => (console.error(error), []));

  notionStore.update(currentState => ({ ...currentState, envelopes }));
};

export const fetchEnvelopeTransactions = async ({ envelopeId }) => {
  const headers = new Headers();
  headers.append('procedure', 'listEnvelopeTransactions');
  headers.append('Authorization', `Bearer ${config.token}`);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    transactionsDatabaseId: config.transactionsDatabaseId,
    envelopePageId: envelopeId,
  });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
  };

  const transactions = await fetch(
    `${config.apiEndpoint}notion-procedures`,
    requestOptions
  )
    .then(response => response.json())
    .catch(error => (console.error(error), []));

  notionStore.update(currentState => ({
    ...currentState,
    transactionsByEnvelopeId: {
      ...currentState.transactionsByEnvelopeId,
      [envelopeId]: transactions,
    },
  }));
};

export const saveTransaction = async ({ envelopeId, transaction }) => {
  notionStore.update(currentState => {
    // SAVING
    const headers = new Headers();
    headers.append('procedure', 'addTransaction');
    headers.append('Authorization', `Bearer ${config.token}`);
    headers.append('Content-Type', 'application/json');

    const body = JSON.stringify({
      transactionsDatabaseId: config.transactionsDatabaseId,
      envelopePageId: envelopeId,
      comment: transaction.comment || '',
      value: transaction.value / 100.0,
    });

    const requestOptions = {
      method: 'POST',
      headers,
      body,
    };

    fetch(`${config.apiEndpoint}notion-procedures`, requestOptions)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        // ROLLBACK
        notionStore.update(() => currentState);
      });

    // OPTIMISTIC UI
    const envelopeIndex = currentState.envelopes.findIndex(
      ({ _id }) => _id === envelopeId
    );

    if (envelopeIndex < 0) {
      return currentState;
    }

    const transactions = [
      {
        _id: `optimistic-ui-${Math.random()}`,
        date: new Date().getUTCMilliseconds(),
        ...transaction,
      },
      ...currentState.transactionsByEnvelopeId[envelopeId],
    ];
    currentState.envelopes[envelopeIndex].value += transaction.value;

    return {
      ...currentState,
      envelopes: currentState.envelopes,
      transactionsByEnvelopeId: {
        ...currentState.transactionsByEnvelopeId,
        [envelopeId]: transactions,
      },
    };
  });
};
