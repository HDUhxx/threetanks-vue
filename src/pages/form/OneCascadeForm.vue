<template>
  <v-layout>
    <v-flex style="width: 60%">
      <v-layout style="height: 65%">
        <!--<v-container>-->
          <!--<v-card>-->
            <!--<v-card-title><h2>单容水箱液位控制系统</h2></v-card-title>-->
            <!--<v-card-text>-->
              <!--<img style="display:block;margin:0 auto;height: 190px;width: 500px" src="../../assets/水箱液位串级控制.png">-->
            <!--</v-card-text>-->
          <!--</v-card>-->
        <!--</v-container>-->
      </v-layout>
      <v-layout style="height: 30%">
        <v-container>
          <v-card>
            <v-card-title><h2>单容水箱液位控制框图</h2></v-card-title>
            <v-card-text>
              <img style="display:block;margin:0 auto;height: 190px;width: 700px" src="../../assets/串级控制液位框图.png">
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
      <!--<v-layout style="height: 30%">
        <v-container>
          <v-card>
            <v-card-title><h2>模型参数</h2></v-card-title>
            <v-card-text>
              <v-layout>
                <v-flex>
                  <img style="display:block;margin:0 auto;height: 50px;width: 100px" src="../../assets/一阶惯性环节1.png">
                  <v-card>
                    <v-card-text>
                      <v-layout>
                        <v-flex>
                          k1：
                          <el-input placeholder="k1" v-model="k1" clearable></el-input>
                        </v-flex>
                        <v-flex>
                          a1：
                          <el-input placeholder="a1" v-model="a1" clearable></el-input>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="modelSub">创建模型</v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>-->
    </v-flex>
    <v-flex style="width: 40%">
      <v-layout style="height: 25%">
        <v-container>
          <v-card>
            <v-card-title><h2>模型参数</h2></v-card-title>
            <v-card-text>
              <v-layout>
                <v-flex>
                  <img style="display:block;margin:0 auto;height: 50px;width: 100px" src="../../assets/一阶惯性环节1.png">
                  <v-card>
                    <v-card-text>
                      <v-layout>
                        <v-flex>
                          k1：
                          <el-input placeholder="k1" v-model="k1" clearable></el-input>
                        </v-flex>
                        <v-flex>
                          a1：
                          <el-input placeholder="a1" v-model="a1" clearable></el-input>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="modelSub">创建模型</v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
      <v-layout style="height: 35%">
        <v-container>
          <v-card>
            <v-card-title><h2>参数设置</h2></v-card-title>
            <v-card-text>
              <v-container>
                <v-card>
                  <v-card-text>
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
                    <v-layout>
                      <v-flex>
                        kp：
                        <el-input placeholder="kp" v-model="kp" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        ki：
                        <el-input placeholder="ki" v-model="ki" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        kd：
                        <el-input placeholder="kd" v-model="kd" clearable></el-input>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex style="width: 50%">
                        kp1：
                        <el-input placeholder="kp1" v-model="kp1" clearable></el-input>
                      </v-flex>
                      <v-flex style="width: 50%">
                        ki1：
                        <el-input placeholder="ki1" v-model="ki1" clearable></el-input>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex style="width: 50%">
                        R：
                        <el-input placeholder="R" v-model="R" clearable></el-input>
                      </v-flex >
                      <v-flex style="width: 50%">
                        采样时间T：
                        <el-input placeholder="T" v-model="T" clearable></el-input>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-container>
              <v-layout>
                <v-flex>
                  <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="startLab">开始实验</v-btn>
                </v-flex>
                <v-flex>
                  <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="pauseLab">暂停实验</v-btn>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
      <v-layout style="height: 40%">
        <v-container>
          <v-card>
            <v-card-title><h2>系统响应曲线</h2></v-card-title>
            <v-card-text class="px2">
              <div ref="chartOne" style="width: 500px;height:300px"></div>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import echarts from 'echarts'
    export default {
      name: "one-cascade-form",
      data() {
        return {
          k1: 5,
          a1: 2,
          R: 100,
          T: 0.1,
          kp: 10,
          ki: 1,
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
                mark: {show: true},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            legend: {
              color: ["#47D8BE", "#F9A589"],
              data: ['液位', '设定值'],
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
                name: '液位',
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
        },
        startLab(){
          if (this.signal == 2) {
            this.disturbValue = this.disturbValueA + '-' + this.disturbValueW + '-' + this.disturbValueF;
          };
          this.$http({
            method : 'post',
            url: '/model/oneCascade',
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
              // 一阶串级实验成功
              this.$message.success("串级控制实验成功！");
              //window.setInterval(downScroll,20)
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showData(resp.data.data.result), 0);
              }, 1000);
            }else{
              this.$message.error('串级控制实验失败！');
            }
          })
            .catch(() => {
              this.$message.error('串级控制实验失败！');
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
          this.option.series[1].data=this.setData;
          this.xData=[];
        },
        //暂停实验
        pauseLab(){
          clearInterval(this.clearTimeSet);
          this.timesT = 0;
          this.xData=[];
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
