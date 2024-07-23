<script setup lang="ts">
import { capitalize } from '../helpers/strings'
import { handleDummyClick } from '@/helpers/dummyFunctinality';

defineProps<{
  type: string
}>()
</script>

<template>
  <RouterLink to="/" @click="handleDummyClick">
    <span class="add-user"
      ><carbon:add class="w-5 h-5" /><span class="text">{{
        `New ${capitalize(type)}`
      }}</span>
    </span></RouterLink
  >
</template>
<style lang="scss" scoped>
.add-user {
  display: flex;
  margin: $margin-sm $margin-xs;
  .text {
    margin: 0 $margin-xxs;
    font-weight: 500;
    font-size: $typography-2;
    text-decoration: underline;
  }
}
</style>
