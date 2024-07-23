<script setup lang="ts">
import { capitalize } from '@/helpers/strings'
import { TEAM_TYPE } from '@/constants'
import { COLOR } from '@/styles/variables'
import type { TeamType } from '@/types'
import { computed } from 'vue'
import { handleDummyClick } from '@/helpers/dummyFunctinality'

const props = defineProps<{ color: string; label: string }>()

// const circleBgColor = computed(() => {
//   return props.type == TEAM_TYPE.management
//     ? COLOR.pink1
//     : props.type == TEAM_TYPE.backOfHouse
//     ? COLOR.gree1
//     : COLOR.purple1
// })
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
  display: flex;
  align-items: center;
  padding: $padding-sm;
  width: 358px;
  height: 72px;
  border-radius: $radius-sm;
  background-color: $white-1;
  .title {
    flex: 5;
    padding: 0.5rem;
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
