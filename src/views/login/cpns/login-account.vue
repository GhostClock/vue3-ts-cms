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
import { rules } from '../config/account-config'

const account = reactive({
  name: '',
  password: ''
})
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
