<template>
    <div class="container">
        <input type="text" v-model="content">
        <QRCode :val="content"></QRCode>
    </div>
</template>

<script>
    import QRCode from './QRCode.vue'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            QRCode
        }
    }
</script>

