<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
  
    const src=[
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-onedome-1.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-mumsnet-logo-4.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-deblock-logo-1.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-11x.webp",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-yonder-logo.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-safi-logo-1.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-strapi-logo.webp",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-patch-logo-1.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-pledge-logo-2.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-wondelogo.png",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-vieve-logo.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-apron-logo-1.svg",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-isometric-min.png",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-eln-logo-removebg-preview.png",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-tilt-logo.png",
  "https://zelt.app/wp-content/uploads/zelt.app-homepage-trustedhousesitters-logo.webp"
]
  
    // Double the array to ensure smooth looping
    const loopedSrc = [...src, ...src];
  
    let marqueElement;
    let animation;
  
    onMount(() => {
      // Initial animation
      animation = gsap.to(marqueElement, {
        x: '-50%',
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
  
      window.addEventListener('wheel', handleWheel);
  
      return () => {
        window.removeEventListener('wheel', handleWheel);
        if (animation) animation.kill();
      };
    });
  
    function handleWheel(event) {
      if (event.deltaY > 0) {
        gsap.to(animation, { timeScale: 2, duration: 0.5 });
      } else {
        gsap.to(animation, { timeScale: -2, duration: 0.5 });
      }
    }
  </script>
  
  <div class="py-12 border-b">
    <h1 class="text-center text-2xl">Powering modern people ops teams around the world</h1>
    <div class="overflow-hidden">
      <div class="flex gap-3 marque" bind:this={marqueElement}>
        {#each loopedSrc as imag}
          <img class="h-[3vw] object-cover" src={imag} alt="">
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .marque {
      width: 200%; /* Double the width to accommodate the duplicated images */
    }
  </style>