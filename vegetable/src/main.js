import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from './js/http'
Vue.prototype.$axios= axios
Vue.config.productionTip = false
Vue.use(ElementUI)

import router from './router'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
