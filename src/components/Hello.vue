<template>
    <div class="phone-viewport">
        <md-list>
            <SectionListItem title="测试Test0"></SectionListItem>
            <SectionListItem title="测试Test1" active="true"></SectionListItem>
            <SectionListItem title="测试Test2" icon="fa-stop-circle"></SectionListItem>
            <SectionListItem title="测试Test3" active="true" icon="fa-stop-circle"></SectionListItem>
        </md-list>
    </div>
</template>

<script>
    import SectionListItem from './Course/SectionListItem'
    export default {
        name: 'TestPage',
        data () {
            return {
                magicTestData: {
                    course: {
                        name: 'Test Course',
                        instructor: 'Bob'
                    },
                    grades: [
                        {
                            name: 'TestItem1',
                            points: 10,
                            total: 27,
                            date: '2016-12-25'
                        },
                        {
                            name: 'TestItem2',
                            points: 50,
                            total: 57,
                            date: '2016-12-26'
                        }
                    ]
                }
            }
        },
        components: {
            SectionListItem
        }
    }
</script>

