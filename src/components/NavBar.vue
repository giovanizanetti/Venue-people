<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <header>
    <nav class="navbar">
      <span class="link">
        <a @click="router.back()" to="#">
          <carbon:arrow-left class="w-5 h-5" /><span class="link__text"
            >Back</span
          ></a
        >
      </span>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  padding: 0 $padding-lg;
  height: $top-nav-height;
  background-color: $black-2;
  color: $white-1;
  font-size: typography-1;

  .link {
    cursor: pointer;
    a {
      display: flex;
      align-items: center;
      height: $top-nav-height;
    }

    &__text {
      text-decoration: underline;
      margin-left: $margin-xs;
    }

    &:hover {
      color: darken($white-1, 15%);
    }
  }
}
</style>
