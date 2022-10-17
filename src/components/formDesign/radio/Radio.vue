<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-17 10:34:50
 * @FilePath: /low-code/src/components/formDesign/radio/Radio.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <a-radio-group v-model="comData.defaultValue" :direction="comData.direction">
      <a-radio v-for="item in comData.diyList" :value="item.value">{{item.label}}</a-radio>
    </a-radio-group>
  </a-form-item>
</template>
<script setup lang="ts">
import { comDefine } from '../types'
interface Props {
  comData: comDefine
}

const { comData } = defineProps<Props>()

</script>