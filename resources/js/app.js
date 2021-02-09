
require('./bootstrap');

import Vue from 'vue';
import router from './router'
import App from './pages/App.vue'


const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
