<template>
    <md-layout md-flex="100">

        <md-dialog ref="editDialog">
            <md-dialog-title style="min-width: 640px">编辑题目</md-dialog-title>

            <md-dialog-content v-if="editId > -1">
                <md-input-container>
                    <label>类型</label>
                    <md-select v-model="tempQuest.type">
                        <md-option value="MC" @click.native="changeType('MC')">单选题</md-option>
                        <md-option value="Text" @click.native="changeType('Text')">解答题</md-option>
                    </md-select>
                </md-input-container>
                <md-input-container>
                    <label>问题</label>
                    <md-input v-model="tempQuest.title"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>答案</label>
                    <md-input v-model="tempQuest.answer"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>分数</label>
                    <md-input v-model="tempQuest.point"></md-input>
                </md-input-container>
                <div v-if="tempQuest.type === 'MC'">
                    <label>选项</label>
                    <md-table>
                        <md-table-body>
                            <md-table-row v-for="(opt,index) in tempQuest.options" :class="{'active': index === editOption}">
                                <md-table-cell>{{opt}}</md-table-cell>
                                <md-table-cell>
                                    <div style="font-size: large; float: right">
                                        <i class="fa fa-pencil" @click="editOption = (editOption > -1 ? -1 : index)" style="margin-right: .5em"></i>
                                        <i class="fa fa-times" @click="tempQuest.options.splice(index,1)"></i>
                                    </div>
                                </md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell @click.native="tempQuest.options.push('')">
                                    <h3>添加选项</h3>
                                </md-table-cell>
                                <md-table-cell @click.native="tempQuest.options.push('')">
                                </md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </div>
                <label v-else-if="tempQuest.type === 'Text'">描述</label>

                <!--<vue-html5-editor></vue-html5-editor>-->

                <md-input-container v-if="tempQuest.type === 'Text'">
                    <label>暂时用来代替富文本编辑器</label>
                    <md-textarea v-model="tempQuest.body"></md-textarea>
                </md-input-container>

                <md-input-container v-else-if="tempQuest.type === 'MC' && editOption !== -1">
                    <label>暂时用来代替富文本编辑器</label>
                    <md-textarea v-model="tempQuest.options[editOption]"></md-textarea>
                </md-input-container>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="finishEdit(false)">返回</md-button>
                <md-button class="md-primary" @click="finishEdit(true)">保存</md-button>
            </md-dialog-actions>
        </md-dialog>

        <md-card class="sect">
            <md-card-header>
                <h3 class="md-title">{{section.sectionName}}</h3>
            </md-card-header>

            <md-card-content>
                <md-table>
                    <md-table-body>
                        <md-table-row v-for="(quest,index) in section.questions">
                            <h2>{{index + 1}}.</h2>
                            <div class="questPreview">
                                <h3>问题：{{quest.title}}</h3>
                                <div v-if="quest.type === 'MC'">
                                    <h3>选项：</h3>
                                    <ul>
                                        <li v-for="opt in quest.options">{{opt}}</li>
                                    </ul>
                                </div>
                                <div v-else-if="quest.type === 'Text'">
                                    <h3>描述：</h3>
                                    <p style="margin-left: 30px">{{quest.body}}</p>
                                </div>
                                <h3>答案：{{quest.answer}}</h3>
                                <h3>分值：{{quest.point}}</h3>
                            </div>
                            <md-button class="md-warn">删除</md-button>
                            <md-button @click="editSelect(index)" :id="'q'+index">编辑</md-button>
                        </md-table-row>
                        <md-table-row><md-button style="width: 100%">添加题目</md-button></md-table-row>
                    </md-table-body>
                </md-table>
            </md-card-content>
        </md-card>
    </md-layout>
</template>

<script>
    export default {
        name: 'TestSectionCard',
        data () {
            return {
                editId: -1,
                editOption: -1,
                section: {
                    sectionName: '测试section',
                    questions: [
                        {type: 'MC', title: '选择题：1+1', options: ['1', '2', '3', '10'], answer: '10', point: 2},
                        {type: 'Text', title: '解答题：苟', body: '大雾', answer: '苟富贵无相忘', point: 1}
                    ]
                },
                tempQuest: undefined
            }
        },
        methods: {
            editSelect (index) {
                this.editId = index
                this.tempQuest = this.deepcopy(this.section.questions[this.editId])
                this.$refs['editDialog'].open()
            },
            finishEdit (save) {
                if (save) {
                    this.section.questions[this.editId] = this.deepcopy(this.tempQuest)
                }
                this.tempQuest = undefined
                this.editId = -1
                this.$refs['editDialog'].close()
            },
            deepcopy (obj) {
                return JSON.parse(JSON.stringify(obj))
            },
            changeType (cur) {
                switch (cur) {
                    case 'MC':
                        delete this.tempQuest.body
                        this.tempQuest.options = []
                        break
                    case 'Text':
                        delete this.tempQuest.options
                        this.tempQuest.body = ''
                        break
                }
            }
        },
        components: {

        },
        created () {

        }
    }
</script>

<style>
    .sect {
        flex: 1;
    }
    .questPreview {
        margin-left: 30px
    }
    .active {
        background-color: rgba(153, 153, 153, .2);
        text-decoration: none;
    }
</style>
