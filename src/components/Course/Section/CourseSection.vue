<template>
    <md-whiteframe md-elevation="2" class="section-card">
        <div class="section-title">
            <h1>{{sectionContent.sectionName}}</h1>
        </div>
        <div class="section-description">
            <p class="text">{{sectionContent.sectionDescription}}</p>
        </div>
        <md-list>
            <CourseSectionListItem v-for="item in sectionContent.sectionContent" :title="item.contentName"
                                   :active="item.active"></CourseSectionListItem>
        </md-list>
    </md-whiteframe>
</template>

<script>
    import CourseSectionListItem from './CourseSectionListItem.vue'
    export default {
        props: {
            'md-elevation': {
                type: Number,
                default: 2
            },
            'sectionContent': {
                type: Object,
                default () {
                    return {
                        course: 1,
                        sectionId: 1,
                        sectionName: 'SECTION Name',
                        sectionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi, gravida dapibus leo. Proin semper ultrices cursus. Cras pellentesque urna nulla, vel ultricies elit volutpat in. Aenean quam velit, faucibus a risus quis, accumsan bibendum enim. Donec ornare dignissim felis sed sollicitudin. Sed mollis gravida nibh molestie posuere. Pellentesque nec justo placerat, finibus diam a, ultrices nunc. Sed sollicitudin cursus ex a consectetur. Fusce maximus, erat vel posuere elementum, metus felis aliquet magna, ac mattis diam velit sed felis. Vestibulum tempus neque ipsum. Pellentesque fermentum magna ultricies, dapibus tortor elementum, cursus purus. Proin eget libero sed erat maximus consectetur.',
                        sectionImage: '',
                        sectionContent: [
                            {
                                contentId: 1,
                                contentName: 'TestContent1',
                                active: true
                            },
                            {
                                contentId: 12,
                                contentName: 'TestContent2',
                                active: false
                            }
                        ]
                    }
                }
            }
        },
        components: {
            CourseSectionListItem
        }
    }
</script>

<style scoped>
    .section-card {
        margin: 0 50px;
        padding: 10px 20px;
    }

    .section-title {
        padding: 0 20px;
        font-weight: bolder;
    }

    .section-description {
        padding: 0 20px;
    }

    .section-description.text {
        font-weight: normal;
    }
</style>
