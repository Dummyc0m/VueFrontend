<template>
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="33"
               md-flex-xlarge="25">
        <md-card class="uccard md-whiteframe-7dp">
            <md-card-media md-ratio="16:9" class="uccard-header">
                <i class="uccard-header-icon fa fa-5x fa-plus"></i>
            </md-card-media>

            <md-card-header>
                <h3 class="md-title">添加课程</h3>
            </md-card-header>

            <md-card-content class="uccard-content">
                <form class="couponWindow">
                    <md-input-container>
                        <label>兑换码</label>
                        <md-input v-model="code"></md-input>
                        <span class="md-error">兑换码输入有误</span>
                    </md-input-container>
                </form>
            </md-card-content>

            <md-card-actions>
                <md-button class="md-primary" @click="useCoupon()">添加课程</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    export default{
        name: 'AddCard',
        data () {
            return {
                code: ''
            }
        },
        methods: {
            useCoupon () {
                this.$store.dispatch('useCoupon', this.code)
            }
        }
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
        margin-top: -46%;
        display: block;
    }

    .uccard {
        margin: 20px 10px;
        flex: 1;
    }

    .couponWindow {
        margin: 7% auto auto auto;
        width: 240px;
    }
</style>
