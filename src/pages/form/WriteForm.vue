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
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/write-form'">自主编写算法模式</v-btn>
          </v-container>
          <v-container style="height: 8%;">
            <v-btn style="display:block;margin:0 auto;width: 150px" color="blue" onclick="location='/#/form/local-form'">远程实验模式</v-btn>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 15%;top:10%;width:48%;height: 40%;background-color: #0d47a1">
        <v-card-title  style="background-color:#0d47a1 ; ">
          <h2>动态水箱gif</h2>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 15%;top:55%;width:48%;height: 40%;background-color: #0d47a1">
        <v-card-title><h2>算法编写</h2></v-card-title>
        <v-card-text>
          <v-container>
            <v-card>
              <quill-editor style="height: 120px"
                            v-model="javasource"
                            :options="editorOption"
                            @focus="onEditorFocus($event)"
                            @blur="onEditorBlur($event)"
                            @change="onEditorChange($event)">
              </quill-editor>
            </v-card>
          </v-container>
          <v-layout>
            <v-flex>
              <v-col cols="12" sm="6" md="3" >
                <v-text-field
                  label="R"
                  v-model="R"
                  placeholder="R"
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
              <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="startLab">开始实验</v-btn>
            </v-flex>
            <v-flex>
              <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="pauseLab">暂停实验</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:10%;width:35%;height: 40%;background-color: #0d47a1">
        <v-card-title style="background-color: #0d47a1"><h2>响应曲线</h2></v-card-title>
        <v-card-text class="px2" style="background-color: #0d47a1">
          <div ref="chartOne"  style="width: 600px;height:300px"></div>
        </v-card-text>
      </v-card>
      <v-card style="position: absolute;left: 66%;top:55%;width:35%;height: 40%;background-color: #0d47a1">
        <v-card-title><h2>模型参数</h2></v-card-title>
        <v-card-text>
          <v-layout>
            <v-flex>
              <img style="display:block;margin:0 auto;height: 50px;width: 100px" src="../../assets/一阶惯性环节1.png">
            </v-flex>
            <v-flex>
              <img style="display:block;margin:0 auto;height: 50px;width: 100px" src="../../assets/一阶惯性环节1.png">
            </v-flex>
          </v-layout>
        <!--  <v-container>
            <v-card>
              <v-card-text>-->
                <v-layout>
                  <v-flex>
                    <v-col cols="12" sm="6" md="3" >
                      <v-text-field
                        label="k1"
                        v-model="k1"
                        placeholder="k1"
                      ></v-text-field>
                    </v-col>
                  </v-flex>
                  <v-flex>
                    <v-col cols="12" sm="6" md="3" >
                      <v-text-field
                        label="k2"
                        v-model="k2"
                        placeholder="k2"
                      ></v-text-field>
                    </v-col>
                  </v-flex>
                  <v-flex>
                    <v-col cols="12" sm="6" md="3" >
                      <v-text-field
                        label="a1"
                        v-model="a1"
                        placeholder="a1"
                      ></v-text-field>
                    </v-col>
                  </v-flex>
                  <v-flex>
                    <v-col cols="12" sm="6" md="3" >
                      <v-text-field
                        label="a2"
                        v-model="a2"
                        placeholder="a2"
                      ></v-text-field>
                    </v-col>
                  </v-flex>
                </v-layout>
            <!--  </v-card-text>
            </v-card>
          </v-container>-->
          <v-layout>
            <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="modelSub">创建模型</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>

    </v-layout>
  </v-container>
</template>


<script>
  import echarts from 'echarts';
  import { quillEditor } from "vue-quill-editor"; //调用编辑器
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  export default {
    name:"write-form",
    components: {
      quillEditor
    },
    data() {
      return {
        k1: 1,
        k2: 1,
        a1: 2,
        a2: 1,
        R: 100,
        T: 0.1,
        javasource: ``,
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
              mark: {show: true},
              restore: {show: true},
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
        editorOption:{
          theme:'bubble'
          //theme:'snow'
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
        this.javasource = this.removeTAG(this.javasource);
        this.$http({
          method : 'post',
          url: '/model/compile',
          data: {
            T: this.T,
            R: this.R,
            modelId: this.modelId,
            javasource: this.javasource,
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
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
      removeTAG(str){
        return str.replace(/<[^>]+>/g, "");
      }
    }
  }
</script>

