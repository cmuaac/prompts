<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import fuzzy from 'fuzzy';
  import Item from './item.svelte';

  export let items;
  export let filter_text;

  $: filtered_items = fuzzy.filter(
    filter_text,
    items,
    { extract: (item) => item.name + ' ' + item.desc + ' ' + item.tags.join(' ') },
  ).map((item) => {
    // This works around a bug in fuzzy
    if (item.original) {
      return item.original;
    } else {
      return item;
    }
  })
</script>

<LayoutGrid>
  {#each filtered_items as item}
    <Cell class="item">
      <Item {...item} />
    </Cell>
  {/each}
</LayoutGrid>

<style>
  .item {
    max-width: 35em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>