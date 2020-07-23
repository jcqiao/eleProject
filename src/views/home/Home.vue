<template>
  <div class="home">
    <div class="header">
      <div class="address_map">
        <i class="fa fa-map-marker"></i>
        <span>{{getLocation}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
      <div class="shop_search">
        <i class="fa fa-search"></i>
        <span>搜索商家</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    getLocation() {
      return this.$store.getters.location;
    }
  }
};
</script>

<style scoped>
</style>