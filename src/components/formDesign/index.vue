<!--
 * @Author: yhl
 * @Date: 2022-09-30 18:14:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-10 16:55:37
 * @FilePath: /low-code/src/components/formDesign/index.vue
-->
<template>
  <div class="form-design">
    <header>
      <div></div>
      <div></div>
      <div></div>
    </header>
    <main>
      <aside class="left-area">
        <ul class="nav">
          <li v-for="item in menuList" :key="item.id" @click="activeMenuId = item.id">
            <a-tooltip :content="item.title" position="right">
              <component :is="item.icon" :class="activeMenuId === item.id ? 'active': 'default'" size="28" />
            </a-tooltip>
          </li>
        </ul>
        <ul class="nav-content">
          <li v-for="item in componentData" :key="item.type" @click="addCom(item)">
            <component :is="item.icon" size="16" />
            <div style="padding-left: 10px;">{{item.label}}</div>
          </li>
        </ul>
      </aside>
      <section class="preview">
        <a-form :model="form" class="preview-pc">
          <template v-for="item in defineJson" :key="item.itemId">
            <component :is="list[item.type]" />
          </template>
        </a-form>
      </section>
      <aside class="right-area">
        <template v-if="currentCom">
          <component :is="list[currentCom.type + 'Setting']"  />
        </template>
      </aside>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, defineAsyncComponent } from 'vue'
import componentData from './config'
import { nanoid } from 'nanoid'
import { comDefine, menuItem, comCollections } from './types'

  // 菜单列表
  const menuList:Array<menuItem> = [
    {
      id: '1',
      icon: 'icon-apps',
      title: '组件库'
    },
    {
      id: '2',
      icon: 'icon-mind-mapping',
      title: '大纲'
    }
  ]
  // 当前选中的菜单
  const activeMenuId:Ref<string> = ref('1')
  // 定义中间区域form
  const form = reactive({})
  // 定义全局的表单定义
  let defineJson = reactive([] as any[])
  // 定义当前选中的一个组件
  let currentCom:Ref<comDefine> = ref({} as comDefine)
  // 像表单定义中添加组件项
  const addCom = (item:comDefine) => {
    let com = componentData.find(val => val.type === item.type)
    if (com) {
      com.itemId = nanoid(8)
      currentCom.value = Object.assign({}, com)
      defineJson.push(currentCom.value)
    }
  }

  // 动态获取异步组件集合
  const modules = import.meta.glob('./*/*.vue', { eager: true })
  let list:comCollections = {}
  for (const path in modules) {
    const key:string = path.replace(/(.*\/)*([^.]+).vue/ig, "$2")
    list[key] = defineAsyncComponent(() => 
      import(path)
    )
  }

</script>
<style lang="less" scoped>
  .form-design {
    width: 100%;
    height: 100%;

    > header {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #f5f6f7;
    }

    > main {
      height: calc(100% - 50px);
      width: 100%;
      display: flex;

      .left-area {
        width: 320px;
        height: 100%;
        display: flex;

        .nav {
          width: 50px;
          height: 100%;
          border-right: 1px solid #f5f6f7;

          > li {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .default {
              color: #ddd;
            }
            .active {
              color: #1890ff;
            }
          }
        }
        .nav-content {
          flex: 1;
          padding: 12px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 40px);

          li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 32px;
            width: 116px;
            border: 1px solid #f5f6f7;
            border-radius: 4px;
            padding: 0 8px;
            box-sizing: border-box;
            color: #171a1d;
            cursor: pointer;

            &:hover {
              border: 1px solid #1890ff;
              color: #1890ff;
            }
          }
        }
      }

      .preview {
        flex: 1;
        background: #edeff3;
        padding: 16px;

        .preview-pc {
          background: #fff;
          height: 100%;
          padding: 16px;
          box-sizing: border-box;
          overflow: auto;
        }
      }

      .right-area {
        width: 300px;
        height: 100%;
        padding: 16px;
        box-sizing: border-box;
      }
    }
  }
</style>