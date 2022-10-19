<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 11:22:22
 * @FilePath: /low-code/src/components/formDesign/radio/Radio.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-radio-group v-else v-model="comData.defaultValue" :direction="comData.direction" :disabled="comData.state === 'F'">
        <a-radio v-for="item in comData.diyList" :value="item.value">{{item.label}}</a-radio>
      </a-radio-group>
    </section>
    <template #extra v-if="isHidden" >
      <div>{{comData.desc}}</div>
    </template>
  </a-form-item>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { comDefine } from '../types'
interface Props {
  comData: comDefine
}

const { comData } = defineProps<Props>()
// 判断是否隐藏状态
const isHidden = computed(() => (comData.state !== 'H'&&!isDesign) || isDesign)
const isDesign = true
</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>