<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
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
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import type { ElForm } from 'element-plus'

const account = reactive({
  name: '',
  password: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  // 获取表单是否校验通过
  formRef.value?.validate((valid) => {
    console.log(valid ? '表单校验成功' : '表单校验失败')
    if (valid) {
      console.log('开始执行登录逻辑')
    }
  })
}

// 把子组件的方法暴露出去 defineExpose是一个编译宏
// 解决eslint版本问题一起的警告
// eslint-disable-next-line no-undef
defineExpose({
  loginAction
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
