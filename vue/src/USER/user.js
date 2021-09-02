import Vue from 'vue'
import User from './User.vue'
import router from '../userRouter'
import '../assets/base.css'
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(User),
}).$mount('#user')
