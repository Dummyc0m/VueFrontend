<template>
    <div class="menu-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MenuGroup'
    }
</script>

<style scoped>
    .menu-group {
        float: left;
        padding: 0 8px;
        border-right: 1px solid #f1f1f1;
    }
</style>
