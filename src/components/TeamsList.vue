<template>
  <div>
    <AppHeading text="Teams" />
    <ul class="list">
      <TeamsListItem
        v-for="(team, key) in teams"
        :key="key"
        :color="team.color"
        :label="team.name[locale]"
      />
    </ul>
    <AppAddButton type="team" />
  </div>
</template>
<script setup lang="ts">
import { useTeams } from '@/stores/teams'
import TeamsListItem from './TeamsListItem.vue'
import { storeToRefs } from 'pinia'

const locale = 'en' //TODO: get from I18n

const { teams } = storeToRefs(useTeams())
</script>

<style scope lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
