<template>
    <div class="container">
        lable <input type="text" v-model="lable"><br />
        username <input type="text" v-model="username"><br />
        secret <input type="text" v-model="secret"><br />
        <p>{{str}}</p>
        <QRCode v-bind:val="str"></QRCode>

    </div>
</template>

<script>
    import QRCode from './QRCode.vue'
    export default {
        name: 'TestPage',
        data () {
            return {
                lable: '',
                username: '',
                secret: ''
            }
        },
        computed: {
            str: function () {
                return 'otpauth://totp/' + this.username + '?secret=' + this.secret + '&issuer=' + this.lable
            }
        },
        components: {
            QRCode
        }
    }
</script>

