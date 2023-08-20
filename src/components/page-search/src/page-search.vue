<template>
  <div class="page-search">
    <GCForm v-bind="props.searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" :icon="Search">搜索</el-button>
          <el-button :icon="Refresh">重置</el-button>
        </div>
      </template>
    </GCForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GCForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    reuqired: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped>
.header {
  margin: 0px 0px 0px 10px;
  text-align: left;
}

.footer {
  text-align: right;
  padding: 0px 50px 20px 0;
}
</style>
