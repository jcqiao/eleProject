<template>
  <div>
    <keep-alive>
      <div class="search">
        <span class="city sea-item" @click="cityChange">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <div class="input sea-item">
          <i class="fa fa-search"></i>
          <input type="text" v-model="value" placeholder="住宅/公司" />
        </div>
      </div>
    </keep-alive>

    <location :address="address" @addressClick="addressClick"></location>

    <div class="area">
      <ul v-for="(item,index) in addressLists " :key="index">
        <li @click="getNewAddress(item)">
          <h4>{{item.name}}</h4>
          <p>{{item.district}}{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Location from "./Location";
export default {
  name: "SearchCity",
  components: {
    Location
  },
  props: {
    city: ""
  },
  data() {
    return {
      value: "",
      addressLists: []
    };
  },
  computed: {
    address() {
      return this.$store.getters.location.formattedAddress;
    }
  },
  watch: {
    value() {
      this.valueChange();
    }
  },
  methods: {
    valueChange() {
      const _this = this;
      // console.log(this.value);
      //高德API 输入提示与POI搜索
      AMap.plugin("AMap.Autocomplete", function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: _this.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(_this.value, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          // console.log(result);
          _this.addressLists = result.tips;
        });
      });
    },
    getNewAddress(item) {
      // console.log(item);
      this.$store.dispatch(
        "setAddress",
        item.district + item.address + item.name
      );
      this.$router.push("/home");
    },
    cityChange() {
      this.$router.push({
        name: "city",
        params: { city: this.city }
      });
    },
    addressClick() {
      //在home组件中更改地址 需要更改vuex中的变量
      this.$store.dispatch("setAddress", this.address);
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 44px;
  padding: 5px 10px;
  display: flex;
  box-sizing: border-box;
  background: #fff;
  align-items: center;

  /* justify-content: space-around; */
}
.sea-item {
  line-height: 40px;
  background: #eee;
  /* border-radius: 5px; */
}
.city {
  flex-grow: 1;
  padding: 0 5px;
  border-right: 1px solid #ddd;
  /* width: 50px; */
}
.input {
  padding: 0 5px;
  flex-grow: 3;
  /* width: 80%; */
}
.input input {
  width: 90%;
  border: none;
  outline: none;
  background: inherit;
  /* text-align: center; */
}
.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #ddd;
  /* line-height: 30px; */
  padding: 8px 16px;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
.area li p {
  color: #aaa;
}
</style>