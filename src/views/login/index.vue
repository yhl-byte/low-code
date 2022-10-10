<!--
 * @Author: yhl
 * @Date: 2022-10-02 11:13:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-02 14:21:05
 * @FilePath: /low-code/src/views/login/index.vue
-->
<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router"
  const { user } = window.$useStore
  console.log(111, user.userList)
  const add = () => {
    user.counter++
  }

  const route = useRoute()
  console.log(998,  route.path )


  const router = useRouter()
  const goBack = () => {
    router.go(-1)
  }
  
  
</script>
<template>
  我是登录页面
  {{user.counter}}
  <a-button @click="goBack()">返回上一页</a-button>
  <a-button @click="add">数字++</a-button>
</template>