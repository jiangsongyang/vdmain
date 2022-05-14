<script setup lang="ts">
    import { useUserStore } from '@/store'
    import { useDropDown } from './use'
    import { NDropdown, NButton } from 'naive-ui'

    const userStore = useUserStore()
    const { handleSelect, dropDownOptions } = useDropDown()

    const userName = userStore.getUseInfo()?.userName
</script>

<template>
  <div class="drop-down-menu-container">
    <NDropdown trigger="hover" :options="dropDownOptions" @select="handleSelect">
      <NButton text type="default">{{ userName }}</NButton>
    </NDropdown>
  </div>
</template>

<style scoped>
  @import url('./style.less');
</style>
