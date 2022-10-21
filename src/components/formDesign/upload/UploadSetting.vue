<!--
 * @Author: yhl
 * @Date: 2022-10-21 14:57:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 20:51:47
 * @FilePath: /low-code/src/components/formDesign/upload/UploadSetting.vue
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
    <div class="gapStyle">上传详情设置</div>
    <a-form-item field="post" label="上传类型">
      <a-radio-group v-model="form.uploadType" type="button" size="small">
        <a-radio value="click">点击</a-radio>
        <a-radio value="drag">拖拽</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item field="post" label="允许多选" class="rightCom">
      <a-switch v-model="form.multiple" />
    </a-form-item>
    <a-form-item field="post" label="最大个数">
      <a-input-number v-model="form.limit" placeholder="请输入" />
    </a-form-item>
    <a-form-item field="post" label="大小限制">
      <a-input-number v-model="form.maxSize" placeholder="请输入" />
    </a-form-item>
    <a-form-item field="post" label="文件类型">
      <a-input v-model="form.fileTypes" placeholder="如.doc,.docx" allow-clear />
    </a-form-item>
    <div class="gapStyle">校验</div>
    <a-form-item field="isRead" label="必填" class="rightCom">
      <a-checkbox />
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue'
import { comDefine } from '../types'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

const form = inject<Ref<comDefine>>('currentData', ref({} as comDefine))

</script>

<style lang="less" scoped>
@import "../../../style/FormDesign.less";
</style>