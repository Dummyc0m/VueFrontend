<template>
    <md-whiteframe md-elevation="2" class="question-card">
        <div>
            <h2 class="question-id question-section">2</h2>
            <h2 class="question-id">.</h2>
            <h2 class="question-id question-number">1</h2>
        </div>
        <div class="question-content">
            <div v-html="q"></div>
        </div>
    </md-whiteframe>
</template>

<script>
    import LaTex from 'components/LaTex'
    export default {
        name: 'QuestionCard',
        data () {
            return {
                q: '二三十年<LaTex>\\fraction{1}{2}</LaTex>'
            }
        },
        components: {
            LaTex
        }
    }
</script>

<style scoped>
    .question-card {
        margin: 1em;
        padding: 1em 2em;
        font-family: "Microsoft YaHei", "Helvetica Neue", serif;
    }
    .question-id {
        display: inline;
        font-size: 25px;
    }
    .question-section {
        font-weight: bolder;
    }
    .question-number {
        font-weight: normal;
    }
    .question-content {
        color: #505050;
        margin: 1em 0;
        /*padding: 1em 0;*/
    }
</style>
