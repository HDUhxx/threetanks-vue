<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <v-card>


      <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景2.png">
      <img  src="../../assets2/标题框.png" style="position: absolute;left: 0;top: 0;"/>
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


        <img                     src="../../assets2/按钮系统建模1.png"                                 style="position: absolute; left: 1%;top: 9%;" onclick="location='/#/form/DataModelForm3'"/>

        <!--<img  v-if="tag3 == 1" src="../../assets2/按钮pid控制规律0.png" v-on:mouseenter="changetag31" style="position: absolute; left: 1%;top: 16%;" onclick="location='/#/form/easypid-form3'"/>-->
        <img  src="../../assets2/按钮pid控制规律.png" v-on:mouseleave="changetag32" style="position: absolute; left: 1%;top: 16%;" onclick="location='/#/form/easypid-form3'"/>

        <!--<img  v-if="tag6 == 1" src="../../assets2/按钮一阶纯滞后0.png" v-on:mouseenter="changetag61" style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>-->
        <img   src="../../assets2/按钮一阶纯滞后.png" v-on:mouseleave="changetag62" style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>

        <!--<img  v-if="tag4 == 1" src="../../assets2/按钮一阶系统串级0.png" v-on:mouseenter="changetag41" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>-->
        <img   src="../../assets2/按钮一阶系统串级.png" v-on:mouseleave="changetag42" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>

        <!--<img  v-if="tag7 == 1"  src="../../assets2/按钮二阶前馈0.png" v-on:mouseenter="changetag71" style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>-->
        <img   src="../../assets2/按钮二阶前馈.png"  v-on:mouseenter="changetag72"  style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>

        <!--<img  v-if="tag5 == 1" src="../../assets2/按钮二阶系统复杂控制0.png" v-on:mouseenter="changetag51" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>-->
        <img   src="../../assets2/按钮二阶系统复杂控制.png" v-on:mouseleave="changetag52" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>

        <!--<img  v-if="tag1 == 1" src="../../assets2/按钮编写算法0.png" v-on:mouseenter="changetag11" style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>-->
        <img   src="../../assets2/按钮编写算法.png" v-on:mouseleave="changetag12" style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>

        <img src="../../assets2/底框建模动态水箱.png" style="position: absolute;left: 15%;top:9%;"/>



        <img src="../../assets2/底框建模系统参数.png" style="position: absolute;left: 15%;top:70%;"/>


        <img src="../../assets2/底框水箱1阶跃响应数据.png" style="position: absolute;left: 66%;top:9%;"/>
        <img v-if="singnalxiang1 == 1" src="../../assets2/按钮响应曲线.png" v-on:mouseenter="changexiang11" style="position: absolute;left: 26%;top: 51%;" @click="responseChart1"/>
        <img v-if="singnalxiang1 == 2" src="../../assets2/按钮响应曲线1.png" v-on:mouseleave="changexiang12" style="position: absolute;left: 26%;top: 51%;" @click="responseChart1"/>
        <img v-if="singnalnihe1 == 1" src="../../assets2/按钮曲线拟合.png" v-on:mouseenter="changenihe11"  style="position: absolute;left:36%;top: 51%;" @click=" niheChart1"/>
        <img v-if="singnalnihe1 == 2" src="../../assets2/按钮曲线拟合1.png" v-on:mouseleave="changenihe12" style="position: absolute;left: 36%;top: 51%;" @click=" niheChart1"/>
        <img v-if="singnalbianshi1 == 1" src="../../assets2/按钮参数辨识.png" v-on:mouseenter="changebianshi11"  style="position: absolute;left: 46%;top: 51%;" @click="bianshiChart1"/>
        <img v-if="singnalbianshi1 == 2" src="../../assets2/按钮参数辨识1.png" v-on:mouseleave="changebianshi12" style="position: absolute;left: 46%;top: 51%;" @click="bianshiChart1"/>
        <img src="../../assets2/输入框拟合.png" style="position: absolute;left: 26%;top: 58%;"/>
        <img v-if="singnalbiaodashi1 == 2" src="../../assets2/拟合表达式1+new.png" style="position: absolute;left: 34%;top: 57%;"/>


        <img src="../../assets2/底框水箱2阶跃响应数据.png" style="position: absolute;left: 66%;top:55%;"/>
        <img v-if="singnalxiang2 == 1" src="../../assets2/按钮响应曲线.png" v-on:mouseenter="changexiang21" style="position: absolute;left: 66%;top: 89%;" @click="responseChart2" />
        <img v-if="singnalxiang2 == 2" src="../../assets2/按钮响应曲线1.png" v-on:mouseleave="changexiang22" style="position: absolute;left: 66%;top: 89%;" @click="responseChart2"/>
        <img v-if="singnalnihe2 == 1" src="../../assets2/按钮曲线拟合.png" v-on:mouseenter="changenihe21"  style="position: absolute;left:77%;top: 89%;" @click=" niheChart2"/>
        <img v-if="singnalnihe2 == 2" src="../../assets2/按钮曲线拟合1.png" v-on:mouseleave="changenihe22" style="position: absolute;left: 77%;top: 89%;" @click=" niheChart2"/>
        <img v-if="singnalbianshi2 == 1" src="../../assets2/按钮参数辨识.png" v-on:mouseenter="changebianshi21"  style="position: absolute;left: 88%;top: 89%;" @click="bianshiChart2"/>
        <img v-if="singnalbianshi2 == 2" src="../../assets2/按钮参数辨识1.png" v-on:mouseleave="changebianshi22" style="position: absolute;left: 88%;top: 89%;" @click="bianshiChart2"/>
        <img src="../../assets2/输入框拟合.png" style="position: absolute;left: 68%;top: 95%;"/>
        <img v-if="singnalbiaodashi2 == 2" src="../../assets2/拟合表达式2.png" style="position: absolute;left: 34%;top: 58%;"/>
      <img src="../../assets2/公式1+tao.png" style="position: absolute;left: 22%;top: 75%;"/>
      <img src="../../assets2/公式2+tao.png" style="position: absolute;left: 42%;top: 75%;"/>


      <v-flex style="position: absolute;left: 18%;top:82%;width: 120px;" >
        <v-col cols="12" sm="6" md="3" ><h2 style="color: white;">K1:</h2>
          <el-input v-model="k1" placeholder="K1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 25%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" ><h2 style="color: white;">T1:</h2>
          <el-input v-model="a1" placeholder="T1" class="te"></el-input>
        </v-col>
      </v-flex>
        <v-flex style="position: absolute;left: 32%;top:82%;width: 120px">
          <v-col cols="12" sm="6" md="3" ><h2 style="color: white;">τ1:</h2>
            <el-input v-model="tao1" placeholder="T1" class="te"></el-input>
          </v-col>
        </v-flex>

      <v-flex style="position: absolute;left: 40%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" ><h2 style="color: white;">K2:</h2>
          <el-input v-model="k2" placeholder="K2" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 47%;top:82%;width: 120px">
        <v-col cols="12" sm="6" md="3" ><h2 style="color: white;">T2:</h2>
          <el-input v-model="a2" placeholder="2" class="te"></el-input>
        </v-col>
        </v-flex>
        <v-flex style="position: absolute;left: 54%;top:82%;width: 120px">
          <v-col cols="12" sm="6" md="3" ><h2 style="color: white;">τ2:</h2>
            <el-input v-model="tao2"  placeholder="2" class="te"></el-input>
          </v-col>
        </v-flex>



        <img v-if="singnalsave == 1" src="../../assets2/按钮保存模型.png" v-on:mouseenter="chengesave1"  style="position: absolute;left: 51%;top: 92%;" @click="open2"/>
        <img v-if="singnalsave == 2" src="../../assets2/按钮保存模型1.png" v-on:mouseleave="changesave2" style="position: absolute;left: 51%;top: 92%;" @click="open2"/>




        <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
        <img  src="../../assets2/二阶系统--循环透明-2.gif" style="position: absolute;left: 60%;top: 9%;"/>
        <div class="px2" ref="chartOne"  style="position: absolute;left:18%;top:12%;width: 800px;height:400px"></div>
        <div style="position: absolute;left: 48%;top: 12%;" @click="cleardata"><el-radio v-model="radio" label="1" >水箱一</el-radio></div>
        <div  style="position: absolute;left: 52%;top: 12%;" @click="cleardata"><el-radio v-model="radio" label="2" >水箱二</el-radio></div>
        <div class="px2" ref="chartTwo"  style="position: absolute;left:66%;top:58%;width: 550px;height:320px"></div>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
  import pdf from 'vue-pdf'
  import echarts from 'echarts'
  export default {
    name: "data-model-form3",
    data() {
      return {
        components:{

        },
        radio: '2',
        tao1:0,
        tao2:0,
        url2:"../../../static/实验步骤.pdf",
        flaghelp:false,
        singnalreturn:1,
        singanlzhuye:1,
        singnalhelp:1,

        singnalsave:1,

        singnalxiang1:1,
        singnalnihe1:1,
        singnalbianshi1:1,
        singnalxiang2:1,
        singnalnihe2:1,
        singnalbianshi2:1,

        singnalbiaodashi1:1,
        singnalbiaodashi2:1,

        tag1:1,
        tag2:2,
        tag3:2,
        tag4:2,
        tag5:2,
        tag6:2,
        tag7:2,

        showH:false,
        k1: 0,
        k2: 0,
        a1: 0,
        a2: 0,
        k12: 0,
        k22: 0,
        a12: 0,
        a22: 0,
        karules: [v => !!v && v>0 ||'请输入大于0的数字'],
        tableData: [{
          A1: '200',
          R1: '2',
          A2: '100',
          R2: '1'
        }],
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
            color: ["#AAF487", "#FF0000","#1E90FF","#FFA500"],
            data: ['液位1', '切线','终值','拟合'],
            bottom: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: 12
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
            type: 'category',
            name:'s',
            data: [''],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize:'16'
              }
            },
            axisLine: {
              lineStyle: {
                color: "#999"
              }
            }
          },
          yAxis: {
            type: 'value',
            name:'mm',
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#DDD'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize:'16'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                fontSize:'16'
              },
            },
            nameTextStyle: {
              color: "#999"
            },
            splitArea: {
              show: false
            }
          },
          series: [
            {
              symbol: "none",
              name: '液位1',
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
                        color: '#AAF487' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#AAF487' // 100% 处的颜色
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
              smooth: false
            },
            {
              symbol: "none",
              name: '切线',
              type: 'line',
              data: [],
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#FF0000' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#FF0000' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#FF0000' // 100% 处的颜色
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
                  color: '#FF0000',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#FF0000"
                }
              },
              smooth: true
            },
            {
              symbol: "none",
              name: '终值',
              type: 'line',
              data: [],
              lineStyle: {
                normal: {
                  width: 1,
                  color: {
                    type: 'dashed',

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
              name: '拟合',
              type: 'line',
              data: [],
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
                        color: '#FFA500' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#FFA500' // 100% 处的颜色
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
              smooth: true
            },
          ]
        },
        option1: {
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            top: 0,
            right: 40,
            feature: {
              mark: {show: true},
              restore: {show: true},
              saveAsImage: {show: true}
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
          legend: {
            color: ["#AAF487", "#FF0000","#1E90FF","#FFA500"],
            data: ['液位2', '切线','终值','拟合'],
            bottom: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: 12
            }

          },
          xAxis: {
            type: 'category',
            name:'s',
            data: [''],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize:'16'
              }
            },
            axisLine: {
              lineStyle: {
                color: "#999"
              }
            }
          },
          yAxis: {
            type: 'value',
            name:'mm',
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#DDD'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize:'16'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff"
              },
            },
            nameTextStyle: {
              color: "#999"
            },
            splitArea: {
              show: false
            }
          },
          series: [
            {
              symbol: "none",
              name: '液位2',
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
                        color: '#AAF487' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#AAF487' // 100% 处的颜色
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
              name: '切线',
              type: 'line',
              data: [1],
              lineStyle: {
                normal: {
                  width: 2,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#FF0000' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#FF0000' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#FF0000' // 100% 处的颜色
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
                  color: '#FF0000',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#FF0000"
                }
              },
              smooth: true
            },
            {
              symbol: "none",
              name: '终值',
              type: 'line',
              data: [],
              lineStyle: {
                normal: {
                  width: 1,
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
              name: '拟合',
              type: 'line',
              data: [],
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
                        color: '#FFA500' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#FFA500' // 100% 处的颜色
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
              smooth: true
            },
          ]
        },

      }
    },
    mounted(){
      this.initChartOne();
/*
      this.initChartTwo();
*/
    },
    methods: {
      open2() {
        if (this.k1 > 0 && this.k2 > 0 && this.a1 > 0 && this.a2 > 0){
          this.$message.success("模型保存成功！");

        } else {
          this.$message.error("模型保存失败")
        }
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

      chengesave1(){
        this.singnalsave = 2
      },
      changesave2(){
        this.singnalsave = 1
      },

      changexiang11(){
        this.singnalxiang1 = 2
      },
      changexiang12(){
        this.singnalxiang1 = 1
      },
      changenihe11(){
        this.singnalnihe1 = 2
      },
      changenihe12(){
        this.singnalnihe1 = 1
      },
      changebianshi11(){
        this.singnalbianshi1 = 2
      },
      changebianshi12(){
        this.singnalbianshi1 = 1
      },
      changexiang21(){
        this.singnalxiang2 = 2
      },
      changexiang22(){
        this.singnalxiang2 = 1
      },
      changenihe21(){
        this.singnalnihe2 = 2
      },
      changenihe22(){
        this.singnalnihe2 = 1
      },
      changebianshi21(){
        this.singnalbianshi2 = 2
      },
      changebianshi22(){
        this.singnalbianshi2 = 1
      },

      showbiaodashi1(){
        this.singnalbiaodashi1 = 2;
        this.singnalbiaodashi2 = 1;
      },
      showbiaodashi2(){
        this.singnalbiaodashi2 = 2;
        this.singnalbiaodashi1 = 1;
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
      cleardata(){
        this.option.xAxis.data = [];
        this.option.series[0].data=[];
        this.option.series[1].data=[];
        this.option.series[2].data=[];
        this.option.series[3].data=[];
        this.singnalbiaodashi1 = 1;
        this.singnalbiaodashi2 = 1;
        this.initChartOne();
      },
      responseChart1(){
        if (this.radio == 1){
          this.option.xAxis.data = [0,2,7,12,17,22,27,32,37,42,47,52,57,62,67,72,77,82,87,92,97,102,107,112,117,122,127,132,137,142,147,152,157,162,167,172,177,182,187,192,197,202,207,212,217,222,217,222,227,232,237,242,247,252,257,262,267,272,277,282,287,292,297,302,];
          this.option.series[0].data=[94,94,98,102,105,108,110,112,113,116,118,122,123,126,126,128,130,131,134,135,136,137,138,139,140,141,142,143,144,144,145,145,146,146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147];
        } else if (this.radio == 2){
          this.option.xAxis.data = [0,1.5,6.5,11.5,16.5,21.5,26.5,31.5,36.5,41.5,46.5,51.5,56.5,61.5,66.5,71.5,76.5,81.5,86.5,91.5,96.5,101.5,106.5,111.5,116.5,121.5,126.5,131.5,136.5,141.5,146.5,151.5,156.5,161.5,166.5,171.5,176.5,181.5,186.5,191.5,196.5,201.5,];
          this.option.series[0].data=[222,222,226,232,236,240,244,247,252,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256];

        }
          // this.option.xAxis.data = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300];
        this.option.series[1].data=[];
        this.option.series[2].data=[];
        this.option.series[3].data=[];
        this.initChartOne();
      },
      niheChart1(){
        if (this.radio == 1) {
          this.option.series[0].data=[94,94,98,102,105,108,110,112,113,116,118,122,123,126,126,128,130,131,134,135,136,137,138,139,140,141,142,143,144,144,145,145,146,146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,];
          this.option.series[3].data=[0,0.0,3.0,6.0,9.0,12.0,15.0,17.0,19.0,22.0,24.0,26.0,28.0,30.0,32.0,33.5,35.0,36.6,38.0,39.4,40.7,42.0,43.0,44.0,45.0,46.0,47.0,47.8,48.6,49.2,50.4,50.8,51.3,51.6,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,52.0,];
          this.showbiaodashi1()
        }else if (this.radio == 2){
          this.option.series[0].data=[222,222,226,232,236,240,244,247,252,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256];
          this.option.series[3].data=[0,0,4,10,14,18,22,25,30,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34];
          this.showbiaodashi2();
        }

        this.option.series[1].data=[];
        this.option.series[2].data=[];

        this.initChartOne();

      },
      bianshiChart1(){
        if (this.radio == 1) {
          this.option.series[0].data = [];
          // this.option.series[1].data=[1,5,9,13,17,21,25,29,33,37,41,45,49,53,57];
          this.option.series[1].data = [0, 0, 4.8, 8.8, 12.800000000000002, 16.8, 20.8, 24.800000000000004, 28.800000000000004, 32.8, 36.8, 40.8, 44.8, 48.800000000000004, 52.8, 56.800000000000004, 60.8, 64.8, 68.8, 72.8, 76.8,];
          this.option.series[2].data = [52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,
            52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,];
          this.option.series[3].data = [0, 0.0, 3.0, 6.0, 9.0, 12.0, 15.0, 17.0, 19.0, 22.0, 24.0, 26.0, 28.0, 30.0, 32.0, 33.5, 35.0, 36.6, 38.0, 39.4, 40.7, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 47.8, 48.6, 49.2, 50.4, 50.8, 51.3, 51.6, 52.0, 52.0, 52.0,
            52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0, 52.0,];

        }else if (this.radio == 2){
          this.option.series[0].data=[];
          this.option.series[1].data=[0,0.8,7.8,14.8,21.799999999999997,28.8,35.8,42.79999999999999];
          this.option.series[2].data=[34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34];
          this.option.series[3].data=[0,0,4,10,14,18,22,25,30,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34];
        }
        this.initChartOne();
      },
      /*responseChart1(){
        this.option.xAxis.data = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100
          ,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138];
        this.option.series[0].data=[94,98,102,105,108,110,112,113,116,118,122,123,126,126,128,130,131,134,135,136,137,138,139,140,141,142,143,144,144,145,145,146,
          146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147];
        this.option.series[1].data=[];
        this.option.series[2].data=[];
        this.option.series[3].data=[];
        this.initChartOne();
      },
      niheChart1(){
        this.option.series[0].data=[94,98,102,105,108,110,112,113,116,118,122,123,126,126,128,130,131,134,135,136,137,138,139,140,141,142,143,144,144,145,145,146,146,147,147,147
          ,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,];
        this.option.series[1].data=[];
        this.option.series[2].data=[];
        this.option.series[3].data=[1,4,7,10,13,16,18,20,23,25,27,29,31,33,34.5,36,37.6,39,40.4,41.7,43,44,45,46,47,48,48.8,49.6,50.2,51.4,51.8,52.3,52.6,53,53,53,53,53,53,53,53,
          53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53];
        this.initChartOne();
        this.showbiaodashi1()
      },
      bianshiChart1(){
        this.option.series[0].data=[];
        this.option.series[1].data=[1,5,9,13,17,21,25,29,33,37,41,45,49,53,57];
        this.option.series[2].data=[53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,
          53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53];
        this.option.series[3].data=[1,4,7,10,13,16,18,20,23,25,27,29,31,33,34.5,36,37.6,39,40.4,41.7,43,44,45,46,47,48,48.8,49.6,50.2,51.4,51.8,52.3,52.6,53,53,53,53,53,53,53,53,53,
          53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53];
        this.initChartOne();
      },*/
      initChartOne() {
        var l_chart = echarts.init(this.$refs.chartOne);
        l_chart.setOption(this.option, true);
      },

      responseChart2(){
        this.option1.xAxis.data = [0,1.5,6.5,11.5,16.5,21.5,26.5,31.5,36.5,41.5,46.5,51.5,56.5,61.5,66.5,71.5,76.5,81.5,86.5,91.5,96.5,101.5,106.5,111.5,116.5,121.5,126.5,131.5,136.5,141.5,146.5,151.5,156.5,161.5,166.5,171.5,176.5,181.5,186.5,191.5,196.5,201.5,];
        this.option1.series[0].data=[222,222,226,232,236,240,244,247,252,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256];
        this.option1.series[1].data=[];
        this.option1.series[2].data=[];
        this.option1.series[3].data=[];
        this.initChartTwo();
      },
      niheChart2(){
        this.option1.series[0].data=[222,222,226,232,236,240,244,247,252,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256];
        this.option1.series[1].data=[];
        this.option1.series[2].data=[];
        this.option1.series[3].data=[0,0,4,10,14,18,22,25,30,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34];
        this.initChartTwo();
        this.showbiaodashi2();
      },
      bianshiChart2(){
        this.option1.series[0].data=[];
        this.option1.series[1].data=[0,0.8,7.8,14.8,21.799999999999997,28.8,35.8,42.79999999999999];
        this.option1.series[2].data=[34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34];
        this.option1.series[3].data=[0,0,4,10,14,18,22,25,30,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34];
        this.initChartTwo();
      },

      initChartTwo() {
        var l_chart = echarts.init(this.$refs.chartTwo);

        l_chart.setOption(this.option1, true);
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
</style>
