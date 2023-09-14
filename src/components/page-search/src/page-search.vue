<template>
  <div class="page-search">
    <GCForm v-bind="props.searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleQuery"
            >搜索</el-button
          >
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
const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])

// 1、双向绑定的属性应该是由配置文件的field来决定的
let fieldData: any = {}
const getFromItems = () => {
  const fromItems = props.searchFormConfig?.formItems ?? []
  fromItems.forEach((item: any) => {
    fieldData[item.field] = ''
  })
}
getFromItems()
const formData = ref(fieldData)
// 2、点击重置后，清空formData里面的数据
const handleResetClick = () => {
  // 1、方案一：双向绑定
  // for (const key in fieldData) {
  //   formData.value[`${key}`] = fieldData[key]
  // }

  // 2、方案二：
  formData.value = fieldData

  emits('resetBtnClick')
}

// 3、点击搜索
const handleQuery = () => {
  emits('queryBtnClick', formData.value)
}
</script>

<style scoped>
.header {
  margin: 0px 0px 0px 10px;
  text-align: left;
}

.footer {
  text-align: right;
  padding: 0px 10px 20px 0;
}
</style>
