<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      v-for="menuItem in loginStore.userMenus"
      :key="menuItem.id"
      :default-active="defaultValue"
      :default-openeds="['38']"
      class="el-menu-vertical"
      text-color="#b7bdc3"
      background-color="#0c2135"
      :collapse="collapse"
      :collapse-transition="true"
      :unique-opened="true"
    >
      <el-sub-menu :index="`${menuItem.id}`">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>{{ menuItem.name }}</span>
        </template>

        <el-menu-item
          v-for="(sumItem, subItemIndex) in menuItem.children"
          :key="sumItem.id"
          :index="`${sumItem.id}-${subItemIndex}`"
          @click="handleMenuItemClick(sumItem)"
        >
          <span>{{ sumItem.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Location } from '@element-plus/icons-vue'
import { useLoginStore } from '@/store/login/login'
import { IUserMenus } from '@/service/login/types'
import { pathMapToMenu } from '@/utils/map-menus'

const props = defineProps({ collapse: Boolean })
const loginStore = useLoginStore()
const router = useRouter()
const route = useRoute()
const currentPath = route.path

const { collapse } = toRefs(props)

const menu = pathMapToMenu(loginStore.userMenus, currentPath)
const defaultValue = ref(`${menu.id}`)

const handleMenuItemClick = (item: IUserMenus) => {
  console.log(item)
  router.push({
    path: item.url ?? '/not-found'
  })
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
.el-menu {
  border-right: none;
}
</style>
