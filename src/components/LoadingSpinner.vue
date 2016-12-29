<template>
    <div class="loading">
        <div class="spinner"></div>
    </div>
</template>

<script>
    export default {
        name: 'LoadingSpinner'
    }
</script>

<style scoped>
    /* Absolute Center Spinner */
    .loading {
        position: fixed;
        z-index: 1000;
        height: 2em;
        width: 2em;
        overflow: visible;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    /* Transparent Overlay */
    .loading:before {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }

    /* :not(:required) hides these rules from IE9 and below */
    .loading:not(:required) {
        /* hide "loading..." text */
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
    }

    .spinner {
        position: absolute;
        top: -100%;
        left: -100%;
        height: 120px;
        width: 120px;
        margin: 0px;
        /*-webkit-animation: rotation .8s infinite linear;*/
        /*-moz-animation: rotation .8s infinite linear;*/
        /*-o-animation: rotation .8s infinite linear;*/
        animation: rotation 1s infinite linear;
        border-left: 12px solid rgba(0, 239, 174, .15);
        border-right: 12px solid rgba(0, 239, 174, .15);
        border-bottom: 12px solid rgba(0, 239, 174, .15);
        border-top: 12px solid rgba(0, 239, 174, .9);
        border-radius: 100%;
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
    }

    @-moz-keyframes rotation {
        from {
            -moz-transform: rotate(0deg);
        }
        to {
            -moz-transform: rotate(359deg);
        }
    }

    @-o-keyframes rotation {
        from {
            -o-transform: rotate(0deg);
        }
        to {
            -o-transform: rotate(359deg);
        }
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(359deg);
        }
    }
</style>
