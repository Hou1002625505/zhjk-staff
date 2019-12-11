<template>
 <div class='container'>
   <div class="month">
			
			<div class="months" v-for="(item,index) in yuelist" :key="index" :class="{active:yueflag==item.yue1}" @click="selectyue(item.yue1)">
				<p>{{item.yue}}月</p>
				<span class="line"></span>
				<div class="white" :class="{topflag:yueflag==item.yue1}">
					<div class="idler" v-show="yueflag==item.yue1" @click.stop="selectyear()"><span>{{pickerValue}}</span></div>
				</div>
			</div>
			
	</div>
    <div class="main">
		<div class="records">
			<div class="record_type">
				<div class="item">消费日期</div>
				<div class="item">消费时间</div>
				<div class="item">客户姓名</div>
				<div class="item kgq">项目名称</div>
				<div class="item">卡扣数</div>
				<div class="item dItem dItems">治疗小结</div>
				<div class="item">操作人</div>
				<div class="item">顾问</div>
			</div>
			<div class="data_list">
				<div class="zanwujilu" v-show="nodata">暂无数据</div>
				<div class="record_data" v-for="(item,index) in servicelist" :key="index" :class="{borderright:lengone}">
					<div class="item">{{item.consumptionDate.split(" ")[0]}}</div>
					<div class="item">{{item.consumptionDate.split(" ")[1]}}</div>
					<div class="item">{{item.customerName}}</div>
					<div class="item dItem1">{{item.itemName}}</div>
					<div class="item">{{item.consumptionNum}}次</div>
					<div class="item dItem">{{item.summary}}</div>
					<div class="item">{{item.operator}}</div>
                    
					<div class="item">{{item.adviserName}}<span class="wqr" v-show="item.adviserStatus==0">（未确认）</span></div>

				</div>								
			</div>
           
		</div>
		<div class="tip">往右滑动可查看更多消费记录</div>
	 </div>
   <awesome-picker
      ref="picker"
      :data="pickerdata"
      @confirm="handleConfirm">
    </awesome-picker>
 </div>
</template>

<script>
import $ from "jquery";
 export default {
   data () {
     return {
         customerid:this.$route.query.customerId,
       yuelist:[
           {yue:1,yue1:'01'},
           {yue:2,yue1:'02'},
           {yue:3,yue1:'03'},
           {yue:4,yue1:'04'},
           {yue:5,yue1:'05'},
           {yue:6,yue1:'06'},
           {yue:7,yue1:'07'},
           {yue:8,yue1:'08'},
            {yue:9,yue1:'09'},
           {yue:10,yue1:'10'},
           {yue:11,yue1:'11'},
           {yue:12,yue1:'12'}
       ],
       yueflag:this.config.formatDate1(this.config.currentTime()).split('-')[1],     
       positions:"",
       nodata:false,
       servicelist:[],
       lengone:false,
       pickerValue:this.config.formatDate(this.config.currentTime()).split('-')[0],
       pickerdata:[['2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008']],
     }
   },
   created(){
     this.getQyUser()
   },
   methods: {
  selectyue(yuflag){
      this.yueflag = yuflag;
      this.getjilu()
  },
  //查职位
  getQyUser(){
    this.instance.$post('/rest/wx/customer/getQyUser',{
              
           },res => {
       console.log(res);
       var js = "",
           xs = "";
        var roles =  res.rows[0].roles
        console.log(roles)
       roles.forEach( item1=>{
         console.log(item1)
        if(item1.roleName=="SPA技师"){
           
           js="SPA技师";            
        }else if(item1.roleName=="销售"){
              
                xs="销售";           
        }
      if(js=="SPA技师"&&xs==""){
				this.positions="SPA技师";
			}else if(js==""&&xs=="销售"){
				this.positions="销售";
			}else if(js=="SPA技师"&&xs=="销售"){
				this.positions="SPA技师";
			}

       }) 
        this.getjilu()            
   })
  

  },
  getjilu(){
      console.log(this.positions)
      var startTime = this.pickerValue + "-" + this.yueflag +  "-01"
       var endTime = this.pickerValue + "-" + this.yueflag + "-31"
        this.instance.$post('/rest/wx/records/getRecordByEmpPage',{
         page: 1,
		rows: 20,   
         param:{
         id:this.customerid,
        name: this.positions,
        startDate:startTime,
        endDate:endTime
        }
        },res => {
       console.log(res);
       var data = res.rows;
       	if(res.status) {
            if(data.length > 0) {
               data.forEach(item =>{
                   this.servicelist.push(item)
               })
            }else{
              this.nodata = true
            }
            if(data.length == 1){
               this.lengone = true
            }
         }
   })
  },
  selectyear(){
         this.$refs.picker.show();    
  },
   handleConfirm(v){
      
           console.log(v[0].value)
           this.pickerValue = v[0].value
           this.getjilu()  
      },
   },
   components: {
   }
 }
</script>

<style scoped lang="less">
* {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	box-sizing: border-box;
	-webkit-box-sizing: border-box
}
.borderright{border-right:1px solid #E6E6E6}
.topflag{top:-0.18rem;}
   .month,
		.data_list {
			display: -webkit-box;
			width: 100%;
			background-color: #4A77B0;
			padding-top: 0.3rem;
			overflow: hidden;
			overflow-x: auto;
		}
		
		.data_list {
			background-color: #fff;
			margin-top: -0.3rem;
			height: 8.89rem;
			/*padding-left: 2.2rem;*/
		}
		
		.records::-webkit-scrollbar,
		.month::-webkit-scrollbar,
		.data_list::-webkit-scrollbar {
			display: none;
		}
		
		.month .months {
			position: relative;
			width: 1.5rem;
			height: 2.2rem;
			text-align: center;
			color: #fff;
			font-size: 0.3rem;
			padding-top: 0.4rem;
		}
		
		.month .months.active {
			padding-top: 0;
		}
		
		.idler {
			position: absolute;
			width: 102%;
			height: 100%;
			background: url(../../assets/images/idler.png) no-repeat;
			background-size: 100%;
			top: -1px;
			z-index: 999;
			left: -1px;
		}
		
		.month .months.active .line {
			top: 0.48rem;
		}
		
		.months .line {
			position: absolute;
			width: 0.04rem;
			height: 0.2rem;
			background-color: #fff;
			top: 0.9rem;
		}
		
		.months .white {
			position: relative;
			width: 101%;
			height: 100%;
			background-color: #fff;
			margin-top: 0.49rem;
			margin-bottom: -1rem;
		}
		
		.records {
			    position: relative;
			overflow: hidden;
			border: 1px solid #E6E6E6;
		}
		
		.idler span {
			display: inline-block;
			padding-top: 0.46rem;
			font-size: 0.32rem;
		}
		
		.record_type {
			    position: absolute;
    top: 0;
			left: 0;
			z-index: 999;
		}
		
		.record_type .item {
			width: 2rem;
			height: 0.9rem;
			line-height: normal;
			background-color: #4A77B0;
			border-bottom: 1px solid #E6E6E6;
			color: #fff;
			font-family: "微软雅黑";
			font-size: 0.32rem;
			padding-top: 0.22rem;
			padding-left: 0.33rem;
		}
		.data_list .record_data{
    border-left: 1px solid #E6E6E6;
		}
	
		.record_data .item {
			width: 2.8rem;
			height: 0.9rem;
			line-height: normal;
			border-bottom: 1px solid #E6E6E6;
			/*border-right: 1px solid #E6E6E6;*/
			color: #2D2D2D;
			font-family: "微软雅黑";
			padding-top: 0.22rem;
			padding-left: 0.25rem;
			font-size: 0.3rem;
			padding-right: 0.25rem;
		}
		
		.record_type .item:last-child,
		.record_data .item:last-child {
			border-bottom: none;
		}
		
		.data_list .record_data:first-child {
			margin-left: 2rem;
		}
		
		.item2 {
			margin-top: 0.5rem !important;
		}
		
		.dItems {
			padding-top: 0.8rem !important;
		}
		
		.dItem {
			height: 2.1rem !important;
		}
		
		.dItems1 {
			padding-top: 0.4rem !important;
		}
		
		.dItem1 {
			overflow-y: auto;
			padding-bottom: 0.86rem;
		}
		.kgq{
			    height: 1.1rem !important;
			    padding-top: 0.3rem !important;
		}
		.kgq1{
			    height: 1.1rem !important;
			        padding: 0.1rem 0.25rem !important;
		}
		.tip {
			width: 100%;
			text-align: center;
			padding: 0.2rem;
			margin-top: 0.09rem;
			font-size: 0.3rem;
			    margin-bottom: 0.5rem;
		}
		
		.weui-loadmore {
			width: 2.8rem;
			font-size: 14px;
			text-align: center;
			margin: 0;
			padding-top: 3.8rem;
				/*border-right: 1px solid #E6E6E6 !important;*/
    border-left: 1px solid #E6E6E6 !important;
		}
		
		.zanwujilu {
			text-align: center;
			 padding-left:4rem;
    padding-top: 3.8rem;

		}
		.weui-loadmore_line{
			border: none;
		}
		.weui-loadmore_line .weui-loadmore__tips{
			top: 0.4rem;
		}
		.weui-picker__hd .weui-picker__action:first-child{
			color: #666;
		}
		.weui-picker__bd .weui-picker__group:first-child{
			padding-left: 7.5rem;
		}
		.weui-picker__bd .weui-picker__group .weui-picker__content{
			display: none;
		}
		.weui-picker__bd .weui-picker__group:first-child .weui-picker__content{
			display: block;
		}
		.wqr{
			font-size: 0.26rem;
		}
 
</style>
