<script>
  import Card, { Content, Actions } from '@smui/card';
  import Chip, { Set, Text } from '@smui/chips';

  export let name;
  export let desc;
  export let tags;
</script>

<Card>
  <Content>
    <h3>{name}</h3>
    <p>{desc}</p>
  </Content>
  <Actions>
    <Set chips={tags} let:chip nonInteractive>
      <Chip {chip}>
        <Text>{chip}</Text>
      </Chip>
    </Set>
  </Actions>
</Card>