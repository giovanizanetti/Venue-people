import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ROUTE } from '@/constants'

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE.home,
      component: HomeView
    },
    {
      path: '/contact-list',
      name: ROUTE.contactList,

      component: () => import('../views/ContactListView.vue')
    },
    {
      path: '/new-user',
      name: ROUTE.addUser,

      component: () => import('../views/AddUserView.vue')
    },
    {
      path: '/contact-editor/:id',
      name: ROUTE.contactEditor,

      component: () => import('../views/ContactEditorView.vue')
    },
    {
      path: '/readme',
      name: ROUTE.readme,
      component: () => import('../views/ReadMe.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: ROUTE.notFound,
      component: () => import('../views/404NotFound.vue')
    }
  ]
})

export default router
