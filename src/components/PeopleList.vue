<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUsers } from '@/stores/users'
import AppLoading from './AppLoading.vue'
import { onMounted } from 'vue'

const { users, loading, success } = storeToRefs(useUsers())

onMounted(async () => await useUsers().fetchUsers())

const isFirst = (index: number) => index == 0
const isLast = (index: number) => users.value.length == index + 1
</script>

<template>
  <AppLoading v-if="!success" :loading="loading" />

  <template v-if="success">
    <div class="users-wrapper">
      <AppHeading text="People" />
      <ul v-if="success">
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
</template>
<style lang="scss" scoped>
.users-wrapper {
  margin: 0;

  .heading {
    display: flex;
    align-items: center;
    @media screen and (max-width: $tablet-sm) {
      justify-content: center;
    // justify-content: center;
  }

  .add:deep(.add) {
    margin-top: -0.5px;

    @media screen and (max-width: $tablet-sm) {
      justify-content: center;
    }
  }
}
</style>
