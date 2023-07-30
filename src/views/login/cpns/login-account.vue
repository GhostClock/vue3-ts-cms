<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" placeholder="请输入帐号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const account = reactive({
  name: '',
  password: ''
})
// 编写表单检验规则
const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: '密码必须是3位以上字母或者数字',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  span {
    width: 60px;
  }
  i {
    margin-right: 5px;
    color: red;
  }
}
.pwd {
  margin: 20px 0 10px 0;
}
</style>
