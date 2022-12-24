<script>
  import EnvelopeTransactions from '../../components/EnvelopeTransactions.svelte';
  import BottomNavigation from '../../components/atoms/BottomNavigation.svelte';
  import { queryTransactions } from '$lib/stores/transactions';
  import { envelopes } from '$lib/stores/envelopes';
  import groupBy from 'lodash/groupBy';

  const transactions = queryTransactions();
  $: envelopeById = groupBy($envelopes, '_id');
  $: console.log('envelopeById', envelopeById);
</script>

<div class="layout-template-rows grid-layout gap-8 min-h-full">
  <div class="col-start-2 col-end-12 mt-8 md:col-start-5">
    <EnvelopeTransactions showEnvelope transactions={$transactions} />
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
