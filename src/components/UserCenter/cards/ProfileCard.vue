<template>
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="33"
               md-flex-xlarge="33">
        <md-card class="md-whiteframe-7dp uccard" :class="{'shake-animate' : hasError}">
            <md-card-media class="uccard-header">
                <i class="uccard-header-icon fa fa-5x fa-credit-card-alt"></i>
            </md-card-media>

            <md-card-header>
                <div class="md-title">个人信息</div>
                <div class="md-subhead">个人信息管理 — 姓名、电话等</div>
            </md-card-header>

            <md-card-content class="uccard-content" style="transition: all 0.4s ease;">
                <transition name="fade" mode="out-in">
                    <md-table>
                        <md-table-body>
                            <md-table-row>
                                <md-table-cell>姓名</md-table-cell>
                                <md-table-cell md-numeric></md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>邮箱</md-table-cell>
                                <md-table-cell md-numeric>{{userEmail}}</md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>电话</md-table-cell>
                                <md-table-cell md-numeric>+86 171-9765-5556</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </transition>
            </md-card-content>

            <md-card-actions style="margin-bottom: 10px;">
                <md-button v-if="currentPage === 0" @click="editProfile()">编辑</md-button>
                <md-button v-if="currentPage !== 0" @click="currentPage = 0">返回</md-button>
                <md-button v-if="currentPage === 1" @click="">提交</md-button>
                <md-button v-if="currentPage === 2" @click="">提交</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    import Moment from 'moment'
    export default {
        name: 'ProfileCard',
        data () {
            return {
                lastLoginLocation: 'Loading...',
                currentPage: 0,
                userCode: '',
                mfaCode: '',
                hasError: false
            }
        },
        methods: {
            shakeWindow () {
                const self = this
                this.hasError = false
                window.setTimeout(() => {
                    self.hasError = true
                }, 1)
            }
        },
        computed: {
            userEmail () {
                return this.$store.state.userinfo.email
            }
        },
        mounted () {
            Moment.locale('zh-cn')
        },
        components: {}
    }
</script>

<style scoped>
    .uccard-header {
        position: relative;
        height: 150px;
        background-color: #5983fd;
        color: #FFF;
        text-align: center !important;

    }

    .uccard-content {
        flex-direction: column;
        flex: 1;
    }

    .uccard-header-icon {
        margin-top: 7%;
        display: block;
    }

    .uccard {
        margin: 20px 10px;
        flex: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .2s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

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
