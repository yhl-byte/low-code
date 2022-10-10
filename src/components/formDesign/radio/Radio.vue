<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-10 14:42:59
 * @FilePath: /low-code/src/components/formDesign/radio/Radio.vue
-->
<template>
  <a-form-item field="name" label="标题">
    <a-radio-group v-model="value2" :options="options" />
  </a-form-item>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const value2 = ref('1')
const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
  { label: 'option 3', value: '3', disabled: true },
]
</script>