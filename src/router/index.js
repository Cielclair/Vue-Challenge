import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Show from '../views/Show.vue'
import Request from '../views/Request.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },

  {
    path: '/index/:id',
    name: 'Show',
    component: Show,
    children: [
      {
        path: 'show',
        component: Show
      }
    ]
  },
  {
    path: '/more',
    name: 'Request',
    component: Request,
  }
]

const router = new VueRouter({
  routes
})

export default router
