<template>
  <div class="city-item">
    <div class="hot-wrap">
      <div class="hot-cities" v-for="(item, index) in hotCities" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityItem",
  props: {
    hotCities: [],
    keys: []
  }
};
</script>

<style scoped>
</style>