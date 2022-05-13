<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui'
import DropDownMenu from './components/DropDownMenu/DropDownMenu.vue'
import WebsiteInfo from './components/WebsiteInfo/WebsiteInfo.vue'
</script>

<template>
  <NGrid :cols="2" class="layout-header">
    <NGi>
      <WebsiteInfo />
    </NGi>
    <NGi>
      <DropDownMenu />
    </NGi>
  </NGrid>
</template>

<style scoped lang="less">
@import url('./style.less');
</style>
