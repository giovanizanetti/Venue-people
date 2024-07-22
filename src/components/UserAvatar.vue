<template>
  <div :class="['avatar', sizeClass]">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    size: 'small' | 'medium' | 'large'
  }>(),
  {
    size: 'small'
  }
)

const sizeClass = computed(() => `avatar--${props.size}`)
</script>

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

.avatar--small {
  width: 24px;
  height: 24px;
}
.avatar--medium {
  width: 64px;
  height: 64px;
}
.avatar--large {
  width: 128px;
  height: 128px;
}
</style>
