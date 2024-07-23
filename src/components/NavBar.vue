<template>
  <nav class="navbar">
    <span class="link">
      <carbon:arrow-left class="w-5 h-5" />
      <a @click="router.back()" to="#" class="link__text">Back</a>
    </span>
  </nav>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

console.log('NAVBAR CREATED')
</script>

<style lang="scss" scoped>
$nav-height: 64px;

.navbar {
  padding: 0 $padding-lg;
  height: $nav-height;
  background-color: $black-2;
  color: $white-1;
  font-size: typography-1;

  .link {
    display: flex;
    align-items: center;
    height: inherit;

    &__text {
      text-decoration: underline;
      margin-left: $margin-xxs;
    }
  }
}
</style>
