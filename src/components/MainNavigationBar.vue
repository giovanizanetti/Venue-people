<template>
  <div class="main-navigation">
    <div class="main-navigation__inner" :style="{ minHeight }">
      <span class="logo">Logo</span>
      <nav class="links__upper">
        <div class="icons-container">
          <carbon:3d-cursor-alt class="w-5 h-5" />
          <carbon:3d-cursor-alt class="w-5 h-5" />
          <carbon:3d-cursor-alt class="w-5 h-5" />
          <carbon:3d-cursor-alt class="w-5 h-5" />
          <carbon:3d-cursor-alt class="w-5 h-5" />
        </div>
      </nav>
      <nav class="links__bottom">
        <div class="icons-container">
          <carbon:3d-cursor-alt class="w-5 h-5" />
          <carbon:3d-cursor-alt class="w-5 h-5" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import { computed } from 'vue'

const { height } = useWindowResize()
const minHeight = computed(() => `${height.value - 60}px`)
</script>

<style lang="scss" scope>
.main-navigation {
  position: fixed;
  top: 0;
  width: 56px;
  border: $thin-light-1;
  padding: $margin-md 0;

  &__inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 768px;

    .logo {
      height: 46px;
      flex: 1;
    }
    .links {
      &__upper {
        flex: 3;
        .icons-container {
          height: 288px;
        }
      }

      &__bottom {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex: 1;
        .icons-container {
          height: 80px;
        }
      }
    }
  }
}

.icons-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
