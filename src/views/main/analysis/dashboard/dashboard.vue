<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '100%', height: '500px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// es6的导入方式
import * as echarts from 'echarts'

const divRef = ref<HTMLElement>()
onMounted(() => {
  // 1、初始化echarts的实例
  const echartsInstance = echarts.init(divRef.value, 'light', {
    renderer: 'svg'
  })
  // 2、编写数据配置文件
  var option = {
    title: {
      text: 'ECharts 入门示例',
      subtext: '子标题'
    },
    tooltip: {
      tirgger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  // 3、设置数据,开始绘制
  echartsInstance.setOption(option)
})
</script>

<style scoped></style>
