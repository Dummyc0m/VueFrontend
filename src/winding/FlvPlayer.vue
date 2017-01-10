/**
* Created by dummy on 1/7/17.
*/
<style scoped>

</style>

<template>
    <video :ref="videoElement"></video>
</template>

<script>
    import flvjs from 'flv.js'

    export default {
        props: {
            url: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                playerInstance: flvjs.createPlayer({
                    type: 'flv',
                    cors: true,
                    url: this.url
                })
            }
        },
        methods: {
            play () {
                this.playerInstance.play()
            },
            pause () {
                this.playerInstance.pause()
            }
        },
        created () {
            if (flvjs.isSupported()) {
                let videoElement = this.$refs.videoElement
                this.playerInstance.attachMediaElement(videoElement)
                this.playerInstance.load()
            } else {

            }
        }
    }
</script>

