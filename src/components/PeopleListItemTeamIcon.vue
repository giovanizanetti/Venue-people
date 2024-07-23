<script setup lang="ts">
import { computed } from 'vue'
import type { IUser } from '@/mockdata/users'
import { storeToRefs } from 'pinia'
import { useTeams } from '@/stores/teams'
const { teams } = storeToRefs(useTeams())

const locale: 'en' | 'nl' = 'en' //TODO: get from i18n, if I have time to implement a language switch

const props = defineProps<{
  user: IUser
}>()

interface ITeamIconData {
  label: string
  backgroundColor: string
  title: string
}

const getTeamIconData = (teamId: number): ITeamIconData | null => {
  const hasTeam = props.user.teamIds.some((id) => id === teamId)
  if (hasTeam) {
    const team = teams.value[teamId]
    return {
      label: team.abbreviation,
      backgroundColor: team.color,
      title: team.name[locale]
    }
  } else return null
}

const iconData = computed((): ITeamIconData[] => {
  const placeholderIconData: ITeamIconData = {
    label: '',
    backgroundColor: 'white',
    title: ''
  }
  const data = [placeholderIconData, placeholderIconData, placeholderIconData]
  const team1 = getTeamIconData(1)
  const team2 = getTeamIconData(2)
  const team3 = getTeamIconData(3)
  if (team1) data[0] = team1
  if (team2) data[1] = team2
  if (team3) data[2] = team3
  return data
})
</script>
<template>
  <!--I'm assuming the team will be always 3 teams-->
  <div
    v-for="(item, index) in iconData"
    :key="index"
    :title="item.title"
    class="circle"
    :style="{ backgroundColor: item.backgroundColor }"
  >
    {{ item.label }}
  </div>
</template>

<style lang="scss" scoped>
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid black;
  margin-right: -5px;
}
</style>
