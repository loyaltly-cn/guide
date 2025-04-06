<script setup lang="ts">
const star1 = ref<number>(0)
const star2 = ref<number>(0)
const star3 = ref<number>(0)
const star4 = ref<number>(0)
const star5 = ref<number>(0)

function submit() {
  uni.navigateTo({
    url: 'appraiseSuccess',
  })
}
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-navbar fixed
             placeholder
             title="导游评价"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>
  <view class="flex justify-center items-center bg-[#FDF8E1] mx-[-50rpx] p-[10rpx]">
    <view>
      <image src="@/static/icon/flower.png" class="w-[40rpx] h-[40rpx]"></image>
    </view>
    <text class="color-[#666666]">你的好评是导游和旅行社的动力！</text>
  </view>
  <view class="flex items-center">
    <text class="text-[32rpx] font-semibold">您对导游满意吗？</text>
    <text class="text-[20rpx] color-[#999999]">对导游进行评价必须先进行实名认证</text>
  </view>

  <view class="flex items-center mt-2 gap-4">
    <view class="w-[20%] h-[20%]">
      <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
    </view>
    <text>陈倩倩</text>
  </view>


  <view class="flex flex-col gap-2">
    <view class="flex items-center gap-4">
      <text>总体评价</text>
      <wd-rate v-model="star1" @change="handleChange"/>
    </view>

    <view class="flex items-center gap-4">
      <text>服务态度</text>
      <wd-rate v-model="star2" @change="handleChange"/>
    </view>

    <view class="flex items-center gap-4">
      <text>专业只是</text>
      <wd-rate v-model="star3" @change="handleChange"/>
    </view>

    <view class="flex items-center gap-4">
      <text>沟通能力</text>
      <wd-rate v-model="star4" @change="handleChange"/>
    </view>

    <view class="flex items-center gap-4">
      <text>应变能力</text>
      <wd-rate v-model="star5" @change="handleChange"/>
    </view>
  </view>

  <view class="flex flex-col mt-4">
    <text class="font-semibold">评价内容</text>

  </view>

  <wd-button @click="submit" class="mt-4" block>提交评价</wd-button>
</template>

<style scoped>
:deep(.wot-theme-light) {
  padding: 0;
}
</style>

<route>
{
"style": {
"navigationBarTitleText": "评价导游"
}
}
</route>
