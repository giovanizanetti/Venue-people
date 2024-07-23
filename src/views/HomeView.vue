<script setup lang="ts">
import PeopleList from '@/components/PeopleList.vue'
import { mockUsers } from '@/mockdata/users'
import TeamsList from '@/components/TeamsList.vue'
</script>

<template>
  <!-- <TeamCard :type="TEAM_TYPE.backOfHouse" /> -->
  <!-- <PeopleListItem :user="mockUsers[0]" /> -->
  <!-- <PeopleList :users="mockUsers" /> -->
  <TeamsList />
</template>
