import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

/*const loadimage = require('./assets/loading.gif')
const errorimage = require('./assets/error.gif')*/

Vue.use(VueLazyload, {
  preLoad: 1.3,
  /*error: errorimage,
  loading: loadimage,*/
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
