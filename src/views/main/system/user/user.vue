<template>
  <div class="user">
    <GCForm v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import GCForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped></style>
