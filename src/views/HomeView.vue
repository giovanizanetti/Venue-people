<script setup lang="ts">
import { TYPOGRAPHY } from '@/styles/variables'
</script>

<template>
  <main class="main">
    <BrandName :size="TYPOGRAPHY.xxl" class="brand-name" />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .brand-name {
    margin-top: -$margin-xxl;
  }
}
</style>
