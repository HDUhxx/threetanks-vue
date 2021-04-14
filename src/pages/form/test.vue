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

      <!--<img  v-if="tag6 == 1" src="../../assets2/按钮一阶纯滞后0.png" v-on:mouseenter="changetag61" style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>-->
      <img  src="../../assets2/按钮一阶纯滞后.png" v-on:mouseleave="changetag62" style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>

      <!--<img  v-if="tag4 == 1" src="../../assets2/按钮一阶系统串级0.png" v-on:mouseenter="changetag41" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>-->
      <img   src="../../assets2/按钮一阶系统串级.png" v-on:mouseleave="changetag42" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>

      <img                   src="../../assets2/按钮二阶前馈1.png"                                  style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>

      <!--<img  v-if="tag5 == 1" src="../../assets2/按钮二阶系统复杂控制0.png" v-on:mouseenter="changetag51" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>-->
      <img   src="../../assets2/按钮二阶系统复杂控制.png" v-on:mouseleave="changetag52" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>

      <!--<img  v-if="tag1 == 1" src="../../assets2/按钮编写算法0.png" v-on:mouseenter="changetag11" style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>-->
      <img   src="../../assets2/按钮编写算法.png" v-on:mouseleave="changetag12" style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>

      <img src="../../assets2/动态水箱1底框.png" style="position: absolute;left: 15%;top:9%;"/>
      <img v-if="signalwater == 1" src="../../assets2/一阶系统-静态透明.png" style="position: absolute;left: 10%;top: 8%;"/>
      <img v-if="signalwater == 2" src="../../assets2/一阶系统--动画透明.gif" style="position: absolute;left: 10%;top: 8%;"/>
      <img v-if="signalwater == 3" src="../../assets2/一阶系统--循环透明.gif" style="position: absolute;left: 10%;top: 8%;"/>

      <!--<img v-if="singnalqidong == 1" src="../../assets2/按钮启动程序.png" @click="start1" v-on:mouseenter="changeqidong1" style="position: absolute;left: 54%;top: 50%;"/>-->
      <!--<img v-if="singnalqidong == 2" src="../../assets2/按钮启动程序1.png" @click="start1" v-on:mouseleave="changeqidong2" style="position: absolute;left: 54%;top: 50%;"/>-->


      <img src="../../assets2/框图5底框前馈.png" style="position: absolute;left: 15%;top:60%;"/>
      <img src="../../assets2/框图加1.png" style="position: absolute;left: 18%;top:68%;"/>

      <img src="../../assets2/底框系统响应曲线.png" style="position: absolute;left: 66%;top:9%;"/>
      <!--<img src="../../assets2/底框模型参数.png" style="position: absolute;left: 66%;top:54%;"/>-->
      <img src="../../assets2/底框自适应增益.png" style="position: absolute;left: 66%;top:70%;"/>
<!--      <img src="../../assets2/输入框k1上.png" style="position: absolute;left: 66%;top:48%"/>
      <img src="../../assets2/输入框a1上.png" style="position: absolute;left: 73%;top:48%"/>
      <img src="../../assets2/输入框k2上.png" style="position: absolute;left: 80%;top:48%"/>
      <img src="../../assets2/输入框a2上.png" style="position: absolute;left: 87%;top:48%"/>-->

      <img src="../../assets2/公式二阶.png" style="position: absolute;left: 69%;top: 58%;"/>
      <v-flex style="position: absolute;left:67%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">a0:</h2>
          <el-input v-model="k1" placeholder="k1" label="k1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 74%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">a1:</h2>
          <el-input v-model="a1" placeholder="a1" label="a1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 81%;top:63%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">a2:</h2>
          <el-input v-model="ta" placeholder="τ" class="te"></el-input>
        </v-col>
      </v-flex>


      <img v-if="singnalchuang == 1" v-on:mouseenter="changechuang1" @click="modelSub" src="../../assets2/按钮创建参考模型.png" style="position: absolute;left: 89%;top:65%;"/>
      <img v-if="singnalchuang == 2" v-on:mouseleave="changechuang2" @click="modelSub" src="../../assets2/按钮创建参考模型点击.png" style="position: absolute;left:89%;top:65%;"/>



     <!-- <img v-if="singnalchuang == 1" v-on:mouseenter="changechuang1" @click="modelSub" src="../../assets2/按钮创建模型.png" style="position: absolute;left:87%;top:65%"/>
      <img v-if="singnalchuang == 2" v-on:mouseleave="changechuang2" @click="modelSub" src="../../assets2/按钮创建模型1.png" style="position: absolute;left:87%;top:65%"/>-->

      <img v-if="singnalstart == 1" v-on:mouseenter="changestart1" @click="startLab" src="../../assets2/按钮开始实验.png" style="position: absolute;left: 72%;top:45%"/>
      <img v-if="singnalstart == 2" v-on:mouseleave="changestart2" @click="startLab" src="../../assets2/按钮开始实验1.png" style="position: absolute;left:72%;top:45%"/>
      <img v-if="singnalpause == 1" v-on:mouseenter="changepause1" @click="pauseLab" src="../../assets2/按钮暂停实验.png" style="position: absolute;left: 72%;top:45%"/>
      <img v-if="singnalpause == 2" v-on:mouseleave="changepause2" @click="pauseLab" src="../../assets2/按钮暂停实验1.png" style="position: absolute;left:72%;top:45%"/>
      <img v-if="singnalcontinue == 1" v-on:mouseenter="changecontinue1" @click="continueLab" src="../../assets2/按钮继续实验.png" style="position: absolute;left: 72%;top:45%"/>
      <img v-if="singnalcontinue == 2" v-on:mouseleave="changecontinue2" @click="continueLab" src="../../assets2/按钮继续实验1.png" style="position: absolute;left:72%;top:45%"/>
      <img v-if="singnalstop == 1" v-on:mouseenter="changestop1" @click="stopLab" src="../../assets2/按钮停止实验.png" style="position: absolute;left: 85%;top:45%"/>
      <img v-if="singnalstop == 2" v-on:mouseleave="changestop2" @click="stopLab" src="../../assets2/按钮停止实验1.png" style="position: absolute;left: 85%;top:45%"/>

      <v-dialog
        v-model="dialog1"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="headline"><h2>干扰N2</h2></span>
          </v-card-title>
          <v-card-text>
            <span><h1>干扰N2：Gn(s)=Kn/(Tns+1),其中:</h1></span>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Kn"
                    v-model="Kn"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Tn"
                    v-model="Tn"
                    required
                  ></v-text-field>
                </v-col>

                <v-btn
                  style="left: 20%;"
                  color="blue darken-1"
                  text
                  @click="dialog1 = false"
                >
                  取消
                </v-btn>
                <v-btn
                  style="left: 35%;"
                  color="blue darken-1"
                  text
                  @click="dialog1 = false"
                >
                  确认
                </v-btn>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        persistent
        max-width="600px"
        style="height: 800px;"
      >
        <v-card>
          <v-card-title>
            <span class="headline"><h2>干扰N1</h2></span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-radio-group
                v-model="signal"
                style="width: 180px"
              >
                <template>
                  <div><h1>请选择扰动类型</h1></div>
                </template>
                <v-radio
                  value="1"
                  label="阶跃干扰"
                >
                </v-radio>
                <v-radio
                  value="2"
                  label="正弦干扰"
                >
                </v-radio>
                <v-radio
                  value="3"
                  label="白噪声干扰"
                >
                </v-radio>
              </v-radio-group>

              <v-layout>
                <v-flex v-if="signal == 1" style="position:relative;">
                  <v-flex>
                    <!--<img src="../../assets2/参数框蓝底.png" style="width: 120px;height: 40px;position: absolute;top: 13%;"/>-->
                    <v-text-field placeholder="阶跃扰动值" v-model="disturbValue" style="width: 120px;" clearable></v-text-field></v-flex>
                </v-flex>
                <v-flex v-if="signal == 2" style="position:relative;">
                  <!--<img src="../../assets2/参数框蓝底.png" style="width: 110px;height: 40px;position: absolute;top: 13%;left: 33%;"/>
                  <img src="../../assets2/参数框蓝底.png" style="width: 110px;height: 40px;position: absolute;top: 13%;left: 66%;"/>
                  <img src="../../assets2/参数框蓝底.png" style="width: 110px;height: 40px;position: absolute;top: 13%;"/>-->
                  <v-layout>
                    <v-flex><v-text-field style="width: 120px;" placeholder="正弦扰动振幅" v-model="disturbValueA" clearable/></v-flex>
                    <v-flex><v-text-field style="width: 120px;" placeholder="正弦扰动频率" v-model="disturbValueW" clearable/></v-flex>
                    <v-flex><v-text-field style="width: 120px;" placeholder="正弦扰动相角" v-model="disturbValueF" clearable/></v-flex>
                  </v-layout>
                </v-flex>
                <v-flex v-if="signal == 3" style="position:relative;">
                  <!--<img src="../../assets2/参数框蓝底.png" style="width: 120px;height: 40px;position: absolute;top: 13%;"/>-->
                  <v-text-field placeholder="白噪声振幅" v-model="disturbValue" style="width: 120px;" clearable></v-text-field>
                </v-flex>
              </v-layout>

              <v-row>
                <v-btn
                  style="left: 20%;"
                  color="blue darken-1"
                  text
                  @click="dialog2 = false"
                >
                  取消
                </v-btn>
                <v-btn
                  style="left: 35%;"
                  color="blue darken-1"
                  text
                  @click="dialog2 = false"
                >
                  确认
                </v-btn>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <img src="../../assets2/公式rrr.png" style="position: absolute;left: 68%;top:78%;"/>

      <v-flex style="position: absolute;left: 68%;top:92%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">rp:</h2>
          <el-input v-model="kp1" placeholder="kp1"  class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:92%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">ri:</h2>
          <el-input v-model="ki1" placeholder="ki1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:92%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">rd:</h2>
          <el-input v-model="kd1" placeholder="kd1" class="te"></el-input>
        </v-col>
      </v-flex>
      <!--<v-flex style="position: absolute;left: 89%;top:75%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">u200</h2>
          <el-input v-model="T" placeholder="T" label="T" class="te"></el-input>
        </v-col>
      </v-flex>

      <v-flex style="position: absolute;left: 68%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">T:</h2>
          <el-input v-model="kp10" placeholder="kp10" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">R:</h2>
          <el-input v-model="ki10" placeholder="ki10" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">A:</h2>
          <el-input v-model="kd10" placeholder="kd10" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 89%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">t:</h2>
          <el-input v-model="R" placeholder="R" label="R" class="te"></el-input>
        </v-col>
      </v-flex>-->

    <!--  <v-flex style="position: absolute;left: 68%;top:89%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">u20:</h2>
          <el-input v-model="kp0" placeholder="kp0"  class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:89%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">u120:</h2>
          <el-input v-model="ki0" placeholder="ki0" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:89%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">u200:</h2>
          <el-input v-model="kd0" placeholder="kd0" class="te"></el-input>
        </v-col>
      </v-flex>



      <v-flex style="position: absolute;left: 89%;top:89%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;">t</h2>
          <el-input  placeholder="T" label="T" class="te"></el-input>
        </v-col>
      </v-flex>-->

      <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
      <img src="../../assets2/下载.png" style="position: absolute;left: 95.2%;top: 13.3%;"/>
      <div class="px2" ref="chartOne"  style="position: absolute;left: 67%;top:13%;width: 600px;height:300px"></div>

      <!--<v-btn @click="dialog2 = true" style="background: #FF8C00;z-index: 9" class="disturb1">请输入干扰1</v-btn>-->
      <v-btn @click="dialog1 = true" style="background: #FF8C00;z-index: 9" class="disturb2">请输入干扰N</v-btn>

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
        name: "test",
    data() {
      return {
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
        tag7:2,

        singnalchuang:1,
        singnalstart:1,
        singnalpause:3,
        singnalcontinue:3,
        singnalstop:1,

        singnalqidong:1,


        flag:true,
        k1: 5,
        a1: 2,
        R: 100,
        T: 0.1,
        kp1: 0.5,
        ki1: 0.1,
        kd1: 0.1,
        kp10: 0.5,
        ki10: 0.1,
        kd10:0.1,
        kp0:0.5,
        ki0:0.1,
        kd0:0.1,
        Kn:4,
        Tn:2,
        modelId:"",
        disturbOptions: [{
          value: '1',
          label: '阶跃扰动'
        }, {
          value: '2',
          label: '正弦信号扰动'
        }, {
          value: '3',
          label: '高斯白噪声扰动'
        }],
        signal:"",
        disturbValue:"",
        disturbValueA: "",
        disturbValueW:"",
        disturbValueF:"",
        disturbValue1:"",
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
            color: ["#47D8BE", "#F9A589","#1E90FF","#FFFF00","#00ff00"],
            data: ['无干扰PI', '未加干扰MIT','加干扰PI','加干扰MIT','设定值'],
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
              name: '无干扰PI',
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
              name: '未加干扰MIT',
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
              name: '加干扰PI',
              type: 'line',
              data: [0,0,0,0,0],
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#1E90FF' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#1E90FF' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#1E90FF' // 100% 处的颜色
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
                  color: '#1E90FF',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#1E90FF"
                }
              },
              smooth: true
            },
            {
              symbol: "none",
              name: '加干扰MIT',
              type: 'line',
              data: [0,0,0,0,0],
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#FFFF00' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#FFFF00' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#FFFF00' // 100% 处的颜色
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
                  color: '#FFFF00',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#FFFF00"
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
        this.option.xAxis.data = [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8,12.9,13,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.8,13.9,14,14.1,14.2,14.3,14.4,14.5,14.6,14.7,14.8,14.9,15,15.1,15.2,15.3,15.4,15.5,15.6,15.7,15.8,15.9,16,16.1,16.2,16.3,16.4,16.5,16.6,16.7,16.8,16.9,17,17.1,17.2,17.3,17.4,17.5,17.6,17.7,17.8,17.9,18,18.1,18.2,18.3,18.4,18.5,18.6,18.7,18.8,18.9,19,19.1,19.2,19.3,19.4,19.5,19.6,19.7,19.8,19.9,20,20.1,20.2,20.3,20.4,20.5,20.6,20.7,20.8,20.9,21,21.1,21.2,21.3,21.4,21.5,21.6,21.7,21.8,21.9,22,22.1,22.2,22.3,22.4,22.5,22.6,22.7,22.8,22.9,23,23.1,23.2,23.3,23.4,23.5,23.6,23.7,23.8,23.9,24,24.1,24.2,24.3,24.4,24.5,24.6,24.7,24.8,24.9,25,25.1,25.2,25.3,25.4,25.5,25.6,25.7,25.8,25.9,26,26.1,26.2,26.3,26.4,26.5,26.6,26.7,26.8,26.9,27,27.1,27.2,27.3,27.4,27.5,27.6,27.7,27.8,27.9,28,28.1,28.2,28.3,28.4,28.5,28.6,28.7,28.8,28.9,29,29.1,29.2,29.3,29.4,29.5,29.6,29.7,29.8,29.9,30,30.1,30.2,30.3,30.4,30.5,30.6,30.7,30.8,30.9,31,31.1,31.2,31.3,31.4,31.5,31.6,31.7,31.8,31.9,32,32.1,32.2,32.3,32.4,32.5,32.6,32.7,32.8,32.9,33,33.1,33.2,33.3,33.4,33.5,33.6,33.7,33.8,33.9,34,34.1,34.2,34.3,34.4,34.5,34.6,34.7,34.8,34.9,35,35.1,35.2,35.3,35.4,35.5,35.6,35.7,35.8,35.9,36,36.1,36.2,36.3,36.4,36.5,36.6,36.7,36.8,36.9,37,37.1,37.2,37.3,37.4,37.5,37.6,37.7,37.8,37.9,38,38.1,38.2,38.3,38.4,38.5,38.6,38.7,38.8,38.9,39,39.1,39.2,39.3,39.4,39.5,39.6,39.7,39.8,39.9,40,40.1,40.2,40.3,40.4,40.5,40.6,40.7,40.8,40.9,41,41.1,41.2,41.3,41.4,41.5,41.6,41.7,41.8,41.9,42,42.1,42.2,42.3,42.4,42.5,42.6,42.7,42.8,42.9,43,43.1,43.2,43.3,43.4,43.5,43.6,43.7,43.8,43.9,44,44.1,44.2,44.3,44.4,44.5,44.6,44.7,44.8,44.9,45,45.1,45.2,45.3,45.4,45.5,45.6,45.7,45.8,45.9,46,46.1,46.2,46.3,46.4,46.5,46.6,46.7,46.8,46.9,47,47.1,47.2,47.3,47.4,47.5,47.6,47.7,47.8,47.9,48,48.1,48.2,48.3,48.4,48.5,48.6,48.7,48.8,48.9,49,49.1,49.2,49.3,49.4,49.5,49.6,49.7,49.8,49.9,50,50.1,50.2,50.3,50.4,50.5,50.6,50.7,50.8,50.9,51,51.1,51.2,51.3,51.4,51.5,51.6,51.7,51.8,51.9,52,52.1,52.2,52.3,52.4,52.5,52.6,52.7,52.8,52.9,53,53.1,53.2,53.3,53.4,53.5,53.6,53.7,53.8,53.9,54,54.1,54.2,54.3,54.4,54.5,54.6,54.7,54.8,54.9,55,55.1,55.2,55.3,55.4,55.5,55.6,55.7,55.8,55.9,56,56.1,56.2,56.3,56.4,56.5,56.6,56.7,56.8,56.9,57,57.1,57.2,57.3,57.4,57.5,57.6,57.7,57.8,57.9,58,58.1,58.2,58.3,58.4,58.5,58.6,58.7,58.8,58.9,59,59.1,59.2,59.3,59.4,59.5,59.6,59.7,59.8,59.9,60,60.1,60.2,60.3,60.4,60.5,60.6,60.7,60.8,60.9,61,61.1,61.2,61.3,61.4,61.5,61.6,61.7,61.8,61.9,62,62.1,62.2,62.3,62.4,62.5,62.6,62.7,62.8,62.9,63,63.1,63.2,63.3,63.4,63.5,63.6,63.7,63.8,63.9,64,64.1,64.2,64.3,64.4,64.5,64.6,64.7,64.8,64.9,65,65.1,65.2,65.3,65.4,65.5,65.6,65.7,65.8,65.9,66,66.1,66.2,66.3,66.4,66.5,66.6,66.7,66.8,66.9,67,67.1,67.2,67.3,67.4,67.5,67.6,67.7,67.8,67.9,68,68.1,68.2,68.3,68.4,68.5,68.6,68.7,68.8,68.9,69,69.1,69.2,69.3,69.4,69.5,69.6,69.7,69.8,69.9,70,70.1,70.2,70.3,70.4,70.5,70.6,70.7,70.8,70.9,71,71.1,71.2,71.3,71.4,71.5,71.6,71.7,71.8,71.9,72,72.1,72.2,72.3,72.4,72.5,72.6,72.7,72.8,72.9,73,73.1,73.2,73.3,73.4,73.5,73.6,73.7,73.8,73.9,74,74.1,74.2,74.3,74.4,74.5,74.6,74.7,74.8,74.9,75,75.1,75.2,75.3,75.4,75.5,75.6,75.7,75.8,75.9,76,76.1,76.2,76.3,76.4,76.5,76.6,76.7,76.8,76.9,77,77.1,77.2,77.3,77.4,77.5,77.6,77.7,77.8,77.9,78,78.1,78.2,78.3,78.4,78.5,78.6,78.7,78.8,78.9,79,79.1,79.2,79.3,79.4,79.5,79.6,79.7,79.8,79.9,80,80.1,80.2,80.3,80.4,80.5,80.6,80.7,80.8,80.9,81,81.1,81.2,81.3,81.4,81.5,81.6,81.7,81.8,81.9,82,82.1,82.2,82.3,82.4,82.5,82.6,82.7,82.8,82.9,83,83.1,83.2,83.3,83.4,83.5,83.6,83.7,83.8,83.9,84,84.1,84.2,84.3,84.4,84.5,84.6,84.7,84.8,84.9,85,85.1,85.2,85.3,85.4,85.5,85.6,85.7,85.8,85.9,86,86.1,86.2,86.3,86.4,86.5,86.6,86.7,86.8,86.9,87,87.1,87.2,87.3,87.4,87.5,87.6,87.7,87.8,87.9,88,88.1,88.2,88.3,88.4,88.5,88.6,88.7,88.8,88.9,89,89.1,89.2,89.3,89.4,89.5,89.6,89.7,89.8,89.9,90,90.1,90.2,90.3,90.4,90.5,90.6,90.7,90.8,90.9,91,91.1,91.2,91.3,91.4,91.5,91.6,91.7,91.8,91.9,92,92.1,92.2,92.3,92.4,92.5,92.6,92.7,92.8,92.9,93,93.1,93.2,93.3,93.4,93.5,93.6,93.7,93.8,93.9,94,94.1,94.2,94.3,94.4,94.5,94.6,94.7,94.8,94.9,95,95.1,95.2,95.3,95.4,95.5,95.6,95.7,95.8,95.9,96,96.1,96.2,96.3,96.4,96.5,96.6,96.7,96.8,96.9,97,97.1,97.2,97.3,97.4,97.5,97.6,97.7,97.8,97.9,98,98.1,98.2,98.3,98.4,98.5,98.6,98.7,98.8,98.9,99,99.1,99.2,99.3,99.4,99.5,99.6,99.7,99.8,99.9,100,100.1,100.2,100.3,100.4,100.5,100.6,100.7,100.8,100.9,101,101.1,101.2,101.3,101.4,101.5,101.6,101.7,101.8,101.9,102,102.1,102.2,102.3,102.4,102.5,102.6,102.7,102.8,102.9,103,103.1,103.2,103.3,103.4,103.5,103.6,103.7,103.8,103.9,104,104.1,104.2,104.3,104.4,104.5,104.6,104.7,104.8,104.9,105,105.1,105.2,105.3,105.4,105.5,105.6,105.7,105.8,105.9,106,106.1,106.2,106.3,106.4,106.5,106.6,106.7,106.8,106.9,107,107.1,107.2,107.3,107.4,107.5,107.6,107.7,107.8,107.9,108,108.1,108.2,108.3,108.4,108.5,108.6,108.7,108.8,108.9,109,109.1,109.2,109.3,109.4,109.5,109.6,109.7,109.8,109.9,110,110.1,110.2,110.3,110.4,110.5,110.6,110.7,110.8,110.9,111,111.1,111.2,111.3,111.4,111.5,111.6,111.7,111.8,111.9,112,112.1,112.2,112.3,112.4,112.5,112.6,112.7,112.8,112.9,113,113.1,113.2,113.3,113.4,113.5,113.6,113.7,113.8,113.9,114,114.1,114.2,114.3,114.4,114.5,114.6,114.7,114.8,114.9,115,115.1,115.2,115.3,115.4,115.5,115.6,115.7,115.8,115.9,116,116.1,116.2,116.3,116.4,116.5,116.6,116.7,116.8,116.9,117,117.1,117.2,117.3,117.4,117.5,117.6,117.7,117.8,117.9,118,118.1,118.2,118.3,118.4,118.5,118.6,118.7,118.8,118.9,119,119.1,119.2,119.3,119.4,119.5,119.6,119.7,119.8,119.9,120,120.1,120.2,120.3,120.4,120.5,120.6,120.7,120.8,120.9,121,121.1,121.2,121.3,121.4,121.5,121.6,121.7,121.8,121.9,122,122.1,122.2,122.3,122.4,122.5,122.6,122.7,122.8,122.9,123,123.1,123.2,123.3,123.4,123.5,123.6,123.7,123.8,123.9,124,124.1,124.2,124.3,124.4,124.5,124.6,124.7,124.8,124.9,125,125.1,125.2,125.3,125.4,125.5,125.6,125.7,125.8,125.9,126,126.1,126.2,126.3,126.4,126.5,126.6,126.7,126.8,126.9,127,127.1,127.2,127.3,127.4,127.5,127.6,127.7,127.8,127.9,128,128.1,128.2,128.3,128.4,128.5,128.6,128.7,128.8,128.9,129,129.1,129.2,129.3,129.4,129.5,129.6,129.7,129.8,129.9,130,130.1,130.2,130.3,130.4,130.5,130.6,130.7,130.8,130.9,131,131.1,131.2,131.3,131.4,131.5,131.6,131.7,131.8,131.9,132,132.1,132.2,132.3,132.4,132.5,132.6,132.7,132.8,132.9,133,133.1,133.2,133.3,133.4,133.5,133.6,133.7,133.8,133.9,134,134.1,134.2,134.3,134.4,134.5,134.6,134.7,134.8,134.9,135,135.1,135.2,135.3,135.4,135.5,135.6,135.7,135.8,135.9,136,136.1,136.2,136.3,136.4,136.5,136.6,136.7,136.8,136.9,137,137.1,137.2,137.3,137.4,137.5,137.6,137.7,137.8,137.9,138,138.1,138.2,138.3,138.4,138.5,138.6,138.7,138.8,138.9,139,139.1,139.2,139.3,139.4,139.5,139.6,139.7,139.8,139.9,140,140.1,140.2,140.3,140.4,140.5,140.6,140.7,140.8,140.9,141,141.1,141.2,141.3,141.4,141.5,141.6,141.7,141.8,141.9,142,142.1,142.2,142.3,142.4,142.5,142.6,142.7,142.8,142.9,143,143.1,143.2,143.3,143.4,143.5,143.6,143.7,143.8,143.9,144,144.1,144.2,144.3,144.4,144.5,144.6,144.7,144.8,144.9,145,145.1,145.2,145.3,145.4,145.5,145.6,145.7,145.8,145.9,146,146.1,146.2,146.3,146.4,146.5,146.6,146.7,146.8,146.9,147,147.1,147.2,147.3,147.4,147.5,147.6,147.7,147.8,147.9,148,148.1,148.2,148.3,148.4,148.5,148.6,148.7,148.8,148.9,149,149.1,149.2,149.3,149.4,149.5,149.6,149.7,149.8,149.9,150,150.1,150.2,150.3,150.4,150.5,150.6,150.7,150.8,150.9,151,151.1,151.2,151.3,151.4,151.5,151.6,151.7,151.8,151.9,152,152.1,152.2,152.3,152.4,152.5,152.6,152.7,152.8,152.9,153,153.1,153.2,153.3,153.4,153.5,153.6,153.7,153.8,153.9,154,154.1,154.2,154.3,154.4,154.5,154.6,154.7,154.8,154.9,155,155.1,155.2,155.3,155.4,155.5,155.6,155.7,155.8,155.9,156,156.1,156.2,156.3,156.4,156.5,156.6,156.7,156.8,156.9,157,157.1,157.2,157.3,157.4,157.5,157.6,157.7,157.8,157.9,158,158.1,158.2,158.3,158.4,158.5,158.6,158.7,158.8,158.9,159,159.1,159.2,159.3,159.4,159.5,159.6,159.7,159.8,159.9,160,160.1,160.2,160.3,160.4,160.5,160.6,160.7,160.8,160.9,161,161.1,161.2,161.3,161.4,161.5,161.6,161.7,161.8,161.9,162,162.1,162.2,162.3,162.4,162.5,162.6,162.7,162.8,162.9,163,163.1,163.2,163.3,163.4,163.5,163.6,163.7,163.8,163.9,164,164.1,164.2,164.3,164.4,164.5,164.6,164.7,164.8,164.9,165,165.1,165.2,165.3,165.4,165.5,165.6,165.7,165.8,165.9,166,166.1,166.2,166.3,166.4,166.5,166.6,166.7,166.8,166.9,167,167.1,167.2,167.3,167.4,167.5,167.6,167.7,167.8,167.9,168,168.1,168.2,168.3,168.4,168.5,168.6,168.7,168.8,168.9,169,169.1,169.2,169.3,169.4,169.5,169.6,169.7,169.8,169.9,170,170.1,170.2,170.3,170.4,170.5,170.6,170.7,170.8,170.9,171,171.1,171.2,171.3,171.4,171.5,171.6,171.7,171.8,171.9,172,172.1,172.2,172.3,172.4,172.5,172.6,172.7,172.8,172.9,173,173.1,173.2,173.3,173.4,173.5,173.6,173.7,173.8,173.9,174,174.1,174.2,174.3,174.4,174.5,174.6,174.7,174.8,174.9,175,175.1,175.2,175.3,175.4,175.5,175.6,175.7,175.8,175.9,176,176.1,176.2,176.3,176.4,176.5,176.6,176.7,176.8,176.9,177,177.1,177.2,177.3,177.4,177.5,177.6,177.7,177.8,177.9,178,178.1,178.2,178.3,178.4,178.5,178.6,178.7,178.8,178.9,179,179.1,179.2,179.3,179.4,179.5,179.6,179.7,179.8,179.9,180,180.1,180.2,180.3,180.4,180.5,180.6,180.7,180.8,180.9,181,181.1,181.2,181.3,181.4,181.5,181.6,181.7,181.8,181.9,182,182.1,182.2,182.3,182.4,182.5,182.6,182.7,182.8,182.9,183,183.1,183.2,183.3,183.4,183.5,183.6,183.7,183.8,183.9,184,184.1,184.2,184.3,184.4,184.5,184.6,184.7,184.8,184.9,185,185.1,185.2,185.3,185.4,185.5,185.6,185.7,185.8,185.9,186,186.1,186.2,186.3,186.4,186.5,186.6,186.7,186.8,186.9,187,187.1,187.2,187.3,187.4,187.5,187.6,187.7,187.8,187.9,188,188.1,188.2,188.3,188.4,188.5,188.6,188.7,188.8,188.9,189,189.1,189.2,189.3,189.4,189.5,189.6,189.7,189.8,189.9,190,190.1,190.2,190.3,190.4,190.5,190.6,190.7,190.8,190.9,191,191.1,191.2,191.3,191.4,191.5,191.6,191.7,191.8,191.9,192,192.1,192.2,192.3,192.4,192.5,192.6,192.7,192.8,192.9,193,193.1,193.2,193.3,193.4,193.5,193.6,193.7,193.8,193.9,194,194.1,194.2,194.3,194.4,194.5,194.6,194.7,194.8,194.9,195,195.1,195.2,195.3,195.4,195.5,195.6,195.7,195.8,195.9,196,196.1,196.2,196.3,196.4,196.5,196.6,196.7,196.8,196.9,197,197.1,197.2,197.3,197.4,197.5,197.6,197.7,197.8,197.9,198,198.1,198.2,198.3,198.4,198.5,198.6,198.7,198.8,198.9,199,199.1,199.2,199.3,199.4,199.5,199.6,199.7,199.8,199.9,200
        ];
        this.option.series[1].data=[0,9.12E-05,0.016688166,0.304585717,2.082467047,7.345169006,13.72973649,16.47626728,17.5048297,18.06480274,18.41328866,18.65437098,18.8329495,18.97276237,19.08601309,19.17951691,19.2589012,19.32725872,19.38625977,19.4377804,19.48303082,19.52295191,19.55832801,19.58975876,19.61789759,19.64311541,19.66572748,19.68596722,19.70437917,19.72104169,19.73616713,19.74992443,19.76246872,19.77393743,19.78449918,19.79415966,19.80306861,19.81128915,19.81887586,19.82593653,19.83248887,19.83856858,19.84426296,19.84956974,19.85452534,19.85917109,19.86350976,19.86765751,19.87153675,19.87518785,19.87866966,19.88195062,19.88501192,19.88796801,19.89075204,19.893408,19.89595477,19.89837263,19.90067259,19.90288537,19.90500423,19.90701984,19.90895476,19.91081298,19.91259981,19.91431327,19.91595517,19.91755259,19.91907681,19.92055135,19.92195697,19.9233329,19.92465544,19.92593444,19.92716746,19.92835986,19.92951072,19.93063036,19.93171906,19.93276426,19.9337815,19.93477154,19.93573323,19.93666684,19.93757371,19.93845224,19.93931377,19.94015328,19.94095962,19.94174568,19.94251119,19.94325601,19.94398815,19.94469925,19.94539243,19.94607756,19.94673689,19.9473827,19.94801545,19.94863157,19.94924546,19.94982596,19.95039495,19.95095913,19.9515039,19.95203234,19.95255602,19.95307054,19.95357637,19.95406025,19.95454569,19.95501225,19.95547291,19.95591978,19.95636816,19.95680803,19.95723922,19.95765785,19.95807169,19.95847171,19.95886995,19.959265,19.95965114,19.96002463,19.96039258,19.96075109,19.96110619,19.96144998,19.96179189,19.96212796,19.96245927,19.96278237,19.96310367,19.96341062,19.9637209,19.9640275,19.9643237,19.96461689,19.96490881,19.96519578,19.96547618,19.96575315,19.96602494,19.96627948,19.96654487,19.96680623,19.96706374,19.96731525,19.96756339,19.96781093,19.96803581,19.96827921,19.96851978,19.96874805,19.9689756,19.96920467,19.96942527,19.96965068,19.96986449,19.9700773,19.97028621,19.97049206,19.97069752,19.97089348,19.9710945,19.97128952,19.97148111,19.97167443,19.97186105,19.97204486,19.97223011,19.97241091,19.97258729,19.97276838,19.97294177,19.97311239,19.97328273,19.97344774,19.97361209,19.97377565,19.97393861,19.97410363,19.97426117,19.97441814,19.97457251,19.97470903,19.97486753,19.97501553,19.97516657,19.97531301,19.97545227,19.97559706,19.97573678,19.97587663,19.97601592,19.97614904,19.97628934,19.97642422,19.97655624,19.97668886,19.97681746,19.97694646,19.9770765,19.97720365,19.9773221,19.97744848,19.97757769,19.97768466,19.97780037,19.97791646,19.97802969,19.97814462,19.97825934,19.97837239,19.97848377,19.97859403,19.97870495,19.9788138,19.97892086,19.97902636,19.97913573,19.97924016,19.97934171,19.9794458,19.97954686,19.9796467,19.97974626,19.97984577,19.97993839,19.98003692,19.98012978,19.98022641,19.98032001,19.98040809,19.9805034,19.98059283,19.98068575,19.98077954,19.98086956,19.98096096,19.98105113,19.98113715,19.98122255,19.98130839,19.98138413,19.98146917,19.98155438,19.98163658,19.98171853,19.98179601,19.98187705,19.98195741,19.98203715,19.98211701,19.9821966,19.98226992,19.98234779,19.98242332,19.98249878,19.98257337,19.98264956,19.98272171,19.9827943,19.98286648,19.98293966,19.98301039,19.98308144,19.98315153,19.98321978,19.98328966,19.98336389,19.98342903,19.9834946,19.9835614,19.98362903,19.98369492,19.98375894,19.98382668,19.98389056,19.98395551,19.98401854,19.98407383,19.98413608,19.98419668,19.98425805,19.98432184,19.98438258,19.98444385,19.98450775,19.98456556,19.98462403,19.98468307,19.98473989,19.98479767,19.9848565,19.98491359,19.98496846,19.9850233,19.98508197,19.98513884,19.98519138,19.98524222,19.98529658,19.98535086,19.98540455,19.98545472,19.98550933,19.98556202,19.9856143,19.98566453,19.98571661,19.98576546,19.98581543,19.98586441,19.98591385,19.9859631,19.98601615,19.98606504,19.98611372,19.98616227,19.98621076,19.98625471,19.98630145,19.98634938,19.98639647,19.98644352,19.98649109,19.98653917,19.98658512,19.98662985,19.98667366,19.98671654,19.98676038,19.98680236,19.98684585,19.98688846,19.98693129,19.98697588,19.98702017,19.98706286,19.98710708,19.98714878,19.98719055,19.9872336,19.98727621,19.98731678,19.98735661,19.9873992,19.98743604,19.98747625,19.98751582,19.98755665,19.98759668,19.98763666,19.98767279,19.98771215,19.98774929,19.98778489,19.98782435,19.98786463,19.98790178,19.98793856,19.98797702,19.98801465,19.9880532,19.98808922,19.98812448,19.98815884,19.98819283,19.98822607,19.98826572,19.98830097,19.98833732,19.98837257,19.98840686,19.98844154,19.98847558,19.98851012,19.9885421,19.98857619,19.9886091,19.98864325,19.98867651,19.98871001,19.98874303,19.9887763,19.98880891,19.98884274,19.98887404,19.98890497,19.98893519,19.98896734,19.98899841,19.98902859,19.98906065,19.98909174,19.9891222,19.98915231,19.98918294,19.98921384,19.98924503,19.98927496,19.98930572,19.98933464,19.98936469,19.98939444,19.98942463,19.98945116,19.98947968,19.98950641,19.98953699,19.98956621,19.98959588,19.98962375,19.98965841,19.98968558,19.98971212,19.98973917,19.98976515,19.98979265,19.98982052,19.98984783,19.98987467,19.98990184,19.98992253,19.98994961,19.98997691,19.99000416,19.99003056,19.99005591,19.99008261,19.99010832,19.99013684,19.99016267,19.99018869,19.99021403,19.99023851,19.99026226,19.9902869,19.99031241,19.99034007,19.99036449,19.99038867,19.9904143,19.99043845,19.99046274,19.99048707,19.99051026,19.99053433,19.9905602,19.99058323,19.99060585,19.9906291,19.99065242,19.99067535,19.99069846,19.9907215,19.99074492,19.99076697,19.9907923,19.99081515,19.99083523,19.99085733,19.9908813,19.99090305,19.99092465,19.99094905,19.99097292,19.99099382,19.99101474,19.99103637,19.9910571,19.99107733,19.99109684,19.9911181,19.99113962,19.99115978,19.99118177,19.99120359,19.99122595,19.99124766,19.99126785,19.99128895,19.9913088,19.99132913,19.99134858,19.99136683,19.99138793,19.99140588,19.99142759,19.99144924,19.99146834,19.99148698,19.99150908,19.99152782,19.99154733,19.99156791,19.99158613,19.99160584,19.99162535,19.99164384,19.99165979,19.99167899,19.99169866,19.99171983,19.99173747,19.9917549,19.99177403,19.99179277,19.99181186,19.99183095,19.99184876,19.99186795,19.99188586,19.99190342,19.99192203,19.99193849,19.99195827,19.99197584,19.99199294,19.99201079,19.99202975,19.99204689,19.99206457,19.99208149,19.9920982,19.99211482,19.99213548,19.9921521,19.99216875,19.99218429,19.99220045,19.99221591,19.99223443,19.9922512,19.99226775,19.99228426,19.99230017,19.99231832,19.99233272,19.99234877,19.9923665,19.99238234,19.99239725,19.99241538,19.99243239,19.99245028,19.99246559,19.99248227,19.99249699,19.99251186,19.99252718,19.99254261,19.99255799,19.99257322,19.99258874,19.99260365,19.99261884,19.99263425,19.99264914,19.99266435,19.99267886,19.99269354,19.99270889,19.9927288,19.9927417,19.99275669,19.99277043,19.99278474,19.99279923,19.99281348,19.99282762,19.99284694,19.99286091,19.99287503,19.99288883,19.99290335,19.99291565,19.99292976,19.99294298,19.99295649,19.99297113,19.99298556,19.99299871,19.99301293,19.99302669,19.99304045,19.99305439,19.99306843,19.99308146,19.99309495,19.99310768,19.99312231,19.99313714,19.99315095,19.99316371,19.99317788,19.99319163,19.9932047,19.99321707,19.99323011,19.99324287,19.99325603,19.99327002,19.993283,19.99329689,19.99330926,19.99332235,19.99333358,19.99334831,19.99336099,19.9933731,19.99338575,19.99339768,19.99341047,19.99342305,19.99343408,19.99344589,19.99345895,19.99346828,19.9934799,19.99349279,19.99350513,19.99351775,19.99353088,19.99354315,19.99355479,19.99356693,19.9935801,19.99359218,19.99360442,19.99361672,19.99362889,19.99364064,19.99365247,19.99366426,19.99367546,19.99368717,19.99369846,19.9937106,19.99372174,19.99373365,19.99374554,19.99375621,19.99376816,19.99378037,19.9937914,19.99380297,19.99381444,19.99382611,19.99383601,19.9938475,19.99385939,19.99387076,19.99388008,19.99389214,19.99390282,19.99391413,19.99392527,19.99393589,19.99394693,19.99395781,19.99396843,19.99397934,19.99398996,19.99400036,19.99401148,19.99402197,19.99403306,19.99404159,19.99405287,19.99406268,19.99407434,19.99408534,19.99409533,19.99410639,19.99411673,19.9941276,19.99413871,19.99414815,19.99415819,19.99416827,19.99417804,19.99418833,19.99419804,19.99420984,19.99421976,19.9942294,19.99423924,19.99424919,19.99425893,19.99426888,19.99427832,19.99428718,19.99429718,19.9943068,19.99431524,19.99432494,19.99433581,19.99434561,19.9943555,19.99436504,19.99437544,19.99438526,19.99439496,19.99440725,19.99441615,19.99442561,19.99443463,19.9944448,19.99445377,19.99446275,19.99447198,19.99447979,19.99448971,19.9944972,19.99450538,19.99451487,19.99452421,19.99453364,19.99454297,19.99455247,19.99456069,19.99457024,19.99457875,19.99458836,19.99459719,19.99460697,19.99461549,19.99462419,19.9946337,19.99464249,19.99465183,19.99466062,19.99466919,19.99467803,19.99468628,19.99469493,19.99470366,19.99471233,19.99472177,19.99473014,19.99473905,19.99474705,19.99475571,19.99476495,19.99477249,19.99478209,19.99479037,19.99479778,19.99480525,19.99481491,19.99482177,19.99482888,19.9948381,19.99484602,19.9948534,19.99486218,19.99487149,19.99487977,19.99488778,19.99489623,19.99490459,19.99491352,19.99492171,19.99492934,19.99493731,19.99494578,19.994955,19.99496279,19.99497047,19.99497798,19.99498466,19.99499489,19.99500195,19.99500902,19.99501954,19.9950264,19.99503311,19.99504082,19.99504827,19.99505565,19.99506346,19.99507106,19.99507846,19.99508673,19.9950949,19.99510267,19.99511033,19.99511851,19.99512558,19.99513287,19.99514033,19.99514758,19.995155,19.99516253,19.99517018,19.99517657,19.99518418,19.99519229,19.99519971,22.46283686,22.06706281,21.73469093,21.45576154,21.22158699,21.02509651,20.86009833,20.72144233,20.60491959,20.50720977,20.42524161,20.35634426,20.29842237,20.24997828,20.20939377,20.1752172,20.14660777,20.12252722,20.10243562,20.08543276,20.07137545,20.05930611,20.0490473,20.04057093,20.03344443,20.02736572,20.02235109,20.01814578,20.01464544,20.0115093,20.00907915,20.00703509,20.00533619,20.00380384,20.00256328,20.0013904,20.00050575,19.99982412,19.99922008,19.99870268,19.99828109,19.99792754,19.99766563,19.99747164,19.99719407,19.99719439,19.99673122,19.99656852,19.99632026,19.99630842,19.99623165,19.99631488,19.99623045,19.99635452,19.99638303,19.99633484,19.9963432,19.99628673,19.99651698,19.99649188,19.99648356,19.99642747,19.9964439,19.99641782,19.99649705,19.99650493,19.99642705,19.996547,19.99641341,19.99636178,19.99627697,19.99614288,19.9961645,19.99626122,19.99621886,19.99622235,19.99639234,19.99637568,19.99638279,19.99635648,19.99629273,19.99617767,19.9963336,19.996464,19.99631462,19.99628722,19.99632951,19.99634614,19.99632062,19.99634524,19.99633822,19.9963251,19.99635554,19.99640458,19.99652022,19.99659626,19.99653505,19.99662034,19.99664758,19.99663769,19.99664911,19.99670404,19.99660846,19.99640582,19.99640865,19.99640343,19.99640797,19.99642152,19.99643357,19.99641398,19.99635865,19.99641511,19.99635731,19.99643853,19.99632459,19.99631324,19.99628992,19.99625314,19.99648483,19.99654112,19.9962918,19.99634752,19.9964021,19.99660311,19.99655813,19.99646591,19.99641519,19.99642015,19.99639793,19.99630667,19.99645989,19.99637487,19.99635612,19.99638835,19.99645978,19.99660079,19.9964462,19.99656242,19.99671196,19.9966718,19.99665482,19.99664184,19.99666636,19.99674756,19.99666413,19.99662646,19.99679976,19.99679624,19.99665377,19.99635221,19.99644247,19.99642144,19.99649498,19.99645663,19.99648632,19.99655525,19.99643981,19.99647823,19.99654674,19.99642599,19.99647699,19.99650818,19.9965375,19.99639488,19.99646948,19.99639287,19.99630567,19.99621957,19.99625569,19.99621815,19.9961711,19.99626117,19.99634314,19.99640576,19.99645207,19.99649426,19.99657441,19.99656957,19.996594,19.99664409,19.99660415,19.99706283,19.99704064,19.99693818,19.99683101,19.9967412,19.99682903,19.99693169,19.99692859,19.99689658,19.99689469,19.99685877,19.99686894,19.99684369,19.99682819,19.99678864,19.99673406,19.9968207,19.99680228,19.99675861,19.99678653,19.99669603,19.99669582,19.99671959,19.99661676,19.99666364,19.99666822,19.99716517,19.99699645,19.99696316,19.99696877,19.99686447,19.99708422,19.99698569,19.99686969,19.99703523,19.99682564,19.99672468,19.99679779,19.99682974,19.99695226,19.99699411,19.9969803,19.99706481,19.99694278,19.99689038,19.99688315,19.99688588,19.99690331,19.99685765,19.9968985,19.99711513,19.99714184,19.99706908,19.9971025,19.99708423,19.99710022,19.99696906,19.99693019,19.99694249,19.9970011,19.99685918,19.99713005,19.99710671,19.99709677,19.99704499,19.99701652,19.99706979,19.99703588,19.99693578,19.99705604,19.99714457,19.99710766,19.99722157,19.99716841,19.99717058,19.99713514,19.9971293,19.99713215,19.99710078,19.99705623,19.99697585,19.99707205,19.99707284,19.99709234,19.9970936,19.99712587,19.99710561,19.99714144,19.99709799,19.99699512,19.99701238,19.99702298,19.99703746,19.99702609,19.99704888,19.9970525,19.99710288,19.99701195,19.99701446,19.99686667,19.99691745,19.99692361,19.99694175,19.99692483,19.99704645,19.99699612,19.99698882,19.99705692,19.99719135,19.99726082,19.9971141,19.99714655,19.99725079,19.99723065,19.99724099,19.99724548,19.99732159,19.99730294,19.99731447,19.99725675,19.99724176,19.99714719,19.99718836,19.9972369,19.99724309,19.99724298,19.99723325,19.99722252,19.99722236,19.99726767,19.99716709,19.99718808,19.99725323,19.99717055,19.99719458,19.99716469,19.99722345,19.99720583,19.99723394,19.99722911,19.99727615,19.99717907,19.99717057,19.99718307,19.99723634,19.99724612,19.9972459,19.99732023,19.99731582,19.99738176,19.99729154,19.99720655,19.99718571,19.99723502,19.99721161,19.99731498,19.99736553,19.99731677,19.99731378,19.99737495,19.99722118,19.99723097,19.99727163,19.99735467,19.99739286,19.99733128,19.99734463,19.99731043,19.9973196,19.99727088,19.99721521,19.99723066,19.9977167,19.99760473,19.99765824,19.99762343,19.9975655,19.99755218,19.99751071,19.9975164,19.99755397,19.99732395,19.99731401,19.99734384,19.9973807,19.99725585,19.99723059,19.99728193,19.99730695,19.99717433,19.99713697,19.9971584,19.99719234,19.99722136,19.99725328,19.99728167,19.99731217,19.99728435,19.99737232,19.99745651,19.99740177,19.99760313,19.99747778,19.99751245,19.99756626,19.99761372,19.99745676,19.99749501,19.99745143,19.99742139,19.99744592,19.99733462,19.99734962,19.99737289,19.99736391,19.99739725,19.99745583,19.99752133,19.99751722,19.99754203,19.9975335,19.99749305,19.99749729,19.99745984,19.99732783,19.99745204,19.9974348,19.99743808,19.9973117,19.99735909,19.9973482,19.99734789,19.99739055,19.99724403,19.99728054,19.99734292,19.99733509,19.99747447,19.99765506,19.99769502,19.99779991,19.9977213,19.99757025,19.99754775,19.99751777,19.99760343,19.99774052,19.99775558,19.99772743,19.99773749,19.9976836,19.99770687,19.99765944,19.9977435,19.99768257,19.99762281,19.99761546,19.99760328,19.997586,19.99758406,19.99757794,19.99757456,19.99760452,19.99761044,19.99759428,19.99755709,19.99736276,19.99735333,19.99742982,19.99734447,19.9974177,19.99739045,19.99743841,19.99748562,19.99746747,19.99747326,19.99751327,19.99751084,19.99752921,19.99764928,19.99767443,19.99753514,19.99766399,19.99759626,19.99758648,19.99760911,19.99765277,19.99760649,19.99766394,19.99766096,19.99763289,19.99776576,19.99768606,19.99767756,19.99768393,19.99766328,19.99772671,19.99777093,19.99769306,19.99767976,19.9977246,19.99768861,19.99777556,19.99771459,19.99762194,19.99759714,19.99760681,19.99764392,19.99767734,19.9976208,19.9976505,19.99766116,19.99768893,19.99764297,19.99782541,19.99781071,19.99781539,19.99772951,19.99769533,19.99771147,19.99758958,19.99754604,19.99754085,19.99753313,19.99752352,19.99756155,19.99758735,19.99760476,19.99762281,19.99767675,19.99764453,19.99764531,19.99757131,19.99757158,19.99755258,19.99758335,19.99764498,19.99770375,19.99731378,19.99738986,19.99746487,19.99772708,19.99767832,19.99781288,19.99785964,19.99775622,19.9977399,19.99771959,19.99801614,19.99798222,19.99782159,19.99808131,19.99802086,19.99802169,19.99804897,19.99802073,19.99801074,19.99794291,19.9977862,19.9977851,19.99779079,19.99780156,19.99780915,19.99778527,19.99770223,19.9977199,19.99771981,19.99775114,19.99779882,19.99776009,19.99779878,19.99770587,19.99776467,19.9977197,19.99768592,19.99774213,19.99776595,19.99776266,19.99779034,19.99782149,19.9977815,19.99783246,19.997808,19.99792576,19.99784208,19.99794689,19.99801341,19.9979852,19.99796836,19.99792042,19.99780742,19.99785268,19.9978527,19.99785164,19.99785368,19.9978925,19.99781237,19.99764797,19.99763839,19.99762677,19.99773669,19.99773872,19.9977658,19.99782234,19.99777107,19.9976857,19.99768324,19.99769034,19.99774815,19.99768809,19.99769092,19.99767838,19.99775501,19.9978388,19.99797586,19.99801043,19.99799241,19.99806012,19.99802247,19.99804342,19.99805482,19.99804354,19.99799196,19.99791773,19.99785993,19.99788229,19.9979106,19.99800359,19.99811061,19.99810622,19.99801588,19.99796471,19.99793939,19.99785307,19.99792545,19.99785296,19.99787447,19.99782797,19.99781938,19.99782543,19.99787967,19.99760808,19.99774458,19.9977326,19.99776751,19.99782092,19.99776733,19.99779208,19.99773612,19.99780101,19.99796761,19.99783618,19.99783338,19.99777793,19.99780773,19.99783835,19.99783385,19.99784792,19.99794829,19.99789481,19.99797536,19.99785441,19.99784641,19.99790998,19.99791741,19.99793358,19.99794401,19.99797519,19.99798708,19.99804753,19.99807403,19.99807114,19.99802743,19.99794225,19.9980232,19.99810304,19.99806525,19.99778931,19.99780894,19.99788873,19.99790171,19.99789629,19.99789264,19.99791994,19.9979059,19.99790378,19.99799255,19.99800388,19.99803099,19.99800116,19.99813852,19.99803596,19.9982557,19.99823352,19.99820648,19.99813383,19.99815173,19.99813655,19.99826351,19.99820942,19.99821808,19.99817853,19.99810094,19.99815888,19.99813164,19.99816044,19.99819781,19.99808657,19.99807394,19.99807585,19.99806376,19.99808248,19.99808584,19.99809332,19.99819115,19.99817196,19.9981346,19.99810297,19.99810847,19.99810721,19.9981108,19.99812413,19.99813935,19.99794521,19.99788474,19.9979792,19.99794692,19.99795512,19.99798323,19.99798201,19.99807813,19.99803569,19.99806641,19.99818828,19.99823073,19.99823029,19.99817097,19.99816928,19.99819539,19.99816882,19.9981748,19.99826696,19.99816672,19.99817649,19.99824152,19.99805537,19.99807079,19.99811224,19.99807329,19.99797931,19.99798771,19.99806154,19.99811183,19.99809421,19.9986852,19.99855721,19.99846725,19.99838539,19.99837146,19.99819201,19.99826411,19.99821853,19.99826165,19.99822073,19.99813359,19.99812123,19.99817132,19.99819911,19.99821579,19.99814504,19.99816616,19.99818476,19.99811821,19.99822443,19.99827758,19.99825062,19.99825218,19.99822856,19.99823619,19.99825049,19.99824818,19.99824544,19.99824059,19.99824372,19.99820341,19.99822723,19.99826889,19.99825792,19.99823452,19.99824289,19.99822719,19.99825155,19.99819081,19.99818175,19.9988096,19.99877656,19.998709,19.99858539,19.99847209,19.99843362,19.99843565,19.99841321,19.99836552,19.99828689,19.99823961,19.99825011,19.99821439,19.99823329,19.99821839,19.99823706,19.99822597,19.99820403,19.99817966,19.99824267,19.99828569,19.99818859,19.99821709,19.99813319,19.99815248,19.99815035,19.99823119,19.99828541,19.99782641,19.99792992,19.99799508,19.99803522,19.99807082,19.99810521,19.99813413,19.99813885,19.99810363,19.99819049,19.99818816,19.99818613,19.99813827,19.9981937,19.99813,19.99813547,19.9983817,19.99837502,19.99836419,19.99832349,19.99836283,19.99838323,19.99835284,19.99831101,19.99828439,19.99834302,19.99833576,19.99837068,19.99832729,19.99830052,19.99821361,19.99837134,19.99827389,19.9982277,19.99814541,19.99818706,19.99831475,19.99831673,19.99831632,19.99828738,19.99832832,19.99830464,19.99829635,19.99825818,19.99839334,19.99826791,19.99826159,19.99828285,19.99831867,19.99825618,19.99825425,19.99823404,19.99826106,19.99828434,19.99833065,19.99833635,19.99832335,19.99833045,19.99830911,19.99826419,19.99827989,19.99830688,19.99827184,19.99816588,19.99818525,19.99820637,19.99820421,19.99818367,19.99829868,19.99836932,19.99833913,19.99843039,19.99841562,19.99840547,19.99842957,19.99839364,19.99837244,19.99834481,19.99840023,19.99836769,19.99829945,19.99824521,19.99826644,19.99825318,19.99826379,19.99826024,19.99835585,19.99831185,19.99833798,19.99825593,19.99830045,19.99822279,19.99824419,19.99825743,19.99830476,19.99830944,19.99835412,19.99833839,19.99828566,19.99835676,19.99833959,19.99818955,19.99819638,19.99816113,19.99815323,19.99819409,19.99820794,19.99830239,19.99831983,19.99833273,19.9983415,19.99837671,19.99836795,19.99841177,19.99841049,19.9984793,19.99843626,19.9984607,19.99838998,19.99830091,19.99830708,19.99833803,19.99833776,19.99835418,19.99841591,19.99842441,19.99844691,19.99849752,19.99847032,19.9986343,19.99860477,19.99859305,19.99868658,19.99855119,19.99850573,19.99843594,19.9984692,19.99849341,19.99841099,19.99845142,19.99849948,19.99846828,19.99846347,19.99847256,19.99845603,19.99838538,19.99840433,19.99843891,19.99843798,19.99844724,19.9984196,19.99842158,19.99839204,19.99849213,19.99850507,19.99845759,19.99843657,19.99840936,19.99845922,19.9984542,19.99846105,19.9984751,19.99849254,19.99848527,19.99849457,19.99851253,19.99826286,19.99825009,19.998268,19.99833016,19.99835883,19.99837001,19.99844496,19.99848476,19.99853107,19.99850258,19.99853983,19.99855685,19.99851386,19.99846588,19.99847108,19.99846757,19.998424,19.99865404,19.99866951,19.998631,19.99861238,19.99859734,19.99858497,19.99856154,19.99856329,19.99857564,19.99857715,19.99847111,19.99844639,19.99848788,19.99848176,19.99850726,19.99850877,19.99852955,19.99856617,19.99853876,19.99848084,19.99864853,19.99867547,19.99869629,19.99869142,19.99857816,19.9986122,19.99859238,19.99858435,19.99857305,19.99859446,19.99853559,19.99852224,19.99854888,19.99861467,19.99874351,19.99875984,19.99865195,19.99862033,19.99864213,19.99863667,19.99860988,19.99858489,19.99861198,19.9985806,19.99847275,19.99840897,19.99842016,19.99848892,19.99844908,19.99844512,19.99852902,19.99853395,19.99853362,19.99852572,19.99853462,19.9985461,19.99854232,19.99853993,19.99855287,19.99851692,19.99849507,19.99851859,19.99853957,19.99850766,19.99850715,19.99852989,19.99851165,19.99845251,19.99855528,19.99858488,19.99855829,19.99857706,19.99857204,19.99856141,19.99856995,19.99856561,19.99857449,19.99857852,19.99859786,19.99853861,19.99853495,19.99857532,19.99853045,19.99854258,19.99852761,19.99864659,19.9984489,19.9984118,19.99855863,19.99864597,19.99864457,19.99863451,19.99861998,19.99862511,19.99861523,19.99861351,19.9985899,19.99860471,19.99857419,19.99864899,19.9985777,19.99857126,19.99860316,19.99853498,19.99854729,19.99856064,19.99855925,19.99857858,19.99860405,19.99853717,19.99855409,19.99851718,19.99852785,19.99859614,19.99855777,19.99854273,19.99849308,19.99849229,19.99853842,19.99845784,19.99854386,19.99859712,19.9986003,19.99861486,19.99856947,19.99856769,19.99858859,19.99862657,19.99859883,19.9988265,19.99882231,19.9987201,19.99870628,19.99871444,19.99865272,19.99863251,19.99868728,19.99868756,19.99867522,19.99868008,19.9986635,19.99865298,19.99861106,19.99862176,19.99861612,19.99861505,19.99863503,19.99864944,19.99862043,19.9986322,19.99860971,19.9986599,19.99868529,19.99866982,19.99866471,19.99866229,19.99863089,19.99854982,19.99857295,19.99859109,19.99857819,19.99865037,19.99868085,19.99865041,19.99864232,19.99867546,19.99844408,19.99856688,19.99852505,19.99853468,19.99862142,19.99864114,19.99865841,19.99867746,19.99867953,19.99873248,19.99880481,19.99884873,19.99882416,19.99884613,19.99881965,19.99878723,19.99871213,19.99865999,19.99868408,19.99867866,19.99865473,19.99864152,19.9987329,19.99880422,19.99879307,19.99877589,19.99875259,19.998769,19.99870657,19.99877509,19.99873644,19.99876571,19.99878317,19.99870892,19.99876582,19.99875551,19.99872631,19.99872819,19.99872638,19.99872607,19.99871504,19.99872518,19.99873936,19.99872394,19.99871972,19.99881098,19.99883629,19.99873559
        ];
        this.option.series[0].data=[0,0.068187713,0.302141101,0.668822927,1.115911232,1.603955045,2.108227334,2.61449107,3.114971393,3.605614563,4.084431281,4.550551206,5.003700203,5.443916731,5.871399794,6.286428098,6.689317322,7.080397682,7.460002233,7.828460846,8.18609717,8.533227175,8.870158507,9.197190275,9.514613069,9.822709077,10.12175227,10.41200861,10.69373626,10.96718581,11.23260049,11.49021639,11.74026267,11.98296174,12.21852949,12.44717546,12.66910304,12.88450963,13.09358685,13.29652067,13.49349161,13.68467488,13.87024053,14.05035363,14.2251744,14.39485835,14.5595564,14.71941507,14.87457655,15.02517886,15.17135596,15.31323789,15.45095084,15.58461732,15.71435622,15.84028296,15.96250954,16.08114469,16.19629394,16.30805972,16.41654143,16.52183559,16.62403584,16.72323311,16.81951563,16.91296903,17.00367646,17.0917186,17.17717377,17.26011797,17.34062498,17.41876643,17.49461182,17.56822862,17.6396823,17.70903643,17.77635271,17.841691,17.90510943,17.96666441,18.0264107,18.08440144,18.14068822,18.1953211,18.24834868,18.29981813,18.34977524,18.39826443,18.44532885,18.49101036,18.53534959,18.57838598,18.62015782,18.66070226,18.70005536,18.73825214,18.77532657,18.81131162,18.84623932,18.88014072,18.91304598,18.94498437,18.9759843,19.00607335,19.03527829,19.06362508,19.09113895,19.11784437,19.14376509,19.16892417,19.19334399,19.21704628,19.24005211,19.26238196,19.28405568,19.30509255,19.32551128,19.34533005,19.36456647,19.38323766,19.40136023,19.41895029,19.4360235,19.45259504,19.46867965,19.48429165,19.4994449,19.51415291,19.52842874,19.54228511,19.55573432,19.56878835,19.58145881,19.59375697,19.60569377,19.61727982,19.62852543,19.63944062,19.65003507,19.66031823,19.67029923,19.67998696,19.68939002,19.6985168,19.70737539,19.7159737,19.72431935,19.73241978,19.7402822,19.74791359,19.75532074,19.76251025,19.7694885,19.77626171,19.7828359,19.78921691,19.79541044,19.80142197,19.80725687,19.81292031,19.81841735,19.82375286,19.8289316,19.83395817,19.83883704,19.84357255,19.84816892,19.85263023,19.85696046,19.86116344,19.86524293,19.86920255,19.87304582,19.87677617,19.8803969,19.88391125,19.88732233,19.89063318,19.89384675,19.89696589,19.89999338,19.90293191,19.9057841,19.90855249,19.91123952,19.91384761,19.91637906,19.91883612,19.92122099,19.92353579,19.92578256,19.92796332,19.93008001,19.93213449,19.93412861,19.93606414,19.93794279,19.93976624,19.94153611,19.94325398,19.94492137,19.94653977,19.94811061,19.94963529,19.95111518,19.95255158,19.95394578,19.95529901,19.95661247,19.95788735,19.95912476,19.96032581,19.96149157,19.96262308,19.96372134,19.96478733,19.965822,19.96682626,19.96780102,19.96874714,19.96966545,19.97055678,19.97142192,19.97226165,19.97307669,19.97386779,19.97463564,19.97538093,19.97610433,19.97680646,19.97748797,19.97814945,19.97879149,19.97941467,19.98001953,19.98060663,19.98117647,19.98172957,19.98226642,19.98278749,19.98329325,19.98378415,19.98426063,19.98472311,19.98517199,19.98560769,19.98603058,19.98644105,19.98683946,19.98722616,19.9876015,19.98796581,19.98831942,19.98866263,19.98899576,19.9893191,19.98963294,19.98993756,19.99023323,19.99052021,19.99079876,19.99106912,19.99133154,19.99158625,19.99183348,19.99207344,19.99230635,19.99253241,19.99275183,19.99296481,19.99317153,19.99337217,19.99356692,19.99375595,19.99393942,19.9941175,19.99429035,19.99445811,19.99462095,19.99477901,19.99493242,19.99508132,19.99522585,19.99536613,19.99550229,19.99563445,19.99576272,19.99588723,19.99600807,19.99612537,19.99623922,19.99634972,19.99645698,19.99656109,19.99666213,19.99676021,19.99685541,19.99694781,19.99703749,19.99712454,19.99720903,19.99729104,19.99737064,19.9974479,19.99752289,19.99759567,19.99766632,19.99773489,19.99780145,19.99786605,19.99792875,19.99798961,19.99804868,19.99810602,19.99816167,19.99821569,19.99826812,19.99831901,19.9983684,19.99841634,19.99846287,19.99850804,19.99855188,19.99859443,19.99863573,19.99867582,19.99871473,19.99875249,19.99878915,19.99882473,19.99885926,19.99889278,19.99892531,19.99895689,19.99898754,19.99901729,19.99904617,19.99907419,19.9991014,19.9991278,19.99915343,19.9991783,19.99920245,19.99922588,19.99924863,19.99927071,19.99929214,19.99931293,19.99933312,19.99935272,19.99937174,19.9993902,19.99940812,19.99942551,19.99944239,19.99945877,19.99947468,19.99949011,19.99950509,19.99951964,19.99953375,19.99954745,19.99956075,19.99957365,19.99958618,19.99959834,19.99961014,19.9996216,19.99963272,19.99964351,19.99965398,19.99966415,19.99967402,19.9996836,19.9996929,19.99970192,19.99971068,19.99971918,19.99972743,19.99973544,19.99974321,19.99975076,19.99975808,19.99976519,19.99977209,19.99977879,19.99978529,19.9997916,19.99979772,19.99980366,19.99980943,19.99981503,19.99982047,19.99982574,19.99983086,19.99983583,19.99984066,19.99984534,19.99984988,19.99985429,19.99985857,19.99986273,19.99986676,19.99987068,19.99987448,19.99987817,19.99988175,19.99988522,19.99988859,19.99989187,19.99989504,19.99989813,19.99990112,19.99990403,19.99990685,19.99990958,19.99991224,19.99991482,19.99991732,19.99991975,19.99992211,19.9999244,19.99992662,19.99992878,19.99993087,19.9999329,19.99993487,19.99993679,19.99993864,19.99994045,19.9999422,19.99994389,19.99994554,19.99994714,19.9999487,19.9999502,19.99995167,19.99995309,19.99995447,19.9999558,19.9999571,19.99995836,19.99995959,19.99996077,19.99996193,19.99996304,19.99996413,19.99996518,19.99996621,19.9999672,19.99996816,19.9999691,19.99997001,19.99997089,19.99997174,19.99997257,19.99997338,19.99997416,19.99997492,19.99997566,19.99997637,19.99997707,19.99997774,19.9999784,19.99997903,19.99997965,19.99998025,19.99998083,19.99998139,19.99998194,19.99998247,19.99998298,19.99998348,19.99998397,19.99998444,19.9999849,19.99998534,19.99998577,19.99998619,19.99998659,19.99998699,19.99998737,19.99998774,19.9999881,19.99998845,19.99998879,19.99998912,19.99998944,19.99998975,19.99999005,19.99999034,19.99999063,19.9999909,19.99999117,19.99999143,19.99999168,19.99999193,19.99999216,19.99999239,19.99999262,19.99999283,19.99999304,19.99999325,19.99999345,19.99999364,19.99999383,19.99999401,19.99999418,19.99999435,19.99999452,19.99999468,19.99999484,19.99999499,19.99999514,19.99999528,19.99999542,19.99999555,19.99999568,19.99999581,19.99999593,19.99999605,19.99999617,19.99999628,19.99999639,19.9999965,19.9999966,19.9999967,19.9999968,19.99999689,19.99999698,19.99999707,19.99999716,19.99999724,19.99999732,19.9999974,19.99999748,19.99999755,19.99999762,19.99999769,19.99999776,19.99999783,19.99999789,19.99999795,19.99999801,19.99999807,19.99999813,19.99999818,19.99999824,19.99999829,19.99999834,19.99999839,19.99999843,19.99999848,19.99999852,19.99999857,19.99999861,19.99999865,19.99999869,19.99999873,19.99999877,19.9999988,19.99999884,19.99999887,19.99999891,19.99999894,19.99999897,19.999999,19.99999903,19.99999906,19.99999908,19.99999911,19.99999914,19.99999916,19.99999919,19.99999921,19.99999923,19.99999926,19.99999928,19.9999993,19.99999932,19.99999934,19.99999936,19.99999938,19.9999994,19.99999941,19.99999943,19.99999945,19.99999946,19.99999948,19.9999995,19.99999951,19.99999953,19.99999954,19.99999955,19.99999957,19.99999958,19.99999959,19.9999996,19.99999961,19.99999963,19.99999964,19.99999965,19.99999966,19.99999967,19.99999968,19.99999969,19.9999997,19.99999971,19.99999971,19.99999972,19.99999973,19.99999974,19.99999975,19.99999975,19.99999976,19.99999977,19.99999977,19.99999978,19.99999979,19.99999979,19.9999998,19.99999981,19.99999981,19.99999982,19.99999982,19.99999983,19.99999983,19.99999984,19.99999984,19.99999985,19.99999985,19.99999986,19.99999986,19.99999986,19.99999987,19.99999987,19.99999988,19.99999988,19.99999988,19.99999989,19.99999989,19.99999989,19.9999999,19.9999999,19.9999999,19.99999991,19.99999991,19.99999991,19.99999991,19.99999992,19.99999992,19.99999992,19.99999992,19.99999993,19.99999993,19.99999993,19.99999993,19.99999993,19.99999994,19.99999994,19.99999994,19.99999994,19.99999994,19.99999994,19.99999995,19.99999995,19.99999995,19.99999995,19.99999995,19.99999995,19.99999995,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,23.00150186,22.95973225,22.89513258,22.81713486,22.73261761,22.64580513,22.55909629,22.47378636,22.39054089,22.30967712,22.23132329,22.15550659,22.08220116,22.01135398,21.94289877,21.8767634,21.81287391,21.7511565,21.69153867,21.63394969,21.57832091,21.52458581,21.47268003,21.42254136,21.37410967,21.32732686,21.2821368,21.23848527,21.1963199,21.15559008,21.11624695,21.07824329,21.0415335,21.00607353,20.97182082,20.93873428,20.90677421,20.87590224,20.84608134,20.81727571,20.78945081,20.76257322,20.73661071,20.71153212,20.68730735,20.66390733,20.64130399,20.61947021,20.59837977,20.57800738,20.55832858,20.53931977,20.52095813,20.50322163,20.48608898,20.46953963,20.45355372,20.43811206,20.42319613,20.40878803,20.39487046,20.38142673,20.36844071,20.3558968,20.34377996,20.33207566,20.32076983,20.30984893,20.29929984,20.2891099,20.27926688,20.26975898,20.26057479,20.25170328,20.24313381,20.23485609,20.2268602,20.21913653,20.21167583,20.20446913,20.19750779,20.19078345,20.18428805,20.1780138,20.17195315,20.16609885,20.16044386,20.1549814,20.14970491,20.14460807,20.13968475,20.13492906,20.13033527,20.12589789,20.12161158,20.1174712,20.11347178,20.10960853,20.10587681,20.10227213,20.09879018,20.09542678,20.09217789,20.08903961,20.08600817,20.08307994,20.08025141,20.07751918,20.07487996,20.07233061,20.06986804,20.06748932,20.06519159,20.06297208,20.06082813,20.05875718,20.05675674,20.05482441,20.05295786,20.05115486,20.04941324,20.04773093,20.04610588,20.04453616,20.04301989,20.04155524,20.04014045,20.03877383,20.03745374,20.03617859,20.03494686,20.03375706,20.03260777,20.03149761,20.03042524,20.02938939,20.0283888,20.02742228,20.02648866,20.02558683,20.0247157,20.02387423,20.02306141,20.02227627,20.02151785,20.02078525,20.0200776,20.01939404,20.01873375,20.01809594,20.01747985,20.01688473,20.01630988,20.01575459,20.01521821,20.01470009,20.01419962,20.01371618,20.0132492,20.01279812,20.01236239,20.0119415,20.01153494,20.01114223,20.01076288,20.01039645,20.01004249,20.00970058,20.00937032,20.0090513,20.00874314,20.00844547,20.00815794,20.00788019,20.0076119,20.00735275,20.00710242,20.00686061,20.00662703,20.00640141,20.00618347,20.00597295,20.00576959,20.00557316,20.00538342,20.00520013,20.00502309,20.00485207,20.00468688,20.00452731,20.00437318,20.00422429,20.00408047,20.00394154,20.00380735,20.00367773,20.00355251,20.00343157,20.00331473,20.00320188,20.00309287,20.00298757,20.00288586,20.0027876,20.0026927,20.00260102,20.00251247,20.00242693,20.0023443,20.00226449,20.00218739,20.00211292,20.00204098,20.0019715,20.00190437,20.00183954,20.00177691,20.00171641,20.00165798,20.00160153,20.001547,20.00149433,20.00144346,20.00139431,20.00134684,20.00130099,20.0012567,20.00121391,20.00117258,20.00113266,20.0010941,20.00105685,20.00102087,20.00098611,20.00095254,20.00092011,20.00088878,20.00085852,20.00082929,20.00080106,20.00077379,20.00074744,20.00072199,20.00069741,20.00067367,20.00065073,20.00062858,20.00060718,20.00058651,20.00056654,20.00054725,20.00052862,20.00051062,20.00049324,20.00047644,20.00046022,20.00044455,20.00042942,20.0004148,20.00040068,20.00038704,20.00037386,20.00036113,20.00034883,20.00033696,20.00032549,20.0003144,20.0003037,20.00029336,20.00028337,20.00027373,20.00026441,20.0002554,20.00024671,20.00023831,20.0002302,20.00022236,20.00021479,20.00020748,20.00020041,20.00019359,20.000187,20.00018063,20.00017448,20.00016854,20.0001628,20.00015726,20.00015191,20.00014673,20.00014174,20.00013691,20.00013225,20.00012775,20.0001234,20.0001192,20.00011514,20.00011122,20.00010743,20.00010378,20.00010024,20.00009683,20.00009353,20.00009035,20.00008727,20.0000843,20.00008143,20.00007866,20.00007598,20.00007339,20.0000709,20.00006848,20.00006615,20.0000639,20.00006172,20.00005962,20.00005759,20.00005563,20.00005374,20.00005191,20.00005014,20.00004843,20.00004678,20.00004519,20.00004365,20.00004217,20.00004073,20.00003934,20.000038,20.00003671,20.00003546,20.00003425,20.00003309,20.00003196,20.00003087,20.00002982,20.00002881,20.00002783,20.00002688,20.00002596,20.00002508,20.00002423,20.0000234,20.0000226,20.00002183,20.00002109,20.00002037,20.00001968,20.00001901,20.00001836,20.00001774,20.00001713,20.00001655,20.00001599,20.00001544,20.00001492,20.00001441,20.00001392,20.00001344,20.00001299,20.00001254,20.00001212,20.0000117,20.00001131,20.00001092,20.00001055,20.00001019,20.00000984,20.00000951,20.00000918,20.00000887,20.00000857,20.00000828,20.000008,20.00000772,20.00000746,20.00000721,20.00000696,20.00000672,20.0000065,20.00000627,20.00000606,20.00000585,20.00000566,20.00000546,20.00000528,20.0000051,20.00000492,20.00000476,20.00000459,20.00000444,20.00000429,20.00000414,20.000004,20.00000386,20.00000373,20.0000036,20.00000348,20.00000336,20.00000325,20.00000314,20.00000303,20.00000293,20.00000283,20.00000273,20.00000264,20.00000255,20.00000246,20.00000238,20.0000023,20.00000222,20.00000214,20.00000207,20.000002,20.00000193,20.00000187,20.0000018,20.00000174,20.00000168,20.00000163,20.00000157,20.00000152,20.00000146,20.00000141,20.00000137,20.00000132,20.00000128,20.00000123,20.00000119,20.00000115,20.00000111,20.00000107,20.00000104,20.000001,20.00000097,20.00000093,20.0000009,20.00000087,20.00000084,20.00000081,20.00000079,20.00000076,20.00000073,20.00000071,20.00000068,20.00000066,20.00000064,20.00000062,20.0000006,20.00000057,20.00000056,20.00000054,20.00000052,20.0000005,20.00000048,20.00000047,20.00000045,20.00000044,20.00000042,20.00000041,20.00000039,20.00000038,20.00000037,20.00000035,20.00000034,20.00000033,20.00000032,20.00000031,20.0000003,20.00000029,20.00000028,20.00000027,20.00000026,20.00000025,20.00000024,20.00000023,20.00000023,20.00000022,20.00000021,20.0000002,20.0000002,20.00000019,20.00000018,20.00000018,20.00000017,20.00000017,20.00000016,20.00000015,20.00000015,20.00000014,20.00000014,20.00000013,20.00000013,20.00000013,20.00000012,20.00000012,20.00000011,20.00000011,20.00000011,20.0000001,20.0000001,20.00000009,20.00000009,20.00000009,20.00000009,20.00000008,20.00000008,20.00000008,20.00000007,20.00000007,20.00000007,20.00000007,20.00000006,20.00000006,20.00000006,20.00000006,20.00000006,20.00000005,20.00000005,20.00000005,20.00000005,20.00000005,20.00000005,20.00000004,20.00000004,20.00000004,20.00000004,20.00000004,20.00000004,20.00000004,20.00000003,20.00000003,20.00000003,20.00000003,20.00000003,20.00000003,20.00000003,20.00000003,20.00000003,20.00000003,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000002,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20.00000001,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20
        ];
        this.option.series[4].data=[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20
        ];
        this.option.series[3].data=[0,9.12E-05,0.016688166,0.304585717,2.082467047,7.345169006,13.72973649,16.47626728,17.5048297,18.06480274,18.41328866,18.65437098,18.8329495,18.97276237,19.08601309,19.17951691,19.2589012,19.32725872,19.38625977,19.4377804,19.48303082,19.52295191,19.55832801,19.58975876,19.61789759,19.64311541,19.66572748,19.68596722,19.70437917,19.72104169,19.73616713,19.74992443,19.76246872,19.77393743,19.78449918,19.79415966,19.80306861,19.81128915,19.81887586,19.82593653,19.83248887,19.83856858,19.84426296,19.84956974,19.85452534,19.85917109,19.86350976,19.86765751,19.87153675,19.87518785,19.87866966,19.88195062,19.88501192,19.88796801,19.89075204,19.893408,19.89595477,19.89837263,19.90067259,19.90288537,19.90500423,19.90701984,19.90895476,19.91081298,19.91259981,19.91431327,19.91595517,19.91755259,19.91907681,19.92055135,19.92195697,19.9233329,19.92465544,19.92593444,19.92716746,19.92835986,19.92951072,19.93063036,19.93171906,19.93276426,19.9337815,19.93477154,19.93573323,19.93666684,19.93757371,19.93845224,19.93931377,19.94015328,19.94095962,19.94174568,19.94251119,19.94325601,19.94398815,19.94469925,19.94539243,19.94607756,19.94673689,19.9473827,19.94801545,19.94863157,19.94924546,19.94982596,19.95039495,19.95095913,19.9515039,19.95203234,19.95255602,19.95307054,19.95357637,19.95406025,19.95454569,19.95501225,19.95547291,19.95591978,19.95636816,19.95680803,19.95723922,19.95765785,19.95807169,19.95847171,19.95886995,19.959265,19.95965114,19.96002463,19.96039258,19.96075109,19.96110619,19.96144998,19.96179189,19.96212796,19.96245927,19.96278237,19.96310367,19.96341062,19.9637209,19.9640275,19.9643237,19.96461689,19.96490881,19.96519578,19.96547618,19.96575315,19.96602494,19.96627948,19.96654487,19.96680623,19.96706374,19.96731525,19.96756339,19.96781093,19.96803581,19.96827921,19.96851978,19.96874805,19.9689756,19.96920467,19.96942527,19.96965068,19.96986449,19.9700773,19.97028621,19.97049206,19.97069752,19.97089348,19.9710945,19.97128952,19.97148111,19.97167443,19.97186105,19.97204486,19.97223011,19.97241091,19.97258729,19.97276838,19.97294177,19.97311239,19.97328273,19.97344774,19.97361209,19.97377565,19.97393861,19.97410363,19.97426117,19.97441814,19.97457251,19.97470903,19.97486753,19.97501553,19.97516657,19.97531301,19.97545227,19.97559706,19.97573678,19.97587663,19.97601592,19.97614904,19.97628934,19.97642422,19.97655624,19.97668886,19.97681746,19.97694646,19.9770765,19.97720365,19.9773221,19.97744848,19.97757769,19.97768466,19.97780037,19.97791646,19.97802969,19.97814462,19.97825934,19.97837239,19.97848377,19.97859403,19.97870495,19.9788138,19.97892086,19.97902636,19.97913573,19.97924016,19.97934171,19.9794458,19.97954686,19.9796467,19.97974626,19.97984577,19.97993839,19.98003692,19.98012978,19.98022641,19.98032001,19.98040809,19.9805034,19.98059283,19.98068575,19.98077954,19.98086956,19.98096096,19.98105113,19.98113715,19.98122255,19.98130839,19.98138413,19.98146917,19.98155438,19.98163658,19.98171853,19.98179601,19.98187705,19.98195741,19.98203715,19.98211701,19.9821966,19.98226992,19.98234779,19.98242332,19.98249878,19.98257337,19.98264956,19.98272171,19.9827943,19.98286648,19.98293966,19.98301039,19.98308144,19.98315153,19.98321978,19.98328966,19.98336389,19.98342903,19.9834946,19.9835614,19.98362903,19.98369492,19.98375894,19.98382668,19.98389056,19.98395551,19.98401854,19.98407383,19.98413608,19.98419668,19.98425805,19.98432184,19.98438258,19.98444385,19.98450775,19.98456556,19.98462403,19.98468307,19.98473989,19.98479767,19.9848565,19.98491359,19.98496846,19.9850233,19.98508197,19.98513884,19.98519138,19.98524222,19.98529658,19.98535086,19.98540455,19.98545472,19.98550933,19.98556202,19.9856143,19.98566453,19.98571661,19.98576546,19.98581543,19.98586441,19.98591385,19.9859631,19.98601615,19.98606504,19.98611372,19.98616227,19.98621076,19.98625471,19.98630145,19.98634938,19.98639647,19.98644352,19.98649109,19.98653917,19.98658512,19.98662985,19.98667366,19.98671654,19.98676038,19.98680236,19.98684585,19.98688846,19.98693129,19.98697588,19.98702017,19.98706286,19.98710708,19.98714878,19.98719055,19.9872336,19.98727621,19.98731678,19.98735661,19.9873992,19.98743604,19.98747625,19.98751582,19.98755665,19.98759668,19.98763666,19.98767279,19.98771215,19.98774929,19.98778489,19.98782435,19.98786463,19.98790178,19.98793856,19.98797702,19.98801465,19.9880532,19.98808922,19.98812448,19.98815884,19.98819283,19.98822607,19.98826572,19.98830097,19.98833732,19.98837257,19.98840686,19.98844154,19.98847558,19.98851012,19.9885421,19.98857619,19.9886091,19.98864325,19.98867651,19.98871001,19.98874303,19.9887763,19.98880891,19.98884274,19.98887404,19.98890497,19.98893519,19.98896734,19.98899841,19.98902859,19.98906065,19.98909174,19.9891222,19.98915231,19.98918294,19.98921384,19.98924503,19.98927496,19.98930572,19.98933464,19.98936469,19.98939444,19.98942463,19.98945116,19.98947968,19.98950641,19.98953699,19.98956621,19.98959588,19.98962375,19.98965841,19.98968558,19.98971212,19.98973917,19.98976515,19.98979265,19.98982052,19.98984783,19.98987467,19.98990184,19.98992253,19.98994961,19.98997691,19.99000416,19.99003056,19.99005591,19.99008261,19.99010832,19.99013684,19.99016267,19.99018869,19.99021403,19.99023851,19.99026226,19.9902869,19.99031241,19.99034007,19.99036449,19.99038867,19.9904143,19.99043845,19.99046274,19.99048707,19.99051026,19.99053433,19.9905602,19.99058323,19.99060585,19.9906291,19.99065242,19.99067535,19.99069846,19.9907215,19.99074492,19.99076697,19.9907923,19.99081515,19.99083523,19.99085733,19.9908813,19.99090305,19.99092465,19.99094905,19.99097292,19.99099382,19.99101474,19.99103637,19.9910571,19.99107733,19.99109684,19.9911181,19.99113962,19.99115978,19.99118177,19.99120359,19.99122595,19.99124766,19.99126785,19.99128895,19.9913088,19.99132913,19.99134858,19.99136683,19.99138793,19.99140588,19.99142759,19.99144924,19.99146834,19.99148698,19.99150908,19.99152782,19.99154733,19.99156791,19.99158613,19.99160584,19.99162535,19.99164384,19.99165979,19.99167899,19.99169866,19.99171983,19.99173747,19.9917549,19.99177403,19.99179277,19.99181186,19.99183095,19.99184876,19.99186795,19.99188586,19.99190342,19.99192203,19.99193849,19.99195827,19.99197584,19.99199294,19.99201079,19.99202975,19.99204689,19.99206457,19.99208149,19.9920982,19.99211482,19.99213548,19.9921521,19.99216875,19.99218429,19.99220045,19.99221591,19.99223443,19.9922512,19.99226775,19.99228426,19.99230017,19.99231832,19.99233272,19.99234877,19.9923665,19.99238234,19.99239725,19.99241538,19.99243239,19.99245028,19.99246559,19.99248227,19.99249699,19.99251186,19.99252718,19.99254261,19.99255799,19.99257322,19.99258874,19.99260365,19.99261884,19.99263425,19.99264914,19.99266435,19.99267886,19.99269354,19.99270889,19.9927288,19.9927417,19.99275669,19.99277043,19.99278474,19.99279923,19.99281348,19.99282762,19.99284694,19.99286091,19.99287503,19.99288883,19.99290335,19.99291565,19.99292976,19.99294298,19.99295649,19.99297113,19.99298556,19.99299871,19.99301293,19.99302669,19.99304045,19.99305439,19.99306843,19.99308146,19.99309495,19.99310768,19.99312231,19.99313714,19.99315095,19.99316371,19.99317788,19.99319163,19.9932047,19.99321707,19.99323011,19.99324287,19.99325603,19.99327002,19.993283,19.99329689,19.99330926,19.99332235,19.99333358,19.99334831,19.99336099,19.9933731,19.99338575,19.99339768,19.99341047,19.99342305,19.99343408,19.99344589,19.99345895,19.99346828,19.9934799,19.99349279,19.99350513,19.99351775,19.99353088,19.99354315,19.99355479,19.99356693,19.9935801,19.99359218,19.99360442,19.99361672,19.99362889,19.99364064,19.99365247,19.99366426,19.99367546,19.99368717,19.99369846,19.9937106,19.99372174,19.99373365,19.99374554,19.99375621,19.99376816,19.99378037,19.9937914,19.99380297,19.99381444,19.99382611,19.99383601,19.9938475,19.99385939,19.99387076,19.99388008,19.99389214,19.99390282,19.99391413,19.99392527,19.99393589,19.99394693,19.99395781,19.99396843,19.99397934,19.99398996,19.99400036,19.99401148,19.99402197,19.99403306,19.99404159,19.99405287,19.99406268,19.99407434,19.99408534,19.99409533,19.99410639,19.99411673,19.9941276,19.99413871,19.99414815,19.99415819,19.99416827,19.99417804,19.99418833,19.99419804,19.99420984,19.99421976,19.9942294,19.99423924,19.99424919,19.99425893,19.99426888,19.99427832,19.99428718,19.99429718,19.9943068,19.99431524,19.99432494,19.99433581,19.99434561,19.9943555,19.99436504,19.99437544,19.99438526,19.99439496,19.99440725,19.99441615,19.99442561,19.99443463,19.9944448,19.99445377,19.99446275,19.99447198,19.99447979,19.99448971,19.9944972,19.99450538,19.99451487,19.99452421,19.99453364,19.99454297,19.99455247,19.99456069,19.99457024,19.99457875,19.99458836,19.99459719,19.99460697,19.99461549,19.99462419,19.9946337,19.99464249,19.99465183,19.99466062,19.99466919,19.99467803,19.99468628,19.99469493,19.99470366,19.99471233,19.99472177,19.99473014,19.99473905,19.99474705,19.99475571,19.99476495,19.99477249,19.99478209,19.99479037,19.99479778,19.99480525,19.99481491,19.99482177,19.99482888,19.9948381,19.99484602,19.9948534,19.99486218,19.99487149,19.99487977,19.99488778,19.99489623,19.99490459,19.99491352,19.99492171,19.99492934,19.99493731,19.99494578,19.994955,19.99496279,19.99497047,19.99497798,19.99498466,19.99499489,19.99500195,19.99500902,19.99501954,19.9950264,19.99503311,19.99504082,19.99504827,19.99505565,19.99506346,19.99507106,19.99507846,19.99508673,19.9950949,19.99510267,19.99511033,19.99511851,19.99512558,19.99513287,19.99514033,19.99514758,19.995155,19.99516253,19.99517018,19.99517657,19.99518418,19.99519229,19.99519971,22.46282623,22.06704327,21.73466391,21.45572824,21.22154838,21.02507669,20.85991267,20.72127145,20.60481016,20.50711595,20.42512332,20.35630356,20.29849228,20.2500207,20.20932507,20.17505421,20.14642713,20.12246168,20.1021151,20.08500005,20.07075994,20.05876834,20.0487097,20.04025668,20.03319472,20.02721883,20.02218434,20.01818766,20.01458005,20.01170919,20.00923184,20.0071827,20.00545754,20.00340169,20.00223628,20.00112738,20.0002805,19.99959818,19.99915322,19.99865557,19.99823155,19.99787779,19.99762632,19.99739893,19.9970543,19.99684149,19.99669432,19.99664481,19.99662202,19.99654634,19.99641378,19.99645873,19.9964451,19.99637223,19.99637118,19.99631173,19.99632155,19.99628511,19.99627193,19.99622129,19.99621732,19.99630394,19.99627705,19.99625541,19.99623743,19.99621673,19.99623952,19.99620795,19.99630911,19.99633743,19.99626893,19.9964441,19.99621482,19.99628103,19.99627998,19.99622344,19.99631354,19.99625598,19.99610581,19.9962646,19.99620822,19.99637531,19.99632958,19.99650586,19.99641882,19.99641139,19.9963427,19.99631297,19.99613976,19.99614077,19.99618429,19.99614902,19.99633466,19.99643184,19.99585018,19.9959303,19.99610512,19.99620329,19.99620777,19.99630044,19.99633499,19.99654011,19.9964379,19.99638521,19.99632724,19.99589466,19.99551896,19.99571127,19.99584102,19.99592467,19.99598538,19.99605281,19.99612827,19.99627573,19.99626346,19.99625314,19.99637235,19.99634962,19.99636216,19.9963786,19.99641555,19.99641406,19.99642309,19.99642807,19.99645745,19.99643981,19.99641614,19.99644193,19.99636018,19.99648801,19.99651351,19.99649323,19.99647653,19.99660613,19.99656356,19.99663873,19.996689,19.99666632,19.996682,19.99666177,19.99669024,19.99658476,19.99662419,19.99660951,19.99669176,19.99672463,19.99669377,19.99666372,19.99672315,19.99663186,19.99650708,19.99655055,19.99655792,19.99658456,19.99654225,19.99669638,19.99680735,19.99676476,19.99666257,19.99648384,19.9965553,19.99645513,19.99652559,19.99638395,19.99637782,19.99651238,19.9965251,19.99649265,19.99653092,19.99651084,19.99676052,19.99695074,19.99687686,19.99675896,19.996933,19.99692912,19.99705637,19.99695076,19.99701725,19.99697842,19.99694644,19.9968942,19.99693286,19.99680012,19.99673743,19.99675351,19.99666772,19.99679077,19.99674581,19.99672903,19.996808,19.99681929,19.99679097,19.99674769,19.99666421,19.99681579,19.9968118,19.99682201,19.99675178,19.99675247,19.99674122,19.99690853,19.99688893,19.99692299,19.9968228,19.99685402,19.99682649,19.99696169,19.99694509,19.99687815,19.99687565,19.99689583,19.99679481,19.99678232,19.99692248,19.9969443,19.99697272,19.99698585,19.99680474,19.99682941,19.99677745,19.99671444,19.99675077,19.99677391,19.99682495,19.9968279,19.99682479,19.99700048,19.99696613,19.99696825,19.99707357,19.99694223,19.99691843,19.99698967,19.99694053,19.99695384,19.99692382,19.99693739,19.99700672,19.9971547,19.99725543,19.99723703,19.99720451,19.99703381,19.99698197,19.99692583,19.996896,19.99696635,19.997043,19.99706162,19.99703767,19.9970638,19.99705762,19.99710756,19.99708117,19.99702384,19.99703008,19.99702375,19.99705087,19.99704377,19.9970623,19.99706071,19.9969801,19.9969845,19.99691208,19.99700661,19.99701382,19.99705479,19.99692035,19.99694121,19.99696642,19.99699715,19.99696886,19.99697178,19.996942,19.99693547,19.99687174,19.99691919,19.99686177,19.99696431,19.99699737,19.99703681,19.99712134,19.99714497,19.99710321,19.99719645,19.99730277,19.99724096,19.99724914,19.99723172,19.99722744,19.99719465,19.9972039,19.99722872,19.99716662,19.99719636,19.99710501,19.99710386,19.99716417,19.99718872,19.99731372,19.99730758,19.99736967,19.99751266,19.99743829,19.99753351,19.99778573,19.99766726,19.99764933,19.99758283,19.99754261,19.99755511,19.99744227,19.99736159,19.99738752,19.99735496,19.9972468,19.99732641,19.99718961,19.99710107,19.99698274,19.99698261,19.99706503,19.9970326,19.99715299,19.99725569,19.99721347,19.99724295,19.99726357,19.99728924,19.99725856,19.99727406,19.99726588,19.99743218,19.9973731,19.99733159,19.99727331,19.99725546,19.99721229,19.9974783,19.9974358,19.9975347,19.99749351,19.99751079,19.99754717,19.99747247,19.99750043,19.99751824,19.9975127,19.99751325,19.99764075,19.997439,19.99746223,19.99708275,19.99700953,19.99715959,19.99712093,19.99716804,19.99719419,19.99722176,19.99722584,19.99723784,19.99723435,19.99715361,19.99721637,19.99727885,19.99727507,19.99731881,19.99723865,19.99714796,19.99725338,19.99739301,19.99747262,19.99749117,19.99749432,19.99749355,19.99747793,19.99750721,19.99747926,19.99732619,19.99731868,19.99725482,19.99725817,19.99724974,19.99732543,19.99726874,19.99732599,19.99730844,19.99732888,19.99700542,19.99713358,19.99724219,19.99729586,19.99733708,19.99746284,19.99745701,19.99749182,19.99752091,19.99748767,19.99761701,19.99760631,19.99758173,19.99761868,19.99753253,19.99755935,19.99752681,19.99741606,19.9975017,19.99744437,19.99745513,19.9975026,19.99755385,19.99755527,19.9975567,19.99757251,19.99751343,19.9974767,19.9975109,19.99738463,19.99735699,19.99733251,19.99736974,19.99736167,19.99766337,19.99752531,19.99751114,19.99752591,19.99749279,19.99757134,19.99755854,19.99753272,19.99752686,19.99752859,19.99750356,19.99746308,19.99737949,19.99743967,19.9971946,19.9972305,19.99749416,19.99772758,19.99757324,19.99757552,19.99760258,19.99754848,19.99757711,19.99761141,19.99771068,19.99756776,19.99764473,19.99759823,19.99800085,19.99798989,19.99796744,19.99793567,19.99791273,19.99778345,19.99782883,19.99785353,19.99778952,19.99783305,19.99778262,19.99774635,19.99770017,19.99779528,19.99774762,19.99775648,19.99776354,19.99760006,19.99756046,19.9975897,19.99772435,19.99769772,19.99768264,19.99767693,19.99767289,19.99765142,19.99763065,19.99752915,19.9976249,19.99766767,19.99764821,19.99756815,19.99762374,19.99761175,19.9976219,19.99768761,19.99757817,19.99768677,19.99779194,19.99779801,19.99765664,19.99765581,19.99764669,19.9976366,19.99767274,19.99769119,19.99765099,19.99765617,19.99763977,19.9976909,19.99767519,19.99770569,19.99772684,19.99769488,19.99770102,19.99761862,19.99763848,19.99766973,19.99775672,19.99780136,19.99779914,19.99785083,19.99782397,19.9978309,19.99779237,19.99754306,19.99776336,19.99775704,19.99768992,19.99769182,19.99776409,19.99791189,19.99786929,19.99783622,19.99785264,19.99788529,19.99785223,19.99780793,19.99787085,19.99774592,19.99775705,19.99775667,19.99773192,19.99768311,19.99772989,19.99776353,19.99767223,19.99790625,19.99785348,19.99781057,19.99775474,19.99768713,19.99774306,19.99770128,19.99771527,19.99773216,19.99783121,19.99784417,19.99779363,19.99771838,19.99772078,19.9977558,19.99772937,19.9976723,19.9976885,19.99768621,19.99772921,19.99771922,19.99777227,19.99772931,19.9976263,19.99751014,19.99755796,19.99738468,19.99746721,19.9975099,19.99752098,19.99756789,19.99767345,19.99766998,19.99764645,19.99766577,19.99769535,19.99771962,19.99774984,19.99775645,19.99772989,19.99774927,19.99779922,19.99786799,19.99788425,19.99794827,19.99786753,19.99776605,19.99785839,19.99793736,19.99785245,19.99782001,19.99773864,19.99774315,19.99774632,19.9977739,19.99778365,19.99780885,19.99784654,19.99793068,19.99814365,19.99806056,19.99804995,19.99796804,19.99798333,19.99802603,19.9980635,19.9979589,19.99803768,19.99794452,19.99785317,19.99786282,19.99787618,19.99791873,19.99793167,19.99793158,19.99784781,19.99789834,19.99779758,19.99789321,19.99785624,19.99796351,19.99804447,19.99799902,19.99789658,19.99785937,19.99786851,19.99778261,19.99774472,19.99777485,19.99791433,19.99793159,19.99799606,19.99809418,19.99807203,19.99804593,19.99805384,19.99801358,19.99793678,19.99789538,19.99787092,19.99802004,19.99794636,19.99789774,19.99791983,19.99791018,19.99798662,19.99799575,19.99798931,19.9980241,19.99804283,19.99801444,19.9980279,19.99796823,19.99802709,19.99797281,19.99801472,19.99790741,19.99796149,19.99796403,19.9978354,19.99787473,19.99803842,19.99808601,19.99808396,19.99807165,19.99806434,19.99813018,19.99802338,19.99801021,19.99791946,19.99785962,19.997907,19.99795499,19.99787623,19.99795249,19.99793639,19.99801425,19.99798734,19.99799804,19.99803909,19.9980797,19.99810604,19.99812198,19.99812279,19.99816128,19.99818627,19.99823977,19.9982618,19.99821357,19.9982727,19.99827414,19.99821632,19.99819259,19.99818451,19.99815054,19.99811858,19.99814388,19.99815222,19.99812585,19.99809355,19.9981061,19.99807567,19.99796966,19.99801492,19.99804333,19.99822665,19.9983682,19.99830625,19.99815669,19.99814763,19.99816754,19.99821807,19.99812925,19.99827095,19.99825868,19.99832143,19.99825546,19.99833245,19.99827262,19.99804496,19.9980519,19.99811207,19.9980817,19.99805981,19.99816522,19.99812982,19.99819286,19.9981981,19.99817045,19.99825748,19.99821695,19.99824433,19.99818165,19.99815572,19.99815684,19.99817844,19.99815241,19.99823859,19.99818631,19.99823346,19.998239,19.99819507,19.9981506,19.99815055,19.99812989,19.99812862,19.99809778,19.99812155,19.9980918,19.99815044,19.99835064,19.99833596,19.99828037,19.998344,19.99837227,19.9982046,19.99814427,19.99803192,19.99807558,19.99810113,19.99814434,19.99821209,19.99814767,19.99819878,19.99819111,19.99822201,19.99820935,19.99818204,19.99810521,19.99800409,19.99802257,19.99804339,19.99806439,19.9980798,19.99810805,19.99811907,19.9981738,19.99818335,19.99819432,19.99824056,19.99830239,19.99821814,19.9981903,19.99818964,19.99823739,19.99827248,19.99822668,19.99826624,19.99831538,19.99831439,19.99827473,19.99829793,19.99831051,19.99836761,19.99841536,19.99843636,19.99829274,19.99826805,19.99826232,19.99821817,19.99822357,19.9982412,19.99826691,19.99824306,19.99829861,19.99821606,19.99821956,19.99824201,19.99835343,19.99833682,19.99829052,19.99830038,19.99836446,19.99835226,19.99835127,19.99833907,19.9982847,19.99833973,19.99830707,19.99844706,19.99835571,19.99827011,19.99825407,19.99827066,19.99825779,19.99826955,19.99825752,19.99827374,19.9982778,19.99835005,19.99836771,19.99825403,19.99829342,19.99812732,19.99819251,19.99823066,19.99821864,19.99824645,19.99827176,19.9983155,19.99832057,19.99829901,19.99818993,19.99821565,19.99826203,19.99836796,19.99834107,19.99833597,19.99830941,19.99835119,19.99835134,19.99840673,19.99838086,19.99833823,19.99835495,19.99827359,19.99834481,19.9983005,19.99824306,19.99827674,19.99828665,19.99828778,19.99830785,19.99834967,19.99835754,19.99834944,19.99829643,19.99831235,19.99820397,19.99829171,19.99829132,19.99832242,19.99829058,19.99829256,19.99826265,19.99816239,19.99821793,19.99820711,19.99823711,19.99824869,19.99826662,19.99829924,19.99839095,19.99836982,19.99838846,19.9983934,19.99836137,19.99842632,19.99847228,19.99839797,19.99847798,19.99847193,19.99847703,19.99844873,19.9984279,19.99843079,19.99842974,19.9984184,19.99840963,19.99835697,19.99830522,19.9983433,19.99833635,19.99832343,19.99835875,19.99838904,19.99831825,19.99833039,19.99833598,19.99838283,19.99847642,19.99841765,19.99842148,19.99843055,19.99839919,19.99830313,19.99828711,19.99834562,19.9984185,19.99839503,19.9984334,19.99842827,19.99840755,19.99839474,19.99840746,19.99839867,19.9984108,19.99839728,19.99839856,19.99838041,19.99831439,19.99832696,19.99840715,19.99846651,19.99844458,19.99849845,19.99847992,19.99852323,19.998466,19.99851828,19.99842797,19.99848329,19.99847451,19.99847121,19.99846789,19.99844628,19.998405,19.99842278,19.99840507,19.99838962,19.99845014,19.99847107,19.99845507,19.99844452,19.99841501,19.99828464,19.99838623,19.9983932,19.99841562,19.99841091,19.9984329,19.99844341,19.99849108,19.99849372,19.99850491,19.99848253,19.99846001,19.99851387,19.99844216,19.99853105,19.99838253,19.99839392,19.99843372,19.99839638,19.99840817,19.99841866,19.99843176,19.998444,19.99844318,19.99840822,19.99847909,19.99851734,19.99854548,19.99847992,19.9984787,19.99851456,19.99852538,19.9985593,19.99852478,19.99849602,19.99860776,19.99857328,19.99874843,19.99862491,19.99860045,19.99859679,19.99858172,19.99856202,19.99855324,19.99846326,19.99852709,19.99839346,19.99839715,19.99843543,19.99841157,19.99845941,19.99849311,19.99851054,19.99849229,19.99848177,19.99850446,19.99853786,19.99852794,19.9985272,19.99853588,19.99853029,19.9985089,19.99845886,19.99853356,19.99849499,19.99853092,19.99848923,19.99850524,19.99853765,19.99846876,19.99846968,19.99846374,19.99848293,19.99848282,19.99849033,19.99853661,19.99833414,19.99836806,19.99841459,19.99845173,19.99845114,19.99850186,19.99851173,19.99850365,19.99858076,19.99854008,19.99853039,19.99846211,19.99847502,19.99850103,19.99855163,19.99858361,19.9985904,19.99852256,19.99841422,19.9984278,19.998523,19.99855225,19.99854435,19.99854078,19.99859556,19.9985831,19.99869579,19.99872746,19.99875535,19.99873821,19.99870363,19.99868357,19.99867295,19.998756,19.99865123,19.99865738,19.9984433,19.99846795,19.99848891,19.99850975,19.99854874,19.99837665,19.99848737,19.99850551,19.99852117,19.99853825,19.99855374,19.99855603,19.99853355,19.99854185,19.99853159,19.99864883,19.99859411,19.99856746,19.99847075,19.99843807,19.9985238,19.9985522,19.99854639,19.99858046,19.99853017,19.99856085,19.9985515,19.99850449,19.99861934,19.99859511,19.99859095,19.99862175,19.99877251,19.9986969,19.99868669,19.99869279,19.99870479,19.9986336,19.99864754,19.99857271,19.99860553,19.99863458,19.99863053,19.99862858,19.99864937,19.99861457,19.99860354,19.99860327,19.99859176,19.99859556,19.99863269,19.99863248,19.99849751,19.9984884,19.9985332,19.99857575,19.99857195,19.99852831,19.99860422,19.99857743,19.99857591,19.9985545,19.99857087,19.99862085,19.99862269,19.99863398,19.99866028,19.99866336,19.99866246,19.99865509,19.99863933,19.99866816,19.99864471,19.9986349,19.99872294,19.99891299,19.99896285,19.99885218,19.99882859,19.99881053,19.99879434,19.99876034,19.99877174,19.99875475,19.99877282,19.99884099,19.99888323,19.99882126,19.99873003,19.99868466,19.99865209,19.99869077,19.9987077,19.998741,19.99869522,19.9986804,19.99868177,19.99868168,19.9986631,19.99864418,19.99861633,19.99863665,19.99862388,19.99865988,19.99863675,19.99866217,19.99865616,19.99866098,19.99863813,19.99874178,19.99870656,19.99871054,19.99869639,19.99862377,19.99862433,19.99865214,19.99858741,19.99859039,19.99858737,19.99857209,19.99864106,19.99863249,19.99865949,19.99828416,19.99816304,19.99826016,19.99820778,19.99830161,19.99834585,19.99842807,19.99847567,19.99848996,19.99856091,19.99858991,19.99861938
        ];
        this.option.series[2].data=[0,0.068187713,0.302141101,0.668822927,1.115911232,1.603955045,2.108227334,2.61449107,3.114971393,3.605614563,4.084431281,4.550551206,5.003700203,5.443916731,5.871399794,6.286428098,6.689317322,7.080397682,7.460002233,7.828460846,8.18609717,8.533227175,8.870158507,9.197190275,9.514613069,9.822709077,10.12175227,10.41200861,10.69373626,10.96718581,11.23260049,11.49021639,11.74026267,11.98296174,12.21852949,12.44717546,12.66910304,12.88450963,13.09358685,13.29652067,13.49349161,13.68467488,13.87024053,14.05035363,14.2251744,14.39485835,14.5595564,14.71941507,14.87457655,15.02517886,15.17135596,15.31323789,15.45095084,15.58461732,15.71435622,15.84028296,15.96250954,16.08114469,16.19629394,16.30805972,16.41654143,16.52183559,16.62403584,16.72323311,16.81951563,16.91296903,17.00367646,17.0917186,17.17717377,17.26011797,17.34062498,17.41876643,17.49461182,17.56822862,17.6396823,17.70903643,17.77635271,17.841691,17.90510943,17.96666441,18.0264107,18.08440144,18.14068822,18.1953211,18.24834868,18.29981813,18.34977524,18.39826443,18.44532885,18.49101036,18.53534959,18.57838598,18.62015782,18.66070226,18.70005536,18.73825214,18.77532657,18.81131162,18.84623932,18.88014072,18.91304598,18.94498437,18.9759843,19.00607335,19.03527829,19.06362508,19.09113895,19.11784437,19.14376509,19.16892417,19.19334399,19.21704628,19.24005211,19.26238196,19.28405568,19.30509255,19.32551128,19.34533005,19.36456647,19.38323766,19.40136023,19.41895029,19.4360235,19.45259504,19.46867965,19.48429165,19.4994449,19.51415291,19.52842874,19.54228511,19.55573432,19.56878835,19.58145881,19.59375697,19.60569377,19.61727982,19.62852543,19.63944062,19.65003507,19.66031823,19.67029923,19.67998696,19.68939002,19.6985168,19.70737539,19.7159737,19.72431935,19.73241978,19.7402822,19.74791359,19.75532074,19.76251025,19.7694885,19.77626171,19.7828359,19.78921691,19.79541044,19.80142197,19.80725687,19.81292031,19.81841735,19.82375286,19.8289316,19.83395817,19.83883704,19.84357255,19.84816892,19.85263023,19.85696046,19.86116344,19.86524293,19.86920255,19.87304582,19.87677617,19.8803969,19.88391125,19.88732233,19.89063318,19.89384675,19.89696589,19.89999338,19.90293191,19.9057841,19.90855249,19.91123952,19.91384761,19.91637906,19.91883612,19.92122099,19.92353579,19.92578256,19.92796332,19.93008001,19.93213449,19.93412861,19.93606414,19.93794279,19.93976624,19.94153611,19.94325398,19.94492137,19.94653977,19.94811061,19.94963529,19.95111518,19.95255158,19.95394578,19.95529901,19.95661247,19.95788735,19.95912476,19.96032581,19.96149157,19.96262308,19.96372134,19.96478733,19.965822,19.96682626,19.96780102,19.96874714,19.96966545,19.97055678,19.97142192,19.97226165,19.97307669,19.97386779,19.97463564,19.97538093,19.97610433,19.97680646,19.97748797,19.97814945,19.97879149,19.97941467,19.98001953,19.98060663,19.98117647,19.98172957,19.98226642,19.98278749,19.98329325,19.98378415,19.98426063,19.98472311,19.98517199,19.98560769,19.98603058,19.98644105,19.98683946,19.98722616,19.9876015,19.98796581,19.98831942,19.98866263,19.98899576,19.9893191,19.98963294,19.98993756,19.99023323,19.99052021,19.99079876,19.99106912,19.99133154,19.99158625,19.99183348,19.99207344,19.99230635,19.99253241,19.99275183,19.99296481,19.99317153,19.99337217,19.99356692,19.99375595,19.99393942,19.9941175,19.99429035,19.99445811,19.99462095,19.99477901,19.99493242,19.99508132,19.99522585,19.99536613,19.99550229,19.99563445,19.99576272,19.99588723,19.99600807,19.99612537,19.99623922,19.99634972,19.99645698,19.99656109,19.99666213,19.99676021,19.99685541,19.99694781,19.99703749,19.99712454,19.99720903,19.99729104,19.99737064,19.9974479,19.99752289,19.99759567,19.99766632,19.99773489,19.99780145,19.99786605,19.99792875,19.99798961,19.99804868,19.99810602,19.99816167,19.99821569,19.99826812,19.99831901,19.9983684,19.99841634,19.99846287,19.99850804,19.99855188,19.99859443,19.99863573,19.99867582,19.99871473,19.99875249,19.99878915,19.99882473,19.99885926,19.99889278,19.99892531,19.99895689,19.99898754,19.99901729,19.99904617,19.99907419,19.9991014,19.9991278,19.99915343,19.9991783,19.99920245,19.99922588,19.99924863,19.99927071,19.99929214,19.99931293,19.99933312,19.99935272,19.99937174,19.9993902,19.99940812,19.99942551,19.99944239,19.99945877,19.99947468,19.99949011,19.99950509,19.99951964,19.99953375,19.99954745,19.99956075,19.99957365,19.99958618,19.99959834,19.99961014,19.9996216,19.99963272,19.99964351,19.99965398,19.99966415,19.99967402,19.9996836,19.9996929,19.99970192,19.99971068,19.99971918,19.99972743,19.99973544,19.99974321,19.99975076,19.99975808,19.99976519,19.99977209,19.99977879,19.99978529,19.9997916,19.99979772,19.99980366,19.99980943,19.99981503,19.99982047,19.99982574,19.99983086,19.99983583,19.99984066,19.99984534,19.99984988,19.99985429,19.99985857,19.99986273,19.99986676,19.99987068,19.99987448,19.99987817,19.99988175,19.99988522,19.99988859,19.99989187,19.99989504,19.99989813,19.99990112,19.99990403,19.99990685,19.99990958,19.99991224,19.99991482,19.99991732,19.99991975,19.99992211,19.9999244,19.99992662,19.99992878,19.99993087,19.9999329,19.99993487,19.99993679,19.99993864,19.99994045,19.9999422,19.99994389,19.99994554,19.99994714,19.9999487,19.9999502,19.99995167,19.99995309,19.99995447,19.9999558,19.9999571,19.99995836,19.99995959,19.99996077,19.99996193,19.99996304,19.99996413,19.99996518,19.99996621,19.9999672,19.99996816,19.9999691,19.99997001,19.99997089,19.99997174,19.99997257,19.99997338,19.99997416,19.99997492,19.99997566,19.99997637,19.99997707,19.99997774,19.9999784,19.99997903,19.99997965,19.99998025,19.99998083,19.99998139,19.99998194,19.99998247,19.99998298,19.99998348,19.99998397,19.99998444,19.9999849,19.99998534,19.99998577,19.99998619,19.99998659,19.99998699,19.99998737,19.99998774,19.9999881,19.99998845,19.99998879,19.99998912,19.99998944,19.99998975,19.99999005,19.99999034,19.99999063,19.9999909,19.99999117,19.99999143,19.99999168,19.99999193,19.99999216,19.99999239,19.99999262,19.99999283,19.99999304,19.99999325,19.99999345,19.99999364,19.99999383,19.99999401,19.99999418,19.99999435,19.99999452,19.99999468,19.99999484,19.99999499,19.99999514,19.99999528,19.99999542,19.99999555,19.99999568,19.99999581,19.99999593,19.99999605,19.99999617,19.99999628,19.99999639,19.9999965,19.9999966,19.9999967,19.9999968,19.99999689,19.99999698,19.99999707,19.99999716,19.99999724,19.99999732,19.9999974,19.99999748,19.99999755,19.99999762,19.99999769,19.99999776,19.99999783,19.99999789,19.99999795,19.99999801,19.99999807,19.99999813,19.99999818,19.99999824,19.99999829,19.99999834,19.99999839,19.99999843,19.99999848,19.99999852,19.99999857,19.99999861,19.99999865,19.99999869,19.99999873,19.99999877,19.9999988,19.99999884,19.99999887,19.99999891,19.99999894,19.99999897,19.999999,19.99999903,19.99999906,19.99999908,19.99999911,19.99999914,19.99999916,19.99999919,19.99999921,19.99999923,19.99999926,19.99999928,19.9999993,19.99999932,19.99999934,19.99999936,19.99999938,19.9999994,19.99999941,19.99999943,19.99999945,19.99999946,19.99999948,19.9999995,19.99999951,19.99999953,19.99999954,19.99999955,19.99999957,19.99999958,19.99999959,19.9999996,19.99999961,19.99999963,19.99999964,19.99999965,19.99999966,19.99999967,19.99999968,19.99999969,19.9999997,19.99999971,19.99999971,19.99999972,19.99999973,19.99999974,19.99999975,19.99999975,19.99999976,19.99999977,19.99999977,19.99999978,19.99999979,19.99999979,19.9999998,19.99999981,19.99999981,19.99999982,19.99999982,19.99999983,19.99999983,19.99999984,19.99999984,19.99999985,19.99999985,19.99999986,19.99999986,19.99999986,19.99999987,19.99999987,19.99999988,19.99999988,19.99999988,19.99999989,19.99999989,19.99999989,19.9999999,19.9999999,19.9999999,19.99999991,19.99999991,19.99999991,19.99999991,19.99999992,19.99999992,19.99999992,19.99999992,19.99999993,19.99999993,19.99999993,19.99999993,19.99999993,19.99999994,19.99999994,19.99999994,19.99999994,19.99999994,19.99999994,19.99999995,19.99999995,19.99999995,19.99999995,19.99999995,19.99999995,19.99999995,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999996,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999997,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999998,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,19.99999999,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,22.94233495,22.81996352,22.69984316,22.59116245,22.49275492,22.40204815,22.31702091,22.23635869,22.15925603,22.08522221,22.09105118,22.12736859,22.1334113,22.10938221,22.06566952,22.01104601,21.95119468,21.88944428,21.82764338,21.7667795,21.72717585,21.69643617,21.65907967,21.6152114,21.56750969,21.51821432,21.46875906,21.41996685,21.37227773,21.32590973,21.31181611,21.3103447,21.2972263,21.27256085,21.24050811,21.20457254,21.16701756,21.12916223,21.09173229,21.05510864,20.89364187,20.68766411,20.5361329,20.43852679,20.37771616,20.33921861,20.31360264,20.29528573,20.28110707,20.2693164,20.30961322,20.36916797,20.40786709,20.42576034,20.42964632,20.42529209,20.41645009,20.40533366,20.39318714,20.38069056,20.34602068,20.30351644,20.27071644,20.24757435,20.2310913,20.21872215,20.20880546,20.20035486,20.19280913,20.18585488,20.18333728,20.18259546,20.18041358,20.17677503,20.17220552,20.16715268,20.16190639,20.15663563,20.15143323,20.14634773,20.12242164,20.09176994,20.0693183,20.05498775,20.04619451,20.04075429,20.03724477,20.03482424,20.03301631,20.03155733,20.04068937,20.05371022,20.06241144,20.06681218,20.0683115,20.06809497,20.06693397,20.06528376,20.06340055,20.0614247,20.10997835,20.17686641,20.22237013,20.24670734,20.25675522,20.25832159,20.25518237,20.24956605,20.24272791,20.23535659,20.22793003,20.22057649,20.21331363,20.20619256,20.19925117,20.19251049,20.18597962,20.17966036,20.17355042,20.16764537,20.10554933,20.02321763,19.96497723,19.93059,19.91238244,19.9038709,19.90083694,19.90078776,19.90231598,19.90464637,19.98095937,20.08409197,20.15606012,20.19710372,20.21719825,20.2247828,20.22534889,20.22214064,20.21698808,20.21089773,20.15153033,20.07290202,20.01674226,19.98291216,19.96425975,19.95472749,19.95037071,19.94885691,19.94886831,19.94967821,19.96030188,19.9745252,19.98483604,19.99121281,19.99490355,19.99697317,19.99811685,19.99874623,19.99909417,19.99928929,19.97766472,19.94812057,19.92776658,19.91652431,19.91144408,19.91003206,19.91066609,19.9123883,19.91465876,19.91718092,19.97012691,20.04131364,20.09112634,20.11974962,20.13401652,20.13970445,20.14057246,20.13884125,20.13576373,20.1320292,20.11500738,20.09319046,20.07690683,20.06615728,20.05920066,20.05455556,20.05125513,20.04872628,20.04664409,20.04482825,19.9883019,19.91200734,19.85905845,19.82921254,19.81499797,19.81010479,19.81042942,19.81354854,19.81809567,19.82331966,19.85301464,19.89153104,19.91972946,19.93765143,19.94855925,19.95522056,19.95943938,19.96228369,19.96435799,19.96599672,20.00218246,20.05082231,20.0846116,20.10372323,20.11290544,20.11616516,20.11610769,20.11427142,20.1115239,20.10834206,20.14448028,20.19488841,20.22858727,20.24577631,20.25184398,20.25133532,20.24720357,20.24119061,20.23427676,20.22699895,20.21924669,20.21142638,20.2039296,20.19679271,20.18997816,20.18344545,20.17716415,20.17111296,20.16527673,20.15964405,20.07804499,19.96904108,19.89250162,19.84810683,19.82549494,19.81591132,19.81366075,19.81537858,19.81916615,19.82397846,19.87125982,19.93391594,19.97875854,20.00587731,20.02094278,20.02876129,20.03246351,20.03390094,20.03411975,20.03369702,19.98400324,19.9164199,19.86951607,19.84313848,19.8306575,19.82646382,19.82690751,19.82983268,19.83402358,19.83881193,19.83358917,19.82469767,19.82009279,19.81968087,19.82204358,19.82599295,19.83076012,19.83589371,19.84114161,19.84636752,19.94760315,20.08352557,20.17856352,20.23310602,20.26021943,20.27094541,20.27246685,20.2690268,20.26301898,20.25576024,20.17581073,20.06956502,19.99394932,19.94877038,19.92426886,19.91217982,19.90712162,19.90591255,19.90675548,19.90865981,19.96517891,20.04152784,20.09502629,20.12581536,20.1412078,20.14739613,20.14841143,20.14663564,20.14341282,20.1394825,20.03787728,19.90090495,19.80522744,19.75050251,19.72351992,19.71310803,19.71199785,19.71589524,19.72237773,19.73011284,19.80891872,19.91342549,19.98797335,20.03274804,20.05728929,20.06967683,20.07517203,20.07688578,20.0765755,20.07521017,20.05180232,20.02035567,19.99793581,19.98453436,19.97726774,19.97368572,19.97219124,19.97183965,19.97209728,19.97266993,19.94421954,19.90526768,19.87870789,19.86439595,19.85835195,19.85721781,19.85881082,19.86184279,19.86558808,19.86964849,19.90110706,19.94244173,19.97213252,19.99026225,20.00052892,20.00606302,20.00890306,20.01025456,20.0107989,20.01091207,19.98172788,19.94189606,19.91433108,19.89894505,19.89180199,19.88957128,19.8900857,19.89206526,19.89478825,19.89785808,19.99576838,20.12800778,20.2200589,20.27228102,20.29753709,20.30670031,20.3068442,20.30214674,20.29496435,20.28659273,20.27100326,20.25286155,20.23765473,20.22545585,20.21539923,20.20673372,20.19896391,20.19179263,20.18504825,20.1786326,20.14479173,20.10115474,20.06947517,20.04962457,20.0378262,20.03088983,20.02673899,20.02414545,20.02241453,20.02116229,19.94031002,19.83067815,19.7549967,19.71290359,19.69352061,19.68766279,19.68935767,19.69507896,19.70283885,19.71154523,19.83636363,20.00316038,20.12076645,20.18957477,20.2252848,20.24117691,20.24589416,20.24454416,20.24000996,20.23387907,20.17956701,20.10779231,20.05610029,20.02442323,20.00637446,19.99653463,19.99137221,19.9887979,19.98763057,19.98721822,19.99845627,20.01397808,20.02483548,20.03101954,20.03403061,20.03514552,20.03519663,20.03467604,20.03386142,20.03290553,20.08103718,20.14695893,20.19205611,20.21654282,20.22710737,20.22939796,20.227087,20.22234223,20.21638506,20.20988591,20.19381935,20.17436346,20.15899775,20.14773362,20.1393181,20.13268207,20.12712598,20.12223359,20.11776732,20.11359383,19.99342459,19.83132911,19.71864776,19.65488716,19.62423551,19.61333577,19.61350046,19.61959892,19.62873771,19.63932603,19.65688565,19.67688758,19.69407336,19.70834587,19.72051264,19.73128021,19.74111669,19.75030429,19.75900724,19.7673207,19.81670044,19.88077963,19.9270333,19.9556479,19.97226505,19.98165082,19.98690713,19.98986836,19.99157157,19.9925895,19.99118195,19.98882692,19.98722921,19.98642951,19.98617524,19.98624492,19.98649298,19.98683315,19.98721678,19.9876172,20.05417449,20.14469305,20.20715956,20.24184435,20.25774171,20.26245079,20.2609138,20.25604891,20.24950118,20.24217432,20.22719038,20.20950654,20.19504956,20.18385793,20.17496303,20.1675325,20.16101973,20.1550982,20.1495804,20.14436006,20.07114749,19.97341844,19.9047919,19.86497313,19.84467502,19.8360523,19.83400155,19.83550782,19.83886978,19.84315103,19.86779896,19.8998162,19.92337096,19.93847079,19.94779157,19.95360804,19.95740395,19.96005807,19.96206803,19.96370933,19.94257213,19.91312612,19.89315307,19.88258492,19.87836795,19.87791856,19.87955616,19.88228877,19.88555766,19.88905642,19.9500278,20.03177441,20.08911819,20.12227299,20.13903444,20.14599347,20.14743852,20.14590323,20.1428173,20.13896749,20.11486156,20.08343007,20.06045307,20.045911,20.03712669,20.03182654,20.02852814,20.02635388,20.02480702,20.02361284,20.01562101,20.00521398,19.99785073,19.99347817,19.9911311,19.98999783,19.989551,19.98947915,19.98960647,19.98983608,19.92484035,19.83621831,19.77527301,19.74172799,19.72670366,19.72269962,19.72483851,19.7302408,19.73728357,19.74507557,19.76494883,19.78911422,19.80815117,19.82204099,19.832358,19.84044613,19.84718481,19.85309725,19.85848194,19.86350632,19.94949,20.06468673,20.14526917,20.19159048,20.21470744,20.22395956,20.22542173,20.22268234,20.21776581,20.21178591,20.10915837,19.97154643,19.87474101,19.81843417,19.7895908,19.77718156,19.7740281,19.77588861,19.78036905,19.78615157,19.90728096,20.07019021,20.18445526,20.25044309,20.28370475,20.29739806,20.30008616,20.29682869,20.2904807,20.28261334,20.19945683,20.08905391,20.01031066,19.96304446,19.93717112,19.92414748,19.91840996,19.91666887,19.91706584,19.91857621,19.94998718,19.99228546,20.02224106,20.03989002,20.04917824,20.05345424,20.05489953,20.05480391,20.05389573,20.05257619,20.05301018,20.05407279,20.05429523,20.05371795,20.05262225,20.05123984,20.04971967,20.04814871,20.04657519,20.04502487,20.01119969,19.96571157,19.9339657,19.9158298,19.90691007,19.90349389,19.90316623,19.90450059,19.9066923,19.90929878,19.9799347,20.0752,20.14168151,20.17962373,20.19823577,20.20530455,20.20589645,20.20300428,20.1983163,20.19276103,20.14962925,20.0929201,20.05203007,20.0268787,20.01244205,20.00446162,20.00016312,19.99790538,19.99676054,19.99621634,19.95338615,19.89529072,19.85534604,19.83333323,19.82343558,19.82074619,19.82207542,19.82554046,19.83008021,19.83511193,19.871714,19.91969925,19.9542999,19.97560103,19.98785024,19.99464514,19.99832891,20.00028756,20.00130468,20.00181291,19.96787687,19.92141577,19.88936305,19.871615,19.86354508,19.86123847,19.86214801,19.86476942,19.8682547,19.87213801,19.86286984,19.84879679,19.84030366,19.83730037,19.8379619,19.84075366,19.84468041,19.84915655,19.85385379,19.85859357,19.91852265,19.99836365,20.05466293,20.08763735,20.10479494,20.11248196,20.11482771,20.11427221,20.11219272,20.10934764,20.08126545,20.04403505,20.01733579,20.00112627,19.99205406,19.98727562,19.9849383,19.98394629,19.98368027,19.98379859,20.05849624,20.16023859,20.23049486,20.26954245,20.28747994,20.29284389,20.29118708,20.28578848,20.27849658,20.27032697,20.18139738,20.06329215,19.97939712,19.92945881,19.902578,19.88953094,19.88431313,19.88337515,19.88471248,19.88722041,19.98726115,20.1226772,20.2170667,20.27073815,20.29682897,20.30645431,20.30684719,20.30228039,20.29516408,20.28682368,20.24425582,20.1893476,20.14881067,20.12260958,20.10621002,20.09576101,20.08875113,20.08369289,20.07974373,20.07643692,20.02180461,19.94868492,19.89765632,19.86846361,19.85405139,19.84846526,19.8478333,19.84986878,19.85328186,19.85736307,19.85608722,19.85284661,19.85196816,19.85337304,19.85626668,19.85998859,19.86411285,19.86839036,19.87268277,19.87691604,19.96920609,20.09331684,20.1799354,20.22942235,20.25376498,20.26309228,20.26399308,20.26035922,20.25438606,20.24728109,20.14146541,19.9999331,19.90009656,19.84164622,19.81127197,19.7977106,19.79363104,19.79470076,19.79847409,19.80360435,19.84754971,19.90556488,19.94741911,19.97316132,19.98792924,19.99608344,20.00046583,20.00275785,20.00391019,20.00444775,19.95749664,19.89328642,19.84897667,19.82441803,19.81322199,19.80998385,19.81118721,19.81475546,19.81951792,19.82483148,19.88564699,19.96651488,20.02386425,20.05787372,20.0760389,20.08470235,20.08799264,20.08835015,20.08715289,20.08516014,20.02210004,19.93689367,19.87736773,19.84333444,19.82657429,19.82013199,19.81948114,19.82194759,19.82602272,19.83087669,19.8152885,19.79226483,19.77800983,19.77237301,19.77249791,19.77598386,19.78127393,19.78745162,19.79400282,19.80064745,19.86977874,19.96143519,20.0264092,20.064941,20.08552868,20.09535666,20.0991003,20.09952281,20.09818446,20.0959449,20.06982551,20.03502873,20.0101204,19.99507413,19.98673804,19.98243664,19.98042647,19.97967625,19.97960323,19.97988597,20.01240583,20.05662564,20.087293,20.10451302,20.1126304,20.11532037,20.11497416,20.11300413,20.11020672,20.10701965,20.16666086,20.24909189,20.30486398,20.33426991,20.34588964,20.34696509,20.34220349,20.33438237,20.32506582,20.31511145,20.21382501,20.07958261,19.98417546,19.92729088,19.89656259,19.88152938,19.87538195,19.8740952,19.87539597,19.87803139,19.90100325,19.93139364,19.95353357,19.96740126,19.97561984,19.98042376,19.98327111,19.98502526,19.98617479,19.98698975,19.96695313,19.93932312,19.92038914,19.91008966,19.90562773,19.90463664,19.90557661,19.90753847,19.91000988,19.9127096,19.95062863,20.00127521,20.03697892,20.05786334,20.06869701,20.07351302,20.07493599,20.07451691,20.07313123,20.07126101,19.99721208,19.8970122,19.8273059,19.78783582,19.76883768,19.76205507,19.76211636,19.76584877,19.77146284,19.77797471,19.85387481,19.95486205,20.02652299,20.06906523,20.09183657,20.10274936,20.10695462,20.10749723,20.10609664,20.10370033,20.15089122,20.21601609,20.25985916,20.28270372,20.2913974,20.29171139,20.28739503,20.28065999,20.27275131,20.26435139,20.25006968,20.23377174,20.22008385,20.20903148,20.19985379,20.19189702,20.18473105,20.17809802,20.17184891,20.16589826,20.10050124,20.01369692,19.95239769,19.91634496,19.89741219,19.8887342,19.88584465,19.88610444,19.8880238,19.89078224,19.92605977,19.9731306,20.00661169,20.02656894,20.03733669,20.04258889,20.04471844,20.04514014,20.04465314,20.04369787,20.02828332,20.00761311,19.99294339,19.98425172,19.97962183,19.97742835,19.97661247,19.97654819,19.97688195,19.97741895,20.02146125,20.08126994,20.1226883,20.14587905,20.15673628,20.16024239,20.15963842,20.15683839,20.15292151,20.14848087,20.08802136,20.00730853,19.95031306,19.91685082,19.89935449,19.89142176,19.88888563,19.88928345,19.89122498,19.89394461,19.8944643,19.89419553,19.89503489,19.89691012,19.89944141,19.90231926,19.90534575,19.90840596,19.91143672,19.91440478,19.95264888,20.00361481,20.03950439,20.06046318,20.07129995,20.07607819,20.07744164,20.07695232,20.07549186,20.07354565,20.08415561,20.09931355,20.10904772,20.1134496,20.11427639,20.11300541,20.11059518,20.10761034,20.10436806,20.10104153,20.04447909,19.96868392,19.91553995,19.88483943,19.86934708,19.86294733,19.86166138,19.86313858,19.86605262,19.8696736,19.84779402,19.81666324,19.79646261,19.78702811,19.78482116,19.78686324,19.79122084,19.79675461,19.80282424,19.80907982,19.83576964,19.86976375,19.89494675,19.91137942,19.92183103,19.92864707,19.93335607,19.93686321,19.93968136,19.94209478,19.96674697,19.99938262,20.02236949,20.03582634,20.04282587,20.04596024,20.0469151,20.04668625,20.04583566,20.04467278,20.0057918,19.95324423,19.9166175,19.8957819,19.88564112,19.88188499,19.88170908,19.88345679,19.88619368,19.88940587,19.9818994,20.106715,20.19373828,20.24329567,20.26748037,20.27651696,20.27705758,20.2730316,20.26665546,20.25914808,20.24114836,20.21939888,20.20196292,20.18889438,20.17887752,20.1707822,20.16386703,20.15769006,20.15199842,20.14664969,20.08559227,20.0044741,19.94727141,19.91373674,19.89624798,19.88836696,19.88590547,19.88638889,19.88842043,19.89123096,19.84725897,19.78634565,19.74543641,19.72427539,19.71642089,19.71644219,19.72081088,19.72744572,19.73517517,19.74335729,19.81001946,19.89775417,19.96057631,19.99868004,20.01998192,20.03118049,20.0366368,20.03892949,20.03951563,20.039199,19.98316808,19.90689221,19.85393352,19.82413197,19.81001075,19.80524158,19.80570627,19.80897222,19.81366758,19.81903824,19.83963846,19.86570939,19.88537429,19.89863659,19.90750245,19.91367833,19.91827821,19.9219627,19.92510674,19.92791874
        ];

        this.initChartOne();
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
        this.option.series[3].data=[];
        this.signalwater = 1;
        this.initChartOne();
        this.beforeDestroy();

      },
      beforeDestroy(){
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
    left: 48%;
    top: 15%;
  }

</style>
