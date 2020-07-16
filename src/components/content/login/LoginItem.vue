<template>
  <div class="login">
    <div class="input">
      <input type="text" :placeholder="placeholder">
    </div>
    <div class="get_code"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'LoginItem',
  props:{
    placeholder: String
  }
}
</script>

<style scoped>
  .login{
    text-align: center;
    position: relative;
  }
  .input{
    /* width: 150px; */
  }
  .input input{
    /* width: 100%; */
  }
  .get_code{

    position: absolute;
    top: 5px;
    right: 120px;
  }
</style>