<template>
 <div class='container'>
      <div class="addG">
		<div class="weui-cells weui-cells_form">
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">客户姓名</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="name" type="text" maxlength="50" v-model="customerGxName" readonly="readonly">
    </div>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">手机号码</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="phone" type="text" readonly="readonly"  v-model="customerGxMobile">
    </div>
  </div>
   <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">回访类型</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="huileixing" type="text" readonly="readonly"  v-model="visitTypeName">
    </div>
  </div>
   <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">回访日期</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="huiriqi" type="text" readonly="readonly"  v-model="visitPlanDate">
    </div>
  </div>
   <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">备注</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="bei" type="text" readonly="readonly">
    </div>
  </div>
  <!--备注-->
  <div class="explain">
  	<textarea rows="4" cols="50" class="textEx"  id="beizhu" readonly="readonly"  v-model="remarks"></textarea>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">回访结果</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" id="huifangji" type="text" readonly="readonly">
    </div>
  </div>
  <!--回访结果-->
  <div class="explain">
  	<textarea rows="4" cols="50" class="textEx" id="huifangjieguo" placeholder="请填写回访结果" v-model="huifangjieguo"></textarea>
  </div>
</div> 
 <div class="addCustomer_finish" id="dengji_save" @click="jieguosave"><span>保存</span></div>
</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
          kedaihuifang:this.$route.query.kedaihuifang,
          visitId:this.$route.query.visitId,
        customerGxName:this.$route.query.customerGxName,
        customerGxMobile:this.$route.query.customerGxMobile,
        visitPlanDate:this.filDate(this.$route.query.visitPlanDate),
        visitTypeName:this.$route.query.visitTypeName,
        remarks:this.$route.query.remarks,
        huifangjieguo:"",
        filid:this.$route.query.filid
     }
   },
   created(){

   },
   methods: {
        filDate: function (value){
    var filValue = value.split(' ');
    return filValue[0];
},
jieguosave(rate){
 if(this.huifangjieguo != ""){
      this.instance.$post('/rest/wx/customerGx/updateVisitCustomerGx ',{
             visitId:this.visitId,
            status:1,
            visitResult:this.huifangjieguo
         },res => {
        console.log(JSON.stringify(res));
          if(res.status){
            console.log(this.kedaihuifang)
                if(this.kedaihuifang){

                    this.$router.replace({
                      name: "kehuilishi",
                      query: {
                      yuanfangflag:true,
                      filid:this.filid
                      }
                   });
                   

                }else{
                    this.$router.replace({
                      name: "yuanlishi",
                      query: {
                       yuanfangflag:true
                      }
                   });
                     

                }
              
                
          }
         this.$refs.loadmore.onTopLoaded()        
             
    },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
 }else{
      this.$vux.toast.text("请填写回访结果", "center");
 }
},
   },
   components: {
   }
 }
</script>

<style scoped lang="less">
   .addG{
		padding-top: 0.28rem;
		
    }
    textarea{width:94%;outline: none;font-size: 16px;border: none}
		/*.weui-loadmore{
		    margin: 10.5em auto;
	}*/
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
    right: 16px;
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
</style>
