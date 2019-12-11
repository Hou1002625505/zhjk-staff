<template>
 <div class='container'>
   		<div class="personal">
			<div class="month">
				<div id="time"><span id="left" @click="monthreduce()"><</span><span id="times" @click="selectyear()">{{year}}年{{month}}月</span><span id="right" @click="monthadd()">></span></div>
			</div>
			<div class="project_title">
				<div class="project_titel">项目</div>
				<div class="project_titel"><span style="padding-left:18%;">目标</span></div>
				<div class="project_titel"><span style="padding-left:20%;">当前完成</span></div>
				<div class="project_titel">
					<a href="javascript:;" class="compile" @click="bianji()" v-show="bianji1">编辑</a>
				</div>
			</div>
		</div>
		<div class="plan" v-show="nodata">暂无计划</div>
		<div class="dataList" v-if="conflag">

			<div class="project_nr">
				<div class="project_nrs">销售业绩</div>
				<div class="project_nrs"><span id="xs" data-xs="">{{this.mubiaolist[0].salePerformance}}元</span></div>
				<div class="project_nrs"><span id="xs1" data-xss="">{{this.wanchenglist[0].salePerformance}}元</span></div>
				<div class="project_nrs">
					<div  style="width:50px;height:50px;position:relative;top:0.25rem;left:30%;left:30%;">
					 <x-circle
						:percent="this.wanchenglist[0].salePerformance/this.mubiaolist[0].salePerformance>1?1*100:this.wanchenglist[0].salePerformance/this.mubiaolist[0].salePerformance*100"
						:trail-width = "6"
						:stroke-width="6"
						trail-color = "#99CBFF"
						stroke-color="#3598FF">
						<span>{{(isNaN(this.wanchenglist[0].salePerformance/this.mubiaolist[0].salePerformance)?0:this.wanchenglist[0].salePerformance/this.mubiaolist[0].salePerformance*100).toFixed(1)}}%</span>
                     </x-circle>
					 </div>
				</div>
			</div>

			<div class="project_nr">
				<div class="project_nrs">消耗业绩</div>
				<div class="project_nrs"><span id="xh" data-xh="">{{this.mubiaolist[0].consumePerformance}}元</span></div>
				<div class="project_nrs"><span id="xh1" data-xhh="">{{this.wanchenglist[0].consumePerformance}}元</span></div>
				<div class="project_nrs">
					<div  style="width:50px;height:50px;position:relative;top:0.25rem;left:30%;">
					 <x-circle
						:percent="this.wanchenglist[0].consumePerformance/this.mubiaolist[0].consumePerformance>1?1*100:this.wanchenglist[0].consumePerformance/this.mubiaolist[0].consumePerformance*100"
							:trail-width = "6"
						:stroke-width="6"
						trail-color = "#99CBFF"
						stroke-color="#3598FF">
						<span>{{(isNaN(this.wanchenglist[0].consumePerformance/this.mubiaolist[0].consumePerformance)?0:this.wanchenglist[0].consumePerformance/this.mubiaolist[0].consumePerformance*100).toFixed(1)}}%</span>
                     </x-circle>
					 </div>
				</div>
			</div>
			<div class="project_nr">
				<div class="project_nrs">新增客户</div>
				<div class="project_nrs"><span id="add" data-add="">{{this.mubiaolist[0].customerNumber}}人</span></div>
				<div class="project_nrs"><span id="add1" data-addd="">{{this.wanchenglist[0].customerNumber}}人</span></div>
				<div class="project_nrs">
					<div  style="width:50px;height:50px;position:relative;top:0.25rem;left:30%;">
					 <x-circle
						:percent="this.wanchenglist[0].customerNumber/this.mubiaolist[0].customerNumber>1?1*100:this.wanchenglist[0].customerNumber/this.mubiaolist[0].customerNumber*100"
						:stroke-width="6"
							:trail-width = "6"
						trail-color = "#FFD284"
						stroke-color="#FFA21E">
						<span>{{(isNaN(this.wanchenglist[0].customerNumber/this.mubiaolist[0].customerNumber)?0:this.wanchenglist[0].customerNumber/this.mubiaolist[0].customerNumber*100).toFixed(1)}}%</span>
                     </x-circle>
					 </div>
				</div>
			</div>
			<div class="project_nr">
				<div class="project_nrs">回访人数</div>
				<div class="project_nrs"><span id="make" data-make="">{{this.mubiaolist[0].revisitNumber}}人</span></div>
				<div class="project_nrs"><span id="make1" data-makee="">{{this.wanchenglist[0].revisitNumber}}人</span></div>
				<div class="project_nrs">
					<div  style="width:50px;height:50px;position:relative;top:0.25rem;left:30%;">
					 <x-circle
						:percent="this.wanchenglist[0].revisitNumber/this.mubiaolist[0].revisitNumber>1?1*100:this.wanchenglist[0].revisitNumber/this.mubiaolist[0].revisitNumber*100"
						:stroke-width="6"
							:trail-width = "6"
						trail-color = "#FFD284"
						stroke-color="#FFA21E">
						<span>{{(isNaN(this.wanchenglist[0].revisitNumber/this.mubiaolist[0].revisitNumber)?0:this.wanchenglist[0].revisitNumber/this.mubiaolist[0].revisitNumber*100).toFixed(1)}}%</span>
                     </x-circle>
					 </div>
				</div>
			</div>
			<div class="project_nr">
				<div class="project_nrs">成交客户</div>
				<div class="project_nrs"><span id="clinch" data-clinch="">{{this.mubiaolist[0].dealCustomer}}人</span></div>
				<div class="project_nrs"><span id="clinch1" data-clinchh="">{{this.wanchenglist[0].dealCustomer}}人</span></div>
				<div class="project_nrs">
					<div  style="width:50px;height:50px;position:relative;top:0.25rem;left:30%;">
					 <x-circle
						:percent="this.wanchenglist[0].dealCustomer/this.mubiaolist[0].dealCustomer>1?1*100:this.wanchenglist[0].dealCustomer/this.mubiaolist[0].dealCustomer*100"
						:stroke-width="6"
							:trail-width = "6"
						trail-color = "#FFD284"
						stroke-color="#FFA21E">
						<span>{{(isNaN(this.wanchenglist[0].dealCustomer/this.mubiaolist[0].dealCustomer)?0:this.wanchenglist[0].dealCustomer/this.mubiaolist[0].dealCustomer*100).toFixed(1)}}%</span>
                     </x-circle>
					 </div>
				</div>
			</div>
		</div>
		<a href="javascript:;" id="foot-bg" v-show="tianjiaflag" @click="ptianjia()"></a>
		 <awesome-picker
      ref="picker"
	  :anchor = "anchor"
      :data="pickerdata"
      @confirm="handleConfirm">
    </awesome-picker>
 </div>
</template>

<script>
import $ from "jquery"
import { XCircle } from 'vux'
 export default {
   data () {
     return {
	  dates:this.config.formatDate(this.config.currentTime()).split("-"),
	  year:this.config.formatDate(this.config.currentTime()).split("-")[0],	  
	month: this.config.formatDate(this.config.currentTime()).split("-")[1],
	bianyear:this.$route.query.bianyear,
	bianmonth:this.$route.query.bianmonth,
	dqyear:this.config.formatDate(this.config.currentTime()).split("-")[0],
	dqmonth:this.config.formatDate(this.config.currentTime()).split("-")[1],
	todayyear:this.config.formatDate(this.config.currentTime()).split("-")[0],
	todaymonth: this.config.formatDate(this.config.currentTime()).split("-")[1],
	mubiaolist:[],
	wanchenglist:[],	
	bianji1:false,
	nodata:false,
	conflag:true,
	tianjiaflag:false,
	 pickerValue:this.config.formatDate(this.config.currentTime()).split('-')[0],
	   pickerdata:[['2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年'],
	     ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	   ],
	   anchor:[{
		   index:11
	   }]
     }
   },
   created(){
	console.log(this.config.currentTime())
	console.log(this.bianyear)
	if(this.bianyear&&this.bianmonth){
		this.year = this.bianyear
		this.month = this.bianmonth
	}
	this.getmubiao()
   },
   methods: {
     getmubiao(){
		 
	   this.instance.$post('/rest/wx/employee/getEmpAimInfo',{
		   status: "2",
		   startDate: this.year+"" + this.month+"" + "01",
		   endDate: this.year+"" + this.month+"" + this.dateData(this.year, this.month)
	   },res => {
		   console.log(res)
		   if(res.rows.length>0){
			   
			   if(this.year==this.todayyear||this.year>this.todayyear){
				   if(this.month==this.todaymonth || this.month>this.todaymonth){
                      this.bianji1=true
				   }
			   }
			   
			     this.nodata = false
			   this.tianjiaflag = false;
			   this.conflag = true
		   }else{
			   this.nodata = true
			   this.bianji1 = false
			   if(this.year==this.todayyear||this.year>this.todayyear){
				   if(this.month==this.todaymonth || this.month>this.todaymonth){
                       this.tianjiaflag = true;
				   }
			   }
			  

			   this.conflag = false
		   }
		     this.mubiaolist = []
		  this.wanchenglist = []
		  this.mubiaolist.push(res.rows[0])
	   console.log( this.mubiaolist);
	   this.getwancheng()
      })	 
	 },
	getwancheng(){
       this.instance.$post('/rest/wx/employee/getEmpAimInfoByData',{
		   status: "2",
		   startDate: this.year+"" + this.month+"" + "01",
		   endDate: this.year+"" + this.month+"" + this.dateData(this.year, this.month)
	   },res => {
		  this.wanchenglist.push(res.rows[0]) 
	   console.log(res);
      })	
	},
	monthreduce(){
      if(this.month>1){
		this.month--;
		if(this.month<10){
				this.month="0"+this.month;
			}
		}else{
			this.year--;
			this.month="12";
		}
	   this.getmubiao()
	   if(this.year<this.todayyear){
			this.bianji1 = false; 
		 }else if(this.year==this.todayyear||this.year>this.todayyear){
            if(this.month<this.todaymonth){
				this.bianji1 = false; 
			}
		 }
	},
	monthadd(){
      if(this.month<12){
				this.month++;
				if(this.month<10){
						this.month="0"+this.month;
					}
				}else{
					this.year++;
					this.month="01";
				}
		this.getmubiao()		
	},
	dateData(year, month) {
				if(/^(1|3|5|7|8|10|12)$/.test(parseInt(month))) {
					return 31;
				} else if(/^(4|6|9|11)$/.test(parseInt(month))) {
					return 30;
				} else if(/^2$/.test(parseInt(month))) {
					if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
						return 29;
					} else {
						return 28;
					}
				}
		},
		bianji(){
			this.$router.push({
                name: "targetbianji",
                query: {
                  year: this.year,
                  month:this.month
                }
              });
		},
		ptianjia(){
			this.$router.push({
                name: "tianjiatarget",
                query: {
                  year: this.year,
                  month:this.month
                }
              });
		},
		  selectyear(){
         this.$refs.picker.show();    
  },
   handleConfirm(v){
      
		   console.log(v)
		   var year1 = v[0].value.slice(0,4)
            if(v[1].value.length==3){
              var month1 = v[1].value.slice(0,2)
			}else{
              var month1 = v[1].value.slice(0,1)
			}
		  
			 console.log(v[1].value.length)
			 if(month1.length==1){
                  this.month = 0 + month1
			 }else{
				   this.month = month1
			 }
		   this.year = year1
		 if(this.year<this.todayyear){
			this.bianji1 = false; 
		 }else if(this.year==this.todayyear||this.year>this.todayyear){
            if(this.month<this.todaymonth){
				this.bianji1 = false; 
			}
		 }
           this.getmubiao()
      }
	  },
	  
   components: {
     XCircle
   }
 }
 
</script>

<style scoped lang="less">
 img{
		vertical-align: inherit;
		}
		.weui-picker__bd {
			line-height: 1.6;
		}
		
		.personal {
			position: relative;
			width: 100%;
			height: 2.5rem;
			background-color: #4978B0;
		}
		
		.personal .month {
			text-align: center;
			color: #fff;
			margin: 0 auto;
			font-size: 0.32rem;
			padding-top: 0.75rem;
			height: 1.6rem;
		}
		
		.month .line {
			width: 0.88rem;
			height: 1px;
			background-color: #fff;
			margin: 0 auto;
			margin-top: 0.1rem;
		}
		.dataList{
			padding-bottom: 2rem;
		}
		.project_title {
			position: absolute;
			bottom: 0;
			width: 90%;
			display: flex;
			padding: 0.3rem 0;
			font-size: 0.32rem;
			background-color: #fff;
			left: 4%;
			border-radius: 5px 5px 0 0;
			padding-left: 0.2rem;
		}
		
		.project_titel {
			flex: 1;
			-webkit-flex: 1;
			    height: 0.36rem;
		}
		
		.project_titel .compile {
			color: #4978B0;
			width: 0.68rem;
			border-bottom: 1px solid #4978B0;
			padding-bottom: 0.05rem;
			text-align: center;
			float: right;
			margin-right: 0.25rem;
			// display: none;
		}
		
		.project_nr {
			display: flex;
			//padding: 0.6rem 0.2rem;
			font-size: 0.3rem;
			border-bottom: 1px solid #f7f7f7;
			margin: 0 0.2rem;
			flex-wrap: wrap;
			height:1.6rem;
			line-height:1.6rem;
		}
		
		.project_nrs {
			position: relative;
			flex: 1;
			-webkit-flex: 1;
			text-align: center;
		}
		.progress{
			position: absolute;
    font-size: 0.2rem;
    top: 0;
    width: 100%;
    text-align: center;
       left: 0.3rem;
    height: 0.3rem;
    line-height: 0.32rem;
			
		}
		.project_nr .project_nrs:first-child{
			max-width: 20%;
		}
        .project_nr .project_nrs:nth-child(2){
			min-width: 34%;
		} 
		.project_nr .project_nrs:nth-child(3){
			max-width: 30%;
		}
		.project_nr .project_nrs:last-child{
			
		}
		.data_list {
			display: none;
		}
		 
		.plan {
			font-size: 0.35rem;
			text-align: center;
			padding-top: 2.5rem;
			color: #999;
		}
		#time{
			margin-top: -0.37rem;
		}
		#left{
			    font-size: 0.42rem;
			    display: inline-block;
			        width: 1rem;
			        line-height: 0.8rem;
    height: 0.8rem;
		}
		#right{
			    font-size: 0.42rem;
			  display: inline-block;
			        width: 1rem;
    height: 0.8rem;
    line-height: 0.8rem;
		}
		#foot-bg {
			position: fixed;
			bottom: 1.3rem;
			left: 50%;
			width: 1rem;
			height: 1rem;
			background: url(../../assets/images/addmy_hy.png);
			background-size: 100%;
			transform: translate(-50%);
		}
		
		.circleChart {
			transform: rotate(-90deg);
			-webkit-transform: rotate(-90deg);
			height: 0.3rem;
			    /*right: 0.1rem;*/
			    display: none;
		}
		
		.circleChart_text {
			transform: rotate(90deg);
			-webkit-transform: rotate(90deg);
		}
		.weui-toast{
			top: 40%;
		}
		.circleChart_text{
			font-size: 0.28rem !important;
			line-height: 0.42rem !important;;
       width: 1.01rem !important;
    height: 1.03rem !important;
		}
		.circleChart_canvas{
			width: 0.9rem;
			height: 0.9rem;
		}
		.bottom_wrap{display: flex;background: #F7F7F7;height:1.1rem;width:100%;position: fixed;bottom: 0.04rem;}
		   .bottom_wrap .item{flex:1;text-align: center;}
		   .bottom_wrap .item .active{background: #DCE4F1;}
		    .bottom_wrap img{width:0.5rem;padding-top:0.1rem;}
		   .bottom_wrap p{font-size: 0.2rem;color: #686868;padding-top: 0.1rem;}
 
</style>
