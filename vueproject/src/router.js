import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Reg from './views/Reg.vue';



Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',

            component: Home
        },
        {
            path: '/Login',

            component: Login
        },
        {
            path: '/Reg',

            component: Reg
        }
    ]
})