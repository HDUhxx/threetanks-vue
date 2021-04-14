// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import config from './config'
import Element from 'element-ui'
import MyComponent from './components/MyComponent'
import './http';
import 'vuetify/dist/vuetify.min.css'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css';
import 'vuetify/dist/vuetify.min.css'
import './assets/material.css'
import VueQuillEditor from 'vue-quill-editor';

import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import EasyUI from 'vx-easyui'
// import 'lib-flexible'//main.js
import './utils/flexible'
import App from './App'
import router from './router'
// import App from"./app/App"

// import router from"./router"// 最后引入路由
import VideoPlayer from 'vue-video-player'
require('vue-video-player/src/custom-theme.css');
require('video.js/dist/video-js.css');

Vue.use(VideoPlayer)

import $ from 'jquery'
Vue.use(EasyUI)
Vue.use(Element)
Vue.use(Vuetify, { theme: config.theme})
Vue.use(MyComponent)
Vue.use(VueQuillEditor)
Vue.prototype.$qs = qs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //定义Vue绑定的根元素
  el: '#app',
  //将上面声明的路由器传递到根Vue实例
  router,
  //声明App组件，这样<App/>元素就可以生效
  components: { App },
  template: '<App/>'
})
