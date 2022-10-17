/*
 * @Author: yhl
 * @Date: 2022-10-10 11:33:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-17 10:10:09
 * @FilePath: /low-code/src/components/formDesign/types.ts
 */
export interface comDefine{
  type: string; // 组件类型
  icon: string; // 组件展示ICON
  label: string; // 组件名称
  /** 组件的可配置属性 */
  title: string; // 组件在表单中的标题
  itemId: string; // 该组件的唯一ID，在添加之后生成
  alias: string; // 组件的别名，用于第三方调用获取对应组件信息
  desc: string; // 组件描述，显示在组件下方
  state: string; // 组件状态（N - 常规； R - 只读； H - 隐藏； F - 禁用）
  placeholder?: string; // 输入提示信息
  clearable?: boolean; // 是否可清空
  filterable?: boolean; // 是否可搜索
  defaultValue?: string; // 默认值
  isRequired?: boolean; // 是否必填
  showlimit?: boolean; // 是否显示字数统计
  maxLength?: number; // 最大输入长度
  autoSize?: boolean; //自动高度
  maxRows?: number; // 文本域最大高度
  direction?: "horizontal" | "vertical" | undefined; // 单选框组的方向
  diyList?: Array<option>; //单选框自定义选项
}

export interface menuItem {
  id: string,
  icon: string,
  title: string
}

export interface option {
  value: string | number,
  label: string | number,
  isDefault: boolean
}

export interface comCollections {
  [key:string]: any
}