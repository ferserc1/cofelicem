<script>
    import ImagePicker from "$lib/components/ImagePicker.svelte";

    export let data;

    let imageName = "";
    let uploading = false;

    const onImagePicked = async imageData => {
        uploading = true;
        imageName = imageData.name;
        await uploadImage(imageData.image);
        uploading = false;
    }

    async function uploadImage(imgBase64) {
        const data = {};
        const imgData = imgBase64.split(',');
        data.image = imgData[1];
        data.fileName = imageName;
        await fetch(`/admin/colony/upload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const getImagePath = (fileName) => `/images/${fileName}`;

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
                {#if cat.imageName }
                    <div>
                        <img src={getImagePath(cat.imageName)} alt={cat.name + "photo"} />
                    </div>
                {/if}
            </li>
        </form>
    {/each}
</ul>

<form
    method="POST"
    action="?/create">
    <div class="form-field">
        <label for="name">Nombre (y nombres alternativos):</label>
        <input type="text" name="name" required>
        <input type="text" name="name2" required>
        <input type="text" name="name3" required>
    </div>
    <div class="form-field image-picker">
        <label for="image">Foto:</label>
        <input type="hidden" name="imageName" bind:value={imageName} />
        <ImagePicker imageProcessed={onImagePicked} acceptedTypes=".png,.jpg,.jpeg" buttonText="Seleccionar Imagen" maxImageWidth={600} />
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

{#if uploading}
    <div class="uploading">
        <h1>Subiendo imagen...</h1>
    </div>
{/if}

<style>
    label {
        display: block;
    }

    li img {
        max-width: 200px;
    }

    .image-picker {
        width: 250px;
    }

    .uploading {
        position: fixed;
        z-index: 100000;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background-color: rgba(255,255,255,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>