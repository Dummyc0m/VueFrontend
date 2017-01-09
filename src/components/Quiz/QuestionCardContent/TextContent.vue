/**
* Created by dummy on 1/8/17.
*/
<style scoped>

</style>

<template>
    <md-input-container>
        <md-textarea :value="value" @input="$emit('input', $event)"></md-textarea>
    </md-input-container>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        }
    }
</script>
