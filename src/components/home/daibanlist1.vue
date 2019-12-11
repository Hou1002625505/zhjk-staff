<template>
 <div class='container'>
     <div class="weui-tab">
      <div class="weui-navbar">
        <a class="weui-navbar__item weui-bar__item--on" href="#tab1">
        待处理
        </a>
        <a class="weui-navbar__item" href="#tab2">
     已处理
        </a>
      </div>
      <div class="weui-tab__bd">
        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
          	<div class="data_list"></div>

		   
          <!-- <div class="todo_t cartBox">
          		<div class="todo_ws">
          		<div class="projectName ban"><span>项目名称：<span class="xmName">65464564</span></span></div>
          		<div class="buckle">本次卡扣：5465次</div>
          		<div class="projectName "><span>客户姓名：gfdgfd</span><span class="cards">卡号：<span class="cardNumber">hgfhgfhf</span></span>
          		</div>
          		<div class="buckle">消费日期：hgfhgfhgf<br><span class="nxm">操作人：hgffhgfh</span>
          		</div>
          		</div>
          		<div class="treatment_summary">
          			<div class="briefSummary">治疗小结：hgfgfhgf</div>
          		</div>
          	<div class="mui-input-row mui-checkbox mui-left" style="height: 1rem;">
						<label style="color: #666;" class="xzSelect"></label>
						<input name="checkbox"  id="check" type="checkbox"  class="son_check">
					</div>
          	</div>
             <div class="btn" >
          	     		<div class="mui-input-row mui-checkbox mui-left" style="height: 1rem;top: 0.08rem;" >
						<label style="font-size:0.32rem;" class="xzSelect">全选</label>
						<input name="checkbox" value="" id="check" type="checkbox" class="whole_check" >
					</div>
          	     		<span id="btn3">全部确认</span>
          	</div> -->



          <div class="todo_t cartBox" v-for="(item,index) in nochuliList" :key="index">
          		<div class="todo_ws">
          		<div class="projectName ban"><span>项目名称：<span class="xmName">{{item.itemName}}</span></span></div>
          		<div class="buckle">本次卡扣：{{item.consumptionNum}}次</div>
          		<div class="projectName "><span>客户姓名：{{item.customerName}}</span><span class="cards">卡号：<span class="cardNumber">{{item.cardNo}}</span></span>
          		</div>
          		<div class="buckle">消费日期：{{item.consumptionDate}}<br><span class="nxm">操作人：{{item.operator}}</span>
          		</div>
          		</div>
          		<div class="treatment_summary">
          			<div class="briefSummary">治疗小结：{{item.summary}}</div>
          		</div>
          	<div class="mui-input-row mui-checkbox mui-left" style="height: 1rem;">
						<label style="color: #666;" class="xzSelect"></label>
						<input name="checkbox" v-model="checklist" :value="item.recordId" id="check" type="checkbox"  class="son_check">
					</div>
          	</div>
          	  	 	
          	<div class="zanwujilu" v-show="nodata"><span>暂无数据</span></div>
          	     	<div class="btn" v-show="quansure">
          	     		<div class="mui-input-row mui-checkbox mui-left" style="height: 1rem;top: 0.08rem;" @click="quanxuan()">
						<label style="font-size:0.32rem;" class="xzSelect">全选</label>
						<input name="checkbox" value="" id="check" type="checkbox" class="whole_check" :checked="this.allid.length==this.checklist.length">
					</div>
          	     		<span id="btn3" @click="allsure()">全部确认</span>
          	     	</div>
        </div>

        <div id="tab2" class="weui-tab__bd-item">
        	<div class="data_list1"></div>
       	    <div class="todo_t"  v-for="(item,index) in yichuliList" :key="index">
          		<div class="todo_ws">
          		<div class="projectName ban"><span>项目名称：<span class="xmName">{{item.itemName}}</span></span></div>
          		<div class="buckle">本次卡扣：{{item.consumptionNum}}次</div>
          		<div class="projectName "><span>客户姓名：{{item.customerName}}</span><span class="cards">卡号：<span class="cardNumber">{{item.cardNo}}</span></span>
          		</div>
          		<div class="buckle">消费日期：{{item.consumptionDate}}<br><span class="nxm">操作人：{{item.operator}}</span>
          		</div>
          		</div>
          		<div class="treatment_summary">
          			<div class="briefSummary">治疗小结：{{item.summary}}</div>
          		</div>
          	</div>
          	  	 
          	<div class="zanwujilu"  v-show="nodata1"><span>暂无数据</span></div>
        </div>
      </div>
    </div>
    <div class="msk">
    	<div class="tk_BK">
    		<div class="delete"><img src="../../assets/images/closebtn.png"/></div>
    		<div class="tb_img"><img src="../../assets/images/tankuang.png"/><p class="tip"></p></div>
    		<div class="selectBtn">
    			<div class="btn1">取消</div>
    			<div class="btn2">确定</div>
    		</div>
    	</div>
    </div>
 </div>
</template>

<script>
import { CheckIcon } from 'vux'
 export default {
   data () {
     return {
		name:this.$route.query.name,
		allid:[1,2],
	   checklist:[],
	   nochuliList:[],
	   nodata:false,
		nodata1:false,
		quansure:false,
		 yichuliList:[],
     }
   },
   created(){
     this.getnochuli()
   },
   methods: {
	  getnochuli(){
           this.instance.$post('/rest/wx/records/getConsumptionRecordListPage',{
			   page:1,
				rows:20,
				param:{
					name:this.name,
					status:0
				}
		   },res => {
	   console.log(res);
	   if(res.status){
		   this.nochuliList = [];
		   var data = res.rows;
		   if(data.length>0){
              data.forEach(item => {
				  this.nochuliList.push(item)
				  this.allid.push(item.recordId)
			  });
			  this.quansure = true;
		   }else{
			  this.nodata = true;
			   this.quansure = false;
		   }
	   }
	   this.getyichuli()
         })
	  },
	  getyichuli(){
         this.instance.$post('/rest/wx/records/getConsumptionRecordListPage',{
			   page:1,
				rows:20,
				param:{
					name:this.name,
					status:1
				}
		   },res => {
	   console.log(res);
	   if(res.status){
		   this.yichuliList = []
		   var data = res.rows;
		   if(data.length>0){
              data.forEach(item => {
				  this.yichuliList.push(item)
			  });
			
		   }else{
			  this.nodata1 = true;
			  
		   }
	   }
         })
	  },
	  //顾问确认小结
     allsure(){
		  console.log(this.checklist)
		  if(this.checklist.length==0){
			  this.$vux.toast.text("请选择一项");
			  return false;
		  }
		    var recordid = this.checklist.join(',')
		    this.instance.$get('/rest/wx/records/updAdviser',{params: { 
               recordId:recordid
			 }},res => {
	   console.log(res);
				if(res.rel){
					this.$vux.toast.text("确认成功");					
                    this.getnochuli()
				}else{
					this.$vux.toast.text("确认失败");
				}
               })
	 },
	 quanxuan(){
        this.checklist=this.allid
	 }
   },
   components: {
    CheckIcon
   }
 }
</script>
 <style scoped src="../../assets/css/lib/mui.min.css"></style>
<style scoped lang="less">
  .msk{
		position: absolute;
		background:rgba(0,0,0,0.8);
		width: 100%;
		height: 100%;
		z-index: 9999;
		top: 0;
		display: none;
	}
	.tk_BK{
		position: absolute;
		width: 76%;
		margin-left: 12%;
		text-align: right;
		top: 50%;
		transform: translateY(-60%);

	}
	.tk_BK .delete img{
		width: 0.62rem;
		margin-bottom: 0.35rem;
	}
	.tk_BK .tb_img img{
		width: 100%;
	}
	.tb_img p{
		color: #2D2D2D;
		margin-top: -0.8rem;
		text-align: center;
		font-size: 0.36rem;
	}
	.selectBtn{
		width: 100%;
		margin-top: 0.8rem;
	}
	.selectBtn .btn1,.selectBtn .btn2{
		width: 42%;
		height: 0.8rem;
		line-height: 0.78rem;
		text-align: center;
		background-color: #FFFFFF;
		color: #5176AB;
		border-radius: 25px;
		font-size: 0.38rem;
		 -webkit-box-shadow:0.5px 3px 0px RGBA(255, 128, 194, 0.6);
		 float: left;
	}
	.selectBtn .btn1{
		margin-right: 16%;
	}
	.weui-navbar__item.weui-bar__item--on {
    color: #5176AB;
        border-color: #5176AB;
    background-color: #fff;
}
.weui-navbar{
	background-color: #fff;
}
.weui-navbar__item{
	
	 border-bottom: 2px solid #f7f7f7;
}
.weui-navbar__item:after{
	border-right: 0;
	   
}
.weui-navbar:after{
	 border-bottom: 3px solid #CBCBCB;
	 display: none;
}
.weui-navbar__item {
    color: #989898;
        font-size: 0.32rem;
        padding: 0.15rem 0;
}
.weui-navbar+.weui-tab__bd {
    padding-top: 0.82rem;
}
.weui-tab__bd .weui-tab__bd-item.weui-tab__bd-item--active {
    display: block;
}
.weui-tab__bd .weui-tab__bd-item {
     height: inherit; 
     overflow: inherit; 
    padding-bottom: 0.9rem;
}
.weui-navbar{
	position: fixed;
}
.weui-tab__bd .weui-tab__bd-item {
    display: none;
    height: 100%;
    overflow: auto;
}
.weui-tab__bd {
    box-sizing: border-box;
    height: 100%;
}
	.swiper-container{
		    margin-top: 0.15rem;
		    overflow: inherit;
	}
	.slidescroll{
		margin-top: -0.35rem;
	}
	.todo_ws{
		padding: 0rem 0 0 1rem;
	}
	.todo_t{
		position: relative;
		width: 100%;
			font-size: 0.3rem;
	color:#989898;
	border-bottom:10px solid #F0F0F0;
	}
.projectName{
	display: flex;
	justify-content: space-between;
	padding: 0.16rem 0;
/*	padding-right: 0.5rem;*/
	padding-bottom: 0.06rem;
}
.todo_ws .projectName:first-child{
	padding-right: 0.2rem;
    padding-bottom: 0rem;
}
.projectName span.item{
	border: 1px solid #5176AB;
	border-radius: 5px;
    padding: 0.02rem 0.25rem;
    color: #fff;
}
.buckle{
	padding-bottom: 0.18rem;
	   border-bottom: 1px solid #e6e6e6;
}
.treatment_summary{
	 padding: 0.16rem 0.98rem;
    padding-bottom: 0.16rem;
    color: #333;
}
.treatment_summary textarea{
	resize: none;
		border: none;
		width: 100%;
		padding: 0.2rem;
		line-height: 0.4rem;
		font-size: 0.28rem;
		-webkit-box-shadow: 0px 0px 2px 2px rgba(108, 173, 255, 0.3) inset;

}
textarea{
	  border-radius:1px;
  -webkit-appearance: none;
}
textarea::-webkit-input-placeholder{
	color: #333;
}
.btn{
    width: 100%;
    text-align: right;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
    font-size: 0.3rem;
    height: 0.9rem;
    /* padding-top: 0.3rem; */
    border-top: 1px solid #e6e6e6;
    padding-top: 0.12rem;
}
.btn span{
color: #fff;
    padding: 0.08rem 0.15rem;
    background-color: #5176AB;
    border-radius: 5px;
    margin-right: 0.2rem;
    display: inline-block;
}
.todo_ws .item2{
	padding-bottom: 0.19rem !important;
}
.projectName .xmName{
    display: inline-block;
    width: 70% !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    padding-top: 0.01rem;
}
.ban span:first-child{
	width:80%;
}
.cards{
	width: 50%;
}
.projectName .cardNumber{
	    display: inline-block;
    width: 70% !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    padding-top: 0.01rem;
}

.mui-checkbox input[type=checkbox]:checked:before, .mui-radio input[type=radio]:checked:before{
	    color: #5176AB;
}
.mui-checkbox input[type=checkbox]:before, .mui-radio input[type=radio]:before{
	font-size: 0.58rem;
}
.mui-input-row{
	position: absolute;
    top: 0.3rem;
    left: 0.12rem;
}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{
	left: inherit;
}
.nxm{
	display: inline-block;
	margin-top: 0.08rem;
}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{
	padding-left: 42px;
	color: #333;
}
.zanwujilu{position: fixed;top:0;left:0;bottom:0;right:0;background: #fff;text-align: center;padding-top: 4rem;
	}
 


</style>
