<template>
  <a :href="href">
    <!-- @slot default inner link content -->
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "my-link",
  props: ["href"],
};
</script>

<style scoped>
</style>
