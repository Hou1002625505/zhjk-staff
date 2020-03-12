<template>
 <div class='container'>
   <div class="zhiqingshu_wrap">
           <div class="zhiqingshutext_wrap">	
	        <div id="content">	
		         <!-- <div class="train_record tianjiaxiang">
					<div class="train_record1 flex-item1">
                    <div class="xl_record" id="selectCus">
                <select v-model="cusItemName" @change="selopation(cusItemName)">
                    <option v-for="(item,index) in courseList" :key="index">{{item.name}}</option>
                           
                 </select><img src="../../assets/images/unfold_icon.png" /></div>
					</div>
		         </div> -->
		         <div class="train_record chakanxiang">
					<div class="train_record1 flex-item1">
						<div class="xl_record" id="selectCus"><span id="course_type1">{{itemName}}</span></div>
					</div>
		         </div>
				
				<div id="iframeContent" v-show="spatype">
                     <div class="zhiqingshu">
		 	<p>尊敬的会员：</p>
		 	<p style="text-indent: 25px;">
		 		 非常感谢您一直以来的支持和配合。为了给您提供更好的服务，让您的健康和权益得到更好地保障，请您详细了解您所做项目的禁忌事项。如果您有以下任何一种或多种疾病，请如实告知（如果因您隐瞒病情或病史而引起一切后果，我司概不承担任何责任）
		 	</p>
		 	<p>1、癫痫症、糖尿病或高血压患者、心脏病患者</p>
		 	<p>2、癌症及恶性肿瘤患者</p>
		 	<p>3、正在过敏及创伤，皮肤上有伤口或皮肤病传染者</p>
		 	<p>4、严重毛细血管扩张人士</p>
		 	<p>5、装有心脏起搏器人士</p>
		 	<p>6、红斑狼疮患者</p>
		 	<p>7、哮喘病患者</p>
		 	<p>8、严重粉刺或囊肿型暗疮者（有炎症的皮肤）</p>
		 	<p>9、女性孕期</p>
		 	<p>10、疾病状态</p>
		 	<p>11、严重疤痕体质者</p>
		 	<p>12、严重外用麻药过敏者</p>
		 	<p style="color:#4A77B0;font-size: 0.28rem;">一、项目服务前后注意事项：</p>
		 	<p style="color:#2D2D2D;font-size: 0.28rem;font-weight:900;">项目服务后有出汗现象时，应注意避风，以免感冒。</p>
		 	<p>1、在过饥、过饱、酗酒或过度疲劳时，不宜进行身体项目操作。</p>
		 	<p>2、客户在使用项目时必须保持每天多喝热开水，加强肝胆排毒的循环需要；</p>
		 	<p>3、客户需要保持良好的生活习惯，减少熬夜的习惯：</p>
		 	<p>4、局部出现酸痛，通过按摩局部会出现乳酸堆积的情况，这是身体代谢的一种表现，正常情况下1-3天会自然消退。</p>
		 	<p>5、项目服务后部分人会出现头晕头痛的症状，这是由于颈椎劳损严重，项目服务后气血畅通，短时间会有这种现象，一般休息半小时后就会自然消退。</p>
		 	<p style="color:#4A77B0;font-size: 0.28rem;">二、皮肤护理注意事项、好转反应成因及处理指南：</p>
		 	<p>1、护理后4小时内严禁沾水，不能以热水或冰水清洁面部：</p>
		 	<p> 2、护理后7天内不化彩妆；</p>
		 	<p>3、护理后修复期间不适合桑拿、游泳、曝晒及进行剧烈运动；</p>
		 	<p> 4、护理后修复期间饮食减少食用海鲜、辛辣刺激食物，不喝酒不抽烟;建议服用高效VC,        以提升皮肤代谢及修复能力;</p>
		 	<p>5、护理后皮肤7-10天出现红、痒、刺痛、脱屑、紧绷、淤青、小凸起等属好转反应，由于胶原蛋白及细胞正处于自我更新及修复状态。请按照修复疗程规划时间到店修复；如有任何其它不适症状，请及时与专属治疗师取得联系。
                                         其它项目有任何问题，请及时与您的专属顾问联系。
            </p>
		 </div>
                </div>
              <div id="iframeContent" v-show="shengming">
                   <div class="zhiqingshu">
		 	<p>尊敬的会员：</p>
		 	<p style="text-indent: 25px;">
		 			非常感谢您一直以来的支持和配合，为了给您提供更好的服务，让您的健康和权益得到更好的保障，请您认真阅读理解并签字确认以下《生命起源项目操作禁忌与注意事项》，如果因您隐瞒病情或病史而引起的一切后果，我司概不承担任何责任。
		 	</p>
		 	<p style="color:#4A77B0;font-size: 0.28rem;">一、禁忌事项：</p>
		 	<p>1、经期、怀孕、哺乳期不能操作；</p>
		 	<p>2、装有心脏起博器或体内有金属者不能操作，如有金属环的避开腹部和八髎部位；</p>
		 	<p>3、伤口愈合不全者或皮肤有伤口的部位以及有皮肤病的不能操作。</p>
		 	<p>4、感冒发烧者不能操作；</p>
		 	<p>5、有肿瘤患者不能操作；</p>
		 	<p>6、严重的三高患者、心脏病，糖尿病等重大疾病者不能操作；</p>
		 	<p>7、子宫肌瘤超过2公分(不操作腰、腹部、臀部)，超过5公分禁止使用该仪器；</p>
		 	<p>8、重度甲减、甲亢、乙肝；</p>
		 	<p>9、坐骨神经有病史的客户不适合操作此项目；</p>
		 	
		 	<p style="color:#4A77B0;font-size: 0.28rem;">二、注意事项</p>
		 	
		 	<p>1、操作前需除去身上所有金属物品；</p>
		 	<p>2、饭后半小时后即可操作，操作完后2小时内不能洗澡，避免受凉；</p>
		 	<p>3、每次操作前需喝400ML温开水，操作后再喝400ML温开水，补充身体体液；</p>
		 	<p>4、操作后当天不适合吃冷饮或寒凉食物，以免影响保健效果；</p>
		 	
		 	<p style="color:#4A77B0;font-size: 0.28rem;">三、操作后的好转反应</p>
		 	<p>1、操作完肩颈有少部分客户会出现头晕、头疼、头胀、恶心等症状，这是由于长期缺氧的头部血液循环加快了，出现短时间的症状。如有此症状可以按摩一下头部，症状会自然消退；</p>
		 	<p>2、有部分客户操作完腹部会打嗝、排气（且味道重）、便量增多、便发黑等症状，这属于正常现象，加速了肠胃蠕动后，增加了身体的代谢；</p>
		 	<p>3、部分客户做完后，大量出汗，感觉舌干口燥的，这是加速了身体循环加速，代谢加速，操作后多饮温开水即可；</p>
		 	<p> 4、有少部分客户会出现操作后局部有点酸疼感，是於堵结节疏通后细胞大量活跃的自然反应；也就是平时太少运作，乳酸堆积无法及时排出所以就有酸痛感，一般最多3-5天自然消退；</p>
		 	<p>5、有极少部分客户操作完后可能会出现月经提前或推后的现象，这属于正常，因此项目可以加强身体的代谢，身体各机能在自我调节的过程中出现短时间的紊乱，但是只要坚持使用，就会恢复正常；
            </p>
            <p>6、有极少部分客户皮肤比较敏感，对热反应比较强烈，操作完仪器后皮肤会出现红或小水泡的现象，都属于正常情况，不用担心，及时告知专属顾问帮您处理就好。
            </p>
		 </div>

                </div>

				 <div class="box" style="height:130px;">    
					 <div class="name_wrap" style="float: left">
					 	<div class="qianzi_wrap">员工签名：<span class="dianji fang1" id="yuangongname">{{empName}}</span><img id="pictrue1" class="pictrue" /></div>
					 	<div>签名时间：<span class="qianzi_time">{{filDate(rutime)}}</span></div>
					 </div>
					 <div class="name_wrap" style="float: right">
					 	<div class="qianzi_wrap">客户签名：<img id="pictrue2" class="pictrue" :src="ImgUrl + qianming" :style="{width:80+'px',height:70+'px'}"/></div>
					 	<div>签名时间：<span  class="qianzi_time">{{filDate(rutime)}}</span></div>
					 </div>
				 </div>
				
			 </div>
			 			 
		  </div>		  
	  </div>
 </div>
</template>

<script>
import $ from "jquery"
import {Weui} from "weui"
 export default {
   data () {
     return {  
    spatype:false,
    shengming:false,     
    id:this.$route.query.id,   
    empName:this.$route.query.empName,
    rutime:this.$route.query.rutime,
    itemName:this.$route.query.itemName,
    qianming:"",
    ImgUrl:this.config.service_ip+'/images/knowBook/'
     }
   },
   created(){
    
     this.dictionnary1()
   },
   methods: {
     filDate(value) {
			var filValue = value.split(' ');
			return filValue[0];
	 },
      dictionnary1(){
          this.instance.$get('/rest/wx/customerKnowBook/getKnowBookById',{params: { bookId:this.id }},res => {
       console.log(res);
           this.qianming = res.autographImg
           })
         if(this.itemName == "SPA基本项目"){
                 this.spatype = true;
                  this.shengming = false;
              }else{
                   this.shengming = true;
                  this.spatype = false;
              }
      },
      
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
 select{border:none;background:none;outline: none;font-size: 0.42rem;appearance: none;}
button{outline: none}
  .zhiqingshu{padding:0 0.3rem;}
  .zhiqingshu p{font-size:0.28rem;color:#2D2D2D;line-height: 0.4rem;}
  .name_wrap{position: relative;width:45%;margin-top: 30px;font-size:0.28rem;}
		 .dianji{border-bottom: 1px solid #999;color: #e3e3e7;position: absolute;right: 0;width:46%;}
		 .pictrue{position: absolute;right: 0;top:-10px;}
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
	#xuanzhuan{position: fixed;top:0;left:0;right: 0;bottom: 0;background: #fff}
	canvas{background-color: #fff!important;}
	#save2{height:50px;width:80px;margin:0 auto;}
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
	    #save2{width:47%;height:0.6rem;line-height:0.6rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.4rem;}
	    #baocun,#clear{width:47%;height:0.8rem;line-height:0.8rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.3rem;font-size:0.28rem ;color:#fff;
	    }
	    
	     #save2 span,#baocun span,#clear span{font-size:0.28rem ;color:#fff;}
	     #baocun{float: right;}
	     #clear{float:left;}
	     #tools{height:0.8rem;padding:0 3%;}
	     .qianzi_wrap{height:60px;}
	     /*.qianzi_time{margin-bottom: 20px;}*/
	    #yuangongname{display: inline-block;color:#2D2D2D;}
	   /* #zhipng{width:100%;height:1200px;}*/
	  .train_record {
			display: flex;
			padding: 0.25rem 0.3rem;
			background-color: #fff;
			border-bottom: 1px solid #E6E6E6;
			font-size: 0.3rem;
			color: #2C2E34;
		}
		
		.train_record .train_record1 {
			flex: 1;
		}
		
		.xl_record {
			font-size: 0.35rem;
			padding: 0.04rem 0;
			font-weight: bold;
		}
		
		.xl_record img {
			width: 0.3rem;
			vertical-align: middle;
            margin-left: 0.1rem;
            margin-bottom: 0.1rem;
		}
		
 
</style>
