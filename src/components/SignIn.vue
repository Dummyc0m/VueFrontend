<template>
    <div style="height: 100%;">
        <div style="max-width: 400px; margin: 100px auto auto auto;">
            <form novalidate @submit.stop.prevent="submit">
                <h1 class="md-display-1">Login</h1>
                <md-input-container>
                    <label>Email</label>
                    <md-input></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Password</label>
                    <md-input type="password"></md-input>
                </md-input-container>
                <div align="right">
                    <md-button class="md-raised md-primary">Login</md-button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
</script>

