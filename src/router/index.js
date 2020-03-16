import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/',
        name: 'main',
        component:() => import('../components/index/index.vue'),
      },
      {
        path: 'table',
        name: 'table',
        component:() => import('../components/table/first_table.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
