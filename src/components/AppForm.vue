<script setup lang="ts">
import { EMIT } from '@/constants'

const emit = defineEmits<{
  (e: typeof EMIT.submit, value: any): void
  (e: typeof EMIT.cancel): void
}>()
</script>

<template>
  <FormKit type="form" :actions="false" #default="{ value }">
    <section class="form-body">
      <slot name="body" :value="value"></slot>
    </section>
    <section class="form-actions">
      <button
        class="form-actions__save"
        type="button"
        @click="emit(EMIT.submit, value)"
      >
        Save
      </button>

      <button
        class="form-actions__cancel"
        type="button"
        @click="emit(EMIT.cancel)"
      >
        Cancel
      </button>
    </section>
  </FormKit>
</template>

<style scoped lang="scss">
.form-body {
  display: flex;
  flex-direction: column;
  margin: 0 $margin-sm;

  @media screen and (min-width: $mobile) {
    margin: 0 $margin-md;
  }

  @media screen and (min-width: $desktop) {
    margin: 0 $margin-xl;
  }

  @media screen and (min-width: $desktop-md) {
    margin: 0 $margin-xxl;
  }

  @media screen and (min-width: $tablet-sm) {
    flex-direction: row;
  }
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  color: white;

  cursor: pointer;

  &__cancel {
    background-color: #f44336;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: #d32f2f;
    }
  }

  &__save {
  }
}
</style>
