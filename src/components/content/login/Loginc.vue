<template>
  <div class="loginc">
    <login-item placeholder="手机号">
      <a href="#">获取验证码</a>
    </login-item>
    <login-item placeholder="验证码"></login-item>
  </div>
</template>

<script>
import LoginItem from "components/content/login/LoginItem"

export default {
  name: 'Loginc',
  components:{
    LoginItem
  }
}
</script>

<style scoped>

</style>