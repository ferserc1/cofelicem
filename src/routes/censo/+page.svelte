<script>
    export let data;

    console.log(data);
</script>

<h1>Censo</h1>

<div class="colony-items">
    {#each data.colony as cat}
        <div class="colony-cat">
            <div class="cat-image"><img src={`/images/${cat.imageName}`} alt={cat.name}/></div>
            <div class="cat-name">
                {cat.name}
                {#if cat.name2}
                    <span>/ {cat.name2}</span>
                {/if}
                {#if cat.name3}
                    <span>/ {cat.name3}</span>
                {/if}
            </div>
            <div class="colony">Colonia: {cat.colony}</div>
        </div>
    {/each}
</div>

<style>
    .colony-items {
        display: grid;
    }

    .colony-cat {
        width: 200px;
    }

    .cat-image {
        width: 90%;
    }

    .cat-image img {
        width: 100%;
    }
</style>
