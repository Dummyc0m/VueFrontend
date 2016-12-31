<template>
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="33"
               md-flex-xlarge="33">
        <md-card class="md-whiteframe-7dp uccard">
            <md-card-media class="uccard-header">
                <i class="uccard-header-icon fa fa-5x" :class="icon"></i>
            </md-card-media>

            <md-card-header>
                <div class="md-title">{{title}}</div>
                <div class="md-subhead">{{subTitle}}</div>
            </md-card-header>

            <md-card-content class="uccard-content">
                <md-table v-once>
                    <md-table-body>
                        <md-table-row v-for="c in content">
                            <md-table-cell>{{c.title}}</md-table-cell>
                            <md-table-cell md-numeric>{{c.data}}</md-table-cell>
                        </md-table-row>
                    </md-table-body>
                </md-table>
            </md-card-content>

            <md-card-actions>
                <md-button v-for="action in actions" @click="action.callback">{{action.title}}</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'fa-lock'
            },
            title: {
                type: String,
                default: 'Title'
            },
            subTitle: {
                type: String,
                default: 'Sub Title Description...........'
            },
            actions: {
                type: Array,
                default () {
                    return [
                        {
                            title: 'TestButton',
                            callback: () => {
                                console.log('test')
                            }
                        }
                    ]
                }
            },
            content: {
                type: Array,
                default () {
                    return [
                        {
                            title: 'test',
                            data: '$ 0.00'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .uccard-header {
        position: relative;
        height: 140px;
        background-color: #5983fd;
        color: #FFF;
        text-align: center !important;

    }

    .uccard-content {
        flex-direction: column;
        flex: 1;
    }

    .uccard-header-icon {
        margin-top: 7%;
        display: block;
    }

    .uccard {
        margin: 20px 10px;
        flex:1;
    }
</style>
