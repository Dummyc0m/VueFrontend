import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueHead from 'vue-head'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import routes from './routes'
import storeParams from './vuex/store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueHead)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'blue',
    warn: 'red',
    background: 'grey'
})

const router = new VueRouter({
    routes
})

export const store = new Vuex.Store(storeParams)

Vue.http.options.root = 'http://hn2.guardiantech.com.cn:3000/v1'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
    store
})
