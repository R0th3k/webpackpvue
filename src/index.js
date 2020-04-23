import Vue from 'vue';
Vue.config.productionTip = false;

import holamundo from './js/components/HolaMundo.vue';

new Vue({
    el: '#app',
    components: {
        holamundo,
    },
    data: {
        mensaje: 'Hola Vue!'
    },
    methods: {},
    mounted() {},
    created() {},
    watch: {}

})

import 'bulma';

import './scss/style.scss';