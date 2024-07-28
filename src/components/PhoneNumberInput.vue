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
        label="Phone number *"
        name="phoneCountryPrefix"
        :value="phoneCountryPrefix"
        @change="(value) => emit(EMIT.changePhoneNumber, value)"
        :validation-visibility="'live'"
        :validation="'required'"
      />
    </span>

    <span class="number">
      <AppInput
        label="."
        name="phone-number"
        :value="phoneNumber"
        @change="(value) => emit(EMIT.changePhoneNumber, value)"
        :validation-visibility="'live'"
        :validation="VALIDATION.phoneNumber"
      />
    </span>
  </span>
</template>

<style scoped lang="scss">
.phone-number-container {
  display: flex;
  position: relative;

  .prefix {
    flex: 1;

    :deep(.formkit-outer) {
      .formkit-input {
        background: $white-1;
        width: 80px;
      }
    }
  }

  .number {
    flex: 4;
    position: absolute;
    left: 80px;
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
