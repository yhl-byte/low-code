/*
 * @Author: yhl
 * @Date: 2022-10-10 10:13:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-19 13:59:45
 * @FilePath: /low-code/src/components/formDesign/config.ts
 */
import { defineAsyncComponent } from 'vue'
import { comDefine, comCollections } from './types'

// 动态获取所有表单定义
const modules_ts = import.meta.glob('./*/*.ts', { eager: true })
export let componentData:Array<comDefine> = []
for (const path in modules_ts) {
  const key:string = path.replace(/(.*\/)*([^.]+).ts/ig, "$2")
  if (key !== 'types') {
    const mod:any = modules_ts[path]
    componentData.push(new mod.default())
  }
}

// 动态获取异步组件集合--表单组件
const modules_vue = import.meta.glob('./*/*.vue', { eager: true })
export let formDesignCom:comCollections = {}
for (const path in modules_vue) {
  const key:string = path.replace(/(.*\/)*([^.]+).vue/ig, "$2")
  formDesignCom[key] = defineAsyncComponent(() => 
    import(path)
  )
}
