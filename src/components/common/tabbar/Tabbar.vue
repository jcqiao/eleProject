<template>
  <div class="tabbar">
    <router-link
      class="tab-item"
      v-for="(item, index) in tabbarItem"
      :key="index"
      :to="item.path"
      active-class="isActive"
    >
      <div class="tab-item-icon">
        <i :class="'fa fa-'+ item.icon"></i>
      </div>
      <div class="tab-item-title">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props: {
    tabbarItem: Array
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #999;
}
.isActive {
  color: #009eef;
}
.tabbar {
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  box-shadow: 0 -2px 3px #ddd;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: auto;
}
.tab-item {
  flex: 1;
  text-align: center;
  /* padding: 3px 0; */
  display: block;
}
.tab-item-icon {
  width: 20px;
  height: 20px;
  margin: 0 auto 5px auto;
}
.tab-item-icon i {
  font-size: 20px;
}
.tab-item-title {
  font-size: 14px;
  line-height: 1;
  margin: 0 auto 3px;
}
</style>
