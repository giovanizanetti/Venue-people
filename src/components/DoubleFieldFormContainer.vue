<template>
  <div class="field-section-multiple">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.field-section-multiple {
  display: flex;
  justify-content: space-between;
  margin-bottom: -$margin-sm;

  & > :first-child {
    margin-right: $margin-sm;
  }

  :slotted(.formkit-outer) {
    width: 100%;
  }

  .formkit-outer {
    width: 100%;
  }
}
</style>
