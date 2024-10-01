import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../layouts/DefaultLayout.vue'),
    //   children: [
    //     {
    //       path: '/',
    //       name: 'home',
    //       component: () => import('../views/HomeView.vue'),
    //     },
    //     {
    //       path: '/place',
    //       name: 'place',
    //       component: () => import('../views/SubjectPlaceView.vue')
    //     }
    //   ],
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../layouts/BlanckLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    },
    {
      path: '/home-desktop',
      name: 'home-desktop',
      component: () => import('../components/Home/Desktop/DesktopHome.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
