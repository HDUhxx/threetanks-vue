<template >
  <v-container fluid grid-list-md >
    <v-layout row wrap >
      <v-flex>
        <v-card >
          <!--<v-card-title>-->
            <!--<span><h2>首页</h2></span>-->
          <!--</v-card-title>-->
       <!--   <v-card-text>-->
            <img  style="position:relative;display:block;margin:0 auto;width: 100%;max-width:100%; height:100%" src="../assets2/首页底.png">
<!--
            <input style="position:absolute;left: 80%;top: 74%;display:block" type="button" src="../assets2/开始常态.png" onmousemove="this.src='../assets2/开始点击.png'"></input>
-->
          <v-btn  style="position:absolute;left: 80%;top: 74%;height: 1px;width: 1px;background-color: unset" >
            <img v-if="singnal == 1" onclick="location='/#/form/ModelSelect'" src="../assets2/开始常态.png">
          </v-btn>

<!--
            <img v-if="singnal == 2" style="position:absolute;left: 80%;top: 74%;display:block" v-on:mouseleave="imagechange2" onclick="location='/#/form/ModelSelect'" src="../assets2/开始点击.png">
-->
          <!-- <v-btn v-show="true" style="position:absolute;left: 21%;top: 53%;display:block;width: 200px;background-color: unset" onclick="location='http://localhost:9002/#/form/VideoPlayer'"></v-btn>
          <v-btn v-show="true" style="position:absolute;left: 44%;top: 53%;display:block;width: 200px;background-color: unset"  onclick="location='http://localhost:9002/#/form/easypid-form'"></v-btn>
          <v-btn v-show="true" style="position:absolute;left: 68%;top: 53%;display:block;width: 200px;background-color: unset"  onclick="location='http://localhost:9002/#/form/write-form'"></v-btn>-->
<!--
            <v-btn v-show="true" style="position:absolute;left: 80%;top: 74%;display:block;width: 150px;height: 120px;background-color: unset"  onclick="location='/#/form/ModelSelect'"></v-btn>
-->
<!--
          </v-card-text>
-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/pie');

  export default {
    name: "dashboard",
    data(){
      return {
        singnal:1,
      }
    },
    methods:{
      imagechange1(){
        this.singnal = 2
      },
      imagechange2(){
        this.singnal = 1
      }
    }

    /*mounted() {
      document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6')
    },
    beforeDestroy() {
      document.querySelector('body').removeAttribute('style')
    },*/

      /*this.$nextTick(() => {
        var sale = echarts.init(this.$refs.sale);

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: '销售统计'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        sale.setOption(option);

        const pie = echarts.init(this.$refs.pie);

        pie.setOption({
          roseType: 'angle',
          title: {
            text: '访问来源'
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
              ]
            }
          ],
          itemStyle: {
            emphasis: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        })
      })*/
    // }
  }
</script>

<style scoped>

</style>
