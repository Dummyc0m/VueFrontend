<template>
    <div class="text-center">
        <canvas
            :style="{height: size + 'px', width: size + 'px'}"
            :height="size"
            :width="size"
            ref="qr"
        ></canvas>
        <p v-if="textVisible">{{val}}</p>
    </div>
</template>

<script>
    import qr from 'qr.js'
    export default {
        props: {
            textVisible: {
                type: Boolean,
                default: false
            },
            val: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 150
            },
            // 'L', 'M', 'Q', 'H'
            level: String,
            bgColor: {
                type: String,
                default: '#FFFFFF'
            },
            fgColor: {
                type: String,
                default: '#000000'
            }
        },
        watch: {
            val (newVal) {
                this.update()
            }
        },
        mounted () {
            this.update()
        },
        methods: {
            getBackingStorePixelRatio (ctx) {
                return (
                    ctx.webkitBackingStorePixelRatio ||
                    ctx.mozBackingStorePixelRatio ||
                    ctx.msBackingStorePixelRatio ||
                    ctx.oBackingStorePixelRatio ||
                    ctx.backingStorePixelRatio ||
                    1
                )
            },
            update () {
                const size = this.size
                const bgColor = this.bgColor
                const fgColor = this.fgColor
                const $qr = this.$refs.qr
                const qrcode = qr(this.val)
                const ctx = $qr.getContext('2d')
                const cells = qrcode.modules
                const tileW = size / cells.length
                const tileH = size / cells.length
                const scale = (window.devicePixelRatio || 1) / this.getBackingStorePixelRatio(ctx)
                $qr.height = $qr.width = size * scale
                ctx.scale(scale, scale)
                cells.forEach((row, rdx) => {
                    row.forEach((cell, cdx) => {
                        ctx.fillStyle = cell ? fgColor : bgColor
                        const w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
                        const h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
                        ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
                    })
                })
            }
        }
    }
</script>
<style scoped>
    .text-center {
        text-align: center !important;
    }
    .none-display {
        display: none;
    }
</style>
