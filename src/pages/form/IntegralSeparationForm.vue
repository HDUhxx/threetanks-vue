<template>
  <v-layout>
    <v-flex style="width: 60%">
      <v-layout style="height: 60%">
        <!--<v-container>
          <v-card>
            <v-card-title><h2>单容水箱液位控制系统</h2></v-card-title>
            <v-card-text>
              <img style="display:block;margin:0 auto;height: 200px;width: 400px" src="../../assets/单容水箱液位控制系统.png">
            </v-card-text>
          </v-card>
        </v-container>-->
      </v-layout>
      <v-layout style="height: 30%">
        <v-container>
          <v-card>
            <v-card-title><h2>单容水箱液位控制框图</h2></v-card-title>
            <v-card-text>
              <img style="display:block;margin:0 auto;height: 200px;width: 500px" src="../../assets/单容水箱液位框图.png">
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
      <v-layout style="height: 30%">
        <v-container>
          <v-card>
            <v-card-title><h3>参数设置</h3></v-card-title>
            <v-card-text>
              <v-container>
                <v-card>
                  <v-card-text>
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
                      <v-flex>
                        R：
                        <el-input placeholder="R" v-model="R" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        采样时间T：
                        <el-input placeholder="T" v-model="T" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        ε：
                        <el-input placeholder="ε" v-model="yu" clearable></el-input>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-container>
              <v-layout>
                <v-flex>
                  <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="startLab">开始实验</v-btn>
                </v-flex>
                <v-flex>
                  <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="pauseLab">暂停实验</v-btn>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
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
      <v-layout style="height: 45%">
        <v-container>
          <v-card>
            <v-card-title><h2>系统响应曲线</h2></v-card-title>
            <v-card-text class="px2">
              <div ref="chartOne" style="width: 700px;height:400px"></div>
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
      name: "integral-separation-form",
      data() {
        return {
          k1: 5,
          a1: 2,
          R: 100,
          T: 0.1,
          kp: 10,
          ki: 1,
          kd: 1,
          modelId:"",
          yu: 1,
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
          this.$http({
            method : 'post',
            url: '/model/integralSeparationPID',
            data: {
              kp: this.kp,
              ki: this.ki,
              kd: this.kd,
              T: this.T,
              R: this.R,
              yu: this.yu,
              modelId: this.modelId,
            },
          }).then((resp) => {
            if(resp.data.status == 'success'){
              // 简单pid实验成功
              this.$message.success("积分分离pid实验成功！");
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showData(resp.data.data.result), 0);
              }, 1000);
            }else{
              this.$message.error('积分分离pid实验失败！');
            }
          }).catch(() => {
            this.$message.error('积分分离pid实验失败！');
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
