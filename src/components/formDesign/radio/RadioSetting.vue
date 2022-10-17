<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-17 10:11:36
 * @FilePath: /low-code/src/components/formDesign/radio/RadioSetting.vue
-->
<template>
  <a-form :model="form" label-align="left" auto-label-width>
    <div class="gapStyle">单选 - 基础配置</div>
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
    <a-form-item field="name" label="默认值">
      <a-input v-model="form.defaultValue" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="排列方式">
      <a-radio-group v-model="form.direction" class="stateStyle" type="button" size="small">
        <a-radio value="horizontal">水平排列</a-radio>
        <a-radio value="vertical">垂直排列</a-radio>
      </a-radio-group>
    </a-form-item>
    <div class="gapStyle">自定义选项</div>
    <section style="padding: 0 16px 12px;">
      <a-radio-group style="width:100%;">
        <a-list size="small" style="margin-bottom: 12px;">
          <a-list-item v-for="item in form.diyList">
            <div>
              <a-radio :value="item.value" />
              <span>{{item.label}}</span>
            </div>
            <template #actions>
              <icon-edit />
              <icon-delete />
            </template>
          </a-list-item>
        </a-list>
      </a-radio-group>
      <a-button type="primary">添加一项</a-button>
    </section>
    <div class="gapStyle">校验</div>
    <a-form-item field="isRead" label="必填" class="rightCom">
      <a-checkbox />
    </a-form-item>
    <a-form-item field="isRead" label="自定义正则" class="rightCom">
      <a-checkbox />
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, inject } from 'vue'
import { comDefine } from '../types'

const form = inject<comDefine>('currentData') || reactive({} as comDefine)

</script>

<style lang="less" scoped>
.gapStyle {
  width: 100%;
  height: 32px;
  background: #f5f6f7;
  line-height: 32px;
  padding: 0 16px;
  margin-bottom: 12px;
}
/deep/.arco-form-item {
  padding: 0 16px;
  margin-bottom: 16px;
}
.stateStyle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /deep/.arco-radio-button-content{
    padding: 0 8px!important;
  }
}
.rightCom {
  /deep/.arco-form-item-content-flex{
    justify-content: flex-end;
  }
}
</style>