<template>
    <view>
        <view class="header"
              :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': nav.bg}">
            <text class="iconfont leftArrow header-back weight" :style="{'border':nav.color}" v-if="nav.isBack"
                  @click="back"></text>
            <view class="uni-list">
            </view>
            <view class="header-title weight">{{nav.navTitle}}</view>
        </view>
        <view :style="{'height':titleBarHeight,'padding-top':statusBarHeight}"></view>
    </view>
</template>
<script>
    export default {
        props: ["nav"],
        data() {
            return {
                statusBarHeight: 0,
                titleBarHeight: 0,
            }
        },
        created() {
            let that = this;
            uni.getSystemInfo({
                success: function (res) {
                    if (res.model.indexOf('iPhone') !== -1) {
                        that.titleBarHeight = 44 + 'px';
                    } else {
                        that.titleBarHeight = 48 + 'px';
                    }
                    that.statusBarHeight = res.statusBarHeight + 'px'
                },

            })
        },
        methods: {
            // 回到上一页
            back: function () {
                uni.navigateBack({
                    delta: 1
                })
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
        font-size: 38px;
        transform: translateX(-50%);
    }

    .header-back {
        position: absolute;
        left: 15px;
        font-size: 30px;
        padding: 10px;
        border-radius: 50%;
    }
</style>
