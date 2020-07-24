<template>
  <div class="search">
    <span class="city sea-item">
      {{city}}
      <i class="fa fa-angle-down"></i>
    </span>
    <div class="input sea-item">
      <i class="fa fa-search"></i>
      <input type="text" v-model="value" placeholder="住宅/公司" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCity",
  props: {
    city: ""
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  padding: 5px 10px;
  display: flex;
  box-sizing: border-box;
  background: #fff;
  /* justify-content: space-around; */
}
.sea-item {
  background: #eee;
  /* border-radius: 5px; */
}
.city {
  flex-grow: 1;
  /* width: 50px; */
}
.input {
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
</style>