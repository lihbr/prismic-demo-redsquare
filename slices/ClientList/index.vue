<template>
  <section class="section px-12 pt-16 lg:px-40 lg:pt-32 flex">
    <prismic-rich-text :field="slice.primary.title" class="title text-grey font-bold w-[40%]" />
    <prismic-rich-text :field="slice.primary.list" class="w-[60%] list font-bold" />
  </section>
</template>

<script>
export default {
  name: "ClientList",
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
.list ul {
  @apply flex flex-col flex-wrap h-[400px];
}

.list li {
  @apply w-[50%] mb-4;
}
</style>
