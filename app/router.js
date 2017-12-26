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
        {
            path: '/upRefresh',
            name: 'upRefresh',
            component: resolve => require(['./pages/upRefresh.vue'], resolve)
        },
        {
            path: '/infiniteScroll',
            name: 'infiniteScroll',
            component: resolve => require(['./pages/infiniteScroll.vue'], resolve)
        },
    ]
});

