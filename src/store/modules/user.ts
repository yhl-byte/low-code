/*
 * @Author: yhl
 * @Date: 2022-09-30 15:23:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-02 15:12:56
 * @FilePath: /low-code/src/store/modules/user.ts
 */
import { defineStore } from 'pinia'
// 定义用户类型
interface IUser {
  name: string,
  id: string
}

export default defineStore('user', {
  state() {
    return {
      counter: 1 as number,
      userList: [] as IUser[]
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter * 2 + 1
    },
    getUserById: (state) => {
      return (userId:string) => state.userList.find((user) => user.id === userId)
    }
  },
  actions: {
    getList() {
      // 模拟从后端获取数据
      let resList: IUser[] = [
        { name: "李雷", id: '1' },
        { name: "韩梅梅", id: '2' }
      ];
      this.userList = resList;
    },
  },
})