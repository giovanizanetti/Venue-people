<script setup lang="ts">
import { TYPOGRAPHY, type TTypography } from '@/styles/variables'

withDefaults(
  defineProps<{
    size?: TTypography
  }>(),
  { size: TYPOGRAPHY.lg }
)
</script>

<template>
  <h1 class="heading" :style="{ fontSize: size }">Venue People</h1>
</template>

<style lang="scss" scoped>
.heading {
  font-family: 'Cormorant Infant', serif;
}
</style>
