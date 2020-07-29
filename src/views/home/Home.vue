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
      <!-- 轮播 -->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(img, index) in swipeImgs">
          <img :src="img" alt />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 分类 -->
      <mt-swipe :auto="0" class="entries">
        <mt-swipe-item class="entry_wrap" v-for="(entry, index) in entries" :key="index">
          <div class="content_wrap">
            <div class="food_wrap" v-for="(item, i) in entry" :key="i">
              <div class="img_wrap">
                <img :src="item.image" alt />
              </div>
              <span>{{item.name}}</span>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="recommend">推荐商家</div>
    <filter-view :filterData="filterData"></filter-view>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";

import FilterView from "components/content/filter/FilterView";
export default {
  name: "Home",
  components: {
    FilterView,
  },
  data() {
    return {
      swipeImgs: [],
      entries: [],
      filterData: {},
    };
  },
  created() {
    //获取轮播数据
    this.getData();
    //获取过滤导航数据
    this.getFilterData();
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
        // console.log(res.data);
        this.swipeImgs = res.data.swipeImgs;
        this.entries = res.data.entries;
        // console.log(this.swipeImgs);
      });
    },
    getFilterData() {
      this.$axios("/api/profile/filter").then((res) => {
        console.log(res);
        this.filterData = res.data;
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
.entries {
  width: 100%;
  height: 48.2vw;
  background: #fff;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
}
.content_wrap {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.food_wrap {
  width: 20%;
  /* height: 40%; */
}
.food_wrap img {
  width: 100%;
}
.recommend {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.recommend:before,
.recommend:after {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.recommend::before {
  margin-right: 3.466667vw;
}
.recommend::after {
  margin-left: 3.466667vw;
}
</style>