<template>
    <div class="container" style="margin: 100px auto 100px auto;">
        <md-card class="md-whiteframe-5dp">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Smartisan M1 宣传视频</div>
                    <div class="md-subhead">白色·镜面不锈钢版</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-media>
                <video-player :options="videoOptions" @player-state-changed="playerStateChanged"></video-player>
            </md-card-media>

            <md-card-content>
                <md-table v-once>
                    <md-table-body>
                        <md-table-row>
                            <md-table-cell>观看次数</md-table-cell>
                            <md-table-cell md-numeric>1,000,000</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell>上传时间</md-table-cell>
                            <md-table-cell md-numeric>2016-12-22 14:00:00</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell>上传者</md-table-cell>
                            <md-table-cell md-numeric>Smartisan</md-table-cell>
                        </md-table-row>
                    </md-table-body>
                </md-table>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                videoOptions: {
                    source: [{
                        type: 'video/mp4',
                        src: 'https://static.ios.com.hk/dbs/dl/smartisan-m1.mp4',
                        label: '超清',
                        res: 3
                    }, {
                        type: 'video/mp4',
                        src: 'https://static.ios.com.hk/dbs/dl/smartisan-m1.mp4',
                        label: '高清',
                        res: 2
                    }, {
                        type: 'video/mp4',
                        src: 'https://static.ios.com.hk/dbs/dl/windows-10.flv',
                        label: '标清',
                        res: 1
                    }],
                    language: 'zh-CN',
                    playbackRates: [0.25, 0.5, 1, 1.5, 2],
                    poster: 'http://static.smartisanos.cn/pr/img/video/m1-white_124761aa27.jpg',
                    defaultSrcReId: 2,
                    height: 480,
                    autoplay: false
                }
            }
        }
    }
</script>
