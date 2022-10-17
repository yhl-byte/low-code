<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-17 19:02:49
 * @FilePath: /low-code/src/components/formDesign/radio/Radio.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="(comData.state !== 'H'&&!isDesign) || isDesign" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-radio-group v-else v-model="comData.defaultValue" :direction="comData.direction" :disabled="comData.state === 'F'">
        <a-radio v-for="item in comData.diyList" :value="item.value">{{item.label}}</a-radio>
      </a-radio-group>
    </section>
  </a-form-item>
</template>
<script setup lang="ts">
import { comDefine } from '../types'
interface Props {
  comData: comDefine
}

const { comData } = defineProps<Props>()

const isDesign = true
</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>