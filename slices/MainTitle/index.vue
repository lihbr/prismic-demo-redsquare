<template>
  <section class="section h-[60vh] px-12 pt-16 lg:px-40 lg:pt-32 flex items-end">
    <h1 class="text-5xl leading-tight lg:text-8xl font-serif sliceMainTitle" v-html="$prismic.asText(slice.primary.title)" ref="h1" />
  </section>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  async mounted() {
    const Splitting = (await import("splitting")).default;

    Splitting({ target: this.$refs.h1, by: 'words' });
  }
}
</script>

