<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            res: {},
        };
    },
    mounted() {
        // 本地加载请求静态json文件的形式
        // this.axios.get('/mock/user/login.json').then(res => {
        //     this.res = res;
        // });

        // 通过easy-mock平台实现数据mock
        // this.axios.get('/user/login').then(res => {
        //     this.res = res;
        // });

        // 本地集成mock.js实现数据mock
        this.axios.get('/user/login').then(res => {
            this.res = res;
        });
    },
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
