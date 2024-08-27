import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { useUserStore } from './stores';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const userStore = useUserStore();

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    if (requiresAuth && !userStore.user.loggedIn) {
      next('/login')
    } else {
      next()
    }
  })

app.mount('#app')
