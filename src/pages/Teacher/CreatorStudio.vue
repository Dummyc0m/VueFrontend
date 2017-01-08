<template>
    <div class="container">
        <md-layout md-gutter style="margin-top: 32px">
            <md-layout md-flex-xsmall="50" md-flex-small="50" md-flex-medium="33" md-flex-large="25"
                       md-flex-xlarge="25">
                <md-card class="sect md-whiteframe-7dp" style="min-height: 600px">
                    <md-list>
                        <md-subheader>教师中心</md-subheader>

                        <md-list-item :class="{'active':activeItem === 'dashboard'}" @click="routerPush('dashboard'); activeItem = 'data_center'">
                            <md-icon><i class="fa fa-bar-chart"></i></md-icon>
                            <span>信息中心</span>
                        </md-list-item>
                        <md-list-item :class="{'active':activeItem === 'my_course'}" @click="routerPush('my_course'); activeItem = 'my_course'">
                            <md-icon><i class="fa fa-pencil-square-o"></i></md-icon>
                            <span>我的课程</span>
                        </md-list-item>
                    </md-list>
                </md-card>
            </md-layout>

            <md-layout md-gutter md-flex-xsmall="50" md-flex-small="50" md-flex-medium="66" md-flex-large="75"
                       md-flex-xlarge="75">
                <router-view></router-view>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    import DataCenter from '../../components/CreatorStudio/Dashboard'
    import MyCourse from '../../components/CreatorStudio/MyCourse'
    export default {
        data () {
            return {
                activeItem: undefined
            }
        },
        methods: {
            routerPush (name) {
                this.$router.push({'name': name})
            }
        },
        components: {
            DataCenter,
            MyCourse
        },
        created () {
            let paths = this.$route.path.split('/')
            this.activeItem = paths[paths.length - 1]
        }
    }
</script>

<style>
    .sect {
        flex: 1;
    }
    .active {
        background-color: rgba(153, 153, 153, .2);
        text-decoration: none;
    }
</style>
