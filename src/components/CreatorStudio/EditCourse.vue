<template>
    <md-layout md-gutter>

    </md-layout>
</template>

<script>
    import CourseSection from '../Course/Section/CourseSection'
    export default {
        name: 'EditCourse',
        data () {
            return {
                id: ''
            }
        },
        methods: {

        },
        components: {
            CourseSection
        },
        created () {
            this.id = this.$route.params.id
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
