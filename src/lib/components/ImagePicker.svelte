<script>
    import catAvatar from "$lib/images/cat_avatar.svg";

    /*
        Props:
        placeholderImage: URL to the placeholder image
        buttonText: Text used to show in the "pick image" button
        acceptedTypes: valid types allowed. By default: .png,.jpg,.jpeg
        maxImageWidth: if greater than zero, the image will be reduced up to this width
        imagePicked: callback called when the image file is picked
            {
                name: the image file name,
                file: the image file, ready to be uploaded by an HTML form
            }
        imageProcessed: callback called when the image has been procesed
            {
                name: the image file name
                image: base64 text of the image.
                    - if the image is not reduced, the base64 text is the image itself
                    - if the image is reduced, the base64 text is the reduced image.
            }     
     */

    export let placeholderImage = catAvatar;
    export let buttonText = "Select image";
    export let acceptedTypes = ".png,.jpg,.jpeg";
    export let maxImageWidth = 0;  // 0: do not reduce image
    export let targetFormat = "image/jpeg"; // Solo aplicable si la imagen se reduce
    
    export let imagePicked = null;
    export let imageProcessed = null;

    let image = "";

    let fileInput;
    let files;

    export const clear = () => {
        image = "";
        files = [];
    }

    function processImage(file) {
        if (typeof(imagePicked) === "function") {
            imagePicked({
                name: file.name,
                file
            });
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async e => {
            image = e.target.result;
            if (maxImageWidth <=0 && typeof(imageProcessed) === "function") {
                imageProcessed({
                    name: file.name,
                    image
                });
            }
            else if (typeof(imageProcessed) === "function") {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                img.onload = (evt) => {
                    const { width, height } = evt.target
                    if (width > maxImageWidth) {
                        const aspect = width / height;
                        canvas.width = maxImageWidth;
                        canvas.height = maxImageWidth / aspect;
                        ctx.drawImage(evt.target, 0, 0, canvas.width, canvas.height);
                        image = canvas.toDataURL(targetFormat);
                    }
                    imageProcessed({
                        name: file.name,
                        image
                    });
                }
                img.src = image;
            }
        }
    }

</script>

<div class="image-picker">
    {#if image}
        <img id="image" src={image} alt="User selected" />
    {:else}
        <img id="image" src={placeholderImage} alt="Default placeholder" />
    {/if}
    <input class="hidden" type="file" accept={acceptedTypes} bind:this={fileInput} bind:files on:change={() => processImage(files[0])} />
    <button type="button" on:click={() => fileInput.click() }>{buttonText}</button>
</div>

<style>
    .hidden {
        display: none;
    }

    img {
        max-width: 100%;
    }
</style>