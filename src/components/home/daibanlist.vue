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

          <!-- <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
          	<div class="data_list"></div>

         <div class="todo_t">
          	<div class="todo_ws">
          		<div class="projectName ban"><span>项目名称：<span class="xmName">hgfhfghg</span></span>
               <span class="item">提交</span>
              </div>
          		<div class="buckle">本次卡扣：654次</div>
          		<div class="projectName "><span>客户姓名：hgfhgf</span><span class="cards">卡号：<span class="cardNumber">hgghf</span></span>
          		</div>
          		<div class="buckle">消费日期：hfghfhgf
          		</div>
          		</div>
          		<div class="treatment_summary">
          			<textarea rows="2" cols="30" maxlength="30" placeholder="请填写治疗小结：" ></textarea>
          		</div>
          	</div>
          	  	 	
          	<div class="zanwujilu"><span>暂无数据</span></div> 
            <div class="btn" id="btn3" ><span>全部提交</span></div>
          	     	
        </div> -->

        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
          	<div class="data_list"></div>

         <div class="todo_t" v-for="(item,index) in nochuliList" :key="index">
          	<div class="todo_ws">
          		<div class="projectName ban"><span>项目名称：<span class="xmName">{{item.itemName}}</span></span>
               <span class="item" @click="subxiaojie(item.recordId,$event)">提交</span>
              </div>
          		<div class="buckle">本次卡扣：{{item.consumptionNum}}次</div>
          		<div class="projectName "><span>客户姓名：{{item.customerName}}</span><span class="cards">卡号：<span class="cardNumber">{{item.cardNo}}</span></span>
          		</div>
          		<div class="buckle">消费日期：{{item.consumptionDate}}
          		</div>
          		</div>
          		<div class="treatment_summary">
          			<textarea rows="2" cols="30" maxlength="30" placeholder="请填写治疗小结：" :dataid="item.recordId"></textarea>
          		</div>
          	</div>
          	  	 	
          	<div class="zanwujilu" v-show="nodata"><span>暂无数据</span></div>
            <div class="btn" id="btn3" v-show="quansure" @click="allsure()"><span>全部提交</span></div>
          	     	
        </div>

        <div id="tab2" class="weui-tab__bd-item">
        	<div class="data_list1"></div>
       	  	<div class="todo_t" v-for="(item,index) in yichuliList" :key="index">
          		<div class="todo_ws">
          		<div class="projectName ban"><span>项目名称：<span class="xmName">{{item.itemName}}</span></span>
               <span class="item" v-show="item.adviserStatus==0" @click="cexiaojie(item.recordId,$event)">撤回</span>
              </div>
          		<div class="buckle">本次卡扣：{{item.consumptionNum}}次</div>
          		<div class="projectName "><span>客户姓名：{{item.customerName}}</span><span class="cards">卡号：<span class="cardNumber">{{item.cardNo}}</span></span>
          		</div>
          		<div class="buckle">消费日期：{{item.consumptionDate}}
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
    		<div class="delete"><img @click="yinchang()" src="../../assets/images/closebtn.png"/></div>
    		<div class="tb_img"><img src="../../assets/images/tankuang.png"/><p class="tip">是否提交?</p></div>
    		<div class="selectBtn">
    			<div class="btn1" @click="yinchang()">取消</div>
    			<div class="btn2" @click="surexiaojie()">确定</div>
    		</div>
    	</div>
    </div>
 </div>
</template>

<script>
import $ from 'jquery'
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
		 dataval:[]
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
		   var data = res.rows;
		    this.nochuliList = [];
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
            this.yichuliList = [];
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
	surexiaojie(){
	  $(".msk").hide();
	   this.instance.$post('/rest/wx/records/addSummary',
	   this.dataval,res => {
	   console.log(res);
	   if(res.rel){
		   this.$vux.toast.text("提交成功");		  
		   this.getnochuli()
	   }
   })
	},
	cexiaojie(itemid,e){
		 var el = e.currentTarget
       this.instance.$post('/rest/wx/records/removeSummary',{
         id:itemid
	   },res => {
	   console.log(res);
	   if(res.rel){
		   this.$vux.toast.text("撤回成功");
		  $(el).parent().parent().parent().remove();
		  this.getnochuli()
	   }else{
		    this.$vux.toast.text("撤回失败");
	   }
   })
	},
	yinchang(){
       	$(".msk").hide();
	},
    subxiaojie(itemid,e){
       var el = e.currentTarget
	   var textareaval = $.trim($(el).parent().parent().parent().find("textarea").val());
	   if(textareaval==""){
		this.$vux.toast.text("请填写治疗小结");
		return false;
	}
	  this.dataval=[];
	  var datas={
  		 recordId:itemid,
        summary:textareaval
  	}
	this.dataval.push(datas);
	   console.log(this.dataval)
	   	$(".msk").show();
  $(".tip").text("是否提交？");
    },
	  //全部提交小结
     allsure(){
		 var _this = this;
	var isWrite=0;
   this.dataval=[];
  	$("textarea").each(function(){
  		if($(this).val()!=""){
  			isWrite=1;
  	var datas={
  		 recordId:$(this).attr("dataid"),
        summary:$(this).val()
	  }
  	_this.dataval.push(datas);
  		}
  	})
  	if(isWrite==0){
  		 this.$vux.toast.text("请填写治疗小结");
  		return false;
	  }
	  console.log(this.dataval)

      	$(".msk").show();
  $(".tip").text("是否全部提交？");

	 }
   },
   components: {
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
		padding: 0rem 0 0 0.8rem;
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
    color: #5176AB;
}
.buckle{
	padding-bottom: 0.18rem;
	   border-bottom: 1px solid #e6e6e6;
}
.treatment_summary{
	 padding: 0.16rem 0.8rem;
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
    width: 60% !important;
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
