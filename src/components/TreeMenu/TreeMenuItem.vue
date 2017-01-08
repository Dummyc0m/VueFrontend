<template>
    <li>
        <div
            :class="{bold: isFolder}"
            @dblclick="changeType">
            {{model.name}}
            <span v-if="isFolder" @click="toggle">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <TreeMenuItem
                class="item"
                v-for="model in model.children"
                :model="model">
            </TreeMenuItem>
            <li class="add" @click="createNewInProgress = true" v-if="!createNewInProgress">
                +
            </li>
            <form v-if="createNewInProgress" @submit.prevent="addChild">
                <md-input-container>
                    <label>输入章节名</label>
                    <md-input v-model="inputName"></md-input>
                </md-input-container>
            </form>
        </ul>
    </li>
</template>

<script>
    import Vue from 'vue'
    import TreeMenuItem from './TreeMenuItem'
    export default {
        name: 'TreeMenuItem',
        props: {
            model: {
                type: Object
            }
        },
        data () {
            return {
                open: false,
                createNewInProgress: false,
                inputName: ''
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children !== undefined
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                if (!this.isFolder) {
                    Vue.set(this.model, 'children', [])
                    this.open = true
                }
            },
            addChild: function () {
                this.model.children.push({
                    name: this.inputName,
                    index: this.model.children.length,
                    data: {}
                })
                this.inputName = ''
                this.createNewInProgress = false
            }
        },
        components: {
            TreeMenuItem
        }
    }
</script>

<style scoped>
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        list-style-type: dot;
    }
</style>
