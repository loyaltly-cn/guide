<script setup lang="ts">
const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])

function appraise() {
  uni.navigateTo({
    url: 'appraise',
  })
}

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
  <view class="flex flex-col shadow-md gap-5 rounded-lg bg-white p-2 mt-4">
    <view class="flex gap-[40rpx]">
      <view class="w-[23%] h-[23%]">
        <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
      </view>
      <view class="flex flex-col w-[65%] gap-[10rpx]">
        <view class="flex  justify-between items-center">
          <text class="text-[50rpx]">陈倩倩</text>
          <text class="bg-[rgba(44,101,247,0.1)] color-[#2C65F7] p-[10rpx] text-[25rpx]">中级导游</text>
          <wd-icon size="40rpx" color="#8E8E8E" name="star"></wd-icon>
          <wd-icon size="40rpx" color="#8E8E8E" name="share"></wd-icon>
        </view>
        <view>
          <text class="text-[25rpx] color-[#8E8E8E]">广东广州XXX旅行社有限公司</text>
        </view>
        <view>
          <wd-icon color="#2C65F7" name="location"></wd-icon>
          <text class="ml-[20rpx] color-[#8E8E8E]">广东</text>
          <text class="ml-[20rpx] color-[#8E8E8E]">广州</text>
        </view>
      </view>
    </view>
    <view class="flex justify-around items-center">
      <view class="flex flex-col items-center">
        <text class="color-[#2C65F7] text-[45rpx] font-600">1-3年</text>
        <text class="color-[#999999] text-[20rpx]">工作经验</text>
      </view>
      <view class="flex flex-col items-center">
        <text class="color-[#2C65F7] text-[45rpx] font-600">本科</text>
        <text class="color-[#999999] text-[20rpx]">最高学历</text>
      </view>
      <view class="flex flex-col items-center">
        <text class="color-[#2C65F7] text-[45rpx] font-600">23岁</text>
        <text class="color-[#999999] text-[20rpx]">年龄</text>
      </view>
    </view>
  </view>
  <view class="flex justify-between items-center shadow-md rounded-lg bg-white p-[50rpx] mt-2">
    <text class="text-[35rpx] font-600">导游星级</text>
    <view class="flex gap-[20rpx]">
      <wd-icon size="50rpx" v-for="_ in 5" name="star-on" color="orange"></wd-icon>
    </view>
  </view>

  <view class="flex justify-between items-center shadow-md rounded-lg bg-white p-[50rpx] mt-2">
    <text class="text-[35rpx] font-600">总体评价</text>
    <view class="flex gap-[20rpx]">
      <wd-icon size="50rpx" v-for="_ in 5" name="star-on" color="orange"></wd-icon>
    </view>
  </view>

  <view class="flex items-center justify-between shadow-md rounded-lg bg-white p-2 mt-2">
    <view class="flex items-center">
      <wd-icon size="60rpx" name="call"></wd-icon>
      <text class="text-[35rpx] font-600">联系方式</text>
    </view>
    <view class="flex items-center bg-[#27B148] color-white rounded-lg p-[20rpx]">
      <wd-icon size="50rpx" name="call"></wd-icon>
      <text>查看导游联系方式</text>
    </view>
  </view>

  <view class="flex flex-col shadow-md rounded-lg bg-white p-2 mt-2">
    <text class="font-900 mb-30rpx">标签</text>
    <view class="flex items-center gap-4">
      <text v-for="item in 5" class="color-[#4B6BD6] bg-[rgba(75,107,214,0.1)] p-[10rpx] text-[20rpx]">普通话</text>
      <!--      <wd-tag class="space" v-for="item in 5" color="#4B6BD6" bg-color="rgb(75,107,214,0.1)">普通话</wd-tag>-->
    </view>
  </view>

  <view class="flex flex-col shadow-md rounded-lg bg-white p-2 mt-2">
    <text class="font-900 mb-20rpx text-[30rpx]">擅长的旅游项目</text>
    <text class="font-600 mb-10rpx text-[28rpx]">中山纪念堂2小时精华讲解</text>
    <text class="color-[#8E8E8E] text-[25rpx]">
      中山纪念堂是为了纪念伟大的革命家孙中山而兴建的纪念性建筑，它见证了广州的许多历史大事，富有纪念意义，现在是广州大型集会和演出的重要场所。
    </text>
  </view>

  <view class="flex flex-col shadow-md rounded-lg bg-white p-2 mt-2">
    <text class="font-900 mb-20rpx text-[30rpx]">自我评价</text>
    <text class="color-[#8E8E8E] text-[25rpx]">1. 热爱旅游行业，热衷体验各种文旅产品并思考其优缺点；2.
      知识丰富程度、语言表达能力和对景点熟悉； 3. 导游的服务周到、态度友好；
      4. 做事严谨，有较强的责任感，有较强的应变能力和解决问题的能力；5. 能够根据游客的特殊需求提供个性化的服务；6.在工作中诚实守信，不夸大事实，不隐瞒真相。
    </text>
  </view>

  <view class="flex flex-col shadow-md rounded-lg bg-white p-2 mt-2">
    <text class="font-900 mb-20rpx text-[30rpx]">导游相册</text>
    <scroll-view scroll-x class="whitespace-nowrap w-full overflow-x-auto p-[20rpx]">
      <image
        v-for="(img, index) in swiperList"
        :key="index"
        :src="img"
        mode="aspectFill"
        class="inline-block w-[300rpx] h-[180rpx] rounded-lg mr-[20rpx]"
      />
    </scroll-view>
  </view>

  <view class="flex flex-col shadow-md rounded-lg bg-white p-2 mt-2">
    <text class="text-[30rpx] font-semibold">教育经历</text>
    <view class="flex items-start gap-[20rpx] relative">
      <view class="flex-1">
        <view class="flex justify-between items-center text-[25rpx] font-semibold">
          <text>广州大学</text>
          <text class="text-[#888] text-[22rpx]">2017/9 - 2021/7</text>
        </view>
        <view class="text-[#666] text-[26rpx] mt-[10rpx]">文化旅游 | 本科</view>
        <view class="text-[#999] text-[24rpx] mt-[12rpx] leading-[38rpx]">
          主修科目：旅游文化、地理旅游、传统文化、酒店管理、项目管理、沟通技巧、礼仪礼节、英语、西班牙语、法语、东亚文化
        </view>
      </view>
    </view>
  </view>

  <view class="flex gap-[20rpx] justify-between p-2 my-2 ">
    <view class="w-[50%]">
      <wd-button block @click="appraise()" class="w-full" icon="edit-outline">在线评价导游</wd-button>
    </view>
    <view class="w-[50%]">
      <wd-button block class="w-full" icon="view-list">查看更多评价</wd-button>
    </view>
  </view>

</template>

<style scoped>

</style>

<route>
{
"style": {
"navigationBarTitleText": "导游详情"
}
}
</route>
