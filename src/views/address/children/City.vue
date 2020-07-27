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
    <!-- 在CityItem中做了scroll 方便进行联动 -->
    <city-item @chooseCity="chooseCity" ref="cityScroll" :cityInfo="cityInfo" :keysitem="keysitem"></city-item>
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
      keysitem: {},
      allCities: [],
      searchLists: []
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

          //用keysitem将城市保存
          _this.keysitem.forEach(key => {
            console.log(key);
            _this.cityInfo[key].forEach(city => {
              _this.allCities.push(city);
              console.log(_this.allCities);
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    chooseCity(item) {
      this.$router.push({
        name: "address",
        //必须是city因为Address中SearchCity中传入的就是city
        params: { city: item.name }
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
.search-cities {
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
  /* line-height: 24px; */
}
.search-cities li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>