<template>
  <FormKit v-bind="$attrs" />
</template>

<style scoped lang="scss">
:deep(.formkit-wrapper) {
  margin: $margin-sm 0;

  .formkit-label {
    font-weight: 300;
    font-size: $typography-2;
  }

  .formkit-input {
    width: 100%;
    padding: $padding-xs $padding-sm;
    height: 52px;
    border: $thin-light-1;
    border-radius: $radius-xs;
    background: transparent;
    margin: $margin-xxs 0;
    font-size: $typography-1;
    font-weight: 300;
  }
}
:deep(.formkit-message) {
  color: $danger;
  margin-top: -$margin-sm;
  font-size: $typography-2;
}
</style>
