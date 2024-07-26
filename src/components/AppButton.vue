<template>
  <button
    :class="['button', typeClass, sizeClass, { 'is-loading': loading }]"
    :disabled="disabled || loading"
    variant="button"
    @click.prevent="onClick"
  >
    <span v-if="loading" class="spinner"></span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
// import { EMIT } from '@/constants';
import { EMIT } from '@/constants';
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'warning'
    size?: 'small' | 'medium' | 'large' | 'flex'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'flex'
  }
)

const emit = defineEmits<{
  (e: typeof EMIT.click, event: MouseEvent): void
}>()

const typeClass = computed(() => `button__${props.variant}`)
const sizeClass = computed(() => `button__${props.size}`)

const onClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    // emit(EMIT.click, event)
  }
}
</script>

<style scoped lang="scss">
.button {
  border: none;
  cursor: pointer;
  padding: $padding-xs $padding-sm;
  border-radius: $radius-lg;
  font-size: $typography-2;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 0.75rem;
  height: 44px;

  &:hover {
    opacity: 0.8;
  }

  &__primary {
    background-color: $black-2;
    color: $white-1;
  }

  &__secondary {
    background-color: $grey-light-2;
    color: $black-1;
    border: $thin-light-1;
  }

  &__danger {
    background-color: $danger;
    color: $white-1;
  }

  &__warning {
    background-color: #ffc107;
    color: #212529;
  }

  &__small {
    width: 175px;
  }

  &__medium {
    width: 256px;
  }

  &__large {
    width: 316px;
  }

  &__flex {
    width: 100%;
  }
}

.is-loading {
  pointer-events: none;
}

.spinner {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 1rem;
  height: 1rem;
  animation: spin 1s linear infinite;
  position: absolute;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
