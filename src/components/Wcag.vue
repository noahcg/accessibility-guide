<template>
  <div>
    <p class="font-bold text-lg text-red-600">WCAG Criteria</p>
    <p class="mb-4">
      <a class="text-blue-600 hover:underline" :href="href" target="_blank"
        ><slot></slot
      ></a>
    </p>
  </div>
</template>

<script>
export default {
  name: "wcag",
  props: ["href"],
};
</script>

<style scoped>
</style>
