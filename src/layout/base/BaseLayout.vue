<script setup lang="ts">
    import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from 'naive-ui'
    import LayoutHeader from './components/Header/LayoutHeader.vue'
    import LayoutMenu from './components/Menu/LayoutMenu.vue'
    import { useMenu } from './components/Menu/use/useMenu'

    const { COLLAPSED_WIDTH } = useMenu()
</script>

<script lang="ts">
    export default {
        name: 'base-layout'
    }
</script>

<template>
  <NLayout class="base-layout">
    <NLayoutHeader bordered>
      <LayoutHeader />
    </NLayoutHeader>
    <NLayout has-sider class="sider">
      <NLayoutSider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="COLLAPSED_WIDTH"
        :native-scrollbar="false"
      >
        <LayoutMenu />
      </NLayoutSider>
      <NLayoutContent content-style="padding: 24px;">
        <slot />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style lang="less" scoped>
  @import url('./style.less');
</style>
