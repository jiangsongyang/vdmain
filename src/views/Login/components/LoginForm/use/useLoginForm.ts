import { ref } from 'vue';
import { FormInst, FormRules, useMessage } from 'naive-ui';
import { useUserStore } from '@/store';
import type { LoginParams } from '@/api';

export const useLoginForm = () => {
  const message = useMessage();

  const model = ref<LoginParams>({
    name: '',
    password: '',
  });

  const loading = ref<boolean>(false);

  const formRef = ref<FormInst | null>(null);

  const rules: FormRules = {
    name: [
      {
        required: true,
        message: '请输入账号',
        trigger: ['input', 'blur'],
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: ['input', 'blur'],
      },
    ],
  };

  const handleLogin = async () => {
    try {
      loading.value = true;
      await formRef.value?.validate();
      const userStore = useUserStore();
      await userStore.login(model.value);
    } finally {
      loading.value = false;
    }
  };

  return {
    model,
    formRef,
    rules,
    loading,
    handleLogin,
  };
};
