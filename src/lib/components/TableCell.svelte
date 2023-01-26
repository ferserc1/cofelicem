<script>
    export let numColumns = 0;
    export let role = "rowgroup"
</script>

<div class="flex-row" style={numColumns >0 ? `width: calc(100% / ${numColumns})` :  ""} role={role}>
    <slot />
</div>