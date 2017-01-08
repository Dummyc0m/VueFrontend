<template>
    <div class="container">
        <CourseInfo course-title="Creative Calculus" instructor="Dummyc0m"></CourseInfo>
        <input v-model="content">
        <QRCode :val="content"></QRCode>
    </div>
</template>

<script>
    import CourseInfo from 'components/Course/CourseInfo'
    import QRCode from 'components/QRCode'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            QRCode, CourseInfo
        }
    }
</script>

