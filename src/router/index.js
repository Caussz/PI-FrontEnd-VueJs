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
          path: '/place',
          name: 'place',
          component: () => import('../views/SubjectPlaceView.vue')
        },
        {
          path: '/bulletin',
          name: 'bulletin',
          component: () => import('../views/BulletinView.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/ProfileView.vue')
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
        }
      ]
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('../views/ProgressView.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('../views/ActivitiesView.vue')
    },
    {
      path: '/academic-calendar',
      name: 'academic-calendar',
      component: () => import('../views/AcademicCalendarView.vue')
    },
    {
      path: '/communique',
      name: 'communique',
      component: () => import('../views/CommuniqueView.vue')
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../views/ClassView.vue')
    }
  ]
})

export default router
