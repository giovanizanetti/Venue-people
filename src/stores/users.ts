import axios from '@/mockdata/axiosMock'
import type { IUser } from '@/mockdata/users'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useUsers = defineStore('users', () => {
  const users: Ref<IUser[]> = ref([])
  const loading = ref(false)
  const success = ref(false)

  const fetchUsers = async () => {
    try {
      loading.value = true
      const response = await axios.get('/users')
      success.value = true
      users.value = response.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  // const addUser = (user: IUser) => users.value.unshift(user)
  const deleteUser = (teamId: number) => console.log(teamId)

  return {
    users,
    loading,
    success,
    // addUser,
    deleteUser,
    fetchUsers
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot))
}
