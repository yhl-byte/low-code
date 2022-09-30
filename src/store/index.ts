/*
 * @Author: yhl
 * @Date: 2022-09-30 15:15:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-09-30 17:29:40
 * @FilePath: /low-code/src/store/index.ts
 */
const modules = import.meta.glob('./modules/*.ts', { eager: true })
let storeData:any = {}
for (const path in modules) {
  const key:string = path.replace(/(.*\/)*([^.]+).ts/ig,"$2")
  const mod:any = modules[path]
  storeData[key] = mod.default
}
export default function useStore () {
  return Object.keys(storeData).reduce((pre:any, cue:string) => {
    pre[cue] = storeData[cue]()
    return pre
  }, {})
}