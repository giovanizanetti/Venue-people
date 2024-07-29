<template>
  <div :class="['main-navigation', isExpanded && 'main-navigation__expanded']">
    <div class="expand" @click="expandMenu">
      <mdi:chevron-right class="w-6 h-6 expand__icon" />
    </div>
    <div class="main-navigation__inner" :style="{ minHeight }">
      <mdi:diamond class="w-7 h-7" />
      <nav class="links__upper">
        <ul class="inner-container">
          <li>
            <mdi:content-paste class="w-4 h-4" />
            <span v-if="isExpanded" class="text">Placeholder</span>
          </li>
          <li>
            <mdi:diamond class="w-4 h-4" />
            <span v-if="isExpanded" class="text">Placeholder</span>
          </li>
          <li>
            <mdi:account-circle le class="w-4 h-4" background />
            <span v-if="isExpanded" class="text">{{
              capitalize(t('profile'))
            }}</span>
          </li>
          <li>
            <mdi:euro class="w-4 h-4" />
            <span v-if="isExpanded" class="text">Placeholder</span>
          </li>
          <li @click="onHomeClick">
            <mdi:home class="w-4 h-4" />
            <span v-if="isExpanded" class="text">{{
              capitalize(t('home'))
            }}</span>
          </li>
        </ul>
      </nav>
      <nav class="links__bottom">
        <ul class="inner-container">
          <li>
            <mdi:search class="w-4 h-4" />
            <span v-if="isExpanded" class="text">{{
              capitalize(t('search'))
            }}</span>
          </li>
          <li>
            <mdi:error class="w-4 h-4" />
            <span v-if="isExpanded" class="text">Placeholder</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/composables/useWindowResize'
import { EMIT } from '@/constants'
import { computed, ref } from 'vue'
import { capitalize } from '@/helpers/strings'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits<{
  (e: typeof EMIT.homeClick): void
}>()

const { height } = useWindowResize()
const minHeight = computed(() => `${height.value - 60}px`)
const isExpanded = ref(false)

const expandMenu = () => {
  isExpanded.value = !isExpanded.value
}

const onHomeClick = () => emit(EMIT.homeClick)
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
      &:hover {
        background-color: $grey-medium-1;
        border: 3px solid $grey-medium-1;
      }
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
    &:hover {
      color: $grey-medium-1;
    }
  }
}
</style>
