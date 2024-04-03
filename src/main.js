import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const user = {
    loggedIn: false
};

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    if (requiresAuth && !user.loggedIn) {
      next('/zyra')
    } else {
      next()
    }
  })

app.mount('#app')
