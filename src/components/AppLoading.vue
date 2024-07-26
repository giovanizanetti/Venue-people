<script setup lang="ts">
withDefaults(
  defineProps<{
    loading: boolean
    errorMessage?: string | null
    showError?: boolean
  }>(),
  {
    showError: true,
    errorMessage: null
  }
)

const genericErrorMessage = 'Something went wrong ☹️!'
</script>

<template>
  <div class="center" v-if="loading">Loading...</div>
  <div v-if="!loading && showError" class="center">
    {{ errorMessage || genericErrorMessage }}
  </div>
</template>

<style scoped lang="scss">
.center {
  font-size: $typography-3;
  width: 100%;
  padding: 5rem;
  text-align: center;
}
</style>
