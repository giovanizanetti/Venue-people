<script setup lang="ts">
import type { IUser } from '@/mockdata/users'
import PeopleListItem from './PeopleListItem.vue'
import AppHeading from './AppHeading.vue'
import AppAddButton from './AppAddButton.vue';

const props = defineProps<{
  users: IUser[]
}>()

const isFirst = (index: number) => index == 0
const isLast = (index: number) => props.users.length == index + 1
</script>

<template>
  <div>
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
    <AppAddButton type="user" />
  </div>
</template>
<style lang="scss" scoped>
.add-user {
  display: flex;
  margin: $margin-xs;
  .text {
    margin: 0 $margin-xxs;
    font-weight: 500;
    font-size: $typography-2;
    text-decoration: underline;
  }
}
</style>
