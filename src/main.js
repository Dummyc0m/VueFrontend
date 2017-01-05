import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueHead from 'vue-head'
import App from './App'
import VueMaterial from 'vue-material-gc'
import VideoPlayer from 'vue-video-player'
import 'vue-material-gc/dist/vue-material.css'
import 'font-awesome/css/font-awesome.css'
import routes from './routes'
import storeParams from './vuex/store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueHead)
Vue.use(VueMaterial)
Vue.use(VideoPlayer)

Vue.material.registerTheme('default', {
    primary: 'brown',
    accent: 'blue',
    warn: 'red',
    background: 'grey'
})
VideoPlayer.config({
    youtube: false,  // default false（youtube的支持）
    switcher: true, // default true（播放源切换功能）
    hls: false       // default true（直播功能的支持）
})

const router = new VueRouter({
    routes
})

export const store = new Vuex.Store(storeParams)

Vue.http.options.root = 'http://hn2.guardiantech.com.cn:3333/v1'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
    store
})
