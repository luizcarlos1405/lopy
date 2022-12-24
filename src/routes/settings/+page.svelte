<script>
  import { ChevronLeftIcon } from 'svelte-feather-icons';
  import { config } from '$lib/notionStore';

  const handleBackClicked = () => {
    window.history.back();
  };

  const handleSubmit = async event => {
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);

    if (values.token && values.pageId) {
      localStorage.setItem('token', values.token);
      localStorage.setItem('pageId', values.pageId);

      const { transactionsDatabaseId, envelopesDatabaseId } = await fetch(
        `${config.apiEndpoint}notion-databases`,
        {
          headers: {
            pageId: values.pageId,
            authorization: values.token,
          },
        }
      ).then(async response => await response.json());

      localStorage.setItem('transactionsDatabaseId', transactionsDatabaseId);
      localStorage.setItem('envelopesDatabaseId', envelopesDatabaseId);

      window.history.back();
    }
  };
</script>

<div class="space-y-10 p-8 text-neutral-content">
  <button class="btn btn-ghost btn-circle btn-sm" on:click={handleBackClicked}>
    <ChevronLeftIcon size="30" />
  </button>
  <div>
    <h1 class="text-2xl">
      These settings serve to connect to a notion page and are very experimental
    </h1>
    <p class="text-sm">
      The settings will disappear when you come back because they should be kept
      secret
    </p>
  </div>

  <form class="flex flex-col space-y-4" on:submit|preventDefault={handleSubmit}>
    <input class="input" name="token" placeholder="Token" type="text" />
    <input class="input" name="pageId" placeholder="Page ID" type="text" />
    <button class="btn btn-primary self-end" type="submit">Save</button>
  </form>
</div>
