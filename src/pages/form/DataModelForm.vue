<template xmlns="http://www.w3.org/1999/html">
  <v-layout>


      <!--<img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets/辨识建模.jpg">-->


    <v-flex style="width: 28%">
      <v-layout style="height: 35%">
        <v-container>
          <v-card>
            <v-card-title><h2>双容液位简图</h2></v-card-title>
            <v-card-text>
              <img style="display:block;margin:0 auto;height: 200px;width: 200px" src="../../assets/doubleLevel.png">
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
      <v-layout style="height: 30%">
        <v-container>
          <v-card>
            <v-card-title><h2>系统参数</h2></v-card-title>
            <v-card-text>
              <el-table
                size="mini"
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="A1"
                  label="水箱1面积"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="R1"
                  label="水箱1液阻"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="A2"
                  label="水箱2面积"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="R2"
                  label="水箱2液阻"
                  width="100">
                </el-table-column>
              </el-table>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
      <v-layout style="height: 35%">
        <v-container>
          <v-card>
            <v-card-title><h2>系统参数</h2></v-card-title>
            <v-card-text>
              <v-layout>
                <v-flex>
                  <img style="display:block;margin:0 auto;height: 50px;width: 100px" src="../../assets/一阶惯性环节1.png">
                </v-flex>
                <v-flex>
                  <img style="display:block;margin:0 auto;height: 50px;width: 100px" src="../../assets/一阶惯性环节1.png">
                </v-flex>
              </v-layout>
              <v-container>
                <v-card>
                  <v-card-text>
                    <v-layout>
                      <v-flex>
                        k1：
                        <el-input placeholder="k1" v-model="k11" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        k2：
                        <el-input placeholder="k2" v-model="k21" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        a1：
                        <el-input placeholder="a1" v-model="a11" clearable></el-input>
                      </v-flex>
                      <v-flex>
                        a2：
                        <el-input placeholder="a2" v-model="a21" clearable></el-input>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
    </v-flex>
    <v-flex style="width: 71%">
      <v-layout style="height: 50%">
        <v-flex style="width: 50%">
          <v-container>
            <v-card>
              <v-card-title><h2>水箱1阶跃响应数据</h2></v-card-title>
              <v-card-text>
                <el-table
                  size="mini"
                  :data="tanksOneData"
                  stripe
                  :show-header="showH"
                  >
                  <el-table-column
                    prop="Names"
                    width="70">
                  </el-table-column>
                  <el-table-column
                    prop="N1"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N2"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N3"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N4"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N5"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N6"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N7"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N8"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N9"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N10"
                    width="45">
                  </el-table-column>
                </el-table>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
        <v-flex style="width: 50%">
          <v-container>
            <v-card>
              <v-card-title><h2>水箱2阶跃响应数据</h2></v-card-title>
              <v-card-text>
                <el-table
                  size="mini"
                  :data="tanksTwoData"
                  stripe
                  :show-header="showH"
                  >
                  <el-table-column
                    prop="Names"
                    width="70">
                  </el-table-column>
                  <el-table-column
                    prop="N1"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N2"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N3"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N4"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N5"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N6"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N7"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N8"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N9"
                    width="45">
                  </el-table-column>
                  <el-table-column
                    prop="N10"
                    width="45">
                  </el-table-column>
                </el-table>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout style="height: 50%">
        <v-flex style="width: 60%">
          <v-container>
            <v-card style="height: 400px;width: 650px">
              <v-card-text class="px2">
                <div ref="chartOne" style="width: 100%;height:350px"></div>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
        <v-flex style="width: 40%">
          <v-container>
            <v-card>
              <v-card-title><h2>系统参数</h2></v-card-title>
              <v-card-text>
                  <span style="text-align: center;display:block;"><h3>水箱1拟合表达式</h3></span>
                  <img style="display:block;margin:0 auto;height: 30px;width: 100%" src="../../assets/水箱1拟合表达式.png">
                <hr>
                  <span style="text-align: center;display:block;"><h3>水箱2拟合表达式</h3></span>
                  <img style="display:block;margin:0 auto;height: 30px;width: 100%" src="../../assets/水箱2拟合表达式.png">
                <hr>
                <v-container>
                  <v-card>
                    <v-card-text>
                      <v-layout>
                        <v-flex>
                          k1：
                          <el-input placeholder="k1" v-model="k12" clearable></el-input>
                        </v-flex>
                        <v-flex>
                          k2：
                          <el-input placeholder="k2" v-model="k22" clearable></el-input>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex>
                          a1：
                          <el-input placeholder="a1" v-model="a12" clearable></el-input>
                        </v-flex>
                        <v-flex>
                          a2：
                          <el-input placeholder="a2" v-model="a22" clearable></el-input>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-container>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>
</template>
<script>
  import echarts from 'echarts'
    export default {
      name: "data-model-form",
      data() {
        return {
          showH:false,
          k11: 0,
          k21: 0,
          a11: 0,
          a21: 0,
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

        }
      },
      mounted(){
        this.initChartOne();
      },
      methods: {
        initChartOne() {
          var l_chart = echarts.init(this.$refs.chartOne);
          var option = {
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
              data: ['水箱1', '水箱2'],
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
              data: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200],
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
                name: '水箱1',
                type: 'line',
                data: [94,98,102,105,108,110,112,113,116,118,122,123,124,126,128,130,131,133,134,135,136,137,138,139,140,140,141,142,142,143,143,144,144,144,145,145,146,146,147,147,147],
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
                name: '水箱2',
                type: 'line',
                data: [222,226,232,236,240,244,247,252,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256],
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
          };
          l_chart.setOption(option, true);
        }
      }
    }

</script>

<style scoped>

</style>
