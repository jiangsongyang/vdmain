<script setup lang="ts">
import { NGrid, NGi, NAvatar, NH1, NText } from 'naive-ui'
import DropDownMenu from './components/DropDownMenu/DropDownMenu.vue'
</script>

<template>
  <n-grid :cols="2" class="header-container">
    <n-gi>
      <div class="website-info-container">
        <n-avatar
          size="large"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <n-h1 class="website-name">
          <n-text type="primary"> hi! VDmain </n-text>
        </n-h1>
      </div>
    </n-gi>
    <n-gi>
      <div class="drop-down-menu-container">
        <drop-down-menu />
      </div>
    </n-gi>
  </n-grid>
</template>

<style scoped>
@import url('./style.less');
</style>
