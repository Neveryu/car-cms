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
      meta: {
        title: '客户管理'
      },
      children: [
        { path: 'manage', component: Customer, meta: { title: '客户信息' } }
      ]
    },
    {
      path: '/car',
      component: Layout,
      redirect: '/car/manage',
      meta: {
        title: '车辆管理'
      },
      children: [
        { path: 'manage', component: Car, meta: { title: '车辆信息' } }
      ]
    },
    {
      path: '/park',
      component: Layout,
      redirect: '/park/manage',
      meta: {
        title: '停车场'
      },
      children: [
        { path: 'manage', component: Park, meta: { title: '停车场' } }
      ]
    },
    {
      path: '/order',
      component: Layout,
      redirect: '/order/manage',
      meta: {
        title: '账单管理'
      },
      children: [
        { path: 'manage', component: Order, meta: { title: '账单列表' } }
      ]
    },
    {
      path: '/permission',
      component: Layout,
      redirect: '/permission/manage',
      meta: {
        title: '权限管理'
      },
      children: [
        { path: 'manage', component: Permission, meta: { title: '权限列表' } }
      ]
    },
    {
      path: '/user',
      component: Layout,
      redirect: '/user/manage',
      meta: {
        title: '用户管理'
      },
      children: [
        { path: 'manage', component: User, meta: { title: '用户列表' } }
      ]
    },
    {
      path: '/error',
      component: Layout,
      redirect: '/error/manage',
      meta: {
        title: '报错信息'
      },
      children: [
        { path: 'manage', component: Err, meta: { title: '报错信息' } }
      ]
    }
  ]
})
