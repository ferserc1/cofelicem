<script>

    export let data;
    
</script>

<h1>Páginas</h1>

<p><a href="/admin">Volver</a></p>

<ul>
    {#each data.pages as page}
        <form
            method="POST"
            action="?/remove">
            <input type="hidden" name="path" value={page.path}>
            <button type="submit">X</button>
            <li>{page.title}</li>
        </form>
    {/each}
</ul>

<form
    method="POST"
    action="?/create">
    <div class="form-field">
        <label for="title">Page title:</label>
        <input type="text" name="title" required>
    </div>
    <div class="form-field">
        <label for="path">Page identifier</label>
        <input type="text" name="path" required>
    </div>
    <div class="form-field">
        <label for="content">Page content (HTML):</label>
        <textarea name="content"></textarea>
    </div>
    <button type="submit">Create</button>
</form>

<style>
    label {
        display: block;
    }
</style>