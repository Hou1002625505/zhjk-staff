<template>
 <div class='container'>
    <div class="addG">
		<div class="weui-cells weui-cells_form">
  <div class="weui-cell ">
    <div class="weui-cell__hd"><label class="weui-label w1">客户姓名</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="name" type="text" maxlength="50" onfocus="this.blur()" v-model="cusname" readonly="readonly">
    </div>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label w1">手机号码</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="phone" type="number"  v-model="custel" readonly="readonly" onfocus="this.blur()">
    </div>
  </div>
   <div class="weui-cell" style="padding: 13.5px 15px;">
    <div class="weui-cell__hd"><label class="weui-label w1">性<span class="zk">别</span></label></div>
   <div class="weui-cell__hd" style="position: absolute;right: 15px;color: #919191;font-family: '微软雅黑';">
    <div class="weui-cells weui-cells_checkbox sex" style=" margin-top: 0;float: left; ">
      <label class="weui-cell weui-check__label" style="padding: 0;margin-right: 10px;" >
     <div class="weui-cell__hd">
      <input type="radio" class="weui-check" name="checkbox1" maxlength="500" value="1" v-model="checksex1" disabled="disabled">
      <i class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd">
      <p>男</p>
    </div>
  </label>
  
		 		</div>
		 		 <div class="weui-cells weui-cells_checkbox" style=" margin-top: 0;">
      <label class="weui-cell weui-check__label" style="padding: 0;" >
     <div class="weui-cell__hd">
      <input type="radio" class="weui-check" name="checkbox1" value="2" v-model="checksex1" disabled="disabled">
      <i class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd">
      <p>女</p>
    </div>
  </label>
  
		 		</div>
    </div> 
  </div>
    <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label w1">出生日期</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="phone" type="text" onfocus="this.blur()"  v-model="cusbir" readonly="readonly">
    </div>
  </div>

    <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label w1">客户来源</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="phone" type="text" onfocus="this.blur()"  v-model="cuslaiyuan" readonly="readonly">
    </div>
  </div>
  <!--其他说明-->
  <div class="explain">
  	<textarea rows="8" cols="50" class="textEx" placeholder="其他说明" onfocus="this.blur()" v-model="shuoming" readonly="readonly"></textarea>
  </div>
</div> 
 <!-- <div class="addCustomer_finish" @click="tianjia_sure()"><span>添加客户</span></div> -->
 </div>
 </div>
</template>

<script>
import { Datetime } from 'vux'
 export default {
   data () {
     return {
         filid:this.$route.query.filid,
        cusname:"",
        custel:"",
        cusbir:"",
        cuslaiyuan:"",  
        checksex1:'',
        shuoming:""
      
     }
   },
   created(){
     
      this.getadddetail()
   },
   methods: {
       getadddetail(){
          this.instance.$post('rest/wx/employee/getAddCustomerListByEmp',{id:this.filid},res => {
       console.log(res);
      this.cusname = res.rows[0].name;
       this.custel = res.rows[0].mobile;
         this.checksex1 = res.rows[0].gxSex;
        this.cuslaiyuan = res.rows[0].source;
        this.shuoming = res.rows[0].adress;
        this.cusbir = res.rows[0].year+'-'+res.rows[0].month+'-'+res.rows[0].day
     })
       }
 
   },
   updated(){
     $('.painput5').css({"position":"relative","right":"18px"})
     $('.painput6').css({"position":"relative","right":"18px"})
   },
   components: {
      Datetime
   }
 }
</script>

<style scoped lang="less">
 .addG{
		padding-top: 0.28rem;
	}
		/*.weui-loadmore{
		    margin: 10.5em auto;
  }*/
  .weui-cell__bd{
    position:relative;
  }
  .fang{width:100%;height:100%;position: absolute;top:0;left: 0;opacity: 0;}
	.weui-cell:before{
    left: 0;
   
	}
	.weui-cell{
		padding: 13px 15px;
		
	}
	.weui-cells{
		margin-top:0;
	}
	.weui-check__label:active{
		background-color: #fff;
	}
	.weui-label{
		position: relative;
		color:#2C2E34 ;
		font-family: "微软雅黑";
	}
	.weui-cells:after{
		position: inherit;
	}
	.weui-cell:before,.weui-cells:before{
	   border-top:1px solid #f7f7f7!important;
		//border-top:none;
	}
	.customers:after{
		border:none !important;
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
	 .arrow:after {
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 4px;
}
.explain{
	width: 92%;
	margin: 0.3rem 4%;
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
   box-shadow: 0px 0px 5px 0px rgba(104,104,104,0.4) inset;
}
textarea::-webkit-input-placeholder{
	font-family: "微软雅黑";
	color: #919191;
}
 textarea{width:94%;outline: none;font-size: 16px;border: none;-webkit-appearance:none;}
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
  z-index: 9999;
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
    width: 90%;
    height: 0.66rem;
    line-height: 0.66rem;
    margin-bottom: 35px;
    border: 1px solid #5176AB;
    border-radius: 5px;
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
.line{
	border-bottom: 1px solid #f7f7f7;
}
 
</style>
