import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/bulletin',
          name: 'Boletin',
          component: () => import('../views/BulletinView.vue')
        },
        {
          path: '/profile',
          name: 'Perfil',
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: '/class',
          name: 'Turma',
          component: () => import('../views/ClassView.vue')
        },
        {
          path: '/grades',
          name: 'Notas',
          component: () => import('../views/GradesView.vue')
        },
        {
          path: '/activities',
          name: 'Atividades',
          component: () => import('../views/ActivitiesView.vue')
        },
        {
          path: '/communique',
          name: 'Comunicados',
          component: () => import('../views/CommuniqueView.vue')
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../layouts/BlanckLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/bulletin',
          name: 'bulletin',
          component: () => import('../views/BulletinView.vue')
        },
        {
          path: '/progress',
          name: 'progress',
          component: () => import('../views/ProgressView.vue')
        },
      ]
    }
  ]
})

export default router