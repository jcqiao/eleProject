<template>
  <div class="city-item" v-if="keysitem" ref="cityScroll">
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
.city-item {
  overflow: hidden;
  box-sizing: border-box;
  padding: 15px;
  background: #fff;
  /* height: calc(100% - 44px); */
  margin-top: 15px;
}
.title {
  color: #aaa;
  padding: 15px 0;
  font-weight: 700;
}
.hot-wrap .hot-cities {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.hot-wrap .hot-cities li {
  width: 30%;
  background: #f1f1f1;
  margin: 0 10px 10px 0;
  text-align: center;
  padding: 10px;
}
.city_content li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.area_keys {
  position: fixed;
  right: 0;
  top: 25%;
  color: #aaa;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  padding: 0 5px;
}
</style>