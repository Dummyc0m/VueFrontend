<template>
    <md-layout md-flex="100">

        <md-dialog ref="editDialog">
            <md-dialog-title style="min-width: 640px">编辑题目</md-dialog-title>

            <md-dialog-content v-if="editId > -1">
                <md-input-container v-if="false">
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
                    <md-input v-model="tempQuest.answer" v-if="tempQuest.type === 'Text'"></md-input>
                    <md-select v-model="tempQuest.answer" v-else-if="tempQuest.type === 'MC'">
                        <md-option value="" v-if="false"></md-option>
                        <md-option v-for="(opt,index) in tempQuest.body" :value="index">{{opt}}</md-option>
                    </md-select>
                </md-input-container>
                <md-input-container>
                    <label>分数</label>
                    <md-input v-model="tempQuest.point"></md-input>
                </md-input-container>
                <div v-if="tempQuest.type === 'MC'">
                    <label>选项</label>
                    <md-table>
                        <md-table-body>
                            <md-table-row v-for="(opt,index) in tempQuest.body" :class="{'active': index === editOption}">
                                <md-table-cell>{{opt}}</md-table-cell>
                                <md-table-cell>
                                    <div style="font-size: large; float: right">
                                        <i class="fa fa-pencil" @click="editOption = (editOption > -1 ? -1 : index)" style="margin-right: .5em"></i>
                                        <i class="fa fa-times" @click="rmSelect(index)"></i>
                                    </div>
                                </md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell @click.native="tempQuest.body.push('新选项')">
                                    <h3>添加选项</h3>
                                </md-table-cell>
                                <md-table-cell @click.native="tempQuest.body.push('新选项')">
                                </md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </div>
                <label v-else-if="tempQuest.type === 'Text'">描述</label>

                <vue-html5-editor v-if="tempQuest.type === 'Text'"
                                  v-model="tempQuest.body"></vue-html5-editor>

                <vue-html5-editor v-else-if="tempQuest.type === 'MC' && editOption !== -1"
                                  v-model="tempQuest.body[editOption]"></vue-html5-editor>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="finishEdit(false)">返回</md-button>
                <md-button class="md-primary" @click="finishEdit(true)" :disabled="!valid">保存</md-button>
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
                                        <li v-for="opt in quest.body">{{opt}}</li>
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
                        {type: 'MC', title: '选择题：1+1', body: ['1', '2', '3', '10'], answer: 3, point: 2},
                        {type: 'Text', title: '解答题：苟', body: '大雾', answer: '苟富贵无相忘', point: 1}
                    ]
                },
                tempQuest: undefined
            }
        },
        computed: {
            valid () {
                let valid = true
                for (let key in this.tempQuest) {
                    if (this.tempQuest.hasOwnProperty(key)) {
                        if (this.tempQuest[key] === '') {
//                            console.log('empty: ' + key)
                            valid = false
                            break
                        } else if (this.tempQuest[key] instanceof Array) {
                            if (this.tempQuest[key].length) {
                                this.tempQuest[key].forEach(function (a) {
                                    if (a === '') {
//                                        console.log('empty option in: ' + a)
                                        valid = false
                                    }
                                })
                            } else {
//                                console.log('empty array: ' + key)
                                valid = false
                                break
                            }
                        }
                    }
                }
                return valid
            }
        },
        methods: {
            editSelect (index) {
                this.editId = index
                this.tempQuest = this.deepcopy(this.section.questions[this.editId])
                this.$refs['editDialog'].open()
            },
            rmSelect (index) {
                this.tempQuest.body.splice(index, 1)
                this.tempQuest.answer = ''
            },
            finishEdit (save) {
                if (this.valid || !save) {
                    if (save) {
                        this.section.questions[this.editId] = this.deepcopy(this.tempQuest)
                    }
                    this.tempQuest = undefined
                    this.editId = -1
                    this.$refs['editDialog'].close()
                }
            },
            deepcopy (obj) {
                return JSON.parse(JSON.stringify(obj))
            },
            changeType (cur) {
                switch (cur) {
                    case 'MC':
                        this.tempQuest.body = []
                        break
                    case 'Text':
                        this.tempQuest.body = ''
                        break
                }
                this.answer = ''
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
