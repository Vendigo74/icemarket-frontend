import '@/app/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/app/App.vue';
import { appRouter } from '@/app/provider/router';

const app = createApp(App);

app.use(createPinia());
app.use(appRouter);

app.mount('#app');
