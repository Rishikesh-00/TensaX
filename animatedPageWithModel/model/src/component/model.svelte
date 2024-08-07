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

    const src = [
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
        "https://zelt.app/wp-content/uploads/zelt.app-homepage-trustedhousesitters-logo.webp",
    ];

    // Double the array to ensure smooth looping
    const loopedSrc = [...src, ...src];

    let marqueElement;
    let animation;

    onMount(() => {
        // Initial animation
        animation = gsap.to(marqueElement, {
            x: "-50%",
            duration: 20,
            ease: "none",
            repeat: -1,
        });

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
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
                scrub: 0.5,
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
    });
</script>

<main id="main" class=" overflow-hidden">
    <div id="page" class="relative h-screen">
        <div class="w-full">
            <h1
                class="text-[80px] absolute font-noigrotesk z-[99] text-center top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium"
            >
                More than HR software
            </h1>
            <h4
                class="text-[30px] mt-28 lg:mt-0 absolute text-center top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-normal z-[99] text-[#565656]"
            >
                Manage HR, Finance & IT from a single modern system
            </h4>
        </div>
        <canvas class="relative z-10 h-screen w-screen"></canvas>
    </div>
    <div id="page2" class="relative h-screen w-screen bg-transparent"></div>
    <div
        id="page1"
        class="relative h-screen w-screen bg-[#E5E1DC] font-noigrotesk"
    >
        <h1
            class="text-[80px] absolute z-[99] text-center top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium"
        >
            More is more
        </h1>
        <h4
            class="text-[35px] absolute z-[99] text-center top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-normal whitespace-nowrap text-[#565656]"
        >
            Now you can run all your people operations in one system and <br /> put
            an end to scattered point solutions.
        </h4>
    </div>
    <div
        id="page3"
        class="relative h-screen w-screen bg-transparent z-[99]"
    ></div>

    <div
        id="page4"
        class="flex items-center justify-center flex-col relative z-[99] h-screen w-screen bg-[#E4E0DD] text-center font-noigrotesk"
    >
        <h1 class="font-semibold text-[4vw] font-noigrotesk">
            Work with the best HR <br /> software
        </h1>
        <h4 class="mt-5 font-medium text-[1.5vw] font-noigrotesk">
            save up to 500 hours a year using process automation
        </h4>
    </div>

    <!-- div for slider -->
    <div class="py-12 border-b">
        <h1 class="text-center text-2xl">
            Powering modern people ops teams around the world
        </h1>
        <div class="overflow-hidden mt-8">
            <div class="flex gap-20 marque" bind:this={marqueElement}>
                {#each src as imag}
                    <img class="h-[3vw] object-cover" src={imag} alt="" />
                {/each}
            </div>
        </div>
    </div>
    <!-- page 5 -->
    <div class="test w-screen px-44 py-10">
        <h1 class="text-[5rem] font-noigrotesk">Product Overview</h1>
        <div class="bg-[#F6F3EF] flex px-12 py-20 rounded-md">
            <div class="flex justify-center items-center w-1/2">
                <div class="flex flex-col">
                    <span>People</span>
                    <span>Payroll</span>
                    <span>Benefits</span>
                    <span>Payments</span>
                    <span>Time Off</span>
                    <span>Apps</span>
                    <span>Devices</span>
                    <span>Engagement</span>
                    <span>Performance</span>
                </div>
                <div class="w-[30rem] h-[30rem]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 832 702"
                        width="832"
                        height="702"
                        preserveAspectRatio="xMidYMid meet"
                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                        ><defs
                            ><text
                                font-family="Inter"
                                font-style="normal"
                                font-weight="400"
                                style="font-size: 100px; font-family: Inter;"
                                >2</text
                            ><text
                                font-family="Inter"
                                font-style="normal"
                                font-weight="500"
                                style="font-size: 100px; font-family: Inter;"
                                >0</text
                            ><clipPath id="__lottie_element_2"
                                ><rect width="832" height="702" x="0" y="0"
                                ></rect></clipPath
                            ><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_0.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_1.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_2.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_3.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_4.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_5.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_6.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_7.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_8.png"
                            ></image><image
                                xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_9.png"
                            ></image><clipPath id="__lottie_element_19"
                                ><path d="M0,0 L408,0 L408,892 L0,892z"
                                ></path></clipPath
                            ><g id="__lottie_element_22"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,362.1199951171875,398)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(47,47,47)"
                                            fill-opacity="1"
                                            d=" M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.2"
                                            stroke-width="2"
                                            d=" M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z"
                                        ></path></g
                                    ></g
                                ></g
                            ><clipPath id="__lottie_element_26"
                                ><path d="M0,0 L382,0 L382,840 L0,840z"
                                ></path></clipPath
                            ><g id="__lottie_element_29"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><clipPath id="__lottie_element_33"
                                ><path d="M0,0 L382,0 L382,840 L0,840z"
                                ></path></clipPath
                            ><g id="__lottie_element_36"
                                ><g
                                    style="display: none;"
                                    transform="matrix(0.679960310459137,0,0,0.29919999837875366,795.2606201171875,169.38400268554688)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(1,0,0,1,-279,-120)"
                                        ><path
                                            fill="rgb(49,149,132)"
                                            fill-opacity="1"
                                            d=" M207,-436 C207,-436 207,436 207,436 C207,436 -207,436 -207,436 C-207,436 -207,-436 -207,-436 C-207,-436 207,-436 207,-436z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M207,-436 C207,-436 207,436 207,436 C207,436 -207,436 -207,436 C-207,436 -207,-436 -207,-436 C-207,-436 207,-436 207,-436z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_42"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_48"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_54"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_60"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_66"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_72"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_78"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_84"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_90"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_96"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g id="__lottie_element_102"
                                ><g
                                    style="display: block;"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path><path
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            fill-opacity="0"
                                            stroke-miterlimit="4"
                                            stroke="rgb(255,255,255)"
                                            stroke-opacity="0.1"
                                            stroke-width="0.909"
                                            d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                        ></path></g
                                    ></g
                                ></g
                            ><mask id="__lottie_element_102_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_102"
                                ></use></mask
                            ><mask id="__lottie_element_96_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_96"
                                ></use></mask
                            ><mask id="__lottie_element_90_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_90"
                                ></use></mask
                            ><mask id="__lottie_element_84_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_84"
                                ></use></mask
                            ><mask id="__lottie_element_78_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_78"
                                ></use></mask
                            ><mask id="__lottie_element_72_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_72"
                                ></use></mask
                            ><mask id="__lottie_element_66_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_66"
                                ></use></mask
                            ><mask id="__lottie_element_60_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_60"
                                ></use></mask
                            ><mask id="__lottie_element_54_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_54"
                                ></use></mask
                            ><mask id="__lottie_element_48_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_48"
                                ></use></mask
                            ><mask id="__lottie_element_42_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_42"
                                ></use></mask
                            ><mask id="__lottie_element_36_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_36"
                                ></use></mask
                            ><mask id="__lottie_element_29_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_29"
                                ></use></mask
                            ><mask id="__lottie_element_22_1" mask-type="alpha"
                                ><use xlink:href="#__lottie_element_22"
                                ></use></mask
                            ></defs
                        ><g clip-path="url(#__lottie_element_2)"
                            ><g
                                transform="matrix(0.6800000071525574,0,0,0.6800000071525574,362.1199951171875,398)"
                                opacity="1"
                                style="display: block;"
                                ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                                    ><path
                                        fill="rgb(47,47,47)"
                                        fill-opacity="1"
                                        d=" M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z"
                                    ></path><path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(255,255,255)"
                                        stroke-opacity="0.2"
                                        stroke-width="2"
                                        d=" M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z M199.5,-204.5 C199.5,-204.5 199.5,204.5 199.5,204.5 C199.5,211.1269989013672 194.1269989013672,216.5 187.5,216.5 C187.5,216.5 -187.5,216.5 -187.5,216.5 C-194.1269989013672,216.5 -199.5,211.1269989013672 -199.5,204.5 C-199.5,204.5 -199.5,-204.5 -199.5,-204.5 C-199.5,-211.1269989013672 -194.1269989013672,-216.5 -187.5,-216.5 C-187.5,-216.5 187.5,-216.5 187.5,-216.5 C194.1269989013672,-216.5 199.5,-211.1269989013672 199.5,-204.5z"
                                    ></path></g
                                ></g
                            ><g
                                transform="matrix(0.6800000071525574,0,0,0.6800000071525574,140.25599670410156,143.49600219726562)"
                                opacity="1"
                                style="display: block;"
                                ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                                    ><path
                                        fill="rgb(62,61,61)"
                                        fill-opacity="1"
                                        d=" M0,-6.364999771118164 C3.512843370437622,-6.364999771118164 6.364999771118164,-3.512843370437622 6.364999771118164,0 C6.364999771118164,3.512843370437622 3.512843370437622,6.364999771118164 0,6.364999771118164 C-3.512843370437622,6.364999771118164 -6.364999771118164,3.512843370437622 -6.364999771118164,0 C-6.364999771118164,-3.512843370437622 -3.512843370437622,-6.364999771118164 0,-6.364999771118164z"
                                    ></path></g
                                ></g
                            ><g
                                transform="matrix(0.6800000071525574,0,0,0.6800000071525574,174.88299560546875,143.49600219726562)"
                                opacity="1"
                                style="display: block;"
                                ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                                    ><path
                                        fill="rgb(62,61,61)"
                                        fill-opacity="1"
                                        d=" M0,-6.364999771118164 C3.512843370437622,-6.364999771118164 6.364999771118164,-3.512843370437622 6.364999771118164,0 C6.364999771118164,3.512843370437622 3.512843370437622,6.364999771118164 0,6.364999771118164 C-3.512843370437622,6.364999771118164 -6.364999771118164,3.512843370437622 -6.364999771118164,0 C-6.364999771118164,-3.512843370437622 -3.512843370437622,-6.364999771118164 0,-6.364999771118164z"
                                    ></path></g
                                ></g
                            ><g
                                transform="matrix(0.6800000071525574,0,0,0.6800000071525574,209.5050048828125,143.49600219726562)"
                                opacity="1"
                                style="display: block;"
                                ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                                    ><path
                                        fill="rgb(62,61,61)"
                                        fill-opacity="1"
                                        d=" M0,-6.364999771118164 C3.512843370437622,-6.364999771118164 6.364999771118164,-3.512843370437622 6.364999771118164,0 C6.364999771118164,3.512843370437622 3.512843370437622,6.364999771118164 0,6.364999771118164 C-3.512843370437622,6.364999771118164 -6.364999771118164,3.512843370437622 -6.364999771118164,0 C-6.364999771118164,-3.512843370437622 -3.512843370437622,-6.364999771118164 0,-6.364999771118164z"
                                    ></path></g
                                ></g
                            ><g
                                style="display: block;"
                                transform="matrix(0.6800000071525574,0,0,0.6800000071525574,360.760009765625,315)"
                                opacity="0.04999202733545719"
                                ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                                    ><path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M198.5,-28 C198.5,-28 198.5,28 198.5,28 C198.5,28 -198.5,28 -198.5,28 C-198.5,28 -198.5,-28 -198.5,-28 C-198.5,-28 198.5,-28 198.5,-28z"
                                    ></path></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_22_1)"
                                style="display: block;"
                                ><g
                                    clip-path="url(#__lottie_element_19)"
                                    transform="matrix(0.5,0,0,0.5,128,205)"
                                    opacity="1"
                                    ><g
                                        transform="matrix(0.9066699743270874,0,0,0.9066699743270874,31.199813842773438,17.96381378173828)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="111px"
                                            height="111px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_9.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="23.3999996185303"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="Alex"
                                        style="display: block;"
                                        transform="matrix(1.9999960660934448,0,0,1.9999960660934448,181.9998779296875,85.03653717041016)"
                                        opacity="1"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity="1">A</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,16.89865493774414,0)"
                                            opacity="1">l</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,23.399660110473633,0)"
                                            opacity="1">e</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,33.78740692138672,0)"
                                            opacity="1">x</text
                                        ></g
                                    ><g
                                        transform="matrix(0.9066699743270874,0,0,0.9066699743270874,31.199813842773438,169.65182495117188)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="111px"
                                            height="111px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_8.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="23.3999996185303"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="Tom"
                                        style="display: block;"
                                        transform="matrix(1.9999960660934448,0,0,1.9999960660934448,181.03518676757812,236.72454833984375)"
                                        opacity="1"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity="1">T</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,14.294291496276855,0)"
                                            opacity="1">o</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,25.994121551513672,0)"
                                            opacity="1">m</text
                                        ></g
                                    ><g
                                        transform="matrix(0.9066699743270874,0,0,0.9066699743270874,31.199813842773438,321.3398132324219)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="111px"
                                            height="111px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_7.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(0.9066699743270874,0,0,0.9066699743270874,31.199813842773438,473.02783203125)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="111px"
                                            height="111px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_6.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="23.3999996185303"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="Anna"
                                        style="display: block;"
                                        transform="matrix(1.9999960660934448,0,0,1.9999960660934448,182.84036254882812,540.0670166015625)"
                                        opacity="1"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity="1">A</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,16.89865493774414,0)"
                                            opacity="1">n</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,28.59848403930664,0)"
                                            opacity="1">n</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,40.298316955566406,0)"
                                            opacity="1">a</text
                                        ></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="23.3999996185303"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="Linda"
                                        style="display: block;"
                                        transform="matrix(1.9999960660934448,0,0,1.9999960660934448,180.5609893798828,388.91119384765625)"
                                        opacity="1"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity="1">L</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,14.294290542602539,0)"
                                            opacity="1">i</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,20.795297622680664,0)"
                                            opacity="1">n</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,32.4951286315918,0)"
                                            opacity="1">d</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,44.1949577331543,0)"
                                            opacity="1">a</text
                                        ></g
                                    ><g
                                        transform="matrix(0.9066699743270874,0,0,0.9066699743270874,31.199813842773438,776.40380859375)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="111px"
                                            height="111px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_5.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="23.3999996185303"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="Leo"
                                        style="display: block;"
                                        transform="matrix(2,0,0,2,179.0749969482422,843.4760131835938)"
                                        opacity="1"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity="1">L</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,14.294291496276855,0)"
                                            opacity="1">e</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,24.682037353515625,0)"
                                            opacity="1">o</text
                                        ></g
                                    ><g
                                        transform="matrix(0.9066699743270874,0,0,0.9066699743270874,31.199813842773438,624.7158203125)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="111px"
                                            height="111px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_4.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="23.3999996185303"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="John"
                                        style="display: block;"
                                        transform="matrix(1.9999960660934448,0,0,1.9999960660934448,181.8040313720703,691.7885131835938)"
                                        opacity="1"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity="1">J</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,9.110321044921875,0)"
                                            opacity="1">o</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,20.810150146484375,0)"
                                            opacity="1">h</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            style="display: inherit;"
                                            transform="matrix(1,0,0,1,32.50998306274414,0)"
                                            opacity="1">n</text
                                        ></g
                                    ></g
                                ></g
                            ><g
                                transform="matrix(0.6800000071525574,0,0,0.6800000071525574,605.43798828125,296)"
                                opacity="1"
                                style="display: block;"
                                ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                                    ><path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                    ></path><path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(255,255,255)"
                                        stroke-opacity="0.1"
                                        stroke-width="0.909"
                                        d=" M95.5,-198 C95.5,-198 95.50236511230469,195.785400390625 95.50236511230469,195.785400390625 C95.50236511230469,202.4123992919922 90.12936401367188,207.785400390625 83.50236511230469,207.785400390625 C83.50236511230469,207.785400390625 -83.49763488769531,207.785400390625 -83.49763488769531,207.785400390625 C-90.1246337890625,207.785400390625 -95.49763488769531,202.4123992919922 -95.49763488769531,195.785400390625 C-95.49763488769531,195.785400390625 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                    ></path></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_29_1)"
                                style="display: block;"
                                ><g
                                    clip-path="url(#__lottie_element_26)"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,475.66302490234375,9.740997314453125)"
                                    opacity="1"
                                    ><g
                                        transform="matrix(1,0,0,1,191,420)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(255,255,255)"
                                                fill-opacity="1"
                                                d=" M95.5,-198 C95.5,-198 95.75,-36 95.75,-36 C95.75,-29.37299919128418 90.37699890136719,-24 83.75,-24 C83.75,-24 -83.25,-24 -83.25,-24 C-89.87699890136719,-24 -95.25,-29.37299919128418 -95.25,-36 C-95.25,-36 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                            ></path><path
                                                stroke-linecap="butt"
                                                stroke-linejoin="miter"
                                                fill-opacity="0"
                                                stroke-miterlimit="4"
                                                stroke="rgb(255,255,255)"
                                                stroke-opacity="0.1"
                                                stroke-width="0.909"
                                                d=" M95.5,-198 C95.5,-198 95.75,-36 95.75,-36 C95.75,-29.37299919128418 90.37699890136719,-24 83.75,-24 C83.75,-24 -83.25,-24 -83.25,-24 C-89.87699890136719,-24 -95.25,-29.37299919128418 -95.25,-36 C-95.25,-36 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,37.9996337890625,37.9996337890625)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="216px"
                                            height="216px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_3.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(1,0,0,1,166.75900268554688,55.24300003051758)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(115,207,140)"
                                                fill-opacity="1"
                                                d=" M6.5904998779296875,0 C6.5904998779296875,0 6.5904998779296875,0 6.5904998779296875,0 C6.5904998779296875,3.6372969150543213 3.6372969150543213,6.5904998779296875 0,6.5904998779296875 C0,6.5904998779296875 0,6.5904998779296875 0,6.5904998779296875 C-3.6372969150543213,6.5904998779296875 -6.5904998779296875,3.6372969150543213 -6.5904998779296875,0 C-6.5904998779296875,0 -6.5904998779296875,0 -6.5904998779296875,0 C-6.5904998779296875,-3.6372969150543213 -3.6372969150543213,-6.5904998779296875 0,-6.5904998779296875 C0,-6.5904998779296875 0,-6.5904998779296875 0,-6.5904998779296875 C3.6372969150543213,-6.5904998779296875 6.5904998779296875,-3.6372969150543213 6.5904998779296875,0z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(1,0,0,1,167.6439971923828,53.125999450683594)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                                            ><path
                                                stroke-linecap="round"
                                                stroke-linejoin="miter"
                                                fill-opacity="0"
                                                stroke-miterlimit="4"
                                                stroke="rgb(255,255,255)"
                                                stroke-opacity="1"
                                                stroke-width="0.909"
                                                d=" M1.1419999599456787,-2.378999948501587 C1.1419999599456787,-2.378999948501587 1.7130000591278076,2.378999948501587 1.7130000591278076,2.378999948501587 C1.7130000591278076,2.378999948501587 -1.7130000591278076,2.378999948501587 -1.7130000591278076,2.378999948501587"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(1,0,0,1,276,110)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(246,246,246)"
                                                fill-opacity="1"
                                                d=" M36,-25 C36,-25 36,25 36,25 C36,31.070899963378906 31.070899963378906,36 25,36 C25,36 -25,36 -25,36 C-31.070899963378906,36 -36,31.070899963378906 -36,25 C-36,25 -36,-25 -36,-25 C-36,-31.070899963378906 -31.070899963378906,-36 -25,-36 C-25,-36 25,-36 25,-36 C31.070899963378906,-36 36,-31.070899963378906 36,-25z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,245.99984741210938,79.99984741210938)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="90px"
                                            height="90px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_2.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(1,0,0,1,110,278)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(246,246,246)"
                                                fill-opacity="1"
                                                d=" M36,-25 C36,-25 36,25 36,25 C36,31.070899963378906 31.070899963378906,36 25,36 C25,36 -25,36 -25,36 C-31.070899963378906,36 -36,31.070899963378906 -36,25 C-36,25 -36,-25 -36,-25 C-36,-31.070899963378906 -31.070899963378906,-36 -25,-36 C-25,-36 25,-36 25,-36 C31.070899963378906,-36 36,-31.070899963378906 36,-25z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,79.7361831665039,247.33319091796875)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="89px"
                                            height="89px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_1.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(1,0,0,1,334.6809997558594,39.119998931884766)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(234,67,53)"
                                                fill-opacity="1"
                                                d=" M9.5,0 C9.5,0 9.5,0 9.5,0 C9.5,3.5873498916625977 6.587349891662598,6.5 3,6.5 C3,6.5 -3,6.5 -3,6.5 C-6.587349891662598,6.5 -9.5,3.5873498916625977 -9.5,0 C-9.5,0 -9.5,0 -9.5,0 C-9.5,-3.5873498916625977 -6.587349891662598,-6.5 -3,-6.5 C-3,-6.5 3,-6.5 3,-6.5 C6.587349891662598,-6.5 9.5,-3.5873498916625977 9.5,0z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(1,0,0,1,276,278)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(246,246,246)"
                                                fill-opacity="1"
                                                d=" M36,-25 C36,-25 36,25 36,25 C36,31.070899963378906 31.070899963378906,36 25,36 C25,36 -25,36 -25,36 C-31.070899963378906,36 -36,31.070899963378906 -36,25 C-36,25 -36,-25 -36,-25 C-36,-31.070899963378906 -31.070899963378906,-36 -25,-36 C-25,-36 25,-36 25,-36 C31.070899963378906,-36 36,-31.070899963378906 36,-25z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,245.99984741210938,248.99984741210938)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="87px"
                                            height="87px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_0.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="26"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="12"
                                        transform="matrix(0.6700000166893005,0,0,0.6700000166893005,334.76800537109375,45.54100036621094)"
                                        opacity="1"
                                        style="display: block;"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            transform="matrix(1,0,0,1,-12.674811363220215,0)"
                                            opacity="1"
                                            style="display: inherit;">1</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            transform="matrix(1,0,0,1,-0.3249996304512024,0)"
                                            opacity="1"
                                            style="display: inherit;">2</text
                                        ></g
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_36_1)"
                                style="display: none;"
                                ><g
                                    clip-path="url(#__lottie_element_33)"
                                    transform="matrix(0.6800000071525574,0,0,0.6800000071525574,475.66302490234375,9.740997314453125)"
                                    opacity="1"
                                    ><g
                                        transform="matrix(1,0,0,1,191,420)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(255,255,255)"
                                                fill-opacity="1"
                                                d=" M95.5,-198 C95.5,-198 95.75,-36 95.75,-36 C95.75,-29.37299919128418 90.37699890136719,-24 83.75,-24 C83.75,-24 -83.25,-24 -83.25,-24 C-89.87699890136719,-24 -95.25,-29.37299919128418 -95.25,-36 C-95.25,-36 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                            ></path><path
                                                stroke-linecap="butt"
                                                stroke-linejoin="miter"
                                                fill-opacity="0"
                                                stroke-miterlimit="4"
                                                stroke="rgb(255,255,255)"
                                                stroke-opacity="0.1"
                                                stroke-width="0.909"
                                                d=" M95.5,-198 C95.5,-198 95.75,-36 95.75,-36 C95.75,-29.37299919128418 90.37699890136719,-24 83.75,-24 C83.75,-24 -83.25,-24 -83.25,-24 C-89.87699890136719,-24 -95.25,-29.37299919128418 -95.25,-36 C-95.25,-36 -95.5,-198 -95.5,-198 C-95.5,-204.6269989013672 -90.12699890136719,-210 -83.5,-210 C-83.5,-210 83.5,-210 83.5,-210 C90.12699890136719,-210 95.5,-204.6269989013672 95.5,-198z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,37.9996337890625,37.9996337890625)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="216px"
                                            height="216px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_3.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(1,0,0,1,166.75900268554688,55.24300003051758)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(115,207,140)"
                                                fill-opacity="1"
                                                d=" M6.5904998779296875,0 C6.5904998779296875,0 6.5904998779296875,0 6.5904998779296875,0 C6.5904998779296875,3.6372969150543213 3.6372969150543213,6.5904998779296875 0,6.5904998779296875 C0,6.5904998779296875 0,6.5904998779296875 0,6.5904998779296875 C-3.6372969150543213,6.5904998779296875 -6.5904998779296875,3.6372969150543213 -6.5904998779296875,0 C-6.5904998779296875,0 -6.5904998779296875,0 -6.5904998779296875,0 C-6.5904998779296875,-3.6372969150543213 -3.6372969150543213,-6.5904998779296875 0,-6.5904998779296875 C0,-6.5904998779296875 0,-6.5904998779296875 0,-6.5904998779296875 C3.6372969150543213,-6.5904998779296875 6.5904998779296875,-3.6372969150543213 6.5904998779296875,0z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(1,0,0,1,167.6439971923828,53.125999450683594)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                                            ><path
                                                stroke-linecap="round"
                                                stroke-linejoin="miter"
                                                fill-opacity="0"
                                                stroke-miterlimit="4"
                                                stroke="rgb(255,255,255)"
                                                stroke-opacity="1"
                                                stroke-width="0.909"
                                                d=" M1.1419999599456787,-2.378999948501587 C1.1419999599456787,-2.378999948501587 1.7130000591278076,2.378999948501587 1.7130000591278076,2.378999948501587 C1.7130000591278076,2.378999948501587 -1.7130000591278076,2.378999948501587 -1.7130000591278076,2.378999948501587"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(1,0,0,1,276,110)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(246,246,246)"
                                                fill-opacity="1"
                                                d=" M36,-25 C36,-25 36,25 36,25 C36,31.070899963378906 31.070899963378906,36 25,36 C25,36 -25,36 -25,36 C-31.070899963378906,36 -36,31.070899963378906 -36,25 C-36,25 -36,-25 -36,-25 C-36,-31.070899963378906 -31.070899963378906,-36 -25,-36 C-25,-36 25,-36 25,-36 C31.070899963378906,-36 36,-31.070899963378906 36,-25z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,245.99984741210938,79.99984741210938)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="90px"
                                            height="90px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_2.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(1,0,0,1,110,278)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(246,246,246)"
                                                fill-opacity="1"
                                                d=" M36,-25 C36,-25 36,25 36,25 C36,31.070899963378906 31.070899963378906,36 25,36 C25,36 -25,36 -25,36 C-31.070899963378906,36 -36,31.070899963378906 -36,25 C-36,25 -36,-25 -36,-25 C-36,-31.070899963378906 -31.070899963378906,-36 -25,-36 C-25,-36 25,-36 25,-36 C31.070899963378906,-36 36,-31.070899963378906 36,-25z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,79.7361831665039,247.33319091796875)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="89px"
                                            height="89px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_1.png"
                                        ></image></g
                                    ><g
                                        transform="matrix(1,0,0,1,334.6809997558594,39.119998931884766)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(234,67,53)"
                                                fill-opacity="1"
                                                d=" M9.5,0 C9.5,0 9.5,0 9.5,0 C9.5,3.5873498916625977 6.587349891662598,6.5 3,6.5 C3,6.5 -3,6.5 -3,6.5 C-6.587349891662598,6.5 -9.5,3.5873498916625977 -9.5,0 C-9.5,0 -9.5,0 -9.5,0 C-9.5,-3.5873498916625977 -6.587349891662598,-6.5 -3,-6.5 C-3,-6.5 3,-6.5 3,-6.5 C6.587349891662598,-6.5 9.5,-3.5873498916625977 9.5,0z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(1,0,0,1,276,278)"
                                        opacity="1"
                                        style="display: block;"
                                        ><g
                                            opacity="1"
                                            transform="matrix(2,0,0,2,0,0)"
                                            ><path
                                                fill="rgb(246,246,246)"
                                                fill-opacity="1"
                                                d=" M36,-25 C36,-25 36,25 36,25 C36,31.070899963378906 31.070899963378906,36 25,36 C25,36 -25,36 -25,36 C-31.070899963378906,36 -36,31.070899963378906 -36,25 C-36,25 -36,-25 -36,-25 C-36,-31.070899963378906 -31.070899963378906,-36 -25,-36 C-25,-36 25,-36 25,-36 C31.070899963378906,-36 36,-31.070899963378906 36,-25z"
                                            ></path></g
                                        ></g
                                    ><g
                                        transform="matrix(0.666670024394989,0,0,0.666670024394989,245.99984741210938,248.99984741210938)"
                                        opacity="1"
                                        style="display: block;"
                                        ><image
                                            width="87px"
                                            height="87px"
                                            preserveAspectRatio="xMidYMid slice"
                                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_0.png"
                                        ></image></g
                                    ><g
                                        fill="rgb(255,255,255)"
                                        font-size="26"
                                        font-family="Inter"
                                        font-style="normal"
                                        font-weight="400"
                                        aria-label="12"
                                        transform="matrix(0.6700000166893005,0,0,0.6700000166893005,334.76800537109375,45.54100036621094)"
                                        opacity="1"
                                        style="display: block;"
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            transform="matrix(1,0,0,1,-12.674811363220215,0)"
                                            opacity="1"
                                            style="display: inherit;">1</text
                                        ><text
                                            stroke-linecap="butt"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="4"
                                            xml:space="preserve"
                                            transform="matrix(1,0,0,1,-0.3249996304512024,0)"
                                            opacity="1"
                                            style="display: inherit;">2</text
                                        ></g
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_42_1)"
                                style="display: block;"
                                ><g
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,607.6799926757812,448.6969909667969)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(246,246,246)"
                                            fill-opacity="1"
                                            d=" M78,-14.5 C78,-14.5 78,14.5 78,14.5 C78,18.915199279785156 74.41519927978516,22.5 70,22.5 C70,22.5 -70,22.5 -70,22.5 C-74.41519927978516,22.5 -78,18.915199279785156 -78,14.5 C-78,14.5 -78,-14.5 -78,-14.5 C-78,-18.915199279785156 -74.41519927978516,-22.5 -70,-22.5 C-70,-22.5 70,-22.5 70,-22.5 C74.41519927978516,-22.5 78,-18.915199279785156 78,-14.5z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_48_1)"
                                style="display: block;"
                                ><g
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,607.6799926757812,372.6059875488281)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(246,246,246)"
                                            fill-opacity="1"
                                            d=" M78,-14.5 C78,-14.5 78,14.5 78,14.5 C78,18.915199279785156 74.41519927978516,22.5 70,22.5 C70,22.5 -70,22.5 -70,22.5 C-74.41519927978516,22.5 -78,18.915199279785156 -78,14.5 C-78,14.5 -78,-14.5 -78,-14.5 C-78,-18.915199279785156 -74.41519927978516,-22.5 -70,-22.5 C-70,-22.5 70,-22.5 70,-22.5 C74.41519927978516,-22.5 78,-18.915199279785156 78,-14.5z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_54_1)"
                                style="display: block;"
                                ><g
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,607.6799926757812,296.5150146484375)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(246,246,246)"
                                            fill-opacity="1"
                                            d=" M78,-14.5 C78,-14.5 78,14.5 78,14.5 C78,18.915199279785156 74.41519927978516,22.5 70,22.5 C70,22.5 -70,22.5 -70,22.5 C-74.41519927978516,22.5 -78,18.915199279785156 -78,14.5 C-78,14.5 -78,-14.5 -78,-14.5 C-78,-18.915199279785156 -74.41519927978516,-22.5 -70,-22.5 C-70,-22.5 70,-22.5 70,-22.5 C74.41519927978516,-22.5 78,-18.915199279785156 78,-14.5z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_60_1)"
                                style="display: block;"
                                ><g
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,607.6799926757812,524.7880249023438)"
                                    opacity="1"
                                    ><g
                                        opacity="1"
                                        transform="matrix(2,0,0,2,0,0)"
                                        ><path
                                            fill="rgb(246,246,246)"
                                            fill-opacity="1"
                                            d=" M78,-14.5 C78,-14.5 78,14.5 78,14.5 C78,18.915199279785156 74.41519927978516,22.5 70,22.5 C70,22.5 -70,22.5 -70,22.5 C-74.41519927978516,22.5 -78,18.915199279785156 -78,14.5 C-78,14.5 -78,-14.5 -78,-14.5 C-78,-18.915199279785156 -74.41519927978516,-22.5 -70,-22.5 C-70,-22.5 70,-22.5 70,-22.5 C74.41519927978516,-22.5 78,-18.915199279785156 78,-14.5z"
                                        ></path></g
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_66_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="400"
                                    aria-label="Allowance"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,523.708251953125,453.9810791015625)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity="1"
                                        style="display: inherit;">A</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,19.449447631835938,0)"
                                        opacity="1"
                                        style="display: inherit;">l</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,26.502620697021484,0)"
                                        opacity="1"
                                        style="display: inherit;">l</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,33.5557975769043,0)"
                                        opacity="1"
                                        style="display: inherit;">o</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,46.807106018066406,0)"
                                        opacity="1"
                                        style="display: inherit;">w</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,66.25655364990234,0)"
                                        opacity="1"
                                        style="display: inherit;">a</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,77.94357299804688,0)"
                                        opacity="1"
                                        style="display: inherit;">n</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,91.19487762451172,0)"
                                        opacity="1"
                                        style="display: inherit;">c</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,102.88189697265625,0)"
                                        opacity="1"
                                        style="display: inherit;">e</text
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_72_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="500"
                                    aria-label="25 days"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,691.708251953125,453.9810791015625)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-81.8277359008789,0)"
                                        opacity="1"
                                        style="display: inherit;">2</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-68.57642364501953,0)"
                                        opacity="1"
                                        style="display: inherit;">5</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-55.32511520385742,0)"
                                        opacity="1"
                                        style="display: inherit;"
                                    >
                                    </text><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-49.05113220214844,0)"
                                        opacity="1"
                                        style="display: inherit;">d</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-35.79982376098633,0)"
                                        opacity="1"
                                        style="display: inherit;">a</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-24.11280632019043,0)"
                                        opacity="1"
                                        style="display: inherit;">y</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-10.861495971679688,0)"
                                        opacity="1"
                                        style="display: inherit;">s</text
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_78_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="400"
                                    aria-label="Healthcare"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,522.539794921875,531.4652709960938)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity="1"
                                        style="display: inherit;">H</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,19.449447631835938,0)"
                                        opacity="1"
                                        style="display: inherit;">e</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,31.13646697998047,0)"
                                        opacity="1"
                                        style="display: inherit;">a</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,42.823486328125,0)"
                                        opacity="1"
                                        style="display: inherit;">l</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,49.87665939331055,0)"
                                        opacity="1"
                                        style="display: inherit;">t</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,56.929832458496094,0)"
                                        opacity="1"
                                        style="display: inherit;">h</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,70.18114471435547,0)"
                                        opacity="1"
                                        style="display: inherit;">c</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,81.86815643310547,0)"
                                        opacity="1"
                                        style="display: inherit;">a</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,93.55518341064453,0)"
                                        opacity="1"
                                        style="display: inherit;">r</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,102.14903259277344,0)"
                                        opacity="1"
                                        style="display: inherit;">e</text
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_84_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="400"
                                    aria-label="Pension"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,522.5399780273438,378.8240051269531)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity="1"
                                        style="display: inherit;">P</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,14.821504592895508,0)"
                                        opacity="1"
                                        style="display: inherit;">e</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,26.508522033691406,0)"
                                        opacity="1"
                                        style="display: inherit;">n</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,39.75983428955078,0)"
                                        opacity="1"
                                        style="display: inherit;">s</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,49.92388153076172,0)"
                                        opacity="1"
                                        style="display: inherit;">i</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,56.97705841064453,0)"
                                        opacity="1"
                                        style="display: inherit;">o</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,70.22836303710938,0)"
                                        opacity="1"
                                        style="display: inherit;">n</text
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_90_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="500"
                                    aria-label="8%"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,692.4190673828125,378.7181396484375)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-37.18881607055664,0)"
                                        opacity="1"
                                        style="display: inherit;">8</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-23.240062713623047,0)"
                                        opacity="1"
                                        style="display: inherit;">%</text
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_96_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="400"
                                    aria-label="Payments"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,522.5399780273438,301.3999938964844)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity="1"
                                        style="display: inherit;">P</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,14.821504592895508,0)"
                                        opacity="1"
                                        style="display: inherit;">a</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,26.508522033691406,0)"
                                        opacity="1"
                                        style="display: inherit;">y</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,39.75983428955078,0)"
                                        opacity="1"
                                        style="display: inherit;">m</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,60.76176452636719,0)"
                                        opacity="1"
                                        style="display: inherit;">e</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,72.44878387451172,0)"
                                        opacity="1"
                                        style="display: inherit;">n</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,85.7000961303711,0)"
                                        opacity="1"
                                        style="display: inherit;">t</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,92.75326538085938,0)"
                                        opacity="1"
                                        style="display: inherit;">s</text
                                    ></g
                                ></g
                            ><g
                                mask="url(#__lottie_element_102_1)"
                                style="display: block;"
                                ><g
                                    fill="rgb(18,23,24)"
                                    font-size="27.8979206085205"
                                    font-family="Inter"
                                    font-style="normal"
                                    font-weight="500"
                                    aria-label="£3,890"
                                    transform="matrix(0.6700000166893005,0,0,0.6700000166893005,691.9212646484375,301.7497253417969)"
                                    opacity="1"
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-76.72112274169922,0)"
                                        opacity="1"
                                        style="display: inherit;">£</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-62.772361755371094,0)"
                                        opacity="1"
                                        style="display: inherit;">3</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-48.823604583740234,0)"
                                        opacity="1"
                                        style="display: inherit;">,</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-41.846275329589844,0)"
                                        opacity="1"
                                        style="display: inherit;">8</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-27.897520065307617,0)"
                                        opacity="1"
                                        style="display: inherit;">9</text
                                    ><text
                                        stroke-linecap="butt"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        xml:space="preserve"
                                        transform="matrix(1,0,0,1,-13.94875717163086,0)"
                                        opacity="1"
                                        style="display: inherit;">0</text
                                    ></g
                                ></g
                            ></g
                        ></svg
                    >
                </div>
            </div>
            <div class="flex justify-center flex-col w-1/2 gap-5">
                <h1 class="text-5xl font-noigrotesk">People</h1>
                <p class="font-noigrotesk text-lg">
                    A next generation HR software that contains your employee
                    master data, and integrates directly with time off, payroll,
                    benefits and more. Minimise time spent on admin using
                    automation and employee self-service.
                </p>
                <button
                    class="bg-black w-44 text-white px-1 py-1 rounded-md flex justify-center items-center"
                    >Find out more &nbsp; <span class="border-l border-gray-100"
                        ><i class="bx bx-right-arrow-alt text-2xl"></i></span
                    ></button
                >
            </div>
        </div>
    </div>
    <!-- page6 -->
    <div id="page6" class=" flex relative w-screen px-44 py-10 rounded-md">
        <div class="w-1/2 flex flex-col justify-center">
            <h1 class="text-5xl font-noigrotesk">People-centric</h1>
            <p class="font-noigrotesk text-lg">
                Create a better employee experience by building your HR software
                and processes around your people. With self-service and seamless
                approvals, your team does not have to jump through hoops to get
                the resources they need like with other HR software.
            </p>
        </div>
        <div class="w-1/2 p-10">
            <video
                class="object-cover"
                src="videos/firstvideo.mp4"
                muted
                loop
                autoplay
            ></video>
        </div>
    </div>
    <!-- page -->
    <div id="page8" class="relative flex h-screen w-screen gap-10 px-40 py-10 rounded-md ">
        <div class="w-1/2 flex flex-col gap-10 mt-10">
            <h1 class="text-5xl font-noigrotesk">People-centric</h1>
            <p class="font-noigrotesk text-lg">
                Create a better employee experience by building your HR software
                and processes around your people. With self-service and seamless
                approvals, your team does not have to jump through hoops to get
                the resources they need like with other HR software.
            </p>
        </div>
        <div class="-mt-10 relative h-[33rem] w-1/2">
            <div class="w-full h-full relative">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 988 858"
                width="988"
                height="858"
                preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                ><defs
                    ><text
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        style="font-size: 100px; font-family: Inter;">%</text
                    ><text
                        font-family="Inter"
                        font-style="normal"
                        font-weight="500"
                        style="font-size: 100px; font-family: Inter;"
                    ></text><text
                        font-family="Inter"
                        font-style="normal"
                        font-weight="400"
                        style="font-size: 100px; font-family: Inter;">g</text
                    ><clipPath id="__lottie_element_2192"
                        ><rect width="988" height="858" x="0" y="0"
                        ></rect></clipPath
                    ><image
                        xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_0.png"
                    ></image><image
                        xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_1.png"
                    ></image><image
                        xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_2.png"
                    ></image><image
                        xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_3.png"
                    ></image><image
                        xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_4.png"
                    ></image><image
                        xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_5.png"
                    ></image><clipPath id="__lottie_element_2288"
                        ><path d="M0,0 L520,0 L520,606 L0,606z"
                        ></path></clipPath
                    ><g id="__lottie_element_2324"
                        ><g
                            transform="matrix(1,0,0,1,260,303)"
                            opacity="1"
                            style="display: block;"
                            ><path
                                fill="rgb(255,0,0)"
                                fill-opacity="1"
                                d=" M-260,-279 C-260,-292.25 -249.25,-303 -236,-303 C-236,-303 236,-303 236,-303 C249.25,-303 260,-292.25 260,-279 C260,-279 260,219 260,219 C260,232.25 249.25,243 236,243 C236,243 44,243 44,243 C27.43,243 -25.43,243 -42,243 C-42,243 -236,243 -236,243 C-249.25,243 -260,232.25 -260,219 C-260,219 -260,-279 -260,-279z"
                            ></path><g
                                opacity="1"
                                transform="matrix(2,0,0,2,0,0)"
                                ><path
                                    fill="rgb(255,255,255)"
                                    fill-opacity="1"
                                    d=" M-130,-139.5 C-130,-146.1269989013672 -124.62699890136719,-151.5 -118,-151.5 C-118,-151.5 118,-151.5 118,-151.5 C124.62699890136719,-151.5 130,-146.1269989013672 130,-139.5 C130,-139.5 130,109.5 130,109.5 C130,116.12699890136719 124.62699890136719,121.5 118,121.5 C118,121.5 22,121.5 22,121.5 C13.715999603271484,121.5 -12.715999603271484,121.5 -21,121.5 C-21,121.5 -118,121.5 -118,121.5 C-124.62699890136719,121.5 -130,116.12699890136719 -130,109.5 C-130,109.5 -130,-139.5 -130,-139.5z"
                                ></path></g
                            ></g
                        ></g
                    ><g id="__lottie_element_2330"
                        ><g
                            style="display: block;"
                            transform="matrix(1,0,0,1,-440.25,469)"
                            opacity="1"
                            ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                                ><path
                                    fill="rgb(246,246,246)"
                                    fill-opacity="1"
                                    d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                                ></path><path
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    fill-opacity="0"
                                    stroke-miterlimit="4"
                                    stroke="rgb(255,255,255)"
                                    stroke-opacity="1"
                                    stroke-width="0"
                                    d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                                ></path></g
                            ></g
                        ></g
                    ><mask id="__lottie_element_2330_1" mask-type="alpha"
                        ><use xlink:href="#__lottie_element_2330"></use></mask
                    ><mask id="__lottie_element_2324_1" mask-type="alpha"
                        ><use xlink:href="#__lottie_element_2324"></use></mask
                    ></defs
                ><g clip-path="url(#__lottie_element_2192)"
                    ><g
                        transform="matrix(0,0.699999988079071,-0.699999988079071,0,838.5499877929688,17.850690841674805)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,440,10)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M-90,-99 C-90,-105.62699890136719 -84.62699890136719,-111 -78,-111 C-78,-111 79,-111 79,-111 C85.62699890136719,-111 91,-105.62699890136719 91,-99 C91,-99 91,56.5 91,56.5 C91,63.12699890136719 85.62699890136719,68.5 79,68.5 C79,68.5 -78,68.5 -78,68.5 C-84.62699890136719,68.5 -90,63.12699890136719 -90,56.5 C-90,56.5 -90,-99 -90,-99z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0,-0.699999988079071,0.699999988079071,0,639.75,873.25)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path></g
                        ></g
                    ><g
                        fill="rgb(155,157,158)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,962.0999755859375,426.29998779296875)"
                        opacity="1"
                        style="display: none;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        fill="rgb(116,207,140)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,962.0999755859375,426.29998779296875)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,775.2000122070312,413)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(220,221,221)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,775.2000122070312,413)"
                        opacity="1"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(115,207,140)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.46521300077438354,0,0,0.46521300077438354,752.6909790039062,205.6930694580078)"
                        opacity="1"
                        style="display: block;"
                        ><image
                            width="494px"
                            height="494px"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_5.png"
                        ></image></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,775.7249755859375,410.7250061035156)"
                        opacity="1"
                        style="display: block;"
                        ><g
                            opacity="1"
                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(246,246,246)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M2.121000051498413,-4.419000148773193 C2.121000051498413,-4.419000148773193 3.181999921798706,4.419000148773193 3.181999921798706,4.419000148773193 C3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(-0.699999988079071,0,0,-0.699999988079071,1107,595.70068359375)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,440,10)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M-85.5,-98 C-85.5,-104.62699890136719 -80.12699890136719,-110 -73.5,-110 C-73.5,-110 79,-110 79,-110 C85.62699890136719,-110 91,-104.62699890136719 91,-98 C91,-98 91,55 91,55 C91,61.62699890136719 85.62699890136719,67 79,67 C79,67 -73.5,67 -73.5,67 C-80.12699890136719,67 -85.5,61.62699890136719 -85.5,55 C-85.5,55 -85.5,-98 -85.5,-98z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0,-0.699999988079071,0.699999988079071,0,575.3499755859375,1032.1500244140625)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,76.56199645996094 C737.5,76.56199645996094 663,76.56199645996094 663,76.56199645996094 C663,76.56199645996094 688,88 688,108.5 C688,125.5 666.5,137.25 666.5,137.25 C666.5,137.25 734.5,137.25 734.5,137.25 C734.5,137.25 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,76.56199645996094 737.5,76.56199645996094z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,76.56199645996094 C737.5,76.56199645996094 663,76.56199645996094 663,76.56199645996094 C663,76.56199645996094 688,88 688,108.5 C688,125.5 666.5,137.25 666.5,137.25 C666.5,137.25 734.5,137.25 734.5,137.25 C734.5,137.25 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,76.56199645996094 737.5,76.56199645996094z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,330.875,399.17498779296875)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path></g
                        ></g
                    ><g
                        fill="rgb(155,157,158)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,886.5,714.7000122070312)"
                        opacity="1"
                        style="display: none;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        fill="rgb(116,207,140)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,886.5,714.7000122070312)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,710.7999877929688,702.7999877929688)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(220,221,221)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,710.7999877929688,702.7999877929688)"
                        opacity="1"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(115,207,140)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.4656889736652374,0,0,0.4656889736652374,695.14404296875,516.3447265625)"
                        opacity="1"
                        style="display: block;"
                        ><image
                            width="431px"
                            height="431px"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_4.png"
                        ></image></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,711.3250122070312,700.5250244140625)"
                        opacity="1"
                        style="display: block;"
                        ><g
                            opacity="1"
                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(246,246,246)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M2.121000051498413,-4.419000148773193 C2.121000051498413,-4.419000148773193 3.181999921798706,4.419000148773193 3.181999921798706,4.419000148773193 C3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0,-0.699999988079071,0.699999988079071,0,188.25,492.4507141113281)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,440,10)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M-85.5,-88 C-85.5,-94.62699890136719 -80.12699890136719,-100 -73.5,-100 C-73.5,-100 69,-100 69,-100 C75.62699890136719,-100 81,-94.62699890136719 81,-88 C81,-88 81,55 81,55 C81,61.62699890136719 75.62699890136719,67 69,67 C69,67 -73.5,67 -73.5,67 C-80.12699890136719,67 -85.5,61.62699890136719 -85.5,55 C-85.5,55 -85.5,-88 -85.5,-88z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0,0.699999988079071,-0.699999988079071,0,384.7749938964844,-321.125)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path></g
                        ></g
                    ><g
                        fill="rgb(155,157,158)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,264.1999816894531,280.70001220703125)"
                        opacity="1"
                        style="display: none;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        fill="rgb(116,207,140)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,264.1999816894531,280.70001220703125)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        transform="matrix(0.46614399552345276,0,0,0.46614399552345276,68.90067291259766,79.80066680908203)"
                        opacity="1"
                        style="display: block;"
                        ><image
                            width="449px"
                            height="449px"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_3.png"
                        ></image></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,93.4000015258789,264.6000061035156)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(220,221,221)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,93.4000015258789,264.6000061035156)"
                        opacity="1"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(115,207,140)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,93.92499542236328,262.32501220703125)"
                        opacity="1"
                        style="display: block;"
                        ><g
                            opacity="1"
                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(246,246,246)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M2.121000051498413,-4.419000148773193 C2.121000051498413,-4.419000148773193 3.181999921798706,4.419000148773193 3.181999921798706,4.419000148773193 C3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0,-0.699999988079071,0.699999988079071,0,475.9499816894531,973.3506469726562)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,440,10)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M-90.5,-96.5 C-90.5,-103.12699890136719 -85.12699890136719,-108.5 -78.5,-108.5 C-78.5,-108.5 109.5,-108.5 109.5,-108.5 C116.12699890136719,-108.5 121.5,-103.12699890136719 121.5,-96.5 C121.5,-96.5 121.5,92.5 121.5,92.5 C121.5,99.12699890136719 116.12699890136719,104.5 109.5,104.5 C109.5,104.5 -78.5,104.5 -78.5,104.5 C-85.12699890136719,104.5 -90.5,99.12699890136719 -90.5,92.5 C-90.5,92.5 -90.5,-96.5 -90.5,-96.5z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0,-0.699999988079071,0.699999988079071,0,235.14999389648438,1061.550048828125)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,76.56199645996094 C737.5,76.56199645996094 663,76.56199645996094 663,76.56199645996094 C663,76.56199645996094 688,88 688,108.5 C688,125.5 666.5,137.25 666.5,137.25 C666.5,137.25 734.5,137.25 734.5,137.25 C734.5,137.25 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,76.56199645996094 737.5,76.56199645996094z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,76.56199645996094 C737.5,76.56199645996094 663,76.56199645996094 663,76.56199645996094 C663,76.56199645996094 688,88 688,108.5 C688,125.5 666.5,137.25 666.5,137.25 C666.5,137.25 734.5,137.25 734.5,137.25 C734.5,137.25 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,76.56199645996094 737.5,76.56199645996094z"
                            ></path></g
                        ></g
                    ><g
                        fill="rgb(155,157,158)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,592.5,760.2000122070312)"
                        opacity="1"
                        style="display: none;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        fill="rgb(116,207,140)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,592.5,760.2000122070312)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,369.1999816894531,754.5999755859375)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(220,221,221)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,369.1999816894531,754.5999755859375)"
                        opacity="1"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(115,207,140)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,369.7250061035156,752.324951171875)"
                        opacity="1"
                        style="display: block;"
                        ><g
                            opacity="1"
                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(246,246,246)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M2.121000051498413,-4.419000148773193 C2.121000051498413,-4.419000148773193 3.181999921798706,4.419000148773193 3.181999921798706,4.419000148773193 C3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.46654996275901794,0,0,0.46654996275901794,312.77508544921875,464.37506103515625)"
                        opacity="1"
                        style="display: block;"
                        ><image
                            width="716px"
                            height="716px"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_2.png"
                        ></image></g
                    ><g
                        transform="matrix(0,-0.699999988079071,0.699999988079071,0,136.4499969482422,819.3506469726562)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,440,10)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M-85.5,-88 C-85.5,-94.62699890136719 -80.12699890136719,-100 -73.5,-100 C-73.5,-100 106,-100 106,-100 C112.62699890136719,-100 118,-94.62699890136719 118,-88 C118,-88 118,92 118,92 C118,98.62699890136719 112.62699890136719,104 106,104 C106,104 -73.5,104 -73.5,104 C-80.12699890136719,104 -85.5,98.62699890136719 -85.5,92 C-85.5,92 -85.5,-88 -85.5,-88z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,-318.1999816894531,250.25)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,-318.1999816894531,250.25)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path></g
                        ></g
                    ><g
                        fill="rgb(155,157,158)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,263.5,606.8999633789062)"
                        opacity="1"
                        style="display: none;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        fill="rgb(116,207,140)"
                        font-size="24"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0%"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,263.5,606.8999633789062)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-31.272502899169922,0)"
                            opacity="1"
                            style="display: inherit;">0</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-19.992774963378906,0)"
                            opacity="1"
                            style="display: inherit;">%</text
                        ></g
                    ><g
                        transform="matrix(0.46605998277664185,0,0,0.46605998277664185,11.614245414733887,337.3994140625)"
                        opacity="1"
                        style="display: block;"
                        ><image
                            width="572px"
                            height="572px"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_1.png"
                        ></image></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,41.599998474121094,592.199951171875)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(220,221,221)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,41.599998474121094,592.199951171875)"
                        opacity="1"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(115,207,140)"
                                fill-opacity="1"
                                d=" M12,0 C12,0 12,0 12,0 C12,6.622799873352051 6.622799873352051,12 0,12 C0,12 0,12 0,12 C-6.622799873352051,12 -12,6.622799873352051 -12,0 C-12,0 -12,0 -12,0 C-12,-6.622799873352051 -6.622799873352051,-12 0,-12 C0,-12 0,-12 0,-12 C6.622799873352051,-12 12,-6.622799873352051 12,0z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,42.125,589.9249877929688)"
                        opacity="1"
                        style="display: block;"
                        ><g
                            opacity="1"
                            transform="matrix(1.4142135381698608,1.4142135381698608,-1.4142135381698608,1.4142135381698608,0,0)"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(246,246,246)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M2.121000051498413,-4.419000148773193 C2.121000051498413,-4.419000148773193 3.181999921798706,4.419000148773193 3.181999921798706,4.419000148773193 C3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193 -3.181999921798706,4.419000148773193"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,512,283.5007019042969)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M-130,-139.5 C-130,-146.1269989013672 -124.62699890136719,-151.5 -118,-151.5 C-118,-151.5 118,-151.5 118,-151.5 C124.62699890136719,-151.5 130,-146.1269989013672 130,-139.5 C130,-139.5 130,109.5 130,109.5 C130,116.12699890136719 124.62699890136719,121.5 118,121.5 C118,121.5 -118,121.5 -118,121.5 C-124.62699890136719,121.5 -130,116.12699890136719 -130,109.5 C-130,109.5 -130,-139.5 -130,-139.5z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,22,399.70001220703125)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(1,0,0,1,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path><path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(255,255,255)"
                                stroke-opacity="1"
                                stroke-width="0"
                                d=" M737.5,77 C737.5,77 663,77 663,77 C663,77 688,88 688,108.5 C688,125.5 666.5,137 666.5,137 C666.5,137 734.5,137 734.5,137 C734.5,137 713.5,132.5 713.5,108.5 C713.5,84.5 737.5,77 737.5,77z"
                            ></path></g
                        ></g
                    ><g
                        clip-path="url(#__lottie_element_2288)"
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,330,71.40071105957031)"
                        opacity="1"
                        ><g
                            mask="url(#__lottie_element_2324_1)"
                            style="display: block;"
                            ><g
                                transform="matrix(0.673039972782135,0,0,0.6883400082588196,207.0000457763672,217.99908447265625)"
                                opacity="1"
                                ><image
                                    width="523px"
                                    height="523px"
                                    preserveAspectRatio="xMidYMid slice"
                                    xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_0.png"
                                ></image></g
                            ></g
                        ><g
                            mask="url(#__lottie_element_2330_1)"
                            style="display: block;"
                            ><g
                                transform="matrix(0.673039972782135,0,0,0.6883400082588196,207.0000457763672,217.99908447265625)"
                                opacity="1"
                                ><image
                                    width="523px"
                                    height="523px"
                                    preserveAspectRatio="xMidYMid slice"
                                    xlink:href="https://zelt.app/wp-content/themes/zelt/assets/lottie/home/feature/simple/images/img_0.png"
                                ></image></g
                            ></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,407,396.20001220703125)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(220,221,221)"
                                fill-opacity="1"
                                d=" M35,0 C35,0 35,0 35,0 C35,11.038000106811523 26.038000106811523,20 15,20 C15,20 -15,20 -15,20 C-26.038000106811523,20 -35,11.038000106811523 -35,0 C-35,0 -35,0 -35,0 C-35,-11.038000106811523 -26.038000106811523,-20 -15,-20 C-15,-20 15,-20 15,-20 C26.038000106811523,-20 35,-11.038000106811523 35,0z"
                            ></path></g
                        ></g
                    ><g
                        style="display: block;"
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,407,396.20001220703125)"
                        opacity="1"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(115,207,140)"
                                fill-opacity="1"
                                d=" M35,0 C35,0 35,0 35,0 C35,11.038000106811523 26.038000106811523,20 15,20 C15,20 -15,20 -15,20 C-26.038000106811523,20 -35,11.038000106811523 -35,0 C-35,0 -35,0 -35,0 C-35,-11.038000106811523 -26.038000106811523,-20 -15,-20 C-15,-20 15,-20 15,-20 C26.038000106811523,-20 35,-11.038000106811523 35,0z"
                            ></path></g
                        ></g
                    ><g
                        fill="rgb(18,23,24)"
                        font-size="22"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="500"
                        aria-label="Acme Company Device Security"
                        transform="matrix(1.399999976158142,0,0,1.399999976158142,507.79998779296875,148.40000915527344)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-103,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">A</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-87.55250549316406,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-78.22633361816406,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">m</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-61.55457305908203,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">e</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-52.228397369384766,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;"
                        >
                        </text><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-47.17084884643555,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">C</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-32.933650970458984,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">o</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-22.373899459838867,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">m</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-5.702143669128418,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">p</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,4.857605934143066,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">a</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,14.183781623840332,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">n</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,24.743526458740234,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">y</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,35.30327606201172,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;"
                        >
                        </text><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,40.36083221435547,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">D</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,55.808319091796875,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">e</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,65.13450622558594,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">v</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,75.69424438476562,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">i</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,81.36625671386719,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,90.69242858886719,-10.00018310546875)"
                            opacity="1"
                            style="display: inherit;">e</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            style="display: inherit;"
                        ></text><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-103,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">S</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-91.2020263671875,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">e</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-81.87584686279297,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-72.54966735839844,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">u</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-61.98991775512695,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">r</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-55.10295867919922,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">i</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-49.43095016479492,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">t</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-43.75894546508789,16.524816513061523)"
                            opacity="1"
                            style="display: inherit;">y</text
                        ></g
                    ><g
                        fill="rgb(21,19,28)"
                        font-size="12"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="400"
                        aria-label="Secure password"
                        transform="matrix(1.399999976158142,0,0,1.399999976158142,444.1000061035156,222.60000610351562)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-46.5,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">S</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-40.18474197387695,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">e</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-35.217735290527344,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-30.250728607177734,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">u</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-24.610864639282227,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">r</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-20.974340438842773,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">e</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-16.007335662841797,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;"
                        >
                        </text><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-13.368673324584961,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">p</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-7.728808403015137,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">a</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-2.7618026733398438,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">s</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,1.5501176118850708,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">s</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,5.862036228179932,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">w</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,14.16794204711914,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">o</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,19.807809829711914,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">r</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,23.44432830810547,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">d</text
                        ></g
                    ><g
                        fill="rgb(21,19,28)"
                        font-size="12"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="400"
                        aria-label="Encryption"
                        transform="matrix(1.399999976158142,0,0,1.399999976158142,419.6000061035156,289.79998779296875)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-29,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">E</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-22.02965545654297,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">n</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-16.389789581298828,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-11.422785758972168,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">r</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-7.786262035369873,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">y</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-2.1463980674743652,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">p</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,3.4934661388397217,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">t</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,6.467288017272949,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">i</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,9.441108703613281,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">o</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,15.080970764160156,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">n</text
                        ></g
                    ><g
                        fill="rgb(21,19,28)"
                        font-size="12"
                        font-family="Inter"
                        font-style="normal"
                        font-weight="400"
                        aria-label="Location tracking"
                        transform="matrix(1.399999976158142,0,0,1.399999976158142,444.1000061035156,256.20001220703125)"
                        opacity="1"
                        style="display: block;"
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-46.5,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">L</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-39.52965545654297,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">o</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-33.88978958129883,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-28.92278480529785,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">a</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-23.955780029296875,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">t</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-20.981958389282227,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">i</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-18.008136749267578,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">o</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-12.36827278137207,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">n</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-6.728410243988037,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;"
                        >
                        </text><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-4.08974552154541,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">t</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,-1.115923523902893,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">r</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,2.520596504211426,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">a</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,7.487603187561035,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">c</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,12.454608917236328,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">k</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,18.094472885131836,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">i</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,21.06829071044922,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">n</text
                        ><text
                            stroke-linecap="butt"
                            stroke-linejoin="round"
                            stroke-miterlimit="4"
                            xml:space="preserve"
                            transform="matrix(1,0,0,1,26.708160400390625,1.7271728515625)"
                            opacity="1"
                            style="display: inherit;">g</text
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,367.1000061035156,221.90000915527344)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(18,23,24)"
                                fill-opacity="1"
                                d=" M0,-2.5 C1.3797500133514404,-2.5 2.5,-1.3797500133514404 2.5,0 C2.5,1.3797500133514404 1.3797500133514404,2.5 0,2.5 C-1.3797500133514404,2.5 -2.5,1.3797500133514404 -2.5,0 C-2.5,-1.3797500133514404 -1.3797500133514404,-2.5 0,-2.5z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,367.1000061035156,256.8999938964844)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(18,23,24)"
                                fill-opacity="1"
                                d=" M0,-2.5 C1.3797500133514404,-2.5 2.5,-1.3797500133514404 2.5,0 C2.5,1.3797500133514404 1.3797500133514404,2.5 0,2.5 C-1.3797500133514404,2.5 -2.5,1.3797500133514404 -2.5,0 C-2.5,-1.3797500133514404 -1.3797500133514404,-2.5 0,-2.5z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,367.1000061035156,289.1000061035156)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(18,23,24)"
                                fill-opacity="1"
                                d=" M0,-2.5 C1.3797500133514404,-2.5 2.5,-1.3797500133514404 2.5,0 C2.5,1.3797500133514404 1.3797500133514404,2.5 0,2.5 C-1.3797500133514404,2.5 -2.5,1.3797500133514404 -2.5,0 C-2.5,-1.3797500133514404 -1.3797500133514404,-2.5 0,-2.5z"
                            ></path></g
                        ></g
                    ><g
                        transform="matrix(0.699999988079071,0,0,0.699999988079071,428,396.20001220703125)"
                        opacity="1"
                        style="display: block;"
                        ><g opacity="1" transform="matrix(2,0,0,2,0,0)"
                            ><path
                                fill="rgb(246,246,246)"
                                fill-opacity="1"
                                d=" M17,0 C17,0 17,0 17,0 C17,9.38230037689209 9.38230037689209,17 0,17 C0,17 0,17 0,17 C-9.38230037689209,17 -17,9.38230037689209 -17,0 C-17,0 -17,0 -17,0 C-17,-9.38230037689209 -9.38230037689209,-17 0,-17 C0,-17 0,-17 0,-17 C9.38230037689209,-17 17,-9.38230037689209 17,0z"
                            ></path></g
                        ></g
                    ></g
                ></svg
            >
            </div>
        </div>
    </div>
    <!-- footer -->
    <div class="bg-[#2F2F2F] text-white min-h-screen">
        <div class="container mx-auto px-4 py-16">
          <h1 class="text-5xl font-bold mb-8">
            The employee platform<br>for growth
          </h1>
          
          <button
                    class="bg-[#ffcd6d] w-60 text-black px-1 py-3 rounded-md flex justify-center items-center"
                    >Find out more &nbsp; <span class="border-l border-gray-100"
                        ><i class="bx bx-right-arrow-alt text-2xl"></i></span
                    ></button
                >
        </div>
        
        <footer class="border-t border-gray-700 mt-16 py-8">
          <div class="container mx-auto px-4 flex justify-between items-center">
            <div>
              <img src="https://zelt.app/wp-content/themes/zelt/assets/img/logo-inverse.svg" alt="Zelt" class="h-8">
              <div class="flex mt-4 space-x-4">
                <div class="p-2 bg-[#444444] rounded-full">
                    <a href="/" class="text-gray-400 hover:text-white ">
                        <i class='bx bxl-linkedin' ></i>
                    </a>
                </div>
                <!-- Add Twitter, Instagram, and Medium icons similarly -->
              </div>
            </div>
            
            <div class="flex space-x-16">
              <div>
                <h3 class="font-semibold mb-4">PRODUCT</h3>
                <ul class="space-y-2">
                  <li><a href="/" class="text-gray-400 hover:text-white">People</a></li>
                  <li><a href="/" class="text-gray-400 hover:text-white">Time Off</a></li>
                  <!-- Add other product links -->
                </ul>
              </div>
              
              <div>
                <h3 class="font-semibold mb-4">RESOURCES</h3>
                <ul class="space-y-2">
                  <li><a href="/" class="text-gray-400 hover:text-white">Knowledge Center</a></li>
                  <li><a href="/" class="text-gray-400 hover:text-white">Case Studies</a></li>
                  <!-- Add other resource links -->
                </ul>
              </div>
              
              <div>
                <h3 class="font-semibold mb-4">LEGAL</h3>
                <ul class="space-y-2">
                  <li><a href="/" class="text-gray-400 hover:text-white">Legal</a></li>
                  <li><a href="/" class="text-gray-400 hover:text-white">Security</a></li>
                </ul>
              </div>
            </div>
            
            <div class="p-2 ">
              <div class="bg-[#444444] p-2 rounded-md">
                <img class=' w-24 h-24' src="https://zelt.app/wp-content/uploads/2023/02/zelt.wp2.cubdev.com-qr-appstore.svg" alt="QR Code" > 
              </div>
              <p class="text-sm text-gray-400 mt-2">Scan with iPhone</p>
            </div>
          </div>
        </footer>
      </div>
    <!-- <footer class="w-screen h-screen bg-[#2F2F2F] text-white px-44">
        <div border-b>
            <p class="text-[3rem] font-noigrotesk">The employee platform for growth</p>
            <button
                    class="bg-[#ffcd6d] w-60 text-black px-1 py-3 rounded-md flex justify-center items-center"
                    >Find out more &nbsp; <span class="border-l border-gray-100"
                        ><i class="bx bx-right-arrow-alt text-2xl"></i></span
                    ></button
                >
        </div>
        <div></div>
    </footer> -->
</main>
