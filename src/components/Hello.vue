<template>
    <div class="container">
        <KaTex>c = \pm\sqrt{a^2 + b^2}</KaTex>
    </div>
</template>

<script>
    import KaTex from 'components/KaTex'
    export default {
        name: 'TestPage',
        data () {
            return {
                content: 'Test'
            }
        },
        components: {
            KaTex
        }
    }
</script>

