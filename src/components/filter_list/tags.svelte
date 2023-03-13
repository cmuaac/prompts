<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Chip, { Set, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let art_tags = ['Figure Drawing', 'Portraits', 'Observational'];
  let levels_tags = ['Level0', 'Level1', 'Level2'];
  let misc_tags = ['Chill', 'Group'];
  export let selected = [];

  let visible = true;
  let buttonLabel = (visible) => {
    return visible ? "SHOW TAGS" : "HIDE TAGS"
  }
</script>

<div>
  <Button on:click={() => visible = !visible}>
    <Label>{buttonLabel(visible)}</Label>
  </Button>
</div>

<div class:visible={visible}>
  <Paper>
    <Content>
      <h4>Art Categories</h4>
      <Set chips={art_tags} let:chip filter bind:selected>
        <Chip {chip} touch>
          <Text>{chip}</Text>
        </Chip>
      </Set>

      <h4>Levels</h4>
      <Set chips={levels_tags} let:chip filter bind:selected>
        <Chip {chip} touch>
          <Text>{chip}</Text>
        </Chip>
      </Set>

      <h4>Misc</h4>
      <Set chips={misc_tags} let:chip filter bind:selected>
        <Chip {chip} touch>
          <Text>{chip}</Text>
        </Chip>
      </Set>

    </Content>
  </Paper>
</div>

<style>
  h4 {
    margin-bottom: .5rem;
  }

  .visible {
    display: none;
  }
</style>


