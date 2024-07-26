<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import { BREAKPOINTS } from '@/styles/variables'
import { useRouter } from 'vue-router'

const router = useRouter()
const { width } = useWindowResize()
</script>

<template>
  <header>
    <nav class="navbar">
      <span class="link">
        <a @click="router.back()" to="#">
          <carbon:arrow-left class="w-5 h-5" />
          <span v-if="width >= BREAKPOINTS.tabletSm" class="link__text"
            >Back
          </span></a
        >
      </span>
      <span v-if="width <= BREAKPOINTS.tabletSm" class="link">
        <a @click="router.back()" to="#">
          <carbon:circle-dash class="w-5 h-5" />
        </a>
      </span>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: fill-available;
  width: -webkit-fill-available;
  width: -moz-available;

  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 0 $padding-lg;
    height: $top-nav-height;
    background-color: $black-2;
    color: $white-1;

    @media screen and (max-width: $tablet-sm) {
      padding: 0 $padding-md;
    }

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
}
</style>
