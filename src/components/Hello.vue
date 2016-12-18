<template>
    <md-layout style="max-width: 1024px; margin: auto;">
        <GradeDetail></GradeDetail>
    </md-layout>
</template>

<script>
    import GradeDetail from './GradeBook/GradeDetail'
    export default {
        name: 'TestPage',
        components: {
            GradeDetail
        }
    }
</script>

