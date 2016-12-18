<template>
    <md-table-row>
        <md-table-cell>{{displayDate}}</md-table-cell>
        <md-table-cell>{{name}}</md-table-cell>
        <md-table-cell>{{point}} / {{possiblePoint}}</md-table-cell>
        <md-table-cell md-numeric>{{grade}}%</md-table-cell>
    </md-table-row>
</template>
<script>
    import moment from 'moment'
    export default {
        name: 'GradebookItem',
        props: ['date', 'name', 'point', 'possiblePoint'],
        computed: {
            displayDate () {
                return moment(this.date).format('MM / DD')
            },
            grade () {
                return ((this.point / this.possiblePoint) * 100).toFixed(2)
            }
        }
    }
</script>
