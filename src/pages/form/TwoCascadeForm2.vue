<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets/辨识建模.jpg">
      <v-btn v-show="true" style="position:absolute;left: 80%;top: 2%;display:block;width: 20px;height: 60px;background-color: unset" onclick="location='/#/form/ModelSelect'"></v-btn>
      <v-btn v-show="true" style="position:absolute;left: 89%;top: 2%;display:block;width: 15px;height: 60px;background-color: unset" onclick="location='/#/index/dashboard'"></v-btn>
      <v-card style="position: absolute;left: 1%;top:10%;height: 85%;width:12%;background-color: #0d47a1">
        <v-card-title>
          <h2>实验类型选择</h2>
        </v-card-title>
        <v-card-text>
          <v-container style="height: 8%;">
            <img v-if="signalwater == 1" src="../../assets2/二阶系统--静态透明.png" style="position: absolute;left: 10%;top: 8%;"/>
            <img v-if="signalwater == 2" src="../../assets2/二阶系统--动画透明-2.gif" style="position: absolute;left: 10%;top: 8%;"/>
            <img v-if="signalwater == 3" src="../../assets2/二阶系统--循环透明-2.gif" style="position: absolute;left: 10%;top: 8%;"/>
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/DataModelForm2'">实验准备</v-btn>
          </v-container>
          <v-container style="height: 8%;">
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/DataModelForm2'">系统建模</v-btn>
          </v-container>
          <v-container style="height: 8%;">
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/easypid-form2'">PID控制规律研究</v-btn>
          </v-container>
          <!--<v-container style="height: 8%;">
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='http://localhost:9002/#/form/integral-separation-form'">积分分离式PID控制规律研究</v-btn>
          </v-container>-->
          <v-container style="height: 8%;">
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/one-cascade-form2'">一阶系统串级控制</v-btn>
          </v-container>
          <v-container style="height: 8%;">
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/two-cascade-form2'">二阶系统复杂控制</v-btn>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 15%;top:10%;width:48%;height: 50%;background-color: #0d47a1">
        <v-card-title  style="background-color:#0d47a1">
          <h2>动态水箱gif</h2>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 15%;top:65%;width:48%;height: 20%;background-color: #0d47a1">
        <v-card-title style="background-color: #0d47a1"><h2>单容水箱液位控制框图</h2></v-card-title>
        <v-card-text style="background-color: #0d47a1">
          <img style="display:block;margin:0 auto;height: 200px;width: 500px" src="../../assets/前馈串级控制结构图.png">
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:10%;width:35%;height: 18%;background-color: #0d47a1">
        <v-card-title style="background-color: #0d47a1"><h2>响应曲线</h2></v-card-title>
        <v-card-text class="px2" style="background-color: #0d47a1">
          <div ref="chartOne"  style="width: 600px;height:250px"></div>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:44%;width:35%;height: 15%;background-color: #0d47a1">
        <v-card-title style="background-color: #0d47a1;height: 30px"><h2>模型参数</h2></v-card-title>
        <v-card-text style="background-color:#0d47a1">
          <v-layout style="background-color:#0d47a1">
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="k1"
                  placeholder="k1"
                  :rules="k1"
                  color="orange"
                  label="k1"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="a1"
                  placeholder="a1"
                  :rules="a1"
                  color="purple"
                  label="a1"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="k2"
                  placeholder="k2"
                  :rules="k2"
                  color="orange"
                  label="k2"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="a2"
                  placeholder="a2"
                  :rules="a2"
                  color="purple"
                  label="a2"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>

          </v-layout>
          <v-layout style="background-color: #0d47a1">
            <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="modelSub">创建模型</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:62%;width:35%;height: 35%;background-color: #0d47a1">
        <v-card-title><h2>控制参数</h2></v-card-title>
        <v-card-text>
          <!--<v-container>
            <v-card>
              <v-card-text>

              </v-card-text>
            </v-card>
          </v-container>-->
          <v-layout>
            <v-flex>
              <el-select v-model="signal" placeholder="扰动选择">
                <el-option
                  v-for="item in disturbOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </v-flex>
            <v-flex v-if="signal == 1">
              <v-layout>
                <v-flex><el-input placeholder="阶跃扰动值" v-model="disturbValue" clearable></el-input></v-flex>
              </v-layout>
            </v-flex>
            <v-flex v-if="signal == 2">
              <v-layout>
                <v-flex><el-input placeholder="正弦扰动振幅" v-model="disturbValueA" clearable></el-input></v-flex>
                <v-flex><el-input placeholder="正弦扰动频率" v-model="disturbValueW" clearable></el-input></v-flex>
                <v-flex><el-input placeholder="正弦扰动相角" v-model="disturbValueF" clearable></el-input></v-flex>
              </v-layout>
            </v-flex>
            <v-flex v-if="signal == 3">
              <el-input placeholder="白噪声振幅" v-model="disturbValue" clearable></el-input>
            </v-flex>
          </v-layout>
          <v-layout style="height: 50px;">
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="kp"
                  placeholder="kp"
                  :rules="kp"
                  color="orange"
                  label="kp"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="ki"
                  placeholder="ki"
                  :rules="ki"
                  color="orange"
                  label="ki"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="kd"
                  placeholder="kd"
                  :rules="kd"
                  color="orange"
                  label="kd"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
          </v-layout>
          <v-layout style="height: 50px;">
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="R"
                  placeholder="R"
                  :rules="R"
                  color="orange"
                  label="R"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
              <!--kp1：
              <el-input placeholder="kp1" v-model="kp1" clearable></el-input>-->
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="ki"
                  placeholder="ki"
                  :rules="ki"
                  color="orange"
                  label="ki"
                  hint=""
                  min="1"
                  max="20"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-col cols="12" sm="6" md="3" >
                <v-text-field
                  label="kp1"
                  v-model="kp1"
                  placeholder="kp1"
                ></v-text-field>
              </v-col>
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6" md="3" >
                <v-text-field
                  label="T"
                  v-model="T"
                  placeholder="T"
                ></v-text-field>
              </v-col>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" @click="startLab">开始实验</v-btn>
            </v-flex>
            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" @click="pauseLab">暂停实验</v-btn>
            </v-flex>
            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" @click="continueLab">继续实验</v-btn>
            </v-flex>
            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" @click="stopLab">停止实验</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import echarts from 'echarts'
  export default {
        name: "TwoCascadeForm2",
    data() {
      return {
        k1: 5,
        k2: 1,
        a1: 2,
        a2: 1,
        R: 10,
        T: 0.1,
        kp: 100,
        ki: 10,
        kd: 1,
        kp1: 0.041,
        ki1: 0,
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
            color: ["#47D8BE", "#F9A589","#666666"],
            data: ['液位1', '液位2','设定值'],
            left: 'center',
            bottom: 'bottom'
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
            }
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
              smooth: true
            },
            {
              symbol: "none",
              name: '液位2',
              type: 'line',
              data: [0,0,0,0,0],
              lineStyle: {
                normal: {
                  width: 1,
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
                  width: 1,
                  color: {
                    type: 'linear',

                    colorStops: [{
                      offset: 0,
                      color: '#666666' // 0% 处的颜色
                    },
                      {
                        offset: 0.4,
                        color: '#666666' // 100% 处的颜色
                      }, {
                        offset: 1,
                        color: '#666666' // 100% 处的颜色
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
                  color: '##666666',
                  borderWidth: 10,
                  /*shadowColor: 'rgba(72,216,191, 0.3)',
                   shadowBlur: 100,*/
                  borderColor: "#666666"
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
      modelSub(){
        this.$http({
          method : 'post',
          url: '/model/create',
          data: {
            k1: this.k1,
            k2: this.k2,
            a1: this.a1,
            a2: this.a2,
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
      },
      startLab(){
        if (this.signal == 2) {
          this.disturbValue = this.disturbValueA + '-' + this.disturbValueW + '-' + this.disturbValueF;
        };
        this.$http({
          method : 'post',
          url: '/model/disturbChuanPID',
          data: {
            kp: this.kp,
            ki: this.ki,
            kd: this.kd,
            kp1: this.kp1,
            ki1: this.ki1,
            T: this.T,
            R: this.R,
            modelId: this.modelId,
            signal:this.signal,
            disturbValue:this.disturbValue,
          },
        }).then((resp) => {
          if(resp.data.status == 'success'){
            // 无干扰pid实验成功
            this.$message.success("干扰pid实验成功！");
            //window.setInterval(downScroll,20)
            this.clearTimeSet=window.setInterval(() => {
              setTimeout(this.showData(resp.data.data.result), 0);
            }, 1000);
          }else{
            this.$message.error('干扰pid实验失败！');
          }
        })
          .catch(() => {
            this.$message.error('干扰pid实验失败！');
          });
      },
      showData(resp){
        this.timesT++;
        for (let i = 0; i < this.timesT; i++) {
          this.xData.push(''+i);
          this.setData[i] = this.R;
        }
        this.option.xAxis.data = this.xData;
        this.initChartOne();
        this.option.series[0].data=resp[0];
        this.option.series[1].data=resp[1];
        this.option.series[2].data=this.setData;
        this.xData=[];
      },
      //停止实验
      stopLab(){
        clearInterval(this.clearTimeSet);
        this.timesT = 0;
        this.xData=[];

      },
      //暂停实验
      pauseLab(){
        this.flag = false;
        pause(this.clearTimeSet);
      },
      //继续实验
      continueLab(){
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

</style>
