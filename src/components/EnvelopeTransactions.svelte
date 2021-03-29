<script>
  import { formatMoney } from '../js/helpers';
  import { longpress } from '../js/longpress';
  import { scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  export let envelope;
  export let selectedTransactions = {};
</script>

<div class="flex flex-col space-y-2 text-dark w-full">
  {#each envelope?.transactions || [] as transaction, index (transaction._id)}
    <div
      class="transaction relative"
      class:in="{transaction.value >= 0}"
      class:out="{transaction.value < 0}"
      class:selected="{selectedTransactions[index]}"
      in:scale|local="{{ easing: cubicOut }}"
      out:scale|local="{{ easing: cubicOut }}"
      animate:flip
      use:longpress="{300}"
      on:longpress="{() => {
        if (!selectedTransactions[index]) {
          selectedTransactions[index] = transaction;
          return;
        }
        const { [index]: removedKey, ...newSelection } = selectedTransactions;
        selectedTransactions = newSelection;
      }}"
    >
      <div class:hidden="{!transaction.comment}">{transaction.comment}</div>
      <div class="font-mono">
        {formatMoney(transaction.value, { showSign: false })}
      </div>
      {#if selectedTransactions[index]}
        <span
          transition:scale
          class="bg-background absolute right-2 top-2 w-4 h-4 rounded-full"
        ></span>
      {/if}
    </div>
  {:else}
    <div>No transactions yet.</div>
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
