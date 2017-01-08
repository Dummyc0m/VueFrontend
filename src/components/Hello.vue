<template>
    <div class="container">
        <QuestionCard section="2" number="1" content="二三十年<latex>\int \left(x^2+ax-3\right)^2dx</latex>">

        </QuestionCard>
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
//    import MultipleSelectionQuestionCard from 'components/Questions/MultipleSelectionQuestionCard'

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

