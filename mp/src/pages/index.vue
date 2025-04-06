<!--
 * @Author: weisheng
 * @Date: 2024-11-01 11:44:38
 * @LastEditTime: 2024-11-01 14:10:20
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-demo\src\pages\index.vue
 * 记得注释
-->
<script setup lang="ts">
const current = ref<number>(0)
const isLoggedIn = uni.getStorageSync('token')
const role = ref()
const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])

function handleClick(e) {
  console.log(e)
}

function onChange(e) {
  console.log(e)
}

function details() {
  console.log('asdjf')
  uni.navigateTo({
    url: 'guideDetails',
  })
}

onShow(() => {
  role.value = uni.getStorageSync('role')
  console.log(role.value)
})

onHide(() => {
  // 页面每次显示时触发
  console.log('页面隐藏')
})

onMounted(() => {
  if (!isLoggedIn) {
    uni.navigateTo({
      url: '/pages/login/wechatLogin',
    })
  }
})

function AI() {
  uni.navigateTo({
    url: '/pages/aiFind',
  })
}
</script>

<template>
  <wd-search hide-cancel custom-input-class=""/>
  <view class="bg-[rgba(50,145,248,0.05)] p-[15px]">

    <wd-swiper :list="swiperList" autoplay v-model:current="current" :indicator="{ type: 'dots-bar' }"
               @click="handleClick" @change="onChange"></wd-swiper>

    <view v-if="role === 2" class="flex justify-between gap-[10rpx] mt-[30rpx]">
      <view class="flex justify-between items-center bg-white p-[15rpx] rounded-lg shadow-md w-[50%]">
        <view class="flex flex-col items-center">
          <text class="text-[30rpx] font-900">导游</text>
          <text class="text-[20rpx] color-[#8E8E8E]">查询可靠的金牌导游</text>
        </view>
        <view>
          <image class="w-[120rpx]" mode="widthFix" src="@/static/icon/daoyou.png"></image>
        </view>
      </view>
      <view class="flex justify-between items-center bg-white p-[15rpx] rounded-lg shadow-md w-[50%]">
        <view class="flex flex-col items-center">
          <text class="text-[30rpx] font-900">旅行社</text>
          <text class="text-[20rpx] color-[#8E8E8E]">寻找可靠的最佳旅行社</text>
        </view>
        <view>
          <image class="w-[120rpx]" mode="widthFix" src="@/static/icon/lvxingshe.png"></image>
        </view>
      </view>
    </view>
    <view class="flex justify-between items-center bg-white p-[15rpx] mt-30rpx rounded-lg shadow-md">
      <image class="w-[70rpx]" mode="widthFix" src="@/static/icon/gpt.png"></image>
      <view class="flex flex-col">
        <text class="text-[30rpx] font-900">启用AI助手，为您推荐最合适的导游</text>
        <text class="text-[20rpx] color-[#8E8E8E]">AI助手将根据您的要求做出选择</text>
      </view>
      <wd-button @click="AI" size="small">启用</wd-button>
    </view>

    <view class="flex justify-between mt-4">
      <text>推荐导游</text>
      <text @click="details" class="color-[#0F7AEF]">查看更多导游</text>
    </view>
    <view v-for="item in 5" @click="details" class="mt-[20px]">
      <guide-card></guide-card>
    </view>
  </view>
</template>

<style></style>

<route type="home" lang="json">
{
"layout": "tabbar",
"name": "home",
"style": {
"navigationBarTitleText": "首页"
}
}
</route>
