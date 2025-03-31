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

</script>

<template>
  <wd-search hide-cancel custom-input-class=""/>
  <view class="bg-[rgba(234,244,254)] p-[15px]">

    <wd-swiper :list="swiperList" autoplay v-model:current="current" :indicator="{ type: 'dots-bar' }"
               @click="handleClick" @change="onChange"></wd-swiper>

    <view class="flex justify-between">
      <text>推荐导游</text>
      <text class="color-lightblue">查看更多导游</text>
    </view>
    <view v-for="item in 5" class="mt-[20px]">
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
