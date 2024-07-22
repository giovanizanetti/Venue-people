<script setup lang="ts">
import { capitalize } from '@/Utils/strings'
import { TEAM_TYPE } from '@/constants'
import { COLOR } from '@/styles/variables'
import type { TeamType } from '@/types'
import { computed } from 'vue'

import type { userAddressMock, mockUser } from '../mockdata'

// const props = defineProps<{ e: TeamType }>()

const props = defineProps<{
  user: typeof mockUser
}>()

const onClick = () =>
  console.warn('Currentelly there is no functionalitty attached to this button')
</script>

<template>
  <li class="list-item">
    <span class="avatar"></span>
    <span class="username">{{ props.user.fullName }}</span>
    <span class="team-icon"></span>
    <span class="remove-team-member">
      <carbon:trash-can class="w-5 h-5" />
    </span>
  </li>
</template>

<style lang="scss" scoped>
  
.list-item {
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: orange;
  height: 64px;

  .avatar {
    flex: 1;
    background-color: aqua;
  }
  .usename {
    flex: 5;
    background-color: blueviolet;
  }
  .team-icon {
    flex: 2;
    background-color: red;
  }
  .remove-team-member {
    flex: .75;
  }
}
</style>
