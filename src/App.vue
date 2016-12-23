<template>
    <div id="app">
        <header>
            <md-toolbar>
                <router-link tag="md-button" class="md-icon-button" :to="{name: 'index'}">
                    <md-icon class="fa fa-send fa-2x"></md-icon>
                </router-link>

                <h2 class="md-title"><router-link :to="{name: 'index'}" class="" style="color: inherit; text-decoration: none;">Guardian Classroom</router-link></h2>

                <span style="flex: 1;"></span>

                <router-link tag="md-button" :to="{ path: '/sign-in'}">登录</router-link>

                <md-menu>
                    <md-button md-menu-trigger>2</md-button>

                    <md-menu-content>
                        <md-menu-item>My Item 1</md-menu-item>
                        <md-menu-item>My Item 2</md-menu-item>
                        <md-menu-item>My Item 3</md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-toolbar>
        </header>
        <main>
            <transition :name="transitionName" mode="out-in">
                <router-view class="child-transition main-view"></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import * as types from './vuex/mutation-types'

    export default {
        name: 'app',
        data () {
            return {
                transitionName: 'slide-left',
                backEnabled: false
            }
        },
        components: {

        },
        methods: {
            redirect (name) {
                this.$router.push({name: name})
            }
        },
        created () {
            // Transition
            const self = this
            // Authentication block
            // TODO
//            if (!self.$store.state.authentication.authenticated && this.$router.currentRoute.path !== '/sign-in') {
//                this.$router.push('sign-in')
//            }
//            this.$router.beforeEach((to, from, next) => {
//                if (to.path !== '/sign-in' && to.path !== '/') {
//                    if (self.$store.state.authentication.authenticated) {
//                        next()
//                    } else {
//                        next('/sign-in')
//                    }
//                } else {
//                    next()
//                }
//            })
            // Animation
            this.$router.beforeEach((to, from, next) => {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                if (from.path === '/sign-in') {
                    self.transitionName = 'slide-right'
                } else {
                    self.transitionName = toDepth < fromDepth ? 'slider-ight' : to.path.length < 2 ? 'slide-right' : 'slide-left'
                }
                self.backEnabled = !(to.path.length < 2 || to.path === '/sign-in')
                next()
            })

            this.$store.subscribe((mutation, state) => {
                console.log(mutation.type)
                switch (mutation.type) {
                    case types.AUTHENTICATION_FAILURE:
                        self.$router.replace({name: 'sign-in'})
                        break
                    case types.AUTHENTICATION_VERIFICATION_SUCCESS:
                        break
                }
            })
        }
    }
</script>

<style>
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(100px, 0);
        transform: translate(100px, 0);
        transition: opacity .2s ease;
    }

    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-100px, 0);
        transform: translate(-100px, 0);
        transition: opacity .5s ease;
    }

    .child-transition {
        transition: all .4s ease;
    }
</style>
