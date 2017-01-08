<template>
    <md-layout md-gutter>
        <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="50"
                   md-flex-xlarge="50">
            <md-card class="sect md-whiteframe-7dp dataBlock">
                <md-card-header>
                    <div class="md-title">统计数据</div>
                </md-card-header>
                <md-card-content>
                    <md-tabs class="md-transparent" @change="changeDataTab" md-fixed>
                        <md-tab md-label="日"></md-tab>
                        <md-tab md-label="周"></md-tab>
                        <md-tab md-label="月"></md-tab>
                        <md-tab md-label="年"></md-tab>
                    </md-tabs>

                    <lazy-render>
                    <md-table>
                        <md-table-body>
                            <md-table-row>
                                <md-table-cell>播放次数</md-table-cell>
                                <md-table-cell md-numeric>{{data[dataTab].view}}</md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>不知道什么玩意</md-table-cell>
                                <md-table-cell md-numeric>{{data[dataTab].revenue}}</md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                    </lazy-render>
                </md-card-content>
            </md-card>
        </md-layout>
        <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="50"
                   md-flex-xlarge="50">
            <md-card class="sect md-whiteframe-7dp feedbackBlock">
                <md-card-header>
                    <div class="md-title">课堂反馈</div>
                </md-card-header>
                <md-card-content>
                    <md-tabs class="md-transparent" md-fixed>
                        <md-tab md-label="问题">
                            <md-list class="md-double-line">
                                <md-list-item v-for="q in questions" @click="routerPush(q.url)">
                                    <div class="md-list-text-container">
                                        <span>{{q.body}}</span>
                                        <span>来自 {{q.from}}</span>
                                    </div>
                                </md-list-item>
                                <md-list-item @click="routerPush()">
                                    <div class="md-list-text-container">
                                        <span>显示已阅读问题</span>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </md-tab>
                        <md-tab md-label="评论">
                            <md-list class="md-double-line">
                                <md-list-item v-for="c in comments" @click="routerPush(c.url)">
                                    <div class="md-list-text-container">
                                        <span>{{c.body}}</span>
                                        <span>来自 {{c.from}}</span>
                                    </div>
                                </md-list-item>
                                <md-list-item @click="routerPush()">
                                    <div class="md-list-text-container">
                                        <span>显示已阅读评论</span>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </md-tab>
                    </md-tabs>
                </md-card-content>
            </md-card>
        </md-layout>
    </md-layout>
</template>

<script>
    export default {
        name: 'DataCenter',
        data () {
            return {
                dataTab: 0,
                data: [
                    {view: 1, revenue: 1},
                    {view: 10, revenue: 2},
                    {view: 100, revenue: 3},
                    {view: 1000, revenue: 4}
                ],
                questions: [
                    {body: 'x^2怎么积分啊？', from: 'Creative Calculus', url: ''},
                    {body: '如何保证配偶是随机的？', from: 'Random Reproduction', url: ''}
                ],
                comments: [
                    {body: '这课竟然没有实名审核233', from: 'Nekopara in practice', url: ''}
                ]
            }
        },
        methods: {
            changeDataTab (tabNum) {
                this.dataTab = tabNum
            },
            routerPush (url) {

            }
        }
    }
</script>

<style>
    .sect {
        flex: 1;
    }
    .dataBlock {
        max-height: 300px;
        margin-bottom: 24px;
    }
    .feedbackBlock {
        max-height: 480px;
    }
</style>
