<!--
 * @Author: yhl
 * @Date: 2022-10-21 10:39:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 17:39:35
 * @FilePath: /low-code/src/components/formDesign/dateRange/DateRange.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <template v-else>
        <a-range-picker v-model="comData.defaultValue" :mode="comData.rangeMode" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" :show-time="comData.pickMode.indexOf('YYYY') > -1" :format="format" :disabledDate="disabledDate()" />
      </template>
    </section>
    <template #extra v-if="isHidden" >
      <div>{{comData.desc}}</div>
    </template>
  </a-form-item>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { comDefine } from '../types'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)
interface Props {
  comData: comDefine,
  isDesign?: boolean
}
const { comData, isDesign = false } = defineProps<Props>()

// 判断是否隐藏状态
const isHidden = computed(() => !(comData.state === 'H' && !isDesign))

// 限制时间方案
const disabledDate = () => {
  let reslut = undefined
  switch (comData.pickLimit) {
    case 'afterToday': 
      reslut = (current:any) => dayjs(current).isAfter(dayjs())
      break
    case 'beforeToday':
      reslut = (current:any) => dayjs(current).isBefore(dayjs())
      break
    case 'rang':
      reslut = (current:any) => dayjs(current).isBetween(dayjs(comData.disableRang[0]), dayjs(comData.disableRang[1]))
      break
    default :
      reslut = undefined
  }
  return reslut
}

const format = () => comData.pickMode.indexOf('YYYY') > -1 ? comData.pickMode : undefined

</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>