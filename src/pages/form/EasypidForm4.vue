<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/底框实验.png">

      <img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 85%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
      <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 85%;top: 0;" onclick="location='/#/form/ModelSelect'"/>

      <img v-if="singanlzhuye == 1" src="../../assets2/首页.png" v-on:mouseenter="imagechangezhuye1"  style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
      <img v-if="singanlzhuye == 2" src="../../assets2/首页点击.png" v-on:mouseleave="imagechangezhuye2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>

      <img v-if="singnalhelp == 1" src="../../assets2/帮助.png" v-on:mouseenter="imagechangehelp1"  style="position: absolute;left: 95%;top: 0;" @click="helpclick"/>
      <img v-if="singnalhelp == 2" src="../../assets2/帮助点击.png" v-on:mouseleave="imagechangehelp2" style="position: absolute;left: 95%;top: 0;" @click="helpclick"/>

      <img   src="../../assets2/按钮系统建模.png" v-on:mouseleave="changetag22" style="position: absolute; left: 3%;top: 15%;" onclick="location='/#/form/DataModelForm4'"/>
      <img    src="../../assets2/按钮pid控制点击.png"                           style="position: absolute; left: 3%;top: 21%;" onclick="location='/#/form/easypid-form4'"/>
      <img   src="../../assets2/按钮纯滞后控制.png" v-on:mouseleave="changetag62" style="position: absolute; left: 3%;top: 35%;" onclick="location='/#/form/OneLateForm2'"/>
      <img  src="../../assets2/按钮串级控制.png" v-on:mouseleave="changetag42" style="position: absolute; left: 3%;top: 41%;" onclick="location='/#/form/one-cascade-form4'"/>
      <img  src="../../assets2/按钮前馈控制.png"  v-on:mouseenter="changetag72"  style="position: absolute; left: 3%;top: 47%;" onclick="location='/#/form/TwoPreForm2'"/>
      <img  src="../../assets2/按钮复杂控制.png" v-on:mouseleave="changetag52" style="position: absolute; left: 3%;top: 60%;" onclick="location='/#/form/two-cascade-form4'"/>
      <img   src="../../assets2/按钮算法设计.png" v-on:mouseleave="changetag12" style="position: absolute; left: 3%;top: 66%;" onclick="location='/#/form/write-form4'"/>

      <img  src="../../assets2/一阶无干扰水箱.png" style="position: absolute;left: 62%;top: 8%;"/>
      <img  id="shuibeng" src="../../assets2/水泵.png" style="position: absolute;left: 68.3%;top: 50.8%;"/>

      <img src="../../assets2/框图1.png" style="position: absolute;left: 15%;top:62%;"/>

      <img v-if="false" src="../../assets2/公式1+tao.png" style="position: absolute;left: 69%;top: 58%;"/>

      <v-flex style="position: absolute;left: 67%;top:63%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">K1:</h2>
          <el-input v-model="k1" placeholder="k1" label="k1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 74%;top:63%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">T1:</h2>
          <el-input v-model="a1" placeholder="a1" label="a1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 81%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">τ1:</h2>
          <el-input v-model="tao" placeholder="τ1" class="te"></el-input>
        </v-col>
      </v-flex>



      <img v-if="singnalchuang == 1" v-on:mouseenter="changechuang1" @click="modelSub" src="../../assets2/按钮创建模型.png" style="position: absolute;left: 89%;top:65%"/>
      <img v-if="singnalchuang == 2" v-on:mouseleave="changechuang2" @click="modelSub" src="../../assets2/按钮创建模型点击.png" style="position: absolute;left:89%;top:65%"/>

      <img v-if="singnalstart == 1" v-on:mouseenter="changestart1" @click="startLab" src="../../assets2/按钮开始实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalstart == 2" v-on:mouseleave="changestart2" @click="startLab" src="../../assets2/按钮开始实验点击.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalpause == 1" v-on:mouseenter="changepause1" @click="pauseLab" src="../../assets2/按钮暂停实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalpause == 2" v-on:mouseleave="changepause2" @click="pauseLab" src="../../assets2/按钮暂停实验点击.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalcontinue == 1" v-on:mouseenter="changecontinue1" @click="continueLab" src="../../assets2/按钮继续实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalcontinue == 2" v-on:mouseleave="changecontinue2" @click="continueLab" src="../../assets2/按钮继续实验点击.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalstop == 1" v-on:mouseenter="changestop1" @click="stopLab" src="../../assets2/按钮停止实验.png" style="position: absolute;left: 45%;top:50%"/>
      <img v-if="singnalstop == 2" v-on:mouseleave="changestop2" @click="stopLab" src="../../assets2/按钮停止实验点击.png" style="position: absolute;left: 45%;top:50%"/>


      <v-flex style="position: absolute;left: 69%;top:77.5%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Kp:</h2>
          <el-input v-model="kp" placeholder="kp" label="kp" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 79%;top:77.5%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Ki:</h2>
          <el-input v-model="ki" placeholder="ki" label="ki" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 89%;top:77.5%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Kd:</h2>
          <el-input v-model="kd" placeholder="kd" label="kd" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 79%;top:85%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">R:</h2>
          <el-input v-model="R" placeholder="R" label="R" class="te" oninput="if(value>200)value=200"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 69%;top:85%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">T:</h2>
          <el-input v-model="T" placeholder="T" label="T" class="te"></el-input>
        </v-col>
      </v-flex>

      <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>



      <img src="../../assets2/下载.png" style="position: absolute;left: 56.5%;top: 11.3%;"/>

      <div class="px2" ref="chartOne"  style="position: absolute;left: 16%;top:12%;width: 800px;height:400px"></div>
      <div>
          <el-slider
            style="position: absolute;left: 83.5%;top: 25%;height: 120px;width: 50px;"
            v-model="value"
            :show-tooltip="true"
            vertical
            max="200">
          </el-slider>
      </div>
      <v-flex style="position: absolute;left: 75%;top:25%;width: 120px;">
        <v-col cols="24" sm="12" md="6" >
          <h4 style="color: white;font-size: 150%;">液位/mm</h4>
          <el-input  v-model="value"  class="te1" >{{value|numFilter}}</el-input>
        </v-col>
      </v-flex>

      <span v-show="timesT>0" style="position:absolute;left: 66.3%;top: 50.9%;font-size:30px;line-height:30px; color:#4cb9fc"> ▃</span>
      <span v-show="timesT>0" style="position:absolute;left: 64.9%;top: 50.9%;font-size:34px;line-height:30px; color:#4cb9fc"> ▃</span>

      <span v-show="timesT>0" style="position:absolute;left:63.9%;top: 52.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:0px;">▊</span>
      <span v-show="timesT>0" style="position:absolute;left:64.1%;top: 52.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:0px;">▊</span>

      <span v-show="timesT>0" style="position:absolute;left:63.5%;top: 48.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>0" style="position:absolute;left:63.5%;top: 46%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>0" style="position:absolute;left:63.5%;top: 44%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:63.5%;top: 42%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:63.5%;top: 40%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:63.5%;top: 39%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>

      <span v-show="timesT>3" style="position:absolute;left:63.5%;top: 30%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>3" style="position:absolute;left:63.5%;top: 28%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>3" style="position:absolute;left:63.5%;top: 26%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>4" style="position:absolute;left:63.5%;top: 24%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>4" style="position:absolute;left:63.5%;top: 22%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>4" style="position:absolute;left:63.5%;top: 20%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:63.5%;top: 18%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:63.5%;top: 17%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:63.9%;top: 14%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:64.2%;top: 14%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:30px;">▊</span>

      <span v-show="timesT>5" style="position:absolute;left:65%;top: 12%;font-size:30px; color:#4cb9fc">▃</span>
      <span v-show="timesT>6" style="position:absolute;left:66.3%;top: 12%;font-size:30px; color:#4cb9fc">▃▃▃</span>
      <span v-show="timesT>6" style="position:absolute;left:68%;top: 12%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>6" style="position:absolute;left:71%;top: 12%;font-size:30px; color:#4cb9fc">▃</span>
      <span v-show="timesT>6" style="position:absolute;left:72.4%;top: 12%;font-size:30px; color:#4cb9fc">▃▃▃</span>

      <span v-show="timesT>7" style="position:absolute;left:74%;top: 12%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>7" style="position:absolute;left:77%;top: 12%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>7" style="position:absolute;left:80%;top: 12%;font-size:30px; color:#4cb9fc">▃▃▃▃▃</span>
      <span v-show="timesT>7" style="position:absolute;left:85%;top: 12%;font-size:30px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:85.5%;top: 12%;font-size:30px; color:#4cb9fc">▃</span>

      <span v-show="timesT>7" style="position:absolute;left:84.5%;top: 14.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:30px;line-height:40px;">▊</span>

<!--      <img  src="../../assets2/一阶无干扰水箱.png" style="position: absolute;left: 62%;top: 8%;"/>
      <img  id="shuibeng" src="../../assets2/水泵.png" style="position: absolute;left: 68.3%;top: 50.8%;"/>-->

      <!--<div id="circle1" class="circle" style="position:relative;top:-3693px;left:265px">
      </div>
      <div id="circle2" class="circle" style="position:relative;top:-3715px;left:358px">
      </div>
      <div id="circle3" class="circle" style="position:relative;top:-3712px;left:492px">
      </div>
      <div id="circle4" class="circle" style="position:relative;top:-3732px;left:588px">
      </div>
      <div id="circle5" class="circle" style="position:relative;top:-3726px;left:725px">
      </div>
      <div id="circle6" class="circle" style="position:relative;top:-3747px;left:810px">
      </div>
      <div id="circle7" class="circle" style="position:relative;top:-3437px;left:107px">
      </div>
      <div id="circle8" class="circle" style="position:relative;top:-3443px;left:935px">
      </div>-->
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
      filters: {
        numFilter (value) {
          // 截取当前数据到小数点后两位
          let realVal = parseFloat(value).toFixed(2)
          return realVal
        }
      },
        name: "EasypidForm4",
      data() {
        return {
          value:0,
          ta:0,
          signalwater:1,

          res:[],
          start:false,
          flaghelp:false,
          url2:"../../../static/实验步骤.pdf",
          singnalreturn:1,
          singanlzhuye:1,
          singnalhelp:1,
          clearTimeSet: "",
          tag1:1,
          tag2:1,
          tag3:2,
          tag4:1,
          tag5:1,
          tag6:1,
          tag7:1,
          singnalqidong:1,
          
          singnalchuang:1,
          singnalstart:1,
          singnalpause:3,
          singnalcontinue:3,
          singnalstop:1,
          singnalek:1,
          singnaluk:1,
          singnalPID:1,

          message:'响应曲线',
          flag:true,

          k1: 5,
          a1: 2,
          R: 100,
          T: 0.1,
          kp: 1,
          ki: 1,
          kd: 1,
          modelId:"",
          timesT: 0,
          xData:[],
          setData:[],
          showexp:false,
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
                saveAsImage: {show: true,image:'../../assets2/下载.png'},

              }
            },
            legend: {
              color: ["#47D8BE", "#F9A589","#3A5FCD","#EE0000","#F9A589","#3A5FCD","#EE0000"],
              data: ['液位', '设定值',"误差曲线","控制输出","p","i","d"],
              selected: {'误差曲线': false, '控制输出': false,'p':false,'i':false,'d':false},
              left: 'center',
              bottom: 'bottom',
              textStyle: {
                color: 'white',
                fontSize: 24
              }
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
              boundaryGap: ['15%', '15%'],//留白大小，坐标轴两边留白

              name:'时间/s',
              nameTextStyle : {
                color: 'white',
                fontSize: 24
              },
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
              }

            },
            yAxis: {

              //min: -500,
              //max:500,
              name:'液位/mm',
              nameTextStyle : {
                color: 'white',
                fontSize: 24,
              },
              type: 'value',
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  color: '#DDD'
                }
              },
              axisLabel: {

                show: true,
                textStyle: {
                  color: 'white'
                }
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#333"
                },
              },
              splitArea: {
                show: false
              }
            },
            series: [
              {
                symbol: "none",
                name: '液位',
                type: 'line',
                step: '',
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
                name: '设定值',
                type: 'line',
                data: [1],
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
                // smooth: true
              },
              {
                symbol: "none",
                name: '误差曲线',
                type: 'line',
                step: '',
                data: [2],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: {
                      type: 'linear',
                      colorStops: [{
                        offset: 0,
                        color: '#3A5FCD' // 0% 处的颜色
                      },
                        {
                          offset: 0.4,
                          color: '#3A5FCD' // 100% 处的颜色
                        }, {
                          offset: 1,
                          color: '#3A5FCD' // 100% 处的颜色
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
                    color: '#3A5FCD',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#3A5FCD"
                  }
                },
                // smooth: true
              },
              {
                symbol: "none",
                name: '控制输出',
                type: 'line',
                step: '',
                data: [3],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: {
                      type: 'linear',
                      colorStops: [{
                        offset: 0,
                        color: '#EE0000' // 0% 处的颜色
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
                    color: '#EE0000',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#EE0000"
                  }
                },
                // smooth: true
              },
              {
                symbol: "none",
                name: 'p',
                type: 'line',
                step: 'end',
                data: [4],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: {
                      type: 'linear',
                      colorStops: [{
                        offset: 0,
                        color: '#EE0000' // 0% 处的颜色
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
                    color: '#EE0000',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#EE0000"
                  }
                },
                // smooth: true
              },
              {
                symbol: "none",
                name: 'i',
                type: 'line',
                step: 'end',
                data: [5],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: {
                      type: 'linear',
                      colorStops: [{
                        offset: 0,
                        color: '#FFA500' // 0% 处的颜色
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
                    color: '#FFA500',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#FFA500"
                  }
                },
                // smooth: true
              },
              {
                symbol: "none",
                name: 'd',
                type: 'line',
                step: 'end',
                data: [6],
                lineStyle: {
                  normal: {
                    width: 1,
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
                // smooth: true
              },
            ]
          },
        }
      },
      mounted(){
        this.initChartOne();
        this.k1 = this.push.params.k1;

      },
      /*created(){
        this.$nextTick(()=>{
          setTimeout(()=>{
            this.initChartOne()
          },20)
        })
      },*/
      methods: {

        /**
         * 小轮子转
         */
        circle(id) {
          var current = 0;
          function zhuan(){
            var cr1 = document.getElementById(id);
            current = (current+10)%360;
            cr1.style.transform = 'rotate('+current+'deg)';
          }
          this.timer = setInterval(zhuan,40)
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


        changeqidong1(){
          this.singnalqidong = 2
        },
        changeqidong2(){
          this.singnalqidong = 1
        },
        start1(){
          this.start = true;
          this.$message.success("系统启动成功");
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

        changeek1(){
          this.singnalek = 2
        },
        changeek2(){
          this.singnalek = 1
        },
        changeuk1(){
          this.singnaluk = 2
        },
        changeuk2(){
          this.singnaluk = 1
        },
        changePID1(){
          this.singnalPID = 2
        },
        changePID2(){
          this.singnalPID = 1
        },


        modelSub(){
          // if (this.start == true){
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
            }).catch(() => {
              this.$message.error('新建模型失败');
            });
          // }else {
          //   this.$message.error("系统未启动")
          // }
        },
        startLab(){
          clearInterval(this.clearTimeSet);
          this.timesT = 0;
          this.xData = [];
          this.res =  "";
          this.option.xAxis.data = [];
          this.option.series[0].data=[];
          this.option.series[1].data=[];
          this.option.series[2].data=[];
          this.option.series[3].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];
          this.$http({
            method : 'post',
            url: '/model/easyPID',
            data: {
              kp: this.kp,
              ki: this.ki,
              kd: this.kd,
              T: this.T,
              R: this.R,
              modelId: this.modelId,
            },
          }).then((resp) => {
            if(resp.data.status == 'success'){
              // 简单pid实验成功
              this.$message.success("基本数字pid实验成功！");
              this.res = resp;
              this.flag = true;
              this.signalwater = 3;
              resp.data.data.result[0].unshift(0);
              resp.data.data.result[1].unshift(0);
              resp.data.data.result[2].unshift(0);
              resp.data.data.result[3].unshift(0);
              resp.data.data.result[4].unshift(0);
              resp.data.data.result[5].unshift(0);
              this.circle('shuibeng');
                this.clearTimeSet=window.setInterval(() => {
                  // this.showData(resp.data.data.result)
                  setTimeout(this.showData(resp.data.data.result), 0);
                }, 500);
            }else{
              //this.$message.error('u（k）超量程，请重新设置参数');
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
          }).catch(() => {
            // this.$message.error('pid实验失败！');
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
          this.singnalpause = 1;
          this.singnalcontinue = 3;
          // this.signalwater = 2;

          this.clearTimeSet=window.setInterval(() => {
            // this.showData(resp.data.data.result)
            setTimeout(this.o(), 0);
          }, 6000);
        },
        o(){
          // this.signalwater = 3;
        },

        showData(resp){
          if(this.flag){
            this.timesT++;
            this.initChartOne();
          }
/*
          this.$message.error(this.timesT);
*/
          for (let i = 0; i < this.timesT; i++) {
              this.xData.push(''+i);
              this.setData[i] = this.R;
              this.value=resp[0][i];


          }
          this.option.xAxis.data = this.xData;
          this.option.series[0].data=resp[0];
          this.option.series[1].data=this.setData;

          this.option.series[2].data=resp[1];
          this.option.series[3].data=resp[2];
          this.option.series[4].data=resp[3];
          this.option.series[5].data=resp[4];
          this.option.series[6].data=resp[5];
          this.xData=[];
        },
        showet(){
          if(this.res.data.status == 'success'){
              // 简单pid实验成功
              this.$message.success("显示ek成功！");
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showE(this.res.data.data.result), 0);
              }, 1000);
          }else {
              this.$message.error('显示ek失败！');
          }
        },
        showE(resp){
          /*if(this.flag){
            this.timesT++;
          }
        this.timesT++;*/
        for (let i = 0; i < this.timesT; i++) {
            this.xData.push(''+i);
            // this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;

          this.option.series[2].data=resp[1];
    /*      this.option.series[0].data=[];*/
/*
          this.option.series[3].data=[];
*/
/*
          this.option.series[1].data=[];
*/
          /*this.option.series[6].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];*/
          this.xData=[];
          this.initChartOne();
        },
        showut(){

            if(this.res.data.status == 'success'){
              // 简单pid实验成功
              this.$message.success("显示u（k）成功！");
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showU(this.res.data.data.result), 0);
              }, 1000);
            }else{
              this.$message.error('显示u（k）失败！');
            }

        },
        showU(resp){
          /*if(this.flag){
            this.timesT++;
          }*/
          for (let i = 0; i < this.timesT; i++) {
            this.xData.push(''+i);
            // this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;
          this.option.series[3].data=resp[2];
          /*this.option.series[1].data=[];
          this.option.series[2].data=[];
          this.option.series[0].data=[];
          this.option.series[6].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];*/
          this.xData=[];

        },
        showpid(){

          if(this.res.data.status == 'success'){
            // 简单pid实验成功
            this.$message.success("显示pid成功！");

            this.clearTimeSet=window.setInterval(() => {
              setTimeout(this.showPID(this.res.data.data.result), 0);
            }, 1000);

          }else{
            this.$message.error('显示pid失败！');
          }
        },
        showPID(resp){
          /*if(this.flag){
            this.timesT++;
          }*/
          for (let i = 0; i < this.timesT; i++) {
            this.xData.push('' + i);
            this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;
          this.option.series[4].data=resp[3];
          this.option.series[5].data=resp[4];
          this.option.series[6].data=resp[5];
         /* this.option.series[0].data=[];
          this.option.series[1].data=[];
          this.option.series[2].data=[];
          this.option.series[3].data=[];*/
          this.initChartOne();

          this.xData=[];
        },

        //停止实验
        stopLab(){
          clearInterval(this.timer);
          this.singnalstart = 1;
          this.singnalpause = 3;
          this.singnalcontinue = 3;
          this.flag = false;
          /*clearInterval(this.clearTimeSet);
          this.timesT = 0;
          this.xData = [];
          this.res =  "";
          this.option.xAxis.data = [];
          this.option.series[0].data=[];
          this.option.series[1].data=[];
          this.option.series[2].data=[];
          this.option.series[3].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];*/
          this.initChartOne();
          this.beforeDestroy();
          // this.signalwater = 1;
        },
        //暂停实验
        pauseLab(){
          clearInterval(this.timer);
          this.singnalcontinue = 1;
          this.singnalstart = 3;
          this.singnalpause = 3;
          this.flag = false;
          pause(this.clearTimeSet);
        },
        beforeDestroy(){
          this.flag=true;
          window.clearInterval(this.clearTimeSet);
          this.clearTimeSet = null;
          this.$message.success("删除成功");
        },
        continueLab () {
          this.circle('shuibeng');//转轮子
          this.flag = true;
          this.singnalstart = 3;
          this.singnalpause = 1;
          this.singnalcontinue = 3;
        },
        //第一个chart
        initChartOne() {
          var l_chart = echarts.init(this.$refs.chartOne);
          l_chart.setOption(this.option, true);
        },
        formatTooltip(val) {
          /* 处理小于或大于指定值 */
          if (val < 50) {
            this.orderForm.bandWidth = 50
            this.orderData.bandWidth = 50
          } else if (val > 3000) {
            this.orderForm.bandWidth = 3000
            this.orderData.bandWidth = 3000
          }

          /* 自定义mask文字颜色 */
          const customClassValue = document.getElementsByClassName('el-slider__marks-text')
          for (let i = 0; i < customClassValue.length; i++) {
            let value = customClassValue[i].innerHTML
            /* 去除Masks的单位(1000M => 1000) */
            value = value.substring(0, value.length - 1)

            /* 当滑块的值大于mask时改变颜色 */
            if (val >= value) {
              customClassValue[i].style.color = '#FFFFFF'
            } else {
              customClassValue[i].style.color = '#717171'
            }
          }

          /* Tooltip增加单位 */
          return val + 'M'
        },
      }
    }
</script>

<style scoped>

  .te1>>>input
  {
    width: 100px;
    color:white;
    background-color: unset;
    font-size:20px !important;
  }
  .te>>>input
  {
    width: 80px;
    color:white;
    background-color: unset;
    font-size:20px !important;
  }

/*  .textarea >>> .el-textarea__inner{
    font-family:"Microsoft" !important;
    font-size:40px !important;
  }*/


</style>

<style>
  .el-slider__runway {
    background-color: unset !important;
  }
  .el-slider__button {
    width: 0px !important;
    height: 0px !important;
    border: 2px solid #409EFF;
    background-color: #FFF;
    border-radius: 50%;
    -webkit-transition: .2s;
    transition: .2s;
    user-select: none;
  }
  .el-slider.is-vertical .el-slider__bar {
    width: 80px !important;
    height: auto;
    border-radius: 0 0 3px 3px;
  }
  .circle{
    width: 8px;
    height: 8px;
    /*line-height: 100px;*/
    /*text-align: center;*/
    /*margin: 100px;*/
    background-color: red;
    border-radius: 50%;
    border: 2px solid black;
  }
</style>
