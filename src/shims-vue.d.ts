/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // 每个.vue文件最终得到的是DefineComponent实例对象
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any
