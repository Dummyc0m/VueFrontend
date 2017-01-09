<template>
    <div class="container">
        <CourseCard id="-1"></CourseCard>
        <TreeMenu></TreeMenu>
        <CourseSection :edit="true"></CourseSection>
        <vue-html5-editor v-model="cont"></vue-html5-editor>
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
                cont: '大雾霾'
            }
        },
        components: {
            CourseCard,
            TreeMenu,
            CourseSection
        },
        methods: {

        }
    }
</script>

