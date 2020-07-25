<template>
  <div class="city-item" v-if="keysitem">
    <div class="hot-wrap">
      <div class="title">热门城市</div>
      <ul class="hot-cities" v-for="(item, index) in cityInfo.hotCities" :key="index">
        <li>{{item.name}}</li>
      </ul>
    </div>
    <div class="city_wrap">
      <!-- 循环按字母排序的key -->
      <div class="city_content citylist" v-for="(item,index) in keysitem" :key="index">
        <div class="title">{{item}}</div>
        <!-- 根据字母key展示城市名 -->
        <ul>
          <li v-for="(city,index) in cityInfo[item]" :key="index">{{city.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityItem",
  props: {
    cityInfo: {},
    keysitem: {}
  }
};
</script>

<style scoped>
</style>