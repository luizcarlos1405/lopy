<script context="module">
  export const preload = async ({ params }) => {
    return params;
  };
</script>

<script>
  import EnvelopeTransactions from '../../components/EnvelopeTransactions.svelte';
  import { actions } from '../../js/stores';
  import { isClient } from '../../js/helpers';
  import TopBar from '../../components/TopBar.svelte';
  import MoneyField from '../../components/form/MoneyField.svelte';
  import Button from '../../components/Button.svelte';
  import TextField from '../../components/form/TextField.svelte';
  import { goto } from '@sapper/app';
  import { TrashIcon, Edit2Icon } from 'svelte-feather-icons';
  import Page from '../../components/Page.svelte';
  import { scale } from 'svelte/transition';
  import { ROUTES } from '../../js/constants';

  export let id;

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
    if (isClient() && transaction.value) {
      $actions.saveTransaction(transaction, id).then(async () => {
        transaction.value = 0;
        transaction.comment = '';
        transactionsPaginated = await transactionsPaginated.refresh();
        console.log('moneyInput', moneyInput);

        moneyInput.focus();
      });
    }
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

  $: console.log(transaction);
</script>

<Page>
  <TopBar>
    LOPY
    {#if Object.keys(selectedTransactionsById).length >= 1}
      <span on:click="{handleDelete}">
        <TrashIcon size="20" />
      </span>
    {:else}
      <span
        class="cursor-pointer flex space-x-2 items-end"
        on:click="{() => goto(`${ROUTES.EDIT}/${id}`)}"
      >
        <Edit2Icon size="20" />
      </span>
    {/if}
  </TopBar>

  {#await transactionsPaginated.transactions then transactions}
    <EnvelopeTransactions
      transactions="{transactions}"
      bind:selectedTransactionsById
    />
  {/await}

  <div
    class="sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4"
  >
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
    <div class="flex justify-around text-dark">
      <Button
        class="w-20"
        on:click="{() => {
          goto(ROUTES.HOME);
        }}"
      >
        Back
      </Button>
      <Button class="w-20 relative" on:click="{handleSaveTransaction}">
        {#if isNegative}
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
