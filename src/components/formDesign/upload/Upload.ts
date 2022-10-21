/*
 * @Author: yhl
 * @Date: 2022-10-21 19:55:14
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 20:52:16
 * @FilePath: /low-code/src/components/formDesign/upload/Upload.ts
 */
class Upload {
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
  isRequired: boolean; // 是否必填
  uploadType: string; // 上传类型
  multiple: boolean; // 是否支持上传多选
  limit: number; // 文件最大上传数量
  maxSize: number; // 单文件最大上传大小(MB)
  fileTypes: string; // 上传文件类型
  constructor () {
    this.type = 'Upload'
    this.icon = 'icon-robot'
    this.label = '附件'
    this.sort = 10
    this.group = 'base'
    this.title = '附件'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.isRequired = false
    this.uploadType = 'click'
    this.multiple = false
    this.limit = 9
    this.maxSize = 10
    this.fileTypes = ''
  }
}

export default Upload