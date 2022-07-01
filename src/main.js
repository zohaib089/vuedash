import Vue from 'vue'
import router from '.'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router'
import VueMarquee from 'vue-marquee-component';
import Particles from "particles.vue";

Vue.use(Particles);
Vue.use(VueMarquee);
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
