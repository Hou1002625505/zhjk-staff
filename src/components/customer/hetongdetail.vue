<template>
 <div class='container'>
   <div class="goumai_hetong_wrap">
			<p class="title">购买合同</p>
			<div class="jiben_info">
				<p class="title_text">一、基本信息</p>
				 <div class="qi_hui_fang_item">
				  
				      <div class="qi_hui_data tongbianhao" >
				    	<div class="mingcheng1">合同编号：</div>
				    	<div class="fangvalue1" id="hetongbianhao">{{customerStatement[0].statementCode}}</div>
				    </div>
				     <div class="qi_hui_data">
				    	<div class="mingcheng1">客户姓名：</div>
				    	<div class="fangvalue1" id="name">{{customerStatement[0].customerGxName}}</div>
				    </div>
				     <div class="qi_hui_data">
				    	<div class="mingcheng1">性<em style="opacity: 0;">空格</em>别：</div>
				    	<div class="fangvalue1" id="sex">{{customerStatement[0].customerGxSex==1?'男':customerStatement[0].customerGxSex==0 || customerStatement[0].customerGxSex==2?'女':'未知'}}</div>
				    </div>
				    <div class="qi_hui_data" style="padding-bottom: 0.2rem;">
				    	<div class="mingcheng1">客户电话：</div>
				    	<div class="fangvalue1" id="mobile">{{customerStatement[0].customerGxMobile}}</div>
				    </div>
			    </div>
			</div>
			<div class="chanpin_detail">
				<p class="title_text">二、产品明细</p>
				<div class="product_wrap">
					
					<div class="product_item_wrap" v-for="(item1,index) in products" :key="index">

					  <div class="product_item_padding">
					  <div class="product_item">
					    <div class="name">产品{{Alaba(index+1)}}</div>
					   
				     </div>
					  <div class="product_item">
					    <div class="name">*产品名称：</div>
					    <div class="value"><input type="text" class="pro_name" placeholder="请填写产品名称" :value="item1.productName"/></div>
				     </div>
				     <div class="product_item">
					    <div class="name">*产品金额：</div>
					    <div class="value"><input type="number"  class="pro_jine" placeholder="请填写产品金额"  :value="item1.price"/></div>
				     </div>
				     <div class="product_item">
					    <div class="name">产品说明：</div>
					    <div class="value"><input type="text"  class="pro_shuoming"  placeholder="请填写产品说明" :value="item1.remarks"/></div>
				     </div>
				     </div>

				   </div>
				   
				   
				</div>
				 <div class="explain">
				  	<textarea rows="4" id="fangtext" cols="50" class="textEx" placeholder="如有特殊约定,请在此填写." :value="customerStatement[0].remarks"></textarea>
				  </div>
			</div>
			<div class="total_money">
				<p class="title_text">三、合计</p>
				<div class="jine">
					 <div class="qi_hui_data">
				    	<div class="mingcheng1">合计金额：</div>
				    	<div class="fangvalue1" id="totalpay">{{methodss[0].payAmount}}元</div>
				    </div>
				     <div class="qi_hui_data">
				    	<div class="mingcheng1">购买分店：</div>
				    	<div class="fangvalue1" id="mendian">{{customerStatement[0].hospname}}</div>
				    </div>
				     <div class="qi_hui_data payme_wrap">
				    	<div class="paymethods">支付方式：</div>
				    	<div class="fangcheng">
				    		<div class="pay_fangshi" v-for="(item1,index) in methodss" :key="index"><span>{{item1.methodName}}</span></div>
				    	</div>
				    </div>
				</div>
			</div>
			<div class="tishi_text">
				<p>温馨提示：</p>
				<p style="text-indent: 2em;">为保障您的合法权益，请您确认合同内容是否完整清晰</p>
				<p>销售人员无额外承诺，您已付款没拿卡的，请到前台办理欠</p>
				<p>货登记。</p>
			</div>
			<p class="gouxuan">
				<span class="check_wrap">
			              <input type="checkbox"  name="rufangjian"/>
			              <span class="xuanzhong"></span>
			              <span class="noxuanzhong"></span>
			    </span>
			    <label @click="goumaixie()">本人已阅读并同意购买协议</label>
			</p>
			<div class="qianming_wrap">
				<div class="qianming">
					<div class="qianname"><span>客户签名：</span><img id="pictrue" :src="ImgUrl+customerStatement[0].customerSign" :style="{width:80+'px',height:70+'px'}"/></div>
					<div class="qiantime"><span>合同日期：</span><input type="text" id="qiandate"  readonly="readonly" :value="filDate(customerStatement[0].createDate)"></div>
			    </div>
			</div>
		</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       tid:this.$route.query.tid,
       customerStatement:[],
       methodss:[],
       products:[],
       ImgUrl:this.config.service_ip+'/images/statementSign/'
     }
   },
   created(){
       this.gethtvalue()
   },
   methods: {
	    goumaixie(){
          this.$router.push({
                name: "dianzihetxieyi",
                query: {
                  
                
                }
              });
	   },
        filDate: function (value){
    var filValue = value.split(' ');
    return filValue[0];
},
     gethtvalue(){
        this.instance.$post('/rest/wx/customerGx/getCustomerStatementList',{
           tid:this.tid
        },res => {
       console.log(res);
        this.customerStatement.push(res.rows[0].customerStatement)
         this.methodss=res.rows[0].methods
        this.products=res.rows[0].products
       console.log( this.methodss)
      })
    
     },
      Alaba(Num) {
    for (var i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "")//替换Num中的“,”
        Num = Num.replace(" ", "")//替换Num中的空格
    }    
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
  var  part = String(Num).split(".");
   var newchar = "";
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            //alert("位数过大，无法计算");
            return "";
        }//若数量超过拾亿单位，提示
      var  tmpnewchar = ""
       var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":  tmpnewchar = "零" + tmpnewchar;break;
            case "1": tmpnewchar = "一" + tmpnewchar; break;
            case "2": tmpnewchar = "二" + tmpnewchar; break;
            case "3": tmpnewchar = "三" + tmpnewchar; break;
            case "4": tmpnewchar = "四" + tmpnewchar; break;
            case "5": tmpnewchar = "五" + tmpnewchar; break;
            case "6": tmpnewchar = "六" + tmpnewchar; break;
            case "7": tmpnewchar = "七" + tmpnewchar; break;
            case "8": tmpnewchar = "八" + tmpnewchar; break;
            case "9": tmpnewchar = "九" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
            case 0: tmpnewchar = tmpnewchar; break;
            case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 4: tmpnewchar = tmpnewchar + "万"; break;
            case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 8: tmpnewchar = tmpnewchar + "亿"; break;
            case 9: tmpnewchar = tmpnewchar + "十"; break;
        }
        newchar = tmpnewchar + newchar;
    }   
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");      
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") == 0) {
        newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") == newchar.length - 1) {
        newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
}
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
 .qi_hui_fang_item{
				margin:0 auto ;
				
			/*	height:2.5rem;*/				
			}			
			.qi_hui_data{padding-top:0.12rem;}
			.qi_hui_data .mingcheng{display: inline-block;}
			.mingcheng img{width:0.18rem;height:0.3rem;}
			.mingcheng span{font-size: 0.3rem;color:#1D1D1D;}
			.qi_hui_data .fangvalue{display: inline-block;}
			.fangvalue img{width:0.18rem;height:0.3rem;}
			.fangvalue a{font-size: 0.3rem;color:#4978B0;text-decoration: underline;}
			
			.mingcheng1{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
			.fangvalue1{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
			.payme_wrap{height:1.5rem;}
			.paymethods{float: left;height:1.5rem;font-size: 0.3rem;color:#1D1D1D;}
			.fangcheng{}
	        .title{background: #fff;padding-top:0.3rem;text-align: center;font-size: 0.36rem;color:#1D1D1D;}
	        .jiben_info{background: #fff;padding:0 4%;
				}
			
			.title_text{font-size: 0.3rem;color:#4A77B0;padding:0.2rem 0 0 0;}	
			.chanpin_detail{background: #fff;margin-top:0.2rem;padding-bottom: 0.01rem;}
			.chanpin_detail .title_text{padding-left:4%;}
			.product_item_wrap{border-bottom: 1px solid #D6D6D6;padding-bottom: 0.3rem;}
			.product_wrap .product_item_wrap:last-child{
				border-bottom: 0;padding-bottom: 0.1rem;
			}
			.product_item_padding{padding-left:4%;}
		    .product_item{padding: 0.24rem  0;border-bottom: 1px solid #D6D6D6;}
		    .product_item .name{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
		    .product_item .value{display: inline-block;font-size: 0.3rem;color:#1D1D1D;float: right;padding-right: 4%;}
		    .product_item .value input{border: 0;outline: none;text-align:right;font-size: 0.3rem;color:#1D1D1D;background: #fff;}
		    .product_item .value p{font-size: 0.24rem;color: #4A77B0;border-bottom: 1px solid #4A77B0;}
		    .product_item .value img{width:0.3rem;height:0.3rem;}
		    input::-webkit-input-placeholder{
				font-family: "微软雅黑";
				font-size: 0.24rem;
				color: #999999;
			}
			.total_money{padding-left: 4%;background: #fff;margin-top: 0.2rem;}
			.pay_fangshi{display: inline-block; width:0.8rem;height:0.4rem;line-height: 0.4rem; background:rgba(224,224,224,1);text-align: center;
			  margin:0 0.2rem 0.25rem 0;
			}
			.pay_fangshi.active span{color: #4978B0;}
			.pay_fangshi span{font-size: 0.24rem;line-height: 0.4rem; 
				color: #1D1D1D;}
			.tishi_text{padding: 0.3rem 4%;background: #fff;}
			.tishi_text p{font-size: 0.26rem;color:#4A77B0;line-height: 0.52rem;}
			.gouxuan{width:100%;background: #fff;text-align:center;padding:0.3rem 0;}
			.gouxuan label{font-size: 0.26rem;color:#1D1D1D;text-decoration: underline;padding-left: 0.1rem;vertical-align:middle;}
			textarea{width:96%;outline: none;font-size: 16px;}
			.explain{
				width: 92%;
	      margin:0.3rem auto;
			}
			
			.textEx{
	    padding: 0.18rem 2%;
    background: #fff;
    resize: none;
   border: none;
    border-radius: 3px;
    box-shadow:0px 2px 5px 0px rgba(104,104,104,0.4);
}
		
		textarea::-webkit-input-placeholder{
			font-family: "微软雅黑";
			color: #999;
			font-size: 14px;
		}
		.check_wrap{display: inline-block; width:0.3rem;height:0.3rem;position: relative;vertical-align: middle;}
			 .check_wrap input{width:0.3rem;height:0.3rem;position:absolute;top:0;left:0;z-index: 999;opacity: 0;}
             .xuanzhong{display: inline-block; width:0.3rem;height:0.3rem;background:url(../../assets/images/xuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;z-index: 998;}    
             .noxuanzhong{display: inline-block; width:0.3rem;height:0.3rem;background:url(../../assets/images/noxuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;}					
		    .qianming_wrap{background: #fff;height:1rem;width:100%;padding-top:0.5rem;}
		    .qianming{padding:0 4%;}
		    .qianming input{width:50%;border: none;border-bottom: 1px solid #D6D6D6;}
		     .qianname{float: left;width:46%;height:60px;position: relative;}
		     .qianname img{vertical-align: text-top;position: relative;top:-0.3rem;}
		     .qianname span{font-size:0.3rem ;color:#1D1D1D;}
		     .qiantime span{font-size:0.3rem ;color:#1D1D1D;}
		      .qiantime{float: right;width:46%;height:60px;}
		    .baocun_wrap{padding:0.6rem 4% 0.6rem 4% ;background: #fff;} 
		    .baocun3{width:100%;height:0.8rem;line-height: 0.8rem;text-align: center;background: #4978B0;border-radius: 10px;}
		    .baocun3 span{font-size: 0.36rem;color: #FFFFFF;} 
		   /* 签名*/
		  #signatureparent {
				color:#000;
				height:420px!important;width:100%!important;
             }
	#signature {
		/*border: 2px dotted black;*/
		/*background-color:lightgrey;*/
	}
 
	html.touch #content {
		/*float:left;*/
		width:100%;
	}
	
	html.borderradius #scrollgrabber {
		border-radius: 1em;
	}
	#displayarea img{width:30%;height:30px;}
	.jSignature{height:420px!important;width:100%!important;}
	/*#baocun{background: #999;}*/
	#xuanzhuan{position: fixed;top:0;left:0;right: 0;bottom: 0;background: #fff;z-index:999;}
	canvas{background-color: #fff!important;}
	#save{height:50px;width:80px;margin:0 auto;}
	@media only screen and (min-width: 500px) {
       #signatureparent {
		color:#000;
		height:200px!important;width:100%!important;
	  }
	  .jSignature{height:200px!important;width:100%!important;}
	}
	.box{padding: 0 0.3rem;}
	    .select{height:0.6rem;border: none;outline: none;padding-left:0.2rem;}
	    .zhiqingshu{padding:0 0.3rem;}
	    .zhiqingshu p{font-size:0.28rem;color:#2D2D2D;line-height: 0.4rem;}
	    #save{width:47%;height:0.6rem;line-height:0.6rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.4rem;}
	    #baocun,#clear{width:47%;height:0.8rem;line-height:0.8rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.3rem;
	    }
	    
	     #save span,#baocun span,#clear span{font-size:0.28rem ;color:#fff;}
	     #baocun{float: right;}
	     #clear{float:left;}
	     #tools{height:0.8rem;padding:0 4%;}
	     .pictrue{vertical-align: middle;}
	     .box{padding: 0 0.3rem;background: #fff;}
	    .select{height:0.6rem;border: none;outline: none;padding-left:0.2rem;}
	    .zhiqingshu{padding:0 0.3rem;}
	    .zhiqingshu p{font-size:0.28rem;color:#2D2D2D;line-height: 0.4rem;}
	    #save{width:47%;height:0.6rem;line-height:0.6rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.4rem;}
	    #baocun,#clear{width:47%;height:0.8rem;line-height:0.8rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.3rem;
	    }
	    
	     #save span,#baocun span,#clear span{font-size:0.28rem ;color:#fff;}
	     #baocun{float: right;}
	     #clear{float:left;}
	     #tools{height:0.8rem;padding:0 4%;}
	     .qianzi_wrap{height:60px;}
	     /*.qianzi_time{margin-bottom: 20px;}*/
	    #yuangongname{display: inline-block;color:#2D2D2D;}
 
</style>
