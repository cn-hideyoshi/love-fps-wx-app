<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view>
            <text class="title">{{title}}</text>
        </view>
    </view>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        computed: {
            ...mapGetters(['getLocale']),
            ...mapState([
                'demo1'
            ])
        },
        onLoad() {
            this.fn('传递的内容')
            this.demoactions('这是一个异步')
        },
        methods: {
            ...mapMutations([
                'fn'
            ]),
            ...mapActions([
                'demoactions'
            ])
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
