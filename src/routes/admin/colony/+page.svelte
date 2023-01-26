<script>
    import ImagePicker from "$lib/components/ImagePicker.svelte";
    import { enhance } from "$app/forms";
    import { uploadImage } from "$lib/components/utils.js";
    import TableHeader from "$lib/components/TableHeader.svelte";
    import TableRow from "$lib/components/TableRow.svelte";
    import TableCell from "$lib/components/TableCell.svelte";

    let imgPicker;

    export let data;

    let imageName = "";
    let uploading = false;

    const getImagePath = (fileName) => fileName ? `/images/${fileName}` : "";

    const headers = ["Foto", "Nombre", "Colonia", "Acciones"];

    const onImagePicked = async imageData => {
        uploading = true;
        imageName = imageData.name;
        await uploadImage(imageName,imageData.image);
        uploading = false;
    }

</script>

<h1>Censo</h1>

<p><a href="/admin">Volver</a></p>

<Table>
    <TableHeader>
        {#each headers as header, i}
            <TableCell numColumns={headers.length} role="columnheader">{header}</TableCell>
        {/each}
    </TableHeader>
    {#each data.colony as row}
        <TableRow>
            <TableCell numColumns={headers.length}>
                {#if row.imageName}
                    <img src={getImagePath(row.imageName)} alt={row.name}/>
                {/if}
            </TableCell>
            <TableCell numColumns={headers.length}>{row.name}</TableCell>
            <TableCell numColumns={headers.length}>{row.colony}</TableCell>
            <TableCell numColumns={headers.length}>
                <form method="POST" action="?/remove" use:enhance>
                    <input type="hidden" name="name" value={row.name} />
                    <button type="submit">Eliminar</button>
                </form>
                <button type="button" on:click={() => location.href = `/admin/colony/${row.name}`}>Editar</button>
            </TableCell>
        </TableRow>
    {/each}
</Table>

<form
    method="POST"
    action="?/create"
    use:enhance={() => {
        imgPicker.clear();
    }}>
    <div class="form-field">
        <label for="name">Nombre:</label>
        <input type="text" name="name" required>
    </div>
    <div class="form-field">
        <label for="name">Nombre alternarivo 1:</label>
        <input type="text" name="name2">
    </div>
    <div class="form-field">
        <label for="name">Nombre alternativo 2:</label>
        <input type="text" name="name3">
    </div>
    <div class="form-field">
        <label for="image">Foto:</label>
        <input type="hidden" name="imageName" bind:value={imageName} />
        <div class="image-picker">
            <ImagePicker imageProcessed={onImagePicked} acceptedTypes=".png,.jpg,.jpeg" buttonText="Seleccionar Imagen" bind:this={imgPicker} maxImageWidth={600} />
        </div>
    </div>
    <div class="form-field">
        <label for="colony">Colonia:</label>
        <input type="text" name="colony">
    </div>
    <div class="form-field">
        <label for="description">Descripción:</label>
        <textarea name="description"></textarea>
    </div>
    <div class="form-buttons">
        <button type="submit">Añadir</button>
    </div>
</form>

{#if uploading}
    <div class="uploading">
        <h1>Subiendo imagen...</h1>
    </div>
{/if}

<style>

    li img {
        max-width: 200px;
    }

    .image-picker {
        display: inline-block;
        max-width: 50%;
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