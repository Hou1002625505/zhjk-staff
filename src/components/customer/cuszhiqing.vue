<template>
 <div class='maintype'>
    <div class="zhiqing_wrap">
        <div class="zhi_title">
            <p class="text">运动测试及训练知情同意书</p>
        </div>
        <p style="text-indent: 25px;">           
        本人<span style="font-weight:900;">{{customerName}}</span>自愿参加中航健康时尚集团的运动测试、评估及运动训练课程以尝试改善体质、提升体能对此本人了解并同意以下条款：                       
        </p>
        <p style="margin-top:0.3rem;">1、本人有义务在开展运动训练课程前咨询相关医生,<span style="font-weight:900;">确保自身身体情况符合相关运动训练课程所需的身体要求，并<span style="text-decoration:underline;">如实向教练告知身体情况和医嘱内容;否则，由本人自行承担因此而造成的一切损害后果.</span>
                        </span>                          
        </p>
         <p style="margin-top:0.3rem;">2、本人知悉所有运动训练课程必须在教练的引导下进行,<span style="font-weight:900;text-decoration:underline;">
                            因未能遵守教练的引导而导致的任何损害后果由本人自行承担.
                        </span>                          
        </p>
         <p style="margin-top:0.3rem;">3、本人知悉在开展运动训练过程中，可能导致身体生理负荷的改变，同时可能引起身体机能水平异常，包括但不限于（肌肉拉伤、软组织损伤、眩晕、血压异常及心跳加剧等不适应症状）一旦发生本人将立即
                            停止训练并<span style="font-weight:900;">当场立即</span>告知教练以便及时救助，                       
                        <span style="font-weight:900;text-decoration:underline;">
                            凡因本人未能及时告知而导致或者扩大损害后果，由本人自行承担.
                        </span>                          
        </p> 
        <p style="margin-top:0.3rem;">
            4、本人知悉开展运动训练可能存在包括但不限于上述风险，并承诺对运动训练课程宗旨、注意事项、操作指南等内容详细了解后才能进行相关运动训练.
            </p>
             <p style="margin-top:0.3rem;">
            5、本人知悉训练计划是根据本人需求，结合自身身体状况及专家建议编写，本人将严格按照上述知悉内容进行训练，<span style="font-weight:900;">
                            并同意对训练过程中可能出现的任何不良后果承担法律责任.</span>
            </p> 
    </div>
   <div class="qianming_wrap">
				<div class="qianming">
					<div class="qianname"><span>客户签名：</span><input type="text" placeholder="点击签名" @click="fang()" class="pictrue2" readonly="readonly"><img id="pictrue" /></div>
					<div class="qiantime"><span>签字日期：</span><input type="text" id="qiandate"  readonly="readonly" v-model="this.currentTime"></div>
			    </div>
	</div>
    <div class="baocun_wrap">
				<div class="baocun3" @click="saveht()">
				   <span>签名完成</span>
			    </div>
	</div>
     <div id="xuanzhuan"  style="visibility:hidden;">
                <vueSignature ref="signature" :sigOption="option" :w="'800px'" :h="'500px'"></vueSignature> 
                <div  id="tools">
                <div @click="clear"  id="clear">清除</div>
                <div @click="save" id="baocun">确定</div>
               </div> 
    </div>

 </div>

</template>

<script>
import $ from "jquery"
 export default {
   data () {
     return {
		gxId:this.$route.query.gxId, 
		mobile:this.$route.query.mobile,
		customerName:this.$route.query.customerName,
		autographImg:"",
        option:{
        penColor:"rgb(0, 0, 0)",
        backgroundColor:"rgb(255,255,255)"
        },
        currentTime: this.config.formatDate(this.config.currentTime()),
       }
   },
   methods: {
      fang(){			
		    $("#xuanzhuan").css("visibility","visible")
        },
         save(){
			var _this = this;
			var png = _this.$refs.signature.save()
			var jpeg = _this.$refs.signature.save('image/jpeg')
            var svg = _this.$refs.signature.save('image/svg+xml');
            var png1 = png.toString();
              var datavalue = this.config.filDate1(png1) 
              this.autographImg = datavalue
            $("#xuanzhuan").css("visibility","hidden");
            $('#pictrue').attr({src:'data:' + png,width:'60px',height:'70px'})
            $('.pictrue2').hide()
		//	console.log(png);
		},
		clear(){
			var _this = this;
			_this.$refs.signature.clear();
        },
        saveht(){
			if(this.autographImg != ""){
               this.instance.$post('/rest/wx/reception/addSportsConsent',{
				   gxId:this.gxId,
				mobile:this.mobile,
				name:this.customerName,
				autographImg:this.autographImg
			   },res => {
				//console.log(res);
				if(res.rel){
       this.$route.meta.zhiqingid=res.msg;
     this.$router.back();

			// 	this.$router.push({
            //       name: "selectceshi",
            //      query: {
            //      gxId:this.gxId,
			// 					 mobile:this.mobile,
			// 					 zhiqingid:res.msg
            //     }               
			//   });
				}else{
				  this.$vux.toast.text("保存失败");	
				}
               })
              
			  
			}else{
				 this.$vux.toast.text("请签名");
			}
           
        }
   },
   components: {
   
   }
 }
</script>

<style scoped lang="less">
.maintype{
        position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-y: auto;
    z-index: 2;
}
 .zhiqing_wrap{
     padding:0 3%;
 }
 .zhiqing_wrap p{
     font-size:0.3rem;color:#1D1D1D;
 }
 .zhi_title{text-align: center;}
 .zhi_title .text{font-size:0.36rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(29,29,29,1);
padding:3% 0}

//签名
 .qianming_wrap{background: #fff;height:1rem;width:100%;padding-top:0.5rem;}
		    .qianming{padding:0 4%;}
			.qianming input{width:50%;border: none;border-bottom: 1px solid #D6D6D6;font-size: 0.3rem;}
			 input::-webkit-input-placeholder{font-size: 0.3rem;}
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
	    
	     #save span,#baocun span,#clear span{font-size:0.28rem ;color:#fff;}
	     #baocun{float: right;width:47%;height:0.8rem;line-height:0.8rem;background: #4A77B0;border-radius: 5px;text-align: center;
	          margin-bottom: 0.3rem;color:#fff;font-size:0.36rem ;}
	     #clear{float:left;width:47%;height:0.8rem;line-height:0.8rem;background: #fff;border-radius: 5px;text-align: center;
	          margin-bottom: 0.3rem;font-size:0.36rem ;color:#4A77B0;border:1px solid rgba(74,119,176,1); }
	     #tools{height:0.8rem;padding:0 4%;}
	     .pictrue{vertical-align: middle;}
	     .box{padding: 0 0.3rem;background: #fff;}
	    .select{height:0.6rem;border: none;outline: none;padding-left:0.2rem;}
	    .zhiqingshu{padding:0 0.3rem;}
	    .zhiqingshu p{font-size:0.28rem;color:#2D2D2D;line-height: 0.4rem;}
	    #save{width:47%;height:0.6rem;line-height:0.6rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.4rem;}
	    #clear span{font-size:0.28rem ;color:#4A77B0;}
	     #save span,#baocun span,{font-size:0.28rem ;color:#fff;}
	     #tools{height:0.8rem;padding:0 4%;}
	     .qianzi_wrap{height:60px;}
	     /*.qianzi_time{margin-bottom: 20px;}*/
	    #yuangongname{display: inline-block;color:#2D2D2D;}
</style>
