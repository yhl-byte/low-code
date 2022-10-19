<!--
 * @Author: yhl
 * @Date: 2022-10-19 17:20:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 17:47:25
 * @FilePath: /low-code/src/components/formDesign/checkbox/Checkbox.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue.length ? comData.defaultValue.join(',') : '--' }}</div>
      <a-checkbox-group v-else v-model="comData.defaultValue" :direction="comData.direction" :disabled="comData.state === 'F'" :max="comData.max">
        <a-checkbox v-for="item in comData.diyList" :value="item.value">{{item.label}}</a-checkbox>
      </a-checkbox-group>
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
  comData: comDefine,
  isDesign?: boolean
}
const { comData, isDesign = false } = defineProps<Props>()

// 判断是否隐藏状态
const isHidden = computed(() => !(comData.state === 'H' && !isDesign))

</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>