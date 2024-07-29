<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import { ROUTE } from '@/constants'
import { capitalize } from '@/helpers/strings'
import { BREAKPOINTS, TYPOGRAPHY } from '@/styles/variables'
import { useI18n } from 'vue-i18n'
const to = ROUTE.contactList
const { width } = useWindowResize()
const { t } = useI18n()
</script>

<template>
  <main class="main">
    <BrandName
      :size="width > BREAKPOINTS.mobile ? TYPOGRAPHY.xxl : TYPOGRAPHY.lg"
      class="brand-name"
    />
    <router-link class="link" :to="to">{{
      capitalize(t('peopleList'))
    }}</router-link>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;

  .link {
    font-size: $typography-3;
    text-decoration: underline;
    margin-top: $margin-xxl;

    &:hover {
      color: $grey-medium-1;
    }
  }
}
</style>
