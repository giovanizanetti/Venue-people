<template>
  <div class="field-section-multiple" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import type { StyleValue } from 'vue';
import { computed } from 'vue'

const { width } = useWindowResize()

const props = defineProps<{
  maxBreakpointColumn?: number
}>()

const style = computed((): StyleValue => {
  return {
    flexDirection:
      width.value <= (Number(props?.maxBreakpointColumn)) ? 'column' : 'row'
  }
})
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
