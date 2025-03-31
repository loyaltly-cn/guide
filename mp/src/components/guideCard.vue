<script setup lang="ts">

</script>

<template>
  <view class="p-4 bg-white rounded-lg">
    <view class="flex justify-between ">
      <view class="flex flex-col justify-around w-[65%]">
        <view class="flex items-center justify-between w-[100%]">
          <text class="text-[20px]">陈倩倩</text>
          <text>特级导游</text>
          <view>
            <wd-icon class="" name="note"></wd-icon>
            <text class="text-[14px]">已实名</text>
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
<!--        <img class="w-full rounded-full object-cover" src="@/static/ava.jpg" alt="">-->
        <image src="@/static/ava.jpg" mode="widthFix" class="rounded-full w-full"></image>
      </view>
    </view>
    <view class="flex items-center gap-[5px]">
      <text v-for="item in 5" class="bg-bluegray bg-opacity-10 text-[14px] color-lightblue">常规团</text>
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

</style>
