<template>
    <div class="container">
        <QuestionCard></QuestionCard>
        <CourseCard :id="-1"></CourseCard>
        <TreeMenu></TreeMenu>
        <CourseSection :edit="true"></CourseSection>
    </div>
</template>

<script>
    import QuestionCard from 'components/Quiz/QuestionCard'
    import CourseCard from 'components/Course/CourseCard'
    import TreeMenu from 'components/TreeMenu/TreeMenu'
    import CourseSection from 'components/Course/Section/CourseSection'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            CourseCard,
            TreeMenu,
            CourseSection,
            QuestionCard
        }
    }
</script>

