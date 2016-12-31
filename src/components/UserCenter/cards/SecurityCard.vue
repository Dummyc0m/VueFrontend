<template>
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="33"
               md-flex-xlarge="33">
        <md-card class="md-whiteframe-7dp uccard">
            <md-card-media class="uccard-header">
                <i class="uccard-header-icon fa fa-lock fa-5x"></i>
            </md-card-media>

            <md-card-header>
                <div class="md-title">安全</div>
                <div class="md-subhead">账户安全</div>
            </md-card-header>

            <md-card-content class="uccard-content" style="transition: all 0.4s ease;">
                <transition name="fade" mode="out-in">
                    <md-table v-if="currentPage === 0">
                        <md-table-body>
                            <md-table-row>
                                <md-table-cell>最后登录时间</md-table-cell>
                                <md-table-cell md-numeric>{{lastLoginDate}}</md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>最后登录IP</md-table-cell>
                                <md-table-cell md-numeric>{{lastLoginIP}}</md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>最后登录地点</md-table-cell>
                                <md-table-cell md-numeric>{{lastLoginLocation}}</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                    <div v-if="currentPage === 1">
                        <h4>请在Google Authenticator APP上扫描二维码</h4>
                        <QRCode :val="mfaURL" size="200"></QRCode>
                    </div>
                </transition>
            </md-card-content>

            <md-card-actions>
                <md-button v-if="currentPage === 0 && (mfaEnabled !== null) && (!mfaEnabled)" @click="setupMFA()">
                    设置两步验证
                </md-button>
                <md-button v-if="currentPage === 0 && (mfaEnabled !== null) && (mfaEnabled)" @click="disableMFA()">禁用
                </md-button>
                <md-button v-if="currentPage === 1" @click="currentPage = 0">返回</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    import Moment from 'moment'
    import api from 'api/classroomAPI'
    import QRCode from 'components/QRCode'
    export default {
        name: 'SecurityCard',
        props: {
            loginHistory: {
                type: Array,
                required: true,
                mfaURL: ''
            }
        },
        data () {
            return {
                lastLoginLocation: 'Loading...',
                currentPage: 1
            }
        },
        methods: {
            setupMFA () {

            },
            disableMFA () {

            }
        },
        computed: {
            mfaEnabled () {
                return this.$store.state.userinfo.mfaEnabled
            },
            lastLoginIP () {
                if (this.loginHistory !== null && this.loginHistory.length > 0) {
                    api.userinfo.fetchLocation(this.loginHistory[0].ip).then((resolve) => {
                        console.log(resolve)
                        this.lastLoginLocation = resolve.location
                    })
                    return this.loginHistory[0].ip
                }
                return '载入中...'
            },
            lastLoginDate () {
                return (this.loginHistory !== null && this.loginHistory.length > 0) ? new Moment(this.loginHistory[0].time * 1000).calendar() : '载入中...'
            },
            mfaURL () {
                return 'otpauth://totp/' + this.$store.state.userinfo.email + '?secret=H2KLW7NMA3GUGLIE&issuer=Classroom'
            }
        },
        mounted () {
            Moment.locale('zh-cn')
            this.$store.dispatch('updateLoginHistory')
        },
        components: {
            QRCode
        }
    }
</script>

<style scoped>
    .uccard-header {
        position: relative;
        height: 140px;
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
</style>
