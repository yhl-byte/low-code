<!--
 * @Author: yhl
 * @Date: 2022-09-30 18:14:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-18 11:08:48
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
          <vuedraggable v-model="componentData" :group="{name: 'comList',pull:'clone',put:false}" item-key="item.type" class="nav-content-drag">
            <template #item="{element}">
              <li @click="addCom(element)">
                <component :is="element.icon" size="16" />
                <div style="padding-left: 10px;">{{element.label}}</div>
              </li>
            </template>
          </vuedraggable>
        </ul>
      </aside>
      <section class="preview">
        <a-form :model="form" class="preview-pc" layout="vertical">
          <vuedraggable v-model="defineJson" :group="{name: 'comList', sort: true}" item-key="item.itemId" class="mid-content-drag" @update="update" @add="leftToMid" ghostClass="ghost">
          <template #item="{element,index}">
            <div class="view-item" :class="{'view-item-active': element.itemId === currentCom.itemId}" @click="changeActive(index)">
              <component :is="list[element.type]" class="view-item-com" :comData="element" />
            </div>
          </template>
          </vuedraggable>
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
import { ref, Ref, reactive, defineAsyncComponent, provide } from 'vue'
import componentData from './config'
import { nanoid } from 'nanoid'
import { comDefine, menuItem, comCollections } from './types'
import useDeepCopy from '../../hooks/deep-clone'
import vuedraggable from 'vuedraggable'

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
  let defineJson = reactive([] as comDefine[])
  // 定义当前选中的一个组件
  let currentCom = ref({} as comDefine)
  provide('currentData', currentCom)
  // 像表单定义中添加组件项
  const addCom = (item:comDefine):void => {
    let com = useDeepCopy(componentData.find(val => val.type === item.type))
    if (com) {
      com.itemId = `${com.type}_${nanoid(8)}`
      defineJson.push(com)
      currentCom.value = defineJson[defineJson.length - 1]
    }
  }

  // 点击中部组件，切换当前选中组件状态
  const changeActive = (i:number):void => {
    currentCom.value = defineJson[i]
  }

  // 组件从左侧拖入中间
  const leftToMid = (e:any):void => {
    let com = useDeepCopy(componentData[e.oldIndex])
    com.itemId = `${com.type}_${nanoid(8)}`
    defineJson.splice(e.newIndex, 0, com)
    currentCom.value = defineJson[e.newIndex]
  }
  // 中间组件流拖拽后,重新排序
  const update = (e:any):void => {
    defineJson.splice(e.newIndex, 0, ...defineJson.splice(e.oldIndex, 1))
    currentCom.value = defineJson[e.newIndex]
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
        }
        .nav-content-drag {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 40px);
          overflow: auto;
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
        .mid-content-drag {
          width: 100%;
          height: 100%;
          overflow: auto;
        }
        .ghost {
          list-style: none;
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(24, 144, 255, .3);
          border: 1px solid #1890ff;
          opacity: .3;
        }

        .preview-pc {
          background: #fff;
          height: 100%;
          padding: 16px;
          box-sizing: border-box;
          overflow: auto;
        }
        .view-item {
          width: 100%;
          height: fit-content;
          border: 2px dotted transparent;
          &:hover {
            border: 2px dashed #1890ff;
            background-color: rgba(24, 144, 255, .1);
          }
        }
        .view-item-active {
          border: 2px solid #1890ff!important;
        }
        .view-item-com {
          pointer-events: none;
        }
      }

      .right-area {
        width: 320px;
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
      }
    }
  }
</style>