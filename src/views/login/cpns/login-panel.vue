<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs
      type="border-card"
      class="tabs"
      :stretch="true"
      v-model="currentTab"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>帐号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

// 1、定义属性
const isKeepPwd = ref(true)
// InstanceType<typeof LoginAccount>： 获取组件实例类型
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref('account')

// 2、定义方法
const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    // 帐号登录
    return accountRef.value?.loginAction(isKeepPwd.value)
  }
  // 手机登录
  phoneRef.value?.loginAction(isKeepPwd.value)
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}

.account-control {
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
}
</style>
