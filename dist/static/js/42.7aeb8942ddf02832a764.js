webpackJsonp([42],{"6eY/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("4kSj");var i={data:function(){return{customerid:this.$route.query.customerId,yuelist:[{yue:1,yue1:"01"},{yue:2,yue1:"02"},{yue:3,yue1:"03"},{yue:4,yue1:"04"},{yue:5,yue1:"05"},{yue:6,yue1:"06"},{yue:7,yue1:"07"},{yue:8,yue1:"08"},{yue:9,yue1:"09"},{yue:10,yue1:"10"},{yue:11,yue1:"11"},{yue:12,yue1:"12"}],yueflag:this.config.formatDate1(this.config.currentTime()).split("-")[1],positions:"",nodata:!1,servicelist:[],lengone:!1,pickerValue:this.config.formatDate(this.config.currentTime()).split("-")[0],pickerdata:[["2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008"]]}},created:function(){this.getQyUser()},methods:{selectyue:function(t){this.yueflag=t,this.getjilu()},getQyUser:function(){var t=this;this.instance.$post("/rest/wx/customer/getQyUser",{},function(e){console.log(e);var s="",i="",a=e.rows[0].roles;console.log(a),a.forEach(function(e){console.log(e),"SPA技师"==e.roleName?s="SPA技师":"销售"==e.roleName&&(i="销售"),"SPA技师"==s&&""==i?t.positions="SPA技师":""==s&&"销售"==i?t.positions="销售":"SPA技师"==s&&"销售"==i&&(t.positions="SPA技师")}),t.getjilu()})},getjilu:function(){var t=this;console.log(this.positions);var e=this.pickerValue+"-"+this.yueflag+"-01",s=this.pickerValue+"-"+this.yueflag+"-31";this.instance.$post("/rest/wx/records/getRecordByEmpPage",{page:1,rows:20,param:{id:this.customerid,name:this.positions,startDate:e,endDate:s}},function(e){console.log(e);var s=e.rows;e.status&&(s.length>0?s.forEach(function(e){t.servicelist.push(e)}):t.nodata=!0,1==s.length&&(t.lengone=!0))})},selectyear:function(){this.$refs.picker.show()},handleConfirm:function(t){console.log(t[0].value),this.pickerValue=t[0].value,this.getjilu()}},components:{}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"month"},t._l(t.yuelist,function(e,i){return s("div",{key:i,staticClass:"months",class:{active:t.yueflag==e.yue1},on:{click:function(s){return t.selectyue(e.yue1)}}},[s("p",[t._v(t._s(e.yue)+"月")]),t._v(" "),s("span",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"white",class:{topflag:t.yueflag==e.yue1}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.yueflag==e.yue1,expression:"yueflag==item.yue1"}],staticClass:"idler",on:{click:function(e){return e.stopPropagation(),t.selectyear()}}},[s("span",[t._v(t._s(t.pickerValue))])])])])}),0),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"records"},[t._m(0),t._v(" "),s("div",{staticClass:"data_list"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.nodata,expression:"nodata"}],staticClass:"zanwujilu"},[t._v("暂无数据")]),t._v(" "),t._l(t.servicelist,function(e,i){return s("div",{key:i,staticClass:"record_data",class:{borderright:t.lengone}},[s("div",{staticClass:"item"},[t._v(t._s(e.consumptionDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"item"},[t._v(t._s(e.consumptionDate.split(" ")[1]))]),t._v(" "),s("div",{staticClass:"item"},[t._v(t._s(e.customerName))]),t._v(" "),s("div",{staticClass:"item dItem1"},[t._v(t._s(e.itemName))]),t._v(" "),s("div",{staticClass:"item"},[t._v(t._s(e.consumptionNum)+"次")]),t._v(" "),s("div",{staticClass:"item dItem"},[t._v(t._s(e.summary))]),t._v(" "),s("div",{staticClass:"item"},[t._v(t._s(e.operator))]),t._v(" "),s("div",{staticClass:"item"},[t._v(t._s(e.adviserName)),s("span",{directives:[{name:"show",rawName:"v-show",value:0==e.adviserStatus,expression:"item.adviserStatus==0"}],staticClass:"wqr"},[t._v("（未确认）")])])])})],2)]),t._v(" "),s("div",{staticClass:"tip"},[t._v("往右滑动可查看更多消费记录")])]),t._v(" "),s("awesome-picker",{ref:"picker",attrs:{data:t.pickerdata},on:{confirm:t.handleConfirm}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"record_type"},[s("div",{staticClass:"item"},[t._v("消费日期")]),t._v(" "),s("div",{staticClass:"item"},[t._v("消费时间")]),t._v(" "),s("div",{staticClass:"item"},[t._v("客户姓名")]),t._v(" "),s("div",{staticClass:"item kgq"},[t._v("项目名称")]),t._v(" "),s("div",{staticClass:"item"},[t._v("卡扣数")]),t._v(" "),s("div",{staticClass:"item dItem dItems"},[t._v("治疗小结")]),t._v(" "),s("div",{staticClass:"item"},[t._v("操作人")]),t._v(" "),s("div",{staticClass:"item"},[t._v("顾问")])])}]};var n=s("VU/8")(i,a,!1,function(t){s("NfyQ")},"data-v-bf13143c",null);e.default=n.exports},NfyQ:function(t,e){}});