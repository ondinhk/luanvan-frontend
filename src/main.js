import Vue from 'vue'
import App from './App.vue'
// import my css
import './assets/css/main.css'
import './assets/css/my-style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
