<template>
  <div
    class="field-section-multiple"
    :style="{ flexDirection: width <= maxBreakpointColumn ? 'column' : 'row' }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'

const { width } = useWindowResize()

defineProps<{
  maxBreakpointColumn: number
}>()
</script>

<style scoped lang="scss">
.field-section-multiple {
  display: flex;
  justify-content: space-between;
  margin-bottom: -$margin-sm;

  & > :first-child {
    margin-right: $margin-sm;
  }

  :slotted(.formkit-outer) {
    width: 100%;
  }

  .formkit-outer {
    width: 100%;
  }
}
</style>
