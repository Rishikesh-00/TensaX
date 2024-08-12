<script>
    import { onMount } from "svelte";
    import { storage } from "../../fb.js";
    import { uploadimage } from "../../fb.js"; // Import the Firebase storage

    let imageUrl = '';
    let fileInput;

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageUrl = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

</script>

<input type="file" id="photo" bind:this={fileInput} on:change={handleFileChange} />
<button class="px-4 py-1 bg-blue-600 text-white font-bold rounded" on:click={uploadimage}>Upload Image</button>

<div class="w-96 h-96 border">
    <img src={imageUrl} alt="" class="w-full h-full object-cover">
</div>
