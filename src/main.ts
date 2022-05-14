import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter, setupRouterGuard } from './router';
import { setupStore } from './store';

const bootstrap = () => {
  const app = createApp(App);

  setupRouter(app);

  setupRouterGuard(router);

  setupStore(app);

  app.mount('#app');
};

bootstrap();
