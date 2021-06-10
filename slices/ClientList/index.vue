<template>
  <section class="section px-12 pt-16 lg:pt-30 lg:px-40">
    <hr class="text-grey opacity-40" />
    <div class="flex py-16 lg:py-30">
      <prismic-rich-text :field="slice.primary.title" class="title text-grey font-bold w-[40%]" />
      <prismic-rich-text :field="slice.primary.list" class="w-[60%] list font-bold" />
    </div>
    <hr class="text-grey opacity-40" />
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
  @apply flex flex-wrap;
}

.list li {
  @apply w-[50%] mb-4;
}
</style>
