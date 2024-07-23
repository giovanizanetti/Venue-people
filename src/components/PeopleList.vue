<script setup lang="ts">
import type { IUser } from '@/mockdata/users'
import PeopleListItem from './PeopleListItem.vue'

const props = defineProps<{
  users: IUser[]
}>()

const isFirst = (index: number) => index == 0
const isLast = (index: number) => props.users.length == index + 1
</script>

<template>
  <ul>
    <PeopleListItem
      v-for="(user, index) in users"
      :key="user.id"
      :user="user"
      :isLast="isLast(index)"
      :isFirst="isFirst(index)"
    />
  </ul>
</template>
