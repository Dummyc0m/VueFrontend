<template>
    <div class="container">
        <QuestionCard :section="section" :number="number" content="二三十年<latex>\int \left(x^2+ax-3\right)^2dx</latex>">
            <multiple-choice-content v-model="selected" :choices="choices"></multiple-choice-content>
        </QuestionCard>
        {{selected}}
        <QuestionCard :section="section" :number="number" content="1234年<latex>\int \left(x^2+ax-3\right)^2dx</latex>">
            <multiple-selection-content v-model="selections" :choices="choices"></multiple-selection-content>
        </QuestionCard>
        {{selections}}
        <QuestionCard :section="section" :number="number" content="1234年<latex>\int \left(x^2+ax-3\right)^2dx</latex>">
            <text-content v-model="textContent"></text-content>
        </QuestionCard>
        {{textContent}}
        <!--<CourseCard :id="-1"></CourseCard>-->
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
    import MultipleChoiceContent from 'components/Quiz/QuestionCardContent/MultipleChoiceContent'
    import MultipleSelectionContent from 'components/Quiz/QuestionCardContent/MultipleSelectionContent'
    import TextContent from 'components/Quiz/QuestionCardContent/TextContent'

    export default {
        name: 'TestPage',
        data () {
            return {
                section: 2,
                number: 1,
                content: 'Test',
                selected: null,
                choices: [{
                    value: 'asdf'
                }, {
                    value: '1234'
                }, {
                    value: 'qwer'
                }, {
                    value: 'zxcv'
                }, {
                    value: 'This is so gay'
                }, {
                    value: ', I ejaculated'
                }],
                selections: [],
                textContent: ''
            }
        },
        components: {
            CourseCard,
            TreeMenu,
            CourseSection,
            QuestionCard,
            MultipleChoiceContent,
            MultipleSelectionContent,
            TextContent
        }
    }
</script>

