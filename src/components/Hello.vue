<template>
    <div class="container" style="margin-top: 100px">
        <RichEdit></RichEdit>
    </div>
</template>

<script>
    import RichEdit from 'components/Editor/RichEdit'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            RichEdit
        }
    }
</script>

