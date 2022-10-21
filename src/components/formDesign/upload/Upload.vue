<!--
 * @Author: yhl
 * @Date: 2022-10-21 10:39:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 20:52:00
 * @FilePath: /low-code/src/components/formDesign/upload/Upload.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <template v-else>
        <a-upload action="/" :disabled="comData.state === 'F'" :draggable="comData.uploadType === 'drag'" :multiple="comData.multiple" :limit="comData.limit" :accept="comData.fileTypes" />
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

</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>