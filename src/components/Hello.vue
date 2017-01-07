<template>
    <div class="container">
        <p>{{$t('message.hello')}}</p>
        <CourseCard></CourseCard>
    </div>
</template>

<script>
    import CourseCard from 'components/Course/CourseCard'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            CourseCard
        }
    }
</script>

