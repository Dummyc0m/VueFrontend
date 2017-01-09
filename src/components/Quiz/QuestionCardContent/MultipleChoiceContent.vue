/**
* Created by dummy on 1/8/17.
*/
<template>
    <div>
        <md-radio v-for="(choice, index) in choices" :value="String(value)"
                  :id="String(index)" :name="group" :md-value="String(index)"
                  class="md-primary" @change="updateInput(index)"> {{ choice.value }}
        </md-radio>
    </div>
</template>

<script>
    export default {
        props: {
            choices: {
                type: Array,
                required: true
            },
            value: {
            }
        },
        data () {
            return {
                group: Math.random().toString()
            }
        },
        methods: {
            updateInput (index, $event) {
                this.$emit('input', index)
            }
        }
    }
</script>

<style scoped>
</style>
