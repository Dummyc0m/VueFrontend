<template>
    <div class="container">
        <CourseCard id="-1"></CourseCard>
        <TreeMenu></TreeMenu>
        <CourseSection :edit="true"></CourseSection>
        <vue-html5-editor contents="" @saved="save"></vue-html5-editor>
    </div>
</template>

<script>
    import CourseCard from 'components/Course/CourseCard'
    import TreeMenu from 'components/TreeMenu/TreeMenu'
    import CourseSection from 'components/Course/Section/CourseSection'
    export default {
        name: 'TestPage',
        data () {
            return {

            }
        },
        components: {
            CourseCard,
            TreeMenu,
            CourseSection
        },
        methods: {
            save (content) {
                console.log(content)
            }
        }
    }
</script>

