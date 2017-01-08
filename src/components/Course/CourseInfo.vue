<template>
    <md-whiteframe md-elevation="2" class="root-card">
        <h1>{{courseTitle}}</h1>
        <div>
            <img :src="instructorAvatar" class="avatar">
            <div class="inline name-box">
                <h1>{{instructor}}</h1>
            </div>
        </div>
        <div>
            <p>{{description}}</p>
        </div>
    </md-whiteframe>
</template>

<script>
    export default {
        name: 'CourseInfo',
        props: {
            courseTitle: {
                type: String,
                required: true
            },
            instructor: {
                type: String,
                required: true
            },
            instructorAvatar: {
                type: String,
                default: 'http://placehold.it/100x100'
            },
            description: {
                type: String,
                default: 'Creative Calculus is a great course for you creativity'
            }
        }
    }
</script>

<style scoped>
    .root-card {
        padding: 1em;
        margin: 1em 0;
    }

    .avatar {
        border-radius: 50%;
        height: 100px;
    }

    .inline {
        display: inline-block;
    }

    .name-box {
        margin-left: 2em;
    }
</style>
