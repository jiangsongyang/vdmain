// vite plugins
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';

// node modules
import { resolve } from 'path';

export const createViteAlias = (root: string) => {
  return [
    {
      find: '@',
      replacement: resolve(root, 'src'),
    },
    {
      find: '@vicons',
      replacement: resolve(root, './node_modules/@vicons'),
    },
  ];
};

export const createViteServer = (env) => ({
  host: true,
  port: env.VITE_SERVER_PORT,
});

export const createVitePlugins = (env) => {
  const plugins = [];

  // install vue plugin
  plugins.push(vue());

  // should mock && install mock plugin
  env.VITE_USE_MOCK === 'true' &&
    plugins.push(viteMockServe({ mockPath: '/src/mock', localEnabled: true }));

  return plugins;
};
