<script>
  import Container from './container.svelte';

  let items = [
    {
      name: "Foo",
      description: "The classic name",
    },
    {
      name: "Bar",
      description: "The classic counterpart to Foo",
    },
    {
      name: "Baz",
      description: "A controversial third choice",
    },
    {
      name: "Qux",
      description: "A rarely-seen fourth option",
    },
    {
      name: "FooBar",
      description: "What in the"
    }
  ];

  export let filter_text;
</script>

<Container {items} {filter_text} />