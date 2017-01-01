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
                <h2 class="md-display-1"></h2>
            </md-layout>
        </md-layout>
        <md-layout md-gutter>
            <SecurityCard :loginHistory="loginHistory"></SecurityCard>
            <BillingCard></BillingCard>
            <ProfileCard></ProfileCard>
        </md-layout>
    </div>
</template>

<script>
    import SecurityCard from 'components/UserCenter/cards/SecurityCard'
    import BillingCard from 'components/UserCenter/cards/BillingCard'
    import ProfileCard from 'components/UserCenter/cards/ProfileCard'
    export default {
        name: 'UserCenter',
        components: {
            SecurityCard, BillingCard, ProfileCard
        },
        data () {
            return {
            }
        },
        methods: {

        },
        computed: {
            loginHistory () {
                return this.$store.state.userinfo.loginHistory
            }
        }
    }
</script>

<style scoped>

</style>
