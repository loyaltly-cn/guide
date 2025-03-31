<script setup lang="ts">
import { ref } from 'vue'

// 定义验证码的绑定变量
const code1 = ref<string>('')
const code2 = ref<string>('')
const code3 = ref<string>('')
const code4 = ref<string>('')

// 状态判断验证码是否正在发送
const isCodeSending = ref<boolean>(false)

// 获取验证码的函数
function getVerificationCode() {
  isCodeSending.value = true
  setTimeout(() => {
    isCodeSending.value = false
    // 这里是模拟发送验证码的逻辑
    console.log('验证码已发送')
  }, 2000)
}

// 焦点自动切换到下一个框
function focusNext(index: number) {
  if (index < 4 && (index === 1 ? code1.value.length === 1 : index === 2 ? code2.value.length === 1 : index === 3 ? code3.value.length === 1 : false)) {
    const nextInput = `code${index + 1}Ref` as keyof typeof refs
    const refElement = (window as any).refs[nextInput][0]
    if (refElement) {
      refElement.focus()
    }
  }
}
</script>

<template>
  <view class="p-4">
    <!-- 四个框的验证码输入 -->
    <view class="mb-4 w-full flex justify-between">
      <wd-input
        ref="code1Ref"
        v-model="code1"
        class="input-box"
        :maxlength="1"
        type="number"
        input-align="center"
        clearable
        @input="focusNext(1)"
      />
      <wd-input
        ref="code2Ref"
        v-model="code2"
        class="input-box"
        :maxlength="1"
        type="number"
        input-align="center"
        clearable
        @input="focusNext(2)"
      />
      <wd-input
        ref="code3Ref"
        v-model="code3"
        class="input-box"
        :maxlength="1"
        type="number"
        input-align="center"
        clearable
        @input="focusNext(3)"
      />
      <wd-input
        ref="code4Ref"
        v-model="code4"
        class="input-box"
        :maxlength="1"
        type="number"
        input-align="center"
        clearable
        @input="focusNext(4)"
      />
    </view>

    <!-- 获取验证码按钮 -->
    <wd-button class="w-full" :disabled="isCodeSending" @click="getVerificationCode">
      {{ isCodeSending ? '发送中...' : '获取验证码' }}
    </wd-button>
  </view>
</template>

<style scoped>
/* 四个验证码输入框的样式 */
.input-box {
  width: 20%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  margin-right: 10px;
}

.w-full {
  width: 100%;
}

.mb-4 {
  margin-bottom: 16px;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.ml-2 {
  margin-left: 8px;
}
</style>

<route type="login" lang="json">
{
"name": "editLogin"
}
</route>
