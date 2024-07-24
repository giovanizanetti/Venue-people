<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="main">
    <h1>404</h1>
    <span>Not Found</span>
    <span @click="router.back()" class="back">Go back</span>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: $black-1;
  height: 100vh;
  color: $white-1;
  font-weight: 700;
  font-size: $typography-5;

  span {
    font-size: $typography-3;
  }
  .back {
    font-size: $typography-1;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
