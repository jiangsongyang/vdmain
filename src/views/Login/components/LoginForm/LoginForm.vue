<script setup lang="ts">
  import { NForm, NFormItem, NInput, NButton, NCard } from 'naive-ui'
  import { useLoginForm } from './use/useLoginForm'

  const { model, rules, formRef, handleLogin, loading } = useLoginForm()
</script>

<template>
  <NCard title="登陆" hoverable>
    <NForm ref="formRef" :show-require-mark="false" :label-width="60" :model="model" :rules="rules">
      <NFormItem label="账号" path="name">
        <NInput
          placeholder="请输入账号"
          v-model:value="model.name"
          @keydown.enter.prevent="handleLogin"
        />
      </NFormItem>
      <NFormItem label="密码" path="password">
        <NInput
          type="password"
          show-password-on="mousedown"
          placeholder="请输入密码"
          v-model:value="model.password"
          @keydown.enter.prevent="handleLogin"
        />
      </NFormItem>
      <NFormItem>
        <NButton type="primary" class="login-button" :loading="loading" @click="handleLogin"
          >登陆</NButton
        >
      </NFormItem>
    </NForm>
  </NCard>
</template>

<style scoped lang="less">
  @import url('./style.less');
</style>
