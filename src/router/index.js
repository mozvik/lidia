import {
  createRouter,
  // createWebHistory,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/gallery/:id',
    name: 'PaintDetails',
    component: () => import('../views/PaintDetails.vue'),
  },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: () => import('../views/Services.vue')
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory("/"),
  history: createWebHashHistory(),
  routes
})

export default router
