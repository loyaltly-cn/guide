<script setup lang="ts">

function wechatLogin() {
  const role = uni.getStorageSync('role')
  if (!role) {
    uni.navigateTo({
      url: '/pages/login/role',
    })
  } else {
    uni.setStorageSync('token', '123')
    uni.switchTab({
      url: '/pages/index',
    })
  }
}

const codeLogin = () => {
  uni.navigateTo({
    url: 'codeLogin',
  })
}

function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-navbar fixed
             placeholder
             title="微信登录"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>
  <view class="p-[18px] flex flex-col items-center">
    <view>
      <image src="@/static/guangzhou.png"></image>
    </view>
    <button class="bg-green-500 text-white w-full p-[8rpx] rounded-full my-[40rpx]" @click="wechatLogin">
      <view class="flex items-center justify-center">
        <image src="@/static/icon/wechat.png" class="w-6 h-6 mr-2"/>
        微信授权登录
      </view>
    </button>


    <view class="">
      <text class="color-[#8E8E8E] text-[30rpx]">未登录用户初次登录自动完成注册，登录代表您已同意
        <text class="color-blue">用户协议、隐私协议</text>
      </text>

    </view>
    <view class="absolute bottom-[80rpx] mx-auto">
      <view class="flex flex-col items-center">
        <view class="text-center">
          <text class="color-[#8E8E8E] text-[35rpx]">其他登录方式</text>
        </view>
        <image @click="codeLogin" src="@/static/icon/phone.png" class="w-150rpx" mode="widthFix"></image>
        <text class="font-900">验证码登录</text>
      </view>
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
