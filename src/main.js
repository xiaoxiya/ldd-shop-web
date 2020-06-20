import Vue from 'vue'
import App from './App'
//引入router路由
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// icon
import '@/icons' 
 // global css
import '@/styles/index.scss'

//引入element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
