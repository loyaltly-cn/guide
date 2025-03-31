<script setup lang="ts">

function wechatLogin() {
  uni.switchTab({
    url: '/pages/index',
  })
}

const codeLogin = () => {
  uni.navigateTo({
    url: 'codeLogin',
  })
}
</script>

<template>
  <view class="p-[18px] flex flex-col h-[95vh]">

    <button class="bg-green-500 text-white w-full mb-4 p-[11px] rounded-full" @click="wechatLogin">
      <view class="flex items-center justify-center">
        <image src="@/static/icon/wechat.png" class="w-6 h-6 mr-2"/>
        微信授权登录
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
      <img @click="codeLogin" class="h-[30%]" src="@/static/icon/phone.png" alt="">
      <text>验证码登录</text>
    </view>
  </view>
</template>

<style scoped>

</style>
<route type="" lang="json">
{
"name": "wechatLogin"

}
</route>
