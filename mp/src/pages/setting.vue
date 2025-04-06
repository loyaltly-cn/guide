<script setup lang="ts">
const phone = ref<string>('173****3333')
const role = ref<number>(1)
const show = ref<boolean>(false)

const roleMap: Record<number, string> = {
  1: '游客',
  2: '导游',
  3: '旅行社',
}
const roleLabel = computed(() => roleMap[role.value])
const switchableRoles = computed(() =>
  Object.entries(roleMap)
    .filter(([key]) => Number(key) !== role.value)
    .map(([key, value]) => ({value: Number(key), label: value})),
)

function changeRole(val: number) {
  uni.setStorageSync('role', val)
  role.value = val
  show.value = false
}

onMounted(() => {
  console.log(uni.getStorageSync('role'))
  role.value = Number(uni.getStorageSync('role'))
  console.log(role.value)
})

function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-popup v-model="show" custom-style="border-radius:32rpx;">
    <view class="w-[500rpx] p-[50rpx] flex flex-col items-center">

      <view class="text-[35rpx] font-500">当前身份：{{ roleLabel }}</view>

      <view class="flex items-center">
        <text class="mt-[80rpx]">可切换当前身份</text>
        <image class="w-[200rpx]" mode="widthFix" src="@/static/icon/switchRole.png"></image>
      </view>
      <view class="w-[400rpx] text-align-center mt-[20rpx]" v-for="item in switchableRoles">
        <wd-button
          plain
          block
          :key="item.value"
          class="w-[300rpx]"
          @click="changeRole(item.value)"
        >
          {{ item.label }}
        </wd-button>
      </view>
    </view>
  </wd-popup>
  <wd-navbar fixed
             placeholder
             title="账号设置"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>

  <view class="flex items-center justify-between bg-white mx-[-50rpx] p-[35rpx]">
    <text>手机号</text>
    <view class="flex items-center">
      <text>(已绑定){{ phone }}</text>
      <wd-icon name="arrow-right" size="40rpx"></wd-icon>
    </view>
  </view>
  <view @click="show = true" class="flex items-center justify-between bg-white mx-[-50rpx] p-[35rpx] mt-[20rpx]">
    <text>切换身份</text>
    <view class="flex items-center">
      <text>
        当前身份：{{ roleLabel }}
      </text>
      <wd-icon name="arrow-right" size="40rpx"></wd-icon>
    </view>
  </view>
</template>

<style scoped>

</style>
<route lang="json">
{
"name": "setting",
"style": {
"navigationBarTitleText": "设置"
}
}
</route>
