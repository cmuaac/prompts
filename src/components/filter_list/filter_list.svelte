<script>
  import Loader from './async_loader.svelte';
  import SearchBar from '../searchbar.svelte';
  import TagFilter from './tags.svelte';

  let filter_text = "";
  let filter_tags = [];
</script>

<SearchBar bind:value={filter_text} />
<TagFilter bind:selected={filter_tags}/>
<Loader {filter_text} {filter_tags}/>