import { teamsMock, type ITeam } from '@/mockdata/teams'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useConfig = defineStore('config', () => {
  const data: Ref<ITeam[]> = ref([...teamsMock])

  const addTeam = (team: ITeam) => data.value.push(team)
  const editTeam = (team: ITeam) => 'No functionality'
  const deleteTeam = (teamId: number) => 'No functionality'
  return {
    data,
    addTeam,
    editTeam,
    deleteTeam
  }
})
