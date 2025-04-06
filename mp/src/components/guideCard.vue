<script setup lang="ts">
const tabs = ref<Array>(['常规团','散拼团','定制团','团建拓展','长者团'])
</script>

<template>
  <view class="p-4 bg-white shadow-md rounded-lg">
    <view class="flex justify-between ">
      <view class="flex flex-col justify-around w-[65%]">
        <view class="flex items-center justify-between w-[100%]">
          <text class="text-[20px]">陈倩倩</text>
          <text>特级导游</text>
          <view class="flex items-center">
            <wd-icon class="" color="#FF6804" name="note"></wd-icon>
            <wd-tag color="#FF6804" bg-color="#FFE0C7">已实名</wd-tag>
          </view>

        </view>
        <view class="color-blueGray text-[14px] flex items-center justify-between">
          <text>33岁</text>
          <text>15-20年工作经验</text>
          <text>本科学历</text>
        </view>
        <view class="text-[14px] flex items-center gap-[5px]">
          <text>导游星级</text>
          <wd-icon v-for="_ in 5" name="star-on" color="orange"></wd-icon>
        </view>
      </view>
      <view class="w-[23%] h-[23%]">
        <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
      </view>
    </view>
    <view class="flex items-center gap-[5px]">
      <wd-tag class="space" v-for="item in tabs" color="#4B6BD6" bg-color="rgb(75,107,214,0.1)">{{item}}</wd-tag>

<!--      <text v-for="item in 5" class="bg-bluegray bg-opacity-10 text-[14px] color-lightblue">常规团</text>-->
    </view>
    <view class="w-full h-[1px] bg-[#ccc] my-[10px]"></view>
    <view class="flex items-center gap-[15px]">
      <img class="w-[40px] h-[40px]" src="@/static/logo.png" alt="">
      <text>xx旅行社</text>
      <text>AAAAA</text>
      <text>广州</text>
    </view>
  </view>
</template>

<style scoped>
:deep(.space) {
  font-size: 25rpx;
  padding: 5rpx 10rpx;
}
</style>
