import { mockUsers, type IUser } from '@/mockdata/users'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useUsers = defineStore('team', () => {
  const users: Ref<IUser[]> = ref([...mockUsers])

  const addUser = (user: IUser) => users.value.unshift(user)
  const deleteUser = (teamId: number) => console.log(teamId)

  return {
    users,
    addUser,
    deleteUser
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot))
}
