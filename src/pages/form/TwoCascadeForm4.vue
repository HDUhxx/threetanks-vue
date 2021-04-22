<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/底框实验.png">

      <img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 85%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
      <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 85%;top: 0;" onclick="location='/#/form/ModelSelect'"/>

      <img v-if="singanlzhuye == 1" src="../../assets2/首页.png" v-on:mouseenter="imagechangezhuye1"  style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>
      <img v-if="singanlzhuye == 2" src="../../assets2/首页点击.png" v-on:mouseleave="imagechangezhuye2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/index/dashboard'"/>

      <img v-if="singnalhelp == 1" src="../../assets2/帮助.png" v-on:mouseenter="imagechangehelp1"  style="position: absolute;left: 95%;top: 0;" @click="helpclick"/>
      <img v-if="singnalhelp == 2" src="../../assets2/帮助点击.png" v-on:mouseleave="imagechangehelp2" style="position: absolute;left: 95%;top: 0;" @click="helpclick"/>

      <img   src="../../assets2/按钮系统建模.png" v-on:mouseleave="changetag22" style="position: absolute; left: 3%;top: 15%;" onclick="location='/#/form/DataModelForm4'"/>
      <img    src="../../assets2/按钮pid控制.png"                           style="position: absolute; left: 3%;top: 21%;" onclick="location='/#/form/easypid-form4'"/>
      <img   src="../../assets2/按钮纯滞后控制.png" v-on:mouseleave="changetag62" style="position: absolute; left: 3%;top: 35%;" onclick="location='/#/form/OneLateForm2'"/>
      <img  src="../../assets2/按钮串级控制.png" v-on:mouseleave="changetag42" style="position: absolute; left: 3%;top: 41%;" onclick="location='/#/form/one-cascade-form4'"/>
      <img  src="../../assets2/按钮前馈控制.png"  v-on:mouseenter="changetag72"  style="position: absolute; left: 3%;top: 47%;" onclick="location='/#/form/TwoPreForm2'"/>
      <img  src="../../assets2/按钮复杂控制点击.png" v-on:mouseleave="changetag52" style="position: absolute; left: 3%;top: 60%;" onclick="location='/#/form/two-cascade-form4'"/>
      <img   src="../../assets2/按钮算法设计.png" v-on:mouseleave="changetag12" style="position: absolute; left: 3%;top: 66%;" onclick="location='/#/form/write-form4'"/>

      <img  src="../../assets2/二阶有干扰水箱.png" style="position: absolute;left: 60%;top: 8%;"/>
      <img src="../../assets2/框图3.png" style="position: absolute;left: 14.5%;top:60%;"/>


      <v-flex style="position: absolute;left:69%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">K1:</h2>
          <el-input v-model="k1" placeholder="k1" label="k1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 76%;top:63%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">T1:</h2>
          <el-input v-model="a1" placeholder="a1" label="a1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 69%;top:70%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">K2:</h2>
          <el-input v-model="k2" placeholder="k2" label="k2" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 76%;top:70%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">T2:</h2>
          <el-input v-model="a2" placeholder="a2" label="a2" class="te"></el-input>
        </v-col>
      </v-flex>

      <img v-if="singnalchuang == 1" v-on:mouseenter="changechuang1" @click="modelSub" src="../../assets2/按钮创建模型.png" style="position: absolute;left: 89%;top:65%;"/>
      <img v-if="singnalchuang == 2" v-on:mouseleave="changechuang2" @click="modelSub" src="../../assets2/按钮创建模型点击.png" style="position: absolute;left:89%;top:65%;"/>

      <img v-if="singnalstart == 1" v-on:mouseenter="changestart1" @click="startLab" src="../../assets2/按钮开始实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalstart == 2" v-on:mouseleave="changestart2" @click="startLab" src="../../assets2/按钮开始实验点击.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalpause == 1" v-on:mouseenter="changepause1" @click="pauseLab" src="../../assets2/按钮暂停实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalpause == 2" v-on:mouseleave="changepause2" @click="pauseLab" src="../../assets2/按钮暂停实验点击.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalcontinue == 1" v-on:mouseenter="changecontinue1" @click="continueLab" src="../../assets2/按钮继续实验.png" style="position: absolute;left: 22%;top:50%"/>
      <img v-if="singnalcontinue == 2" v-on:mouseleave="changecontinue2" @click="continueLab" src="../../assets2/按钮继续实验点击.png" style="position: absolute;left:22%;top:50%"/>
      <img v-if="singnalstop == 1" v-on:mouseenter="changestop1" @click="stopLab" src="../../assets2/按钮停止实验.png" style="position: absolute;left: 45%;top:50%"/>
      <img v-if="singnalstop == 2" v-on:mouseleave="changestop2" @click="stopLab" src="../../assets2/按钮停止实验点击.png" style="position: absolute;left: 45%;top:50%"/>


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
                    v-model="kn"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="tn"
                    label="Tn"
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
                    <v-text-field placeholder="阶跃扰动值" label="阶跃扰动值" v-model="disturbValue" style="width: 120px;" clearable></v-text-field></v-flex>
                </v-flex>
                <v-flex v-if="signal == 2" style="position:relative;">
                  <!--<img src="../../assets2/参数框蓝底.png" style="width: 110px;height: 40px;position: absolute;top: 13%;left: 33%;"/>
                  <img src="../../assets2/参数框蓝底.png" style="width: 110px;height: 40px;position: absolute;top: 13%;left: 66%;"/>
                  <img src="../../assets2/参数框蓝底.png" style="width: 110px;height: 40px;position: absolute;top: 13%;"/>-->
                  <v-layout>
                    <v-flex><v-text-field style="width: 120px;" placeholder="正弦扰动振幅" label="正弦扰动振幅" v-model="disturbValueA" clearable/></v-flex>
                    <v-flex><v-text-field style="width: 120px;" placeholder="正弦扰动频率" label="正弦扰动频率" v-model="disturbValueW" clearable/></v-flex>
                    <v-flex><v-text-field style="width: 120px;" placeholder="正弦扰动相角" label="正弦扰动相角" v-model="disturbValueF" clearable/></v-flex>
                  </v-layout>
                </v-flex>
                <v-flex v-if="signal == 3" style="position:relative;">
                  <!--<img src="../../assets2/参数框蓝底.png" style="width: 120px;height: 40px;position: absolute;top: 13%;"/>-->
                  <v-text-field placeholder="白噪声振幅" label="白噪声振幅" v-model="disturbValue" style="width: 120px;" clearable></v-text-field>
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

      <v-flex style="position: absolute;left: 68%;top:78%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Kp:</h2>
          <el-input v-model="kp" placeholder="kp" label="kp" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:78%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Ki:</h2>
          <el-input v-model="ki" placeholder="ki" label="ki" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:78%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Kd:</h2>
          <el-input v-model="kd" placeholder="kd" label="kd" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 68%;top:88%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Kp1:</h2>
          <el-input v-model="kp1" placeholder="kp1" label="kp1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 75%;top:88%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">Ki1:</h2>
          <el-input v-model="ki1" placeholder="ki1" label="ki1" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 82%;top:88%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">R:</h2>
          <el-input v-model="R" placeholder="R" label="R" class="te"></el-input>
        </v-col>
      </v-flex>
      <v-flex style="position: absolute;left: 89%;top:88%;width: 120px">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">T:</h2>
          <el-input v-model="T" placeholder="T" label="T" class="te"></el-input>
        </v-col>
      </v-flex>

      <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>
      <img src="../../assets2/下载.png" style="position: absolute;left: 56.5%;top: 11.3%;"/>
      <div class="px2" ref="chartOne"  style="position: absolute;left: 18%;top:10%;width: 800px;height:400px"></div>
      <div>
        <el-slider
          style="position: absolute;left: 75.4%;top: 25%;height: 120px;width: 50px;"
          v-model="value"
          :show-tooltip="true"
          vertical
          max="200">
        </el-slider>
      </div>
      <v-flex style="position: absolute;left: 70%;top:25%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">液位/mm</h2>
          <el-input v-model="value" class="te" ></el-input>
        </v-col>
      </v-flex>

      <div>
        <el-slider
          style="position: absolute;left: 87.6%;top: 25%;height: 120px;width: 50px;"
          v-model="value1"
          :show-tooltip="true"
          vertical
          max="200">
        </el-slider>
      </div>
      <v-flex style="position: absolute;left: 82%;top:25%;width: 120px;">
        <v-col cols="12" sm="6" md="3" >
          <h2 style="color: white;font-size: 150%;">液位/mm</h2>
          <el-input v-model="value1" class="te" ></el-input>
        </v-col>
      </v-flex>

<!--      <v-btn @click="dialog2 = true" style="background: #FF8C00;z-index: 9" class="disturb1">请输入干扰1</v-btn>
      <v-btn @click="dialog1 = true" style="background: #FF8C00;z-index: 9" class="disturb2">请输入干扰2</v-btn>-->

      <img src="../../assets2/输入干扰N1-蓝.png" @click="dialog2 = true" style="position: absolute;left: 89%;top: 16%;"/>
      <img src="../../assets2/输入干扰N2-蓝.png" @click="dialog1 = true" style="position: absolute;left: 89%;top: 12%;"/>


      <span v-show="timesT>0" style="position:absolute;left: 64.3%;top: 50.9%;font-size:30px;line-height:30px; color:#4cb9fc"> ▃</span>
      <span v-show="timesT>0" style="position:absolute;left: 62.9%;top: 50.9%;font-size:34px;line-height:30px; color:#4cb9fc"> ▃</span>

      <span v-show="timesT>0" style="position:absolute;left:61.9%;top: 52.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:0px;">▊</span>
      <span v-show="timesT>0" style="position:absolute;left:62.2%;top: 52.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:0px;">▊</span>

      <span v-show="timesT>0" style="position:absolute;left:61.6%;top: 48.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>0" style="position:absolute;left:61.6%;top: 46%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>0" style="position:absolute;left:61.6%;top: 44%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:61.6%;top: 42%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:61.6%;top: 40%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:61.6%;top: 39%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>


      <span v-show="timesT>3" style="position:absolute;left:61.6%;top: 30%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>3" style="position:absolute;left:61.6%;top: 28%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>3" style="position:absolute;left:61.6%;top: 26%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>4" style="position:absolute;left:61.6%;top: 24%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>4" style="position:absolute;left:61.6%;top: 22%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>4" style="position:absolute;left:61.6%;top: 20%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:61.6%;top: 18%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:61.6%;top: 17%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:25px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:61.9%;top: 14%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:30px;">▊</span>
      <span v-show="timesT>5" style="position:absolute;left:62.2%;top: 14%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:17px;line-height:30px;">▊</span>

      <span v-show="timesT>5" style="position:absolute;left:63%;top: 11.9%;font-size:30px; color:#4cb9fc">▃</span>
      <span v-show="timesT>6" style="position:absolute;left:64.3%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃</span>
      <span v-show="timesT>6" style="position:absolute;left:66%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>6" style="position:absolute;left:69%;top: 11.9%;font-size:30px; color:#4cb9fc">▃</span>
      <span v-show="timesT>6" style="position:absolute;left:70.4%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃</span>

      <span v-show="timesT>7" style="position:absolute;left:72%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>7" style="position:absolute;left:74.7%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃</span>
      <span v-show="timesT>7" style="position:absolute;left:77%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃</span>
      <span v-show="timesT>1" style="position:absolute;left:78.5%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃</span>
      <span v-show="timesT>1" style="position:absolute;left:80.6%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃▃▃</span>
      <span v-show="timesT>0" style="position:absolute;left:85%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃</span>
      <span v-show="timesT>0" style="position:absolute;left:87.3%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>0" style="position:absolute;left:91%;top: 11.9%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>

      <!--水箱2干扰-->
      <span v-show="timesT>0" style="position:absolute;left:90%;top: 16%;font-size:30px; color:#4cb9fc">▃▃▃▃</span>
      <span v-show="timesT>1" style="position:absolute;left:88.4%;top: 18.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:30px;line-height:40px;">▊</span>


      <span v-show="timesT>7" style="position:absolute;left:76.4%;top: 14.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:30px;line-height:40px;">▊</span>
      <!--<span v-show="timesT>1" style="position:absolute;left:84.5%;top: 37.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:30px;line-height:40px;">▊</span>
      <span v-show="timesT>1" style="position:absolute;left:84.5%;top: 43.5%;color:#4cb9fc; display:block; margin:0; padding:0; text-indent:1em; font-size:30px;line-height:40px;">▊</span>-->
      <!---->
      <span v-show="timesT>7" style="position:absolute;left:78%;top: 35.8%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:78%;top: 36.9%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:78%;top: 41.5%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:78%;top: 42.5%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:90%;top: 35.8%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:90%;top: 36.9%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:90%;top: 41.5%;font-size:25px; color:#4cb9fc">▃</span>
      <span v-show="timesT>7" style="position:absolute;left:90%;top: 42.5%;font-size:25px; color:#4cb9fc">▃</span>
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
        name: "TwoCascadeForm4",
    data() {
      return {
        value:0,
        value1:0,
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
        tag7:1,

        singnalchuang:1,
        singnalstart:1,
        singnalpause:3,
        singnalcontinue:3,
        singnalstop:1,

        singnalqidong:1,


        flag:true,
        k1: 5,
        k2: 1,
        a1: 2,
        a2: 1,
        R: 100,
        T: 0.1,
        kp: 4,
        ki: 0.005,
        kd: 0.1,
        kp1: 0.5,
        ki1: 0.01,
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
        signal:"1",
        disturbValue:"3",
        disturbValueA: "1",
        disturbValueW:"1",
        disturbValueF:"1",
        disturbValue1:"1",
        timesT: 0,
        kn:1,
        tn:5,
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
              fontSize: 24
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
      changetag71(){
        this.tag7 = 2
      },
      changetag52(){
        this.tag5 = 1
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
        // if (this.start == true) {
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
        // }else {
        //   this.$message.error("系统未启动")
        // }

      },
      startLab(){
        clearInterval(this.clearTimeSet);
        this.timesT = 0;
        this.xData=[];
        this.option.xAxis.data = [];
        this.option.series[0].data=[];
        this.option.series[1].data=[];
        this.option.series[2].data=[];
        if (this.signal == 2) {
          this.disturbValue = this.disturbValueA + '-' + this.disturbValueW + '-' + this.disturbValueF;
        };
        this.$http({
          method : 'post',
          url: '/model/disturbPreChuanPID',
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
            // disturbValue1:this.disturbValue1,
            disturbValue1:1,
          },
        }).then((resp) => {
          if(resp.data.status == 'success'){
            // 无干扰pid实验成功
            this.$message.success("干扰pid实验成功！");
            //window.setInterval(downScroll,20)
            resp.data.data.result[0].unshift(0);
            resp.data.data.result[1].unshift(0);
            this.clearTimeSet=window.setInterval(() => {
              setTimeout(this.showData(resp.data.data.result), 0);
            }, 100);
          }else{
            // this.$message.error('干扰pid实验失败');
            this.$alert('控制参数设置不合理，系统不稳定！', '实验失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }
        })
          .catch(() => {
            // this.$message.error('干扰pid实验失败！');
            this.$alert('控制参数设置不合理，系统不稳定！', '实验失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          });
        this.singnalstart = 3;
        this.singnalpause = 2;
        this.singnalcontinue = 3;
        this.signalwater = 3;
        this.clearTimeSet=window.setInterval(() => {
          // this.showData(resp.data.data.result)
          setTimeout(this.o(), 0);
        }, 9000);
      },
      o(){
        // this.signalwater = 3;
      },
      showData(resp){
        if(this.flag){
          this.timesT++;
          this.initChartOne();

        }
        for (let i = 0; i < this.timesT; i++) {
          this.xData.push(''+i);
          this.setData[i] = this.R;
          this.value=resp[0][i];
          this.value1=resp[1][i];
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
        /*clearInterval(this.clearTimeSet);
        this.timesT = 0;
        this.xData=[];
        this.option.xAxis.data = [];
        this.option.series[0].data=[];
        this.option.series[1].data=[];
        this.option.series[2].data=[];*/
        this.signalwater = 1;
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
    font-size:20px !important;

  }
  .disturb1{
    position: absolute;
    left: 92%;
    top: 13%;
  }
  .disturb2{
    position: absolute;
    left: 92%;
    top: 17%;
  }

</style>
<style>
  .el-slider__runway {
    background-color: unset !important;
  }
  .el-slider__button {
    width: 0px !important;
    height: 0px !important;
    border: 2px solid #409EFF;
    background-color: #FFF;
    border-radius: 50%;
    -webkit-transition: .2s;
    transition: .2s;
    user-select: none;
  }
  .el-slider.is-vertical .el-slider__bar {
    width: 80px !important;
    height: auto;
    border-radius: 0 0 3px 3px;
  }

</style>
