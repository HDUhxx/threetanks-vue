<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景2.png">
      <img  src="../../assets2/标题框.png" style="position: absolute;left: 0;top: 0;"/>
      <!--<img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
      <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/form/ModelSelect'"/>-->

      <el-tooltip class="item" effect="dark" content="返回" placement="bottom-end">
        <img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 85%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
        <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 85%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" content="首页" placement="bottom-end">
        <img v-if="singanlzhuye == 1" src="../../assets2/首页.png" v-on:mouseenter="imagechangezhuye1"  style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
        <img v-if="singanlzhuye == 2" src="../../assets2/首页点击.png" v-on:mouseleave="imagechangezhuye2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" content="帮助" placement="bottom-end">
        <img v-if="singnalhelp == 1" src="../../assets2/帮助.png" v-on:mouseenter="imagechangehelp1"  style="position: absolute;left: 95%;top: 0;" @click="helpclick"/>
        <img v-if="singnalhelp == 2" src="../../assets2/帮助点击.png" v-on:mouseleave="imagechangehelp2" style="position: absolute;left: 95%;top: 0;" @click="helpclick"/>
      </el-tooltip>

     <!-- <img  v-if="tag1 == 1" src="../../assets2/按钮实验准备.png" v-on:mouseenter="changetag11" style="position: absolute; left: 1%;top: 8%;" onclick="location='/#/form/DataModelForm3'"/>
      <img  v-if="tag1 == 2" src="../../assets2/按钮实验准备1.png" v-on:mouseleave="changetag12" style="position: absolute; left: 1%;top: 8%;" onclick="location='/#/form/DataModelForm3'"/>-->
      <!--<img  v-if="tag2 == 1" src="../../assets2/按钮系统建模0.png" v-on:mouseenter="changetag21" style="position: absolute; left: 1%;top: 9%;" onclick="location='/#/form/DataModelForm3'"/>-->
      <img   src="../../assets2/按钮系统建模.png" v-on:mouseleave="changetag22" style="position: absolute; left: 1%;top: 9%;" onclick="location='/#/form/DataModelForm3'"/>

      <!--<img  v-if="tag3 == 1" src="../../assets2/按钮pid控制规律0.png" v-on:mouseenter="changetag31" style="position: absolute; left: 1%;top: 16%;" onclick="location='/#/form/easypid-form3'"/>-->
      <img   src="../../assets2/按钮pid控制规律.png" v-on:mouseleave="changetag32" style="position: absolute; left: 1%;top: 16%;" onclick="location='/#/form/easypid-form3'"/>

      <img                   src="../../assets2/按钮一阶纯滞后1.png"                                style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>

      <!--<img  v-if="tag4 == 1" src="../../assets2/按钮一阶系统串级0.png" v-on:mouseenter="changetag41" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>-->
      <img   src="../../assets2/按钮一阶系统串级.png" v-on:mouseleave="changetag42" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>

      <!--<img  v-if="tag7 == 1"  src="../../assets2/按钮二阶前馈0.png" v-on:mouseenter="changetag71" style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>-->
      <img    src="../../assets2/按钮二阶前馈.png"  v-on:mouseenter="changetag72"  style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>

      <!--<img  v-if="tag5 == 1" src="../../assets2/按钮二阶系统复杂控制0.png" v-on:mouseenter="changetag51" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>-->
      <img   src="../../assets2/按钮二阶系统复杂控制.png" v-on:mouseleave="changetag52" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>

      <!--<img  v-if="tag1 == 1" src="../../assets2/按钮编写算法0.png" v-on:mouseenter="changetag11" style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>-->
      <img  src="../../assets2/按钮编写算法.png" v-on:mouseleave="changetag12" style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>


      <img src="../../assets2/动态水箱1底框.png" style="position: absolute;left: 15%;top:9%;"/>
      <img src="../../assets2/底框系统响应曲线.png" style="position: absolute;left: 66%;top:9%;"/>
      <img src="../../assets2/底框模型参数.png" style="position: absolute;left: 66%;top:54%;"/>
      <img src="../../assets2/底框控制参数.png" style="position: absolute;left: 66%;top:73%;"/>
      <img v-if="signalwater == 1" src="../../assets2/一阶系统-静态透明.png" style="position: absolute;left: 55%;top: 8%;"/>
      <img v-if="signalwater == 2" src="../../assets2/一阶系统--动画透明.gif" style="position: absolute;left: 55%;top: 8%;"/>
      <img v-if="signalwater == 3" src="../../assets2/一阶系统--循环透明.gif" style="position: absolute;left: 55%;top: 8%;"/>

      <!--<img v-if="singnalqidong == 1" src="../../assets2/按钮启动程序.png" @click="start1" v-on:mouseenter="changeqidong1" style="position: absolute;left: 54%;top: 50%;"/>-->
      <!--<img v-if="singnalqidong == 2" src="../../assets2/按钮启动程序1.png" @click="start1" v-on:mouseleave="changeqidong2" style="position: absolute;left: 54%;top: 50%;"/>-->


      <img src="../../assets2/框图4底框滞后.png" style="position: absolute;left: 15%;top:60%;"/>
      <img src="../../assets2/框图加2.png" style="position: absolute;left: 17%;top:64%;"/>


<!--      <img src="../../assets2/输入框k1上.png" style="position: absolute;left: 66%;top:48%"/>
      <img src="../../assets2/输入框a1上.png" style="position: absolute;left: 73%;top:48%"/>
      <img src="../../assets2/输入框k2上.png" style="position: absolute;left: 80%;top:48%"/>
      <img src="../../assets2/输入框a2上.png" style="position: absolute;left: 87%;top:48%"/>-->
      <v-flex style="position: absolute;left:67%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">K1:</h2>
          <el-input v-model="k1" placeholder="k1" label="k1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 74%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">T1:</h2>
          <el-input v-model="a1" placeholder="a1" label="a1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 81%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">τ:</h2>
          <el-input  v-model="ta" placeholder="τ" class="te"></el-input>
        </v-col>
      </v-flex>


      <img src="../../assets2/公式1+tao.png" style="position: absolute;left: 69%;top: 58%;"/>


      <img v-if="singnalchuang == 1" v-on:mouseenter="changechuang1" @click="modelSub" src="../../assets2/按钮创建模型.png" style="position: absolute;left:89%;top:65%"/>
      <img v-if="singnalchuang == 2" v-on:mouseleave="changechuang2" @click="modelSub" src="../../assets2/按钮创建模型1.png" style="position: absolute;left:89%;top:65%"/>

      <img v-if="singnalstart == 1" v-on:mouseenter="changestart1" @click="startLab" src="../../assets2/按钮开始实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalstart == 2" v-on:mouseleave="changestart2" @click="startLab" src="../../assets2/按钮开始实验1.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalpause == 1" v-on:mouseenter="changepause1" @click="pauseLab" src="../../assets2/按钮暂停实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalpause == 2" v-on:mouseleave="changepause2" @click="pauseLab" src="../../assets2/按钮暂停实验1.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalcontinue == 1" v-on:mouseenter="changecontinue1" @click="continueLab" src="../../assets2/按钮继续实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalcontinue == 2" v-on:mouseleave="changecontinue2" @click="continueLab" src="../../assets2/按钮继续实验1.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalstop == 1" v-on:mouseenter="changestop1" @click="stopLab" src="../../assets2/按钮停止实验.png" style="position: absolute;left: 45%;top:50%"/>
      <img v-if="singnalstop == 2" v-on:mouseleave="changestop2" @click="stopLab" src="../../assets2/按钮停止实验1.png" style="position: absolute;left: 45%;top:50%"/>

      <v-flex style="position: absolute;left: 68%;top:78%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">Kp:</h2>
          <el-input v-model="kp" placeholder="kp" label="kp" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:78%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">Ki:</h2>
          <el-input v-model="ki" placeholder="ki" label="ki" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:78%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">Kd:</h2>
          <el-input v-model="kd" placeholder="kd" label="kd" class="te"></el-input>
        </v-col>
      </v-flex>
      <!--<v-flex style="position: absolute;left: 68%;top:86%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">Kp0:</h2>
          <el-input v-model="kp0" placeholder="kp0"  class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:86%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">Ki0:</h2>
          <el-input v-model="ki0" placeholder="ki0"  class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:86%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">Kd0:</h2>
          <el-input v-model="kd0" placeholder="kd0"  class="te"></el-input>
        </v-col>
      </v-flex>-->
      <v-flex style="position: absolute;left: 68%;top:86%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">R:</h2>
          <el-input v-model="R" placeholder="R" label="R" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:86%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">T:</h2>
          <el-input v-model="T" placeholder="T" label="T" class="te"></el-input>
        </v-col>
      </v-flex>

      <el-checkbox v-model="checked"  style="position: absolute;left: 82%;top: 90%;" class=" te">
        <h2 style="color: white;">Smith预估控制器</h2>
      </el-checkbox>


      <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
      <img src="../../assets2/下载.png" style="position: absolute;left: 56.5%;top: 11.3%;"/>
      <div class="px2" ref="chartOne"  style="position: absolute;left: 18%;top:10%;width: 800px;height:400px"></div>
    </v-layout>
  </v-container>
</template>

<script>
  import pdf from 'vue-pdf'

  import echarts from 'echarts'
  export default {
    components:{
      pdf
    },
        name: "OneLateForm1",
    data() {
      return {
        checked:false,
        ta:0,
        signalwater:1,
        dialog1:false,
        dialog2:false,

        start:false,
        flaghelp:false,
        url2:"../../../static/实验步骤.pdf",
        singnalreturn:1,
        singanlzhuye:1,
        singnalhelp:1,


        tag1:1,
        tag2:1,
        tag3:1,
        tag4:1,
        tag5:1,
        tag6:1,
        tag7:1,

        singnalchuang:1,
        singnalstart:1,
        singnalpause:3,
        singnalcontinue:3,
        singnalstop:1,

        singnalqidong:1,


        flag:true,
        k1: 2,
        a1: 4,
        R: 1,
        T: 0.1,
        kp: 0.001,
        ki: 0.006,
        kd: 0.01,
        kp0: 0.0001,
        ki0: 0.006,
        kd0:0.01,
        tao:4,
        modelId:"",
        timesT: 0,
        xData:[],
        setData:[],
        //这个option是设置曲线图的option
        option: {
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            top: 0,
            right: 40,
            feature: {
              // mark: {show: true},
              // restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            color: ["#47D8BE", "#F9A589","#00ff00"],
            data: ['加Smith', '不加Smith','设定值'],
            left: 'center',
            bottom: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: 12
            },
          },
          grid: {
            top: 'middle',
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '80%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: [''],
            axisLine: {
              lineStyle: {
                color: "#999"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: 'white'
              }
            },
          },
          yAxis: {
            type: 'value',

            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#DDD'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#333"
              },
            },
            nameTextStyle: {
              color: "#999"
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: 'white'
              }
            },
          },
          series: [
            {
              symbol: "none",
              name: '加Smith',
              type: 'line',
              data: [0],
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',
                    colorStops: [{
                      offset: 0,
                      color: '#AAF487' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#47D8BE' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#47D8BE' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(71,216,190, 0.5)',
                  shadowBlur: 10,
                  shadowOffsetY: 7
                }
              },
              itemStyle: {
                normal: {
                  color: '#AAF487',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#AAF487"
                }
              },
              smooth: true
            },
            {
              symbol: "none",
              name: '不加Smith',
              type: 'line',
              data: [0,0,0,0,0],
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#F6D06F' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#F9A589' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#F9A589' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(249,165,137, 0.5)',
                  shadowBlur: 10,
                  shadowOffsetY: 7
                }
              },
              itemStyle: {
                normal: {
                  color: '#F6D06F',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#F6D06F"
                }
              },
              smooth: true
            },
            {
              symbol: "none",
              name: '设定值',
              type: 'line',
              data: this.R,
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#cc0b21' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#cc0b21' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#cc0b21' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(71,216,190, 0.5)',
                  shadowBlur: 10,
                  shadowOffsetY: 7
                }
              },
              itemStyle: {
                normal: {
                  color: '#DC143C',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#cc0b21"
                }
              },
              smooth: true
            }
          ]
        },
      }
    },
    mounted(){
      this.initChartOne();
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
      imagechangehelp1(){
        this.singnalhelp = 2
      },
      imagechangehelp2(){
        this.singnalhelp = 1
      },
      helpclick(){
        this.flaghelp = !this.flaghelp;
      },

      changetag11(){
        this.tag1 = 2
      },
      changetag12(){
        this.tag1 = 1
      },
      changetag21(){
        this.tag2 = 2
      },
      changetag22(){
        this.tag2 = 1
      },
      changetag31(){
        this.tag3 = 2
      },
      changetag32(){
        this.tag3 = 1
      },
      changetag41(){
        this.tag4 = 2
      },
      changetag42(){
        this.tag4 = 1
      },
      changetag51(){
        this.tag5 = 2
      },
      changetag52(){
        this.tag5 = 1
      },
      changetag61(){
        this.tag6 = 2
      },
      changetag62(){
        this.tag6 = 1
      },
      changetag71(){
        this.tag7 = 2
      },
      changetag72(){
        this.tag7 = 1
      },

      changechuang1(){
        this.singnalchuang = 2
      },
      changechuang2(){
        this.singnalchuang = 1
      },
      changestart1(){
        this.singnalstart = 2
      },
      changestart2(){
        this.singnalstart = 1
      },
      changepause1(){
        this.singnalpause = 2
      },
      changepause2(){
        this.singnalpause = 1
      },
      changecontinue1(){
        this.singnalcontinue= 2
      },
      changecontinue2(){
        this.singnalcontinue = 1
      },
      changestop1(){
        this.singnalstop = 2
      },
      changestop2(){
        this.singnalstop = 1
      },
      start1(){
        this.start = true;
        this.$message.success("系统启动成功");
      },
      changeqidong1(){
        this.singnalqidong = 2
      },
      changeqidong2(){
        this.singnalqidong = 1
      },


      modelSub(){
        // if (this.start == true) {
          this.$http({
            method : 'post',
            url: '/model/createOne',
            data: {
              k1: this.k1,
              a1: this.a1,
            },
          }).then((resp) => {
            if(resp.data.status == 'success'){
              // 新建模型成功
              this.modelId = resp.data.data;
              this.$message.success("新建模型成功！");
            }else{
              this.$message.error('新建模型失败');
            }
          })
            .catch(() => {
              this.$message.error('新建模型失败');
            });
        // }else {
        //   this.$message.error("系统未启动")
        // }

      },
      startLab(){
        this.$http({
          method : 'post',
          url: '/model/oneLatePID',
          data: {
            kp: this.kp,
            ki: this.ki,
            kd: this.kd,
            kp0: this.kp0,
            ki0: this.ki0,
            kd0:this.kd0,
            T: this.T,
            R: this.R,
            tao:this.tao,
            modelId: this.modelId,
          },
        }).then((resp) => {
          if(resp.data.status == 'success'){
            // 无干扰pid实验成功
            this.$message.success("实验成功！");
            //window.setInterval(downScroll,20)
            resp.data.data.result[0].unshift(0);
            resp.data.data.result[1].unshift(0);
            this.clearTimeSet=window.setInterval(() => {
              setTimeout(this.showData(resp.data.data.result), 0);
            }, 100);
          }else{
            // this.$message.error('实验失败');
            this.$alert('控制参数设置不合理，系统不稳定！', '实验失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }
        })
          .catch(() => {
            // this.$message.error('实验失败！');
            this.$alert('控制参数设置不合理，系统不稳定！', '实验失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          });
        this.singnalstart = 3;
        this.singnalpause = 2;
        this.singnalcontinue = 3;
        this.signalwater = 3;
        this.clearTimeSet=window.setInterval(() => {
          // this.showData(resp.data.data.result)
          setTimeout(this.o(), 0);
        }, 9000);
      },
      o(){
        // this.signalwater = 3;
      },
      showData(resp){
        if(this.flag){
          this.timesT++;
          this.initChartOne();

        }
        for (let i = 0; i < this.timesT; i++) {
          this.xData.push(''+i);
          this.setData[i] = this.R;
        }
        this.option.xAxis.data = this.xData;
        if (!this.checked) {
          this.option.series[0].data=[];
          this.option.series[1].data=resp[1];
        }else {
          this.option.series[0].data=resp[0];
          this.option.series[1].data=[];
        }

        this.option.series[2].data=this.setData;
        this.xData=[];
      },
      //停止实验
      stopLab(){
        this.singnalstart = 1;
        this.singnalpause = 3;
        this.singnalcontinue = 3;
        clearInterval(this.clearTimeSet);
        this.timesT = 0;
        this.xData=[];
        this.option.xAxis.data = [];
        this.option.series[0].data=[];
        this.option.series[1].data=[];
        this.option.series[2].data=[];
        this.signalwater = 1;
        this.initChartOne();
        this.beforeDestroy();

      },
      beforeDestroy(){
        this.flag=true;
        window.clearInterval(this.clearTimeSet);
        this.clearTimeSet = null;
        this.$message.success("删除成功");
      },
      //暂停实验
      pauseLab(){
        this.singnalstart = 3;
        this.singnalpause = 3;
        this.singnalcontinue = 2;
        this.flag = false;
        pause(this.clearTimeSet);
      },
      //继续实验
      continueLab(){
        this.singnalstart = 3;
        this.singnalpause = 2;
        this.singnalcontinue = 3;
        this.flag = true;
      },
      //第一个chart
      initChartOne() {
        var l_chart = echarts.init(this.$refs.chartOne);
        l_chart.setOption(this.option, true);
      },
    }
    }
</script>

<style scoped>
  .te>>>input
  {
    color:white;
    background-color: unset;
  }
  .disturb1{
    position: absolute;
    left: 56%;
    top: 13%;
  }
  .disturb2{
    position: absolute;
    left: 56%;
    top: 19%;
  }

</style>
