import Vue from 'Vue'
import router from './router';
import App from './App.vue';
Vue.config.debug = true;//开启错误提示

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: {
        App
    }
});
