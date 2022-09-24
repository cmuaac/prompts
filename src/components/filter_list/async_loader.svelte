<script>
  import Container from './container.svelte';


  async function loadItems() {
    const loc = document.location;
    const activities_url = loc.origin + '/prompts/activities.json';
    const response = await fetch(activities_url);
    return await response.json();
  };

  export let filter_text;
  export let filter_tags;
</script>

{#await loadItems()}
  <p>Loading activities...</p>
{:then items}
  <Container {items} {filter_text} {filter_tags}/>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}