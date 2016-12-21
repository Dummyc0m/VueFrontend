<template>
    <md-card style="width: 100%">
        <md-card-header>
            <div class="md-title">{{course.name}}</div>
            <div class="md-subhead">{{course.instructor}}</div>
        </md-card-header>

        <md-card-content>
            <h1>Assignments</h1>
            <md-table md-table-card>
                <md-table-header>
                    <md-table-row>
                        <md-table-head>日期</md-table-head>
                        <md-table-head>项目</md-table-head>
                        <md-table-head>得分</md-table-head>
                        <md-table-head md-numeric>成绩</md-table-head>
                    </md-table-row>
                </md-table-header>
                <md-table-body>
                    <GradebookItem v-for="grade in grades" :date="grade.date" :point="grade.points" :possiblePoint="grade.total" :name="grade.name"></GradebookItem>
                </md-table-body>
            </md-table>
        </md-card-content>
    </md-card>
</template>
<script>
    import GradebookItem from './GradebookItem'
    export default {
        name: 'GradeDetail',
        components: {
            GradebookItem
        },
        props: ['course', 'grades']
    }
</script>
