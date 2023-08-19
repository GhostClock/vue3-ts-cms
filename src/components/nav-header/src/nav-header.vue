<template>
  <div class="nav-header">
    <el-icon class="expand-menu" @click="expandAction">
      <template v-if="isFold">
        <Expand />
      </template>
      <template v-else>
        <Fold />
      </template>
    </el-icon>
    <div class="content">
      <CGBreadcrumb :breadcrumbs="breadcrumbs" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { useLoginStore } from '@/store/login/login'
import CGBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapToBreadcrumb } from '@/utils/map-menus'

const emit = defineEmits(['foldChange'])

// 面包屑数据 [{name, path}
const breadcrumbs = computed(() => {
  const route = useRoute()
  const loginStore = useLoginStore()
  return pathMapToBreadcrumb(loginStore.userMenus, route.path)
})

const isFold = ref(false)
const expandAction = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .expand-menu,
  .expand-fold {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 10px;
  }
}
</style>
