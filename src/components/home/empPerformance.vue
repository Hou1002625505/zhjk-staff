<template>
 <div class='container'>
	 <div class="yeji_wrap">
     <header>
			<div class="tab_box" style="display: none;">
				<div class="control_span">
					<span class="active tab check_yj">业绩查询</span>
					<span class=" check_salary">工资查询</span>
				</div>
			</div>
		</header>
		<section class="person-sec">
			<div class="weui-flex">
				<div class="weui-flex__item">
					<span>员工编号:</span>
					<span id="opercode"></span>
				</div>
				<div class="yejiitem"></div>
				<div class="weui-flex__item">
					<span>员工姓名:</span>
					<span id="operName"></span>
				</div>
			</div>
		</section>
		<div id="performance">
			<section class="mg-05">
				<div class="weui-flex">
					<div class="weui-flex__item tab preDate" :class="{'active':tabflag===1}" @click="selectflag(1)">
						昨天
					</div>
					<div class="yejiitem1"></div>
					<div class="weui-flex__item tab " id="curren_month" :class="{'active':tabflag===2}" @click="curren_month(2)">本月</div>
					<div class="yejiitem1"></div>
					<div class="weui-flex__item tab" id="month_box" :class="{'active':tabflag===3}"  @click="curren_month1(3)">
						<select class="sl_month" id="groupType" @change="selectmonth($event)">
							<option v-for="(item,index) in yuefenlist" :key="index" :value="item.realDate">{{item.showDate}}</option>
						</select>
					</div>

				</div>
			</section>
			<div id="preDate">
				<table class="grid_data" id="sales">
					<thead>
						<tr>
							<th>业绩类型</th>
							<th>业绩类别</th>
							<th class="pl">业绩金额</th>
						</tr>
					</thead>
					<tbody id="sales-result">
					</tbody>
				</table>
				<table class="grid_data" id="expend">
					<tbody id="expend-result">
					</tbody>
				</table>
				<div class="searchDetail">
					<span id="predate_detail" @click="chayejidetail(2)">查看业绩明细</span>
				</div>
			</div>
			<div id="current_month" style="display: none;">
				<table class="grid_data" id="month-tb">
					<thead>
						<tr>
							<th>业绩类型</th>
							<th>业绩类别</th>
							<th class="pl">业绩金额</th>
						</tr>
					</thead>
					<tbody id="month-sale">
					</tbody>
				</table>
				<table class="grid_data">
					<tbody id="month-expend">
					</tbody>
				</table>
				<div class="searchDetail">
					<span id="currentmoth_detail" @click="chayejidetail(3)">查看业绩明细</span>
				</div>
			</div>
			<div id="self_month" style="display: none;">
				<table class="grid_data" id="selfMonth_sale">
					<thead>
						<tr>
							<th>业绩类型</th>
							<th>业绩类别</th>
							<th class="pl">业绩金额</th>
						</tr>
					</thead>
					<tbody id="selfMonth-sale">
					</tbody>
				</table>
				<table class="grid_data" id="selfMonth_expend">
					<tbody id="selfMonth-expend">
					</tbody>
				</table>
				<div class="searchDetail">
					<span id="selfmonth_detail" @click="chayejidetail(4)">查看业绩明细</span>
				</div>
			</div>

			<div class="warn"><span>本月业绩截止至昨天</span></div>
			<div id="yejistyle" style="height:1rem;"></div>
          </div> 
		  </div> 
 </div>
</template>

<script>
import $ from "jquery"
 export default {
   data () {
     return {
	  tabflag:1,
	  yuefenlist:[],
	  fang:{
	 realDate:1,	  
      showDate:"历史记录查询"
	  },
	  selectmonthvalue:""
	 
     }
   },
    created(){
 	  this.select_moths()//历史记录月份
   },
   mounted(){
    //  this.select_moths()//历史记录月份
 	//   this.yesterday_res(); //默认为昨天
   },
   methods: {
	  
	   //ajax选择月份
	select_moths() {
		 this.instance.$post('/rest/wx/perfor/getPerformanceDate',{},res => {
	   console.log(res);
		this.yuefenlist=res;
		this.yuefenlist.unshift(this.fang)
		  this.yesterday_res(); //默认为昨天
     })
	
},
 yesterday_res() {
	var data = {
		type: '2',
		date: '201712'
	};
	
	this.relust_check(data, '#sales-result', '#expend-result');
},
//本月数据方法
 currentMonth_res() {
	var data = {
		type: '3',
		date: '201711'
	};
	// $('#sales').html('')
	// $('#current_month').html('')
    // $('#self_month').html('')
	this.relust_check(data, '#month-sale', '#month-expend');
},
//数据填充
 relust_check(data, sale_id, expend_id) {
	
	 var _this = this;
	$.ajax({
		type: "post",
		url: _this.config.service_ip + "/rest/wx/perfor/getPerformanceList",
		async: true,
		data: JSON.stringify(data),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		xhrFields:{
          withCredentials:true
		},
		success: function(res) {
			console.log(res);
			$('#opercode').html(res[0].opercode);
			$('#operName').html(res[0].operName);
			if(res.length==1 && res[0].option_name ==null) {
				 _this.$vux.toast.text("无当前业绩", "center");
				$('.searchDetail').hide();
				return;
			}
			$('.searchDetail').show();
			var sbody = $(sale_id);
			var ebody = $(expend_id);
			var date_num = 0; //当天私教数
			var month_num = 0; //当月私教数
			var fix_num = 0; //固定提成 
			var salePro_total = 0; //销售项目总计
			var sale_total = 0; //销售总业绩
			var expend_total = 0 //消耗总业绩
			$.each(res, function(i, n) {
				var xh_tb = "";
				var xs_tb = "";
				date_num += n.price7;
				month_num += n.price11;
				fix_num += n.price1;
				salePro_total += n.price3;
				expend_total += n.price2;
				if(n.price2 != 0) {
					xh_tb = "<tr><td class='xiaohao'>" + "消耗业绩" + "</td>" + "<td class='fontColor'>" + n.option_name + "</td>" + "<td class='pl fontColor'>" + n.price2.formatMoney(2, "", ",", ".") + "</td></tr>;"
					ebody.append(xh_tb);
				}
				if(n.price3 != 0) {
					xs_tb = "<tr><td class='xiaoshou'>" + "销售业绩" + "</td>" + "<td class='fontColor'>" + n.option_name + "</td>" + "<td class='pl fontColor'>" + n.price3.formatMoney(2, "", ",", ".") + "</td></tr>;"
					sbody.append(xs_tb);
				}
			});
			//追加私教数单元格
			if(date_num != 0) {
				var current_date = "<tr><td class='xiaoshou'>" + "销售业绩" + "</td>" + "<td class='fontColor'>" + "当天配合私教" + "</td>" + "<td class='date_coach fontColor'></td></tr>"
				sbody.append(current_date);
				$('.date_coach').html(date_num.formatMoney(2, "", ",", "."));
			}
			if(month_num != 0) {
				var current_month = "<tr><td class='xiaoshou'>" + "销售业绩" + "</td>" + "<td class='fontColor'>" + "当月配合私教" + "</td>" + "<td class='month_coach fontColor'></td></tr>"
				sbody.append(current_month);
				$('.month_coach').html(month_num.formatMoney(2, "", ",", "."));
			}
			 _this._w_table_rowspan(".grid_data", 1);
		
			//追加提成单元格
			if(fix_num != 0) {
				var ticheng = "<tr><td>" + "固定提成" + "</td>" + "<td></td>" + "<td  class='ticheng pl'></td></tr>"
				ebody.append(ticheng);
				$('.ticheng').html(fix_num.formatMoney(2, "", ",", "."));
			}
			sale_total = parseInt(date_num) + parseInt(month_num) + parseInt(salePro_total);
			if(expend_total == 0) {
				$('.xiaohao').html('消耗业绩');
			} else {
				$('.xiaohao').html('消耗业绩</br>' + expend_total.formatMoney(2, "", ",", "."));
			}
			if(sale_total == 0) {
				$('.xiaoshou').html('销售业绩');
			} else {
				$('.xiaoshou').html('销售业绩</br>' + sale_total.formatMoney(2, "", ",", "."));
			}

		},
		error: function() {
			_this.$vux.toast.text("网络请求失败");
			return;
		},
		complete: function() {}

	});
},
//合并相同单元格
 _w_table_rowspan(_w_table_id, _w_table_colnum) {
  var	_w_table_firsttd = "";
  var	_w_table_currenttd = "";
  var	_w_table_SpanNum = 0;
  var	_w_table_Obj = $(_w_table_id + " tr td:nth-child(" + _w_table_colnum + ")");
  	_w_table_Obj.each(function(i) {
		if(i == 0) {
			_w_table_firsttd = $(this);
			_w_table_SpanNum = 1;
		} else {
			_w_table_currenttd = $(this);
			if(_w_table_firsttd.text() == _w_table_currenttd.text()) {
				_w_table_SpanNum++;
				_w_table_currenttd.hide(); //remove();
				_w_table_firsttd.attr("rowspan", _w_table_SpanNum);
			} else {
				_w_table_firsttd = $(this);
				_w_table_SpanNum = 1;
			}
		}
	});
},
//昨天业绩查询
selectflag(type){
	
	this.tabflag = type;
		$('#sales-result').html("");
	$('#expend-result').html("");
	this.yesterday_res();
	$('#preDate').show();
	$('#self_month').hide();
	$('#current_month').hide();
},
curren_month(type){
	 this.tabflag = type;
  	$('#month-sale').html("");
	$('#month-expend').html("");
	this.currentMonth_res();
	$('#preDate').hide();
	$('#self_month').hide();
	$('#current_month').show();
},
curren_month1(type){
   this.tabflag = type;
},
selectmonth(ele){
   
	//var month = $(this).val();
	this.selectmonthvalue = ele.target.value;
	var month = ele.target.value;
	//$('.tab').removeClass('active');

	if(month == 1) {
		
		return;
	} else {
		
		$('#preDate').hide();
		$('#current_month').hide();
		$('#self_month').show();
		$('#selfMonth-sale').html("");
		$('#selfMonth_expend').html("");
		this._w_table_rowspan("#selfMonth_sale", 1);
		this._w_table_rowspan("#selfMonth_expend", 1);
		var data = {
			type: '4',
			date: month
		}
		
		this.relust_check(data, '#selfMonth-sale', '#selfMonth_expend');
	}
},
//查看业绩明细
chayejidetail(type){
	
   if(type==2 || type==3){
     this.$router.push({
                name: "yejidetail",
                query: {
                  detailtype: type
                
                }
              });
   }else{
      this.$router.push({
                name: "yejidetail",
                query: {
                   detailtype: type,
                   selfmouth:this.selectmonthvalue
                }
              });
   }
}
   },
   mounted(){
     
   },
   updated(){
	   
	//  $('th').css({ "width": "2.5rem","height": "1rem","border": "1px solid #E4E4E4"})
	//   $('td').css({ "width": "2.5rem","height": "1rem","border": "1px solid #E4E4E4"})
	//   $('.fontColor').css('color','red')
   },
   components: {

   }
 }

//页面跳转
$('#predate_detail').click(function(){
	location.href= "Performance_details.html?type=2";
});

$('#selfmonth_detail').click(function(){
	var value = $('#groupType').val()
	location.href= "Performance_details.html?value="+value+"&type=4";
});

$('#currentmoth_detail').click(function(){
	location.href= "Performance_details.html?type=3";
});
//金额格式转换
Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "$";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this,
		negative = number < 0 ? "-" : "",
		i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};


</script>

<style lang="less">
//   body {
// 	width: 7.5rem;
// 	font-size: 16px;
// 	background: #E4E4E4;
// 	margin-bottom: 10px;
// 	overflow-x: hidden;
// }
.weui-flex{border-top:1px solid #E4E4E4;}
.yeji_wrap .yejiitem{
	float:left;width: 1px;height: .5rem; background: #E4E4E4; margin-top: .25rem;
}
.yeji_wrap .yejiitem1{
  float:left;width: 1px;height: .5rem; background: #E4E4E4; margin-top: .1rem;
}
.yeji_wrap .grid_data {
	width: 100%;
	height: auto;
	text-align: center;
	border-collapse: collapse;
	background-color: #ffffff;
	margin-bottom: -1px;
}

.yeji_wrap td,th {
	width: 33.33%;
	height: 1rem;
	border: 1px solid #E4E4E4;
	font-weight: normal;
}

.yeji_wrap .tab_box {
	width: 7.5rem;
	height: auto;
	padding: .3rem .3rem .15rem .3rem;
}

.yeji_wrap .control_span {
	display: flex;
	border: 1px solid #5176AB;
	border-radius: 5px;
}

.yeji_wrap .tab_box span {
	flex: 1;
	display: block;
	height: .7rem;
	line-height: .7rem;
	text-align: center;
	font-size: 17px;
	color: #5176AB;
}

.yeji_wrap .active {
	background-color: #5176AB;
	color: #ffffff !important;
}

.yeji_wrap .person-sec {
	height: 1rem;
	line-height: 1rem;
	font-size: 17px;
}

.yeji_wrap section {
	width: 7.5rem;
	height: .7rem;
	line-height: .7rem;
	background-color: #ffffff;
	margin-bottom: .15rem;
	text-align: center;
}

.yeji_wrap .mg-05 {
	margin-bottom: .05rem;
}

.yeji_wrap img {
	width: .2rem;
	height: .17rem;
}

.yeji_wrap .sl_month {
	border: none;
	outline: none;
	font-size: 16px;
	font-family: "微软雅黑";
	/*cursor: pointer;*/
	appearance: none;
	-webkit-appearance: none;
	background: url(../../assets/images/down.png) no-repeat right center;
	background-size: 10%;
	padding-right: 15px;
}
.yeji_wrap .months {
	font-size: 17px;
	color: #2C2E34;
	text-decoration: underline;
}

.yeji_wrap .ticheng {
	color: #FE0024;
	font-weight: bold;
}
.yeji_wrap .searchDetail {
	padding: .35rem 0;
	border: 1px solid #E4E4E4 ;
	background-color: #fff;
	color: #fff;
	text-align: center;
}
.yeji_wrap .searchDetail span {
	padding: 6px 10px;
	background-color: #5176AB;
	border-radius: 2px;
}
.yeji_wrap .warn {
	text-align: center;
	color: #919191;
	font-size: 14px;
	padding: 5px;
}

.yeji_wrap .pl {
	padding-right: .6rem;
	text-align: right;
}
.yeji_wrap .fontColor {
	color: #919191;
}

 
</style>
