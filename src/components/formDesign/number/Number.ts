/*
 * @Author: yhl
 * @Date: 2022-10-19 15:41:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 17:50:29
 * @FilePath: /low-code/src/components/formDesign/number/Number.ts
 */
class Number {
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
  placeholder: string; // 输入提示信息
  clearable: boolean; // 是否可清空
  defaultValue: number|null|undefined; // 默认值
  isRequired: boolean; // 是否必填
  step: number; // 数字变化步长
  hideButton: boolean; // 是否隐藏按钮
  precision: number; // 数字精度
  thousandSeparator: boolean; // 是否千分位分隔
  constructor () {
    this.type = 'Number'
    this.icon = 'icon-robot'
    this.label = '数值'
    this.sort = 1
    this.group = 'base'
    this.title = '数值'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.placeholder = '请输入'
    this.clearable = false
    this.defaultValue = undefined
    this.isRequired = false
    this.step = 1
    this.hideButton = false
    this.precision = 0
    this.thousandSeparator = false
  }
}



export default Number