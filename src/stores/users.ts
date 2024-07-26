import { ROUTE } from '@/constants'
import axios from '@/mockdata/axiosMock'
import type { IUser } from '@/mockdata/users'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useUsers = defineStore('users', () => {
  const router = useRouter()
  const users: Ref<IUser[]> = ref([])
  const loading = ref(false)
  const success = ref(false)

  

  const fetchUsers = async () => {
    try {
      loading.value = true
      const response = await axios.get('/users')
      users.value = response.data
      console.log(localStorage)
      success.value = true
    } catch (error) {
      success.value = false
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  const getUserById = async (id: number) => {
    if (!users.value?.length && !loading.value) {
      await fetchUsers()
      return users.value?.find((user) => user.id === id)
    }
    return users.value?.find((user) => user.id === id)
  }

  const updateUser = async (data: IUser) => {
    try {
      loading.value = true
      const response = await axios.put(`/users/${data.id}`, data)
      return response.data
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  // const addUser = (user: IUser) => users.value.unshift(user)
  const deleteUser = (teamId: number) => console.log(teamId)

  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('users')
    if (storedData) {
      users.value = JSON.parse(storedData)
    }
  }

  return {
    users,
    loading,
    success,
    // addUser,
    deleteUser,
    fetchUsers,
    getUserById,
    updateUser
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot))
}
