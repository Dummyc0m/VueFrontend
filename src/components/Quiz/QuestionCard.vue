<template>
    <md-whiteframe md-elevation="2" class="question-card">
        <div>
            <h2 class="question-id question-section">{{ section }}</h2>
            <h2 class="question-id">.</h2>
            <h2 class="question-id question-number">{{ number }}</h2>
        </div>
        <div class="question-content">
            <better-latex :html="content"></better-latex>
        </div>
        <slot>
            This question does not have a format
        </slot>
    </md-whiteframe>
</template>

<script>
    import BetterLatex from 'components/BetterLatex'
    export default {
        name: 'QuestionCard',
        components: {
            BetterLatex
        },
        props: {
            section: {
                type: Number,
                required: true
            },
            number: {
                type: Number,
                required: true
            },
            content: {
                type: String,
                required: true
            }
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
