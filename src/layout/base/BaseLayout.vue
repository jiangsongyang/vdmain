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
  <NLayout style="height: 100vh">
    <NLayoutHeader bordered>
      <LayoutHeader />
    </NLayoutHeader>
    <NLayout has-sider style="height: calc(100vh - 100px)">
      <NLayoutSider bordered>
        <LayoutMenu />
      </NLayoutSider>
      <NLayoutContent content-style="padding: 24px;">
        <slot />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style scoped></style>
