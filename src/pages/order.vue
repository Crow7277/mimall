<template>
    <div>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue';
import NavFooter from '@/components/NavFooter.vue';
export default {
    name: 'Order',
    components: { NavFooter, ServiceBar },
    activated() {},
};
</script>

<style></style>
