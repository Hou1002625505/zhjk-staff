import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/lib/index.css'
import './assets/css/lib/calendar.css'
import 'babel-polyfill';
// import FastClick from 'fastclick' //使用 fastclick 解决移动端ios 300ms 点击延迟
// FastClick.attach(document.body);

import 'mint-ui/lib/style.css';
import './assets/css/lib/my-mint.css';
//  import './assets/css/lib/app.css';
import './assets/css/lib/weui.min.css';
// import './assets/css/lib/app.css';
import './assets/js/jSignature.min.noconflict.js';
import './assets/js/jsSignatur.js';
import './assets/js/wx_weui.js';
import './assets/js/weui.js';
import './assets/js/jquery-weui.js';
import './assets/js/app.js';
import './assets/js/circleChart.min.js';
import Mint from 'mint-ui';
Vue.use(Mint);
import Weui from 'weui';
Vue.use(Weui);
import html2canvas from 'html2canvas';
Vue.use(html2canvas);
import AwesomePicker from 'vue-awesome-picker';
Vue.use(AwesomePicker);
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.config.productionTip = false //将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
// 公共方法
import config from './util/config.js';
Vue.prototype.config = config;
import Promise from 'es6-promise';
Promise.polyfill()

import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
// 导入接口
import instance_ from './api/index.js';
Vue.prototype.instance = instance_;

// 国际化语言
// import VueI18n from 'vue-i18n'
// import LangEn from '../static/lang/en'
// import LangZhCHS from '../static/lang/zhCHS'
// import LangZhCHT from '../static/lang/zhCHT'
// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: 'zhCHS', // 语言标识
//   messages: {
//     'en': LangEn,
//     'zhCHS': LangZhCHS,
//     'zhCHT': LangZhCHT
//   }
// })
// import { LoadingPlugin, AlertPlugin  } from 'vux'
// Vue.use(LoadingPlugin)
// Vue.use(AlertPlugin)
import './util/lrz.all.bundle.js'
import axios from 'axios'
Vue.prototype.$http = axios;

import Vuex from 'vuex';
Vue.use(Vuex);

// let VConsole = require('../node_modules/vconsole/dist/vconsole.min');
// let vConsole = new VConsole();//初始化
// Vue.use(vConsole);//设为全局

// const store = new Vuex.Store({
//   state: {
//     yuangongname: "",
//     yuangonghao:""
//   },
//   mutations: {
//     getQyUserme(state) {

//        $.ajax({
//          type:"post",
//          url: "http://test.physicalclub.com/crm/rest/wx/customer/getQyUser",
//          success:function(res){
//            alert(1)
//            console.log('vuex')
//            console.log(res)
//            state.yuangongname = res.rows[0].realName
//            state.yuangonghao = res.rows[0].userName
//          }
//        })

//     }
//   },
//   actions:{
//     getQyUserme(context){
//       context.commit('getQyUserme')
//     }
//   }
// });
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  easing: 'ease',  // 动画方式     
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
let firstGo = 0;
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
//切换路由改变标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  let isBack = sessionStorage.getItem("isBack");
  if (isBack == "true") {
    if (to.meta.nprogress != 1) {
      if (firstGo == 1) {
        NProgress.start();
      }
    }

    to.meta.nprogress = 1;

    //       if (firstGo == 1) {
    //   NProgress.start();
    // }
  }
  // if(isBack=="false"){
  //     from.meta.keepAlive = false;
  //      to.meta.keepAlive = true;
  //  }
  firstGo = 1;

  next()
})

import { MessageBox, Indicator } from 'mint-ui';
//messagebox直接返回取消弹框
router.afterEach(route => {
  NProgress.done()
  MessageBox.close();
  Indicator.close();
})
//电子签名
import vueSignature from "vue-signature"
Vue.use(vueSignature)
// 时间过滤器
Vue.filter("data", function (input) {
  var d = new Date(input);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  return year + '-' + month + '-' + day;
})
//日期过滤器
Vue.filter("subTime", function (time) {
  if (time != "" && time != undefined) {
    let timearr = time.split(" ");
    let str = timearr[0];
    return str;
  }
})
//手机号码过滤器
Vue.filter("phoneStr", function (phone) {
  if (phone != "" && phone != undefined) {
    let phoneResult = phone.substr(0, 3) + '****' + phone.substr(7);
    return phoneResult;
  }

})
// 身份证过滤器
Vue.filter("plusXing", function (str, frontLen, endLen) {
  if (str != "" && str != undefined) {
    let len = str.length - frontLen - endLen;
    let xing = '';
    for (let i = 0; i < len; i++) {
      xing += '*';
    }
    return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
  }

})

//设置cookie
Vue.prototype.addCookie = function (name, value, expiresHours) {
  var cookieString = name + "=" + escape(value);
  //判断是否设置过期时间,0代表关闭浏览器时失效
  if (expiresHours > 0) {
    var date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000);
    cookieString = cookieString + ";expires=" + date.toUTCString();
  }
  document.cookie = cookieString;
}
//修改cookie的值
Vue.prototype.editCookie = function (name, value, expiresHours) {
  var cookieString = name + "=" + escape(value);
  if (expiresHours > 0) {
    var date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000); //单位是毫秒
    cookieString = cookieString + ";expires=" + date.toGMTString();
  }
  document.cookie = cookieString;
}
//根据名字获取cookie的值 
Vue.prototype.getCookieValue = function (name) {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (arr[0] == name) {
      return unescape(arr[1]);
    }
  }
}

//去除两端空格
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}
// import './util/rem';
// vuex
var store = new Vuex.Store({//store对象
  state: {
    jurisdiction: []
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  // i18n,
  store,
  data: {
    eventHub: new Vue()
  },
  template: '<App/>'
})
