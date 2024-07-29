<script setup lang="ts">
import { capitalize } from '../helpers/strings'
import { handleDummyClick } from '@/helpers/dummyFunctinality'

defineProps<{
  type: string
}>()
</script>

<template>
  <RouterLink to="#" @click="handleDummyClick">
    <span class="add"
      ><span class="text">{{ `New ${capitalize(type)}` }}</span>
    </span>
  </RouterLink>
</template>
<style lang="scss" scoped>
.add {
  width: 100%;
  display: flex;
  margin: $margin-sm $margin-xs;
  .text {
    margin: 0 $margin-xxs;
    font-weight: 500;
    font-size: $typography-2;
    text-decoration: underline;
  }

  &:hover {
    color: lighten($black-1, 35%);
  }
}
</style>
