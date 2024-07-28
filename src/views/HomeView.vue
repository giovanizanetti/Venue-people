<script setup lang="ts">
import { ROUTE } from '@/constants';
import { TYPOGRAPHY } from '@/styles/variables'
const to = ROUTE.contactList
</script>

<template>
  <main class="main">
    <BrandName :size="TYPOGRAPHY.xxl" class="brand-name" />
    <router-link class="link" :to="to">People list</router-link>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;

  .brand-name {
    margin-top: -$margin-xxl;
  }

  .link {
    font-size: $typography-3;
    text-decoration: underline;
    margin-top: $margin-xxl;
  }
}
</style>
