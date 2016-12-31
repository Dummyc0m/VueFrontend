<template>
    <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33"
               md-flex-xlarge="33">
        <md-card class="md-whiteframe-7dp uccard">
            <md-card-media class="uccard-header">
                <i class="uccard-header-icon fa fa-lock fa-5x"></i>
            </md-card-media>

            <md-card-header>
                <div class="md-title">安全</div>
                <div class="md-subhead">账户安全</div>
            </md-card-header>

            <md-card-content class="uccard-content">
                <md-table>
                    <md-table-body>
                        <md-table-row>
                            <md-table-cell>最后登录时间</md-table-cell>
                            <md-table-cell md-numeric>{{lastLoginDate}}</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell>最后登录IP</md-table-cell>
                            <md-table-cell md-numeric>{{lastLoginIP}}</md-table-cell>
                        </md-table-row>
                        <!--<md-table-row>-->
                            <!--<md-table-cell>最后登录地点</md-table-cell>-->
                            <!--<md-table-cell md-numeric>{{lastLoginLocation}}</md-table-cell>-->
                        <!--</md-table-row>-->
                    </md-table-body>
                </md-table>
            </md-card-content>

            <md-card-actions>
                <md-button v-if="(mfaEnabled !== null) && (!mfaEnabled)" @click="setupMFA()">设置两步验证</md-button>
                <md-button v-if="(mfaEnabled !== null) && (mfaEnabled)" @click="disableMFA()">禁用</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    import Moment from 'moment'
    export default {
        name: 'SecurityCard',
        props: {
            loginHistory: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                lastLoginLocation: 'Loading...',
                mfaEnabled: null
            }
        },
        methods: {
            setupMFA () {

            },
            disableMFA () {

            }
        },
        computed: {
            lastLoginIP () {
                return (this.loginHistory !== null && this.loginHistory.length > 0) ? this.loginHistory[0].ip : '载入中...'
            },
            lastLoginDate () {
                return (this.loginHistory !== null && this.loginHistory.length > 0) ? new Moment(this.loginHistory[0].time * 1000).calendar() : '载入中...'
            }
        },
        mounted () {
            this.$store.dispatch('updateLoginHistory')
            Moment.locale('zh-cn')
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
</style>