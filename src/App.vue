<template>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <h2>{{ name }}</h2>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
const { name } = store.state
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
