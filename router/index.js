import { createRouter, createWebHistory } from 'vue-router'
import Add from '../views/Add.vue'

const routes = [
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
