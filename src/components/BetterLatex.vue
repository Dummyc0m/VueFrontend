/**
* Created by dummy on 1/8/17.
*/
<template>
    <span v-html="content"></span>
</template>

<script>
    import katex from 'katex'

    export default {
        name: 'BetterLatex',
        computed: {
            content () {
                let slotHtml = this.$slots.default[0].text
                let regex = /<latex>(.*)<\/latex>/g
                let match = regex.exec(slotHtml)
                while (match) {
                    console.log(match[1])
                    slotHtml = slotHtml.replace(match[0], katex.renderToString(match[1]))
                    match = regex.exec(slotHtml)
                }
                return slotHtml
            }
        }
    }
</script>

