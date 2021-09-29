import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router, //this.$router 访问整个router对象
  store, //this.$store  访问整个store对象
  render: h => h(App),
}).$mount('#app')
