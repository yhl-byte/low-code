/*
 * @Author: yhl
 * @Date: 2022-09-30 14:11:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-02 11:45:38
 * @FilePath: /low-code/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  }
})
