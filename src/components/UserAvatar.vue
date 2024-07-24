<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    size?: 'small' | 'medium' | 'large'
  }>(),
  {
    size: 'small'
  }
)

const sizeClass = computed(() => `avatar__${props.size}`)
</script>

<template>
  <div :class="['avatar', sizeClass]">
    <img :src="src" :alt="alt" />
  </div>
</template>

<style scoped>
.avatar {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  display: block;
  width: 100%;
  height: auto;
}

.avatar__small {
  width: 24px;
  height: 24px;
}
.avatar__medium {
  width: 72px;
  height: 72px;
}
.avatar__large {
  width: 128px;
  height: 128px;
}
</style>
