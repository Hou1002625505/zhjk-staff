<template>
 <div class='container'>
         	 <div class="qi_home_shuai">
		 	<div class="qi_home_shuai_con">
		 		
		 		<div class="huoyuedu_wrap">
		 		<p>活跃度</p>
		 		<div class="huoyuedu_con">
		 			<div class="item  active" datavalue="新增"><span>新增</span></div>
		 			<div class="item "  datavalue="活跃"><span>活跃</span></div>
		 			<div class="item "  datavalue="沉睡"><span>沉睡</span></div>
		 			<div class="item " datavalue="流失"><span>流失</span></div>
		 		</div>
		 		</div>
		 		<div class="zuijindao_wrap">
		 			<p>最近到店日期</p>
		 			<div class="zuijindao_con">
		 				<div class="date_xuan">
		 					<div class="item" id="calendar"><span>起始：</span><input type="text" placeholder="0000-00-00" readonly id="birthday"><img  src="../../assets/images/home_menu_date@2x.png"/></div>
		 					
		 					<div class="item" id="calendar1"><span>结束：</span><input type="text" placeholder="0000-00-00" readonly id="jieshu"><img  src="../../assets/images/home_menu_date@2x.png"/></div>
		 					
		 				</div>
		 				<div class="shijian_duan" id="zuijindao">
		 					<div class="item" daodiandate="yizhou"><span>最近一周</span></div>
		 					<div class="item" daodiandate="yiyue"><span>最近一月</span></div>
		 					<div class="item" daodiandate="sanyue"><span>最近三月</span></div>
		 					<div class="item" daodiandate="bannian"><span>最近半年</span></div>
		 				</div>
		 			</div>
		 		</div>
		 		<div class="year_jine_wrap">
		 			<p>近一年交款金额</p>
		 			<div class="year_jine_con">
		 				<input type="number" placeholder="最低金额" id="zuidijine"/>
		 				<div class="qujianxian"></div>
		 				<input type="number" placeholder="最高金额" id="zuigaojine"/>
		 			</div>
		 		</div>
		 		<div class="year_jine_wrap">
		 			<p>年到店次数</p>
		 			<div class="year_jine_con">
		 				<input type="number" placeholder="1" id="didaodian"/>
		 				<div class="qujianxian"></div>
		 				<input type="number" placeholder="999" id="gaodaodian"/>
		 			</div>
		 		</div>
		 		<div class="zuijindao_wrap">
		 			<p>健身卡过期客户</p>
		 			<div class="zuijindao_con">
		 				<div class="date_xuan">
		 					
		 					<div class="item" ><span>起始：</span><input type="text"  placeholder="0000-00-00" readonly id="birthday1"><img  src="../../assets/images/home_menu_date@2x.png"/></div>
		 					
		 					<div class="item" ><span>结束：</span><input type="text" placeholder="0000-00-00" readonly id="jieshu1"><img  src="../../assets/images/home_menu_date@2x.png"/></div>
		 					
		 				</div>
		 				<div class="shijian_duan" id="jianshenguoqi">
		 					<div class="item" daodiandate="yizhou"><span>最近一周</span></div>
		 					<div class="item" daodiandate="yiyue"><span>最近一月</span></div>
		 					<div class="item" daodiandate="sanyue"><span>最近三月</span></div>
		 					<div class="item" daodiandate="bannian"><span>最近半年</span></div>
		 				</div>
		 			</div>
		 		</div>
		 		<div class="qi_sure_height"></div>
		 		<div class="qi_sure">
		 			<div class="item" id="congzhi"><span>重置</span></div>
		 			<div class="item sure" id="suan_sure"><span>确定</span></div>
		 		</div>
		 	</div>
		 </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     }
   },
   created(){

   },
   methods: {
   },
   components: {
   }
 }
</script>

<style scoped lang="less">
    .qi_home_shuai{position: fixed;top:0;left:0;right: 0;bottom:0;background: rgba(0,0,0,0.2);z-index: 999;}		    
		    .qi_home_shuai_con{width:78%;height:100%;background: #F7F7F7;position: absolute;right:0;overflow-y:auto}  
		    
		    .huoyuedu_wrap{background: #fff;padding-left: 3%;}
		     .huoyuedu_wrap p{height:0.79rem;line-height:0.79rem;font-size:0.3rem ;color: #1D1D1D;border-bottom: 1px solid #D6D6D6;}
		    .huoyuedu_con{display: flex;height:0.9rem;padding-top:0.3rem;}
		    .huoyuedu_con .item{flex: 1;height:0.6rem;line-height:0.6rem; background: #F7F7F7;margin-right:3%;text-align: center;
		       font-size: 0.24rem;color:#1D1D1D;
		    }
		     .huoyuedu_con .item.active{background: #4978B0;color:#fff;}
		    .zuijindao_wrap{background: #fff;padding-left: 3%;margin-top: 0.3rem;}
		    .zuijindao_wrap p{height:0.79rem;line-height:0.79rem;font-size:0.3rem ;color: #1D1D1D;border-bottom: 1px solid #D6D6D6;}		  
		    .zuijindao_con{}
		   
		    .date_xuan{display: flex;margin-top:0.3rem;}
		    
		    .date_xuan .item{flex:1;height:0.6rem; background:rgba(247,247,247,1);border-radius:2px;margin-right: 3%;}
		    .date_xuan span{font-size: 0.22rem;color:#1D1D1D;padding-left:4%;}
		     .date_xuan input{width:51%;height:0.4rem;border: 0;background: rgba(247,247,247,1);;
		     margin-right: 2%;padding-top:0.14rem;
		     }
		     .date_xuan img{width:12%;height:0.36rem;position: relative;top:0.1rem;}
		     .shijian_duan{display: flex;padding:0.3rem 0; }
		     .shijian_duan .item{flex:1;height:0.6rem;line-height: 0.6rem;text-align: center; background:rgba(247,247,247,1);border-radius:2px;margin-right:3%;
		       font-size: 0.24rem;color:#1D1D1D;
		     }
		     .shijian_duan .item.active{background: #4978B0;color:#fff;}
		     .year_jine_wrap{background: #fff;padding-left: 3%;margin-top: 0.3rem;}
		      .year_jine_wrap p{height:0.79rem;line-height:0.79rem;font-size:0.3rem ;color: #1D1D1D;border-bottom: 1px solid #D6D6D6;}
		     .year_jine_con{display: flex;padding: 0.3rem 3% 0.3rem 0;}
		     .year_jine_con input{ flex:1;width:100%;height:0.6rem;outline: none;text-align: center;background:#F7F7F7;border: 0;}
		     .qujianxian{width:4%;height:2px;background: #1D1D1D;position: relative;top:0.28rem;}
		     .qi_sure{height:1rem;display: flex;position: fixed;bottom: 0;right:0;left:22%;}
		     .qi_sure .item{height:1rem;line-height: 1rem;background: #fff; flex:1;text-align: center;border-top:1px solid #AFAFAF;}
		     .qi_sure .sure{background: #4978B0;border:none;}
		     .qi_sure_height{width:100%;height:1rem;}
		     .qi_sure span{font-size: 0.36rem;color:#1D1D1D;}
		     .qi_sure .sure span{color: #fff!important;}
		     input::-webkit-input-placeholder{color: #999;}
</style>
