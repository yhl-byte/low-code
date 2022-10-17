<!--
 * @Author: yhl
 * @Date: 2022-10-02 11:13:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-14 09:21:21
 * @FilePath: /low-code/src/views/login/index.vue
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
  const data = [{
    label: 'Name',
    value: 'Socrates',
  }, {
    label: 'Mobile',
    value: '123-1234-1234',
  }, {
    label: 'Residence',
    value: 'Beijing'
  }, {
    label: 'Hometown',
    value: 'Beijing',
  }, {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing'
  }]
  let workBlock = ref(0)
  // 加载工作台图标动画
  const workAnimate = () => {
    const workList = document.getElementById('scroll')
    let workListHeight = 0
    if (workList) {
      workList.childNodes.forEach((item) => {
        if (item.nodeType === 1) {
          let domRect = (item as HTMLElement).getBoundingClientRect() as DOMRect
          workListHeight = workListHeight + domRect.height
        }
      })
      workListHeight = workListHeight - (workList as HTMLElement).getBoundingClientRect().height
      workList.addEventListener('scroll', () => {
        const percentage = workList.scrollTop / workListHeight
        workBlock.value = 360 * percentage
      })
    }
  }
  onMounted(() =>{
    workAnimate()
  })
</script>
<template>
  <main>
    <ul class="left">
      <li>
        <img src="../../assets/windmill.svg" :style="`transform:rotate(${workBlock}deg)`">
        <div>首页</div>
      </li>
    </ul>
    <div class="right" id="scroll">
      <a-space v-for="i in 20" direction="vertical" size="large" fill>
        <a-descriptions :data="data" title="User Info" layout="inline-horizontal"/>
        <a-descriptions :data="data" title="User Info" :column="{xs:1, md:3, lg:4}">
          <a-descriptions-item v-for="item of data" :label="item.label">
            <a-tag>{{ item.value }}</a-tag>
          </a-descriptions-item>
        </a-descriptions>
      </a-space>
    </div>
  </main>
</template>
<style lang="less" scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 300px;
    height: 100%;

    li {
      display: flex;
      align-items: center;
    }
  }
  .right {
    flex: 1;
    overflow: auto;
  }
}
</style>