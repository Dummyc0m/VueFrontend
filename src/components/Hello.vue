<template>
    <md-layout style="max-width: 1024px; margin: auto;">
        <GradeDetail :grades="magicTestData.grades" :course="magicTestData.course"></GradeDetail>
    </md-layout>
</template>

<script>
    import GradeDetail from './GradeBook/GradeDetail'
    export default {
        name: 'TestPage',
        data () {
            return {
                magicTestData: {
                    course: {
                        name: 'Test Course',
                        instructor: 'Bob'
                    },
                    grades: [
                        {
                            name: 'TestItem1',
                            points: 10,
                            total: 27,
                            date: '2016-12-25'
                        },
                        {
                            name: 'TestItem2',
                            points: 50,
                            total: 57,
                            date: '2016-12-26'
                        }
                    ]
                }
            }
        },
        components: {
            GradeDetail
        }
    }
</script>

