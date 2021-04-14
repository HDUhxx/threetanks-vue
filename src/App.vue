<template>
  <v-app id="app">
    <!--路由管道标签，任何符合某一路由(route)信息的组件都会在这个标签内展示出来 -->
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name:"App",
  created(){
//在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
    })

//在页面加载时读取localStorage里的状态信息
    localStorage.getItem("messageStore") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));
  }
}
</script>
