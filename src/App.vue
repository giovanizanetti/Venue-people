<script setup lang="ts">
import MainNavigationBar from './components/MainNavigationBar.vue'
//TODO
//* add loading

import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/NavBar.vue'

import HelloWorld from '@/components/HelloWorld.vue'
import { isDark, toggleDark } from '@/composables/useDarkmode'
import { availableLocales, loadLanguageAsync } from '@/plugins/i18n'

import '@/styles/base.scss'
import { useWindowResize } from './composables/useWindowResize'
import { BREAKPOINTS } from './styles/variables'

const { locale } = useI18n()

const { width } = useWindowResize()

const gotoGitHub = () => {
  window.open('https://github.com/xiaoluoboding/vue3-starter', '_blank')
}

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale =
    locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <!-- <header>
    <div class="wrapper" lg="flex place-items-center flex-wrap">
      <nav
        class="w-full text-xs text-center mt-8"
        lg="text-left text-base py-4 px-0 mt-4 -ml-4"
      >
        <RouterLink to="/">{{ $t('menu.home') }}</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="w-full text-center mt-8 space-x-4" lg="text-left">
        <button
          border="~ [var(--color-border)]"
          class="p-2 rounded-md bg-transparent"
          @click="(e) => toggleDark()"
        >
          <carbon:moon class="w-6 h-6" v-if="isDark" />
          <carbon:sun class="w-6 h-6" v-else />
        </button>
        <button
          border="~ [var(--color-border)]"
          class="p-2 rounded-md bg-transparent"
          @click="toggleLocales"
        >
          <carbon:language class="w-6 h-6" />
        </button>
        <button
          border="~ [var(--color-border)]"
          class="p-2 rounded-md bg-transparent"
          @click="gotoGitHub"
        >
          <carbon:logo-github class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header> -->

  <MainNavigationBar v-if="width >= BREAKPOINTS.tabletSm" />
  <div class="main-left">
    <NavBar />
    <main class="main">
      <transition name="fade" appear>
        <router-view />
      </transition>
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
    transform: translateX(100px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease-out;
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>
