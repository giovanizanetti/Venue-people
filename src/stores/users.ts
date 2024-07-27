import { LOCAL_STORAGE_PROPS } from '@/constants'
import axios from '@/mockdata/axiosMock'
import type { IUser } from '@/mockdata/users'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useUsers = defineStore('users', () => {
  const users: Ref<IUser[]> = ref([])
  const loading = ref(false)
  const success = ref(false)

  const syncWithLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_PROPS.users, JSON.stringify(users.value))
  }

  const fetchUsers = async () => {
    try {
      loading.value = true
      const response = await axios.get('/users')
      users.value = response.data
      syncWithLocalStorage()
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
      syncWithLocalStorage
      return response.data
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  const addUser = async (user: IUser) => {
    try {
      loading.value = true
      const response = await axios.post('/users/new', user)
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
    // users.value.unshift(user)
    console.log('AD  NEW USER FROM THE STORE')
  }

  const deleteUser = async (userId: number) => {
    try {
      loading.value = true
      await axios.delete(`/users/${userId}`)
      syncWithLocalStorage
      await fetchUsers()
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    success,
    addUser,
    fetchUsers,
    getUserById,
    updateUser,
    deleteUser
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot))
}
