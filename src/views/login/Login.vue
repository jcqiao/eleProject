<template>
  <div class="login">
    <loginc></loginc>
  </div>
</template>

<script>
import Loginc from 'components/content/login/Loginc'
export default {
  name: 'Login',
  // data() {

  // },
  components:{
    Loginc
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* text-align: center; */
  }
  .logo{
    text-align: center;
    margin: 30px;
    
    /* border: 1px solid pink; */
  }
  .logo img{
    width: 200px;
  }
</style>