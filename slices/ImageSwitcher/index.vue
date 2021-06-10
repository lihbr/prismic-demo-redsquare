<template>
  <section class="section px-12 pt-16 lg:px-40 lg:pt-32" @click="index++">
    <prismic-link :field="slice.primary.action" class="group py-5">
      <nuxt-img
        class="block w-full h-screen rounded transform group-hover:scale-95 transition-transform object-cover"
        v-if="slice.items[index % slice.items.length].image.url"
        :src="slice.items[index % slice.items.length].image.url"
        sizes="md:100vw lg:900px xl:1480px"
      />
    </prismic-link>
  </section>
</template>

<script>
export default {
  name: "ImageSwitcher",
  data() {
    return {
      index: 0
    }
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  mounted() {
    setInterval(() => {
      this.index++;
    }, 250);
  }
}
</script>
