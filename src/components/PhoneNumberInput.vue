<script setup lang="ts">
import { EMIT, VALIDATION } from '@/constants'

import AppInput from '@/components/AppInput.vue'

const emit = defineEmits<{
  (e: typeof EMIT.changePhoneNumber, value: string): void
  (e: typeof EMIT.changePrefix, value: string): void
}>()

defineProps<{
  phoneNumber: string
  phoneCountryPrefix: string
}>()
</script>

<template>
  <span class="phone-number-container">
    <span class="prefix">
      <AppInput
        name="prefix"
        label="."
        :value="phoneCountryPrefix"
        :validation-visibility="'live'"
        :validation="VALIDATION.prefix"
        @input="(value) => emit(EMIT.changePhoneNumber, value)"
      />
    </span>

    <span class="number">
      <AppInput
        name="phone-number"
        label="Phone number *"
        :value="phoneNumber"
        :validation-visibility="'live'"
        :validation="VALIDATION.phoneNumber"
        @input="(value) => emit(EMIT.changePhoneNumber, value)"
      />
    </span>
  </span>
</template>

<style scoped lang="scss">
.phone-number-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 50%;
  min-width: 50%;
  margin-right: 1.7rem;
  @media screen and (max-width: $tablet-md) {
    max-width: 100%;
    margin-right: 0;
  }

  @media screen and (min-width: $mobile) {
    max-width: 100%;
    margin-right: 2rem;
  }

  .prefix {
    flex: 1;
    position: absolute;
    top: 0;
    margin-right: 1.7rem;

    :deep(.formkit-outer) {
      .formkit-input {
        background: $white-1;
        width: 70px;
      }
    }
  }

  .number {
    flex: 4;
    // position: absolute;
    left: 70px;
    top: 0;
    margin-right: 5rem;
    min-width: 172px;

    @media screen and (max-width: $tablet-md) {
      pasition: absolute;
    }

    :deep(.formkit-outer) {
      margin-left: -5px;
      .formkit-input {
        border-left: none;
      }
    }
    flex: 4;
  }
}
</style>
