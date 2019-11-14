import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ElementUI需要导入的内容
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './style/index.less'

import axios from 'axios'

// 初始化ElementUI组件库
Vue.use(ElementUI)
Vue.config.productionTip = false

// 设置请求接口基地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 挂载axios到实例
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
