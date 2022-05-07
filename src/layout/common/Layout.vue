<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
import BaseLayout from '../base/BaseLayout.vue'
</script>

<script lang="ts">
export default {
  name: 'layout',
}
</script>

<template>
  <n-message-provider>
    <base-layout />
  </n-message-provider>
</template>

<style scoped></style>
