<template>
  <div class="dashboard"></div>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '@/store/main/analysis/dashboard'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardDataAction()
</script>

<style scoped></style>
