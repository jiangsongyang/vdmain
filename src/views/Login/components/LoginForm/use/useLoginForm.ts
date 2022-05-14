import { ref } from "vue";
import type { FormInst, FormRules } from "naive-ui";
import { useUserStore } from "@/store";
import type { LoginParams } from "@/api";

export const useLoginForm = () => {
  const model = ref<LoginParams>({
    name: "",
    password: "",
  });

  const formRef = ref<FormInst | null>(null);

  const rules: FormRules = {
    name: [
      {
        required: true,
        message: "请输入账号",
        trigger: ["input", "blur"],
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
        trigger: ["input", "blur"],
      },
    ],
  };

  const handleLogin = () => {
    formRef.value?.validate((error) => {
      if (!error) {
        const userStore = useUserStore();
        userStore.login(model.value);
      }
    });
  };

  return {
    model,
    formRef,
    rules,
    handleLogin,
  };
};
