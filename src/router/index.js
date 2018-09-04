import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/base-layout/Layout'
import Customer from '@/views/customer'
import Car from '@/views/car'
import Park from '@/views/park'
import Order from '@/views/order'
import Permission from '@/views/permission'
import User from '@/views/user'
import Err from '@/views/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/customer'
    },
    {
      path: '/customer',
      component: Layout,
      redirect: '/customer/manage',
      children: [
        { path: 'manage', component: Customer }
      ]
    },
    {
      path: '/car',
      component: Layout,
      redirect: '/car/manage',
      children: [
        { path: 'manage', component: Car }
      ]
    },
    {
      path: '/park',
      component: Layout,
      redirect: '/park/manage',
      children: [
        { path: 'manage', component: Park }
      ]
    },
    {
      path: '/order',
      component: Layout,
      redirect: '/order/manage',
      children: [
        { path: 'manage', component: Order }
      ]
    },
    {
      path: '/permission',
      component: Layout,
      redirect: '/permission/manage',
      children: [
        { path: 'manage', component: Permission }
      ]
    },
    {
      path: '/user',
      component: Layout,
      redirect: '/user/manage',
      children: [
        { path: 'manage', component: User }
      ]
    },
    {
      path: '/error',
      component: Layout,
      redirect: '/error/manage',
      children: [
        { path: 'manage', component: Err }
      ]
    }
  ]
})
