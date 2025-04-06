<script setup lang="ts">
const phone = ref<string>('17311233131')
const value = ref<string>('')
const showKeyboard = ref<boolean>(true)
const role = uni.getStorageSync('role')
function handleClickLeft() {
  uni.navigateBack()
}

watch(value, (newVal) => {
  if (newVal.length === 4) {
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
})
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
  <view class=" p-[67rpx] text-align-center ">
    <view>
      <text class="color-[#2C65F7] text-[20px]">请输入验证码</text>
    </view>

    <view class="mt-8">
      <text class="text-[14px]">验证码已发送至{{ phone }}</text>
    </view>

    <wd-number-keyboard v-model="value" v-model:visible="showKeyboard" :maxlength="4" @blur="showKeyboard = false"/>
    <view class="input-pass mt-12">
      <wd-password-input
        v-model="value"
        :focused="showKeyboard"
        :length="4"
        gutter="30"
        @focus="showKeyboard = true"
        class="custom-password-input"
      />
    </view>
    <view class="mt-8">
      <text class="color-[#0F7AEF]">重发短信验证码</text>
    </view>

    <text>59s后可重新获取</text>

  </view>
</template>

<style scoped>
/* Vue 3 适用 */
:deep(.wd-password-input__item) {
  border: 1px solid #BBBBBB;
  width: 100%;
  aspect-ratio: 1;
}
</style>

<route type="login" lang="json">
{
"name": "editLogin"
}
</route>
