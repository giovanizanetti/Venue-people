<script setup lang="ts">
import TeamCard from '@/components/TeamCard.vue'
import { TEAM_TYPE } from '@/constants'
import PeopleListItem from '@/components/PeopleListItem.vue'
import { mockUser } from '@/mockdata'
</script>

<template>
  <!-- <TeamCard :type="TEAM_TYPE.backOfHouse" /> -->
  <PeopleListItem :user="mockUser" />
</template>
