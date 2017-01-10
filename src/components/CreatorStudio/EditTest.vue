<template>
    <md-layout>
        <TestSectionCard v-for="sec in sections" :value="sec" @input="l" style="margin-bottom: 32px"></TestSectionCard>
    </md-layout>
</template>

<script>
    import TestSectionCard from './cards/TestSectionCard'
    export default {
        name: 'EditTest',
        data () {
            return {
                id: '',
                sections: [{
                    sectionName: '一单元',
                    questions: [
                        {type: 'MC', title: '1+1', body: ['1', '2', '3', '10'], answer: 3, point: 2},
                        {type: 'Text', title: '苟', body: '大雾', answer: '苟富贵无相忘', point: 1}
                    ]
                },
                {
                    sectionName: '二单元',
                    questions: [
                        {
                            type: 'MC',
                            title: '垂死病中惊坐起',
                            body: ['暗风吹雨入寒窗', '谈笑风生又一年', '日破云涛万里红'],
                            answer: 1,
                            point: 1
                        },
                        {type: 'Text', title: '什么是生殖隔离', body: '什么是染色体', answer: '自己体会', point: 666}
                    ]
                }]
            }
        },
        methods: {
            l (evt) {
                console.log('receive: ' + evt)
            }
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
