<!--
 * @Author: yhl
 * @Date: 2022-10-21 14:57:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 16:43:41
 * @FilePath: /low-code/src/components/formDesign/datePicker/DatePickerSetting.vue
-->
<template>
  <a-form :model="form" label-align="left" auto-label-width>
    <div class="gapStyle">{{form.label}} - 基础配置</div>
    <a-form-item field="name" label="标题">
      <a-input v-model="form.title" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="别名">
      <a-input v-model="form.alias" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="占位提示">
      <a-input v-model="form.placeholder" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="描述信息">
      <a-input v-model="form.desc" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="状态">
      <a-radio-group v-model="form.state" class="stateStyle" type="button" size="small">
        <a-radio value="N">普通</a-radio>
        <a-radio value="F">禁用</a-radio>
        <a-radio value="R">只读</a-radio>
        <a-radio value="H">隐藏</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item field="name" label="默认值">
      <a-date-picker v-if="whichMode('YYYY')" v-model="form.defaultValue" placeholder="请选择" :format="form.pickMode" allow-clear />
      <a-date-picker v-if="whichMode('date')" v-model="form.defaultValue" placeholder="请选择"  allow-clear />
      <a-month-picker v-if="whichMode('month')" v-model="form.defaultValue" placeholder="请选择"  allow-clear />
      <a-year-picker v-if="whichMode('year')" v-model="form.defaultValue" placeholder="请选择"  allow-clear />
      <a-quarter-picker v-if="whichMode('quarter')" v-model="form.defaultValue" placeholder="请选择"  allow-clear />
      <a-week-picker v-if="whichMode('week')" v-model="form.defaultValue" placeholder="请选择"  allow-clear />
    </a-form-item>
    <a-form-item field="post" label="格式">
      <a-select v-model="form.pickMode">
        <a-option v-for="item in formatList" :value="item.value">{{item.label}}</a-option>
      </a-select>
    </a-form-item>
    <a-form-item field="post" label="清空按钮" class="rightCom">
      <a-switch v-model="form.clearable" />
    </a-form-item>
    <a-form-item field="post" label="限制条件">
      <a-select v-model="form.pickLimit">
        <a-option v-for="item in limitList" :value="item.value">{{item.label}}</a-option>
      </a-select>
    </a-form-item>
    <a-form-item v-if="form.pickLimit === 'rang'" field="post" label="起止时间">
      <a-range-picker v-model="form.disableRang" />
    </a-form-item>
    <div class="gapStyle">校验</div>
    <a-form-item field="isRead" label="必填" class="rightCom">
      <a-checkbox />
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue'
import { comDefine, comCollections } from '../types'

const form = inject<Ref<comDefine>>('currentData', ref({} as comDefine))

// 格式选项
const formatList:Array<comCollections> = [
  {
    label: '年',
    value: 'year'
  },
  {
    label: '年-月',
    value: 'month'
  },
  {
    label: '年-月-日',
    value: 'date'
  },
  {
    label: '年-月-日 时:分',
    value: 'YYYY-MM-DD hh:mm'
  },
  {
    label: '年-月-日 时:分秒',
    value: 'YYYY-MM-DD HH:mm:ss'
  },
  {
    label: '季度',
    value: 'quarter'
  },
  {
    label: '周',
    value: 'week'
  },
]

// 可选限制选项
const limitList:Array<comCollections> = [
  {
    label: '无限制',
    value: 'none'
  },
  {
    label: '不可选今天之后',
    value: 'afterToday'
  },
  {
    label: '不可选今天之前',
    value: 'beforeToday'
  },
  {
    label: '不可选区间',
    value: 'rang'
  }
]

// 判断当前展示哪个组件
const whichMode = (mode:string):boolean => form.value.pickMode.indexOf(mode) > -1

</script>

<style lang="less" scoped>
@import "../../../style/FormDesign.less";
</style>