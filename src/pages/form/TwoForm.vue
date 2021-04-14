<template>
  <v-stepper :value="stepCopy">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="stepCopy > 1"><h3>实验选择</h3></v-stepper-step>
      <v-divider/>
      <v-stepper-step step="2" :complete="stepCopy > 2"><h3>实验具体选择与设置</h3></v-stepper-step>
      <v-divider/>
    </v-stepper-header>
    <v-divider/>
    <v-stepper-items>
      <!--实验选择-->
      <v-stepper-content step="1">
        <v-flex offset-xs1 xs10>
            <v-card>
            <v-card-title style="color: blue"><h3>无干扰控制实验</h3></v-card-title>
            <v-card-text>
              <v-layout column justify-center>
                <v-container>
                  <v-layout row>
                    <v-flex>
                      <v-btn @click="noDisturb" style="display:block;margin:0 auto;width: 200px" color="blue">无干扰控制实验</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-layout>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title style="color: blue"><h3>带扰动控制实验</h3></v-card-title>
            <v-layout column justify-center>
              <v-container>
                <v-layout row>
                  <v-flex>
                    <v-btn @click="disturbNext" style="display:block;margin:0 auto;width: 200px" color="blue">干扰实验</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-card>
        </v-flex>
      </v-stepper-content>
      <!--具体实验选择与设置,简单回路控制实验-->
      <v-stepper-content step="2">
        <v-form ref="basic2">
          <!--此处不能添加layout，否则不能显示下拉框-->
          <v-select label="实验选择" v-model="selectExp" :items="this.noDisturbItems" :rules="[v => !!v || '请选择实验']" required/>
          <v-layout>
            <v-flex>
              <v-card>
                <v-card-title><h3>参数设置</h3></v-card-title>
                <v-card-text>
                  <v-layout>
                  <v-flex>
                    <v-text-field v-model="kp" label="kp" :rules="karules" required/>
                    <!--一种解决不使能并且不处罚规则的办法-->
                    <v-text-field v-model="ki" label="ki" :rules="karules" required/>
                    <!--后面没用到的以后新增实验的时候再加-->
                    <v-text-field v-model="kd" label="kd" :rules="karules" required/>
                  </v-flex>
                  <v-flex v-if="selectExp == '串级控制实验'">
                    <v-text-field v-model="kp1" label="kp1" :rules="karules" required/>
                    <v-text-field v-model="ki1" label="ki1" :rules="karules" required/>
                    <v-text-field label="kd1" disabled="true"/>
                  </v-flex>
                </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field v-model="R" label="阶跃信号" :rules="karules" required/>
                    </v-flex>
                    <v-flex>
                      <v-text-field v-model="T" label="采样周期（s）" :rules="karules" required/>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-container>
            <v-card style="width: 100%;height: 250px">
              <v-card-title>数学框图</v-card-title>
              <img style="display:block;margin:0 auto" src="../../assets/简单水泵.jpg">
            </v-card>
          </v-container>
          <v-layout>
            <v-container>
              <v-layout>
                <v-flex style="width: 50%">
                  <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="lastStep">上一步</v-btn>
                </v-flex>
                <v-flex style="width: 50%">
                  <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="noDisturbSubmit">确定</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </v-form>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-form ref="basic3">
          <!--此处不能添加layout，否则不能显示下拉框-->
          <v-select label="实验选择" v-model="selectExp" :items="this.disturbItems" :rules="[v => !!v || '请选择实验']" required/>
          <v-layout>
            <v-flex>
              <v-card>
                <v-card-title><h3>参数设置</h3></v-card-title>
                <v-card-text>
                  <v-layout>
                    <v-flex>
                      <v-text-field v-model="kp" label="kp" :rules="karules" required/>
                      <!--一种解决不使能并且不处罚规则的办法-->
                      <v-text-field v-model="ki" label="ki" :rules="karules" required/>
                      <!--后面没用到的以后新增实验的时候再加-->
                      <v-text-field v-model="kd" label="kd" :rules="karules" required/>
                    </v-flex>
                    <v-flex v-if="selectExp == '有干扰串级控制实验'">
                      <v-text-field v-model="kp1" label="kp1" :rules="karules" required/>
                      <v-text-field v-model="ki1" label="ki1" :rules="karules" required/>
                      <v-text-field label="kd1" disabled="true"/>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field v-model="R" label="阶跃信号" :rules="karules" required/>
                    </v-flex>
                    <v-flex>
                      <v-text-field v-model="T" label="采样周期（s）" :rules="karules" required/>
                    </v-flex>
                  </v-layout>
                    <v-layout>
                    <v-flex style="width: 50%">
                      <v-radio-group v-model="signal" :rules="[v => !!v || '请选择']" required>
                        <v-radio label="阶跃扰动" value="1"/>
                        <v-radio label="正弦信号扰动" value="2"/>
                        <v-radio label="高斯白噪声" value="3"/>
                      </v-radio-group>
                    </v-flex>
                    <v-flex v-if="signal == 1" style="width: 50%">
                      <v-text-field v-model="disturbValue" label="阶跃扰动" :rules="karules" required/>
                    </v-flex>
                    <v-flex v-if="signal == 2" style="width: 50%">
                      <v-text-field v-model="disturbValueA" label="正弦扰动振幅" :rules="karules" required/>
                      <v-text-field v-model="disturbValueW" label="正弦扰动频率" :rules="karules" required/>
                      <v-text-field v-model="disturbValueF" label="正弦扰动频率" :rules="karules" required/>
                    </v-flex>
                    <v-flex v-if="signal == 3" style="width: 50%">
                      <v-text-field v-model="disturbValue" label="白噪声振幅" :rules="karules" required/>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <hr>
          <v-container>
            <v-card style="width: 100%;height: 250px">
              <v-card-title>数学框图</v-card-title>
              <img style="display:block;margin:0 auto" src="../../assets/简单水泵.jpg">
            </v-card>
          </v-container>
          <v-layout>
            <v-container>
              <v-layout>
                <v-flex style="width: 50%">
                  <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="lastStep">上一步</v-btn>
                </v-flex>
                <v-flex style="width: 50%">
                  <v-btn style="display:block;margin:0 auto;width: 200px" color="blue" @click="disturbSubmit">确定</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </v-form>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    name: "two-form",
    props:{
      step: {
        type: Number,
        default: 1,
      }
    },

    data() {
      return {
        //选择的实验
        selectExp:'',
        //第二页展示哪个页面的内容
        karules: [v => !!v && v>=0 ||'请输入大于等于0的数字'],
        noDisturbItems: ['简单pid控制实验','串级控制实验'],
        disturbItems: ['有干扰pid控制实验', '有干扰串级控制实验'],
        stepCopy: this.step,
        R:10,
        //外环pid参数
        kp: 100,
        ki: 10,
        kd: 10,
        //内环pi参数
        kp1: 0.041,
        ki1: 0.001,
        T:0.1,//采样周期
        signal:'1',
        disturbValue:1,
        disturbValueA:3,
        disturbValueW:2,
        disturbValueF:1,
      }
    },
    methods: {
      //简单回路实验
      noDisturb(){
        this.stepCopy = 2;
      },
      disturbNext(){
        this.stepCopy = 3;
      },
      //第二个页面的上一步方法
      lastStep() {
        this.stepCopy = 1;
      },
      noDisturbSubmit(){
        if (this.$refs.basic2.validate()) {
          if(this.selectExp == '简单pid控制实验'){
              this.$emit('noDisturbPID',this.kp,this.ki,this.kd,this.R,this.T);
              this.$emit("close");
          } else if (this.selectExp == '串级控制实验') {
              this.$emit('noDisturbChuanPID',this.kp,this.ki,this.kd,this.kp1,this.ki1,this.R,this.T);
              this.$emit("close");
          }
        }
      },
      disturbSubmit(){
        if (this.$refs.basic3.validate()) {
          if (this.selectExp == '有干扰pid控制实验') {
            if (this.signal == 2) {
              this.disturbValue = this.disturbValueA + '-' + this.disturbValueW + '-' + this.disturbValueF;
            }
            this.$emit('disturbPID', this.kp, this.ki, this.kd, this.R, this.T, this.signal, this.disturbValue);
            this.$emit("close");
          } else if (this.selectExp == '有干扰串级控制实验') {
            if (this.signal == 2) {
              this.disturbValue = this.disturbValueA + '-' + this.disturbValueW + '-' + this.disturbValueF;
            }
            this.$emit('disturbChuanPID', this.kp, this.ki, this.kd, this.kp1, this.ki1, this.R, this.T, this.signal, this.disturbValue);
            this.$emit("close");
          }
        }
      }
    }
  }

</script>

<style scoped>

</style>
