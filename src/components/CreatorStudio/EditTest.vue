<template>
    <md-layout md-gutter>
        <TestSectionCard></TestSectionCard>
    </md-layout>
</template>

<script>
    import TestSectionCard from './cards/TestSectionCard'
    export default {
        name: 'EditTest',
        data () {
            return {
                id: ''
            }
        },
        methods: {

        },
        components: {
            TestSectionCard
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
