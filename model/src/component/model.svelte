<script>
    import { onMount } from "svelte";

    function loco() {
        gsap.registerPlugin(ScrollTrigger);

        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true,
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector("#main").style.transform
                ? "transform"
                : "fixed",
        });
        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    }

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
    onMount(() => {
        loco();
        const canvas = document.querySelector("canvas");
        const context = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        });

        function files(index) {
            var data = `
  https://zelt.app/assets/img/home/hero/sequence/1.webp
https://zelt.app/assets/img/home/hero/sequence/2.webp
https://zelt.app/assets/img/home/hero/sequence/3.webp
https://zelt.app/assets/img/home/hero/sequence/4.webp
https://zelt.app/assets/img/home/hero/sequence/5.webp
https://zelt.app/assets/img/home/hero/sequence/6.webp
https://zelt.app/assets/img/home/hero/sequence/7.webp
https://zelt.app/assets/img/home/hero/sequence/8.webp
https://zelt.app/assets/img/home/hero/sequence/9.webp
https://zelt.app/assets/img/home/hero/sequence/10.webp
https://zelt.app/assets/img/home/hero/sequence/11.webp
https://zelt.app/assets/img/home/hero/sequence/12.webp
https://zelt.app/assets/img/home/hero/sequence/13.webp
https://zelt.app/assets/img/home/hero/sequence/14.webp
https://zelt.app/assets/img/home/hero/sequence/15.webp
https://zelt.app/assets/img/home/hero/sequence/16.webp
https://zelt.app/assets/img/home/hero/sequence/17.webp
https://zelt.app/assets/img/home/hero/sequence/18.webp
https://zelt.app/assets/img/home/hero/sequence/19.webp
https://zelt.app/assets/img/home/hero/sequence/20.webp
https://zelt.app/assets/img/home/hero/sequence/21.webp
https://zelt.app/assets/img/home/hero/sequence/22.webp
https://zelt.app/assets/img/home/hero/sequence/23.webp
https://zelt.app/assets/img/home/hero/sequence/24.webp
https://zelt.app/assets/img/home/hero/sequence/25.webp
https://zelt.app/assets/img/home/hero/sequence/26.webp
https://zelt.app/assets/img/home/hero/sequence/27.webp
https://zelt.app/assets/img/home/hero/sequence/28.webp
https://zelt.app/assets/img/home/hero/sequence/29.webp
https://zelt.app/assets/img/home/hero/sequence/30.webp
https://zelt.app/assets/img/home/hero/sequence/31.webp
https://zelt.app/assets/img/home/hero/sequence/32.webp
https://zelt.app/assets/img/home/hero/sequence/33.webp
https://zelt.app/assets/img/home/hero/sequence/34.webp
https://zelt.app/assets/img/home/hero/sequence/35.webp
https://zelt.app/assets/img/home/hero/sequence/36.webp
https://zelt.app/assets/img/home/hero/sequence/37.webp
https://zelt.app/assets/img/home/hero/sequence/38.webp
https://zelt.app/assets/img/home/hero/sequence/39.webp
https://zelt.app/assets/img/home/hero/sequence/40.webp
https://zelt.app/assets/img/home/hero/sequence/41.webp
https://zelt.app/assets/img/home/hero/sequence/42.webp
https://zelt.app/assets/img/home/hero/sequence/43.webp
https://zelt.app/assets/img/home/hero/sequence/44.webp
https://zelt.app/assets/img/home/hero/sequence/45.webp
https://zelt.app/assets/img/home/hero/sequence/46.webp
https://zelt.app/assets/img/home/hero/sequence/47.webp
https://zelt.app/assets/img/home/hero/sequence/48.webp
https://zelt.app/assets/img/home/hero/sequence/49.webp
https://zelt.app/assets/img/home/hero/sequence/50.webp
https://zelt.app/assets/img/home/hero/sequence/51.webp
https://zelt.app/assets/img/home/hero/sequence/52.webp
https://zelt.app/assets/img/home/hero/sequence/53.webp
https://zelt.app/assets/img/home/hero/sequence/54.webp
https://zelt.app/assets/img/home/hero/sequence/55.webp
https://zelt.app/assets/img/home/hero/sequence/56.webp
https://zelt.app/assets/img/home/hero/sequence/57.webp
https://zelt.app/assets/img/home/hero/sequence/58.webp
https://zelt.app/assets/img/home/hero/sequence/59.webp
https://zelt.app/assets/img/home/hero/sequence/60.webp
https://zelt.app/assets/img/home/hero/sequence/61.webp
https://zelt.app/assets/img/home/hero/sequence/62.webp
https://zelt.app/assets/img/home/hero/sequence/63.webp
https://zelt.app/assets/img/home/hero/sequence/64.webp
https://zelt.app/assets/img/home/hero/sequence/65.webp
https://zelt.app/assets/img/home/hero/sequence/66.webp
https://zelt.app/assets/img/home/hero/sequence/67.webp
https://zelt.app/assets/img/home/hero/sequence/68.webp
https://zelt.app/assets/img/home/hero/sequence/69.webp
https://zelt.app/assets/img/home/hero/sequence/70.webp
https://zelt.app/assets/img/home/hero/sequence/71.webp
https://zelt.app/assets/img/home/hero/sequence/72.webp
https://zelt.app/assets/img/home/hero/sequence/73.webp
https://zelt.app/assets/img/home/hero/sequence/74.webp
https://zelt.app/assets/img/home/hero/sequence/75.webp
https://zelt.app/assets/img/home/hero/sequence/76.webp
https://zelt.app/assets/img/home/hero/sequence/77.webp
https://zelt.app/assets/img/home/hero/sequence/78.webp
https://zelt.app/assets/img/home/hero/sequence/79.webp
https://zelt.app/assets/img/home/hero/sequence/80.webp
https://zelt.app/assets/img/home/hero/sequence/81.webp
https://zelt.app/assets/img/home/hero/sequence/82.webp
https://zelt.app/assets/img/home/hero/sequence/83.webp
https://zelt.app/assets/img/home/hero/sequence/84.webp
https://zelt.app/assets/img/home/hero/sequence/85.webp
https://zelt.app/assets/img/home/hero/sequence/86.webp
https://zelt.app/assets/img/home/hero/sequence/87.webp
https://zelt.app/assets/img/home/hero/sequence/88.webp
https://zelt.app/assets/img/home/hero/sequence/89.webp
https://zelt.app/assets/img/home/hero/sequence/90.webp
https://zelt.app/assets/img/home/hero/sequence/91.webp
https://zelt.app/assets/img/home/hero/sequence/92.webp
https://zelt.app/assets/img/home/hero/sequence/93.webp
https://zelt.app/assets/img/home/hero/sequence/94.webp
https://zelt.app/assets/img/home/hero/sequence/95.webp
https://zelt.app/assets/img/home/hero/sequence/96.webp
https://zelt.app/assets/img/home/hero/sequence/97.webp
https://zelt.app/assets/img/home/hero/sequence/98.webp
https://zelt.app/assets/img/home/hero/sequence/99.webp
https://zelt.app/assets/img/home/hero/sequence/100.webp
https://zelt.app/assets/img/home/hero/sequence/101.webp
https://zelt.app/assets/img/home/hero/sequence/102.webp
https://zelt.app/assets/img/home/hero/sequence/103.webp
https://zelt.app/assets/img/home/hero/sequence/104.webp
https://zelt.app/assets/img/home/hero/sequence/105.webp
https://zelt.app/assets/img/home/hero/sequence/106.webp
https://zelt.app/assets/img/home/hero/sequence/107.webp
https://zelt.app/assets/img/home/hero/sequence/108.webp
https://zelt.app/assets/img/home/hero/sequence/109.webp
https://zelt.app/assets/img/home/hero/sequence/110.webp
https://zelt.app/assets/img/home/hero/sequence/111.webp
https://zelt.app/assets/img/home/hero/sequence/112.webp
https://zelt.app/assets/img/home/hero/sequence/113.webp
https://zelt.app/assets/img/home/hero/sequence/114.webp
https://zelt.app/assets/img/home/hero/sequence/115.webp
https://zelt.app/assets/img/home/hero/sequence/116.webp
https://zelt.app/assets/img/home/hero/sequence/117.webp
https://zelt.app/assets/img/home/hero/sequence/118.webp
 `;
            return data.split("\n")[index];
        }

        const frameCount = 118;

        const images = [];
        const imageSeq = {
            frame: 1,
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }

        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                scrub: .5,
                trigger: `#page>canvas`,
                start: `top top`,
                end: `300% top`,
                scroller: `#main`,
            },
            onUpdate: render,
        });

        images[1].onload = render;

        function render() {
            scaleImage(images[imageSeq.frame], context);
        }

        function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio,
            );
        }
        ScrollTrigger.create({
            trigger: "#page>canvas",
            pin: true,
            // markers: true,
            scroller: `#main`,
            start: `top top`,
            end: `300% top`,
        });
        // for slider
        // window.addEventListener('wheel',function(dets){
        //     if(dets.deltaY>0){
        //         gsap.to(".marque",{
        //             transform:'translateX(-200%)',
        //             duration:2,
        //             repeat:-1,
        //             ease:'none'
        //         })
        //     }
        //     else{
        //         gsap.to(".marque",{
        //             transform:'translateX(0%)',
        //             duration:2,
        //             repeat:-1,
        //             ease:'none'
        //         })

        //     }
        // })
    });
</script>

<main id="main" class="relative ">
    <div id="page" class="  relative h-screen">
        <div class="w-full ">
            <h1
            class="text-[80px] absolute z-[99] text-center top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium"
        >
            More than HR software
        </h1>
        <h4
            class="text-[30px] mt-28 lg:mt-0 absolute text-center top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-normal z-[99] text-[#565656]"
        >
            Manage HR, Finance & IT from a single modern system
        </h4>
        </div>
        <canvas class="relative z-10 h-screen w-screen "></canvas>
    </div>
    <div id="page2" class="relative h-screen w-screen bg-transparent"></div>
    <div id="page2" class="relative h-screen w-screen bg-transparent"></div>
    
    <div id="page3" class="  h-screen ">
        
    </div>
    <!-- div for slider -->
     <div class="py-12 border-b">
        <h1 class="text-center text-2xl ">Powering modern people ops teams around the world</h1>
        <div class="overflow-hidden mt-8">
            <div class="flex gap-20 marque" bind:this={marqueElement}>
              {#each loopedSrc as imag}
                <img class="h-[3vw] object-cover" src={imag} alt="">
              {/each}
            </div>
          </div>
     </div>
     <!-- for testing purpos -->
      <div class="test  h-screen"></div>
</main>

<style>
    .marque {
      width: 200%; /* Double the width to accommodate the duplicated images */
    }
  </style>


