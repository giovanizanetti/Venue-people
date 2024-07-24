

<template>
  <FormKit v-bind="$attrs" />
</template>

<style scoped lang="scss">
:deep(.formkit-form) {
  /* Custom styles for the form */
}

:deep(.formkit-input-group) {
  margin-bottom: 1rem;
}

:deep(.formkit-label) {
  display: block;
  margin-bottom: 0.5rem;
}

:deep(.formkit-input) {
  width: 100%;
  padding: 0.5rem;
  height: 52px;
  border: $thin-light-1;
  border-radius: $radius-xxs;
  background: transparent;
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
