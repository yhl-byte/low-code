/*
 * @Author: yhl
 * @Date: 2022-10-10 10:13:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-10 15:05:59
 * @FilePath: /low-code/src/components/formDesign/config.ts
 */

import { comDefine } from './types'
const modules = import.meta.glob('./*/*.ts', { eager: true })

let componentData:Array<comDefine> = []

for (const path in modules) {
  const key:string = path.replace(/(.*\/)*([^.]+).ts/ig, "$2")
  if (key !== 'types') {
    const mod:any = modules[path]
    componentData.push(new mod.default())
  }
}

export default componentData