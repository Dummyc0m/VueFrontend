<template>
    <div class="container">
        <h1 class="md-display-2">我的课程</h1>

        <md-layout md-gutter>
            <CourseCard v-for="course in courses" :title="course.name" :description="course.subject" :pic="course.pic"></CourseCard>
        </md-layout>

        <md-button class="md-fab md-fab-bottom-right">
            <md-icon><i class="fa fa-plus"></i></md-icon>
        </md-button>
    </div>
</template>

<script>
    import CourseCard from '../../components/Course/CourseCard.vue'
    export default{
        name: 'UserCourses',
        data: function () {
            return {
                courses: [
                    {name: 'Nekopara in practice', subject: 'Applied Biology', pic: 'https://static.mengniang.org/common/9/98/NEKOPALIVE.png'},
                    {name: 'Creative Calculus', subject: 'Creative Math', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear_regression.svg/438px-Linear_regression.svg.png'},
                    {name: 'Random Reproduction', subject: 'Genomics', pic: 'http://images.wisegeek.com/a-gene-strand.jpg'}
                ],
                subjects: ['所有'],
                filterIndex: 0
            }
        },
        created: function () {
            this.courses.forEach((course) => {
                if (this.subjects.indexOf(course.subject) === -1) {
                    this.subjects.push(course.subject)
                }
            })
        },
        computed: {
            filteredClasses () {
                if (this.filterIndex) {
                    return this.courses.filter((course) => {
                        return course.subject === this.subjects[this.filterIndex]
                    })
                } else {
                    return this.courses
                }
            }
        },
        components: {
            CourseCard
        }
    }
</script>

<style>
    .align-right {
        float: right;
    }

    .md-fab-bottom-right {
        margin-bottom: 2%;
        margin-right: 2%;
    }
</style>
