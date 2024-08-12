<!-- <script>

    import {uploadimage} from "$lib/fb.js"
    let fileInput;
    let img;


    function handleFileChange() {
        const [file] = fileInput.files;
        if (file) {
            img.src = URL.createObjectURL(file);
        }
    }
</script>

<div>
    <h1 class="text-5xl text-yellow-600 text-center underline mb-10">Dashboard</h1>
    <input type="file" accept="image/*" bind:this={fileInput} on:change={handleFileChange}>
    <button class="px-4 py-1 bg-blue-600 text-white font-bold rounded" on:click={uploadimage}>Upload image</button>
    <div class="w-96 h-96 border">
        <img src="#" alt="Uploaded image" bind:this={img}>
    </div>
</div> -->
