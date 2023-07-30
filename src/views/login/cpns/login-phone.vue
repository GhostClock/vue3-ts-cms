<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" placeholder="请输入验证码" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { rules } from '../config/phone-config'
const phone = reactive({
  number: '',
  code: ''
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  button {
    margin-left: 8px;
  }
}
</style>
