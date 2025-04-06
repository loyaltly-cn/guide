<script setup lang="ts">
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-navbar fixed
             placeholder
             title="导游详情"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>
  <view class="text-align-center mt-5">
    <image class="w-[25%]" mode="widthFix" src="@/static/success.png"></image>
  </view>
  <view class="text-align-center mt-4 text-[40rpx] font-500">
    <text>评价成功</text>
  </view>
  <view class="text-align-center mt-6 text-[20rpx] color-[#666666]">
    <text>您的评价已提交，可到“导游-评价”中查看</text>
  </view>
  <view class="text-align-center px-5 mt-10">
    <wd-button class="p-1" block>查看评价</wd-button>
  </view>
</template>

<style scoped>

</style>
<route>
{
"style": {
"navigationBarTitleText": "评价导游"
}
}
</route>
