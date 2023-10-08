<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent
      :contentTableConfig="contentTableConfig"
      :pageName="PageNameType.role"
      @newUserClick="_handleNewUser"
      @editUserClick="_handleEditUser"
    />
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :default-info="defaultInfo"
      :pageName="PageNameType.role"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { PageNameType } from '@/service/urls'
import { usePageModal } from '@/hooks/usePageModal'

type clickType = (...args: any[]) => void
const [pageModalRef, handleNewUser, handleEditUser, defaultInfo] =
  usePageModal()

const _handleNewUser = handleNewUser as clickType
const _handleEditUser = handleEditUser as clickType
</script>

<style scoped></style>
