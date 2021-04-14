import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file)
  }
}

export default new Router({
  routes: [
    route("/login",'/Login',"Login"),// /login路径，路由到登录组件
    {
      path:"/", // 根路径，路由到 Layout组件
      component: () => import('../pages/Layout'),
      redirect:"/index/dashboard",
      children:[ // 其它所有组件都是 Layout的子组件
   /*     route("/form/total-form","/form/TotalForm","TotalForm"),
        route("/form/new-form","/form/NewForm","NewForm"),
        route("/form/model-form","/form/ModelForm","ModelForm"),*/
        route("/form/two-form","/form/TwoForm","TwoForm"),
        route("/form/easypid-form","/form/EasypidForm","EasypidForm"),
        route("/form/one-cascade-form","/form/OneCascadeForm","OneCascadeForm"),
        route("/form/two-cascade-form","/form/TwoCascadeForm","TwoCascadeForm"),
        route("/form/integral-separation-form","/form/IntegralSeparationForm","IntegralSeparationForm"),
        route("/form/local-form","/form/LocalForm","LocalForm"),
        route("/form/data-model-form","/form/DataModelForm","DataModelForm"),//辨识建模
        route("/index/dashboard","/Dashboard","Dashboard"),


        route("/form/VideoPlayer","/form/VideoPlayer","VideoPlayer"),
        route("/form/ModelSelect","/form/ModelSelect","ModelSelect"),//模式选择

        //修改后的
        route("/form/LearnForm01","/form/LearnForm01","LearnForm01"),//学习模式LearnForm01.vue
        route("/form/LearnForm02","/form/LearnForm02","LearnForm02"),//学习模式LearnForm01.vue

        route("/form/DataModelForm2","/form/DataModelForm2","DataModelForm2"),//辨识建模
        route("/form/DataModelForm3","/form/DataModelForm3","DataModelForm3",),//辨识建模
        route("/form/DataModelForm4","/form/DataModelForm4","DataModelForm4",),//辨识建模

        route("/form/easypid-form2","/form/EasypidForm2","EasypidForm2"),//pid控制规律研究
        route("/form/easypid-form3","/form/EasypidForm3","EasypidForm3"),//pid控制规律研究
        route("/form/easypid-form4","/form/EasypidForm4","EasypidForm4"),//pid控制规律研究

        route("/form/one-cascade-form2","/form/OneCascadeForm2","OneCascadeForm2"),//一阶
        route("/form/one-cascade-form3","/form/OneCascadeForm3","OneCascadeForm3"),//一阶
        route("/form/one-cascade-form4","/form/OneCascadeForm4","OneCascadeForm4"),//一阶

        route("/form/two-cascade-form2","/form/TwoCascadeForm2","TwoCascadeForm2"),//二阶
        route("/form/two-cascade-form3","/form/TwoCascadeForm3","TwoCascadeForm3"),//二阶
        route("/form/two-cascade-form4","/form/TwoCascadeForm4","TwoCascadeForm4"),//二阶

        route("/form/write-form","/form/WriteForm","WriteForm"),
        route("/form/write-form2","/form/WriteForm2","WriteForm2"),
        route("/form/write-form3","/form/WriteForm3","WriteForm3"),//修改后自主编写算法
        route("/form/write-form4","/form/WriteForm4","WriteForm4"),//修改后自主编写算法

        route("/form/local-form","/form/LocalForm","LocalForm"),
        route("/form/local-form1","/form/LocalForm1","LocalForm1"),

        route("/form/OneLateForm1","/form/OneLateForm1","OneLateForm1"),//一阶滞后
        route("/form/OneLateForm2","/form/OneLateForm2","OneLateForm2"),//一阶滞后


        route("/form/TwoPreForm1","/form/TwoPreForm1","TwoPreForm1"),//二阶前馈
        route("/form/TwoPreForm2","/form/TwoPreForm2","TwoPreForm2"),//二阶前馈

        route("/form/test","/form/test","test"),//二阶前馈


        /*route("/item/category",'/item/Category',"Category"),
        route("/item/brand",'/item/Brand',"Brand"),
        route("/item/list",'/item/Goods',"Goods"),
        route("/item/specification",'/item/specification/Specification',"Specification"),
        route("/user/statistics",'/item/Statistics',"Statistics"),
        route("/trade/promotion",'/trade/Promotion',"Promotion")*/
      ]
    }
  ]
})

/*export default new Router({
  routes: [
    route("/totalForm",'/TotalForm',"TotalForm"),
    {
      path:"/",
      component: () => import('../pages/form/TotalForm'),
      /!*redirect:"/index/dashboard",
      children:[
        route("/index/dashboard","/Dashboard","Dashboard"),
        route("/item/category",'/item/Category',"Category"),
        route("/trade/promotion",'/trade/Promotion',"Promotion")
      ]*!/
    }
  ]
})*/
