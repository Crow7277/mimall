import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
import VueCookie from 'vue-cookie';
// import env from './env';

// 根据前端跨域方式进行调整
// 此时使用了代理，因此域名是一样的，这里使用/api，在代理转发时将api去掉
// /a/b => /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 使用jsonp或者cors时
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// axios响应拦截
axios.interceptors.response.use(function (response) {
    // 取到接口返回的值
    let res = response.data;
    // 获取路径
    let path = location.hash;
    if (res.status === 0) {
        return res.data;
    } else if (res.status === 10) {
        // 当前项目中后端定义状态码为10时未登录
        // 此时不使用路由跳转的原因是路由是在Vue实例中的，这里是取不到的
        if (path !== '#/index') window.location.href = '/#/login';
    } else {
        alert(res.msg);
        // 失败的话将错误排除
        return Promise.reject();
    }
});

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

Vue.use(VueLazyload, { loading: require('/public/imgs/loading-svg/loading-bars.svg') });
Vue.use(VueCookie);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
