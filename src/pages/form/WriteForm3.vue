<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >
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



      <!--<img  v-if="tag2 == 1" src="../../assets2/按钮系统建模0.png" v-on:mouseenter="changetag21" style="position: absolute; left: 1%;top: 9%;" onclick="location='/#/form/DataModelForm3'"/>-->
      <img   src="../../assets2/按钮系统建模.png" v-on:mouseleave="changetag22" style="position: absolute; left: 1%;top: 9%;" onclick="location='/#/form/DataModelForm3'"/>

      <!--<img  v-if="tag3 == 1" src="../../assets2/按钮pid控制规律0.png" v-on:mouseenter="changetag31" style="position: absolute; left: 1%;top: 16%;" onclick="location='/#/form/easypid-form3'"/>-->
      <img  src="../../assets2/按钮pid控制规律.png" v-on:mouseleave="changetag32" style="position: absolute; left: 1%;top: 16%;" onclick="location='/#/form/easypid-form3'"/>

      <!--<img  v-if="tag6 == 1" src="../../assets2/按钮一阶纯滞后0.png" v-on:mouseenter="changetag61" style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>-->
      <img  src="../../assets2/按钮一阶纯滞后.png" v-on:mouseleave="changetag62" style="position: absolute; left: 1%;top: 23%;" onclick="location='/#/form/OneLateForm1'"/>

      <!--<img  v-if="tag4 == 1" src="../../assets2/按钮一阶系统串级0.png" v-on:mouseenter="changetag41" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>-->
      <img  src="../../assets2/按钮一阶系统串级.png" v-on:mouseleave="changetag42" style="position: absolute; left: 1%;top: 30%;" onclick="location='/#/form/one-cascade-form3'"/>

      <!--<img  v-if="tag7 == 1"  src="../../assets2/按钮二阶前馈0.png" v-on:mouseenter="changetag71" style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>-->
      <img   src="../../assets2/按钮二阶前馈.png"  v-on:mouseenter="changetag72"  style="position: absolute; left: 1%;top: 37%;" onclick="location='/#/form/TwoPreForm1'"/>

      <!--<img  v-if="tag5 == 1" src="../../assets2/按钮二阶系统复杂控制0.png" v-on:mouseenter="changetag51" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>-->
      <img   src="../../assets2/按钮二阶系统复杂控制.png" v-on:mouseleave="changetag52" style="position: absolute; left: 1%;top: 44%;" onclick="location='/#/form/two-cascade-form3'"/>

      <img                   src="../../assets2/按钮编写算法1.png"                                     style="position: absolute; left: 1%;top: 51%;" onclick="location='/#/form/write-form3'"/>
    <!--<a :href ="'http://2.2.2.2/index.htm'" style="position: absolute; left: 1%;top: 28%;" >
    <img  v-if="tag2 == 1" src="../../assets2/按钮远程实验.png" v-on:mouseenter="changetag21" />
    <img  v-if="tag2 == 2" src="../../assets2/按钮远程实验1.png" v-on:mouseleave="changetag22"/>
    </a>-->
    <!--<img src="../../assets2/动态水箱1底框.png" style="position: absolute;left: 15%;top:9%;"/>
      <img src="../../assets2/水箱图二.png" style="position: absolute;left: 22%;top: 14%;"/>-->


      <img src="../../assets2/底框算法编写.png" style="position: absolute;left: 15%;top:9%;"/>


      <v-card style="position:absolute;left: 17%;top: 15%;height: 75%;width: 45%">
        <quill-editor
                      style="height: 100%;"
                      v-model="javasourcebefore"
                      :options="editorOption"
                      @focus="onEditorFocus($event)"
                      @blur="onEditorBlur($event)"
                      @change="onEditorChange($event)">
        </quill-editor>
      </v-card>

      <img src="../../assets2/底框算法响应曲线.png" style="position: absolute;left: 66%;top:9%;"/>

      <img v-if="singnalchuang == 1" v-on:mouseenter="changechuang1" @click="modelSub" src="../../assets2/按钮编译.png" style="position: absolute;left: 67%;top:47%;"/>
      <img v-if="singnalchuang == 2" v-on:mouseleave="changechuang2" @click="modelSub" src="../../assets2/按钮编译1.png" style="position: absolute;left:67%;top:47%;"/>

      <img v-if="singnalstart == 1" v-on:mouseenter="changestart1" @click="startLab" src="../../assets2/按钮开始实验.png" style="position: absolute;left: 77%;top:47%"/>
      <img v-if="singnalstart == 2" v-on:mouseleave="changestart2" @click="startLab" src="../../assets2/按钮开始实验1.png" style="position: absolute;left:77%;top:47%"/>
      <img v-if="singnalpause == 1" v-on:mouseenter="changepause1" @click="pauseLab" src="../../assets2/按钮暂停实验.png" style="position: absolute;left: 77%;top:47%"/>
      <img v-if="singnalpause == 2" v-on:mouseleave="changepause2" @click="pauseLab" src="../../assets2/按钮暂停实验1.png" style="position: absolute;left:77%;top:47%"/>
      <img v-if="singnalcontinue == 1" v-on:mouseenter="changecontinue1" @click="continueLab" src="../../assets2/按钮继续实验.png" style="position: absolute;left: 77%;top:47%"/>
      <img v-if="singnalcontinue == 2" v-on:mouseleave="changecontinue2" @click="continueLab" src="../../assets2/按钮继续实验1.png" style="position: absolute;left:77%;top:47%"/>
      <img v-if="singnalstop == 1" v-on:mouseenter="changestop1" @click="stopLab" src="../../assets2/按钮停止实验.png" style="position: absolute;left: 87%;top:47%"/>
      <img v-if="singnalstop == 2" v-on:mouseleave="changestop2" @click="stopLab" src="../../assets2/按钮停止实验1.png" style="position: absolute;left: 87%;top:47%"/>

      <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
      <img src="../../assets2/下载.png" style="position: absolute;left: 95.2%;top: 13.3%;"/>
      <div class="px2" ref="chartOne"  style="position: absolute;left: 67%;top:13%;width: 600px;height:320px"></div>
      <img src="../../assets2/底座.png" style="position: absolute;left: 66%;top: 80%;"/>
      <img src="../../assets2/算法编写底座上.png" style="position: absolute;left: 70%;top: 60%;"/>

    </v-layout>
  </v-container>
</template>

<script>
  import pdf from 'vue-pdf'
  import echarts from 'echarts';
  import { quillEditor } from "vue-quill-editor"; //调用编辑器
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  export default {
      name: "WriteForm3",
      components:{
        pdf
      },
      components: {
        quillEditor
      },
      data() {
        return {
          flaghelp:false,
          url2:"../../../static/实验步骤.pdf",
          singnalreturn:1,
          singanlzhuye:1,
          singnalhelp:1,

          tag1:2,
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
          flag:true,

          k1: 1,
          k2: 1,
          a1: 2,
          a2: 1,
          R: 100,
          T: 0.1,
          javasourcebefore: `<pre class="ql-syntax" spellcheck="false">/**
 * 语法规则符合 Java
 * 实验名称：积分分离pid控制实验
 * R:设定值
 * T:采样周期
 * k1：水箱的比例系数
 * a1：水箱的时间常数
 * u：控制量
 * kp：比例系数
 * ki：积分系数
 * kd：微分系数
 */
public class Solution {
    public double[][] excuteMethod() throws Exception {
        double R = 100;
        double T = 0.1;
        double k1 = 5;
        double a1 = 2;

        double E = 2;//积分分离实验的阈值
        double kp = 35;
        double ki = 6;
        double kd = 0.1;
        int rangeT = 2000;
        double[][] result = new double[2][rangeT];//返回的结果
        double[] y0 = new double[rangeT];
        double[] y1 = new double[rangeT];

        double[] e1 = new double[rangeT];
        double[] e2 = new double[rangeT];
        double[] u1 = new double[rangeT];
        double[] u2 = new double[rangeT];
        e1[0] = R;
        e2[0] = R;
        if(Math.abs(e1[0]) &lt; E){
            u1[0] = kp * (e1[0]) + ki * e1[0] + kd * (e1[0]);
        }else {
            u1[0] = kp * (e1[0]) + kd * (e1[0]);
        }
        u2[0] = kp * (e2[0]) + ki * e2[0] + kd * (e2[0]);
        y0[0] = (k1 * T * T * u1[0]) / (1 + a1 * T);
        y1[0] = (k1 * T * T * u2[0]) / (1 + a1 * T);

        e1[1] = R - y0[0];
        e2[1] = R - y1[0];
        if(Math.abs(e1[1]) &lt; E){
            u1[1] = u1[0] + kp * (e1[1] - e1[0]) + ki * e1[1] + kd * (e1[1] - 2 * e1[0]);
        }else {
            u1[1] = u1[0] + kp * (e1[1] - e1[0]) + kd * (e1[1] - 2 * e1[0]);
        }
        u2[1] = u2[0] + kp * (e2[1] - e2[0]) + ki * e2[1] + kd * (e2[1] - 2 * e2[0]);
        y0[1] = ((2 + a1 * T) * y0[0] + k1 * T * T * (u1[1] - u1[0])) / (1 + a1 * T);
        y1[1] = ((2 + a1 * T) * y1[0] + k1 * T * T * (u2[1] - u2[0])) / (1 + a1 * T);

        for (int k = 2; k != rangeT; k++)
        {
            e1[k] = R - y0[k - 1];
            e2[k] = R - y1[k - 1];
            if(Math.abs(e1[k]) &lt; E){
                u1[k] = u1[k - 1] + kp * (e1[k] - e1[k - 1]) + ki * e1[k] + kd * (e1[k] - 2 * e1[k - 1] + e1[k - 2]);
            }else {
                u1[k] = u1[k - 1] + kp * (e1[k] - e1[k - 1]) + kd * (e1[k] - 2 * e1[k - 1] + e1[k - 2]);
            }
            u2[k] = u2[k - 1] + kp * (e2[k] - e2[k - 1]) + ki * e2[k] + kd * (e2[k] - 2 * e2[k - 1] + e2[k - 2]);
            y0[k] = ((2 + a1 * T) * y0[k - 1] - y0[k - 2] + k1 * T * T * (u1[k] - u1[k - 1])) / (1 + a1 * T);
            y1[k] = ((2 + a1 * T) * y1[k - 1] - y1[k - 2] + k1 * T * T * (u2[k] - u2[k - 1])) / (1 + a1 * T);
        }

        result[0] = y0;//积分分离的曲线 ，绿色曲线
        result[1] = y1;//基本pid的曲线 ， 黄色曲线
        return result;
    }
}
</pre><p><br></p>`,
          javasource:'',
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
              data: ['液位1', '液位2','设定值'],
              left: 'center',
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
                name: '液位2',
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
                        color: '#DC143C' // 0% 处的颜色
                      },
                        {
                          offset: 0.4,
                          color: '#DC143C' // 100% 处的颜色
                        }, {
                          offset: 1,
                          color: '#DC143C' // 100% 处的颜色
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
                    borderColor: "#DC143C"
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


        modelSub(){
          this.javasource = this.removeTAG(this.javasourcebefore);
          this.$http({
            method : 'post',
            url: '/model/testCompile',
            data: {
              javasource: this.javasource+' '
            },
          }).then((resp) => {
            if(resp.data.status == 'success'){
              // 新建模型成功
              if(resp.data.data=='success'){
                this.$message.success("编译成功");
              }else {
                this.$message.error("编译失败");
              }
            }else{
              this.$message.error('编译失败');
            }
          })
            .catch(() => {
              this.$message.error('编译失败');
            });
        },
        startLab(){
          this.javasource = this.removeTAG(this.javasourcebefore);
          this.$http({
            method : 'post',
            url: '/model/compile',
            data: {
              javasource: this.javasource,
            },
          }).then((resp) => {
            if(resp.data.status == 'success'){
              // 无干扰pid实验成功
              this.$message.success("实验成功！");
              //window.setInterval(downScroll,20)
              this.clearTimeSet=window.setInterval(() => {
                setTimeout(this.showData(resp.data.data.result), 0);
              }, 500);
            }else{
              this.$message.error('实验失败！');
            }
          })
            .catch(() => {
              this.$message.error('实验失败！');
            });
          this.singnalstart = 3;
          this.singnalpause = 1;
          this.singnalcontinue = 3;
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
          this.option.series[0].data=resp[0];
          this.option.series[1].data=resp[1];
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
          this.singnalcontinue = 1;
          this.flag = false;
          pause(this.clearTimeSet);
        },
        //继续实验
        continueLab(){
          this.singnalstart = 3;
          this.singnalpause = 1;
          this.singnalcontinue = 3;
          this.flag = true;
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

<style  scoped>

  .te>>>input
  {
    color:white;
    background-color: unset;
  }
</style>
