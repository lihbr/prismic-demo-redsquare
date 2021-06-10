<template>
  <div class="bg-black">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #111111;
  color: #fefefe;
  font-family: "Montserrat";
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
