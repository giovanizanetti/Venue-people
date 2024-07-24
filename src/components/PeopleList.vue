<script setup lang="ts">
import type { IUser } from '@/mockdata/users'
import PeopleListItem from './PeopleListItem.vue'
import AppHeading from './AppHeading.vue'
import AppAddButton from './AppAddButton.vue'
import { storeToRefs } from 'pinia'
import { useUsers } from '@/stores/users'

const { users } = storeToRefs(useUsers())

const isFirst = (index: number) => index == 0
const isLast = (index: number) => users.value.length == index + 1
</script>

<template>
  <div class="users-wrapper">
    <AppHeading text="People" />
    <ul>
      <PeopleListItem
        v-for="(user, index) in users"
        :key="user.id"
        :user="user"
        :isLast="isLast(index)"
        :isFirst="isFirst(index)"
      />
    </ul>
    <AppAddButton class="add" type="user" />
  </div>
</template>
<style lang="scss" scoped>
.users-wrapper {
  margin: 0;
}

.heading {
  justify-content: center;
}

.add:deep(.add) {
  @media screen and (max-width: $tablet-sm) {
    justify-content: center;
  }
}
</style>
