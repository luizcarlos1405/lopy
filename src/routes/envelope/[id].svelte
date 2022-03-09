<script>
  import { page } from "$app/stores";
  import EnvelopeTransactions from "../../components/EnvelopeTransactions.svelte";
  import Envelope from "../../components/Envelope.svelte";
  import { actions } from "$lib/stores";
  import { isClient } from "$lib/helpers";
  import MoneyInput from "../../components/atoms/MoneyInput.svelte";
  import { goto } from "$app/navigation";
  import {
    TrashIcon,
    ClipboardIcon,
    CopyIcon,
    Edit2Icon,
  } from "svelte-feather-icons";
  import Page from "../../components/Page.svelte";
  import { scale } from "svelte/transition";
  import { ROUTES } from "$lib/constants";
  import { formatMoney } from "$lib/helpers";
  import { envelopes } from "$lib/stores";
  import yaml from "yaml";
  import { COPY_PASTE_DATE_FORMAT } from "../../lib/constants.js";

  const { id } = $page.params;

  let pasteInputRef = null;
  let descriptionInput = null;
  let moneyInput = null;
  let savedTransaction = null;
  let isPasting = false;

  // TODO: hide the form if it isn't writing/adding an entry
  $: isWriting =
    document.activeElement === moneyInput ||
    document.activeElement === descriptionInput;

  const handleMoneyInputEnterPressed = () => {
    document?.getElementById("comment-input").focus();
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
      pasteText = "";

      // LET THE GAMBIARRA BEGIN
      isPasting = false;
      transactionsToSave?.forEach(
        ({ envelope, value, date, ...pastedTransaction }) => {
          $actions
            .saveTransaction(
              {
                ...pastedTransaction,
                value: value * 100,
                date: DateTime.fromFormat(
                  date,
                  COPY_PASTE_DATE_FORMAT
                ).toSeconds(),
              },
              id
            )
            .then(async () => {
              selectedTransactionsById = {};
              transactionsPaginated = await transactionsPaginated.refresh();
            });
        }
      );
      return;
    }

    if (isClient() && transaction.value) {
      $actions
        .saveTransaction(transaction, id)
        .then(async (createdTransaction) => {
          transaction.value = 0;
          transaction.comment = "";
          transactionsPaginated = await transactionsPaginated.refresh();

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

  let transactionsPaginated = $actions
    ? $actions.getTransactionsPaginated({
        actions: $actions,
        envelopeId: id,
      })
    : {};

  let selectedTransactionsById = {};
  let transaction = {
    value: 0,
    comment: "",
  };
  let isNegative = true;
  let pasteText = "";

  $: envelope = $envelopes.find(({ _id }) => _id === id);
</script>

<Page hideBottomNavigation>
    <span class="sticky top-8 mb-4 z-10">
      <Envelope {envelope} />
    </span>
    {#await transactionsPaginated.transactions then transactions}
    <span class="mb-4">
      <EnvelopeTransactions {transactions} bind:selectedTransactionsById />
    </span>
    {/await}
    <div
      class="sticky mt-auto bottom-8 box-border flex flex-col space-y-4 bg-base-300 rounded-3xl p-6"
    >
      {#if isPasting}
        <textarea
          id="comment-input"
          rows="7"
          class="textarea ease-linear leading-4 resize-none self-stretch"
          placeholder="Transaction values"
          bind:value={pasteText}
          bind:this={pasteInputRef}
        />
      {:else}
        <div class="inline-flex self-end gap-4">
          {#if savedTransaction || Object.keys(selectedTransactionsById)?.length}
            <button
              class="text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"
              transition:scale|local={{ duration: 300 }}
              on:click={handleCopyToClipboardClicked}
            >
              <CopyIcon size="20" strokeWidth="3" />
              Copy
            </button>
          {/if}
          <button
            class="text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"
            on:click={handlePasteClicked}
          >
            <ClipboardIcon size="20" strokeWidth="3" />
            Paste
          </button>
        </div>
        <MoneyInput
          bind:isNegative
          bind:value={transaction.value}
          on:enterPressed={handleMoneyInputEnterPressed}
          bind:inputRef={moneyInput}
        />
        <textarea
          bind:value={transaction.comment}
          bind:this={descriptionInput}
          id="comment-input"
          rows="3"
          class="textarea ease-linear leading-4 resize-none"
          placeholder="Description"
        />
      {/if}
      <div class="flex justify-around">
        <button class="btn btn-outline w-22" on:click={handleBackClicked}>
          Back
        </button>
        <button
          class:swapActive={isNegative && !isPasting}
          class="swap btn btn-primary w-22"
          on:click={handleSaveTransaction}
        >
          <span class="swap-on">Remove</span>
          <span class="swap-off">Add</span>
        </button>
      </div>
    </div>
</Page>

<style>
  .swapActive {
    @apply swap-active;
  }
</style>
