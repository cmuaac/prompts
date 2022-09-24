<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';

  export let value;
</script>

<Textfield bind:value={value} label="Filter Activities">
  <Icon slot="leadingIcon"><span>🔍</span></Icon>
  <HelperText slot="helper">Search by name, description, or tag</HelperText>
</Textfield>

<style>
  span {
    font-style: normal;
  }
</style>