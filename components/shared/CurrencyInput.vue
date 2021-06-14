<template>
  <div class="input-group mb-3">
    <span class="input-group-text-prepend">$</span>
    <input
      class="currency-field"
      type="number"
      currency="USD"
      step="0.05"
      min="1.00"
      value="0.00"
      v-autowidth="{
        maxWidth: '960px',
        minWidth: '100px',
        comfortZone: 100
      }"
      v-model.number="ms10PricePerTon"
    />
    <span class="input-group-text-append">/short ton</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
