<script>
    import { page } from '$app/stores';

    export let data;

    let cat = data.cat[0];
console.log(cat);
</script>

<article>
    <a href="/censo">Volver</a>

    <div class="photo">
        <img src={`/images/${cat.imageName}`} alt={cat.name} />
        <h1 class="handwritten-text">
            {cat.name}
            {#if cat.name2 }
            <span>/ {cat.name2}</span> 
            {/if}
            {#if cat.name3 }
            <span>/ {cat.name3}</span> 
            {/if}
        </h1>
    </div>
    {#if cat.colony}
        <p>Colonia: {cat.colony}</p>
    {/if}
    {#if cat.description}
        <p>Descripción: {cat.description}</p>
    {/if}
</article>

<style>
    .photo {
        width: 70%;
        border: 1px solid black;
        padding: 40px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 3px 3px 10px 0px rgba(40,40,40,0.9);
        transform: rotate(3deg);
        margin-top: 40px;
        margin-bottom: 90px;
    }

    .photo img {
        width: 100%;
    }

    .photo h1 {
        margin-top: 10px;
        margin-bottom: 0px;
    }

    
</style>
