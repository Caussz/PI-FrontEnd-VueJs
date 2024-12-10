import './assets/main.css';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { useUserStore } from './stores';
import { createVuetify } from 'vuetify/lib/framework.mjs';

const vuetify = createVuetify({
  components,
  directives
})
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

app.use(vuetify)
app.mount('#app')
