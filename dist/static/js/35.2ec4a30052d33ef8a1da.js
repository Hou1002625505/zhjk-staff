webpackJsonp([35],{"+jDl":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("bOdI"),e=s.n(a),n=s("mvHQ"),c=s.n(n),r=(s("4kSj"),e()({data:function(){return{cusname:"",custel:"",checksex1:"",pickerValue:"",shengao:"",weight:"",datevalue:new Date("1970"),gonghao:"",xitongflag:!1,sDate:new Date("1950"),eDate:new Date,telcusinfolist:[],gxingId:"",idnumber:"",status:1,menuFlag:1,fanggfp:"",fanggfpData:"",fangpar:"",fangparData:"",questionnaireData:[],wqhistory:"",tanflags:!1,affraims:!1,receptionId:""}},created:function(){},methods:{getgonghao:function(){var t=this;this.instance.$post("/rest/wx/customer/getQyUser",{},function(i){console.log(i),t.gonghao=data.rows[0].userName})},tihuan:function(t){return void 0!=t&&null!=t?t:t="无"},bujied:function(){this.$router.push({name:"home",query:{}})},selectcus:function(t){console.log(t),this.gxingId=t},telcusinfo:function(){var t=this;this.gxingId="",""!=this.custel&&this.instance.$post("/rest/wx/reception/getCustomerDossier",{mobile:this.custel},function(i){if(console.log(c()(i)),t.telcusinfolist=[],i.status){var s=i.rows;s.length>0?(t.xitongflag=!0,s.forEach(function(i){t.telcusinfolist.push(i)}),t.status=0):(t.status=1,t.tanflags=!0)}})},affrims:function(){var t=this;""==this.custel?this.$vux.toast.text("请输入客户手机号","center"):""==this.checksex1?this.$vux.toast.text("请选择性别","center"):""==this.pickerValue?this.$vux.toast.text("请选择出生日期","center"):""==this.shengao?this.$vux.toast.text("请填写身高","center"):""==this.weight?this.$vux.toast.text("请填写体重","center"):this.instance.$post("/rest/wx/reception/addGxCustomerInfo ",{gxId:this.gxingId,customerName:this.cusname,mobile:this.custel,sex:this.checksex1,birthday:this.pickerValue,height:this.shengao,weight:this.weight,status:this.status},function(i){console.log(c()(i)),i.rel?(t.receptionId=i.msg,t.affraims=!t.affraims):t.$vux.toast.text(i.msg,"center")})},xiayibu:function(t){this.affraims?1==t?1==this.fanggfp?this.$router.push({name:"chagfps",query:{gxId:this.fanggfpData.gxId,parid:this.fanggfpData.parid,gfpid:this.fanggfpData.gfpid,fangpar:this.fanggfpData.fangpar,fanggfp:this.fanggfpData.fanggfp}}):this.$router.push({name:"gfpquestions",query:{gxId:this.gxingId,receptionId:this.receptionId}}):0===this.fangpar||1===this.fangpar?this.$router.push({name:"chapars",query:{gxId:this.fangparData.gxId,parid:this.fangparData.parid,gfpid:this.fangparData.gfpid,fangpar:this.fangparData.fangpar,fanggfp:this.fangparData.fanggfp}}):this.$router.push({name:"parquestions",query:{gxId:this.gxingId,receptionId:this.receptionId}}):this.$vux.toast.text("请先确定客户信息","center")},xiayibu1:function(){""!==this.fanggfp||""!==this.fangpar?1==this.wqhistory?this.$router.push({name:"chaguwenjies",query:{gxId:this.fanggfpData.gxId}}):this.$router.push({name:"guwenjies",query:{gxId:this.fanggfpData.gxId,receptionId:this.fanggfpData.receptionId,gfpid:this.fanggfpData.gfpid,parid:this.fangparData.parid}}):this.$vux.toast.text("测试问卷请先选填一项","center")},tanAdds:function(){this.$router.push({name:"addclient"})},continiu:function(){var t=this;console.log(this.gxingId),""!=this.gxingId?this.instance.$post("/rest/wx/reception/getCustomerDossier",{id:this.gxingId},function(i){if(console.log(i),i.status){var s=i.rows[0];t.custel=s.mobile,t.cusname=s.customerName,t.checksex1=s.sex,t.pickerValue=s.birthday?s.birthday.split(" ")[0]:"",t.shengao=s.height?s.height:"",t.weight=s.weight?s.weight:"",t.xitongflag=!1}}):this.$vux.toast.text("请选择客户","center")},finishs:function(){""!==this.fanggfp||""!==this.fangpar?1==this.wqhistory?this.$router.push({name:"customerDetail",query:{filid:this.gxingId}}):this.$vux.toast.text("请填写顾问总结报告","center"):this.$vux.toast.text("测试问卷请先选填一项","center")},changeMenu:function(t){var i=this;if(2==t){if(""==this.gxingId)return void this.$vux.toast.text("请先填写客户信息","center");this.instance.$post("/rest/wx/reception/getCusReceptionInfoById",{gxId:this.gxingId},function(t){console.log(c()(t)),t.status&&(i.questionnaireData=t.rows)})}this.menuFlag=t},selecdate:function(){this.$refs.picker.open()},handleConfirm:function(){console.log(this.datevalue),console.log(this.config.formatDate(this.datevalue)),this.pickerValue=this.config.formatDate(this.datevalue)},checksex:function(t){this.checksex1=t,console.log(t)},wqdetail:function(t,i){1==t?this.$router.push({name:"chagfps",query:{gxId:i,hisIndex:1}}):2==t?this.$router.push({name:"chapars",query:{gxId:i,hisIndex:1}}):this.$router.push({name:"chaguwenjies",query:{gxId:i}})}},watch:{idnumber:function(){this.idnumber=this.idnumber.replace(/[^\w\\/]/gi,"")}},updated:function(){},components:{}},"watch",{$route:function(t,i){void 0!=i.meta.tc&&""!=i.meta.tc&&(this.fanggfp=i.meta.tc.fanggfp,this.fanggfpData=i.meta.tc,i.meta.tc=""),void 0!=i.meta.partc&&""!=i.meta.partc&&(this.fangpar=i.meta.partc.fangpar,this.fangparData=i.meta.partc,i.meta.partc=""),void 0!=i.meta.wqhistory&&""!=i.meta.wqhistory&&(this.wqhistory=1,i.meta.wqhistory="")}}),e()({data:function(){return{cusname:"",custel:"",checksex1:"",pickerValue:"",shengao:"",weight:"",datevalue:new Date("1970"),gonghao:"",xitongflag:!1,sDate:new Date("1950"),eDate:new Date,telcusinfolist:[],gxingId:"",idnumber:"",status:1,menuFlag:1,fanggfp:"",fanggfpData:"",fangpar:"",fangparData:"",questionnaireData:[],wqhistory:"",tanflags:!1,affraims:!1,receptionId:""}},created:function(){},methods:{getgonghao:function(){var t=this;this.instance.$post("/rest/wx/customer/getQyUser",{},function(i){console.log(i),t.gonghao=data.rows[0].userName})},tihuan:function(t){return void 0!=t&&null!=t?t:t="无"},bujied:function(){this.$router.push({name:"home",query:{}})},selectcus:function(t){console.log(t),this.gxingId=t},telcusinfo:function(){var t=this;this.gxingId="",""!=this.custel&&this.instance.$post("/rest/wx/reception/getCustomerDossier",{mobile:this.custel},function(i){if(console.log(c()(i)),t.telcusinfolist=[],i.status){var s=i.rows;s.length>0?(t.xitongflag=!0,s.forEach(function(i){t.telcusinfolist.push(i)}),t.status=0):(t.status=1,t.tanflags=!0)}})},affrims:function(){var t=this;""==this.custel?this.$vux.toast.text("请输入客户手机号","center"):""==this.checksex1?this.$vux.toast.text("请选择性别","center"):""==this.pickerValue?this.$vux.toast.text("请选择出生日期","center"):""==this.shengao?this.$vux.toast.text("请填写身高","center"):""==this.weight?this.$vux.toast.text("请填写体重","center"):this.instance.$post("/rest/wx/reception/addGxCustomerInfo ",{gxId:this.gxingId,customerName:this.cusname,mobile:this.custel,sex:this.checksex1,birthday:this.pickerValue,height:this.shengao,weight:this.weight,status:this.status},function(i){console.log(c()(i)),i.rel?(t.receptionId=i.msg,t.affraims=!t.affraims):t.$vux.toast.text(i.msg,"center")})},xiayibu:function(t){this.affraims?1==t?1==this.fanggfp?this.$router.push({name:"chagfps",query:{gxId:this.fanggfpData.gxId,parid:this.fanggfpData.parid,gfpid:this.fanggfpData.gfpid,fangpar:this.fanggfpData.fangpar,fanggfp:this.fanggfpData.fanggfp}}):this.$router.push({name:"gfpquestions",query:{gxId:this.gxingId,receptionId:this.receptionId}}):0===this.fangpar||1===this.fangpar?this.$router.push({name:"chapars",query:{gxId:this.fangparData.gxId,parid:this.fangparData.parid,gfpid:this.fangparData.gfpid,fangpar:this.fangparData.fangpar,fanggfp:this.fangparData.fanggfp}}):this.$router.push({name:"parquestions",query:{gxId:this.gxingId,receptionId:this.receptionId}}):this.$vux.toast.text("请先确定客户信息","center")},xiayibu1:function(){""!==this.fanggfp||""!==this.fangpar?1==this.wqhistory?this.$router.push({name:"chaguwenjies",query:{gxId:this.fanggfpData.gxId}}):this.$router.push({name:"guwenjies",query:{gxId:this.fanggfpData.gxId,receptionId:this.fanggfpData.receptionId,gfpid:this.fanggfpData.gfpid,parid:this.fangparData.parid}}):this.$vux.toast.text("测试问卷请先选填一项","center")},tanAdds:function(){this.$router.push({name:"addclient"})},continiu:function(){var t=this;console.log(this.gxingId),""!=this.gxingId?this.instance.$post("/rest/wx/reception/getCustomerDossier",{id:this.gxingId},function(i){if(console.log(i),i.status){var s=i.rows[0];t.custel=s.mobile,t.cusname=s.customerName,t.checksex1=s.sex,t.pickerValue=s.birthday?s.birthday.split(" ")[0]:"",t.shengao=s.height?s.height:"",t.weight=s.weight?s.weight:"",t.xitongflag=!1}}):this.$vux.toast.text("请选择客户","center")},finishs:function(){""!==this.fanggfp||""!==this.fangpar?1==this.wqhistory?this.$router.push({name:"customerDetail",query:{filid:this.gxingId}}):this.$vux.toast.text("请填写顾问总结报告","center"):this.$vux.toast.text("测试问卷请先选填一项","center")},changeMenu:function(t){var i=this;if(2==t){if(""==this.gxingId)return void this.$vux.toast.text("请先填写客户信息","center");this.instance.$post("/rest/wx/reception/getCusReceptionInfoById",{gxId:this.gxingId},function(t){console.log(c()(t)),t.status&&(i.questionnaireData=t.rows)})}this.menuFlag=t},selecdate:function(){this.$refs.picker.open()},handleConfirm:function(){console.log(this.datevalue),console.log(this.config.formatDate(this.datevalue)),this.pickerValue=this.config.formatDate(this.datevalue)},checksex:function(t){this.checksex1=t,console.log(t)},wqdetail:function(t,i){1==t?this.$router.push({name:"chagfps",query:{gxId:i,hisIndex:1}}):2==t?this.$router.push({name:"chapars",query:{gxId:i,hisIndex:1}}):this.$router.push({name:"chaguwenjies",query:{gxId:i}})}},watch:{idnumber:function(){this.idnumber=this.idnumber.replace(/[^\w\\/]/gi,"")}},updated:function(){},components:{}},"watch",{$route:function(t,i){void 0!=i.meta.tc&&""!=i.meta.tc&&(this.fanggfp=i.meta.tc.fanggfp,this.fanggfpData=i.meta.tc,i.meta.tc=""),void 0!=i.meta.partc&&""!=i.meta.partc&&(this.fangpar=i.meta.partc.fangpar,this.fangparData=i.meta.partc,i.meta.partc=""),void 0!=i.meta.wqhistory&&""!=i.meta.wqhistory&&(this.wqhistory=1,i.meta.wqhistory="")}})),o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"addG wjtc"},[s("div",{staticClass:"weui-cells weui-cells_form"},[s("div",{staticClass:"weui-cell",staticStyle:{"border-top":"1px solid #e4e4e4"}},[t._m(0),t._v(" "),s("div",{staticClass:"weui-cell__bd arrow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.custel,expression:"custel"}],staticClass:"weui-input painput5",staticStyle:{position:"relative",right:"18px"},attrs:{id:"name",type:"number",maxlength:"50",oninput:"if(value.length>15)value=value.slice(0,15)",placeholder:"请输入手机号码"},domProps:{value:t.custel},on:{blur:function(i){return t.telcusinfo()},input:function(i){i.target.composing||(t.custel=i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell"},[t._m(1),t._v(" "),s("div",{staticClass:"weui-cell__bd arrow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cusname,expression:"cusname"}],staticClass:"weui-input painput5",staticStyle:{position:"relative",right:"18px"},attrs:{id:"phone",type:"text",placeholder:"请输入客户姓名"},domProps:{value:t.cusname},on:{input:function(i){i.target.composing||(t.cusname=i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell",staticStyle:{padding:"13.5px 15px"}},[t._m(2),t._v(" "),s("div",{staticClass:"weui-cell__hd",staticStyle:{position:"absolute",right:"15px",color:"#919191","font-family":"'微软雅黑'"}},[s("div",{staticClass:" weui-cells_checkbox sex",staticStyle:{"margin-top":"0",float:"left"}},[s("label",{staticClass:"weui-cell weui-check__label",staticStyle:{padding:"0","margin-right":"10px","border-bottom":"none"}},[s("div",{staticClass:"weui-cell__hd"},[s("input",{staticClass:"weui-check",attrs:{type:"radio",name:"checkbox1",maxlength:"500",value:"1"},domProps:{checked:1==t.checksex1},on:{click:function(i){return t.checksex(1)}}}),t._v(" "),s("i",{staticClass:"weui-icon-checked"})]),t._v(" "),t._m(3)])]),t._v(" "),s("div",{staticClass:"weui-cells weui-cells_checkbox",staticStyle:{"margin-top":"0"}},[s("label",{staticClass:"weui-cell weui-check__label",staticStyle:{padding:"0","border-bottom":"none"}},[s("div",{staticClass:"weui-cell__hd"},[s("input",{staticClass:"weui-check",attrs:{type:"radio",name:"checkbox1",value:"2"},domProps:{checked:2==t.checksex1},on:{click:function(i){return t.checksex(2)}}}),t._v(" "),s("i",{staticClass:"weui-icon-checked"})]),t._v(" "),t._m(4)])])])]),t._v(" "),s("div",{staticClass:"weui-cell ",attrs:{id:"showDatePicker"}},[t._m(5),t._v(" "),s("div",{staticClass:"weui-cell__bd arrow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pickerValue,expression:"pickerValue"}],staticClass:"weui-input painput5",staticStyle:{position:"relative",right:"18px"},attrs:{id:"dateBirth",type:"text",placeholder:"请选择出生日期",onfocus:"this.blur()",readonly:"readonly"},domProps:{value:t.pickerValue},on:{click:function(i){return t.selecdate()},input:function(i){i.target.composing||(t.pickerValue=i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell customers",attrs:{id:"selectCus"}},[t._m(6),t._v(" "),s("div",{staticClass:"weui-cell__bd arrow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.shengao,expression:"shengao"}],staticClass:"weui-input painput6",staticStyle:{position:"relative",right:"18px"},attrs:{type:"number",id:"customer_source",placeholder:"请填写客户身高",oninput:"if(value>300)value=''"},domProps:{value:t.shengao},on:{input:function(i){i.target.composing||(t.shengao=i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-cell customers borbottom",staticStyle:{"border-bottom":"1px solid #e4e4e4"},attrs:{id:"selectCus"}},[t._m(7),t._v(" "),s("div",{staticClass:"weui-cell__bd arrow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"weui-input painput6",staticStyle:{position:"relative",right:"18px"},attrs:{type:"number",id:"customer_source",placeholder:"请填写客户体重",oninput:"if(value>300)value=''"},domProps:{value:t.weight},on:{input:function(i){i.target.composing||(t.weight=i.target.value)}}})])]),t._v(" "),t.affraims?t._e():s("div",{staticClass:"btn",on:{click:function(i){return t.affrims()}}},[t._v("确定")])]),t._v(" "),t.affraims?s("div",{staticClass:"zemsk"}):t._e()]),t._v(" "),s("div",{staticClass:"menus"},[s("div",{staticClass:"title"},[t._v("请填写以下问卷调查")]),t._v(" "),s("div",{staticClass:"tip"},[t._v("测试问卷选填任意一项，顾问总结报告必填.")]),t._v(" "),s("div",{staticClass:"btn"},[s("div",{class:1==t.menuFlag?"item active":"item",on:{click:function(i){return t.changeMenu(1)}}},[t._v("问卷列表")]),t._v(" "),s("div",{class:2==t.menuFlag?"item active":"item",on:{click:function(i){return t.changeMenu(2)}}},[t._v("问卷填写历史")])])]),t._v(" "),1==t.menuFlag?s("div",{staticClass:"ques_list_wrap"},[s("div",{staticClass:"ques_list"},[s("div",{staticClass:"ques_item",on:{click:function(i){return t.xiayibu(1)}}},[t._m(8),t._v(" "),t._m(9),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.fanggfp,expression:"fanggfp==1"}],staticClass:"sanjiao"},[s("span",[t._v("完成")])])]),t._v(" "),s("div",{staticClass:"ques_item",on:{click:function(i){return t.xiayibu(2)}}},[t._m(10),t._v(" "),t._m(11),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.fangpar,expression:"fangpar===1"}],staticClass:"sanjiao1"},[s("span",[t._v("未通过")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.fangpar,expression:"fangpar===0"}],staticClass:"sanjiao"},[s("span",[t._v("通过")])])]),t._v(" "),s("div",{staticClass:"ques_item",on:{click:function(i){return t.xiayibu1()}}},[t._m(12),t._v(" "),t._m(13)])])]):t._e(),t._v(" "),2==this.menuFlag?s("div",{staticClass:"questionnaire"},t._l(t.questionnaireData,function(i,a){return i.gfpList||i.parList||i.summaryList?s("div",{key:a,staticClass:"totals"},[s("div",{staticClass:"name"},[t._v(t._s(i.empName)+" "),s("div",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"totalcont"},[i.gfpList?s("div",{staticClass:"item",on:{click:function(s){return t.wqdetail(1,i.gfpList.gxId)}}},[s("p",{staticClass:"p1"},[t._v("GFP与健康目标")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("接待日期："+t._s(i.writeDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"btn"},[t._v("查看记录")]),t._v(" "),s("div",{staticClass:"diamonds"}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{right:"0",left:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",top:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",right:"0",top:"initial",left:"initial"}})]):t._e(),t._v(" "),i.parList?s("div",{staticClass:"item",on:{click:function(s){return t.wqdetail(2,i.parList.gxId)}}},[s("p",{staticClass:"p1"},[t._v("PAR-Q问卷")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("接待日期："+t._s(i.writeDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"btn"},[t._v("查看记录")]),t._v(" "),s("div",{staticClass:"diamonds"}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{right:"0",left:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",top:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",right:"0",top:"initial",left:"initial"}}),t._v(" "),1==i.parList.status?s("div",{staticClass:"sanjiao1",staticStyle:{top:"0"}},[s("span",[t._v("未通过")])]):t._e()]):t._e(),t._v(" "),i.summaryList?s("div",{staticClass:"item",on:{click:function(s){return t.wqdetail(3,i.summaryList.gxId)}}},[s("p",{staticClass:"p1"},[t._v("顾问总结报告")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("接待日期："+t._s(i.writeDate.split(" ")[0]))]),t._v(" "),s("div",{staticClass:"btn"},[t._v("查看记录")]),t._v(" "),s("div",{staticClass:"diamonds"}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{right:"0",left:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",top:"initial"}}),t._v(" "),s("div",{staticClass:"diamonds",staticStyle:{bottom:"0",right:"0",top:"initial",left:"initial"}})]):t._e()])]):t._e()}),0):t._e(),t._v(" "),1==t.menuFlag?s("div",{staticClass:"addCustomer_finish",on:{click:function(i){return t.finishs()}}},[s("span",[t._v("完成")])]):t._e(),t._v(" "),s("mt-datetime-picker",{ref:"picker",attrs:{type:"date","year-format":"{value}年","month-format":"{value}月","date-format":"{value}日",startDate:t.sDate,endDate:t.eDate},on:{confirm:t.handleConfirm},model:{value:t.datevalue,callback:function(i){t.datevalue=i},expression:"datevalue"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.xitongflag,expression:"xitongflag"}],staticClass:"xitong_wrap"},[s("div",{staticClass:"xitong_wra"},[t._m(14),t._v(" "),s("div",{staticClass:"xitong_con"},[t._m(15),t._v(" "),s("div",{staticClass:"xitong_list"},t._l(t.telcusinfolist,function(i,a){return s("div",{key:a,staticClass:"xitong_item",class:{active:i.gxId==t.gxingId},on:{click:function(s){return t.selectcus(i.gxId)}}},[s("div",{staticClass:"data"},[s("span",{staticClass:"ming"},[t._v("客户姓名： ")]),s("span",{staticClass:"value"},[t._v(t._s(t.tihuan(i.customerName)))])]),t._v(" "),s("div",{staticClass:"data"},[s("span",{staticClass:"ming"},[t._v("健身顾问： ")]),s("span",{staticClass:"value"},[t._v(t._s(t.tihuan(i.primaryName)))])]),t._v(" "),s("div",{staticClass:"data"},[s("span",{staticClass:"ming"},[t._v("私教顾问： ")]),s("span",{staticClass:"value"},[t._v(t._s(t.tihuan(i.primaryName)))])]),t._v(" "),s("div",{staticClass:"data"},[s("span",{staticClass:"ming"},[t._v("是否已填写问卷： ")]),s("span",{staticClass:"value"},[t._v(t._s(1==i.isReception?"否":"是"))])])])}),0),t._v(" "),s("div",{staticClass:"btn_wrap"},[s("div",{staticClass:"bujie",on:{click:function(i){return t.bujied()}}},[s("span",[t._v("不接待")])]),t._v(" "),s("div",{staticClass:"jixu",on:{click:function(i){return t.continiu()}}},[s("span",[t._v("继续接待")])])])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tanflags,expression:"tanflags"}],staticClass:"tanchuang_wrap"},[s("div",{staticClass:"tanchuang"},[t._m(16),t._v(" "),t._m(17),t._v(" "),s("div",{staticClass:"tanchuang_btn",on:{click:function(i){return t.tanAdds()}}},[s("p",[t._v("立即添加")])])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[this._v("联系电话")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[this._v("姓"),i("span",{staticClass:"zk"},[this._v("名")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[this._v("性"),i("span",{staticClass:"zk"},[this._v("别")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__bd"},[i("p",[this._v("男")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__bd"},[i("p",[this._v("女")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[this._v("出生日期")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[this._v("身高(cm)")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[this._v("体重(kg)")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item_left"},[i("div",{staticClass:"title"},[this._v("GFP与健康目标")]),this._v(" "),i("div",{staticClass:"miaosu"},[i("p",[this._v("用于识别少数不适宜作体能活动或")]),this._v(" "),i("p",[this._v("是需经医生建议才适合活动的客户")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item_right"},[i("span",[this._v("开始测试")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item_left"},[i("div",{staticClass:"title"},[this._v("PAR-Q问卷")]),this._v(" "),i("div",{staticClass:"miaosu"},[i("p",[this._v("GFP(来宾健体纪录)用于得到客户信")]),this._v(" "),i("p",[this._v("息,掌握客户需求与健身动机")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item_right"},[i("span",[this._v("开始测试")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item_left"},[i("div",{staticClass:"title"},[this._v("顾问总结报告")]),this._v(" "),i("div",{staticClass:"miaosu"},[i("p",[this._v("请填写本次接待总结")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item_right"},[i("span",[this._v("填写报告")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"xitong_header"},[i("p",[this._v("提示：系统已有该客户")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tishi"},[i("p",[this._v("请选择客户继续接待")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tanchuang_header"},[i("p",[this._v("温馨提示")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tanchuang_con"},[i("p",[this._v("该客户不存在，请先")]),this._v(" "),i("p",[this._v("添加客户信息！")])])}]};var l=s("VU/8")(r,o,!1,function(t){s("BQNa")},"data-v-f27d4464",null);i.default=l.exports},BQNa:function(t,i){}});