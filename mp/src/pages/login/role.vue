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
const role = ref<string>() // 初始为空，默认无选中

function selectRole(selected: string) {
  role.value = selected
}

function subbit() {
  switch (role.value) {
    case '游客':
      uni.setStorageSync('role', 1)
      break
    case '导游':
      uni.setStorageSync('role', 2)
      break
    case '旅行社':
      uni.setStorageSync('role', 3)
      break
  }
  uni.setStorageSync('token', '123')
  uni.switchTab({
    url: '/pages/index',
  })
}
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-navbar fixed
             placeholder
             title="选择身份"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>
  <view class="flex flex-col justify-center h-[80vh] gap-8">
    <view class="flex justify-around items-center">
      <image mode="widthFix" class="w-[140rpx]" src="@/static/visitor.png"></image>
      <view @click="selectRole('游客')" :class="role === '游客' ? 'border-b-black' : ''"
            class="w-[35%] flex justify-around items-center shadow-md rounded-lg p-[30rpx] gap-4">
        <wd-icon color="#8E8E93" name="user-circle" size="80rpx"></wd-icon>
        <text>游客</text>
      </view>
    </view>
    <view class="flex justify-around items-center">
      <image mode="widthFix" class="w-[140rpx]" src="@/static/guide.png"></image>
      <view @click="selectRole('导游')"
            class="w-[35%] flex justify-around items-center shadow-md rounded-lg p-[30rpx] gap-3">
        <wd-icon color="#8E8E93" name="flag" size="80rpx"></wd-icon>
        <text>导游</text>
      </view>
    </view>
    <view class="flex justify-around items-center">
      <image mode="widthFix" class="w-[140rpx]" src="@/static/travel.png"></image>
      <view @click="selectRole('旅行社')"
            class="w-[35%] flex justify-around items-center shadow-md rounded-lg p-[30rpx] gap-3">
        <wd-icon color="#8E8E93" name="home" size="80rpx"></wd-icon>
        <text>旅行社</text>
      </view>
    </view>
  </view>
  <view class="text-align-center">
    <text class="color-#3164EF">您当前选择的身份是 “{{ role }}”</text>
  </view>
  <wd-button @click="subbit" block class="mt-40rpx">下一步</wd-button>
</template>

<style></style>

<route type="role" lang="json">
{
"name": "role"

}
</route>
