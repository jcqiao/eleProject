<template>
  <div class="index">
    <tabbar :tabbarItem="tabbarItem"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";

export default {
  name: "Index",
  components: {
    Tabbar
  },
  data() {
    return {
      tabbarItem: [
        { title: "首页", icon: "home", path: "/home" },
        { title: "订单", icon: "file-text-o", path: "/order" },
        { title: "我的", icon: "user", path: "/profile" }
      ]
    };
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 44px);
}
</style>