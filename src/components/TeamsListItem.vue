<script setup lang="ts">
import { capitalize } from '@/helpers/strings'
import { handleDummyClick } from '@/helpers/dummyFunctinality'

defineProps<{ color: string; label: string }>()
</script>

<template>
  <li class="card">
    <div class="circle-container">
      <div class="circle" :style="{ backgroundColor: color }" />
    </div>
    <div class="title">{{ capitalize(label) }}</div>
    <div class="icon-button" role="button" @click="handleDummyClick">
      <carbon:edit class="w-5 h-5" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
.card {
  margin: $margin-xxs;
  display: flex;
  align-items: center;
  padding: $padding-sm;
  width: 358px;
  height: 72px;
  border-radius: $radius-xs;
  background-color: $white-1;
  .title {
    flex: 5;
    padding: 0.5rem;
    font-weight: 500;
  }
  .circle-container {
    flex: 1;
    .circle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .icon-button {
    flex: 0.7;
  }
}
</style>
