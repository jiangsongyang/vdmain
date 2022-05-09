<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from 'naive-ui'
import LayoutHeader from './components/Header/LayoutHeader.vue'
import LayoutMenu from './components/Menu/LayoutMenu.vue'
</script>

<script lang="ts">
export default {
  name: 'base-layout',
}
</script>

<template>
  <n-layout style="height: 100vh">
    <n-layout-header bordered>
      <layout-header />
    </n-layout-header>
    <n-layout has-sider style="height: calc(100vh - 100px)">
      <n-layout-sider bordered>
        <layout-menu />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
