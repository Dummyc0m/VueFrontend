<template>
    <video ref="video" class="video-player"></video>
</template>

<script>
    import flvjs from 'flv.js'
    let flvPlayer = null
    export default {
        mounted () {
            if (flvjs.isSupported()) {
                let videoElement = this.$refs.video
                flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: 'http://static.ios.com.hk/dbs/dl/windows-10.flv'
                })
                flvPlayer.attachMediaElement(videoElement)
                flvPlayer.load()
            }
        }
    }
</script>

<style scoped>
    .video-player {
        background-color: #000;
    }
</style>
