<template>
  <footer class="section px-12 lg:px-40">
    <div class="py-16 lg:py-30 lg:flex lg:justify-between items-end">
      <a href="mailto:contact@prismic.io" class="font-bold text-6xl contact">
        Let's talk.<br />
        <span class="text-velvet">hi@rsq.com</span>
      </a>
      <nav class="flex flex-col items-end">
        <ul class="flex space-x-8">
          <li>
            <a href="#">
              <instagram-svg class="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <twitter-svg class="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <linkedin-svg class="h-6 w-6" />
            </a>
          </li>
        </ul>
        <ul class="flex text-grey space-x-8 mt-8 font-bold">
          <li>
            <a href="">
              Mobile, AL
            </a>
          </li>
          <li>
            <a href="">
              Chicago, IL
            </a>
          </li>
          <li>
            <a href="">
              Tulsa, OK
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import InstagramSvg from "~/components/InstagramSvg.vue";
import TwitterSvg from "~/components/TwitterSvg.vue";
import LinkedinSvg from "~/components/LinkedinSvg.vue";

export default {
  components: {
    InstagramSvg,
    TwitterSvg,
    LinkedinSvg
  }
}
</script>

<style scoped>
.contact::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: block;
  z-index: -1;
  pointer-events: none;
  backdrop-filter: blur(10px);
  opacity: 0;
  will-change: opacity;
  transition: opacity .4s ease;
}

.contact:hover::before {
  opacity: 1;
}

.contact {
  position: relative;
  z-index: 1;
}
</style>
