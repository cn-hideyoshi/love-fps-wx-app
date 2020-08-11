<template>
    <view class="content">
        <bar :nav="setNav"></bar>
        <view>
            <uni-swiper-dot
                    :info="info" :current="current" :dotsStyles="dotsStyles" :mode="uniSwiperDotMode" field="content">
                <swiper class="swiper" @change="change" :autoplay="true" :circular="true">
                    <swiper-item class="swiper-item" v-for="(item ,index) in info" :key="index">
                        <image :src="item.url"></image>
                    </swiper-item>
                </swiper>
            </uni-swiper-dot>
        </view>
        <view>
            1232131231232131
        </view>
        <!--        <image class="logo" src="/static/logo.png"></image>-->
        <!--        <view>-->
        <!--            <text class="title">{{title}}</text>-->
        <!--        </view>-->

    </view>
</template>

<script>
    import bar from '@/components/vue/bar.vue';
    import uniSwiperDot from '@/components/uni/uni-swiper-dot/uni-swiper-dot';

    const pageConfig = {
        title: 'lv-fps',
        header: '主页',
    };
    export default {
        components: {bar, uniSwiperDot},
        data() {
            return {
                // 自定义导航栏对象
                title: pageConfig.title
                , setNav: {
                    //背景色
                    'bg': '#FFF',
                    //字体颜色
                    'color': 'red',
                    //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
                    'isBack': false,
                    // 然后有些页面不需要的东西通过条件控制进行显示与隐藏
                    'navTitle': pageConfig.header
                }
                , info: [
                    {
                        url: 'http://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
                        content: "",
                    },
                    {
                        url: 'http://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
                        content: "",
                    },
                    {
                        url: 'http://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
                        content: "",
                    }
                ]
                , dotsStyles: {
                    backgroundColor: 'rgba(255, 90, 95,0.3)'
                    , border: '1px rgba(255, 90, 95,0.3) solid'
                    , color: '#fff'
                    , selectedBackgroundColor: 'rgba(255, 90, 95,0.9)'
                    , selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
                }
                , uniSwiperDotMode: 'default'
                , current: 0

            }
        }
        , methods: {
            change(e) {
                this.current = e.detail.current
            },
        }
    }
</script>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200px;
        width: 200px;
        margin: 200px auto 50px auto;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36px;
        color: #8f8f94;
    }

    .swiper {
        width: 750px;
    }

    .swiper-item {
        width: 100%;
        height: 100%;

        image {
            width: 100%;
            height: 100%;
        }
    }


</style>
