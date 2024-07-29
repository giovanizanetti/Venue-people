<script setup lang="ts">
import { EMIT } from '@/constants'
import AppButton from '@/components/AppButton.vue'

const emit = defineEmits<{
  (e: typeof EMIT.submit, value: any): void
  (e: typeof EMIT.cancel): void
}>()

defineProps<{ loading: boolean }>()

const onCancel = () => emit(EMIT.cancel)
const onSave = (value: any) => emit(EMIT.submit, value)
</script>

<template>
  <FormKit
    type="form"
    :actions="false"
    #default="{ value, state }"
    @keypress.enter.prevent
  >
    <section class="form-body">
      <slot name="body" :value="value"></slot>
    </section>

    <section class="form-actions">
      <div class="form-actions__inner">
        <AppButton @click="onCancel()" variant="secondary">Cancel</AppButton>
        <AppButton
          type="submit"
          :disabled="!state.valid || !state.dirty"
          :loading="loading"
          @click.prevent="onSave(value)"
          >Save changes</AppButton
        >
      </div>
    </section>
  </FormKit>
</template>

<style scoped lang="scss">
@mixin getMargin {
  @media screen and (min-width: $mobile) {
    margin: 0 $margin-md;
  }

  @media screen and (min-width: $desktop) {
    margin: 0 $margin-xl;
  }

  @media screen and (min-width: $desktop-md) {
    margin: 0 $margin-xxl;
  }
}

.form-body {
  display: flex;
  flex-direction: column;
  margin: 0 $margin-sm;

  @include getMargin;
  @media screen and (min-width: $tablet-sm) {
    flex-direction: row;
  }
}

.form-actions {
  margin-top: 9rem;
  border-top: $thin-light-1;
  position: relative;
  color: transparent;
  @media screen and (max-width: $tablet-sm) {
    bottom: 80px;
  }
  @media screen and (min-width: $tablet-md) {
    bottom: 0;
    border-top: none;
    margin-top: $margin-lg;
  }
  &__inner {
    height: 72px;
    align-items: center;
    padding: 0 1rem;
    color: transparent;
    display: flex;
    gap: $margin-sm;
    height: 72px;
    justify-content: center;
    @include getMargin;
    @media screen and (min-width: $tablet-sm) {
      height: 124px;
    }
    @media screen and (min-width: $tablet-md) {
      justify-content: flex-end;
      margin-top: -3rem;
      padding: 0;
      .button {
        width: 174px;
      }
    }
  }
}
</style>
