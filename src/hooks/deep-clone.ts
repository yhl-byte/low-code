/*
 * @Author: yhl
 * @Date: 2022-10-17 18:37:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-17 18:40:45
 * @FilePath: /low-code/src/hooks/deep-clone.ts
 */
export default function useDeepCopy(obj:any) {
  //判断 传入对象 为 数组 或者 对象
  var result:any = Array.isArray(obj) ? [] : {};
  // for in 遍历
  for (var key in obj) {
      // 判断 是否 为自身 的属性值（排除原型链干扰）
      if (obj.hasOwnProperty(key)) {
          // 判断 对象的属性值 中 存储的 数据类型 是否为对象
          if (typeof obj[key] === 'object') {
              // 递归调用
              result[key] = useDeepCopy(obj[key]);   //递归复制
          } 
          // 不是的话 直接 赋值 copy
          else {
              result[key] = obj[key];
          }
      }
  }
  // 返回 新的对象
  return result;
}