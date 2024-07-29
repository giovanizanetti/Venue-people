<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUsers } from '@/stores/users'
import UserForm from '@/components/UserForm.vue'
import AppLoading from '@/components/AppLoading.vue'
import type { IUser } from '@/mockdata/users'

const route = useRoute()
const user = ref<IUser | null>(null)
const loading = ref(false)

onMounted(async () => await getUser())

async function getUser() {
  const { id } = route.params

  try {
    loading.value = true
    const response = await useUsers().getUserById(Number(id))
    if (response) {
      user.value = response
      loading.value = false
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <UserForm v-if="user" :user="user" />
  <span v-if="!user && !loading">Failed loading the user</span>
  <AppLoading v-if="loading" :loading="loading" />
</template>
