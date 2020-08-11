<template>
    <view>
        <view :for="page in PageList">{{page.style.navigationBarTitleText}}</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                statusBarHeight: 0,
                titleBarHeight: 0,
            }
        }
        , methods: {}
    }
</script>

<style scoped>

</style>