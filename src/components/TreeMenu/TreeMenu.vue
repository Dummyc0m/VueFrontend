<template>
    <ul id="demo" class="huaji">
        <TreeMenuItem
            class="item"
            :model="treeData">
        </TreeMenuItem>
    </ul>
</template>

<script>
    import TreeMenuItem from './TreeMenuItem'
    export default {
        name: 'TreeMenu',
        components: {
            TreeMenuItem
        },
        data () {
            return {
                treeData: {
                    name: 'My Tree',
                    index: 0,
                    data: {}
                }
            }
        }
    }

</script>

<style scoped>
    .item {
        cursor: pointer;
    }

    ul {
        font-size: large;
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>
