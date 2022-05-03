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
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
