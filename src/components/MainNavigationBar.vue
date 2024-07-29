<template>
  <template v-if="width <= BREAKPOINTS.tabletSm">
    <MainNavigationBarBottom @home-click="goToHomePage" />
  </template>
  <template v-else>
    <MainNavigationBarSide @home-click="goToHomePage" />
  </template>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import { BREAKPOINTS } from '@/styles/variables'
import MainNavigationBarBottom from './MainNavigationBarBottom.vue'
import MainNavigationBarSide from './MainNaviationBarSide.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { width } = useWindowResize()

const goToHomePage = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
@mixin fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.main-navigation {
  background-color: $grey-light-1;
  position: fixed;
  top: 0;
  width: 56px;
  border: $thin-light-1;
  padding: $margin-md 0;
  z-index: 2;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;

  &__expanded {
    width: 170px;
  }

  .expand {
    position: absolute;
    top: 7rem;
    right: -0.8rem;
    cursor: pointer;

    &__icon {
      background-color: $black-1;
      color: $white-1;
      border-radius: 50%;
      border: 3px solid $black-1;
      cursor: pointer;
      z-index: 3;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 768px;

    .links {
      &__upper {
        flex: 3;
        margin-top: $margin-xl;
        .inner-container {
          height: 300px;
        }
      }

      &__bottom {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex: 1;
        .inner-container {
          height: 80px;
        }
      }
    }
  }
}

.inner-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
    gap: $margin-xxs;
    cursor: pointer;
    .text {
      @include fade-in;
    }
  }
}
</style>
