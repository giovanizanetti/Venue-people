<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="heading">{{ text.toUpperCase() }}</h2>
</template>
<style scope lang="scss">
.heading {
  font-family: Space Grotesk;
  font-weight: 300;
  font-size: $typography-2;
  margin: 7.5px $radius-sm;
}
</style>
