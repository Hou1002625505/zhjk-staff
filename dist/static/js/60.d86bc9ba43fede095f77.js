webpackJsonp([60],{"0hX+":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("mvHQ"),e=s.n(a),n=(s("4kSj"),{data:function(){return{gxingId:this.$route.query.filid,questionnaireData:[],nojs:!1}},created:function(){this.changeMenu()},methods:{changeMenu:function(){var t=this;this.instance.$post("/rest/wx/reception/getCusReceptionInfoById",{gxId:this.gxingId},function(i){if(console.log(e()(i)),i.status)if(i.rows.length>0){var s=[];i.rows.forEach(function(t){(t.gfpList||t.parList||t.summaryList)&&s.push(t)}),t.questionnaireData=s,0==t.questionnaireData.length&&(t.nojs=!0)}else t.nojs=!0})},wqdetail:function(t,i){1==t?this.$router.push({name:"chagfps1",query:{gxId:i,hisIndex:1}}):2==t?this.$router.push({name:"chapars1",query:{gxId:i,hisIndex:1}}):this.$router.push({name:"chaguwenjies1",query:{gxId:i}})}},components:{},watch:{$route:function(t,i){void 0!=i.meta.tc&&""!=i.meta.tc&&(this.fanggfp=i.meta.tc.fanggfp,this.fanggfpData=i.meta.tc),void 0!=i.meta.partc&&""!=i.meta.partc&&(this.fangpar=i.meta.partc.fangpar,this.fangparData=i.meta.partc),void 0!=i.meta.wqhistory&&""!=i.meta.wqhistory&&(this.wqhistory=1)}}}),o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"questionnaire"},t._l(t.questionnaireData,function(i,a){return i.gfpList||i.parList||i.summaryList?s("div",{key:a,staticClass:"totals"},[s("div",{staticClass:"name"},[t._v(t._s(i.empName)+" "),s("div",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"totalcont"},[i.gfpList?s("div",{staticClass:"item",on:{click:function(s){return t.wqdetail(1,i.gfpList.gxId)}}},[s("p",{staticClass:"p1"},[t._v("GFP与健康目标")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("接待日期："+t._s(i.writeDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"btn"},[t._v("查看记录")]),t._v(" "),s("div",{staticClass:"diamonds"}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{right:"0",left:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",top:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",right:"0",top:"initial",left:"initial"}})]):t._e(),t._v(" "),i.parList?s("div",{staticClass:"item",on:{click:function(s){return t.wqdetail(2,i.parList.gxId)}}},[s("p",{staticClass:"p1"},[t._v("PAR-Q问卷")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("接待日期："+t._s(i.writeDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"btn"},[t._v("查看记录")]),t._v(" "),s("div",{staticClass:"diamonds"}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{right:"0",left:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",top:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",right:"0",top:"initial",left:"initial"}}),t._v(" "),1==i.parList.status?s("div",{staticClass:"sanjiao1",staticStyle:{top:"0"}},[s("span",[t._v("未通过")])]):t._e()]):t._e(),t._v(" "),i.summaryList?s("div",{staticClass:"item",on:{click:function(s){return t.wqdetail(3,i.summaryList.gxId)}}},[s("p",{staticClass:"p1"},[t._v("顾问总结报告")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("接待日期："+t._s(i.writeDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"btn"},[t._v("查看记录")]),t._v(" "),s("div",{staticClass:"diamonds"}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{right:"0",left:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",top:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",right:"0",top:"initial",left:"initial"}})]):t._e()])]):t._e()}),0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nojs,expression:"nojs"}],staticClass:"noLi"},[t._v("暂无历史")]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")(n,o,!1,function(t){s("NZ0e")},"data-v-511485eb",null);i.default=c.exports},NZ0e:function(t,i){}});