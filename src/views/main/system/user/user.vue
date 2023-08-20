<template>
  <div class="user">
    <GCForm v-bind="searchFormConfig" v-model="formData" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GCForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped></style>
