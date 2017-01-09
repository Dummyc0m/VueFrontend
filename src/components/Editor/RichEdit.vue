<template>
    <div class="editor-container">
        <MenuBar>
            <MenuGroup>
                <EditorMenuItem name="code" icon="fa-code" tip="Test"></EditorMenuItem>
                <EditorMenuItem name="code" icon="fa-code" tip="Test" :active="test" @click="test = !test"></EditorMenuItem>
            </MenuGroup>
        </MenuBar>
        <div contenteditable="true" style="min-height: 10em; outline: 0 solid transparent;"></div>
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

</style>
