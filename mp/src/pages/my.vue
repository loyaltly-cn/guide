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
</script>

<template>
  <view class="bg-[rgba(234,244,254)] p-[18px] h-[87vh]">
    <view class="bg-white rounded-xl flex p-[22px]">
      <view class="w-[20%]">
        <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
      </view>
      <view class="flex-col">
        <view class="">
          <text>游客1</text>
          <text>已实名</text>
          <text>实名认证</text>
        </view>
        <view>
          <text>广东广州/33岁/建筑设计师</text>
        </view>
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
            <text class="text-[16px]">注册导游</text>
            <text class="text-[10px] color-blueGray">吸引海量游客</text>
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
            <text class="text-[16px]">注册旅行社</text>
            <text class="text-[10px] color-blueGray">吸引游客|联系导游</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex justify-around bg-white shadow-md rounded-lg flex p-[10px] mt-[10px] p-[20px] gap-4">
      <view class="flex flex-col justify-between items-center">
        <wd-icon name="subscribe" size="40px" color="#0083ff"></wd-icon>
        <text>我的收藏</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <wd-icon name="note" size="40px" color="#0083ff"></wd-icon>
        <text>个人信息</text>
      </view>
      <view class="flex flex-col justify-between items-center">
        <wd-icon name="thumb-up" size="40px" color="#0083ff"></wd-icon>
        <text>我的评价</text>
      </view>



    </view>
    <view class="flex flex-col shadow-md rounded-lg p-[10px] mt-[10px] bg-white">
      <view class="flex justify-between">
        <view class="flex justify-center items-center gap-[5px]">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text>账号设置</text>
        </view>
        <wd-icon name="arrow-right" size="22px"></wd-icon>
      </view>
      <view class="w-full h-[1px] bg-[#ccc] my-[10px]"></view>
      <view class="flex justify-between">
        <view class="flex justify-center items-center gap-[5px]">
          <wd-icon name="service" size="22px"></wd-icon>
          <text>在线客服</text>
        </view>
        <wd-icon name="arrow-right" size="22px"></wd-icon>
      </view>
    </view>
  </view>
</template>

<route lang="json">
{
"layout": "tabbar",
"name": "my",
"style": {
"navigationBarTitleText": "我的"
}
}
</route>
