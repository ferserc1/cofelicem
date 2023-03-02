<script>
    export let data;

    let colony = data.colony;

    const rotations = [2.2,3.4,1.1,-2.5,-1.2,-2.9,1.8,-1.9,1.5];

</script>

<h1>Censo</h1>

<div class="colony-items">
    {#each colony as cat, i}
        <div class="colony-cat">
            <article>
                <a href={`/censo/${cat.name}`}>
                    <div class="cat-image" style={`transform: rotate(${rotations[i%rotations.length]}deg)`}>
                        <img src={`/images/${cat.imageName}`} alt={cat.name}/>
                        <h2 class="cat-name handwritten-text">
                            {cat.name}
                            {#if cat.name2}
                                <span>/ {cat.name2}</span>
                            {/if}
                            {#if cat.name3}
                                <span>/ {cat.name3}</span>
                            {/if}
                        </h2>
                    </div>
                    <div class="colony">Colonia: {cat.colony}</div>
                </a>
            </article>
        </div>
    {/each}
</div>

<style>

    :root {
        --column-gap: 30px;
    }

    .colony-items {
        column-count: 1;
        column-gap: var(--column-gap);
    }

    article {
        width: calc(100% - var(--column-gap));
        margin-bottom: 10px;
        background-color: var(--color-bg-1);
        border: 1px solid var(--color-theme-1);
        padding: 20px;
        border-radius: 7px;
        break-inside: avoid;
    }

    @media (min-width: 600px) {
        .colony-items {
            column-count: 2;
        }
    }

    @media (min-width: 900px) {
        .colony-items {
            column-count: 3;
        }
    }

    @media (min-width: 1200px) {
        .colony-items {
            column-count: 4;
        }
    }

    .cat-image {
        width: 100%;
        box-sizing: border-box;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        background-color: white;
        border: 1px solid rgba(10,10,10,0.4);
        box-shadow: 2px 2px 5px 0px rgba(10, 10, 10, 0.4);
        margin-bottom: 10px;
    }

    .cat-image img {
        width: 100%;
    }

    h2 {
        color: var(--secondary-color);
        font-size: 1.1em;
        margin: 0px;
        padding: 0px;
    }

    .colony {
        color: var(--secondary-color)
    }
</style>
