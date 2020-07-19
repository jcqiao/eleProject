<template>
  <div class="login">
    <div class="logo">
    <img src="~/assets/images/logo/logo.jpg" alt="my login image" />
  </div>
  <!-- 手机号:value="phone" -->
  <login-item
    type="number"
    v-model="phone"
    placeholder="手机号"
    :disabled="disabled"
    :btnTitle="btnTitle"
    :error="errors.phone"
    @getCode="getCode"
  />
  <!-- 验证码 -->
  <login-item type="number" v-model="verifyCode" placeholder="验证码" :error="errors.code" />
  <!-- 用户服务协议 -->
  <div class="login_des">
    <p>
      新用户登录即自动注册，表示已同意
      <span>《用户服务协议》</span>
    </p>
  </div>
  <!-- 登录按钮 -->
  <div class="login_btn">
    <button :disabled="isclick" @click="loginClick">登录</button>
  </div>
</div>
    
</template>

<script>
import LoginItem from './LoginItem';

//这里phone 想要取得input value需要input将value发送出来
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false
    };
  },
 
  components: {
    LoginItem
  },
  computed:{
    isclick(){
      if (!this.phone || !this.verifyCode) {
        return true
      }else {
        return false
      }
    }
  },
  methods:{
    getCode(){
      console.log('----')
      if (this.getPhoneIsCorrect()) {
        console.log('++++')
        //网络请求发送验证码 未买第三方api
        //这种出现跨域问题 
        // this.$axios.post('https://ele-interface.herokuapp.com/api/posts/sms_send')
        this.$axios
          .post("/api/posts/sms_send", {
            sid: "70e9281073fe5e1546b7f657cae73897",
            token: "d1a5431e19d2005c3286794786111d79",
            appid: "099a1aedcf19400a9eb83d857eb7b845",
            templateid: "522016",
            phone: this.phone
          })
          .then(res => {
            console.log(res);
            this.countTimer()
          });
        // this.countTimer()
        // console.log('---')
      }
    },
    countTimer(){
      let time = 60
      const timer = setInterval(()=>{
        if(time === 0){
          clearInterval(timer)
          this.btnTitle = "获取验证码"
          this.disabled = false
        }else {
          this.btnTitle = --time + 's'
          this.disabled = true
        }
      },1000)
    },
    getPhoneIsCorrect(){
      // console.log('---')
      // console.log(this.phone)
      if (/^1[0-9]{10}$/.test(this.phone)){
        this.errors = {}
        console.log(this.errors)
        return true
      }else{
        this.errors = {phone: "请输入正确的手机号"}
        console.log(this.errors)
        return false
      }
    },
    loginClick(){
      console.log('+++++++')
      //1 取消错误提醒
      this.errors = {}
      this.$router.push("/");
      //2 发送请求
      //  this.$axios
      //   .post("/api/posts/sms_back", {
      //     phone: this.phone,
      //     code: this.verifyCode
      //   })
      //   .then(res => {
      //     // console.log(res);
      //     // 检验成功 设置登录状态并且跳转到/
      //     localStorage.setItem("ele_login", true);
      //     this.$router.push("/");
      //   })
      //   .catch(err => {
      //     // 返回错误信息
      //     this.errors = {
      //       code: err.response.data.msg
      //     };
      //   });
  }}
};
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 20px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .login .logo{
    margin: 120px 0 50px 0;
    display: flex;
    justify-content: center;
  }
  .login .logo img{
    width: 150px;
  }
  .login .login_des{
    width: 100%;
    text-align: center;
    margin: 30px 0 10px 0;
    font-size: 14px;
  }
  .login .login_des p{
    color: #aaa;
  }
  .login .login_des p span{
    color: #227D51;
  }
  .login .login_btn{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .login .login_btn button{
    width: 100%;
    height: 30px;
    background: #49ad76;
    outline: none;
    border: none;
  }
  .login_btn button[disabled] {
    background-color: #8bda81;
  }
</style>
