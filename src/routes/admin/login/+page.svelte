<script>
    import { enhance } from "$app/forms";

    export let form;
</script>


<form method="POST" action="?/login" use:enhance>
    <div class="form-field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required/>
    </div>
    <div class="form-field">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
    </div>

    <div class="form-buttons">
        <button type="submit">Login</button>
    </div>

    {#if form?.message}
        <div class="error">
            {form.message}
        </div>
    {/if}
</form>

<style>
    .error {
        color: red;
    }
</style>