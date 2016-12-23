<template>
    <div class="container">
    <div style="height: 20px;"></div>
    <CourseSection></CourseSection>
    </div>
</template>

<script>
    import CourseSection from './Course/Section/CourseSection'
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
            CourseSection
        }
    }
</script>

