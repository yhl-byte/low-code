<!--
 * @Author: yhl
 * @Date: 2022-10-21 10:39:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 16:02:10
 * @FilePath: /low-code/src/components/formDesign/selectMultiple/SelectMultiple.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-select v-else v-model="comData.defaultValue" :placeholder="comData.placeholder" :allow-clear="comData.clearable" :disabled="comData.state === 'F'" :allow-searc="comData.filterable" multiple>
        <a-option v-for="item in comData.diyList" :value="item.value">{{item.label}}</a-option>
      </a-select>
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