<!--
 * @Author: yhl
 * @Date: 2022-10-09 17:34:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 15:26:31
 * @FilePath: /low-code/src/components/formDesign/text/text.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-input v-else v-model="comData.defaultValue" :placeholder="comData.placeholder" :allow-clear="comData.clearable" :show-word-limit="comData.showlimit" :max-length="comData.maxLength" :disabled="comData.state === 'F'" />
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