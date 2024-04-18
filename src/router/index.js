import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/zyra',
      name: 'Zyra',
      component: () => import('../views/ZyraView.vue')
    }
  ]
})

export default router
