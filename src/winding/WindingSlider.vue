/**
* Created by dummy on 1/7/17.
*/
<style scoped>
    input[type=range].winding {
        -webkit-appearance: none;
        width: 100%;
        margin: 2px 0;
    }
    input[type=range].winding:focus {
        outline: none;
    }
    input[type=range].winding::-webkit-slider-runnable-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(13, 13, 13, 0.2);
        background: #4d4d4d;
        border-radius: 1.3px;
        border: 0px solid #010101;
    }
    input[type=range].winding::-webkit-slider-thumb {
        box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
        border: 0px solid #ff1e00;
        height: 20px;
        width: 12px;
        border-radius: 0px;
        background: #ff5e8c;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -2px;
    }
    input[type=range].winding:focus::-webkit-slider-runnable-track {
        background: #616161;
    }
    input[type=range].winding::-moz-range-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(13, 13, 13, 0.2);
        background: #4d4d4d;
        border-radius: 1.3px;
        border: 0px solid #010101;
    }
    input[type=range].winding::-moz-range-thumb {
        box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
        border: 0px solid #ff1e00;
        height: 20px;
        width: 12px;
        border-radius: 0px;
        background: #ff5e8c;
        cursor: pointer;
    }
    input[type=range].winding::-ms-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    input[type=range].winding::-ms-fill-lower {
        background: #393939;
        border: 0px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(13, 13, 13, 0.2);
    }
    input[type=range].winding::-ms-fill-upper {
        background: #4d4d4d;
        border: 0px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(13, 13, 13, 0.2);
    }
    input[type=range].winding::-ms-thumb {
        box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
        border: 0px solid #ff1e00;
        height: 20px;
        width: 12px;
        border-radius: 0px;
        background: #ff5e8c;
        cursor: pointer;
    }
    input[type=range].winding:focus::-ms-fill-lower {
        background: #4d4d4d;
    }
    input[type=range].winding:focus::-ms-fill-upper {
        background: #616161;
    }
</style>

<template>
    <input class="winding" type="range" ref="slider" :min="min" :max="max" :step="step" :disabled="disabled" @mousedown="mousedown()" @mouseup="mouseup()">
</template>

<script>
    export default {
        props: {
            videoValue: Number,
            disabled: {
                type: Boolean,
                default: false
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            }
        },
        created () {
            this.setSlider(this.initialValue)
        },
        data () {
            return {
                changing: false
            }
        },
        methods: {
            mousedown () {
                this.changing = true
                this.$emit('changing', true)
            },
            mouseup () {
                let sliderValue = this.$refs.slider.value
                if (sliderValue !== this.videoValue) {
                    this.$emit('change', sliderValue)
                }
                this.changing = false
                this.$emit('changing', false)
            },
            setSlider (newValue) {
                this.$refs.slider.value = newValue
            }
        },
        watch: {
            videoValue (val) {
                if (!this.changing) {
                    this.setSlider(val)
                }
            }
        }
    }
</script>

