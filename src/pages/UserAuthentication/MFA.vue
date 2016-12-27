<template>
    <div style="height: 100%;">
        <div style="max-width: 400px; margin: 100px auto auto auto;">
            <md-card class="md-whiteframe-10dp" style="padding: 10px 10px 10px 10px; margin: 20px 20px 20px 20px;"
                     :class="{'shake-animate' : hasError}">
                <form @submit.prevent="handleMFASubmit">
                    <md-card-header>
                        <div class="md-title">两步验证</div>
                        <div class="md-subhead">为确保您账户的安全，我们需要验证您的身份。</div>
                    </md-card-header>

                    <md-card-content>
                        <md-input-container :class="">
                            <label>验证码</label>
                            <md-input type="text" v-model="token" maxlength="6" required></md-input>
                        </md-input-container>
                    </md-card-content>

                    <md-card-actions>
                        <md-button class="md-raised md-primary" type="submit">确定</md-button>
                    </md-card-actions>
                </form>
            </md-card>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'MFA',
        data () {
            return {
                hasError: false,
                token: ''
            }
        },
        methods: {
            handleMFASubmit () {
                let self = this
                this.hasError = false
                this.$store.dispatch('verifyMFA', {
                    code: this.token,
                    callback (result) {
                        if (!result) {
                            self.hasError = true
                            self.token = ''
                        }
                    }
                })
            }
        },
        created () {
            if (this.$store.state.authentication.mfaAuthed) {
                this.$router.replace({name: 'index'})
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
