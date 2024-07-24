import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact-list',
      name: 'contact-list',

      component: () => import('../views/ContactListView.vue')
    },
    {
      path: '/contact-editor',
      name: 'contact-editor',

      component: () => import('../views/ContactEditorView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404NotFound.vue')
    }
  ]
})

export default router
