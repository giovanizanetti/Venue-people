<script setup lang="ts">
import { EMIT } from '@/constants'
import AppButton from '@/components/AppButton.vue'

const emit = defineEmits<{
  (e: typeof EMIT.submit, value: any): void
  (e: typeof EMIT.cancel): void
}>()

const onCancel = () => {
  console.log('CANCEL')
}

const onSave = (value: any) => {
  emit(EMIT.submit, value)
  console.log('askjhdsajkjdk')
}
</script>

<template>
  <FormKit type="form" :actions="false" #default="{ value, state }">
    <section class="form-body">
      <slot name="body" :value="value"></slot>
    </section>
    <section class="form-actions">
      <div class="form-actions__inner">
        <AppButton @click="onCancel()" variant="secondary">Cancel</AppButton>
        <AppButton :disabled="!state.valid" @click="onSave(value)">Save changes</AppButton>
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
  margin-top: $margin-lg !important;
  background-color: $white-1;
  border-top: $thin-light-1;
  border-bottom: $thin-light-1;
  position: relative;
  widows: 100%;
  bottom: 0;

  &__inner {
    align-items: center;
    display: flex;
    gap: $margin-sm;
    height: 124px;
    justify-content: center;
    @include getMargin;
  }
}
</style>
