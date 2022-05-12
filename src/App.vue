<script setup lang="ts">
import AppProvider from './components/Application/AppProvider.vue'
import UIComponentProvider from './components/Application/UIComponentProvider.vue'
</script>

<template>
  <UIComponentProvider>
    <AppProvider>
      <RouterView />
    </AppProvider>
  </UIComponentProvider>
</template>

<style></style>
