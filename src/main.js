import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import './assets/css/my-style.css'

// Import Compoents
// import Main_ from './components/Main_.vue'

// Use dependencies
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(router)


new Vue({
  render: h => h(App),
  router,
  BootstrapVue,
  IconsPlugin
}).$mount('#app')
