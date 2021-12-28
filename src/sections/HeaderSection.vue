<template>
  <div class="main-container">
    <address-delivery/>
    <main-slider/>
  </div>
</template>

<script>
export default {
  components: {
    "address-delivery": require("@/components/header/AddressDelivery.vue").default,
    "main-slider": require("@/components/header/MainSlider.vue").default,
  }
}
</script>

<style scoped>
.main-container{
  display: flex;
}
</style>