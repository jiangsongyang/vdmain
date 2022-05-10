<script setup lang="ts">
import { ref } from 'vue'
import { NForm, NFormItem, NInput, NButton, NCard, FormInst } from 'naive-ui'
import { useUserStore } from '../../../../store'
import type { LoginState } from '../../../../store'


const model = ref<LoginState>({
  name: '',
  password: '',
})
const formRef = ref<FormInst | null>(null)

const handleLogin = () => {
  const userStore = useUserStore()
  userStore.login(model.value)
}
</script>

<template>
  <NCard title="登陆" hoverable>
    <NForm :label-width="60" ref="formRef" :model="model">
      <NFormItem label="账号">
        <NInput placeholder="请输入账号" v-model:value="model.name" />
      </NFormItem>
      <NFormItem label="密码">
        <NInput
          type="password"
          show-password-on="mousedown"
          placeholder="请输入密码"
          v-model:value="model.password"
        />
      </NFormItem>
      <NFormItem>
        <NButton type="primary" class="login-button" @click="handleLogin"
          >登陆</NButton
        >
      </NFormItem>
    </NForm>
  </NCard>
</template>

<style scoped lang="less">
@import url('./style.less');
</style>
