<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    mounted() {
        // 屏蔽掉没有必要的接口
        // 如果是已经登录的状态,不需要额外获取用户信息于购物车数量
        if (this.$cookie.get('userId')) {
            this.getUser();
            this.getCartCount();
        }
    },
    // 路由被激活时触发
    activated() {
        console.log('check');
        // 屏蔽掉没有必要的接口
        // 如果是已经登录的状态,不需要额外获取用户信息于购物车数量
        if (this.$cookie.get('userId')) {
            this.getUser();
            this.getCartCount();
        }
    },
    methods: {
        getUser() {
            this.axios.get('/user').then((res = {}) => {
                this.$store.dispatch('saveUserName', res.username);
            });
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res = 0) => {
                this.$store.dispatch('saveCartCount', res);
            });
        },
    },
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/config.scss';
@import './assets/scss/modal.scss';
@import './assets/scss/button.scss';
</style>
