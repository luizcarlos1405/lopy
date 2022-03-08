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

<div class="flex flex-col space-y-2 text-dark w-full p-4">
  {#each transactions as transaction (transaction._id)}
    <div
      class="transaction relative"
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
      <div class:hidden={!transaction.comment} class="whitespace-pre-wrap">
        {transaction.comment}
      </div>
      <div class="flex justify-between">
        <span class="font-mono">
          {formatMoney(transaction.value, { showSign: false })}
        </span>
        <span>
          {DateTime.fromSeconds(transaction.date).toLocaleString(
            DateTime.DATETIME_MED
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
  .selected {
  }

  .transaction {
    display: inline-flex;
    flex-direction: column;
    gap: 1em;

    padding: 1em;
    width: 100%;
    border-radius: 1em;
    box-sizing: border-box;

    color: var(--color-text-dark);
  }

  .in {
    background: var(--color-transaction-in);
  }

  .out {
    background: var(--color-transaction-out);
  }
</style>
