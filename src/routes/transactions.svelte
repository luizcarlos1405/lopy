<script>
  import Page from "../components/Page.svelte";
  import EnvelopeTransactions from "../components/EnvelopeTransactions.svelte";
  import { actions } from "$lib/stores";

  const transactions = $actions.getAllTransactionsPaginated({ $actions });
</script>

<Page>
    {#await transactions.transactions then transactions}
      <EnvelopeTransactions {transactions} />
    {/await}
</Page>
