<script setup lang="ts">
import {} from 'vue'
import { NGrid, NGi } from 'naive-ui'
import SystemSetting from '../SystemSetting/SystemSetting.vue'
import DropDownMenu from '../DropDownMenu/DropDownMenu.vue'
</script>

<template>
  <NGrid x-gap="12" class="action-bar">
    <NGi span="21" class="with-hover">
      <DropDownMenu />
    </NGi>
    <NGi span="3" class="with-hover">
      <SystemSetting />
    </NGi>
  </NGrid>
</template>

<style lang="less" scoped>
@import url('./style.less');
</style>
