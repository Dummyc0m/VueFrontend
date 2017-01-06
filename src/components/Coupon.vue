<template>
    <form class="couponWindow" :class="{'marginTop':topSpace}">
        <md-input-container>
            <label>兑换码</label>
            <md-input></md-input>
            <span class="md-error">兑换码输入有误</span>
        </md-input-container>
        <md-button v-if="showButton" class="align-right">
            提交
        </md-button>
    </form>
</template>

<script>
    export default{
        props: {
            showButton: {
                type: Boolean,
                default: true
            },
            topSpace: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .couponWindow {
        margin: 0 auto auto auto;
        max-width: 240px;
    }
    .marginTop {
        margin: 7% auto auto auto !important;
    }
    .align-right {
        float: right;
    }
</style>
