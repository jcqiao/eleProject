<template>
  <div>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true">
      <div class="city-item" v-if="keysitem" ref="cityScroll">
        <div class="hot-wrap citylist">
          <div class="title">热门城市</div>
          <ul class="hot-cities" v-for="(item, index) in cityInfo.hotCities" :key="index">
            <li @click="chooseCity(item)">{{item.name}}</li>
          </ul>
        </div>
        <div class="city_wrap">
          <!-- 循环按字母排序的key -->
          <div class="city_content citylist" v-for="(item,index) in keysitem" :key="index">
            <div class="title">{{item}}</div>
            <!-- 根据字母key展示城市名 -->
            <ul>
              <li
                @click="chooseCity(city)"
                v-for="(city,index) in cityInfo[item]"
                :key="index"
              >{{city.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
    <div class="keys-wrap">
      <ul>
        <li @click="selectCity(0)">#</li>
        <li @click="selectCity(index+1)" v-for="(item, index) in keysitem" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll";

export default {
  name: "CityItem",
  components: {
    scroll
  },
  props: {
    cityInfo: {},
    keysitem: {}
  },
  methods: {
    selectCity(index) {
      // scroll拿不到citylist
      const cityList = this.$refs.cityScroll.getElementsByClassName("citylist");
      console.log(cityList);
      const el = cityList[index];
      console.log(el);
      this.$refs.scroll.scrollToElement(el);
    },
    chooseCity(item) {
      // console.log(item);
      this.$emit("chooseCity", item);
    }
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
.content {
  position: absolute;
  top: 110px;
  bottom: 45px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.keys-wrap {
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