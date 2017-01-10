<template>
    <md-layout md-flex="100">

        <md-dialog ref="editDialog">
            <md-dialog-title style="min-width: 640px">{{tempQuest?'编辑题目':'创建题目'}}</md-dialog-title>

            <md-dialog-content>

                <md-input-container v-if="!tempQuest">
                    <label>类型</label>
                    <md-select>
                        <md-option value="MC" @click.native="create('MC')" style="min-width: 640px">单选题</md-option>
                        <md-option value="Text" @click.native="create('Text')">解答题</md-option>
                    </md-select>
                </md-input-container>

                <div v-else>
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
                        <md-input v-model="tempQuest.point" type="number"></md-input>
                    </md-input-container>
                    <div v-if="tempQuest.type === 'MC'">
                        <label>选项</label>
                        <md-table>
                            <md-table-body>
                                <md-table-row v-for="(opt,index) in tempQuest.body" :class="{'active': index === editOption}">
                                    <md-table-cell>{{opt}}</md-table-cell>
                                    <md-table-cell>
                                        <div style="font-size: large; float: right">
                                            <i class="fa fa-pencil clickable"
                                               @click="editOption = (editOption > -1 ? -1 : index)"
                                               style="margin-right: .5em"
                                               v-if="editOption === -1 || index === editOption"></i>
                                            <i class="fa fa-times clickable"
                                               @click="rmSelect(index)"
                                               v-if="editOption === -1"></i>
                                        </div>
                                    </md-table-cell>
                                </md-table-row>
                                <md-table-row class="clickable">
                                    <md-table-cell @click.native="addOption()">
                                        <h3>添加选项</h3>
                                    </md-table-cell>
                                    <md-table-cell @click.native="addOption()">
                                    </md-table-cell>
                                </md-table-row>
                            </md-table-body>
                        </md-table>

                        <div v-if="editOption !== -1">
                            <label>修改选项</label>
                            <vue-html5-editor v-model="tempQuest.body[editOption]"></vue-html5-editor>
                        </div>
                    </div>

                    <div v-else-if="tempQuest.type === 'Text'">
                        <label>描述</label>
                        <vue-html5-editor v-model="tempQuest.body"></vue-html5-editor>
                    </div>
                </div>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="finishEdit(false)">返回</md-button>
                <md-button class="md-primary" @click="finishEdit(true)" :disabled="!valid" v-if="tempQuest">保存</md-button>
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
                                <h3>答案：{{quest.type === 'Text' ? quest.answer : quest.body[quest.answer]}}</h3>
                                <h3>分值：{{quest.point}}</h3>
                            </div>
                            <md-button @click="section.questions.splice(index,1)" class="md-warn">删除</md-button>
                            <md-button @click="editSelect(index)" :id="'q'+index">编辑</md-button>
                            <md-button @click="swap(index, index - 1)" v-if="index !== 0">上移</md-button>
                            <md-button @click="swap(index, index + 1)" v-if="index !== section.questions.length - 1">下移</md-button>
                        </md-table-row>
                        <md-table-row><md-button style="width: 100%" @click="openEdit()">添加题目</md-button></md-table-row>
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
                section: undefined,
                tempQuest: undefined,
                valid: undefined
            }
        },
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        created () {
            this.section = this.value
        },
        watch: {
            tempQuest: {
                handler: function (val) {
                    console.log('tempQuest')
                    let valid = true
                    for (let key in val) {
                        if (val.hasOwnProperty(key)) {
                            if (val[key] === '') {
                                console.log('empty: ' + key)
                                valid = false
                                break
                            } else if (val[key] instanceof Array) {
                                if (val[key].length) {
                                    val[key].forEach(function (a) {
                                        if (a === '') {
                                            console.log('empty option in: ' + a)
                                            valid = false
                                        }
                                    })
                                } else {
                                    console.log('empty array: ' + key)
                                    valid = false
                                    break
                                }
                            }
                        }
                    }
                    this.valid = valid
                },
                deep: true
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
                this.$forceUpdate()
            },
            finishEdit (save) {
                if (this.valid || !save) {
                    if (save) {
                        let tempQuest = this.deepcopy(this.tempQuest)
                        if (this.editId < 0) {
                            this.section.questions.push(tempQuest)
                        } else {
                            this.section.questions[this.editId] = tempQuest
                            this.editId = -1
                        }
                        this.$emit('input', this.section)
                    }
                    this.tempQuest = undefined
                    this.$refs['editDialog'].close()
                }
            },
            addOption () {
                this.tempQuest.body.push('')
                this.$forceUpdate()
            },
            deepcopy (obj) {
                return JSON.parse(JSON.stringify(obj))
            },
            create (cur) {
                this.tempQuest = {type: cur, title: '', body: undefined, answer: undefined, point: 0}
                switch (cur) {
                    case 'MC':
                        this.tempQuest.body = []
                        this.tempQuest.answer = 0
                        break
                    case 'Text':
                        this.tempQuest.body = ''
                        this.tempQuest.answer = ''
                        break
                }
                this.$forceUpdate()
            },
            openEdit () {
                this.$refs['editDialog'].open()
            },
            swap (a, b) {
//                console.log('swap:' + a + ' & ' + b)
                let c = this.section.questions[a]
                this.section.questions[a] = this.section.questions[b]
                this.section.questions[b] = c
                this.$forceUpdate()
            }
        },
        components: {

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
    .clickable {
        cursor: pointer;
    }
</style>
