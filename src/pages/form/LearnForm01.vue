<template>
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <v-flex>
        <v-card >
          <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景1.png">
          <img  src="../../assets2/标题框.png" style="position: absolute;left: 0;top: 0;"/>
          <img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
          <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>

          <img v-if="singanlzhuye == 1" src="../../assets2/首页.png" v-on:mouseenter="imagechangezhuye1"  style="position: absolute;left: 95%;top: 0;" onclick="location='/#/index/dashboard'"/>
          <img v-if="singanlzhuye == 2" src="../../assets2/首页点击.png" v-on:mouseleave="imagechangezhuye2" style="position: absolute;left: 95%;top: 0;" onclick="location='/#/index/dashboard'"/>






            <!--<img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets/3.png">-->
            <!--<v-btn v-show="true" style="position:absolute;left: 80%;top: 2%;display:block;width: 20px;height: 60px;background-color: unset" onclick="location='/#/form/ModelSelect'"></v-btn>-->
            <!--<v-btn v-show="true" style="position:absolute;left: 89%;top: 2%;display:block;width: 15px;height: 60px;background-color: unset" onclick="location='/#/index/dashboard'"></v-btn>-->

            <div v-show="true" style="z-index:9;position:absolute;width: 250px;left:34%;top: 25%;border:1px;">
       <!--       <pdf
                :src="url"
                ref="pdf"
                style="width: 50vw; height:50vh"
              ></pdf>-->
              <iframe :src="url" frameborder="0" style="width: 40vw; height:50vh"></iframe>

            </div>


       <!-- <el-input
              type="textarea"
              :rows="20"
              placeholder="请输入内容"
              style="position:absolute;width: 50%;left:24%;top: 28%;border:1px solid #0e2d5f;background-color:#00ff00"
              v-model="textarea"
              readonly="true"
              resize="none"
              >
            </el-input>-->

          <div   v-show="true" style="position:absolute;top: 25%;left: 7%;width: 100px;height: 100px;display:block;background-color: unset">
            <v-btn style="width: 100px;height: 100px;background-color: unset" @click="isshow1"></v-btn>
          </div>
          <div   v-show="true" style="position:absolute;top: 55%;left: 7%;width: 100px;height: 100px;display:block;background-color: unset">
            <v-btn style="width: 100px;height: 100px;background-color: unset" @click="isshow2"></v-btn>
          </div>
          <div   v-show="true" style="position:absolute;top: 25%;left: 85%;width: 100px;height: 100px;display:block;background-color: unset">
            <v-btn style="width: 100px;height: 100px;background-color: unset" @click="isshow3"></v-btn>
          </div>
          <div   v-show="true" style="position:absolute;top: 55%;left: 85%;width: 100px;height: 100px;display:block;background-color: unset">
            <v-btn style="width: 100px;height: 100px;background-color: unset" @click="isshow4"></v-btn>
          </div>
         <!-- 实验原理-->
          <el-container v-show="show1" style="position:absolute;width: 53%;left:23%;top: 18%;border:1px solid #0e2d5f;background-color:#00ff00">
            <el-header >实验原理</el-header>
            <el-container>
              <el-aside style="width: 200px;height: 500px;">
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0;" @click="main11">系统建模</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main12">通道认知</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main13">控制算法</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main14">通信原理</v-btn>
                </v-container>
              </el-aside>
              <el-main>{{main1}}</el-main>
            </el-container>
          </el-container>
          <!--设备认知-->
          <el-container v-show="show2" style="position:absolute;width: 53%;left:23%;top: 18%;border:1px solid #0e2d5f;background-color:#00ff00">
            <el-header>设备认知</el-header>
            <el-container>
              <el-aside style=" width:200px;height: 500px;">
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main21">被控对象</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main22">传感器</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main23">执行器</v-btn>
                </v-container>
              </el-aside>
              <el-main>{{main2}}</el-main>
            </el-container>
          </el-container>
          <!--实验步骤-->
          <el-container v-show="show3" style="position:absolute;width: 53%;left:23%;top: 18%;border:1px solid #0e2d5f;background-color:#00ff00">
            <el-header>实验步骤</el-header>
            <el-container>
              <el-aside style="width: 200px;height: 500px;">
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main31">步骤1</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main32">步骤2</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main33">步骤3</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main34">步骤4</v-btn>
                </v-container>
              </el-aside>
              <el-main>{{main3}}</el-main>
            </el-container>
          </el-container>
          <!--小测试-->
          <el-container v-show="show4" style="position:absolute;width: 53%;left:23%;top: 18%;border:1px solid #0e2d5f;background-color:#00ff00">
            <el-header>小测试</el-header>
            <el-container>
              <el-aside style="width: 200px;height: 500px;">
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main41">小测试</v-btn>
                </v-container>
               <!-- <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main2">通道认知</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main3">控制算法</v-btn>
                </v-container>
                <v-container style="height: 15%;">
                  <v-btn  style="width: 100px;height: 40px;margin-top:0 ;background-color:#5F9EA0" @click="main4">通信原理</v-btn>
                </v-container>-->
              </el-aside>
              <el-main>{{main4}}</el-main>
            </el-container>
          </el-container>

          <!--<el-menu style="position:absolute;top: 28%;left: 8%;background-color: #0e2d5f;" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                  <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">原理认知</span>
                <el-menu-item index="1-1" @click="learn11">系统建模</el-menu-item>
                <el-menu-item index="1-2" @click="learn12">通道认知</el-menu-item>
                <el-menu-item index="1-3" @click="learn13">控制算法</el-menu-item>
                <el-menu-item index="1-4" @click="learn14">通信原理</el-menu-item>

              </el-menu-item-group>
              &lt;!&ndash;<el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>&ndash;&gt;
            </el-submenu>
            &lt;!&ndash;<el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>&ndash;&gt;
          </el-menu>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
        components:{
          pdf
        },
        name: "LearnForm01",
        data() {
        return {
          url:"../../../static/原理认知.pdf",
          singnalreturn:1,
          singanlzhuye:1,

          dialogVisible: true,
          numPages:1,
          main1:'实验原理',
          main2:'设备认知',
          main3:'实验步骤',
          main4:'小测试',
          show1:true,
          show2:false,
          show3:false,
          show4:false,
          }
        },
    methods: {
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
          main11(){
            this.main1='　　系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模' +
              '系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模系统建模'
           },
          main12(){
            this.main1='　　通道认知通道认知通道认知通道认知通道认知通道认知通道认知通道认知通道认知通道认知通道认知通道认知通道认知'
          },
          main13(){
            this.main1='　　控制算法控制算法控制算法控制算法控制算法控制算法控制算法控制算法控制算法控制算法控制算法控制算法控制算法'
          },
          main14(){
            this.main1='　　通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理通信原理'
          },
          main21(){
            this.main2='　　被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象被控对象'
          },
          main22(){
            this.main2='　　传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器传感器'
          },
          main23(){
            this.main2='　　执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器执行器'
          },
          main31(){
            this.main3='步骤1'
          },
          main32(){
            this.main3='步骤2'
          },
          main33(){
            this.main3='步骤3'
          },
          main34(){
            this.main3='步骤4'
          },
          main41(){
            this.main4='　　小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试小测试'
          },
          isshow1(){
              this.show1=true
              this.show2=false
              this.show3=false
              this.show4=false
          },
          isshow2(){
            this.show1=false
            this.show2=true
            this.show3=false
            this.show4=false
          },
          isshow3(){
            this.show1=false
            this.show2=false
            this.show3=true
            this.show4=false
          },
          isshow4(){
            this.show1=true
            this.show2=false
            this.show3=false
            this.show4=true
          }

    }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }
  .el-header, .el-footer {
    background-color: #00b8d4;
    color: white;
    text-align: center;
    line-height: 60px;
    font-size:40px;

  }

  .el-aside {
    background-color: #0d47a1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-main {
    background-color: #0e2d5f;
    color: white;
    text-align: left;
    line-height: 30px;
    font-size:20px;

  }
</style>
