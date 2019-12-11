<template>
 <div class='container'>
   <div class="indiv_title"><span id="seletTime">{{this.year}}年{{this.month}}月</span>目标编辑</div>
		<!-- <div class="menu">
			<div class="subitem">
				<input type="number" name="" id="sell" v-model="salePerformance" :placeholder="this.targetlist[0].salePerformance"  oninput="if(value.length>9)value=value.slice(0,9)"/> 销售业绩
				<div class="rmb">元</div>
				<div class="distance">
					<img src="../../assets/images/my_menu_more@2x.png" alt="">
				</div>
			</div>
			<div class="subitem">
				<input type="number" name="" id="melting" v-model="consumePerformance" :placeholder="this.targetlist[0].consumePerformance"   oninput="if(value.length>9)value=value.slice(0,9)"/> 消耗业绩
				<div class="rmb">元</div>
			<div class="distance">
					<img src="../../assets/images/my_menu_more@2x.png" alt="">
				</div>
			</div>
			<div class="subitem">
				<input type="number" name="" id="add" v-model="customerNumber" :placeholder="this.targetlist[0].customerNumber"  oninput="if(value.length>9)value=value.slice(0,9)"/> 新增客户
					<div class="rmb">人</div>
				<div class="distance">
					<img src="../../assets/images/my_menu_more@2x.png" alt="">
				</div>
			</div>
			<div class="subitem">
				<input type="number" name="" id="repeated" v-model="revisitNumber" :placeholder="this.targetlist[0].revisitNumber"  oninput="if(value.length>9)value=value.slice(0,9)"/> 回访人数
					<div class="rmb">人</div>
				<div class="distance">
					<img src="../../assets/images/my_menu_more@2x.png" alt="">
				</div>
			</div>
			<div class="subitem">
				<input type="number" name="" id="make" v-model="dealCustomer" :placeholder="this.targetlist[0].dealCustomer"  oninput="if(value.length>9)value=value.slice(0,9)"/> 成交客户
					<div class="rmb">人</div>
				<div class="distance">
					<img src="../../assets/images/my_menu_more@2x.png" alt="">
				</div>
			</div>
		</div> -->
         
    <div class="addG">
		<div class="weui-cells weui-cells_form">
  
        <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">销售业绩</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="sell" v-model="salePerformance"   oninput="if(value.length>9)value=value.slice(0,9)"/>
                 <span class="yuan">元</span> 
            </div>
        </div>
        <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">消耗业绩</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="melting" v-model="consumePerformance"   oninput="if(value.length>9)value=value.slice(0,9)"/>
                   <span class="yuan">元</span> 
            </div>
        </div>
          <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">新增客户</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="add" v-model="customerNumber"   oninput="if(value.length>9)value=value.slice(0,9)"/>
                  <span class="yuan">人</span> 
            </div>
        </div>
          <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">回访人数</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="repeated" v-model="revisitNumber"   oninput="if(value.length>9)value=value.slice(0,9)"/>
                   <span class="yuan">人</span> 
            </div>
        </div>
         <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">成交客户</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="make" v-model="dealCustomer"  oninput="if(value.length>9)value=value.slice(0,9)"/>
                  <span class="yuan">人</span> 
            </div>
        </div>
        </div> 
 
 </div>



		<div class="save" @click="targetsave()">保存</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      year:this.$route.query.year,
      month:this.$route.query.month,
      targetlist:[],
      salePerformance:"",
      consumePerformance:"",
      customerNumber:"",
      revisitNumber:"",
      dealCustomer:""
     }
   },
   created(){
    
   },
   methods: {
  
        targetsave(){
                var sell = $.trim($("#sell").val());
				var melting = $.trim($("#melting"));
				var add = $.trim($("#add").val());
				var repeated = $.trim($("#repeated").val());
				var make = $.trim($("#make").val());
            
                if(sell==""){
					 this.$vux.toast.text("请输入销售业绩");
					return;
				}else if(!/^([0-9]*[.0-9])$/.test(add)) {
							 this.$vux.toast.text("新增客户必须是整数");
							return; 
				}
				else if(!/^([0-9]*[.0-9])$/.test(repeated)) {
							 this.$vux.toast.text("回访人数必须是整数");
							return; 
				}
				else if(!/^([0-9]*[.0-9])$/.test(make)) {
							 this.$vux.toast.text("成交客户必须是整数");
							return; 
				}
             this.instance.$post('/rest/wx/employee/addEmpAim',{
                            salePerformance:this.salePerformance,
							consumePerformance:this.consumePerformance,
							customerNumber:this.customerNumber,
							revisitNumber:this.revisitNumber,
                            dealCustomer:this.dealCustomer,
                            // salePerformance:sell,
							// consumePerformance:melting,
							// customerNumber:add,
							// revisitNumber:repeated,
                            // dealCustomer:make,
                            aimLimitType:2,
							startDate: this.year+"" + this.month+"" + "01",
		                    endDate: this.year+"" + this.month+"" + this.dateData(this.year, this.month)
             },res => {
           console.log(res);
           if(res.rel){
             this.$vux.toast.text(res.msg)
             this.$router.push({
                name: "parsontarget",
                query:{
				  bianyear:this.year,
				  bianmonth:this.month
				}
              });
           }else{
                this.$vux.toast.text(res.msg)
           }
          })
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
   },
    updated(){
     $('.painput').css({"position":"relative","right":"34px"})
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
.yuan{
    position: absolute;
    top:50%;
    right: 30px;
    margin-top:-12px;
    color: #999999;
}
.save {
			width: 92%;
			padding: 0.2rem 0;
			border-radius: 5px;
			font-size: 0.38rem;
			margin: 0 auto;
			background-color: #4978B0;
			color: #fff;
			text-align: center;
			margin-top: 0.9rem;
        }
        .indiv_title {
			padding: 0.3rem 0;
			text-align: center;
			font-size: 0.30rem;
			border-bottom: 1px solid #f7f7f7;
		}
.addG{
		// padding-top: 0.28rem;
	}
		/*.weui-loadmore{
		    margin: 10.5em auto;
	}*/
	.weui-cell:before{
		left: 0;
	}
	.weui-cell{
		padding: 14px 15px;
		
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
	
		border-top:none;
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
    right: 16px;
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
 textarea{width:94%;outline: none;font-size: 16px;border: none;}
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
	border-bottom:  1px solid #f7f7f7;
}
 
</style>
