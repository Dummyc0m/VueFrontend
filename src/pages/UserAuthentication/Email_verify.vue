<template>
    <div style="height: 100%;">
        <div style="max-width: 400px; margin: 100px auto auto auto;">
            <form novalidate @submit.stop.prevent="submit">
                <h1 class="md-display-1">Verify your email</h1>
                <md-input-container>
                    <label>Verification code</label>
                    <md-input></md-input>
                </md-input-container>
                <div align="right">
                    <md-button class="md-raised md-primary">Submit</md-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
</script>

