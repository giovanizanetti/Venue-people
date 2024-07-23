<script setup lang="ts">
import { BREAKPOINTS } from '@/styles/variables'

import type { IUser } from '@/mockdata/users'
import { useWindowResize } from '@/composables/useWindowResize'
import { computed } from 'vue'

const { width } = useWindowResize()

// const POSITION = {
//   first: 'fist',
//   last: 'last',
//   single: 'single'
// } as const
// type TPosition = (typeof POSITION)[keyof typeof POSITION]

const props = defineProps<{
  user: IUser
  isFirst: boolean
  isLast: boolean
}>()

const dynamicClasses = computed((): string[] => {
  const classes: string[] = []
  if (props.isFirst) classes.push('list-item__first')
  if (props.isLast) classes.push('list-item__last')
  return classes
})

const onClick = () =>
  console.warn('Currentelly there is no functionalitty attached to this button')
</script>

<template>
  <li :class="['list-item', ...[dynamicClasses]]">
    <span class="avatar">
      <UserAvatar :src="user.image" />
    </span>
    <div class="user-info">
      <div class="username">
        <span class="user-info__item"> {{ props.user.fullName }}</span
        ><span class="xs user-info__item">{{ user.xc }}</span>
      </div>
      <div class="phone">
        <span v-if="width >= BREAKPOINTS.tablet" class="email user-info__item"
          >{{ user.email }} <span class="divisor">|</span></span
        >
        <span class="phone__prefix user-info__item">{{
          user.phoneCountryPrefix
        }}</span
        ><span>{{ user.phoneNumber }}</span>
      </div>
    </div>
    <span class="team-icon"
      ><!--I'm assuming the team will be always 3-->
      <div class="circle green">1</div>
      <div class="circle pink">2</div>
      <div class="circle purple">3</div>
    </span>
    <span class="remove-team-member" @click="onClick">
      <carbon:trash-can class="w-5 h-5" />
    </span>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  list-style-type: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  border-bottom: $thin-light-1;
  border-left: $thin-light-1;
  border-right: $thin-light-1;
  background-color: $grey-light-1;
  height: 64px;

  &__first {
    border-top: $thin-light-1;
    border-top-left-radius: $radius-md;
    border-top-right-radius: $radius-md;
  }

  &__last {
    border-bottom-left-radius: $radius-md;
    border-bottom-right-radius: $radius-md;
  }

  .avatar {
    flex: 1.4;
    margin-top: 4px;
    text-align: center;
  }
  .user-info {
    flex: 7;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: $desktop) {
      .divisor {
        margin: 0 0.5rem;
      }
    }

    @media screen and (min-width: $desktop) {
      flex: 10;
      flex-direction: row !important;
      .divisor {
        display: none;
      }
      &__item {
        margin: 0 2rem;
      }
    }

    .username {
      font-weight: 600;
    }
    .xs {
      margin-left: $margin-xs;
    }
    .phone {
      &__prefix {
        margin-right: $margin-xs;
      }
    }
  }
  .team-icon {
    flex: 2;

    display: flex;
    justify-content: center;

    @media screen and (min-width: $desktop) {
      flex: 0.5;
    }

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      background-color: white;
      border: 1px solid black;
      margin-right: -5px;
    }
  }
  .remove-team-member {
    flex: 1.4;
    display: flex;
    justify-content: center;
    margin-right: -0.5rem;

    @media screen and (min-width: $desktop) {
      flex: 1;
    }
  }
}
</style>
../views/mockdata/mockdata
