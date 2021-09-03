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
  login: () => import ('@/view/home/login'),
  page1: () => import ('@/view/home/page1'),
  page2: () => import ('@/view/home/page2'),
  page3: () => import ('@/view/home/page3'),

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
      redirect:'/page1/page2',
      meta: {
        desc: 'page1页面'
      },
      component: components.page1,
      children:[
        {
          path: '/page1/page2',
      name: 'page2',
      meta: {
        desc: 'page2页面'
      },
      component: components.page2,
        },
        {
          path: '/page1/page3',
      name: 'page3',
      meta: {
        desc: 'page3页面'
      },
      component: components.page3,
        },
      ]
    }
  ]
})
