<template>
  <div class="address">
    <nav-bar></nav-bar>
    <search-city :city="city"></search-city>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import SearchCity from "./children/SearchCity";

export default {
  name: "Address",
  components: {
    NavBar,
    SearchCity
  },
  data() {
    return {
      city: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.params.city);
    next(vm => {
      //vm获取组件实例
      vm.city = to.params.city;
    });
  }
};
</script>

<style scoped>
</style>