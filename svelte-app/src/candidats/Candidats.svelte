<script>
  import { onMount } from 'svelte';
  import { ListHeader } from '../components';
  import CandidatList from './CandidatList.svelte';
  import { state, getCandidatsAction } from '../banquecvs';

  const { candidats } = state;

  let routePath = '/candidats';
  let title = 'Candidats';

  onMount(async () => await getCandidats());

  async function getCandidats() {
    await getCandidatsAction();
  }
</script>

<div class="content-container">
  <ListHeader {title} {routePath} on:refresh={getCandidats} />
  <div class="columns is-multiline is-variable">
    {#if candidats}
      <div class="column is-8">
        <CandidatList candidats={$candidats} />
      </div>
    {/if}
  </div>

</div>
