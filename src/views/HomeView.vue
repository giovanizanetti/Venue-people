<script setup lang="ts">
import TeamCard from '@/components/TeamCard.vue'
import { TEAM_TYPE } from '@/constants'
import PeopleListItem from '@/components/PeopleListItem.vue'
import PeopleList from '@/components/PeopleList.vue'
import { mockUsers } from '@/mockdata/users'
</script>

<template>
  <!-- <TeamCard :type="TEAM_TYPE.backOfHouse" /> -->
  <PeopleListItem :user="mockUsers[0]" />
  <PeopleList></PeopleList>
</template>
@/views/mockdata/mockdata
