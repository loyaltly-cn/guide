<script setup lang="ts">
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-navbar fixed
             placeholder
             title="AI找导游"
             safeAreaInsetTop
             left-text="返回"
             left-arrow
             @click-left="handleClickLeft"
  ></wd-navbar>
  <view>
    <text>导游需求</text>
    <wd-textarea v-model="value" placeholder="请输入您对导游的需求（如：请帮我推荐一位熟悉广东省博物馆的中级以上的女导游，最好是讲解水平比较高、服务态度比较好，信用分高）" />
  </view>

  <view>
    <text>基于AI的推理过程</text>
    <wd-textarea v-model="value" placeholder="来自GPT-04或deepseek R1大模型的推理过程"/>
  </view>

  <view>
    <text>导游推荐结果</text>
    <wd-textarea v-model="value" placeholder=""/>
  </view>

  <wd-button block>AI推荐导游</wd-button>
</template>

<style scoped>

</style>
<route>
{
"style": {
"navigationBarTitleText": "评价导游"
}
}
</route>
