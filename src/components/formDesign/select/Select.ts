/*
 * @Author: yhl
 * @Date: 2022-10-10 14:39:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 17:46:15
 * @FilePath: /low-code/src/components/formDesign/select/Select.ts
 */

import { option } from '../types'
class Select {
  type: string; // 组件类型
  icon: string; // 组件展示ICON
  label: string; // 组件名称
  sort: number; // 组件排序
  group: string; // 组件分组
  /** 组件的可配置属性 */
  title: string; // 组件在表单中的标题
  itemId: string; // 该组件的唯一ID，在添加之后生成
  alias: string; // 组件的别名，用于第三方调用获取对应组件信息
  desc: string; // 组件描述，显示在组件下方
  state: string; // 组件状态（N - 常规； R - 只读； H - 隐藏； F - 禁用）
  defaultValue: any; // 默认值
  isRequired: boolean; // 是否必填
  placeholder: string; // 输入提示信息
  clearable: boolean; // 是否可清空
  filterable: boolean; // 是否可搜索
  diyList: Array<option>;
  constructor () {
    this.type = 'Select'
    this.icon = 'icon-robot'
    this.label = '下拉单选'
    this.sort = 6
    this.group = 'base'
    this.title = '下拉单选'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.defaultValue = undefined
    this.isRequired = false
    this.placeholder = '请选择'
    this.clearable = false
    this.filterable = false
    this.diyList = [{
      value: '1',
      label: '选项一',
      isDefault: false
    },{
      value: '2',
      label: '选项二',
      isDefault: false
    },{
      value: '3',
      label: '选项三',
      isDefault: false
    }]
  }
}

export default Select