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
      @newUserClick="handleNewUser"
      @editUserClick="handleEditUser"
    />
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { PageNameType } from '@/service/urls'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

// pageModal相关逻辑
const newUserCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  // TODO 界面不更新
  passwordItem!.isHidden = false
}
const editUserCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  // TODO 界面不更新
  passwordItem!.isHidden = true
}
const [pageModalRef, handleNewUser, handleEditUser, defaultInfo] = usePageModal(
  newUserCallBack,
  editUserCallBack
)
</script>

<style scoped></style>
