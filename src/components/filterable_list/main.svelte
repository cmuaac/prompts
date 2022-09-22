<script>
  import Loader from './async_loader.svelte';
  import SearchBar from '../searchbar.svelte';

  let filter_text = undefined;
</script>

<SearchBar bind:value={filter_text} />
<Loader {filter_text} />