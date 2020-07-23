<template>
  <div class="navbar">
    <nav-item>
      <div slot="left">
        <i class="fa fa-chevron-left"></i>
        <button class="btn">返回</button>
      </div>
      <div slot="center">选择收获地址</div>
    </nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  name: "Navbar",
  components: {
    NavItem
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  padding: 5px 10px;
  align-items: center;
  background: #009eef;
  color: #fff;
}
.btn {
  background-color: transparent;
  border: 0;
  outline: none;
  color: #fff;
}
</style>