/**
* Created by dummy on 1/7/17.
*/
<style scoped>

</style>

<template>
    <video-player :options="videoOptions"></video-player>
</template>

<script>
    import { videoPlayer } from 'vue-video-player-classroom'

    export default {
        components: {
            videoPlayer
        },
        data () {
            return {
                videoOptions: {
                    source: {
                        type: 'video/x-flv',
                        src: 'http://static.ios.com.hk/dbs/dl/windows-10.flv',
                        // if you need custom player state changed event name, you can config it like this
                        customEventName: 'my-player-state-changed-event-custom-name'
                    }
                }
            }
        }
    }
</script>

