<template>
  <div class="menu">
    <PageContent
      :contentTableConfig="contentTableConfig"
      :pageName="PageNameType.menu"
    />
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { PageNameType } from '@/service/urls'
</script>

<style scoped></style>
