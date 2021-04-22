<template>
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <v-flex>
        <v-card>
<!--
          <img v-if="singnalshe != 2 " style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景1.png">
-->
          <!--<img v-if="singnalshe == 2 " style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景2.png">-->
          <img v-if="true" style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景2.png">

<!--
          <img  src="../../assets2/标题框.png" style="position: absolute;left: 0;top: 0;"/>
-->
          <img v-if="singnalshe != 2 " src="../../assets2/测试底框（共用）.png" style="position:absolute;top: 25%;left: 24%;width: 54%;height: 52%;display:block">
          <img v-if="singnalyuan != 2 && singnalshe != 2 && singnalbu != 2 && singnalceshi != 2" src="../../assets2/系统认知首页.png" style="position:absolute;top: 33%;left: 30%;display:block;"/>

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



          <img v-if="singnalyuan == 1"  src="../../assets2/原理认知1.png" @click="imagechangeyuan1" v-on:mouseleave="imagechangeyuan3" style="position:absolute;top: 25%;left: 7%;display:block;" />
          <img v-if="singnalyuan == 2" src="../../assets2/原理认知点击1.png"  style="position:absolute;top: 25%;left: 7%;display:block;" />
          <img v-if="singnalyuan == 3" src="../../assets2/原理认知2.png" v-on:mouseenter="imagechangeyuan2" style="position:absolute;top: 25%;left: 7%;display:block;width: auto"/>

          <img v-if="singnalyuan == 2 && singnalyuan1 == 1" src="../../assets2/系统认知-系统建模.png" @click="changeyuan11" style="position: absolute;left: 32%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan1 == 2" src="../../assets2/系统认知-系统建模1.png"  style="position: absolute;left: 32%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan2 == 1" src="../../assets2/系统认知-通道认知.png" @click="changeyuan21" style="position: absolute;left: 42%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan2 == 2" src="../../assets2/系统认知-通道认知1.png"  style="position: absolute;left: 42%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan3 == 1" src="../../assets2/系统认知-控制算法.png" @click="changeyuan31" style="position: absolute;left: 52%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan3 == 2" src="../../assets2/系统认知-控制算法1.png"  style="position: absolute;left: 52%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan4 == 1" src="../../assets2/系统认知-通信原理.png" @click="changeyuan41" style="position: absolute;left: 62%;top: 80%;display:block"/>
          <img v-if="singnalyuan == 2 && singnalyuan4 == 2" src="../../assets2/系统认知-通信原理1.png"  style="position: absolute;left: 62%;top: 80%;display:block"/>




          <el-carousel :initial-index="0" trigger="click" :autoplay="false" arrow="always" v-if="singnalyuan == 2 && singnalyuan1 == 2" style="position: absolute;left: 23%;top: 27%;width: 55%;height: 550px;">
            <el-carousel-item
              style="width: max-content;height: max-content;"
              v-for="item in items1" :key="i1">
              <img :src="item.src"/>
            </el-carousel-item>
          </el-carousel>
          <el-carousel :initial-index="0" trigger="click" :autoplay="false" arrow="always" hide-delimiters v-if="singnalyuan == 2 && singnalyuan2 == 2" style="position: absolute;left: 23%;top: 27%;width: 55%;height: 550px;">
            <el-carousel-item
              style="width: max-content;height: max-content;"
              v-for="item in items2" :key="i1">
              <img :src="item.src"/>
            </el-carousel-item>
          </el-carousel>
          <el-carousel :initial-index="0" trigger="click" :autoplay="false" arrow="always" hide-delimiters v-if="singnalyuan == 2 && singnalyuan3 == 2" style="position: absolute;left: 23%;top: 27%;width: 55%;height: 550px;">
            <el-carousel-item
              style="width: max-content;height: max-content;"
              v-for="item in items3" :key="i1">
              <img :src="item.src"/>
            </el-carousel-item>
          </el-carousel>
          <el-carousel :initial-index="0" trigger="click" :autoplay="false" arrow="always" hide-delimiters v-if="singnalyuan == 2 && singnalyuan4 == 2" style="position: absolute;left: 23%;top: 27%;width: 55%;height: 550px;">
            <el-carousel-item
              style="width: max-content;height: max-content;"
              v-for="item in items4" :key="i1">
              <img :src="item.src"/>
            </el-carousel-item>
          </el-carousel>

          <img v-if="singnalyuan == 2 " src="../../assets2/箭头1.png"  style="position: absolute;left: 22.5%;top: 46%"/>
          <img v-if="singnalyuan == 2 " src="../../assets2/箭头2.png"  style="position: absolute;left: 76.5%;top: 46%"/>



          <img v-if="singnalshe == 1" src="../../assets2/设备认知1.png" @click="imagechangeshe1" v-on:mouseleave="imagechangeshe3" style="position:absolute;top: 55%;left: 7%;display:block;" />
          <img v-if="singnalshe == 2" src="../../assets2/设备认知点击1.png" style="position:absolute;top: 55%;left: 7%;display:block;" />
          <img v-if="singnalshe == 3" src="../../assets2/设备认知2.png" v-on:mouseenter="imagechangeshe2" style="position:absolute;top: 55%;left: 7%;display:block;width: auto" />


          <img v-if="singnalbu == 1" src="../../assets2/实验步骤1.png" @click= "imagechangebu1" v-on:mouseleave="imagechangebu3" style="position:absolute;top: 25%;left: 85%;display:block;" />
          <img v-if="singnalbu == 2" src="../../assets2/实验步骤点击1.png"  style="position:absolute;top: 25%;left: 85%;display:block;" />
          <img v-if="singnalbu == 3" src="../../assets2/实验步骤2.png" v-on:mouseenter="imagechangebu2" style="position:absolute;top: 25%;left: 85%;display:block;width: auto" />


          <img v-if="singnalceshi == 1" src="../../assets2/小测试1.png"  @click="imagechangeceshi1" v-on:mouseleave="imagechangeceshi3" style="position:absolute;top: 55%;left: 85%;display:block;" />
          <img v-if="singnalceshi == 2" src="../../assets2/小测试点击1.png"  style="position:absolute;top: 55%;left: 85%;display:block;" />
          <img v-if="singnalceshi == 3" src="../../assets2/小测试2.png" v-on:mouseenter="imagechangeceshi2" style="position:absolute;top: 55%;left: 85%;display:block;width: auto" />



          <img  v-if="singnalyuan == 2 && singnalyuan1 == 2" src="../../assets2/小标题系统建模.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalyuan == 2 && singnalyuan2 == 2" src="../../assets2/小标题通道认知.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalyuan == 2 && singnalyuan3 == 2" src="../../assets2/小标题控制算法.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalyuan == 2 && singnalyuan4 == 2" src="../../assets2/小标题通信原理.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalshe == 2 && singnalshe2 == 2" src="../../assets2/小标题三容水箱系统.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalshe == 2 && singnalshe3 == 2" src="../../assets2/小标题液位传感器.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalshe == 2 && singnalshe4 == 2" src="../../assets2/小标题流量传感器.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalshe == 2 && singnalshe5 == 2" src="../../assets2/小标题电磁阀.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalshe == 2 && singnalshe6 == 2" src="../../assets2/小标题电动阀.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalshe == 2 && singnalshe7 == 2" src="../../assets2/小标题水泵.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
<!--
          <img  v-if="singnalshe == 2" src="../../assets2/小标题设备认知.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
-->
          <img  v-if="singnalbu == 2" src="../../assets2/小标题实验步骤.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>
          <img  v-if="singnalceshi == 2" src="../../assets2/小标题小测试.png" style="position:absolute;top: 22%;left: 37%;display:block;"/>




          <img v-if="singnalshe == 2 && singnalshe2 == 2" src="../../assets2/实物二阶系统.png" style="position: absolute;left: 25%;top: 30%;"/>
          <img v-if="singnalshe == 2 && singnalshe3 == 2" src="../../assets2/实物液位传感器.png" style="position: absolute;left: 25%;top: 30%;"/>
          <img v-if="singnalshe == 2 && singnalshe4 == 2" src="../../assets2/实物流量传感器.png" style="position: absolute;left: 25%;top: 30%;"/>
          <img v-if="singnalshe == 2 && singnalshe5 == 2" src="../../assets2/实物电磁阀.png" style="position: absolute;left: 25%;top: 30%;"/>
          <img v-if="singnalshe == 2 && singnalshe6 == 2" src="../../assets2/实物电动阀.png" style="position: absolute;left: 25%;top: 30%;"/>
          <img v-if="singnalshe == 2 && singnalshe7 == 2" src="../../assets2/实物水泵.png" style="position: absolute;left: 25%;top: 30%;"/>


          <img v-if="singnalshe == 2 && singnalshe2 == 1" src="../../assets2/设备三容水箱.png" @click="changgeshe21" style="position: absolute;left: 30%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe2 == 2" src="../../assets2/设备三容水箱1.png"  style="position: absolute;left: 30%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe3 == 1" src="../../assets2/设备液位传感器.png" @click="changgeshe31" style="position: absolute;left: 37%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe3 == 2" src="../../assets2/设备液位传感器1.png"  style="position: absolute;left: 37%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe4 == 1" src="../../assets2/设备流量传感器.png" @click="changgeshe41" style="position: absolute;left: 44%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe4 == 2" src="../../assets2/设备流量传感器1.png"  style="position: absolute;left: 44%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe5 == 1" src="../../assets2/设备电磁阀.png" @click="changgeshe51" style="position: absolute;left: 51%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe5 == 2" src="../../assets2/设备电磁阀1.png"  style="position: absolute;left: 51%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe6 == 1" src="../../assets2/设备电动阀.png" @click="changgeshe61" style="position: absolute;left: 58%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe6 == 2" src="../../assets2/设备电动阀1.png"  style="position: absolute;left: 58%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe7 == 1" src="../../assets2/设备水泵.png" @click="changgeshe71" style="position: absolute;left: 65%;top: 80%;display:block"/>
          <img v-if="singnalshe == 2 && singnalshe7 == 2" src="../../assets2/设备水泵1.png"  style="position: absolute;left: 65%;top: 80%;display:block"/>



          <img v-if="singnalceshi == 2 && singnalshang == 1" src="../../assets2/按钮上一题.png" v-on:mouseenter="changeshang1" @click="shang" style="position: absolute;left: 30%;top: 65%;"/>
          <img v-if="singnalceshi == 2 && singnalshang == 2" src="../../assets2/按钮上一题1.png" v-on:mouseleave="changeshang2" @click="shang" style="position: absolute;left: 30%;top: 65%;"/>
          <img v-if="singnalceshi == 2 && singnalxia == 1" src="../../assets2/按钮下一题.png" v-on:mouseenter="changexia1" @click="xia" style="position: absolute;left: 45%;top: 65%;"/>
          <img v-if="singnalceshi == 2 && singnalxia == 2" src="../../assets2/按钮下一题1.png" v-on:mouseleave="changexia2" @click="xia" style="position: absolute;left: 45%;top: 65%;"/>
          <img v-if="singnalceshi == 2 && singnalscore == 1 && singnalQ ==20" src="../../assets2/按钮查看成绩.png" v-on:mouseenter="changescore1" @click="dialog = true" style="position: absolute;left: 60%;top: 65%;"/>
          <img v-if="singnalceshi == 2 && singnalscore == 2 && singnalQ == 20" src="../../assets2/按钮查看成绩1.png" v-on:mouseleave="changescore2" @click="dialog = true" style="position: absolute;left: 60%;top: 65%;"/>

          <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            z-index = 9
          >
            <v-card>
              <v-card-title class="headline"><h2>提交</h2></v-card-title>
              <v-card-text><h2>是否确认提交?</h2></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
                >
                  取消
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="showscore"
                >
                  确认
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <div v-if="singnalceshi == 2" style="position: absolute;left: 26.2%;top: 40%;width: 48.8%;height: 22%;background-color: #00acc1;">
          </div>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 1"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[1]"
             Q1
        >
          <template>
            <div><h1>01. 单水箱液位系统可以近似地建模为（）。</h1></div>
          </template>
          <v-radio
            value="A"
            label="A. 一阶惯性系统"
          >
          </v-radio>
          <v-radio
            value="B"
            label="B. 二阶惯性系统"
          >
          </v-radio>
          <v-radio
            value="C"
            label="C. 一阶比例系统"
          >
          </v-radio>
          <v-radio
            label="D. 一阶纯滞后系统"
            value="D"
          ></v-radio>
        </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 2"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[2]"
            Q2
          >
            <template>
              <div><h1>02. 一阶惯性系统中的时间常数T1越大，系统单位阶跃响应（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 越快"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 越慢"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 不受影响"
            >
            </v-radio>
            <v-radio
              label="D. 快慢无法确定"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 3"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[3]"
            Q3
          >
            <template>
              <div><h1>03. 模拟输入通道设计中不包括（）部分。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 信号调理电路"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 模/数转换器"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 传感器"
            >
            </v-radio>
            <v-radio
              label="D. 多路转换开关"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 4"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[4]"
            Q4
          >
            <template>
              <div><h1>04. 低电压信号调理环节中不包括（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 信号放大"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 信号隔离"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 信号补偿"
            >
            </v-radio>
            <v-radio
              label="D. 信号滤波"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 5"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[5]"
            Q5
          >
            <template>
              <div><h1>05. 采样保持器在模拟量输入通道中的作用不包括（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 能稳定地保持模拟信号以便能够完成模/数转换"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 在测量中可以同时对若干个模拟输入量进行采样"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 消除模/数转换器的输出瞬变，如限制输出电压的尖峰"
            >
            </v-radio>
            <v-radio
              label="D. 能提高模/数转换器信号采集的精度"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 6"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[6]"
            Q6
          >
            <template>
              <div><h1>06. 关于开关量的分类中，（）描述是不准确的。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 按类型分有电平式和触点式两种"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 按电源分有有源和无源两种"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 按电源分有有源和无源两种"
            >
            </v-radio>
            <v-radio
              label="D. 电平式是有源，就是高电平或低电平，因此采集过程需要提供电源"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 7"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[7]"
            Q7
          >
            <template>
              <div><h1>07. 下面（）部分通常不是开关量输入通道结构中的组成部分。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 输入调理"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 采样保持器"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 输入缓冲器"
            >
            </v-radio>
            <v-radio
              label="D. 数据接口电路"
              value="D"
            ></v-radio>
          </v-radio-group>

          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 8"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[8]"
            Q8
          >
            <template>
              <div><h1>08. 下面哪一个部分通常不是开关量输出通道结构中的组成部分（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 驱动电路"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 滤波器"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 输出保持器"
            >
            </v-radio>
            <v-radio
              label="D. 数据接口电路"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 9"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[9]"
            Q9
          >
            <template>
              <div><h1>9. PID算法中积分环节的主要作用是（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 增加控制响应速度"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 消除静态误差"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 减少超调量"
            >
            </v-radio>
            <v-radio
              label="D. 减少调节时间"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 10"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[10]"
            Q10
          >
            <template>
              <div><h1>10. PID算法中微分环节的主要作用是（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 增加控制响应速度"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 消除静态误差"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 减少超调量"
            >
            </v-radio>
            <v-radio
              label="D. 减少调节时间"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 11"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[11]"
            Q11
          >
            <template>
              <div><h1>11. 引进积分分离PID算法的目的如下（）说法比较准确。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 减少积分计算量，增加控制响应速度"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 即保持了积分作用，又可减少超调量"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 误差大的时候便于实现快速减少误差"
            >
            </v-radio>
            <v-radio
              label="D. 为了较少超调牺牲一点静态误差"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 12"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[12]"
            Q12
          >
            <template>
              <div><h1>12. 用试凑法整定PID参数时，参数整定的步骤是（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 先比例，后积分，再微分"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 先比例，后微分，再积分"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 先微分，后比例，再积分"
            >
            </v-radio>
            <v-radio
              label="D. 先积分，后比例，再微分"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 13"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[13]"
            Q13
          >
            <template>
              <div><h1>13. 串级控制系统是（）控制系统。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 单回路"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 多回路"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 多输入多输出"
            >
            </v-radio>
            <v-radio
              label="D. 开环"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 14"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[14]"
            Q14
          >
            <template>
              <div><h1>14. 设计串级控制系统时，应把主要的扰动包含在（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 副回路外"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 副回路中"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 主控制器中"
            >
            </v-radio>
            <v-radio
              label="D. 主对象中"
              value="D"
            ></v-radio>
          </v-radio-group>

          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 15"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[15]"
            Q15
          >
            <template>
              <div>
                <h1>15. 前馈控制是一种（）形式，在控制算法和参数选择合适的情况下，</h1>
                <h1>可以达到很高的精度。</h1>

              </div>

            </template>
            <v-radio
              value="A"
              label="A. 开环控制"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 闭环控制"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 正反馈控制"
            >
            </v-radio>
            <v-radio
              label="D. 负反馈控制"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 16"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[16]"
            Q16
          >
            <template>
              <div><h1>16. 采用前馈-反馈控制结构，能够发挥前馈控制对（）的补偿作用。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 设定值"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 偏差"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 控制量"
            >
            </v-radio>
            <v-radio
              label="D. 扰动量"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 17"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[17]"
            Q17
          >
            <template>
              <div><h1>17. Modbus协议是一种（）协议。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 串行通信"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 并行通信"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 串并行通信"
            >
            </v-radio>
            <v-radio
              label="D. 字符通信"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 18"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[18]"
            Q18
          >
            <template>
              <div><h1>18. Modbus协议的RTU模式中报文帧传输的第一个域是（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 功能码"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 设备地址"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. CRC校验码"
            >
            </v-radio>
            <v-radio
              label="D. 数据"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 19"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[19]"
            Q19
          >
            <template>
              <div><h1>19. Modbus协议的RTU模式中功能码03是（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 读取输入寄存器"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B. 读取线圈状态"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 读取输入状态"
            >
            </v-radio>
            <v-radio
              label="D. 读取保持寄存器"
              value="D"
            ></v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="singnalceshi == 2 && singnalQ == 20"
            style="position: absolute;left: 35%;top: 40%;"
            v-model="Q[20]"
            Q20
          >
            <template>
              <div><h1>20. Modbus协议的RTU模式中功能码06是（）。</h1></div>
            </template>
            <v-radio
              value="A"
              label="A. 读取线圈状态"
            >
            </v-radio>
            <v-radio
              value="B"
              label="B.  预置单寄存器"
            >
            </v-radio>
            <v-radio
              value="C"
              label="C. 强置单线圈 "
            >
            </v-radio>
            <v-radio
              label="D. 读取保持寄存器"
              value="D"
            ></v-radio>
          </v-radio-group>

          <iframe v-if="singnalbu == 2" :src="urlbu" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
          <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
        components:{
          pdf
        },
        name: "LearnForm02",
        data() {
        return {
          dialog:false,

          singnalQ :1,
          score:0,
          Q:[],
           A:[0,'A','B','C','C','D','C','B','B','B','A','B','A','B','B','A','D','A','B','D','B'],
          items1: [
            {
              src: '../../../static/系统建模1.png',
            },
            {
              src: '../../../static/系统建模2.png',
            },
            {
              src: '../../../static/系统建模3.png',
            },
          ],
          items2: [
            {
              src: '../../../static/通道认知1.png',
            },
            {
              src: '../../../static/通道认知2.png',
            },
            {
              src: '../../../static/通道认知3.png',
            },
            {
              src: '../../../static/通道认知4.png',
            },
            {
              src: '../../../static/通道认知5.png',
            },
            {
              src: '../../../static/通道认知6.png',
            },
            {
              src: '../../../static/通道认知7.png',
            },
            {
              src: '../../../static/通道认知8.png',
            },
            {
              src: '../../../static/通道认知9.png',
            },
            {
              src: '../../../static/通道认知10.png',
            },
            {
              src: '../../../static/通道认知11.png',
            },
            {
              src: '../../../static/通道认知12.png',
            },
          ],
          items3: [
            {
              src: '../../../static/控制算法1.png',
            },
            {
              src: '../../../static/控制算法2.png',
            },
            {
              src: '../../../static/控制算法3.png',
            },
            {
              src: '../../../static/控制算法4.png',
            },
            {
              src: '../../../static/控制算法5.png',
            },
            {
              src: '../../../static/控制算法6.png',
            },
            {
              src: '../../../static/控制算法7.png',
            },
          ],
          items4: [
            {
              src: '../../../static/通信原理1.png',
            },
            {
              src: '../../../static/通信原理2.png',
            },
            {
              src: '../../../static/通信原理3.png',
            },
            {
              src: '../../../static/通信原理4.png',
            },
            {
              src: '../../../static/通信原理5.png',
            },
          ],

          flaghelp:false,
          urlyuan:"../../../static/原理认知.pdf",
          urlbu:"../../../static/实验步骤.pdf",
          urlce:"../../../static/液位测量单元.pdf",

          url2:"../../../static/实验步骤.pdf",

          url3:"../../../static/一、二阶系统结构及设备图片.pdf",
          url4:"../../../static/一、二阶系统结构及设备图片2.pdf",
          url5:"../../../static/液位测量单元.pdf",
          url6:"../../../static/流量测量单元.pdf",
          url7:"../../../static/电磁阀.pdf",
          url8:"../../../static/电动阀.pdf",
          url9:"../../../static/水泵.pdf",

          singnalreturn:1,
          singanlzhuye:1,
          singnalhelp:1,

          singnalyuan:3,
          singnalshe:3,
          singnalbu:3,
          singnalceshi:3,

          singnalyuan1:2,
          singnalyuan2:1,
          singnalyuan3:1,
          singnalyuan4:1,

          singnalshe1:1,
          singnalshe2:2,
          singnalshe3:1,
          singnalshe4:1,
          singnalshe5:1,
          singnalshe6:1,
          singnalshe7:1,


          singnalshang:1,
          singnalxia:1,
          singnalscore:1,

          dialogVisible: true,
          numPages:1,
          main1:'实验原理',
          main2:'设备认知',
          main3:'实验步骤',
          main4:'小测试',
          show1:true,
          show2:false,
          show3:false,
          show4:false,
          }
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

      imagechangeyuan1(){
          this.singnalyuan = 2;
          this.singnalshe = 3;
          this.singnalbu = 3;
          this.singnalceshi = 3;
      },
      imagechangeyuan2(){
        this.singnalyuan = 1
      },
      imagechangeyuan3(){
        this.singnalyuan = 3
      },

      imagechangeshe1(){
        this.singnalyuan = 3;
          this.singnalshe = 2;
          this.singnalbu = 3;
          this.singnalceshi = 3;
      },
      imagechangeshe2(){
        this.singnalshe = 1
      },
      imagechangeshe3(){
        this.singnalshe = 3;
      },

      imagechangebu1(){
        this.singnalyuan = 3;
          this.singnalshe = 3;
          this.singnalbu = 2;
          this.singnalceshi = 3;
      },
      imagechangebu2(){
        this.singnalbu = 1
      },
      imagechangebu3(){
        this.singnalbu = 3;
      },

      imagechangeceshi1(){
        this.singnalyuan = 3;
          this.singnalshe = 3;
          this.singnalbu = 3;
          this.singnalceshi = 2
      },
      imagechangeceshi2(){
        this.singnalceshi = 1
      },
      imagechangeceshi3(){
        this.singnalceshi = 3
      },

      changeyuan11(){
        this.singnalyuan1 = 2;
        this.singnalyuan2 = 1;
        this.singnalyuan3 = 1;
        this.singnalyuan4 = 1;
      },
      changeyuan21(){
        this.singnalyuan1 = 1;
        this.singnalyuan2 = 2;
        this.singnalyuan3 = 1;
        this.singnalyuan4 = 1;
      },
      changeyuan31(){
        this.singnalyuan1 = 1;
        this.singnalyuan2 = 1;
        this.singnalyuan3 = 2;
        this.singnalyuan4 = 1;
      },
      changeyuan41(){
        this.singnalyuan1 = 1;
        this.singnalyuan2 = 1;
        this.singnalyuan3 = 1;
        this.singnalyuan4 = 2;
      },

      changgeshe11(){
        this.singnalshe1 = 2;
        this.singnalshe2 = 1;
        this.singnalshe3 = 1;
        this.singnalshe4 = 1;
        this.singnalshe5 = 1;
        this.singnalshe6 = 1;
        this.singnalshe7 = 1;
      },
      changgeshe12(){
        this.singnalshe1 = 1
      },
      changgeshe21(){
        this.singnalshe1 = 1;
        this.singnalshe2 = 2;
        this.singnalshe3 = 1;
        this.singnalshe4 = 1;
        this.singnalshe5 = 1;
        this.singnalshe6 = 1;
        this.singnalshe7 = 1;
      },
      changgeshe22(){
        this.singnalshe2 = 1
      },
      changgeshe31(){
        this.singnalshe1 = 1;
        this.singnalshe2 = 1;
        this.singnalshe3 = 2;
        this.singnalshe4 = 1;
        this.singnalshe5 = 1;
        this.singnalshe6 = 1;
        this.singnalshe7 = 1;
      },
      changgeshe32(){
        this.singnalshe3 = 1
      },
      changgeshe41(){
        this.singnalshe1 = 1;
        this.singnalshe2 = 1;
        this.singnalshe3 = 1;
        this.singnalshe4 = 2;
        this.singnalshe5 = 1;
        this.singnalshe6 = 1;
        this.singnalshe7 = 1;
      },
      changgeshe42(){
        this.singnalshe4 = 1
      },
      changgeshe51(){
        this.singnalshe1 = 1;
        this.singnalshe2 = 1;
        this.singnalshe3 = 1;
        this.singnalshe4 = 1;
        this.singnalshe5 = 2;
        this.singnalshe6 = 1;
        this.singnalshe7 = 1;
      },
      changgeshe52(){
        this.singnalshe5 = 1
      },
      changgeshe61(){
        this.singnalshe1 = 1;
        this.singnalshe2 = 1;
        this.singnalshe3 = 1;
        this.singnalshe4 = 1;
        this.singnalshe5 = 1;
        this.singnalshe6 = 2;
        this.singnalshe7 = 1;
      },
      changgeshe62(){
        this.singnalshe6 = 1
      },
      changgeshe71(){
        this.singnalshe1 = 1;
        this.singnalshe2 = 1;
        this.singnalshe3 = 1;
        this.singnalshe4 = 1;
        this.singnalshe5 = 1;
        this.singnalshe6 = 1;
        this.singnalshe7 = 2;
      },
      changgeshe72(){
        this.singnalshe7 = 1
      },

      changeshang1(){
        this.singnalshang = 2
      },
      changeshang2(){
        this.singnalshang = 1
      },
      changexia1(){
        this.singnalxia = 2
      },
      changexia2(){
        this.singnalxia = 1
      },
      changescore1(){
        this.singnalscore = 2
      },
      changescore2(){
        this.singnalscore = 1
      },
      shang(){
        if (this.singnalQ <= 1){
          this.singnalQ = 1;
        }else {
          this.singnalQ --;
        }
      },
      xia(){
        if (this.singnalQ >= 20){
          this.singnalQ = 20;
        }else {
          this.singnalQ ++;
        }
      },

      showscore(){
        this.dialog = false;
        for (let i = 1; i <= 20; i++) {
          if (this.Q[i] == this.A[i]){
            this.score = this.score + 5;
          }
        }

        if (this.score >= 60){
/*
          this.$message.success(this.score);
*/
          this.$alert("您的得分为"+this.score)
        } else{
/*
          this.$message.error(this.score)
*/
          this.$alert("您的得分为"+this.score)
          this.score = 0
        }
      }
    }
    }
</script>

<style>

  .te>>>input
  {
    color:white;
    background-color: unset;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }
  .el-header, .el-footer {
    background-color: #00b8d4;
    color: white;
    text-align: center;
    line-height: 60px;
    font-size:40px;

  }

  .el-aside {
    background-color: #0d47a1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-main {
    background-color: #0e2d5f;
    color: white;
    text-align: left;
    line-height: 30px;
    font-size:20px;

  }

  .el-carousel__arrow{
    top: 80%;
  }

 /* img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }*/
</style>

<style >

  .el-carousel__arrow--left {

    top: 80% !important;
    width: 60px;
    height: 60px;
    left: 0px;
  }
  .el-carousel__arrow--right {

    top: 80% !important;
    width: 60px;
    height: 60px;
    right: 0px;
  }


  .el-message-box__message {
    margin: 0;
    font-size: x-large;
  }
</style>
