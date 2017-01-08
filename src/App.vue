<template>
    <div id="app">
        <header>
            <md-toolbar>
                <router-link tag="md-button" class="md-icon-button" :to="{name: 'index'}">
                    <md-icon class="fa fa-graduation-cap fa-2x"></md-icon>
                </router-link>

                <h2 class="md-title"><router-link :to="{name: 'index'}" class="" style="color: inherit; text-decoration: none;">Classroom</router-link></h2>

                <span style="flex: 1;"></span>

                <router-link v-if="!authenticated" tag="md-button" class="menu-button" :to="{ path: '/sign-in'}">登录</router-link>
                <router-link v-if="!authenticated" tag="md-button" class="menu-button" :to="{ path: '/sign-up'}">注册</router-link>

                <md-menu v-if="authenticated && mfaAuthed">
                    <md-button md-menu-trigger style="text-transform: none;">{{name}}</md-button>

                    <md-menu-content>
                        <md-menu-item @click="routePush('user_center')">个人中心</md-menu-item>
                        <md-menu-item v-if="adminPanelAccess" @click="routePush('admin')">后台管理(Admin)</md-menu-item>
                        <md-menu-item @click="routePush('user_courses')">我的课程</md-menu-item>
                        <md-menu-item @click="routePush('creator_studio')">创作者工作室</md-menu-item>
                        <md-menu-item @click="signOut">登出</md-menu-item>
                    </md-menu-content>
                </md-menu>

                <md-menu v-if="authenticated && (!mfaAuthed)">
                    <md-button md-menu-trigger style="text-transform: none;">完成两步验证</md-button>

                    <md-menu-content>
                        <md-menu-item @click="routePush('mfa')">完成两步验证</md-menu-item>
                        <md-menu-item @click="signOut">登出</md-menu-item>
                    </md-menu-content>

                </md-menu>

            </md-toolbar>
        </header>
        <main>
            <transition :name="transitionName" mode="out-in">
                <router-view class="child-transition main-view"></router-view>
            </transition>
        </main>
        <LoadingSpinner v-if="showLoader"></LoadingSpinner>
    </div>
</template>

<script>
    import * as types from './vuex/mutation-types'
    import LoadingSpinner from 'components/LoadingSpinner'
    export default {
        name: 'app',
        data () {
            return {
                transitionName: 'slide-left',
                backEnabled: false
            }
        },
        components: {
            LoadingSpinner
        },
        computed: {
            authenticated () {
                return this.$store.state.authentication.authenticated
            },
            userEmail () {
                return this.$store.state.userinfo.email
            },
            name () {
                if (this.$store.state.userinfo.name !== null) {
                    return this.$store.state.userinfo.name
                }
                return '载入中...'
            },
            mfaAuthed () {
                return this.$store.state.authentication.mfaAuthed
            },
            showLoader () {
                return this.$store.state.loader.display
            },
            adminPanelAccess () {
                return this.hasPermission('adminPanel')
            }
        },
        methods: {
            hasPermission (permission) {
                return (this.$store.state.authentication.permissions.indexOf(permission) > -1)
            },
            routePush (name) {
                this.$router.push({'name': name})
            },
            signOut () {
                this.$store.dispatch('signOut')
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
                if (from.name === 'sign-in') {
                    self.transitionName = 'slide-left'
                } else {
                    self.transitionName = toDepth < fromDepth ? 'slide-right' : to.path.length < 2 ? 'slide-right' : 'slide-left'
                    if (self.$store.state.authentication.authenticated) {
                        self.$store.dispatch('verifyToken', {simple: true})
                    }
                }
                next()
            })

            this.$store.subscribe((mutation, state) => {
                console.log(mutation.type)
                switch (mutation.type) {
                    case types.AUTHENTICATION_FAILURE:
                        self.$router.replace({name: 'sign-in'})
                        break
                    case types.AUTHENTICATION_REQUIRE_MFA:
                        self.$router.replace({name: 'mfa'})
                        break
                    case types.AUTHENTICATION_MFA_PASS:
                        if (self.$router.currentRoute.name === 'mfa') {
                            self.$router.replace({name: 'index'})
                        }
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

    .menu-button {
        min-width: 0 !important;
    }
</style>
