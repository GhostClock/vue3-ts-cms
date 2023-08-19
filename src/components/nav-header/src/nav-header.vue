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
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
const emit = defineEmits(['foldChange'])

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
