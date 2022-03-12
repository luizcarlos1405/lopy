<script>
  import EnvelopeTransactions from "../components/EnvelopeTransactions.svelte";
  import BottomNavigation from '../components/atoms/BottomNavigation.svelte';
  import { actions } from "$lib/stores";

  const transactions = $actions?.getAllTransactionsPaginated?.({ $actions }) || [];
</script>

<div class="grid-layout min-h-full">
  <div class="col-start-2 col-end-12 mt-8">
    {#await transactions.transactions then transactions}
      <EnvelopeTransactions {transactions} />
    {/await}
  </div>

  <div class="mt-8 col-span-full sticky bottom-0">
    <BottomNavigation />
  </div>
</div>
