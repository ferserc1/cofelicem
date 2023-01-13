<script>

    export let data;

</script>

<h1>Admin colony</h1>

<ul>
    {#each data.colony as cat}
        <form
            method="POST"
            action="?/remove">
            <input type="hidden" name="name" value={cat.name}>
            <button type="submit">X</button>
            <li>
                {cat.name}
                {#if cat.name2}
                / {cat.name2}
                {/if}
                {#if cat.name3}
                / {cat.name3}
                {/if}
            </li>
        </form>
    {/each}
</ul>

<form
    method="POST"
    action="?/create">
    <div class="form-field">
        <label for="name">Nombre:</label>
        <input type="text" name="name" required>
    </div>
    <div class="form-field">
        <label for="colony">Colonia:</label>
        <input type="text" name="colony">
    </div>
    <div class="form-field">
        <label for="description">Descripción:</label>
        <textarea name="description"></textarea>
    </div>
    <button type="submit">Añadir</button>
</form>

<style>
    label {
        display: block;
    }
</style>