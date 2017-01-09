/**
* Created by dummy on 1/8/17.
*/
<template>
    <div>
        <md-checkbox v-for="(choice, index) in choices" :value="value.includes(index)"
                  :id="String(index)" :name="String(index)" class="md-primary"
                     @change="updateInput(index, $event)"> {{ choice.value }}
        </md-checkbox>
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
                type: Array,
                required: true
            }
        },
        data () {
            return {
                group: Math.random().toString(),
                changedData: []
            }
        },
        methods: {
            updateInput (index, $event) {
                if (!$event) {
                    this.changedData.splice(this.changedData.indexOf(index), 1)
                } else {
                    this.changedData.push(index)
                }
                this.$emit('input', this.changedData.sort())
            }
        }
    }
</script>

<style scoped>
</style>
