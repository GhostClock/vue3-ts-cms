<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu
      v-for="(menuItem, itemIndex) in loginStore.userMenus"
      :key="menuItem.id"
      default-active="0"
      class="el-menu-vertical"
      active-color="red"
      text-color="#b7bdc3"
      background-color="#0c2135"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu :index="`${itemIndex}`">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>{{ menuItem.name }}</span>
        </template>

        <el-menu-item
          v-for="(sumItem, subItemIndex) in menuItem.children"
          :key="sumItem.id"
          :index="`${menuItem.id}-${subItemIndex}`"
          >{{ sumItem.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Location } from '@element-plus/icons-vue'
import { useLoginStore } from '@/store/login/login'
const loginStore = useLoginStore()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}

:deep(.is-active) {
  background: #0261bf;
  color: white;
}
</style>
