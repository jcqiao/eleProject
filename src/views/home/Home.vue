<template>
  <div class="home">
    <div class="header">
      <div class="address_map" @click="address">
        <i class="fa fa-map-marker"></i>
        <span>{{getAddress}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <div class="search_wrap">
      <div class="shop_search">
        <i class="fa fa-search"></i>
        <span>搜索商家</span>
      </div>
    </div>

    <div id="container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(img, index) in swipeImgs">
          <img :src="img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "Home",
  data() {
    return {
      swipeImgs: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    getAddress() {
      return this.$store.getters.address;
    },
    getCity() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },
  methods: {
    //点击地址跳转到地址页面
    address() {
      this.$router.push({
        name: "address",
        params: {
          city: this.getCity,
        },
      });
    },
    getData() {
      this.$axios("/api/profile/shopping").then((res) => {
        console.log(res.data);
        this.swipeImgs = res.data.swipeImgs;
        console.log(this.swipeImgs);
      });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100%;
}
</style>