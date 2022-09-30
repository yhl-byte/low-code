/*
 * @Author: yhl
 * @Date: 2022-09-30 15:23:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-09-30 17:18:20
 * @FilePath: /low-code/src/store/modules/user.ts
 */
import { defineStore } from 'pinia'
// 定义用户类型
interface IUser {
  name: string
  age: number
}
export default defineStore('user', {
  state() {
    return {
      userList: [] as IUser[]
    }
  },
  actions: {
    getList() {
      // 模拟从后端获取数据
      let resList: IUser[] = [
        { name: "张三", age: 18 },
        { name: "李四", age: 19 },
      ];
      this.userList = resList;
    },
  },
})