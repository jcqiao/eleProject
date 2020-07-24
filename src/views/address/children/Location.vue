<template>
  <div class="location">
    <div class="title">当前定位</div>
    <div class="address">
      <i class="fa fa-location-arrow"></i>
      {{address}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: {
    address: ""
  }
};
</script>

<style scoped>
.location {
  padding: 5px 10px;
  background: #fff;
}
.title {
  padding: 5px;
  font-size: 10px;
  color: #333;
}
.address {
  padding: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>