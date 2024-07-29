<script setup lang="ts">
import { useTeams } from '@/stores/teams'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const { teams } = storeToRefs(useTeams())
</script>

<template>
  <div class="teams-wrapper">
    <AppHeading class="heading" text="Teams" />
    <ul class="list">
      <TeamsListItem
        v-for="(team, key) in teams"
        :key="key"
        :color="team.color"
        :label="team.name?.[locale as 'en' | 'nl']"
      />
    </ul>
    <AppAddButton :tooltip="'Not functional'" type="team" />
  </div>
</template>

<style scope lang="scss">
.teams-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  .list {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: $tablet-sm) {
      justify-content: center;
    }
  }
  @media screen and (max-width: $tablet-sm) {
    justify-content: center;
    align-items: center;
  }
  .heading {
    @media screen and (max-width: $tablet-sm) {
      width: 358px;
    }
  }
}
</style>
