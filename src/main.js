import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { Loading } from 'element-ui'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
