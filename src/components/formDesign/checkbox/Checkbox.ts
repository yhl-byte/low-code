/*
 * @Author: yhl
 * @Date: 2022-10-19 17:20:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 17:46:07
 * @FilePath: /low-code/src/components/formDesign/checkbox/Checkbox.ts
 */
import { option } from '../types'
class Checkbox {
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
  direction: string; // 单选框组的方向
  max: number | undefined; // 支持最多选中的数量
  diyList:  Array<option>;
  constructor () {
    this.type = 'Checkbox'
    this.icon = 'icon-robot'
    this.label = '复选'
    this.sort = 5
    this.group = 'base'
    this.title = '复选'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.defaultValue = []
    this.isRequired = false
    this.direction = 'horizontal'
    this.max = undefined
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



export default Checkbox