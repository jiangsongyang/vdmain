import { store } from '../core';
import type { App } from 'vue';

export function setupStore(app: App<Element>) {
  app.use(store);
}
