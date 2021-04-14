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
        <v-card-title  style="background-color:#0d47a1 ; ">
          <h2>动态水箱gif</h2>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 15%;top:65%;width:48%;height: 20%;background-color: #0d47a1">
      <v-card-title style="background-color: #0d47a1"><h2>单容水箱液位控制框图</h2></v-card-title>
      <v-card-text style="background-color: #0d47a1">
        <img style="display:block;margin:0 auto;height: 200px;width: 500px" src="../../assets/单容水箱液位框图.png">
      </v-card-text>
    </v-card>
      <v-card style="position: absolute;left: 66%;top:10%;width:35%;height: 30%;background-color: #0d47a1">
        <v-card-title style="background-color: #0d47a1"><h2>响应曲线</h2></v-card-title>
        <v-card-text class="px2" style="background-color: #0d47a1">
          <div ref="chartOne"  style="width: 600px;height:300px"></div>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:48%;width:35%;height: 15%;background-color: #0d47a1">
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
          </v-layout>
          <v-layout style="background-color: #0d47a1">
            <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="modelSub">创建模型</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:65%;width:35%;height: 20%;background-color: #0d47a1">
        <v-card-title  style="background-color: #0d47a1"><h2>参数设置</h2></v-card-title>
        <v-card-text style="background-color: #0d47a1">
          <v-layout style="background-color: #0d47a1">
            <v-flex >

              <v-col cols="12" sm="6">
                <v-slider
                  v-model="kp"
                  placeholder="kp"
                  :rules="kp"
                  color="red"
                  label="kp"
                  hint=""
                  min="1"
                  max="50"
                  thumb-label
                ></v-slider>
              </v-col>
              <!-- kp：
               <el-input  style="background-color:transparent;border: none" placeholder="kp" v-model="kp" clearable></el-input>-->
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
              <!-- ki：
               <el-input placeholder="ki" v-model="ki" clearable></el-input>-->
            </v-flex>
            <v-flex>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="kd"
                  placeholder="kd"
                  :rules="kd"
                  color="purple"
                  label="kd"
                  hint=""
                  min="1"
                  max="50"
                  thumb-label
                ></v-slider>
              </v-col>
              <!-- kd：
               <el-input placeholder="kd" v-model="kd" clearable></el-input>-->
            </v-flex>
          </v-layout>
          <v-layout>
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
                  max="100"
                  thumb-label
                ></v-slider>
              </v-col>
              <!-- R：
               <el-input placeholder="R" v-model="R" clearable></el-input>-->
            </v-flex>
            <v-flex>

              <v-col cols="12" sm="6" md="3" >
                <v-text-field
                  label="T"
                  v-model="T"
                  placeholder="T"

                ></v-text-field>
              </v-col>
              <!--     T：
                   <el-input placeholder="T" v-model="T" clearable></el-input>-->
            </v-flex>
          </v-layout>
          <v-layout>

            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="showet">显示e(k)</v-btn>
            </v-flex>
            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="showut">显示u(k)</v-btn>
            </v-flex>

            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="startLab">开始实验</v-btn>
            </v-flex>

            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="showpid">pid分量</v-btn>

            </v-flex>
            <v-flex>

              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="pauseLab">暂停实验</v-btn>
              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="continueLab">继续实验</v-btn>
              <v-btn style="display:block;margin:0 auto;width: 100px" color="blue" @click="stopLab">停止实验</v-btn>
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
        name: "EasypidForm2",
      data() {
        return {
          message:'响应曲线',
          flag:true,
          k1: 5,
          a1: 2,
          R: 100,
          T: 0.1,
          kp: 10,
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
                mark: {show: true},
                restore: {show: true},
                saveAsImage: {show: true},

              }
            },
            legend: {
              color: ["#47D8BE", "#F9A589","#3A5FCD","#EE0000","#F9A589","#3A5FCD","#EE0000"],
              data: ['液位', '设定值',"误差曲线","模型输入量","p","i","d"],
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
              // min: -500,
              // max:1000,
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
                name: '模型输入量',
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
                // smooth: true
              },
            ]
          },
        }
      },
      mounted(){
        this.initChartOne();
      },
      methods: {
        // showdia(){
        //   this.showexp=!this.showexp;
        // },
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
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showData(resp.data.data.result), 0);
              }, 1000);
            }else{
              this.$message.error('无干扰pid实验失败！');
            }
          }).catch(() => {
            this.$message.error('无干扰pid实验失败！');
          });
        },
        showet(){
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
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showE(resp.data.data.result), 0);
              }, 1000);
            }else{
              this.$message.error('无干扰pid实验失败！');
            }
          }).catch(() => {
            this.$message.error('无干扰pid实验失败！');
          });
        },
        showut(){
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
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showU(resp.data.data.result), 0);
              }, 1000);
            }else{
              this.$message.error('无干扰pid实验失败！');
            }
          }).catch(() => {
            this.$message.error('无干扰pid实验失败！');
          });
        },
        showE(resp){
          if(this.flag){
            this.timesT++;
          }
          for (let i = 0; i < this.timesT; i++) {
            this.xData.push(''+i);
            // this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;
          this.initChartOne();
          this.option.series[2].data=resp[1];
          this.option.series[0].data=[];
          this.option.series[3].data=[];
          this.option.series[1].data=[];
          this.option.series[6].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];
          this.xData=[];
        },
        showU(resp){
          if(this.flag){
            this.timesT++;
          }
          for (let i = 0; i < this.timesT; i++) {
            this.xData.push(''+i);
            // this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;
          this.initChartOne();
          this.option.series[3].data=resp[2];
          this.option.series[1].data=[];
          this.option.series[2].data=[];
          this.option.series[0].data=[];
          this.option.series[6].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];
          this.xData=[];
        },
        showData(resp){
          if(this.flag){
            this.timesT++;
          }
          for (let i = 0; i < this.timesT; i++) {
            this.xData.push(''+i);
            this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;
          this.initChartOne();
          this.option.series[0].data=resp[0];
          this.option.series[1].data=this.setData;
          this.option.series[2].data=[];
          this.option.series[3].data=[];
          this.option.series[4].data=[];
          this.option.series[5].data=[];
          this.option.series[6].data=[];
          this.xData=[];
        },

        showpid(){
          this.$http({
            method : 'post',
            url: '/model/easyPID',
            data: {
              // flag: true,
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

              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showPID(resp.data.data.result), 0);
              }, 1000);

            }else{
              this.$message.error('无干扰pid实验失败！');
            }
          }).catch(() => {
            this.$message.error('无干扰pid实验失败！');
          });
        },
        showPID(resp){
          if(this.flag){
            this.timesT++;
          }
          for (let i = 0; i < this.timesT; i++) {
            this.xData.push('' + i);
            this.setData[i] = this.R;
          }
          this.option.xAxis.data = this.xData;
          this.initChartOne();
          this.option.series[4].data=resp[3];
          this.option.series[5].data=resp[4];
          this.option.series[6].data=resp[5];
          this.option.series[0].data=[];
          this.option.series[1].data=[];
          this.option.series[2].data=[];
          this.option.series[3].data=[];
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
