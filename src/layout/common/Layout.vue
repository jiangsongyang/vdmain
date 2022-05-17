<script setup lang="ts">
  import BaseLayout from '../base/BaseLayout.vue'
</script>

<script lang="ts">
  export default {
    name: 'layout'
  }
</script>

<template>
  <BaseLayout>
    <slot />
  </BaseLayout>
</template>
