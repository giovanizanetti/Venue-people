<script setup lang="ts">
import MainNavigationBar from './components/MainNavigationBar.vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import '@/styles/base.scss'
import '@/styles/v-tooltip.scss'
</script>

<template>
  <MainNavigationBar />
  <NavBar />

  <div class="main-left" :style="{ overflowX: 'hidden' }">
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main {
  margin-top: $margin-xxl;
}
@media screen and (min-width: $tablet-sm) {
  .main {
    margin-top: $top-nav-height;
  }
  .main-left {
    margin-left: $main-menu-width-closed;
  }
  .fade-enter-from {
    opacity: 0;
    transform: translateX(50px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.1s ease-out;
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
}
</style>
