import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home';
import Index from '@/pages/index';
// import Product from '@/pages/product';
// import Detail from '@/pages/detail';
// import Cart from '@/pages/cart';
import Order from '@/pages/order';
// import OrderConfirm from '@/pages/orderConfirm';
// import OrderList from '@/pages/orderList';
// import OrderPay from '@/pages/orderPay';
// import Login from '@/pages/login';
// import Alipay from '@/pages/alipay';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index,
            },
            {
                path: '/product/:id', //动态路由
                name: 'product',
                component: resolve => require(['@/pages/index.vue'], resolve),
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: resolve => require(['@/pages/detail.vue'], resolve),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['@/pages/login.vue'], resolve),
    },
    {
        path: '/cart',
        name: 'cart',
        component: resolve => require(['@/pages/cart.vue'], resolve),
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
            {
                path: 'confirm',
                name: 'order-confirm',
                component: resolve => require(['@/pages/orderConfirm.vue'], resolve),
            },
            {
                path: 'list',
                name: 'order-list',
                component: resolve => require(['@/pages/orderList.vue'], resolve),
            },
            {
                path: 'pay',
                name: 'order-pay',
                component: resolve => require(['@/pages/orderPay.vue'], resolve),
            },
            {
                path: 'alipay',
                name: 'alipay',
                component: resolve => require(['@/pages/alipay.vue'], resolve),
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
