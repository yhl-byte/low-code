<!--
 * @Author: yhl
 * @Date: 2022-09-30 18:14:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-21 11:04:09
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
          <vuedraggable v-model="componentData" :group="{name: 'comList',pull:'clone',put:false}" item-key="item.itemId" class="nav-content-drag" :move="onMove">
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
              <div v-if="element.itemId === currentCom.itemId" class="active-action">
                <a-tag color="#165dff">{{ element.label }}</a-tag>
                <div class="action-btn">
                  <icon-copy size="16" style="cursor: pointer;" @click.stop="copyCom(index)" />
                  <a-popconfirm popup-container="body" content="Are you sure you want to delete?" @ok="delCom(index)">
                    <icon-delete size="16" style="cursor: pointer;" />
                  </a-popconfirm>
                </div>
              </div>
              <component :is="formDesignCom[element.type]" class="view-item-com" isDesign :comData="element" />
            </div>
          </template>
          </vuedraggable>
        </a-form>
      </section>
      <aside class="right-area">
        <template v-if="currentCom.type">
          <component :is="formDesignCom[currentCom.type + 'Setting']"  />
        </template>
      </aside>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, provide } from 'vue'
import { componentData, formDesignCom } from './config'
import { nanoid } from 'nanoid'
import { comDefine, menuItem } from './types'
import useDeepCopy from '../../hooks/deep-clone'
import vuedraggable from 'vuedraggable'

  // ????????????
  const menuList:Array<menuItem> = [
    {
      id: '1',
      icon: 'icon-apps',
      title: '?????????'
    },
    {
      id: '2',
      icon: 'icon-mind-mapping',
      title: '??????'
    }
  ]
  // ?????????????????????
  const activeMenuId:Ref<string> = ref('1')
  // ??????????????????form
  const form = reactive({})
  // ???????????????????????????
  let defineJson = reactive([] as comDefine[])
  // ?????????????????????????????????
  let currentCom = ref({} as comDefine)
  // ????????????????????????????????????
  provide('currentData', currentCom)
  // ?????????????????????????????????
  const addCom = (item:comDefine):void => {
    let com = useDeepCopy(componentData.find(val => val.type === item.type))
    let index = defineJson.findIndex(res => res.itemId === currentCom.value.itemId)
    com.itemId = `${com.type}_${nanoid(8)}`
    if (index >= 0) {
      defineJson.splice(index + 1, 0, com)
      currentCom.value = defineJson[index + 1]
    } else {
      defineJson.push(com)
      currentCom.value = defineJson[defineJson.length - 1]
    }
  }
  // ????????????
  const copyCom = (i:number):void => {
    let com = useDeepCopy(defineJson[i])
    com.itemId = `${com.type}_${nanoid(8)}`
    defineJson.splice(i+1, 0, com)
    currentCom.value = defineJson[i+1]
  }
  // ????????????
  const delCom = (i:number):void => {
    defineJson.splice(i, 1)
    if (defineJson.length) {
      currentCom.value = defineJson[i - 1 < 0 ? 0 : i -1]
    } else {
      currentCom.value = {type: '', itemId: ''} as comDefine
    }
  }

  // ???????????????????????????????????????????????????
  const changeActive = (i:number):void => {
    currentCom.value = defineJson[i]
  }

  // ???????????????????????????
  const leftToMid = (e:any):void => {
    let com = useDeepCopy(componentData[e.oldIndex])
    com.itemId = `${com.type}_${nanoid(8)}`
    defineJson.splice(e.newIndex, 0, com)
    currentCom.value = defineJson[e.newIndex]
  }
  // ????????????????????????,????????????
  const update = (e:any):void => {
    defineJson.splice(e.newIndex, 0, ...defineJson.splice(e.oldIndex, 1))
    currentCom.value = defineJson[e.newIndex]
  }

  // ?????????????????????
  const onMove = (e:any) => {
    if (e.relatedContext.element && !e.relatedContext.element.itemId) return false
    return true
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
              color: #165dff;
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
          grid-template-rows: repeat(100, 40px);
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
              border: 1px solid #165dff;
              color: #165dff;
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
          border: 1px solid #165dff;
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
          margin-top: 24px;
          &:hover {
            border: 2px dashed #165dff;
            background-color: rgba(24, 144, 255, .1);
          }
          .active-action {
            display: none;
          }
        }
        .view-item-active {
          border: 2px solid #165dff!important;
          position: relative;
          .active-action {
            width: calc(100% + 4px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            right: -2px;
            top: -26px;

            .action-btn {
              display: flex;
              align-items: center;
              background-color: #165dff;
              justify-content: space-between;
              color: #fff;
              height: 24px;
              width: 50px;
              padding: 6px;
            }
          }
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