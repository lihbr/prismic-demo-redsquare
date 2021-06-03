<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
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

<style scoped>
.section {
  height: 80vh;
  padding: 0 50px 60px 50px;
  background: #111111;
  display: flex;
  align-items: flex-end;
  font-size: 3rem;
  line-height: 1.25;
  font-family: "yeseva one"
}

@media (min-width: 1040px) {
  .section {
    font-size: 5rem;
    padding: 0 160px 140px 160px;
  }
}
</style>
