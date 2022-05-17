<script lang="ts" setup>
  import LoginForm from './components/LoginForm/LoginForm.vue'
</script>

<template>
  <div class="login-container">
    <div class="bg">
      <img src="../../assets/login.webp" alt="" />
    </div>
    <div class="login-form-container">
      <LoginForm />
    </div>
  </div>
</template>

<style scoped lang="less">
  @import url('./style.less');
</style>
