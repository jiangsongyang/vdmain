import { useMessage } from 'naive-ui';

export const installGlobalMessage = () => {
  window.$message = useMessage();
};
