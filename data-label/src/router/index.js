import { createRouter, createWebHistory } from 'vue-router'
import LabelingPage from '../views/Label.vue'
import ProjectManagePage from '../views/ProjectManage.vue'

const routes = [
  {
    path: '/',
    name: 'ProjectManage',
    component: ProjectManagePage
  },
  {
    path: '/labeling',
    name: 'Label',
    component: LabelingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
