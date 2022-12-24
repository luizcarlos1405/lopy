<script>
  import { formatMoney } from '$lib/helpers';
  import { longpress } from '$lib/longpress';
  import { scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';
  import { DateTime } from 'luxon';
  import { envelopes } from '$lib/stores/envelopes';
  import keyBy from 'lodash/keyBy';

  export let showEnvelope = false;
  export let transactions = [];
  export let selectedTransactionsById = {};

  $: envelopeById = keyBy($envelopes, '_id');
</script>

<div class="flex w-full flex-col space-y-3">
  {#each transactions as transaction (transaction._id)}
    {@const envelope = envelopeById[transaction.envelopeId]}

    <div
      class="space-y-1 self-stretch rounded-3xl p-4"
      class:in={transaction.value >= 0}
      class:out={transaction.value < 0}
      class:selected={selectedTransactionsById[transaction._id]}
      in:scale|local={{ easing: cubicOut }}
      out:scale|local={{ easing: cubicOut }}
      animate:flip
      use:longpress={300}
      on:longpress={() => {
        if (!selectedTransactionsById[transaction._id]) {
          selectedTransactionsById[transaction._id] = transaction;
          return;
        }
        const { [transaction._id]: removedKey, ...newSelection } =
          selectedTransactionsById;
        selectedTransactionsById = newSelection;
      }}
    >
      {#if transaction.comment}
        <div class="text-base leading-5 opacity-80">
          {transaction.comment}
        </div>
      {/if}
      <div class="flex text-xs">
        <span class="font-mono font-semibold">
          {formatMoney(transaction.value, { showSign: false })}
        </span>
        {#if showEnvelope}
          <span class="opacity-80 ml-1">
            { transaction.value < 0 ? " removed from" : " added to" }
            {envelope?.emoji}
            {envelope?.name}
          </span>
        {/if}
        <span class="opacity-80 ml-auto">
          {DateTime.fromMillis(transaction.date).toLocaleString(
            DateTime.DATETIME_SHORT
          )} 
        </span>
      </div>
    </div>
  {/each}
</div>

<style>
  .in {
    @apply bg-success text-success-content;
  }

  .out {
    @apply bg-error text-error-content;
  }

  .selected {
    @apply outline outline-2 outline-white/80;
  }
</style>
