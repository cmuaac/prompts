<script>
    export let value;
</script>

<div>
    <label for="searchbar">🔎</label>
    <input id="searchbar" placeholder="Filter prompts..." bind:value={value} />
</div>