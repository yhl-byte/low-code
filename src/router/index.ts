/*
 * @Author: yhl
 * @Date: 2022-09-30 14:30:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-02 11:27:33
 * @FilePath: /low-code/src/router/index.ts
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
