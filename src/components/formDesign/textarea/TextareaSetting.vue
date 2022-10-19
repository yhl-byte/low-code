<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:08:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 14:13:33
 * @FilePath: /low-code/src/components/formDesign/textarea/TextareaSetting.vue
-->
<template>
  <a-form :model="form" label-align="left" auto-label-width>
    <div class="gapStyle">多行文本 - 基础配置</div>
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
      <a-radio-group  v-model="form.state" class="stateStyle" type="button" size="small">
        <a-radio value="N">普通</a-radio>
        <a-radio value="F">禁用</a-radio>
        <a-radio value="R">只读</a-radio>
        <a-radio value="H">隐藏</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item field="name" label="默认值">
      <a-input v-model="form.defaultValue" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="name" label="文本高度">
      <a-input-number v-model="form.maxRows" placeholder="Please Enter" class="input-demo" :min="1" :max="100"/>
    </a-form-item>
    <a-form-item field="name" label="自适应高度" class="rightCom">
      <a-switch v-model="form.autoSize" />
    </a-form-item>
    <a-form-item field="name" label="显示计数器" class="rightCom">
      <a-switch v-model="form.showlimit" />
    </a-form-item>
    <a-form-item field="name" label="字数上限">
      <a-input-number v-model="form.maxLength" placeholder="Please Enter" class="input-demo" :min="1" :max="1000"/>
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