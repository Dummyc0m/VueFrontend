<template>
    <div class="editor-container">
        <MenuBar>
            <MenuGroup>
                <1  `EditorMenuItem name="code" icon="fa-code" tip="Test" :active="test" @click="test = !test"></1EditorMenuItem>
            </MenuGroup>
        </MenuBar>
        <div contenteditable="true" class="editing-box"></div>
    </div>
</template>

<script>
    import MenuBar from './components/menu/MenuBar'
    import MenuGroup from './components/menu/MenuGroup'
    import EditorMenuItem from './components/menu/EditorMenuItem'
    export default {
        name: 'RichTextEditor',
        data () {
            return {
                test: false
            }
        },
        components: {
            MenuBar, MenuGroup, EditorMenuItem
        }
    }
</script>

<style scoped>
    .editor-container {
        position: relative;
        background-color: #fff;
        border: 1px solid #ccc;
        z-index: 1;
        width: 100%;
        border-radius: 2px;
    }
    .editing-box {
        min-height: 10em;
        outline: 0 solid transparent;
        padding: 0.5em 1em;
        font-family: "Microsoft YaHei", "Helvetica Neue", sans-serif;
        font-size: medium;
    }
</style>
