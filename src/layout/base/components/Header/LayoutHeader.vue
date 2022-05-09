<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui'
import DropDownMenu from './components/DropDownMenu/DropDownMenu.vue'
import WebsiteInfo from './components/WebsiteInfo/WebsiteInfo.vue'
</script>

<template>
  <n-grid :cols="2" class="header-container">
    <n-gi>
      <website-info />
    </n-gi>
    <n-gi>
      
        <drop-down-menu />
 
    </n-gi>
  </n-grid>
</template>

