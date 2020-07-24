<template>
  <div class="city">
    <div class="city-wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="城市" v-model="value" />
      </div>
      <button @click="$router.go(-1) ">取消</button>
    </div>
    <location :address="address"></location>
    <city-item :hotCities="cityInfo.hotCities" :keys="keys"></city-item>
  </div>
</template>

<script>
import Location from "./Location";
import CityItem from "./cityChildren/CityItem.vue";

export default {
  name: "City",
  components: {
    Location,
    CityItem
  },
  data() {
    return {
      value: "",
      cityInfo: {},
      keys: []
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
          _this.keys = Object.keys(res.data);
          _this.keys.pop();
          _this.keys.sort();
          // console.log(_this.keys);
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
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 45px;
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
</style>