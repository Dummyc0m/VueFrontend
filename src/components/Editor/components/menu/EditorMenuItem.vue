<template>
    <div class="menu-item clearfix">
        <a @click="click()" @mouseenter="hover = true" @mouseleave="hover = false" tabindex="-1">
            <i class="fa fa-2x" :class="icon"></i>
        </a>
        <div v-if="hover" class="menu-tip" style="width: 33px; margin-left: -16.5px;">{{tip}}</div>
    </div>
</template>

<script>
    export default {
        name: 'EditorMenuItem',
        props: {
            name: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
            tip: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                hover: false
            }
        },
        methods: {
            click () {
                this.$emit('click', this.name)
            }
        }
    }
</script>

<style scoped>
    .menu-item {
        float: left;
        position: relative;
        text-align: center;
        height: 31px;
        width: 35px;
        line-height: 100%;
    }
    .menu-tip {
        position: absolute;
        z-index: 20;
        width: 60px;
        text-align: center;
        background-color: #666;
        color: #fff;
        padding: 7px 0;
        font-size: 12px;
        top: 100%;
        left: 50%;
        margin-left: -30px;
        border-radius: 2px;
        box-shadow: 1px 1px 5px #999;
    }
</style>
