<template>
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="33"
               md-flex-xlarge="25">
        <md-card class="uccard md-whiteframe-7dp">
            <md-card-media md-ratio="16:9" class="uccard-header">
                <i class="uccard-header-icon fa fa-5x" :class="{[pic]:!picIsUrl}" v-if="!picIsUrl"></i>
                <img :src="pic" alt="图片加载失败" v-else>
            </md-card-media>

            <md-card-header>
                <h3 class="md-title" @click="routerPush()">{{title}}</h3>
            </md-card-header>

            <md-card-content class="uccard-content">
                {{description}}
            </md-card-content>

            <md-card-actions>
                <md-button class="md-primary" @click="routerPush()">{{action}}</md-button>
                <md-button class="md-primary" @click="routerPush('edit_course', {id : id})" v-if="showEdit">编辑</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    import isUrl from 'is-url'
    export default{
        name: 'CourseCard',
        data () {
            return {
                picIsUrl: true
            }
        },
        props: {
            id: {
                type: String,
                required: true
            },
            pic: {
                type: String,
                default: 'fa-question'
            },
            title: {
                type: String,
                default: '暂无标题'
            },
            description: {
                type: String,
                default: '暂无简介'
            },
            url: {
                type: String,
                default: ''
            },
            action: {
                type: String,
                default: '进入'
            },
            showEdit: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            routerPush (url, params = {}) {
                this.$router.push({name: url, params: params})
            }
        },
        created () {
            this.picIsUrl = isUrl(this.pic)
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
        height: 383px;
        margin: 20px 10px;
        flex: 1;
    }
</style>
