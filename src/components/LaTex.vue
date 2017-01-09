<template>
    <span v-html="katex"></span>
</template>

<script>
    import katex from 'katex'
    export default {
        name: 'LaTex',
        computed: {
            katex () {
                return katex.renderToString(this.$slots.default[0].text)
            }
        }
    }
</script>

<style scoped>

</style>
