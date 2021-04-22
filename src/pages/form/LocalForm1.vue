<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <v-container fluid grid-list-md >
    <v-layout row wrap >

      <img style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../../assets2/背景2.png">
      <img v-if="singnalreturn == 1" src="../../assets2/返回.png" v-on:mouseenter="imagechangereturn1" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
      <img v-if="singnalreturn == 2" src="../../assets2/返回点击.png" v-on:mouseleave="imagechangereturn2" style="position: absolute;left: 90%;top: 0;" onclick="location='/#/form/ModelSelect'"/>
      <img v-if="singanlzhuye == 1" src="../../assets2/首页.png" v-on:mouseenter="imagechangezhuye1"  style="position: absolute;left: 95%;top: 0;" onclick="location='/#/index/dashboard'"/>
      <img v-if="singanlzhuye == 2" src="../../assets2/首页点击.png" v-on:mouseleave="imagechangezhuye2" style="position: absolute;left: 95%;top: 0;" onclick="location='/#/index/dashboard'"/>

      <img v-if="singnalhelp == 1" src="../../assets2/帮助.png" v-on:mouseenter="imagechangehelp1"  style="position: absolute;left: 85%;top: 0;" @click="helpclick"/>
      <img v-if="singnalhelp == 2" src="../../assets2/帮助点击.png" v-on:mouseleave="imagechangehelp2" style="position: absolute;left: 85%;top: 0;" @click="helpclick"/>

      <!--    <img  v-if="tag1 == 1" src="../../assets2/按钮编写算法.png" v-on:mouseenter="changetag11" style="position: absolute; left: 1%;top: 8%;" onclick="location='/#/form/write-form3'"/>
          <img  v-if="tag1 == 2" src="../../assets2/按钮编写算法1.png"  v-on:mouseleave="changetag12" style="position: absolute; left: 1%;top: 8%;" onclick="location='/#/form/write-form3'"/>
          <img  v-if="tag2 == 1" src="../../assets2/按钮远程实验.png" v-on:mouseenter="changetag21" style="position: absolute; left: 1%;top: 18%;" onclick="location='/#/form/local-form1'"/>
          <img  v-if="tag2 == 2" src="../../assets2/按钮远程实验1.png"  style="position: absolute; left: 1%;top: 18%;" onclick="location='/#/form/local-form1'"/>-->

      <iframe v-if="flaghelp == true" :src="url2" frameborder="0" style="position:absolute;width: 50%; height:43%;left:25%;top: 30%"></iframe>

      <div>
        <iframe src="http://nat.gzn0927.top/vnc.html" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:10%;left:7%;right:0px;bottom:100px;"></iframe>
      </div>

<!--      <div class="crumbs" style="position: absolute;left: 25%;top: 18%;">
        <v-card style="background-color: 	#E6E6FA">
          <v-card-title align="center"><span><h2>虚实结合的计算机控制虚拟仿真实验</h2></span></v-card-title>
          <v-card-text align="left">
            <span><h3>1.按住win+r,弹出控制台，输入然后在运行中输入mstsc，确定，弹出远程桌面连接窗口。 </h3></span><br/>
            <span><h3>2.	输入计算机的ip与端口号 60.12.8.188:13389。</h3></span><br/>
            <span><h3>3.	要求填入登录凭证时，用户名输入rzp,密码输入86919133。</h3></span><br/>
            <span><h3>4.	显示无法验证远程计算机的身份时，选择是。</h3> </span><br/>
            <span><h3>5.	登入进去以后，双击打开桌面上的计算机控制实验软件。 </h3></span><br/>
            <span><h3>6.	用户名，密码，设备类型默认即可，点击登录。</h3></span><br/>
            <span><h3>7.	等待片刻，弹出实验软件界面，点击新建按钮。</h3></span><br/>
            <span><h3>8.	实验可以选择一阶串级液位控制实验、二阶串级液位控制实验。</h3> </span><br/>
            <span><h3>9.	以一阶串级液位控制实验为例，干扰选择无干扰，点击下一步。</h3></span><br/>
            <span><h3>10.	水箱一液位填入100，开度填入45，点击确定。</h3></span><br/>
            <span><h3>11.	弹出实验说明，选择已完成以上操作，点击确定。</h3></span><br/>
            <span><h3>12.	软件左下角可以修改主副回路的pid参数的值，建议把副回路的kp设为100，ki设为20（也可根据实验结果来修改具体的参数值）。</h3> </span><br/>
            <span><h3>13.	点击左上角的开始实验按钮，实验开始。</h3></span><br/>
            <span><h3>14.	实验过程中，可以打开上方的视频监控按钮，可以观察到实体水箱的液位变化情况。</h3> </span><br/>
            <span><h3>15.	结束实验时，先点击暂停按钮，等待1分钟左右，点击停止按钮，停止实验。</h3></span><br/>
            <span><h3>16.	停止实验结束后可以再次点击新建实验，选择实验进行实验。</h3></span><br/>
&lt;!&ndash;
            <a :href ="'60.12.8.188:13389'" ><span>本地实验</span></a>
&ndash;&gt;
          </v-card-text>
        </v-card>
      </div>-->
      <!--<el-button style="position: absolute;left: 40%;top: 40%;">
        <a :href ="'http://192.168.130.41:9000/vnc.html'" >
          <span>跳转到本地实验</span>
        </a>
      </el-button>-->


      <!--<div class="crumbs1" style="position: absolute;left: 40%;top: 40%;width: 300px;height: 100px">
        <v-card style="background-color: white">
          &lt;!&ndash;<v-card-title><h3 style="font-size: 150%;">本地实验地址</h3></v-card-title>&ndash;&gt;
          <v-card-text align="center">
            <a :href ="'http://192.168.130.41:9000/vnc.html'" ><span style="color: blue">跳转到本地实验</span></a>
          </v-card-text>
        </v-card>
      </div>-->


      <!--<div class="page-home" ref="canvas">
        <canvas id="noVNC_canvas" width="800" height="600">
          Canvas not supported.
        </canvas>
      </div>-->
   </v-layout>
  </v-container>
</template>

<script>

  import pdf from 'vue-pdf'

  // import WebUtil from '../../noVNC/app/webutil.js'
  //
  // import Base64 from '../../noVNC/core/base64.js'
  // import Websock from '../../noVNC/core/websock.js'
  // import '../../noVNC/core/des.js'
  // import '../../noVNC/core/input/keysymdef.js'
  // import '../../noVNC/core/input/xtscancodes.js'
  // import '../../noVNC/core/input/util.js'
  // import {Keyboard, Mouse} from '../../noVNC/core/input/devices.js'
  // import Display from '../../noVNC/core/display.js'
  // import '../../noVNC/core/inflator.js'
  // import RFB from '../../noVNC/core/rfb.js'
  // import '../../noVNC/core/input/keysym.js'
  export default {
        name: "local-form1",
      components:{
        pdf,

      },
      data(){
          return{
            flaghelp:false,
            url2:"../../../static/实验步骤.pdf",
            singnalreturn:1,
            singanlzhuye:1,
            singnalhelp:1,
          }
      },
      /*mounted(){
        this.connectVNC();
      },*/
    mounted(){
      /**
       * iframe-宽高自适应显示
       */
      function changeMobsfIframe(){
        const mobsf = document.getElementById('mobsf');
        const deviceWidth = document.body.clientWidth;
        const deviceHeight = document.body.clientHeight;
        mobsf.style.width = (Number(deviceWidth)-240) + 'px'; //数字是页面布局宽度差值
        mobsf.style.height = (Number(deviceHeight)-64) + 'px'; //数字是页面布局高度差
      }

      changeMobsfIframe()

      window.onresize = function(){
        changeMobsfIframe()
      }
    },
      methods:{
        // 远程桌面连接成功后的回调函数
        /*_onCompleteHandler (rfb, fbu) {
          // 清除 onComplete 的回调。
          rfb.set_onFBUComplete(function () {
          });

          var oDisplay = rfb.get_display(),
            nWidth = oDisplay.get_width(),
            nHeight = oDisplay.get_height(),

            oView = oDisplay.get_target(),
            nViewWidth = oView.clientWidth,
            nViewHeight = oView.clientHeight
          ;

          // 设置当前与实际的比例。
          oDisplay.setScale(nWidth / nViewWidth, nHeight / nViewHeight);

        },*/
        /*connectVNC () {
          var
            DEFAULT_HOST = '',
            DEFAULT_PORT = '',
            DEFAULT_PASSWORD = "",
            DEFAULT_PATH = "websockify"
          ;
          var cRfb = null;
          var oTarget = document.getElementById("noVNC_canvas");

          let that = this

          WebUtil.init_logging(WebUtil.getConfigVar("logging", "warn"));

          var sHost = DEFAULT_HOST,
            nPort = DEFAULT_PORT,
            sPassword = DEFAULT_PASSWORD,
            sPath = DEFAULT_PATH
          ;

          cRfb = new RFB({
            "target": oTarget, // 目标
            "focusContainer": top.document,  // 鼠标焦点定位
            "encrypt": WebUtil.getConfigVar("encrypt", window.location.protocol === "https:"),
            "repeaterID": WebUtil.getConfigVar("repeaterID", ""),
            "true_color": WebUtil.getConfigVar("true_color", true),
            "local_cursor": WebUtil.getConfigVar("cursor", true),
            "shared": WebUtil.getConfigVar("shared", true),
            "view_only": WebUtil.getConfigVar("view_only", false),
            "onFBUComplete": that._onCompleteHandler,    // 回调函数
            "onDisconnected": that._disconnected  // 断开连接
          });
          // console.log('sHost:' + sHost + '--nPort:' + nPort)
          cRfb.connect(sHost, nPort, sPassword, sPath);
        },*/
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
      }
    }
</script>

<style scoped>

</style>
