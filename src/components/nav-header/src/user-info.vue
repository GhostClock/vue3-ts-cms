<template>
  <div class="user-info">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-avatar size="small" :src="circleUrl" />
        <span class="name">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="CloseBold">退出系统</el-dropdown-item>
          <el-dropdown-item divided :icon="User">用户信息</el-dropdown-item>
          <el-dropdown-item :icon="Setting">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, computed } from 'vue'
import { CloseBold, User, Setting } from '@element-plus/icons-vue'
import { useLoginStore } from '@/store/login/login'

const store = useLoginStore()
const name = computed(() => store.userInfo.realname)

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl } = toRefs(state)
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  .name {
    margin-left: 3px;
  }
}
</style>
