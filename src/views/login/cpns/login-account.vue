<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" placeholder="请输入帐号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          show-password
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
import LocalCache from '@/utils/cache'
import { useLoginStore } from '@/store/login/login'

const loginStore = useLoginStore()

const account = reactive({
  name: LocalCache.getCache('name') ?? '',
  password: LocalCache.getCache('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPwd: boolean) => {
  // 获取表单是否校验通过
  formRef.value?.validate((valid) => {
    console.log(valid ? '表单校验成功' : '表单校验失败')
    if (valid) {
      console.log('开始执行登录逻辑')
      // 1、判断是否需要记住密码
      if (isKeepPwd) {
        // 本地缓存
        LocalCache.setCache('name', account.name)
        LocalCache.setCache('password', account.password)
      } else {
        LocalCache.deleteCache('name')
        LocalCache.deleteCache('password')
      }
      // 2、开始进行登录验证
      loginStore.accountLoginAction({ ...account })
    }
  })
}

// 把子组件的方法暴露出去 defineExpose是一个编译宏
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
