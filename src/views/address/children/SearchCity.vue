<template>
  <div class="search">
    <div class="city">
      {{city}}
      <i class="fa fa-angle-down"></i>
    </div>
    <i class="fa fa-search"></i>
    <input type="text" v-model="value" placeholder="住宅/公司" />
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
</style>