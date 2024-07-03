import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "./assets/style.scss"
import msal from "msal-vue2"

const option = {
  auth: {
    clientId: "e3b9ad76-9763-4827-b088-80c7a7888f79",
    authority: "https://msidlabb2c.b2clogin.com/msidlabb2c.onmicrosoft.com/B2C_1_SISOPolicy",
    knownAuthorities: ["msidlabb2c.b2clogin.com"],
    redirectUri: "/",
    postLogoutRedirectUri: "/"
  },
  cache: {
    cacheLocation: "localStorage",
  }
}

Vue.use(msal, option)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
