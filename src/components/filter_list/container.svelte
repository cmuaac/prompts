<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import fuzzy from 'fuzzy';
  import Item from './item.svelte';

  export let items;
  export let filter_text;
  export let filter_tags;

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
  }).map(item => {
      // or-based filtering based on tags, and sorting based on relevance
      let intersection = item.tags.filter(tag => filter_tags.includes(tag));
      return [item, intersection.length];
    }
  ).sort((i1, i2) => i2[1] - i1[1]).filter(i => {
      return (filter_tags.length == 0) ? true : i[1] > 0
    }
  ).map(i => i[0]);
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