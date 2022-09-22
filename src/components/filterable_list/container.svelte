<script>
  import fuzzy from 'fuzzy';
    import AsyncLoader from './async_loader.svelte';
  import Item from './item.svelte';

  export let items;
  export let filter_text;

  $: filtered_items = fuzzy.filter(
      filter_text,
      items,
      { extract: (item) => item.name + item.description },
    );
</script>

<ul>
  {#each filtered_items as item}
    {#if item.original}
      <Item {...item.original} />
    {:else}
      <!-- This works around a bug in fuzzy -->
      <Item {...item} />
    {/if}
  {/each}
</ul>
