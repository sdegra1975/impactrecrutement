<script>
  import { CardContent } from '../components';

  export let candidats = [];
</script>

<div>
  {#if !candidats.length}
    <div>Loading data ...</div>
  {/if}
  <ul class="list">
    {#each candidats as { id, name, description }, i (id)}
      <li role="presentation">
        <div class="card">
          <CardContent {name} {description} />
        </div>
      </li>
    {/each}
  </ul>
</div>
