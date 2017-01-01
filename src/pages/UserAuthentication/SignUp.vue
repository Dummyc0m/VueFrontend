<template>
    <div style="height: 100%;">
        <div style="max-width: 400px; margin: 100px auto auto auto;">
            <md-card class="md-whiteframe-10dp" style="padding: 10px 10px 10px 10px; margin: 20px 20px 20px 20px;">
                <md-card-header>
                    <div class="md-title">注册</div>
                    <div class="md-subhead">在课堂创建一个账号</div>
                </md-card-header>

                <md-card-content>
                    <md-input-container :class="{ 'md-input-invalid' : !this.emailFieldValid}">
                        <label>电子邮箱(Email)</label>
                        <md-input v-model="email" maxlength="128" required></md-input>
                        <span class="md-error">请输入正确的电子邮箱</span>
                    </md-input-container>
                    <md-input-container>
                        <label>全名</label>
                        <md-input v-model="fullName" maxlength="20" required></md-input>
                        <span class="md-error">请输入您的姓名以便我们确认身份</span>
                    </md-input-container>
                    <md-input-container md-has-password :class="{ 'md-input-invalid' : !this.passwordFieldValid}">
                        <label>密码</label>
                        <md-input v-model="password" type="password" required></md-input>
                        <span class="md-error">请设置一个密码，至少8位</span>
                    </md-input-container>
                    <md-input-container  md-has-password :class="{ 'md-input-invalid' : !this.repeatPasswordValid}">
                        <label>重复密码</label>
                        <md-input v-model="passwordRepeat" type="password" required></md-input>
                        <span class="md-error">请重复您设置的的密码</span>
                    </md-input-container>
                </md-card-content>

                <md-card-actions>
                    <router-link style="text-decoration: none" :to="{name: 'sign-in'}">已有账号？ 立即登录</router-link>
                    <div style="flex: 1;"></div>
                    <md-button class="md-raised md-primary" :disabled="!isFormValid" @click="submitForm()">立即注册</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>

</template>

<script>
    import api from 'api/classroomAPI'
    export default {
        name: 'Register',
        data () {
            return {
                email: '',
                fullName: '',
                password: '',
                passwordRepeat: ''
            }
        },
        computed: {
            emailFieldValid () {
                return this.email === '' || this.isEmailAddressValid(this.email)
            },
            passwordFieldValid () {
                return this.password === '' || this.password.length >= 8
            },
            repeatPasswordValid () {
                return this.password === '' || this.password === this.passwordRepeat
            },
            isFormValid () {
                return true || (this.email !== '') && (this.fullName !== '') && this.emailFieldValid && this.passwordFieldValid && (this.password !== '') && this.repeatPasswordValid
            }
        },
        methods: {
            isEmailAddressValid (email) {
                const re = /\S+@\S+\.\S+/
                return re.test(email)
            },
            submitForm () {
                if (this.isFormValid) {
                    console.log(api)
                    api.auth.register(this.email, this.fullName, this.password).then((resolve) => {
                        if (resolve.registerSuccess) {
                            this.$router.push({name: 'sign-in'})
                        } else {
                            alert('注册失败 - 邮箱被占用')
                        }
                    }, () => {
                        alert('注册失败 - 系统错误')
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .float-left {
        text-align: left !important;
    }
</style>
