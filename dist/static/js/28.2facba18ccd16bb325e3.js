webpackJsonp([28],{FIZi:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1RUU1NTgwRTk2NjExRThCNTFFODREQzI1Mzc0NjE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1RUU1NTgxRTk2NjExRThCNTFFODREQzI1Mzc0NjE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVFRTU1N0VFOTY2MTFFOEI1MUU4NERDMjUzNzQ2MTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVFRTU1N0ZFOTY2MTFFOEI1MUU4NERDMjUzNzQ2MTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7RuP3VAAABDklEQVR42mKUlZVlwAH+Q2lGBvwArO7Ro0dY1TEx0BjQ3AJGaBCpAnEHELsAMR+FZn4C4j1AXAEMttsgC9SBnBNALEBlx38AYgtQELVBDd8BxFLQSEWOMEYCmAEWydCIloKaBTKzDeSDj9BgAUk8p0YqkpOTkwRSz4D4CxNSmD+nVtgALYOZxcOCLwEQaRgjoVT0f0jnAxZSgwRLEGEVB0b0/+FRVLDgKUXRgw6rOCwocKWqAfEBIyn5glA+GI3kwRHJn6AlqiS0RKU4koG+koAywcX1HihnDhBLUOpioOEyQGoulLsLVJpqABnHaVRlWjLz8/O/ATI2QGs0kO3sFBr8GYi3AnEkMPhuAgQYAPMUTqq4b9KpAAAAAElFTkSuQmCC"},SYa8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),n=(a("2Pnh"),a("4kSj")),o=a.n(n),r=(a("Au9i"),a("hKoQ")),c=a.n(r),l=a("UNGY");new Date;c.a.polyfill();l.a,new Date;c.a.polyfill();var u={data:function(){return{index:0,topStatus:"",loading:0,show:!1,pageVal:1,pageSize:10,pageCount:1,isLoading:!1,isMoreLoading:!0,noMore:!1,kehunametel:"",getcustomerarr:[],getmycustomerlist:[],screenDetail:!1,selectType:0,selectValue:"",selectdianType:0,selectdian1Type1:0,selectdianStart:"",selectdianStart1:new Date,selectdianEnd:"",selectdianEnd1:new Date,overCardStart:"",overCardStart1:new Date,overCardEnd:"",overCardEnd1:new Date,yearjineStart:"",yearjineEnd:"",yearcishuStart:"",yearcishuEnd:"",getshaixuanvalList:[],getshaiguoqiList:[],nocustomer:!1,nodata:!1,datavalue:{pageFlag:!1,name:"",mobile:""},searchlist:[],startDate:new Date("2014-1-1"),flagactive:!1,fangscreen:!1,value1:"2015-11-12",sDate:new Date("1950-01-01"),eDate:new Date,gonghao:""}},created:function(){this.getgonghao()},methods:{formatDate:function(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1,i=e.getDate()<10?"0"+e.getDate():""+e.getDate();return s<10&&(s="0"+s),a+"-"+s+"-"+i},filDate:function(t){return t.split(" ")[0]},getgonghao:function(){var t=this;6==this.$route.meta.slide&&this.instance.$post("/rest/wx/customer/getQyUser",{},function(e){console.log(e.rows[0].userName),t.gonghao=e.rows[0].userName,t.getcustomer()})},getcustomer:function(t){var e=this;this.getcustomerarr=[],this.instance.$post("/rest/wx/customerGx/findIndexData ",{},function(t){console.log(i()(t)),e.getcustomerarr.push(t.rows[0]),console.log(e.getcustomerarr),e.$refs.loadmore.onTopLoaded(),e.getmycustomer()},function(t){e.$refs.loadmore.onTopLoaded()},t)},getmycustomer:function(t){var e=this;this.instance.$post("/rest/wx/customerGx/findCustomerGx ",{pageFlag:!0,pageNo:this.pageVal,pageSize:this.pageSize,userId:this.gonghao},function(t){console.log(t),t.status?(1==e.loading&&(e.getmycustomerlist=[]),t.rows.forEach(function(t){e.getmycustomerlist.push(t)})):(e.nocustomer=!0,e.$vux.toast.text(t.message,"center")),1==e.pageVal&&(e.$refs.loadmore.onTopLoaded(),0==t.rows.length?(e.show=!0,e.nocustomer=!0):(e.show=!1,e.nocustomer=!1)),e.pageCount=Math.ceil(t.total/e.pageSize),e.isMoreLoading=!1,e.isLoading=!1,e.loading=0},function(t){1==e.pageVal&&e.$refs.loadmore.onTopLoaded()},t)},addclient:function(){this.$router.push({name:"addclient"})},todayaddmeth:function(){this.$router.push({name:"todayadd"})},keseachbtn:function(){var t=this;if(""==this.kehunametel.trim())return this.$vux.toast.text("请输入姓名或手机号码","center"),!1;this.instance.$post("/rest/wx/customerGx/findCustomerGx",{dimField:this.config.Trim(this.kehunametel,"g")},function(e){console.log(i()(e)),t.getmycustomerlist=[],t.getshaixuanvalList=[],t.getshaiguoqiList=[],t.searchlist=[],e.status?(e.rows.forEach(function(e){t.searchlist.push(e)}),t.nocustomer=!1):t.nocustomer=!0})},congzhi:function(){this.selectType=0,this.selectValue="",this.selectdianType=0,this.selectdian1Type1=0,this.selectdianStart="",this.selectdianEnd="",this.yearjineStart="",this.yearjineEnd="",this.yearcishuStart="",this.yearcishuEnd="",this.overCardStart="",this.overCardEnd="",o()("#birthday").val(""),o()("#jieshu").val(""),o()("#birthday1").val(""),o()("#jieshu1").val("")},jianshenclear:function(){this.selectType=0,this.selectdianType=0,this.yearjineStart="",this.yearjineEnd="",this.yearcishuStart="",this.yearcishuEnd="",console.log(this.selectdianStart+"selectdianStart")},shaihide:function(){this.screenDetail=!1},openPicker:function(){console.log(1),this.$refs.fang.click()},openPicker1:function(){this.$refs.picker1.open()},openPicker2:function(){console.log(1),this.$refs.picker2.open()},openPicker3:function(){console.log(1),this.$refs.picker3.open()},fangonConfirm:function(){this.selectdianType=0,this.selectdian1Type1=0},handleConfirm:function(){console.log(this.selectdianStart1),o()(".v-modal").css("opacity","0"),console.log(this.config.formatDate(this.selectdianStart1)),this.selectdianStart=this.config.formatDate(this.selectdianStart1),this.selectdianType=0,this.selectdian1Type1=0},handleConfirm1:function(){console.log(this.selectdianEnd1),o()(".v-modal").css("opacity","0"),console.log(this.config.formatDate(this.selectdianEnd1)),this.selectdianEnd=this.config.formatDate(this.selectdianEnd1),this.selectdianType=0,this.selectdian1Type1=0},handleConfirm2:function(){console.log(this.overCardStart1),o()(".v-modal").css("opacity","0"),console.log(this.config.formatDate(this.overCardStart1)),this.overCardStart=this.config.formatDate(this.overCardStart1),this.selectdianType=0,this.selectdian1Type1=0},handleConfirm3:function(){console.log(this.overCardEnd1),o()(".v-modal").css("opacity","0"),console.log(this.config.formatDate(this.overCardEnd1)),this.overCardEnd=this.config.formatDate(this.overCardEnd1),this.selectdianType=0,this.selectdian1Type1=0},select:function(t,e){this.selectType=t,this.selectValue=e},DateAdd:function(t,e,a){switch(t){case"y ":return a.setFullYear(a.getFullYear()+e),a;case"q ":return a.setMonth(a.getMonth()+3*e),a;case"m ":return a.setMonth(a.getMonth()+e),a;case"w ":return a.setDate(a.getDate()+7*e),a;case"d ":return a.setDate(a.getDate()+e),a;case"h ":return a.setHours(a.getHours()+e),a;case"m ":return a.setMinutes(a.getMinutes()+e),a;case"s ":return a.setSeconds(a.getSeconds()+e),a;default:return a.setDate(d.getDate()+e),a}},selectdian:function(t,e){this.selectdianType=t,console.log(e),console.log(t);var a=new Date;if(this.selectdianEnd=this.config.formatDate(this.config.currentTime()),"yizhou"==e){var s=this.DateAdd("d ",-7,a);this.selectdianStart=this.config.formatDate(s),console.log(this.selectdianStart)}if("yiyue"==e){s=this.DateAdd("m ",-1,a);this.selectdianStart=this.config.formatDate(s)}if("sanyue"==e){s=this.DateAdd("m ",-3,a);this.selectdianStart=this.config.formatDate(s)}if("bannian"==e){s=this.DateAdd("m ",-6,a);this.selectdianStart=this.config.formatDate(s)}},selectdian1:function(t,e){this.selectdian1Type1=t,console.log(this.selectdian1Type1),console.log(this.selectdianStart);var a=new Date;if(this.overCardEnd=this.config.formatDate(this.config.currentTime()),"yizhou"==e){var s=this.DateAdd("d ",-7,a);this.overCardStart=this.config.formatDate(s),console.log(this.overCardStart)}if("yiyue"==e){s=this.DateAdd("m ",-1,a);this.overCardStart=this.config.formatDate(s)}if("sanyue"==e){s=this.DateAdd("m ",-3,a);this.overCardStart=this.config.formatDate(s)}if("bannian"==e){s=this.DateAdd("m ",-6,a);this.overCardStart=this.config.formatDate(s)}},screenShow:function(){this.screenDetail=!0,this.flagactive=!0},screennone:function(){this.getmycustomerlist=[],this.getshaixuanvalList=[],this.getshaiguoqiList=[],this.searchlist=[],this.screenDetail=!1,this.pageVal=1,console.log(this.formatDate(this.selectdianStart)),""!=this.overCardStart&&""!=this.overCardEnd?this.getshaiguoqi():this.getshaixuanval(),this.flagactive=!1,""!=this.selectValue||""!=this.selectdianStart||""!=this.selectdianEnd||""!=this.yearcishuStart||""!=this.yearcishuEnd||""!=this.yearjineStart||""!=this.yearjineEnd||""!=this.overCardStart||""!=this.overCardEnd?this.fangscreen=!0:this.fangscreen=!1},getshaixuanval:function(){var t=this;""!=this.selectValue||""!=this.selectdianStart||""!=this.selectdianEnd||""!=this.yearcishuStart||""!=this.yearcishuEnd||""!=this.yearjineStart||""!=this.yearjineEnd?this.instance.$post("/rest/wx/customerGx/findCustomerGx",{pageFlag:!0,pageNo:this.pageVal,pageSize:this.pageSize,status1:this.selectValue,lastVisitStart:this.selectdianStart,lastVisitEnd:this.selectdianEnd,totalVisitmin:this.yearcishuStart,totalVisitmax:this.yearcishuEnd,totalCostmin:this.yearjineStart,totalCostmax:this.yearjineEnd,userId:this.gonghao},function(e){console.log(e),e.status?e.rows.forEach(function(e){t.getshaixuanvalList.push(e)}):t.nocustomer=!0,t.pageCount=Math.ceil(e.total/t.pageSize),t.isMoreLoading=!1,t.isLoading=!1,t.loading=0}):this.getgonghao()},getshaiguoqi:function(){var t=this;console.log(this.pageVal),this.instance.$post("/rest/wx/customerGx/findCustomerGxCardOver",{pageFlag:!0,pageNo:this.pageVal,pageSize:this.pageSize,overCardStart:this.overCardStart,overCardEnd:this.overCardEnd},function(e){console.log(e),e.status?e.rows.forEach(function(e){t.getshaiguoqiList.push(e)}):t.nocustomer=!0,t.pageCount=Math.ceil(e.total/t.pageSize),t.isMoreLoading=!1,t.isLoading=!1,t.loading=0})},glass:function(t){this.$router.push({name:"customerDetail",query:{filid:t}})},handleTopChange:function(t){this.topStatus=t},loadTop:function(){var t=this;setTimeout(function(){t.pageVal=1,t.loading=1,t.getcustomer(1)},300)},loadMore:function(){if(6==this.$route.meta.slide){if(this.pageVal+=1,this.isMoreLoading=!0,this.isLoading=!0,this.pageVal>this.pageCount)return this.isMoreLoading=!0,this.isLoading=!1,this.noMore=!0,0==this.getmycustomerlist.length&&(this.noMore=!1),!1;this.getmycustomerlist.length>0?this.getmycustomer(1):0==this.searchlist.length?""!=this.overCardStart&&""!=this.overCardEnd?this.getshaiguoqi():this.getshaixuanval():this.isLoading=!1}}},watch:{$route:function(t,e){1==e.meta.slide&&(this.pageVal=1,this.loading=1,this.getgonghao(),this.fangscreen=!1,this.congzhi())}},mounted:function(){},updated:function(){},components:{Datetime:l.a}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",class:{notScroll:t.flagactive}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.screenDetail,expression:"screenDetail"}],staticClass:"qi_home_shuai"},[s("div",{staticClass:"qi_home_shuai_con_left",on:{click:function(e){return t.shaihide()}}}),t._v(" "),s("div",{staticClass:"qi_home_shuai_con"},[s("div",{staticClass:"huoyuedu_wrap"},[s("p",[t._v("活跃度")]),t._v(" "),s("div",{staticClass:"huoyuedu_con"},[s("div",{staticClass:"item ",class:{active:1===t.selectType},on:{click:function(e){return t.select(1,"新增")}}},[s("span",[t._v("新增")])]),t._v(" "),s("div",{staticClass:"item ",class:{active:2===t.selectType},on:{click:function(e){return t.select(2,"活跃")}}},[s("span",[t._v("活跃")])]),t._v(" "),s("div",{staticClass:"item ",class:{active:3===t.selectType},on:{click:function(e){return t.select(3,"沉睡")}}},[s("span",[t._v("沉睡")])]),t._v(" "),s("div",{staticClass:"item ",class:{active:4===t.selectType},on:{click:function(e){return t.select(4,"流失")}}},[s("span",[t._v("流失")])])])]),t._v(" "),s("div",{staticClass:"zuijindao_wrap"},[s("p",[t._v("最近到店日期")]),t._v(" "),s("div",{staticClass:"zuijindao_con"},[s("div",{staticClass:"date_xuan"},[s("div",{staticClass:"item",attrs:{id:"calendar"}},[s("span",[t._v("起始：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectdianStart,expression:"selectdianStart"}],attrs:{type:"text",placeholder:"0000-00-00",readonly:"",id:"birthday"},domProps:{value:t.selectdianStart},on:{input:function(e){e.target.composing||(t.selectdianStart=e.target.value)}}}),s("img",{attrs:{src:a("FIZi")}}),s("datetime",{staticClass:"fang",on:{"on-confirm":t.fangonConfirm},model:{value:t.selectdianStart,callback:function(e){t.selectdianStart=e},expression:"selectdianStart"}})],1),t._v(" "),s("div",{staticClass:"item",attrs:{id:"calendar1"}},[s("span",[t._v("结束：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectdianEnd,expression:"selectdianEnd"}],attrs:{type:"text",placeholder:"0000-00-00",readonly:"",id:"jieshu"},domProps:{value:t.selectdianEnd},on:{input:function(e){e.target.composing||(t.selectdianEnd=e.target.value)}}}),s("img",{attrs:{src:a("FIZi")}}),s("datetime",{staticClass:"fang",on:{"on-confirm":t.fangonConfirm},model:{value:t.selectdianEnd,callback:function(e){t.selectdianEnd=e},expression:"selectdianEnd"}})],1)]),t._v(" "),s("div",{staticClass:"shijian_duan",attrs:{id:"zuijindao"}},[s("div",{staticClass:"item",class:{active:1===t.selectdianType},attrs:{daodiandate:"yizhou"},on:{click:function(e){return t.selectdian(1,"yizhou")}}},[s("span",[t._v("最近一周")])]),t._v(" "),s("div",{staticClass:"item",class:{active:2===t.selectdianType},attrs:{daodiandate:"yiyue"},on:{click:function(e){return t.selectdian(2,"yiyue")}}},[s("span",[t._v("最近一月")])]),t._v(" "),s("div",{staticClass:"item",class:{active:3===t.selectdianType},attrs:{daodiandate:"sanyue"},on:{click:function(e){return t.selectdian(3,"sanyue")}}},[s("span",[t._v("最近三月")])]),t._v(" "),s("div",{staticClass:"item",class:{active:4===t.selectdianType},attrs:{daodiandate:"bannian"},on:{click:function(e){return t.selectdian(4,"bannian")}}},[s("span",[t._v("最近半年")])])])])]),t._v(" "),s("div",{staticClass:"year_jine_wrap"},[s("p",[t._v("近一年交款金额")]),t._v(" "),s("div",{staticClass:"year_jine_con"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.yearjineStart,expression:"yearjineStart"}],attrs:{type:"number",placeholder:"最低金额",id:"zuidijine"},domProps:{value:t.yearjineStart},on:{input:function(e){e.target.composing||(t.yearjineStart=e.target.value)}}}),t._v(" "),s("div",{staticClass:"qujianxian"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.yearjineEnd,expression:"yearjineEnd"}],attrs:{type:"number",placeholder:"最高金额",id:"zuigaojine"},domProps:{value:t.yearjineEnd},on:{input:function(e){e.target.composing||(t.yearjineEnd=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"year_jine_wrap"},[s("p",[t._v("年到店次数")]),t._v(" "),s("div",{staticClass:"year_jine_con"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.yearcishuStart,expression:"yearcishuStart"}],attrs:{type:"number",placeholder:"1",id:"didaodian"},domProps:{value:t.yearcishuStart},on:{input:function(e){e.target.composing||(t.yearcishuStart=e.target.value)}}}),t._v(" "),s("div",{staticClass:"qujianxian"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.yearcishuEnd,expression:"yearcishuEnd"}],attrs:{type:"number",placeholder:"999",id:"gaodaodian"},domProps:{value:t.yearcishuEnd},on:{input:function(e){e.target.composing||(t.yearcishuEnd=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"zuijindao_wrap"},[s("p",[t._v("健身卡过期客户")]),t._v(" "),s("div",{staticClass:"zuijindao_con"},[s("div",{staticClass:"date_xuan"},[s("div",{staticClass:"item"},[s("span",[t._v("起始：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.overCardStart,expression:"overCardStart"}],attrs:{type:"text",placeholder:"0000-00-00",readonly:"",id:"birthday1"},domProps:{value:t.overCardStart},on:{input:function(e){e.target.composing||(t.overCardStart=e.target.value)}}}),s("img",{attrs:{src:a("FIZi")}}),s("datetime",{staticClass:"fang",on:{"on-confirm":t.fangonConfirm},model:{value:t.overCardStart,callback:function(e){t.overCardStart=e},expression:"overCardStart"}})],1),t._v(" "),s("div",{staticClass:"item"},[s("span",[t._v("结束：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.overCardEnd,expression:"overCardEnd"}],attrs:{type:"text",placeholder:"0000-00-00",readonly:"",id:"jieshu1"},domProps:{value:t.overCardEnd},on:{input:function(e){e.target.composing||(t.overCardEnd=e.target.value)}}}),s("img",{attrs:{src:a("FIZi")}}),s("datetime",{staticClass:"fang",on:{"on-confirm":t.fangonConfirm},model:{value:t.overCardEnd,callback:function(e){t.overCardEnd=e},expression:"overCardEnd"}})],1)]),t._v(" "),s("div",{staticClass:"shijian_duan",attrs:{id:"jianshenguoqi"}},[s("div",{staticClass:"item ",class:{active:1===t.selectdian1Type1},attrs:{daodiandate:"yizhou"},on:{click:function(e){return t.selectdian1(1,"yizhou")}}},[s("span",[t._v("最近一周")])]),t._v(" "),s("div",{staticClass:"item",class:{active:2===t.selectdian1Type1},attrs:{daodiandate:"yiyue"},on:{click:function(e){return t.selectdian1(2,"yiyue")}}},[s("span",[t._v("最近一月")])]),t._v(" "),s("div",{staticClass:"item",class:{active:3===t.selectdian1Type1},attrs:{daodiandate:"sanyue"},on:{click:function(e){return t.selectdian1(3,"sanyue")}}},[s("span",[t._v("最近三月")])]),t._v(" "),s("div",{staticClass:"item",class:{active:4===t.selectdian1Type1},attrs:{daodiandate:"bannian"},on:{click:function(e){return t.selectdian1(4,"bannian")}}},[s("span",[t._v("最近半年")])])])])]),t._v(" "),s("div",{staticClass:"qi_sure_height"}),t._v(" "),s("div",{staticClass:"qi_sure"},[s("div",{staticClass:"item",attrs:{id:"congzhi"},on:{click:function(e){return t.congzhi()}}},[s("span",[t._v("重置")])]),t._v(" "),s("div",{staticClass:"item sure",attrs:{id:"suan_sure"},on:{click:function(e){return t.screennone()}}},[s("span",[t._v("确定")])])])])]),t._v(" "),s("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"max-distance":150},on:{"top-status-change":t.handleTopChange}},[s("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[s("span",{directives:[{name:"show",rawName:"v-show",value:"pull"===t.topStatus,expression:"topStatus === 'pull'"}],class:{rotate:"drop"===t.topStatus}},[t._v("下拉刷新")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[s("mt-spinner",{staticClass:"loading-more",attrs:{type:"triple-bounce",size:20}})],1),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"drop"===t.topStatus,expression:"topStatus === 'drop'"}]},[t._v("松开刷新")])]),t._v(" "),s("div",{staticClass:"qi_my_coustomer"},[t.getcustomerarr.length>0?s("div",{staticClass:"qi_home_header"},[s("div",{staticClass:"today_yeji"},[s("p",{staticClass:"todayval",attrs:{id:"cusnum"}},[t._v(t._s(t.getcustomerarr[0].totalCustomer))]),t._v(" "),s("p",{staticClass:"text"},[t._v("客户数量")])]),t._v(" "),s("div",{staticClass:"yeji_con"},[s("div",{staticClass:"item",on:{click:t.todayaddmeth}},[s("p",{staticClass:"value",attrs:{id:"txinzeng"}},[t._v(t._s(t.getcustomerarr[0].newCustomer))]),t._v(" "),s("p",{staticClass:"text"},[t._v("今日新增")])]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/customer/yuandaihui"}},[s("div",{attrs:{id:"fdaihuifang"}},[s("p",{staticClass:"value",attrs:{id:"thuifang"}},[t._v(t._s(t.getcustomerarr[0].visitCustomer))]),t._v(" "),s("p",{staticClass:"text"},[t._v("等待回访")])])])],1)]):t._e(),t._v(" "),s("div",{staticClass:"qi_search_wrap"},[s("div",{staticClass:"seach"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.kehunametel,expression:"kehunametel"}],attrs:{type:"text",id:"search_val",placeholder:"请输入姓名/卡号/手机号码查找会员"},domProps:{value:t.kehunametel},on:{input:function(e){e.target.composing||(t.kehunametel=e.target.value)}}}),t._v(" "),s("span",{attrs:{id:"search_wrap"},on:{click:function(e){return t.keseachbtn()}}},[s("em",[t._v("搜索")])])]),t._v(" "),s("div",{staticClass:"shuxian"},[s("span",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"shuaixuan",on:{click:function(e){return t.screenShow()}}},[s("span",{class:{shuaixu:t.fangscreen}},[t._v("筛选")]),t._v("  "),s("em",{staticClass:"triangle_border_down",class:{shuaixu1:t.fangscreen}})])]),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"datacontent",attrs:{"infinite-scroll-disabled":"isMoreLoading","infinite-scroll-immediate-check":!0,"infinite-scroll-distance":"10"}},[s("div",{staticClass:"mycustomer_list"},t._l(t.getmycustomerlist.length>0?t.getmycustomerlist:t.searchlist,function(e,i){return s("div",{key:i,staticClass:"mycustomer_item",on:{click:function(a){return t.glass(e.fldclientid)}}},[s("div",{staticClass:"mycustomer_fang"},[s("div",{staticClass:"yewu_ico"},[s("img",{attrs:{src:a("f4JG")}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.sameMobileCount>1,expression:"item1.sameMobileCount>1"}],staticClass:"item"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.sameMobileCount<=99,expression:"item1.sameMobileCount<=99"}]},[t._v(t._s(e.sameMobileCount))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.sameMobileCount>99,expression:"item1.sameMobileCount>99"}]},[t._v("99+")])])]),t._v(" "),s("div",{staticClass:"yewu_text yewu_text2"},[s("div",{staticClass:"jianshen_text fangname"},[t._v(t._s(e.fldfirstname))]),t._v(" "),s("div",{staticClass:"fangtel"},[s("div",{staticClass:"itemtel"},[t._v(t._s(e.fldworkphone))])])]),t._v(" "),void 0==e.firstRegistCard&&void 0==e.lastVisit?s("div",{staticClass:"yewu_sanjiao item"}):s("div",{staticClass:"yewu_sanjiao item"},[s("div",{staticClass:"jianshen_text1"},[t._v("卡号："+t._s(e.firstRegistCard))]),t._v(" "),s("div",{staticClass:"jianshen_text1"},[t._v("最后到店:"+t._s(e.lastVisit?t.filDate(e.lastVisit):e.lastVisit))])])])])}),0),t._v(" "),s("div",{staticClass:"mycustomer_list"},t._l(t.getshaixuanvalList.length>0?t.getshaixuanvalList:t.getshaiguoqiList,function(e,i){return s("div",{key:i,staticClass:"mycustomer_item",on:{click:function(a){return t.glass(e.fldclientid)}}},[s("div",{staticClass:"mycustomer_fang"},[s("div",{staticClass:"yewu_ico"},[s("img",{attrs:{src:a("f4JG")}})]),t._v(" "),s("div",{staticClass:"yewu_text yewu_text2"},[s("div",{staticClass:"jianshen_text fangname"},[t._v(t._s(e.fldfirstname))]),t._v(" "),s("div",{staticClass:"fangtel"},[s("div",{staticClass:"itemtel"},[t._v(t._s(e.fldworkphone))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.sameMobileCount>1,expression:"item1.sameMobileCount>1"}],staticClass:"item"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.sameMobileCount<=99,expression:"item1.sameMobileCount<=99"}]},[t._v(t._s(e.sameMobileCount))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.sameMobileCount>99,expression:"item1.sameMobileCount>99"}]},[t._v("99+")])])])]),t._v(" "),void 0==e.firstRegistCard&&void 0==e.lastVisit?s("div",{staticClass:"yewu_sanjiao item"}):s("div",{staticClass:"yewu_sanjiao item"},[s("div",{staticClass:"jianshen_text1"},[t._v("卡号："+t._s(e.firstRegistCard))]),t._v(" "),s("div",{staticClass:"jianshen_text1"},[t._v("最后到店:"+t._s(e.lastVisit?t.filDate(e.lastVisit):e.lastVisit))])])])])}),0),t._v(" "),t.isLoading?s("div",{staticClass:"loading-box tc"},[s("mt-spinner",{staticClass:"loading-more",attrs:{type:"fading-circle",size:20}}),t._v(" "),s("span",{staticClass:"loading-more-txt"},[t._v("加载中...")])],1):t._e(),t._v(" "),t.noMore?s("div",{staticClass:"no-more"},[t._v("没有更多数据了")]):t._e()]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nocustomer,expression:"nocustomer"}],staticClass:"zanwujilu"},[s("div",{staticClass:"title"},[t._v("暂无客户信息")]),t._v(" "),s("div",{staticClass:"title"},[t._v("你可以手动添加客户信息")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nodata,expression:"nodata"}],staticClass:"zanwujilu"},[s("div",{staticClass:"title"},[t._v("暂无数据")])]),t._v(" "),s("div",{staticClass:"bottom_height"})])]),t._v(" "),s("div",{staticClass:"tianjia",on:{click:function(e){return t.addclient()}}}),t._v(" "),s("mt-datetime-picker",{ref:"picker",attrs:{type:"date",startDate:t.startDate,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:t.handleConfirm},model:{value:t.selectdianStart1,callback:function(e){t.selectdianStart1=e},expression:"selectdianStart1"}}),t._v(" "),s("mt-datetime-picker",{ref:"picker1",attrs:{type:"date",startDate:t.startDate,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:t.handleConfirm1},model:{value:t.selectdianEnd1,callback:function(e){t.selectdianEnd1=e},expression:"selectdianEnd1"}}),t._v(" "),s("mt-datetime-picker",{ref:"picker2",attrs:{type:"date",startDate:t.startDate,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:t.handleConfirm2},model:{value:t.overCardStart1,callback:function(e){t.overCardStart1=e},expression:"overCardStart1"}}),t._v(" "),s("mt-datetime-picker",{ref:"picker3",attrs:{type:"date",startDate:t.startDate,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:t.handleConfirm3},model:{value:t.overCardEnd1,callback:function(e){t.overCardEnd1=e},expression:"overCardEnd1"}}),t._v(" "),s("div",{staticClass:"bottomheight"})],1)},staticRenderFns:[]};var h=a("VU/8")(u,v,!1,function(t){a("swjD")},"data-v-9366970e",null);e.default=h.exports},swjD:function(t,e){}});