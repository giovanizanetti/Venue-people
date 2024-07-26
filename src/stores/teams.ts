import { teamsMock, type ITeam } from '@/mockdata/teams'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useTeams = defineStore('teams', () => {
  const teams: Ref<{ [id: number]: ITeam }> = ref({ ...teamsMock })

  const addTeam = (team: ITeam) => (teams.value[team.id] = team)
  const deleteTeam = (teamId: number) => console.log(teamId)

  return {
    teams,
    addTeam,
    deleteTeam
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTeams, import.meta.hot))
}
