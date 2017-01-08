<template>
    <md-layout md-gutter>
        <CourseCard v-for="course in courses"
                    :id="course.id"
                    :title="course.name"
                    :description="course.subject"
                    :pic="course.pic"
                    :showEdit="true"></CourseCard>
    </md-layout>
</template>

<script>
    import CourseCard from '../Course/CourseCard'
    export default {
        name: 'MyCourse',
        data () {
            return {
                courses: [
                    {id: '1', name: 'Nekopara in practice', subject: 'Applied Biology', pic: 'https://static.mengniang.org/common/9/98/NEKOPALIVE.png'},
                    {id: '2', name: 'Creative Calculus', subject: 'Creative Math', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear_regression.svg/438px-Linear_regression.svg.png'},
                    {id: '3', name: 'Random Reproduction', subject: 'Genomics', pic: 'http://images.wisegeek.com/a-gene-strand.jpg'}
                ]
            }
        },
        methods: {

        },
        components: {
            CourseCard
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
