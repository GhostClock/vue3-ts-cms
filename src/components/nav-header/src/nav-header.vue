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
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
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
  .expand-menu,
  .expand-fold {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
