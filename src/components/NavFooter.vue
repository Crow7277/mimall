<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="" />
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.mi.com/index.html" target="_blank">小米商城</a>
            <span>|</span>
            <a href="https://home.mi.com/index.html" target="_blank">米家</a>
            <span>|</span>
            <a href="http://www.miliao.com/" target="_blank">米聊</a>
            <span>|</span>
            <a href="http://www.duokan.com/pc/" target="_blank">多看</a>
        </div>
        <div class="copyright">
            ©
            <span class="domain">mi.com</span>
            京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer',
};
</script>
<style lang="scss" scoped>
.footer {
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        a {
            color: #999;
            display: inline-block;
        }
        span {
            margin: 0 10px;
        }
        margin-bottom: 13px;
    }
    .copyright {
        .domain {
            color: #ff6600;
        }
    }
}
</style>
