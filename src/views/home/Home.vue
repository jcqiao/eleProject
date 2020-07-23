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
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
.header {
  background: #009eef;
  color: #fff;
  font-size: 14px;
  padding: 16px;
}
.address_map {
  font-weight: 700;
  margin-bottom: 5px;
}
.address_map i {
  font-size: 18px;
  margin: 0 5px;
}
.address_map span {
  display: inline-block;
  width: 85%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shop_search {
  padding: 5px;
  background: #fff;
  color: #ddd;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  padding: 10px 0;
}
</style>