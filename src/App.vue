<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import storage from '@/storage';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted() {
        // storage.setItem('a', 1);
        // storage.setItem('user', { a: 1 });
        // storage.setItem('abc', { b: 2 }, 'user');
        // // storage.clear('a');
        // storage.clear('a', 'user');
    },
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
