<template>
    <div class="container">
        <!--<md-tabs class="md-transparent">-->
            <!--<md-tab v-for="(subject, index) in subjects" @click="filterIndex = index" :md-label="subject">-->
            <!--</md-tab>-->
        <!--</md-tabs>-->
        <md-toolbar class="md-transparent">
            <md-button v-for="(subject, index) in subjects" @click="filterIndex = index">
                {{subject}}
            </md-button>
        </md-toolbar>
        <md-list>
            <md-list-item v-for="clazz in filteredClasses">
                {{clazz.name}}
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
    export default{
        name: 'UserClassList',
        data: function () {
            return {
                classes: [
                    {name: 'one', subject: 'math'},
                    {name: 'two', subject: 'math'},
                    {name: 'three', subject: 'genomics'}
                ],
                subjects: ['所有'],
                filterIndex: 0
            }
        },
        created: function () {
            this.classes.forEach((clazz) => {
                if (this.subjects.indexOf(clazz.subject) === -1) {
                    this.subjects.push(clazz.subject)
                }
            })
        },
        computed: {
            filteredClasses () {
                if (this.filterIndex) {
                    return this.classes.filter((clazz) => {
                        return clazz.subject === this.subjects[this.filterIndex]
                    })
                } else {
                    return this.classes
                }
            }
        },
        components: {}
    }
</script>

<style>
    .subTab {
        margin: auto;
    }
</style>
