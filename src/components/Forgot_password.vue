<template>
    <div style="height: 100%;">
        <div style="max-width: 400px; margin: 100px auto auto auto;">
            <form novalidate @submit.stop.prevent="submit">
                <h1 class="md-display-1">Forgot password</h1>
                <md-input-container>
                    <label>Email</label>
                    <md-input v-model="userEmail"></md-input>
                </md-input-container>
                <div align="right">
                    <md-button class="md-raised md-primary" @click="findPassword()">Reset my password</md-button>
                </div>
                <md-dialog-alert :md-content="alert.success_dialog_content" md-ok-text="ok" ref="success_dialog"></md-dialog-alert>
                <md-dialog-alert :md-content="alert.fail_dialog_content" md-ok-text="ok" ref="fail_dialog"></md-dialog-alert>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        data: () => ({
            alert: {
                success_dialog_content: 'Verification email sent. :-)',
                fail_dialog_content: 'Sorry, please try again. :-/'
            },
            userEmail: ''
        }),
        methods: {
            openDialog (ref) {
                this.$refs[ref].open()
            },
            findPassword () {
                this.openDialog('success_dialog')
            }
        }
    }
//    func
</script>

