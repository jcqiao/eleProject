<template>
  <div class="text_group">
    <!-- 组件结构 -->
    <!-- 组件容器 -->
    <div class="input_group" :class="{'is-invalid': error}">
        <!-- :value="value" -->
      <!-- 输入框 -->
      <input
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :error="error"
        @input="$emit('input', $event.target.value)"
        
      >
      <!-- 输入框后面的按钮 -->
      <button v-if="btnTitle" :disabled="disabled" @click="getCode">{{btnTitle}}</button>
      
    </div>
    <!-- 错误提醒 -->
    <div v-if="error" class="invalid-feedback" >{{error}}</div>
  </div>
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    type: {
      type: String,
      default: "number"
    },
    value: String,
    placeholder: String,
    name: String,
    btnTitle: String,
    disabled: Boolean,
    error: String
  },
  methods:{
    getCode(){
      this.$emit('getCode')
    }
  },
  mounted(){
    // console.log(this.error,this.type)
  }
};
</script>

<style scoped>
  .input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
  border: none;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;

}
</style>
