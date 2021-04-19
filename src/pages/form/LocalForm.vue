<template>
  <div>
    <div class="crumbs">
      <v-card style="background-color: #0d47a1">
        <v-card-title><h3>本地实验地址</h3></v-card-title>
        <v-card-text align="center">
          <a :href ="'http://192.168.130.41:9000/vnc.html'" ><span>跳转到本地实验</span></a>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>

    export default {
        name: "local-form"
    }
</script>

<style scoped>

</style>
