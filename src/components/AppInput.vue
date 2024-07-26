<template>
  <FormKit v-bind="$attrs" />
</template>

<style scoped lang="scss">
// :deep(.formkit-input-group) {
//   margin-bottom: 1rem;
// }


:deep(.formkit-wrapper) {
  margin: $margin-sm 0;

  .formkit-label {
    font-weight: 300;
    font-size: $typography-2;
  }

  .formkit-input {
    width: 100%;
    padding: 0.5rem;
    height: 52px;
    border: $thin-light-1;
    border-radius: $radius-xs;
    background: transparent;
    margin: $margin-xxs 0;
  }
}
:deep(.formkit-message) {
  color: $danger;
  margin-top: -$margin-sm;
  font-size: $typography-2;
}
/*
:deep(.formkit-button) {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
} */
</style>
