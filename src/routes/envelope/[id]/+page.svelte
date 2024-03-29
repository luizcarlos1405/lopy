<script>
  import { page } from '$app/stores';
  import EnvelopeTransactions from '../../../components/EnvelopeTransactions.svelte';
  import Envelope from '../../../components/atoms/Envelope.svelte';
  import { envelopes } from '$lib/stores/envelopes';
  import {
    queryTransactions,
    deleteTransactions,
    saveTransaction,
  } from '$lib/stores/transactions';
  import { isClient } from '$lib/helpers';
  import MoneyInput from '../../../components/atoms/MoneyInput.svelte';
  import { ClipboardIcon, CopyIcon, Trash2Icon } from 'svelte-feather-icons';
  import { DateTime } from 'luxon';
  import { scale } from 'svelte/transition';
  import yaml from 'yaml';
  import { COPY_PASTE_DATE_FORMAT } from '../../../lib/constants.js';

  const { id } = $page.params;

  let pasteInputRef = null;
  let moneyInput = null;
  let savedTransaction = null;
  let isPasting = false;

  $: envelope = $envelopes.find(({ _id }) => _id === id) || {};
  const transactions = queryTransactions(id);

  const handleMoneyInputEnterPressed = () => {
    document?.getElementById('comment-input').focus();
  };
  const handleDelete = async () => {
    await deleteTransactions(Object.keys(selectedTransactionsById), id);
    selectedTransactionsById = {};
  };
  const handleSaveTransaction = () => {
    if (isPasting) {
      const transactionsToSave = yaml.parse(pasteText);
      pasteText = '';

      // LET THE GAMBIARRA BEGIN
      isPasting = false;
      transactionsToSave?.forEach(
        ({ envelope, value, date, ...pastedTransaction }) => {
          saveTransaction(
            {
              ...pastedTransaction,
              value: value * 100,
              date: DateTime.fromFormat(
                date,
                COPY_PASTE_DATE_FORMAT
              ).toSeconds(),
            },
            id
          ).then(async () => {
            selectedTransactionsById = {};
          });
        }
      );
      return;
    }

    if (isClient() && transaction.value) {
      saveTransaction(transaction, id).then(async createdTransaction => {
        transaction.value = 0;
        transaction.comment = '';

        moneyInput?.focus();
        savedTransaction = createdTransaction;
        selectedTransactionsById = {};
      });
    }
  };

  const handleBackClicked = () => {
    if (isPasting) {
      isPasting = false;
      return;
    }
    window.history.back();
  };
  const handleCopyToClipboardClicked = () => {
    const transactionsToCopy = savedTransaction
      ? [savedTransaction]
      : Object.values(selectedTransactionsById);

    navigator.clipboard
      .writeText(
        yaml.stringify(
          transactionsToCopy.map(({ envelopeId, _id, ...relevantFields }) => ({
            envelope: envelope?.name,
            ...relevantFields,
            value: relevantFields.value / 100,
            date: DateTime.fromSeconds(relevantFields.date).toFormat(
              COPY_PASTE_DATE_FORMAT
            ),
          }))
        )
      )
      .then(() => {
        savedTransaction = null;
        selectedTransactionsById = {};
      })
      .catch(console.error);
  };
  const handlePasteClicked = async () => {
    isPasting = true;
    pasteInputRef?.focus();
  };

  let selectedTransactionsById = {};
  let transaction = {
    value: 0,
    comment: '',
  };
  let isNegative = true;
  let pasteText = '';
</script>

<div class="layout-template-rows grid-layout min-h-full">
  <span class="sticky top-4 z-10 col-start-2 col-end-12 my-4">
    <Envelope {envelope} />
  </span>
  <span class="col-start-2 col-end-12 mb-4">
    <EnvelopeTransactions
      transactions={$transactions}
      bind:selectedTransactionsById
    />
  </span>

  <!-- FORM AND ACTIONS -->
  <div
    class="sticky bottom-0 col-span-full mt-8 box-border flex flex-col space-y-4 rounded-t-3xl bg-base-100 p-6"
  >
    {#if isPasting}
      <textarea
        class="textarea resize-none self-stretch bg-base-200 leading-4 ease-linear"
        id="comment-input"
        rows="7"
        placeholder="Transactions"
        bind:value={pasteText}
        bind:this={pasteInputRef}
      />
    {:else}
      <div class="inline-flex gap-4 self-end">
        {#if savedTransaction || Object.keys(selectedTransactionsById)?.length}
          <button
            class="text-dark inline-flex items-center gap-2 rounded-full py-2 px-2 font-bold"
            transition:scale|local={{ duration: 300 }}
            on:click={handleCopyToClipboardClicked}
          >
            <CopyIcon size="20" strokeWidth="3" />
            Copy
          </button>
        {/if}
        <span
          class="swap swap-flip"
          class:swapActive={Object.keys(selectedTransactionsById).length}
        >
          <button
            class="text-dark swap-on inline-flex items-center gap-2 rounded-full py-2 px-2 font-bold"
            on:click={handleDelete}
          >
            <Trash2Icon size="20" strokeWidth="3" />
            Delete
          </button>
          <button
            class="text-dark swap-off inline-flex items-center gap-2 rounded-full py-2 px-2 font-bold"
            on:click={handlePasteClicked}
          >
            <ClipboardIcon size="20" strokeWidth="3" />
            Paste
          </button>
        </span>
      </div>
      <MoneyInput
        bind:isNegative
        bind:value={transaction.value}
        on:enterPressed={handleMoneyInputEnterPressed}
        bind:inputRef={moneyInput}
      />
      <textarea
        class="textarea resize-none bg-base-200 leading-4 ease-linear"
        bind:value={transaction.comment}
        id="comment-input"
        rows="3"
        placeholder="Comment"
      />
    {/if}

    <div class="flex justify-around">
      <button class="w-22 btn-outline btn" on:click={handleBackClicked}>
        Back
      </button>
      <button
        class:swapActive={isNegative && !isPasting}
        class="w-22 swap btn-primary btn"
        on:click={handleSaveTransaction}
      >
        <span class="swap-on">Spend</span>
        <span class="swap-off">Save</span>
      </button>
    </div>
  </div>
</div>

<style>
  .layout-template-rows {
    grid-template-rows: min-content 1fr min-content;
  }

  .swapActive {
    @apply swap-active;
  }
</style>
