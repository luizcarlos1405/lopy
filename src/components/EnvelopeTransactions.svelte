<script>
  import { formatMoney } from "$lib/helpers";
  import { longpress } from "$lib/longpress";
  import { scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { flip } from "svelte/animate";
  import { DateTime } from "luxon";

  export let transactions = [];
  export let selectedTransactionsById = {};
</script>

<div class="flex flex-col space-y-2 w-full p-4">
  {#each transactions as transaction (transaction._id)}
    <div
      class="p-4 rounded-3xl space-y-2 self-stretch"
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
        <div class="text-base">
          {transaction.comment}
        </div>
      {/if}
      <div class="flex justify-between text-sm">
        <span class="font-mono font-semibold">
          {formatMoney(transaction.value, { showSign: false })}
        </span>
        <span class="opacity-70">
          {DateTime.fromSeconds(transaction.date).toLocaleString(
            DateTime.DATETIME_SHORT
          )}
        </span>
      </div>
      {#if selectedTransactionsById[transaction._id]}
        <span
          transition:scale
          class="bg-background absolute right-2 top-2 w-4 h-4 rounded-full"
        />
      {/if}
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
</style>
