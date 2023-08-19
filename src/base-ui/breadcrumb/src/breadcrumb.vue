<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="breadcrumb in props.breadcrumbs" :key="breadcrumb.name">
        <!-- 面包屑点击不能跳转 -->
        <el-breadcrumb-item :to="{ path: '' }">{{
          breadcrumb.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type IBreadcrumb from '../types'
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
