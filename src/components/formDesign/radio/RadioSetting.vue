<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-10 16:27:25
 * @FilePath: /low-code/src/components/formDesign/radio/RadioSetting.vue
-->
<template>
  单选
  <a-form :model="form">
    <a-form-item field="name" label="标题">
      <a-input placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="占位提示">
      <a-input placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="isRead">
      <a-checkbox>
        I have read the manual
      </a-checkbox>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
  name: '',
  post: '',
  isRead: false,
})

</script>