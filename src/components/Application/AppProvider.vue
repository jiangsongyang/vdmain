<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { installGlobalMessage } from './helper'
window.$message = useMessage()

const mixin = () => {
  installGlobalMessage()
}

mixin()
</script>

<template>
  <slot />
</template>
