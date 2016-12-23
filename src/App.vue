<template>
    <div id="app">
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
                    case types.AUTHENTICATION_VERIFICATION:
                        break
                }
            })
        }
    }
</script>

<style>

</style>
