<template>
  <div class="nav-item">
    <div class="nav left">
      <slot name="left"></slot>
    </div>
    <div class="nav center">
      <slot name="center"></slot>
    </div>
    <div class="nav right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem"
};
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
}
.nav {
  flex: 1;
}
.nav-item .left {
}
</style>