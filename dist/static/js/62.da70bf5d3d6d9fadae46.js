webpackJsonp([62],{"7QZy":function(t,s){},dGsP:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("4kSj"),a=i.n(e),n={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",sixarr:[],value6:"",gxId:this.$route.query.gxId,receptionId:this.$route.query.receptionId,gfpid:this.$route.query.gfpid,parid:this.$route.query.parid}},created:function(){this.getgujie()},computed:{yiwan:function(){return this.yiwanlist=[],""!=this.value1&&this.yiwanlist.push(1),""!=this.value2&&this.yiwanlist.push(1),""!=this.value3&&this.yiwanlist.push(1),""!=this.value4&&this.yiwanlist.push(1),this.sixarr.length>0&&this.yiwanlist.push(1),""!=this.value5&&this.yiwanlist.push(1),console.log(this.yiwanlist),this.yiwanlist.length}},methods:{getgujie:function(){var t=this;this.instance.$post("/rest/wx/reception/getAdviserSummaryById ",{user:this.gxId},function(s){console.log(s),t.value1=s.rows[0].economicPower,t.value2=s.rows[0].purchaseIntention,t.value3=s.rows[0].personalIntention,t.value4=s.rows[0].cosmetologyIntention,t.value5=s.rows[0].beautyIntention,t.value6=s.rows[0].summary,t.sixarr=s.rows[0].refusalReason})},selectanswer:function(t){var s=this.fivearr;if(-1==s.toString().indexOf(t))this.fivearr.push(t),console.log(this.fivearr);else{for(var i=0;i<s.length;i++)t==s[i]&&this.fivearr.splice(i,1);console.log(this.fivearr)}console.log(t)},selectanswer1:function(t){var s=this.sixarr;if(-1==s.toString().indexOf(t))this.sixarr.push(t),console.log(this.sixarr);else{for(var i=0;i<s.length;i++)t==s[i]&&this.sixarr.splice(i,1);console.log(this.sixarr)}console.log(t)},jiefinish:function(){var t=this;""!=this.value1&&""!=this.value2&&""!=this.value3&&""!=this.value4&&""!=this.value5&&""!=this.value6?this.instance.$post("/rest/wx/reception/addAdviserSummary",{gxId:this.gxId,receptionId:this.receptionId,gfpId:this.gfpid,parId:this.parid,economicPower:this.value1,purchaseIntention:this.value2,personalIntention:this.value3,cosmetologyIntention:this.value4,beautyIntention:this.value5,refusalReason:this.sixarr.join(","),summary:this.value6},function(s){console.log(s),s.rel?t.$router.push({name:"customerDetail",query:{filid:t.gxId}}):t.$vux.toast.text(s.msg,"center")}):this.$vux.toast.text("请填写完整","center")}},mounted:function(){a()(".mint-cell-wrapper").css("padding","0")},updated:function(){},components:{}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"maintype"},[i("div",{staticClass:"question_wrap"},[i("div",{staticClass:"question_jindu"},[i("div",{staticClass:"numjindu"},[t._v(t._s(t.yiwan)+" / 6")]),t._v(" "),i("div",{staticClass:"zhongchang"},[i("div",{staticClass:"jindutiao",style:{width:t.yiwan/6*100+"%"}}),t._v(" "),i("div",{staticClass:"jinduyuan",style:{left:t.yiwan/6==1?"96%":t.yiwan/6*100+"%"}},[i("span",{staticClass:"jinduxiaoyuan"})])])]),t._v(" "),i("div",{staticClass:"quesheight"}),t._v(" "),i("div",{staticClass:"question_con"},[i("div",{staticClass:"question_item"},[i("div",{staticClass:"quetext"},[t._v("1、经济实力?")]),t._v(" "),i("mt-radio",{attrs:{options:["弱","一般","强"]},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}})],1),t._v(" "),i("div",{staticClass:"question_item"},[i("div",{staticClass:"quetext"},[t._v("2、购卡意愿?")]),t._v(" "),i("mt-radio",{attrs:{options:["弱","一般","强"]},model:{value:t.value2,callback:function(s){t.value2=s},expression:"value2"}})],1),t._v(" "),i("div",{staticClass:"question_item"},[i("div",{staticClass:"quetext"},[t._v("3、购私教意愿?")]),t._v(" "),i("mt-radio",{attrs:{options:["弱","一般","强","不知道"]},model:{value:t.value3,callback:function(s){t.value3=s},expression:"value3"}})],1),t._v(" "),i("div",{staticClass:"question_item"},[i("div",{staticClass:"quetext"},[t._v("4、购美容意愿？")]),t._v(" "),i("mt-radio",{attrs:{options:["弱","一般","强","不知道"]},model:{value:t.value4,callback:function(s){t.value4=s},expression:"value4"}})],1),t._v(" "),i("div",{staticClass:"question_item"},[i("div",{staticClass:"quetext"},[t._v("5、购医美意愿?")]),t._v(" "),i("mt-radio",{attrs:{options:["弱","一般","强","不知道"]},model:{value:t.value5,callback:function(s){t.value5=s},expression:"value5"}})],1),t._v(" "),i("div",{staticClass:"question_item line"},[i("div",{staticClass:"quetext line hang"},[t._v("6、抗拒原因?（可多选）")]),t._v(" "),i("div",{staticClass:"answer_wrap margintop"},[i("div",{staticClass:"item ",class:{active:-1!=t.sixarr.toString().indexOf("没时间")},on:{click:function(s){return t.selectanswer1("没时间")}}},[i("span",[t._v("没时间")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("要比较")},on:{click:function(s){return t.selectanswer1("要比较")}}},[i("span",[t._v("要比较")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("要商量")},on:{click:function(s){return t.selectanswer1("要商量")}}},[i("span",[t._v("要商量")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("距离远")},on:{click:function(s){return t.selectanswer1("距离远")}}},[i("span",[t._v("距离远")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("价格贵")},on:{click:function(s){return t.selectanswer1("价格贵")}}},[i("span",[t._v("三头肌")])])]),t._v(" "),i("div",{staticClass:"answer_wrap marginbottom"},[i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("服务差")},on:{click:function(s){return t.selectanswer1("服务差")}}},[i("span",[t._v("服务差")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("环境差")},on:{click:function(s){return t.selectanswer1("环境差")}}},[i("span",[t._v("环境差")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("设备少")},on:{click:function(s){return t.selectanswer1("设备少")}}},[i("span",[t._v("设备少")])]),t._v(" "),i("div",{staticClass:"item",class:{active:-1!=t.sixarr.toString().indexOf("不能停车")},on:{click:function(s){return t.selectanswer1("不能停车")}}},[i("span",[t._v("大腿")])])])]),t._v(" "),t._m(0),t._v(" "),i("div",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value6,expression:"value6"}],domProps:{value:t.value6},on:{input:function(s){s.target.composing||(t.value6=s.target.value)}}})])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"question_item"},[s("div",{staticClass:"quetext"},[this._v("请对本次接待进行总结")])])}]};var r=i("VU/8")(n,l,!1,function(t){i("7QZy")},"data-v-4b34f191",null);s.default=r.exports}});