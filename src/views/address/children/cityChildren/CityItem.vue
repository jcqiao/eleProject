<template>
  <div class="city-item">
    <div class="hot-wrap">
      <div class="title">热门城市</div>
      <ul class="hot-cities" v-for="(item, index) in hotCities" :key="index">
        <li>{{item.name}}</li>
      </ul>
    </div>
    <div class="alpha-item">
      <div class="keys" v-for="(item, index ) in keys" :key="index">
        <div>{{item}}</div>
      </div>
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