<template>
    <div class="container">
    </div>
</template>

<script>
    import VideoPlayer from 'components/VideoPlayer/VideoPlayer'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            VideoPlayer
        }
    }
</script>

