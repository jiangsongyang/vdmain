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
  <NMessageProvider>
    <BaseLayout>
      <slot />
    </BaseLayout>
  </NMessageProvider>
</template>
