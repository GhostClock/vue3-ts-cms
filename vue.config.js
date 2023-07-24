const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // CLI提供的属性
  outputDir: './build',
  transpileDependencies: true,
  // 配置方式一：增加配置信息 PS:这里@默认配置里面已经有了
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // },

  //  配置方式二：覆盖默认配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // },

  //  配置方式三：方式二的链式
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
})
