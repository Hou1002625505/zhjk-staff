webpackJsonp([68],{aauh:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i("mvHQ"),e=i.n(n),s=i("4kSj"),o=i.n(s),p={data:function(){return{typevalue:this.$route.query.detailtype,fangvalue:this.$route.query.selfmouth}},created:function(){},methods:{getvalue:function(){var t=this.typevalue;if(2==t)var a={type:2,date:"201710"};if(3==t)a={type:3,date:"201710"};if(4==t)a={type:4,date:this.fangvalue};o.a.ajax({type:"post",url:this.config.service_ip+"/rest/wx/perfor/getPerformanceListDetail",async:!1,contentType:"application/json;charset=UTF-8",data:e()(a),success:function(t){console.log(t);var a=2.5*t.length+"rem";o()(".Performance_right").width(a),o.a.each(t,function(t,a){a.mediname,a.autonumb;o()(".tb-option0").append("<span>"+a.strcreadate+"</span>"),o()(".tb-option1").append("<span>"+a.fldFirstName+"</span>"),o()(".tb-option2").append("<span>"+a.caseid+"</span>"),o()(".tb-option3").append("<span>"+a.mediCode+"</span>"),o()(".tb-option4").append('<span class="dataspan"><em>'+a.mediname+"</em></span>"),o()(".tb-option5").append("<span>"+a.autonumb+"</span>"),o()(".tb-option6").append("<span>"+a.price3+"</span>"),o()(".tb-option7").append("<span>"+a.price7+"</span>"),o()(".tb-option8").append("<span>"+a.price11+"</span>"),o()(".tb-option9").append("<span>"+a.price2+"</span>"),o()(".tb-option10").append("<span>"+a.price1+"</span>"),o()(".tb-option11").append("<span>"+a.option_name+"</span>")})},error:function(t){alert(t.status)}})},daochu:function(){location.href=this.config.service_ip+"/rest/wx/perfor/exportDetail?type="+this.typevalue+"&date="+this.fangvalue}},mounted:function(){this.getvalue()},components:{}},l={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"yeji_wrapf"},[i("div",{staticClass:"Perform_top_wrap"},[i("p",{staticClass:"Perform_top"},[t._v("可左右滑动")]),t._v(" "),i("a",{staticClass:"daochu",attrs:{href:"javascript:;"},on:{click:function(a){return t.daochu()}}},[t._v("导出列表")])]),t._v(" "),t._m(0),t._v(" "),i("p",{staticClass:"table_bottom"},[t._v("有什么疑问请咨询前台")])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"Performance_left"},[i("ul",[i("li",[t._v("日期")]),t._v(" "),i("li",[t._v("会员姓名")]),t._v(" "),i("li",[t._v("卡号")]),t._v(" "),i("li",[t._v("产品编号")]),t._v(" "),i("li",[t._v("产品名称")]),t._v(" "),i("li",[t._v("流水单号")]),t._v(" "),i("li",[t._v("销售业绩")]),t._v(" "),i("li",[t._v("当天配合私教")]),t._v(" "),i("li",[t._v("当月配合私教")]),t._v(" "),i("li",[t._v("消耗业绩")]),t._v(" "),i("li",[t._v("固定提成")]),t._v(" "),i("li",[t._v("业绩类别")])])]),t._v(" "),i("div",{staticStyle:{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",overflow:"auto","z-index":"0"}},[i("div",{staticClass:"Performance_right"},[i("ul",[i("li",{staticClass:"tb-option0"}),t._v(" "),i("li",{staticClass:"tb-option1"}),t._v(" "),i("li",{staticClass:"tb-option2"}),t._v(" "),i("li",{staticClass:"tb-option3"}),t._v(" "),i("li",{staticClass:"tb-option4"}),t._v(" "),i("li",{staticClass:"tb-option5"}),t._v(" "),i("li",{staticClass:"tb-option6"}),t._v(" "),i("li",{staticClass:"tb-option7"}),t._v(" "),i("li",{staticClass:"tb-option8"}),t._v(" "),i("li",{staticClass:"tb-option9"}),t._v(" "),i("li",{staticClass:"tb-option10"}),t._v(" "),i("li",{staticClass:"tb-option11"})])])])])}]};var c=i("VU/8")(p,l,!1,function(t){i("nj+v")},null,null);a.default=c.exports},"nj+v":function(t,a){}});