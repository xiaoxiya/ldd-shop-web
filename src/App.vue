<template>
  <div id="app">
      <!-- 根据嵌套路径，渲染嵌套组件，使用layout时，先加载layout组件 -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
