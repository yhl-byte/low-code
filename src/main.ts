/*
 * @Author: yhl
 * @Date: 2022-09-30 14:11:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-09-30 17:32:02
 * @FilePath: /low-code/src/main.ts
 */
import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(createPinia())
app.mount('#app')
