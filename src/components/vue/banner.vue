<template>
    <view>
        <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
            <swiper class="swiper-box" @change="change">
                <swiper-item v-for="(item ,index) in info" :key="index">
                    <view class="swiper-item">
                        {{item.content}}
                    </view>
                </swiper-item>
            </swiper>
        </uni-swiper-dot>
    </view>
</template>
<script>
    import uniSwiperDot from "@/components/uni/uni-swiper-dot/uni-swiper-dot.vue";

    export default {
        components: {uniSwiperDot}
        , data() {
            return {
                info: [{
                    content: '内容 A'
                }, {
                    content: '内容 B'
                }, {
                    content: '内容 C'
                }],
                current: 0,
                mode: 'round',
            }
        },
        methods: {
            change(e) {
                this.current = e.detail.current;
            }
        }
    }
</script>

<style>
    .header {
        display: flex;
        align-items: center;
        top: 0;
        position: fixed;
        width: 100%;
        z-index: 100;
        left: 0;
    }

    .header .header-title {
        position: absolute;
        left: 50%;
        font-size: unit(38, upx);
        transform: translateX(-50%);
    }

    .header-back {
        position: absolute;
        left: unit(15, upx);
        font-size: unit(30, upx);
        padding: unit(10, upx);
        border-radius: 50%;
    }
</style>
