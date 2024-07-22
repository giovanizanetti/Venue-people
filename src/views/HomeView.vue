<script setup lang="ts">
import TeamCard from '@/components/TeamCard.vue'
import { TEAM_TYPE } from '@/constants'
</script>

<template>
  <TeamCard :type="TEAM_TYPE.backOfHouse" />
</template>
