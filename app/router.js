import Vue from 'Vue';
import Router from 'vue-router';
import index from './pages/index.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/toast',
            name: 'toast',
            component: resolve => require(['./pages/toast.vue'], resolve)
        },
        {
            path: '/indicator',
            name: 'indicator',
            component: resolve => require(['./pages/indicator.vue'], resolve)
        },
    ]
});

