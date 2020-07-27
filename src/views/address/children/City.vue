<template>
  <div class="city">
    <div class="city-wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="城市" v-model="value" />
      </div>
      <button @click="$router.go(-1) ">取消</button>
    </div>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true">
      <location :address="address"></location>

      <city-item ref="cityScroll" :cityInfo="cityInfo" :keysitem="keysitem"></city-item>
    </scroll>
  </div>
</template>

<script>
import Location from "./Location";
import CityItem from "./cityChildren/CityItem.vue";

import scroll from "components/common/scroll/Scroll";

export default {
  name: "City",
  components: {
    Location,
    CityItem,
    scroll
  },
  data() {
    return {
      value: "",
      cityInfo: {},
      keysitem: {}
    };
  },
  computed: {
    address() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  created() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      const _this = this;
      this.$axios("/api/posts/cities")
        .then(res => {
          console.log(res.data);
          _this.cityInfo = res.data;
          console.log(typeof Object.keys(res.data));
          console.log(Object.keys(res.data));

          _this.keysitem = Object.keys(res.data);
          console.log(typeof _this.keysitem);
          _this.keysitem.pop();
          console.log(typeof _this.keysitem);

          _this.keysitem.sort();
          console.log(typeof _this.keysitem);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.city {
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  box-sizing: border-box;
  margin-top: 45px;
}
.city-wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
  z-index: 99;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  outline: none;
  border: none;
  background: inherit;
  margin-left: 5px;
}
button {
  outline: none;
  border: none;
  background: #fff;
  color: rgb(58, 133, 231);
}
.content {
  position: absolute;
  top: 45px;
  bottom: 45px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>