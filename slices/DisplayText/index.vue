<template>
  <section class="section px-12 pt-16 lg:px-40 lg:pt-32">
    <prismic-rich-text :field="slice.primary.text" class="richtext" />
  </section>
</template>

<script>
export default {
  name: "DisplayText",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style>
.richtext h2 {
  @apply text-6xl font-extrabold mb-12;
  line-height: 1.3;
}

.richtext p {
  @apply text-3xl font-bold leading-loose;
}
</style>
