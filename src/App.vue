<template>
    <div id="app">
        <main>
            <transition :name="transitionName" mode="out-in">
                <router-view class="child-transition main-view"></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        }
    }
</script>

<style>

</style>
