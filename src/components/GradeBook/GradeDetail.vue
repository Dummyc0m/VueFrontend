<template>
    <md-card style="width: 100%">
        <md-card-header>
            <div class="md-title">Course Name</div>
            <div class="md-subhead">Instructor Name</div>
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
                    <GradebookItem date="2016-12-11" point="2" possiblePoint="3" name="Test"></GradebookItem>
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
        }
    }
</script>
