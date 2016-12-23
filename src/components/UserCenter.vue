<template>
    <div class="container">
        <h1 class="md-display-2">User center</h1>
        <md-layout md-gutter>
            <md-layout md-flex-xsmall="20" md-flex-small="20" md-flex-medium="20" md-flex-large="20"
                       md-flex-xlarge="20">
                <md-avatar class="md-large">
                    <img src="http://static.daibingsong.com/general/icon/dbs-logo-240-240.png">
                </md-avatar>
            </md-layout>
            <md-layout md-flex-xsmall="80" md-flex-small="80" md-flex-medium="80" md-flex-large="80"
                       md-flex-xlarge="80">
                <h2 class="md-display-1">Frank Lacrose Dell</h2>
            </md-layout>
        </md-layout>
        <md-layout md-gutter>
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="25"
                       md-flex-xlarge="25">
                <md-card class="md-whiteframe-7dp">
                    <md-card-media>
                        <img src="http://static.daibingsong.com/dbs/images/lock.png" alt="People">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">Security</div>
                        <div class="md-subhead">Password, multi-factor authentication (MFA) control.</div>
                    </md-card-header>


                    <md-card-content>
                        <md-table v-once>
                            <md-table-body>
                                <md-table-row>
                                    <md-table-cell>Last login</md-table-cell>
                                    <md-table-cell md-numeric>2016-12-23 14:00:00</md-table-cell>
                                </md-table-row>
                                <md-table-row>
                                    <md-table-cell>Last password change</md-table-cell>
                                    <md-table-cell md-numeric>2016-12-22 14:00:00</md-table-cell>
                                </md-table-row>
                                <md-table-row>
                                    <md-table-cell>MFA</md-table-cell>
                                    <md-table-cell md-numeric>OFF</md-table-cell>
                                </md-table-row>
                            </md-table-body>
                        </md-table>
                    </md-card-content>
                    <md-card-actions>
                        <md-button @click="changePassword()">Change Password</md-button>
                        <md-button>Setup MFA</md-button>
                    </md-card-actions>
                </md-card>
            </md-layout>
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="25"
                       md-flex-xlarge="25">
                <md-card class="md-whiteframe-7dp">
                    <md-card-media>
                        <img src="http://static.daibingsong.com/dbs/images/billing.png" alt="People">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">Billing</div>
                        <div class="md-subhead">Payment methods and account balance.</div>
                    </md-card-header>


                    <md-card-content>
                        <md-table v-once>
                            <md-table-body>
                                <md-table-row>
                                    <md-table-cell>Sub total</md-table-cell>
                                    <md-table-cell md-numeric>$ 0.00</md-table-cell>
                                </md-table-row>
                                <md-table-row>
                                    <md-table-cell>Total due</md-table-cell>
                                    <md-table-cell md-numeric>$ 0.00</md-table-cell>
                                </md-table-row>
                                <md-table-row>
                                    <md-table-cell>Priority gateway</md-table-cell>
                                    <md-table-cell md-numeric>Alipay</md-table-cell>
                                </md-table-row>
                            </md-table-body>
                        </md-table>
                    </md-card-content>
                    <md-card-actions>
                        <md-button v-on:click="openDialog('recharge_dialog')">Recharge</md-button>
                        <md-button v-on:click="openDialog('withdraw_dialog')">Withdraw</md-button>
                    </md-card-actions>
                </md-card>
            </md-layout>
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="25"
                       md-flex-xlarge="25">
                <md-card class="md-whiteframe-7dp">
                    <md-card-media>
                        <img src="http://static.daibingsong.com/dbs/images/user.png" alt="People">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">Profile</div>
                        <div class="md-subhead">Your personal info.</div>
                    </md-card-header>

                    <md-card-content>
                        <md-table v-once>
                            <md-table-body>
                                <md-table-row>
                                    <md-table-cell>Full name</md-table-cell>
                                    <md-table-cell md-numeric>Frank Dell</md-table-cell>
                                </md-table-row>
                                <md-table-row>
                                    <md-table-cell>Email</md-table-cell>
                                    <md-table-cell md-numeric>id@daibingsong.com</md-table-cell>
                                </md-table-row>
                                <md-table-row>
                                    <md-table-cell>Phone</md-table-cell>
                                    <md-table-cell md-numeric>+86 171-9765-5556</md-table-cell>
                                </md-table-row>
                            </md-table-body>
                        </md-table>
                    </md-card-content>

                    <md-card-actions>
                        <md-button v-on:click="openDialog('edit_profile_dialog')">Edit</md-button>
                    </md-card-actions>
                </md-card>
            </md-layout>
        </md-layout>
        <!--<md-dialog-alert :md-content="alert.change_password_dialog_content" md-ok-text="ok" ref="change_password_dialog"></md-dialog-alert>-->
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="change_password_dialog">
            <md-dialog-title>Change password</md-dialog-title>
            <md-dialog-content>
                <md-input-container> <label>Old password</label> <md-input v-model="oldPassword" type="password"></md-input> </md-input-container>
                <md-input-container> <label>New password</label> <md-input v-model="newPassword" type="password"></md-input> </md-input-container>
                <md-input-container> <label>Confirm password</label> <md-input v-model="confirmPassword" type="password"></md-input> </md-input-container>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('change_password_dialog')">Cancel</md-button>
                <md-button class="md-primary" @click="closeDialog('change_password_dialog')">Ok</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="recharge_dialog">
            <md-dialog-title>Recharge</md-dialog-title>
            <md-dialog-content>
                <md-input-container> <label>Amount</label> <md-input v-model="rechargeAmount"></md-input> </md-input-container>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('recharge_dialog')">Cancel</md-button>
                <md-button class="md-primary" @click="closeDialog('recharge_dialog')">Recharge now</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="withdraw_dialog">
            <md-dialog-title>Withdraw</md-dialog-title>
            <md-dialog-content>
                <p>Unfurtunately wirhdraw is not supported at this time.</p>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('withdraw_dialog')">Cancel</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="edit_profile_dialog">
            <md-dialog-title>Edit Profile</md-dialog-title>
            <md-dialog-content>
                <md-input-container> <label>Full name</label> <md-input v-model="full_name"></md-input> </md-input-container>
                <md-input-container> <label>Email</label> <md-input v-model="email"></md-input> </md-input-container>
                <md-input-container> <label>Phone</label> <md-input v-model="phone"></md-input> </md-input-container>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('edit_profile_dialog')">Cancel</md-button>
                <md-button class="md-primary" @click="closeDialog('edit_profile_dialog')">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
    export default {
        data: () => ({
            alert: {
                change_password_dialog_content: '<md-input-container> <label>password</label> <md-input v-model="password"></md-input> </md-input-container>'
            },
            full_name: 'Frank Dell',
            email: 'id@daibingsong.com',
            phone: '+8617197655556'
        }),
        methods: {
            openDialog (ref) {
                this.$refs[ref].open()
            },
            closeDialog (ref) {
                this.$refs[ref].close()
            },
            changePassword () {
                this.openDialog('change_password_dialog')
            }
        }
    }
    //    func
</script>


