<template>
  <SliceZone type="page" uid="home" slices-key="PageSliceZone" class="sliceZone opacity-0" />
</template>

<script>
import gsap from "gsap";
import SliceZone from 'vue-slicezone';

export default {
  components: { SliceZone },
  mounted() {
    const timeline = gsap.timeline();

    setTimeout(() => {
      gsap.set(".sliceZone", {
        transform: "translateY(140px)"
      })

      gsap.set(".word", {
        opacity: 0
      });

      timeline.set(".headerLogo", {
        clipPath: "circle(50% at 50% 50%)",
        opacity: 1,
        transformOrigin: "center center",
        backgroundColor: "rgb(60, 60, 255)"
      }).to(".headerLogo", {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        ease: "steps(1)",
        backgroundColor: "yellow",
        duration: .3,
        delay: .3
      }).to(".headerLogo", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "steps(1)",
        backgroundColor: "#e31e3c",
        duration: .3,
        delay: .3
      });

      timeline.to(".sliceZone", {
        opacity: 1,
        duration: .3
      }, "+=.3");

      timeline.to(".headerMenu", {
        opacity: 1,
        duration: .5
      }, "-=.3")

      timeline.to(".headerTitle", {
        opacity: 1,
        duration: .5
      }, "-=.5").to(".headerTitle", {
        opacity: 0,
        delay: 2,
        duration: .5
      });

      timeline.to(".sliceZone", {
        transform: "translateY(0)",
        duration: .8,
        ease: "power1.out"
      }, "-=1");

      timeline.to(".word", {
        opacity: 1,
        stagger: {
          each: .3
        },
        ease: "power1.in"
      }, "-=3.3");

    }, 500);
  }
};
</script>
