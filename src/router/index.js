import { createRouter, createWebHistory } from 'vue-router'
import Today from '../views/Today.vue'
import Tomorrow from '../views/Tomorrow.vue'
import Week from '../views/Week.vue'
import Month from '../views/Month.vue'
import Year from '../views/Year.vue'

const routes = [
  {
    path: '/',
    name: 'today',
    component: Today
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import('../views/Tomorrow.vue')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import('../views/Week.vue')
  }
  ,
  {
    path: '/year',
    name: 'year',
    component: () => import('../views/Year.vue')
  }
  ,
  {
    path: '/month',
    name: 'month',
    component: () => import('../views/Month.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
