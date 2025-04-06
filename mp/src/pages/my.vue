<!--
 * @Author: weisheng
 * @Date: 2024-11-01 11:44:38
 * @LastEditTime: 2024-11-14 19:02:48
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-demo\src\pages\hi.vue
 * 记得注释
-->
<script lang="ts" setup>
function setting() {
  uni.navigateTo({
    url: '/pages/setting',
  })
}

const role = ref()
onShow(() => {
  role.value = uni.getStorageSync('role')
  console.log(role.value)
})
</script>

<template>
  <view class="bg-[rgba(234,244,254)] p-[18px] h-[80vh]">
    <view v-if="role === 1" class="bg-white rounded-xl flex p-[22px]">
      <view class="w-[20%]">
        <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
      </view>
      <view class="flex-col gap-[50rpx] w-[70%] ml-[30rpx]">
        <view class="flex justify-between items-center">
          <text class="text-[40rpx] font-600">游客1</text>
          <view class="flex items-center">
            <wd-icon class="" color="#FF6804" name="note"></wd-icon>
            <wd-tag color="#FF6804" bg-color="#FFE0C7">已实名</wd-tag>
          </view>
          <view class="" style="border: 1px solid #2C65F7; border-radius: 20px; padding: 4rpx 20rpx;">
            <text class="color-[#2C65F7] text-[25rpx]">实名认证</text>
          </view>
        </view>
        <view class="mt-[30rpx]">
          <text class="color-[#8E8E8E]">广东广州/33岁/建筑设计师</text>
        </view>
      </view>
    </view>

    <view v-if="role === 2" class="flex flex-col bg-white rounded-xl p-[22px] shadow-md">
      <view class="flex">
        <view class="w-[20%]">
          <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
        </view>
        <view class="flex-col gap-[50rpx] w-[70%] ml-[30rpx]">
          <view class="flex justify-between items-center">
            <text class="text-[40rpx] font-600">陈倩倩</text>
            <view class="">
              <text class="text-[28rpx]">特级导游</text>
            </view>
            <view class="flex items-center">
              <wd-icon class="" color="#FF6804" name="note"></wd-icon>
              <wd-tag color="#FF6804" bg-color="#FFE0C7">已实名</wd-tag>
            </view>

          </view>
          <view class="mt-[20rpx]">
            <text class="color-[#8E8E8E]">1-3年/本科/23岁</text>
          </view>
          <view class="text-[14px] flex items-center gap-[5px] mt-[20rpx]">
            <text>导游星级</text>
            <wd-icon v-for="_ in 5" name="star-on" color="orange"></wd-icon>
          </view>
        </view>
      </view>
      <view class="flex justify-between items-center mt-[20rpx]">
        <view class="flex flex-col items-center">
          <text class="text-[40rpx] font-600">99</text>
          <text class="text-[30rpx] color-[#8E8E8E]">游客评价数量</text>
        </view>
        <view class="flex flex-col items-center">
          <text class="text-[40rpx] font-600">99</text>
          <text class="text-[30rpx] color-[#8E8E8E]">旅行社评价数量</text>
        </view>
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/qr.png"></image>
      </view>
    </view>

    <view v-if="role === 3" class="flex flex-col bg-white rounded-xl p-[22px] shadow-md">
      <view class="flex">
        <view class="w-[20%]">
          <image src="@/static/lvava.png" mode="widthFix" class="w-full"></image>
        </view>
        <view class="flex-col gap-[50rpx] w-[70%] ml-[30rpx]">
          <view class="flex justify-between items-center">
            <text class="text-[40rpx] font-600">广之旅</text>
            <view class="flex items-center">
              <wd-icon class="" color="#FF6804" name="note"></wd-icon>
              <wd-tag color="#FF6804" bg-color="#FFE0C7">已实名</wd-tag>
            </view>

          </view>
          <view class="mt-[20rpx]">
            <text class="color-[#8E8E8E]">私营企业 | 100-499人 | 广州市导游协会会员</text>
          </view>
        </view>
      </view>
      <view class="flex items-center gap-4">
        <text v-for="item in 5" class="color-[#3291F8] bg-[rgba(50,145,248,0.1)] p-[10rpx] text-[20rpx] mt-[20rpx]">普通话</text>
      </view>
    </view>


    <view class="mt-[10px]">
      <!-- 卡片容器，使用 flexbox 布局排列 -->
      <view class="flex gap-4">
        <!-- 卡片 1 -->
        <view class="w-[48%] bg-white shadow-md rounded-lg flex p-[10px]">
          <!-- 左边图片 -->
          <view class="w-[40%] flex justify-center items-center">
            <image src="@/static/icon/addGuide.png" mode="widthFix" class=" w-full "></image>
          </view>

          <!-- 右边文字 -->
          <view class="flex flex-col justify-between items-center w-[60%] p-[10px]">
            <text class="text-[28rpx] font-600">注册导游</text>
            <text class="text-[17rpx] color-blueGray">吸引海量游客</text>
          </view>
        </view>

        <!-- 卡片 2 -->
        <view class="w-[48%] bg-white shadow-md rounded-lg flex p-[10px]">
          <!-- 左边图片 -->
          <view class="w-[40%] flex justify-center items-center">
            <image src="@/static/icon/addTravel.png" mode="widthFix" class=" w-full"></image>
          </view>

          <!-- 右边文字 -->
          <view class="flex flex-col justify-between items-center w-[60%] p-[10px]">
            <text class="text-[28rpx] font-600">注册旅行社</text>
            <text class="text-[17rpx] color-blueGray">吸引游客|联系导游</text>
          </view>
        </view>
      </view>
    </view>
    <view v-if="role === 1"
          class="flex justify-around bg-white shadow-md rounded-lg flex p-[10px] mt-[10px] p-[20px] gap-4">
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/collect.png"></image>
        <text>我的收藏</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/note.png"></image>
        <text>个人信息</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/appraise.png"></image>
        <text>我的评价</text>
      </view>
    </view>

    <view v-if="role === 2"
          class="flex justify-around bg-white shadow-md rounded-lg flex p-[10px] mt-[10px] p-[20px] gap-4">
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/collect.png"></image>
        <text>我的收藏</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/note.png"></image>
        <text>简历</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/authentication.png"></image>
        <text>认证</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/appraise.png"></image>
        <text>评价</text>
      </view>
    </view>

    <view v-if="role === 3"
          class="flex justify-around bg-white shadow-md rounded-lg flex p-[10px] mt-[10px] p-[20px] gap-4">
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/collect.png"></image>
        <text>收藏</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/note.png"></image>
        <text>旅行社信息</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/appraise.png"></image>
        <text>我的评价</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <image class="w-[80rpx]" mode="widthFix" src="@/static/icon/bag.png"></image>
        <text>招聘职位</text>
      </view>
    </view>

    <view class="flex flex-col shadow-md rounded-lg p-[10px] mt-[10px] bg-white">
      <view @click="setting()" class="flex justify-between">
        <view class="flex justify-center items-center gap-[5px]">
          <wd-icon name="setting" size="40rpx"></wd-icon>
          <text>账号设置</text>
        </view>
        <wd-icon name="arrow-right" size="40rpx"></wd-icon>
      </view>
      <view class="w-full h-[1px] bg-[#ccc] my-[10px]"></view>
      <view class="flex justify-between">
        <view class="flex justify-center items-center gap-[5px]">
          <wd-icon name="service" size="40rpx"></wd-icon>
          <text>在线客服</text>
        </view>
        <wd-icon name="arrow-right" size="40rpx"></wd-icon>
      </view>
    </view>
  </view>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden; /* 禁止滚动 */
}
</style>

<route lang="json">
{
"layout": "tabbar",
"name": "my",
"style": {
"navigationBarTitleText": "我的"
}
}
</route>
