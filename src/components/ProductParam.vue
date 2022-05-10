<template>
    <div class="nav-bar" :class="{ is_fixed: isFixed }">
        <div class="container">
            <div class="pro-title">{{ title }}</div>
            <div class="pro-param">
                <a href="javascript:;">概述</a>
                <span>|</span>
                <a href="javascript:;">参数</a>
                <span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductParam',
    props: {
        title: String,
    },
    data() {
        return {
            // 是否需要定位
            isFixed: false,
        };
    },
    mounted() {
        // 绑定scroll事件，当浏览器滚动时，触发initHeight方法
        // 单独定义方法是为了在移除事件时更加方便
        window.addEventListener('scroll', this.initHeight);
    },
    methods: {
        initHeight() {
            // 获取滚动条滚动的高度 document.body.scrollTop为ie浏览器
            //  window.pageYOffset Y轴偏移量
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // 计算高度
            // 头部高度是152px，当滚动条大于152时，需要定位，也就是需要做吸顶操作
            this.isFixed = scrollTop > 152 ? true : false;
        },
    },
    destroyed() {
        // 通过冒泡方式
        window.removeEventListener('scroll', this.initHeight, false);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';
.nav-bar {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: #fff;
    z-index: 11;
    &.is_fixed {
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 5px 5px $colorE;
    }
    .container {
        @include flex();
        .pro-title {
            font-size: $fontH;
            color: $colorB;
            font-weight: bold;
        }
        .pro-param {
            font-size: $fontJ;
            a {
                color: $colorC;
            }
            span {
                margin: 0 10px;
            }
        }
    }
}
</style>
