<template>
        <div style="max-width: 400px; margin: auto; padding-top: 10vh;">
            <md-card class="md-whiteframe-10dp" style="padding: 10px 10px 10px 10px; margin: 20px 20px 20px 20px;" :class="loginWindowShakeAnimation">
                <form v-on:submit.prevent="handleSignInSubmit">
                    <md-card-header>
                        <div class="md-title">登录</div>
                        <div class="md-subhead">Sign in your account to access user area.</div>
                    </md-card-header>

                    <md-card-content>
                        <md-input-container>
                            <label>邮箱</label>
                            <md-input type="text" v-model="email" required></md-input>
                        </md-input-container>

                        <md-input-container>
                            <label>密码</label>
                            <md-input type="password" v-model="password" required></md-input>
                        </md-input-container>
                    </md-card-content>

                    <md-card-actions>
                        <router-link style="text-decoration: none" :to="{name: 'sign-up'}">没有账号？ 立即注册</router-link>
                        <div style="flex: 1;"></div>
                        <md-button class="md-raised md-primary" type="submit">登录</md-button>
                    </md-card-actions>
                </form>
            </md-card>
        </div>

</template>

<script>
    export default {
        name: 'SignIn',
        data () {
            return {
                email: '',
                password: '',
                isLoginAvailable: true,
                loginWindowShakeAnimation: ''
            }
        },
        methods: {
            handleSignInSubmit (event) {
                this.loginWindowShakeAnimation = ''
                let self = this
                this.isLoginAvailable = false
                this.$store.dispatch('setError', {error: false})
                this.$store.dispatch('authenticate', {
                    username: this.email,
                    password: this.password,
                    callback (result) {
                        if (result) {
                            self.$router.replace('/')
                        } else {
                            self.password = ''
                            self.isLoginAvailable = true
                            self.loginWindowShakeAnimation = 'shake-animate'
                        }
                    }
                })
            }
        },
        created () {
            if (this.$store.state.authentication.authenticated) {
                this.$router.replace('/')
            }
        }
    }
</script>


<style scoped>


    .shake-animate {
        animation: shake 0.8s;
    }

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-4px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(8px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-16px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(16px, 0, 0);
        }
    }
</style>
