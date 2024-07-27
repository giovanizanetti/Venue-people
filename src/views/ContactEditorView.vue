<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUsers } from '@/stores/users'
import type { IUser } from '@/mockdata/users'

const route = useRoute()
const user = ref<IUser | null>(null)
const loading = ref(false)

onMounted(async () => await getUser())

async function getUser() {
  const { id } = route.params

  loading.value = true
  const response = await useUsers().getUserById(Number(id))

  if (response) {
    user.value = response
    loading.value = false
  }
}
</script>

<template>
  <UserForm v-if="user" :user="user" />
  <span v-if="!user && !loading">Failed loading the user</span>
  <AppLoading v-if="loading" :loading="loading" />
</template>
