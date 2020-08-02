<template>
    <view class="content">
        <bar :nav="setNav"></bar>
        <image class="logo" src="/static/logo.png"></image>
        <view>
            <text class="title">{{title}}</text>
        </view>
    </view>
</template>

<script>
    import bar from '@/components/vue/bar.vue';

    export default {
        components: {bar},
        data() {
            return {
                // 自定义导航栏对象
                title: 'lv-fps'
                , setNav: {
                    'bg': '',  //背景色
                    'color': 'red',  //字体颜色
                    // 'isBack': true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
                    // 然后有些页面不需要的东西通过条件控制进行显示与隐藏
                    'navTitle': '标题栏'
                }
            }
        }
    }
</script>

<style lang="less">
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: unit(200, rpx);
        width: unit(200, rpx);
        margin: unit(200, rpx) auto unit(50, rpx) auto;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: unit(36, rpx);
        color: #8f8f94;
    }
</style>
