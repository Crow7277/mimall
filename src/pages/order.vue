<template>
    <div>
        <order-header :title="title">
            <template v-slot:tip>
                <span>{{ tip }}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue';
import ServiceBar from '@/components/ServiceBar.vue';
import NavFooter from '@/components/NavFooter.vue';
export default {
    name: 'Order',
    components: { OrderHeader, NavFooter, ServiceBar },
    data() {
        return {
            title: '',
            tip: '',
        };
    },
    mounted() {
        // 获取路由地址
        let path = this.$route.path;
        if (path === '/order/confirm') {
            this.title = '订单确认';
            this.tip = '请认真填写收货地址';
        } else if (path === '/order/list') {
            this.title = '订单列表';
            this.tip = '请谨防钓鱼链接或找电话，了解跟多';
        } else if (path === '/order/pay') {
            this.title = '订单支付';
            this.tip = '请谨防钓鱼链接或找电话，了解跟多';
        }
    },
};
</script>

<style></style>
