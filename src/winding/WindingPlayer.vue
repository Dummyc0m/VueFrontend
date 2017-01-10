/**
* Created by dummy on 1/7/17.
*/
<style scoped>
    .control-group {

    }
</style>

<template>
    <div>
        <flv-player ref="flvPlayer"></flv-player>

        <div class="control-group">
            <winding-slider :vidoeValue="" :disabled="loaded" min="0" max="100" step="0.25" @changing="sliding" @change="sliderChange"></winding-slider>
            {{ timeElapsed }}/{{ timeTotal }}
            <md-button class="md-icon-button md-primary" @click="togglePlay()">
                <md-icon :class="{ 'fa-play': !playing, 'fa-pause': playing }"></md-icon>
            </md-button>
        </div>
    </div>
</template>

<script>
    import FlvPlayer from 'FlvPlayer'
    import WindingSlider from 'WindingSlider'
    import moment from 'moment'

    export default {
        components: {
            WindingSlider,
            FlvPlayer
        },
        data () {
            return {
                secondElapsed: 0,
                secondTotal: 0,
                playing: false
            }
        },
        methods: {
            togglePlay () {
                if (this.playing) {
                    this.$refs.flvPlayer.pause()
                } else {
                    this.$refs.flvPlayer.play()
                }
                this.playing = !this.playing
            }
        },
        computed: {
            timeElapsed () {
                return moment.duration()
            },
            timeTotal () {

            }
        }
    }
</script>

