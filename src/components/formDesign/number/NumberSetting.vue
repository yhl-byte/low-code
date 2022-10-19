<!--
 * @Author: yhl
 * @Date: 2022-10-19 15:42:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 17:17:23
 * @FilePath: /low-code/src/components/formDesign/number/NumberSetting.vue
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
      <a-input-number v-model="form.defaultValue" placeholder="请输入" class="input-demo" />
    </a-form-item>
    <a-form-item field="name" label="清除按钮" class="rightCom">
      <a-switch v-model="form.clearable" />
    </a-form-item>
    <a-form-item field="name" label="隐藏按钮" class="rightCom">
      <a-switch v-model="form.hideButton" />
    </a-form-item>
    <a-form-item v-if="!form.hideButton" field="name" label="步长">
      <a-input-number v-model="form.step" placeholder="Please Enter" class="input-demo" :min="1" :max="10000"/>
    </a-form-item>
    <a-form-item field="name" label="小数位数">
      <a-input-number v-model="form.precision" placeholder="Please Enter" class="input-demo" :min="0" :max="20"/>
    </a-form-item>
    <a-form-item field="name" label="千位分隔" class="rightCom">
      <a-switch v-model="form.thousandSeparator" />
    </a-form-item>
    <div class="gapStyle">校验</div>
    <a-form-item field="isRead" label="必填" class="rightCom">
      <a-checkbox />
    </a-form-item>
    <a-form-item field="isRead" label="最大长度" class="rightCom">
      <a-checkbox />
    </a-form-item>
    <a-form-item field="isRead" label="最小长度" class="rightCom">
      <a-checkbox />
    </a-form-item>
    <a-form-item field="isRead" label="自定义正则" class="rightCom">
      <a-checkbox />
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue'
import { comDefine } from '../types'

const form = inject<Ref<comDefine>>('currentData', ref({} as comDefine))

</script>

<style lang="less" scoped>
@import "../../../style/FormDesign.less";
</style>