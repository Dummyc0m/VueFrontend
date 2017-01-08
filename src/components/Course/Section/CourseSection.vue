<template>
    <md-whiteframe md-elevation="2" class="section-card">
        <div class="section-title">
            <h1 v-if="!titleEditing" @click="titleEditing = edit">{{sectionContent.sectionName}}</h1>
            <form v-else @submit.prevent="titleEditing = false">
                <md-input-container>
                    <form>
                        <label>编辑标题</label>
                        <md-input v-model="sectionContent.sectionName"></md-input>
                    </form>
                </md-input-container>
                <md-button type="submit">完成</md-button>
            </form>
        </div>
        <div class="section-description">
            <p class="text" v-if="!descriptionEditing" @click="descriptionEditing = edit">{{sectionContent.sectionDescription}}</p>
            <form v-else @submit.prevent="descriptionEditing = false">
                <md-input-container>
                    <form>
                        <label>编辑介绍</label>
                        <md-textarea v-model="sectionContent.sectionDescription"></md-textarea>
                    </form>
                </md-input-container>
                <md-button type="submit">完成</md-button>
            </form>
        </div>
        <md-list>
            <CourseSectionListItem v-for="(item, index) in sectionContent.sectionContent" :title="item.contentName"
                                   :active="item.active" @click.native="editItem(index)" v-if="itemEdit < 0 || !edit"></CourseSectionListItem>
        </md-list>
        <div v-if="itemEdit >= 0">
            <form  @submit.prevent="submitItemEdit">
                <md-input-container>
                    <label>编辑课程标题</label>
                    <md-textarea v-model="sectionContent.sectionContent[itemEdit].contentName"></md-textarea>
                </md-input-container>
                <md-input-container :class="{'md-input-invalid': !posValid}">
                    <label>编辑课程顺序</label>
                    <md-textarea type="number" v-model="itemCurrent"></md-textarea>
                    <span class="md-error">错误的顺序</span>
                </md-input-container>
                <md-button type="submit" :disabled="!posValid">完成</md-button>
            </form>
        </div>
    </md-whiteframe>
</template>

<script>
    import CourseSectionListItem from './CourseSectionListItem.vue'
    export default {
        data () {
            return {
                titleEditing: false,
                descriptionEditing: false,
                itemEdit: -1,
                itemCurrent: 0
            }
        },
        methods: {
            editItem: function (index) {
                if (this.edit) {
                    this.itemEdit = index
                    this.itemCurrent = index + 1
                }
            },
            submitItemEdit: function () {
                let itemReal = this.itemCurrent - 1
                if (itemReal !== this.itemEdit) {
                    let a = this.sectionContent.sectionContent[this.itemEdit]
                    this.sectionContent.sectionContent[this.itemEdit] = this.sectionContent.sectionContent[itemReal]
                    this.sectionContent.sectionContent[itemReal] = a
                }
                this.itemCurrent = 0
                this.itemEdit = -1
            }
        },
        computed: {
            posValid () {
                return this.itemCurrent > 0 && this.itemCurrent <= this.sectionContent.sectionContent.length
            }
        },
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
            },
            edit: {
                type: Boolean,
                default: false
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
