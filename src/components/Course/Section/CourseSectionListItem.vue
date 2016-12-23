<template>
    <md-list-item>
        <router-link :to="toUrl">
            <md-icon :icon="icon_class" :class="[active ? 'md-color-primary' : 'non-active']"></md-icon>
            <span class="text">{{title}}</span>
        </router-link>
        <md-divider class="md-inset"></md-divider>
    </md-list-item>
</template>
<script>
    export default {
        name: 'CourseSectionListItem',
        props: {
            'icon': {
                type: String,
                default: 'fa-play-circle'
            },
            'active': {
                type: Boolean,
                default: false
            },
            'title': {
                type: String,
                default: 'Untitled'
            },
            'toUrl': {
                type: [String, Object],
                default: ''
            }
        },
        data () {
            return {}
        },
        computed: {
            icon_class () {
                return this.icon + ' fa-2x'
            }
        }
    }
</script>
<style scoped>
    .non-active {
        color: #acb0b5 !important;
    }

    .text {
        color: #000 !important;
        font-weight: bold !important;
        font-family: PingFangSC, "Microsoft YaHei", Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
</style>
