<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import { BREAKPOINTS } from '@/styles/variables'

const { width } = useWindowResize()
</script>

<template>
  <div class="contact-list-container">
    <BrandName v-if="width >= BREAKPOINTS.desktop" />
    <TeamsList class="session" />
    <PeopleList class="session" />
  </div>
</template>

<style scoped lang="scss">
.contact-list-container {
  margin: $margin-xxl $margin-lg;
  .session {
    margin: $margin-md 0;
  }
  @media screen and (max-width: $tablet-sm) {
    margin: $margin-xxl 0;
  }

  @media screen and (min-width: $desktop) {
    margin: $margin-xl $margin-lg;
  }
}
</style>
