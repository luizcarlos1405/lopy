<script context="module">
  export const load = async ({ page }) => {
    return { props: page.params };
  };
</script>

<script>
  import EnvelopeTransactions from '../../components/EnvelopeTransactions.svelte';
  import { actions } from '$lib/stores';
  import { isClient } from '$lib/helpers';
  import TopBar from '../../components/TopBar.svelte';
  import MoneyField from '../../components/form/MoneyField.svelte';
  import Button from '../../components/Button.svelte';
  import TextField from '../../components/form/TextField.svelte';
  import { goto } from '$app/navigation';
  import {
    TrashIcon,
    ClipboardIcon,
    CopyIcon,
    Edit2Icon,
  } from 'svelte-feather-icons';
  import Page from '../../components/Page.svelte';
  import { scale } from 'svelte/transition';
  import { ROUTES } from '$lib/constants';
  import { formatMoney } from '$lib/helpers';
  import { envelopes } from '$lib/stores';
  import yaml from 'yaml';

  export let id = '';
  let pasteInputRef = null;
  let savedTransaction = null;
  let isPasting = false;

  const handleMoneyInputEnterPressed = () => {
    document?.getElementById('comment-input').focus();
  };
  const handleDelete = async () => {
    await $actions.deleteTransactions(
      Object.keys(selectedTransactionsById),
      id
    );
    selectedTransactionsById = {};
    transactionsPaginated = await transactionsPaginated.refresh();
  };
  const handleSaveTransaction = () => {
    if (isPasting) {
      const transactionsToSave = yaml.parse(pasteText);
      pasteText = '';

      // LET THE GAMBIARRA BEGIN
      isPasting = false;
      transactionsToSave?.forEach(({ envelope, ...pastedTransaction }) => {
        $actions.saveTransaction(pastedTransaction, id).then(async () => {
          selectedTransactionsById = {};
          transactionsPaginated = await transactionsPaginated.refresh();
        });
      });
      return;
    }

    if (isClient() && transaction.value) {
      $actions
        .saveTransaction(transaction, id)
        .then(async createdTransaction => {
          transaction.value = 0;
          transaction.comment = '';
          transactionsPaginated = await transactionsPaginated.refresh();

          moneyInput.focus();
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
          transactionsToCopy.map(
            ({ envelopeId, date, _id, ...relevantFields }) => ({
              envelope: envelope?.name,
              ...relevantFields,
            })
          )
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

  let moneyInput;
  let transactionsPaginated = $actions
    ? $actions.getTransactionsPaginated({
        actions: $actions,
        envelopeId: id,
      })
    : {};

  let selectedTransactionsById = {};
  let transaction = {
    value: 0,
    comment: '',
  };
  let isNegative = true;
  let pasteText = '';

  $: envelope = $envelopes.find(({ _id }) => _id === id);
</script>

<Page>
  <TopBar>
    {envelope?.name} |
    {formatMoney(envelope?.value)}
    {#if Object.keys(selectedTransactionsById).length >= 1}
      <span on:click="{handleDelete}" class="ml-auto">
        <TrashIcon size="20" />
      </span>
    {:else}
      <span
        class="cursor-pointer flex space-x-2 items-end ml-auto"
        on:click="{() => goto(`${ROUTES.EDIT}/${id}`)}"
      >
        <Edit2Icon size="20" />
      </span>
    {/if}
  </TopBar>

  <div class="pb-14">
    {#await transactionsPaginated.transactions then transactions}
      <EnvelopeTransactions
        transactions="{transactions}"
        bind:selectedTransactionsById
      />
    {/await}
  </div>
  <div
    class="sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4"
  >
    {#if isPasting}
      <div class="h-36">
        <TextField
          textarea
          id="comment-input"
          class="h-full bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"
          bind:value="{pasteText}"
          bind:inputRef="{pasteInputRef}"
        />
      </div>
    {:else}
      <div class="inline-flex self-end gap-4">
        {#if savedTransaction || Object.keys(selectedTransactionsById)?.length}
          <button
            class="text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"
            transition:scale|local="{{ duration: 300 }}"
            on:click="{handleCopyToClipboardClicked}"
          >
            <CopyIcon size="20" strokeWidth="3" />
            Copy
          </button>
        {/if}
        <button
          class="text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"
          on:click="{handlePasteClicked}"
        >
          <ClipboardIcon size="20" strokeWidth="3" />
          Paste
        </button>
      </div>
      <MoneyField
        bind:isNegative
        bind:value="{transaction.value}"
        on:enterPressed="{handleMoneyInputEnterPressed}"
        bind:inputRef="{moneyInput}"
      />
      <TextField
        textarea
        id="comment-input"
        class="bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"
        bind:value="{transaction.comment}"
      />
    {/if}
    <div class="flex justify-around text-dark">
      <Button class="w-20" on:click="{handleBackClicked}">Back</Button>
      <Button class="w-20 relative" on:click="{handleSaveTransaction}">
        {#if isNegative && !isPasting}
          <span
            class="absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2"
            transition:scale|local>Spend</span
          >
        {:else}
          <span
            class="absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2"
            transition:scale|local>Save</span
          >
        {/if}
      </Button>
    </div>
  </div>
</Page>
