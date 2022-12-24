<script>
  import EnvelopeTransactions from '../../components/EnvelopeTransactions.svelte';
  import BottomNavigation from '../../components/atoms/BottomNavigation.svelte';
  import { actions } from '$lib/stores';

  const transactions =
    $actions?.getAllTransactionsPaginated?.({ $actions }) || [];
</script>

<div class="layout-template-rows grid-layout min-h-full">
  <div class="col-start-2 col-end-12 mt-8 md:col-start-6">
    {#await transactions.transactions then transactions}
      <EnvelopeTransactions {transactions} />
    {/await}
  </div>

  <div
    class="sticky bottom-0 col-span-full mt-8 md:col-span-3 md:col-start-2 md:row-start-1"
  >
    <BottomNavigation />
  </div>
</div>

<style>
  .layout-template-rows {
    grid-template-rows: 1fr min-content;
  }
</style>
