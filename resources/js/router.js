import Vue from 'vue';
import VueRouter from 'vue-router'

import Dashboard from './pages/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: Dashboard,
            component: Dashboard
        },
        {
            path: '/home',
            name: Dashboard,
            component: Dashboard
        },
        {
            path: '/',
            name: Dashboard,
            component: Dashboard
        }
    ]

});

export default router;