<!--
 * @Author: yhl
 * @Date: 2022-09-30 14:11:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-09-30 17:29:49
 * @FilePath: /low-code/src/App.vue
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import useStore from './store'
const { user } = useStore()
user.getList()
console.log(user.userList[0].name)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
