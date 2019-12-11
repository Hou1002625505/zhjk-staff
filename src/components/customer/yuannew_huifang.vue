<template>
 <div class='container'>
<div class="addG">
<div class="weui-cells weui-cells_form">
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">客户姓名</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="name" type="text" maxlength="50" placeholder="请输入客户姓名" readonly="readonly" v-model="cusname" @click="searchname()">
    </div>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">手机号码</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="phone" type="number" v-model="cusphone">
    </div>
  </div>
   <!-- <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">回访类型</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput3" @click="suretype()" v-model="currentTags"  id="huifang_type" type="text" readonly="readonly" placeholder="请选择回访类型">
    </div>
  </div> -->
   <popup-picker :title="title1" :data="lists" v-model="value"  @on-change="onChange" :placeholder="('请选择回访类型')"></popup-picker>
   <div class="weui-cell" id="showDatePicker">
    <div class="weui-cell__hd" ><label class="weui-label">回访日期</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput4"  id="dateBirth" type="text" placeholder="请选择出生日期"  v-model="pickerValue" readonly="readonly"  @click="openPicker()">
    </div>
  </div>
   <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">备注</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="phone1" type="text" readonly="readonly">
    </div>
  </div>
  <!--备注-->
  <div class="explain">
  	<textarea rows="4" cols="50" class="textEx" placeholder="请填写备注" v-model="remaks"></textarea>
  </div>
 
</div> 
 <div class="addCustomer_finish" id="huifang_save" @click="savehuifang()"><span>保存</span></div>
</div>
<div class="seach_name_wrap" v-show="selectname">
 	<div class="qi_search_wrap">
	<div class="seach1">
		<input type="text" id="search_valbugenjin" placeholder="请输入姓名/卡号/手机号码查找会员" v-model="searchvalue">
		<span id="search_wrap" @click="searchbtn()"><em>搜索</em></span>
	</div>		       
	</div>
	 <div class="mycustomer_list">
		    	
				<div class="mycustomer_item" v-for="(item,index) in getcustomerlist" :key="index" @click="selseachname(item.fldclientid,item.fldfirstname,item.fldworkphone)">
				  <div class="mycustomer_fang">
        			<div class="yewu_ico"><img src="../../assets/images/default.png" /></div>
					<div class="yewu_text yewu_text2">
						<div class="jianshen_text fangname">{{item.fldfirstname}}</div>
						<div class=" fangtel">{{item.fldworkphone}}</div>						
					</div>
				   <div class="yewu_sanjiao item">
				   	  <div class="jianshen_text1">卡号：{{item.firstRegistCard}}</div>
					   <div class="jianshen_text1">最后到店:{{item.lastVisit?filDate(item.lastVisit): item.lastVisit }}</div>
				   </div>
				  </div>
        	    </div>
        	    
        	   
        	    
			</div>
 </div>
  <mt-datetime-picker
    ref="picker"
    type="date"
    v-model="pickDate"
    :startDate="todayDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm"
    >
  </mt-datetime-picker>
   <!-- <mt-picker :slots="slots"   :show-toolbar="true"  ref="picker1"  @change="onValuesChange" v-show="showpicer">
         <mt-button @click="quxiaoye" class="fangquxiao">取消</mt-button>
         <mt-button @click="handleCon" class="fangsure">确认</mt-button>
        
  </mt-picker> -->
 </div>
</template>

<script>
import $ from "jquery"
import { PopupPicker } from 'vux'
 export default {
   data () {
     return {
		 filid:"",
         cusname:"",
         cusphone:"",  
         pickerValue:"",//日期
           pickDate:new Date(),
         showpicer:false,
         currentTags:"",//回访类型名字
           value:[],
         title1:'回访类型',
         alists:[],
          lists:[],
        //  lists:[["客户生日-农历", "健身卡&储值卡5天到期", "客户生日-公历", "7天未到店", "30天未到店", "套餐5天后自动启用", "美容卡5天到期"]],
         slots:[
             {
                 values:[]
             }
         ],
		 remaks:"",
		 selectname:false,
		 searchvalue:"",
		  datavalue:{
        pageFlag:false,
        name:"",
		mobile:"",      
		},
    getcustomerlist:[],
    todayDate:new Date(),
     huitype:[],
         huitypeid:"",    
     }
   },
   created(){
      
      this.fangshuaixuan()
   },
   methods: {
      filDate: function (value){
    var filValue = value.split(' ');
    return filValue[0];
    },
	   searchname(){
          this.selectname = true;
	   },
	   searchbtn(){
           if(this.searchvalue==""){           
               this.$vux.toast.text("请输入姓名或手机号码", "center");
      		return false;
      	}else if(isNaN(this.searchvalue)){
      			this.datavalue.name=this.searchvalue;
      	}else{
      			
      		if(this.searchvalue.length!=11){              
               this.$vux.toast.text("输入手机号码不正确", "center");
      		return false;
      		}          
              this.datavalue.mobile=this.searchvalue;
          }
          console.log(this.datavalue)
           this.getcustomerlist = []
           this.instance.$post('/rest/wx/customerGx/findCustomerGx',{
                name:this.datavalue.name,
                mobile: this.datavalue.mobile,
                pageFlag: false,
               
               },res => {
            this.getcustomerlist=[]        
          console.log(res);
        if(res.status){
             res.rows.forEach(item=>{
             this.getcustomerlist.push(item)
         })
        }else{
          this.$vux.toast.text(res.message, "center");
        }  
        
        
       }) 
	   },
     fangshuaixuan(){
       console.log(this.slots[0].values)
       this.instance.$post('/rest/wx/dictionnary/getDictionNaryTypeList',{
           typeCode:'visitType'
       },res => {
       console.log(res.rows[0].dlist);
        var data = res.rows[0].dlist;
        var feng = this.slots[0].values
        data.forEach(item=>{
            this.huitype.push(item) 
            feng.push(item.name)
            this.alists.push(item.name)
        })
       this.lists.push(this.alists)
   })
    },
       suretype(){
       this.showpicer=true
      },
       openPicker() {
         console.log(1)
         this.$refs.picker.open();
      },
    selseachname(filid,name,phone){
	   this.filid = filid;
		this.cusname = name;
		this.cusphone = phone;
		 this.selectname = false;	   
	},
      handleConfirm(){
          console.log(this.pickDate)
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.pickDate))
           this.pickerValue = this.config.formatDate(this.pickDate)
      },
      onChange(){
         this.currentTags = this.value.join(',')
       },
      quxiaoye(){
        this.showpicer=false
      },
       onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    savehuifang(){
      console.log(this.currentTags)
       var huilist = this.huitype;
         for(var i =0;i<huilist.length;i++){
            if(this.currentTags==huilist[i].name){
               this.huitypeid = huilist[i].dictionaryId
            }
         } 
        if(this.cusname == ""){
            this.$vux.toast.text("客户名字为空", "center");
            return false;
        }
         if(this.currentTags == ""){
            this.$vux.toast.text("回访类型为空", "center");
             return false;
        }
         if(this.pickerValue == ""){
            this.$vux.toast.text("回访日期为空", "center");
             return false;
        }
         if(this.remaks == ""){
            this.$vux.toast.text("备注为空", "center");
             return false;
        }
       this.instance.$post('/rest/wx/customerGx/addVisitCustomerGx',{
           customerGxId:this.filid,
			customerGxName:this.cusname,
			customerGxMobile:this.cusphone,
			visitType:this.huitypeid,
			visitTypeName:this.currentTags,
			visitPlanDate:this.pickerValue,
			remarks:this.remaks
       },res => {
       console.log(res);
     if(res.status){
          this.$route.meta.slide=2;
          this.$router.back();
     }
   })
    }
   },
   mounted(){
      $('.painput3').css({"position":"relative","right":"14px"})
     $('.painput4').css({"position":"relative","right":"14px"})
   },
   updated(){
     $('.painput3').css({"position":"relative","right":"14px"})
     $('.painput4').css({"position":"relative","right":"14px"})
     $('.weui-cell').css({"padding":"13px 15px"})
     $('.vux-popup-mask').css({"background":"rgba(0,0,0,0.5)"})
     $('.weui-cell:before').css({"border-top":"1px solid #f7f7f7!important"})
   },
   components: {
     PopupPicker
   }
 }
 
  	
    
</script>

<style scoped lang="less">
.fangquxiao{position: absolute; left:10px;}
.picker{position: relative;background: #fff;}
    .fangsure{position: absolute; right:10px;}
    .addG{
		padding-top: 0.28rem;
		
    }
     textarea{width:94%;outline: none;font-size: 16px;border: none}
		/*.weui-loadmore{
		    margin: 10.5em auto;
	}*/
	.weui-cell:before{
		left: 0;border-top:1px solid #f7f7f7!important;
	}
	.weui-cell{
		padding: 13px 15px!important;
		
	}
	.weui-cells{
		margin-top:0;
	}
	.weui-check__label:active{
		background-color: #fff;
	}
	.weui-label{
		position: relative;
		color:#1D1D1D ;
		font-family: "微软雅黑";
	}
	.weui-input{color:#1D1D1D ;}
	.weui-cells:after, .weui-cells:before{
		position: inherit;
  }
	[class*=" weui-icon-"], [class^=weui-icon-]{
		    vertical-align: bottom;
	}
	.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{
		color: #4A77B0;
	}
	.weui-cells_form input, .weui-cells_form label[for]{
		text-align: right;
	}
	input::-webkit-input-placeholder{
		color: #919191;
		font-family: "微软雅黑";
  }
//向下箭头
// 	 .arrow:after {
//     content: " ";
//     display: inline-block;
//     height: 8px;
//     width: 8px;
//     border-width: 0 2px 2px 0;
//     border-color: #1D1D1D;
//     border-style: solid;
//     -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
//     transform: matrix(.71,.71,-.71,.71,0,0);
//     position: relative;
//     top: -2px;
//     position: absolute;
//     top: 50%;
//     margin-top: -6px;
//     right: 16px;
   
// }
.arrow:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 16px;
}
.weui-cells:before{border-top:1px solid #f7f7f7!important;}
.vux-cell-box:not(:first-child):before{
  left:0;border-top:1px solid #f7f7f7!important;
}
.weui-cells:after{border-bottom:1px solid #f7f7f7!important;}
.arrow.active:after{
	 border-width: 0 2px 2px 0;
} 
.explain{
	width: 92%;
	margin:0 4% 0.3rem;
}
.customers:after{
	content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
 .w1:after{
	content: "*";
	    position: absolute;
	        /*right: 27px;*/
    font-size: 20px;
    top: -2px;
}
.textEx{
	    padding: 0.18rem 0.2rem;
    background: #fff;
    resize: none;
    /*border: 1px solid #919191;*/
    border-radius: 3px;
    -webkit-appearance: none;
    box-shadow:0px 0px 5px 0px rgba(104,104,104,0.4);
}
textarea::-webkit-input-placeholder{
	font-family: "微软雅黑";
	color: #919191;
}

.addCustomer_finish {
    margin: 0.3rem auto 0;
    width: 92%;
    margin-left: 4%;
    height: 48px;
    line-height:48px;
    font-size: 18px;
    text-align: center;
    background: #5176AB;
    border-radius: 6px;
    color: #fff;
    font-family: "微软雅黑";
    }
    /*日期*/
   .weui-picker__action{
   	color: #919191;
   	font-family: "微软雅黑";
   }
   .weui-picker__action:last-child{
   	   	color: #5176AB;
   	font-family: "微软雅黑";
   }
   /*客户来源*/
  .shangke_type {
	background: #fff;
	position: absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	display: none;
}
.shangke_type_header {
	height:1rem;
	line-height: 1rem;
	text-align: center;
	margin: 0.5rem 0;
}
.shangke_type_header span {
	font-size:0.36rem;
	color:#2C2E34;
}
.item_box {
	text-align: center;
	    margin-top: 1.3rem;
}

.item_box .item {
	display: block;
	width: 38%;
	margin-bottom: 0.3rem;
	float: left;
	margin: 0 6%;
}
.item_box .item span {
	    display: inline-block;
    width: 80%;
    height: 0.7rem;
    line-height: 0.7rem;
    margin-bottom: 35px;
    border: 1px solid #5176AB;
    border-radius: 15px;
    font-size: 0.3rem;
    color: #2C2E34;
}
.item_box .item span.active{
	background-color:#5176AB ;
	color: #fff;
}
.zk{
	padding-left: 32px;
}
.seach_name_wrap{
	position: absolute;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
}
.qi_search_wrap{padding:0 5%;height:1rem;margin-bottom: 0.3rem;}
  .seach{width:77%;height:0.8rem;background:#fff;border-radius:20px;position: relative;float: left;padding-top:0.2rem;}
  .seach1{width:100%;height:0.8rem;background:#fff;border-radius:20px;position: relative;float: left;padding-top:0.2rem;}
  .seach input{width:76%;height:0.6rem;padding-left:0.1rem;outline:none;font-size: 0.3rem;border: 1px solid #D6D6D6;
   border-radius: 10px 0 0 10px; -webkit-appearance: none; 
  }
  .seach1 input{width:78%;height:0.6rem;padding-left:0.1rem;outline:none;font-size: 0.3rem;border: 1px solid #D6D6D6;
   border-radius: 10px 0 0 10px; -webkit-appearance: none; text-align: center;
  }
  #search_wrap{display: inline-block;width:22%; height:0.63rem;margin-top:0.2rem;font-size: 0.3rem;color:#fff;background:#4a77b0;
              position: absolute;top:0;right:0;line-height: 0.63rem;text-align: center;border-radius: 0 10px 10px 0;
  }
  #search_wrap img{width:0.4rem;height:0.4rem;padding:0.15rem 0.1rem 0 0;}
   .seach1 input::-webkit-input-placeholder{font-size: 0.24rem;color:#999;}
   .mycustomer_item {
			width: 100%;
			height: 1.2rem;
			border-bottom: 1px solid rgba(230, 230, 230, 1);
		}
		.mycustomer_fang{padding-right: 0.3rem;}
		.mycustomer_list{
			padding: 0 0 0 0.3rem;
		}
		.yewu_ico,
		.yewu_text
		{
			float: left;
		}
		
		.yewu_sanjiao {
			float: right;
		}
		
		.yewu_ico img {
			width: 0.8rem;
			height: 0.8rem;
			margin-top: 0.2rem;
			border-radius: 0.1rem;
			border: 1px solid #f8f8f8;
		}
		
		.yewu_text {
			padding-left: 0.3rem;
			width: 40%;
		}
		
		.yewu_text1 {
			height: 2.2rem;
			line-height: 2.2rem;
		}
		
		.yewu_text2 {
			padding-top: 0.2rem;
		}
		
		.yewu_sanjiao {
			padding-top: 0.2rem;
			
		}
		
		.yewu_sanjiao img {
			width: 0.21rem;
			height: 0.38rem;
		}
		
		.jianshen_text {
			font-size: 0.32rem;
			color: #1D1D1D;
			width:100%;
			word-break:keep-all;/* 不换行 */  
		    whitewhite-space:nowrap;/* 不换行 */  
		    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */  
		    text-overflow:ellipsis;
		}
		.fangtel{
			font-size: 0.24rem!important;
			color: #1D1D1D!important;
		}
		.jianshen_text1 {
			font-size: 0.26rem;
			color: #989898;
			
		}
		.item1{
			color: #989898 !important;
		}
</style>
