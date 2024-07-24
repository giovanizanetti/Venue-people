<script setup lang="ts">
import PeopleList from '@/components/PeopleList.vue'
import TeamsList from '@/components/TeamsList.vue'
import BrandName from '@/components/BrandName.vue'
import { useWindowResize } from '@/composables/useWindowResize'
import { BREAKPOINTS } from '@/styles/variables';

const { width } = useWindowResize()
</script>

<template>
  <!-- TODO: Add Venue people logo
   this to the contacts view 
  -->

  <main class="main">
    <BrandName v-if="width >= BREAKPOINTS.desktop" />
    <TeamsList class="session" />
    <PeopleList class="session" />
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: $margin-xl $margin-lg;
  .session {
    margin: $margin-sm 0;
  }
  @media screen and (max-width: $tablet-sm) {
    margin: $margin-xl 0;
  }

  @media screen and (min-width: $desktop) {
    margin: $margin-md $margin-lg;
  }
}
</style>
