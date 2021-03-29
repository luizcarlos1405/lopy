<script context="module">
  export const preload = async ({ params }) => {
    return params;
  };
</script>

<script>
  import EnvelopeTransactions from '../../components/EnvelopeTransactions.svelte';
  import { envelopes, actions } from '../../js/stores';
  import TopBar from '../../components/TopBar.svelte';
  import MoneyInput from '../../components/form/MoneyField.svelte';
  import Button from '../../components/Button.svelte';
  import TextField from '../../components/form/TextField.svelte';
  import { goto } from '@sapper/app';
  import { TrashIcon, Edit2Icon } from 'svelte-feather-icons';
  import Page from '../../components/Page.svelte';

  export let id;

  const handleMoneyInputEnterPressed = () => {
    document?.getElementById('comment-input').focus();
  };

  let selectedTransactions = {};
  $: selectedIndexes = Object.keys(selectedTransactions);
  $: envelope = $envelopes.find(envelope => id === envelope._id);

  let transaction = {
    value: 0,
    comment: '',
  };
  let isNegative = true;
</script>

<TopBar>
  LOPY
  {#if selectedIndexes?.length >= 1}
    <span
      on:click="{async () => {
        $actions.deleteTransactions(selectedIndexes, id).then(() => {
          selectedTransactions = {};
        });
      }}"
    >
      <TrashIcon size="20" />
    </span>
  {:else}
    <span
      class="cursor-pointer flex space-x-2 items-end"
      on:click="{() => goto(`envelope/edit/${id}`)}"
    >
      <Edit2Icon size="20" />
    </span>
  {/if}
</TopBar>

<Page>
  <div class="flex flex-col pt-20 h-full w-full px-4 overflow-y-scroll">
    <EnvelopeTransactions bind:envelope bind:selectedTransactions />
    <div
      style="min-height: calc(2rem + 192px)"
      class="cursor-default text-background select-none w-full"
    >
      fake padding
    </div>
  </div>

  <div
    class="absolute bottom-4 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4"
  >
    <MoneyInput
      bind:isNegative
      bind:value="{transaction.value}"
      on:enterPressed="{handleMoneyInputEnterPressed}"
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
          goto('/');
        }}"
        >Cancel
      </Button>
      <Button
        class="w-20"
        on:click="{async () => {
          if (transaction.value) {
            await $actions.saveTransaction(transaction, envelope._id);
            transaction.value = 0;
            transaction.comment = '';
          }
        }}">{isNegative ? 'Spend' : 'Save'}</Button
      >
    </div>
  </div>
</Page>
