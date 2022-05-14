<script setup lang="ts">
  import { NMenu } from 'naive-ui';

  import { useMenu } from './use/useMenu';

  const { menuOptions, COLLAPSED_WIDTH } = useMenu();
</script>

<template>
  <NMenu :collapsed-width="COLLAPSED_WIDTH" :options="menuOptions" />
</template>
