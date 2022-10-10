/*
 * @Author: yhl
 * @Date: 2022-09-30 14:11:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-09 17:11:44
 * @FilePath: /low-code/src/main.ts
 */
import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import { createPinia } from 'pinia'

// TODO pinia是否统一处理
// import useStore from './store'
// window.$useStore = useStore()

const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(createPinia())
app.mount('#app')
