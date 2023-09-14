<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="PageNameType.users"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { PageNameType } from '@/service/urls'

const pageContentRef = ref<InstanceType<typeof PageContent>>()
const handleResetClick = () => {
  pageContentRef.value?.getPageData()
}
const handleQueryClick = (queryInfo: any) => {
  pageContentRef.value?.getPageData(queryInfo)
}
</script>

<style scoped></style>
