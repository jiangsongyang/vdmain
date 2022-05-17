<script setup lang="ts">
  import { NGrid, NGi } from 'naive-ui'
  import ActionBar from './components/ActionBar/ActionBar.vue'
  import WebsiteInfo from './components/WebsiteInfo/WebsiteInfo.vue'
</script>

<template>
  <NGrid :cols="2" class="layout-header">
    <NGi>
      <WebsiteInfo />
    </NGi>
    <NGi>
      <ActionBar />
    </NGi>
  </NGrid>
</template>

<style scoped lang="less">
  @import url('./style.less');
</style>
