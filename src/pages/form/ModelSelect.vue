<template>
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <v-flex>
        <v-card >
            <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景2.png">
            <img  src="../../assets2/标题框.png" style="position: absolute;left: 0;top: 0;"/>
          <el-tooltip class="item" effect="dark" content="返回" placement="bottom-end">
          <img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
          <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="帮助" placement="bottom-end">
          <img v-if="singanlzhuye == 1" src="../../assets2/首页.png" v-on:mouseenter="imagechangezhuye1"  style="position: absolute;left: 95%;top: 0;" onclick="location='/#/index/dashboard'"/>
          <img v-if="singanlzhuye == 2" src="../../assets2/首页点击.png" v-on:mouseleave="imagechangezhuye2" style="position: absolute;left: 95%;top: 0;" onclick="location='/#/index/dashboard'"/>
          </el-tooltip>

          <!--<img v-if="singnal1 == 1" src="../../assets2/学习模式.png" style="position:absolute;left: 16%;top: 42%;display:block" v-on:mouseenter="imagechange11" onclick="location='/#/form/LearnForm02'">-->
          <v-btn style="position:absolute;left: 14%;top: 42%;background: unset;">
            <img   src="../../assets2/学习模式点击.png"   onclick="location='/#/form/LearnForm02'">
          </v-btn>

          <!--<v-btn v-show="true" style="position:absolute;left: 21%;top: 42%;display:block;width: 200px;height: 220px;background-color: unset" onclick="location='/#/form/LearnForm01'"></v-btn>-->

          <!--<img v-if="singnal2 == 1" src="../../assets2/考核模式.png" style="position:absolute;left: 40%;top: 42%;display:block" v-on:mouseenter="imagechange21" onclick="location='/#/form/DataModelForm3'">-->
          <v-btn style="position:absolute;left: 38%;top: 42%;background: unset;">
            <img  src="../../assets2/考核模式点击.png"   onclick="location='/#/form/DataModelForm4'">
          </v-btn>

          <!--<v-btn v-show="true" style="position:absolute;left: 45%;top: 48%;display:block;width: 200px;height: 300px;background-color: unset"  onclick="location='/#/form/easypid-form2'"></v-btn>-->

<!--
          <a :href ="'http://2.2.2.2/index.htm'" style="position: absolute; left: 64%;top: 42%;">
-->

          <!--<img v-if="singnal3 == 1" src="../../assets2/自主探究.png" style="position:absolute;left: 64%;top: 42%;display:block" v-on:mouseenter="imagechange31" onclick="location='/#/form/local-form1'">-->
          <v-btn  style="position:absolute;left: 62%;top: 42%;background: unset;">
            <img  src="../../assets2/自主探究点击.png"  onclick="location='/#/form/local-form1'">
          </v-btn>
<!--          <img v-if="singnal3 == 1" src="../../assets2/自主探究.png" style="position:absolute;left: 64%;top: 42%;display:block" v-on:mouseenter="imagechange31" onclick="location='http://2.2.2.2/index.htm'">
          <img v-if="singnal3 == 2" src="../../assets2/自主探究点击.png" style="position:absolute;left: 62%;top: 42%;display:block" v-on:mouseleave="imagechange32" onclick="location='http://2.2.2.2/index.htm'">-->
          <!--<v-btn v-show="true" style="position:absolute;left: 66%;top: 42%;display:block;width: 200px;height: 220px;background-color: unset"  onclick="location='/#/form/write-form'"></v-btn>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "ModelSelect",
      data(){
        return {
          singnal1:1,
          singnal2:1,
          singnal3:1,
          singnalreturn:1,
          singanlzhuye:1,
        }
      },
      methods:{
        imagechange11(){
          this.singnal1 = 2
        },
        imagechange12(){
          this.singnal1 = 1
        },
        imagechange21(){
          this.singnal2 = 2
        },
        imagechange22(){
          this.singnal2 = 1
        },
        imagechange31(){
          this.singnal3 = 2
        },
        imagechange32(){
          this.singnal3 = 1
        },
        imagechangereturn1(){
          this.singnalreturn = 2
        },
        imagechangereturn2(){
          this.singnalreturn = 1
        },
        imagechangezhuye1(){
          this.singanlzhuye = 2
        },
        imagechangezhuye2(){
          this.singanlzhuye = 1
        },
      }
    }
</script>

<style scoped>

</style>
