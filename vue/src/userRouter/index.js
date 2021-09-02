/*
 * @Author: limy
 * @Date: 2020-12-02 10:54:27
 * @LastEditors: limy
 * @LastEditTime: 2020-12-29 14:27:28
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import ('@/view/user/login'),
  page1: () => import ('@/view/user/page1'),

};
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        desc: '登录页面'
      },
      component: components.login,
    },
    {
      path: '/page1',
      name: 'page1',
      meta: {
        desc: 'page1页面'
      },
      component: components.page1,
    }
  ]
})
