<script setup lang="ts">
const wechatLogin = () => {
  uni.navigateTo({
    url: 'wechatLogin',
  })
}
const code = () => {
  uni.navigateTo({
    url: 'editCode',
  })
}
</script>

<template>
  <wd-navbar fixed
             placeholder
             title="验证码登录"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>
  <view class="p-[18px] flex flex-col h-[95vh]">
    <text class="text-[28px] font-bold">验证码登录</text>
    <wd-input type="text" v-model="value" placeholder="请输入用户名" @change="handleChange"/>
    <button class="bg-blue-500 text-white w-full mb-4 rounded-full" @click="code">
      <view class="flex items-center justify-center">
        确认
      </view>
    </button>
    <view class="text-center text-gray-600 mb-4">
      <text class="block">未登录用户，初次登录自动完成注册</text>
      <text class="block">登录代表您已同意
        <text class="text-blue-500">用户协议</text>
        和
        <text class="text-blue-500">隐私协议</text>
      </text>
    </view>
    <view class="flex flex-col items-center mt-auto">
      <view class="text-center">
        <text class="text-gray-600">其他登录方式</text>
      </view>
      <img @click="wechatLogin" class="h-[20%]" src="@/static/icon/wechat-g.png" alt="">
      <text>微信登录</text>
    </view>
  </view>
</template>

<style scoped>

</style>
<route type="login" lang="json">
{
"name": "codeLogin"
}
</route>
