<template>
  <a :class="styles" :href="href">
    <!-- @slot default inner link content -->
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "wink",
  props: ["href", "styles"],
};
</script>

<style scoped>
</style>
