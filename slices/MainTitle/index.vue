<template>
  <section class="section bg-black h-[80vh] px-12 pt-16 lg:px-40 lg:pt-32 flex items-end">
    <prismic-rich-text :field="slice.primary.title" class="text-5xl leading-tight lg:text-8xl font-serif" />
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
}
</script>

