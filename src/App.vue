<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log(data);
        }

        function onError(data) {
          // 定位出错
          console.log(data);
        }
      });
    }
  }
};
</script>
<style>
#app {
  height: 100%;
  width: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>
