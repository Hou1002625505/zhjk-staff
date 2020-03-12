<template>
 <div class="container" >
   <!-- 首页 -->
   <!-- 下拉刷新 -->
        <mt-loadmore :top-method="loadTop"   :max-distance="150"
                 @top-status-change="handleTopChange" ref="loadmore">
                  <div slot="top" class="mint-loadmore-top">
                    <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                    <span v-show="topStatus === 'loading'">
                            <mt-spinner type="triple-bounce" class="loading-more" :size="20"></mt-spinner>
                  </span>
                    <span v-show="topStatus === 'drop'">松开刷新</span>
                  </div>
      <div class="qi_home_index">
		    <div class="qi_home_header">
		    	<div class="qi_home_guang" v-for="(item,index) in todayyeji" :key=index>
		    	<div class="today_yeji">
		    		<p class="todayval">{{item.salePerformance}}</p>
		    		<p class="text">今日销售业绩</p>
		    	</div>
		    	<div class="xian"></div>
		    	<div class="yeji_con">
		    		<div class="item">
		    			<p class="value" id="txiaokao">{{item.consumePerformance}}</p>
		    			<p class="text">消耗业绩</p>
		    		</div>
		    		<div class="item" @click="todayaddmeth">
		    			<p class="value" id="taddcus">{{item.customerNumber}}</p>
		    			<p class="text">新增客户</p>
		    		</div>
		    		<div class="item" @click="todaycheng">
		    			<p class="value" id="tchengjiao">{{item.dealCustomer}}</p>
		    			<p class="text">成交客户</p>
		    		</div>
		    	</div> 
		    	<div class="daiban" v-show="daibanflag" @click="medaiban()">
		    		<img src="../../assets/images/qi_home_daiban.png"  />
		    		<p>待办</p>
						<div class="daibannum" v-show="dainum1"><span>{{totaldai}}</span></div>
		    	</div>
		      </div>	
		    </div>	
		<!--根据当前完成业绩来移动jindu和fang_num-->
		<!-- <div class="geren_mubiao_wrap">
			<div class="geren_mubiao_header">
				<p>个人目标</p>
			</div>
			 <div class="geren_mubiao_con" v-for="(item,index) in yueyeji" :key="index" v-show="mubiaoflag">
        <div>			
			 <mt-swipe :auto="3000">
				  				  	
			 <mt-swipe-item>
			 	
				<div class="total_yeji">
					 <p>累计销售业绩</p>
					 <div class="fang_num" :style="{'marginLeft':item.salePerformance/salePerformance>=1?90+'%':item.salePerformance/salePerformance==0?0+'%':(item.salePerformance/salePerformance*100-2).toFixed(1)+'%'}"><span id="lei_yeji">{{(isNaN(item.salePerformance/salePerformance)?0:item.salePerformance/salePerformance*100).toFixed(1)+'%'}}</span></div>
				 	<div class="zhongchang">
				 		<div class="jindu" :style="{'width':item.salePerformance/salePerformance>1?100+'%':item.salePerformance/salePerformance==0?0+'%':(item.salePerformance/salePerformance*100).toFixed(1)+'%'}"></div>
				 	</div>
				 	<div class="num_wrap"><span class="wancheng">当前完成：<em class="wannum">{{item.salePerformance}}</em></span><span class="mubiao">目标：<em class="munum">{{salePerformance}}</em></span></div>
			    </div>
			    <div class="total_yeji total_yeji1">
			    	 <p class="miaosu">累计新增客户</p>
					<div class="fang_num1"  :style="{'marginLeft':item.customerNumber/customerNumber>=1?90+'%':item.customerNumber/customerNumber==0?0+'%':(item.customerNumber/customerNumber*100-2).toFixed(1)+'%'}"><span id="lei_kehu">{{(isNaN(item.customerNumber/customerNumber)?0:item.customerNumber/customerNumber*100).toFixed(1)+'%'}}</span></div>
				 	<div class="zhongchang1">
				 		<div class="jindu1" :style="{'width':item.customerNumber/customerNumber>1?100+'%':item.customerNumber/customerNumber==0?0+'%':(item.customerNumber/customerNumber*100).toFixed(1)+'%'}"></div>
				 	</div>
				 	<div class="num_wrap"><span class="wancheng">当前完成：<em class="wannum1">{{item.customerNumber}}</em></span><span class="mubiao">目标：<em class="munum1">{{customerNumber}}</em></span></div>
			    </div>
			  </mt-swipe-item>

			  <mt-swipe-item>
			 	
				<div class="total_yeji">
					 <p>累计消耗业绩</p>
					 <div class="fang_num2" :style="{'marginLeft':item.consumePerformance/consumePerformance>=1?90+'%':item.consumePerformance/consumePerformance==0?0+'%':(item.consumePerformance/consumePerformance*100-2).toFixed(1)+'%'}"><span id="lei_xiaokao">{{(isNaN(item.consumePerformance/consumePerformance)?0:item.consumePerformance/consumePerformance*100).toFixed(1)+'%'}}</span></div>
				 	<div class="zhongchang2">
				 		<div class="jindu2" :style="{'width':item.consumePerformance/consumePerformance>1?100+'%':item.consumePerformance/consumePerformance==0?0+'%':(item.consumePerformance/consumePerformance*100).toFixed(1)+'%'}"></div>
				 	</div>
				 	<div class="num_wrap"><span class="wancheng">当前完成：<em class="wannum2">{{item.consumePerformance}}</em></span><span class="mubiao">目标：<em class="munum2">{{consumePerformance}}</em></span></div>
			    </div>
			    <div class="total_yeji total_yeji1">
			    	 <p class="miaosu">累计成交客户</p>
					<div class="fang_num3" :style="{'marginLeft':item.dealCustomer/dealCustomer>=1?90+'%':item.dealCustomer/dealCustomer==0?0+'%':(item.dealCustomer/dealCustomer*100-2).toFixed(1)+'%'}"><span id="lei_chengjiao">{{(isNaN(item.dealCustomer/dealCustomer)?0:item.dealCustomer/dealCustomer*100).toFixed(1)+'%'}}</span></div>
				 	<div class="zhongchang3">
				 		<div class="jindu3" :style="{'width':item.dealCustomer/dealCustomer>1?100+'%':item.dealCustomer/dealCustomer==0?0+'%':(item.dealCustomer/dealCustomer*100).toFixed(1)+'%'}"></div>
				 	</div>
				 	<div class="num_wrap"><span class="wancheng">当前完成：<em class="wannum3">{{item.dealCustomer}}</em></span><span class="mubiao">目标：<em class="munum3">{{dealCustomer}}</em></span></div>
			    </div>
			  </mt-swipe-item>

         <mt-swipe-item>
			 	
            <div class="total_yeji">
              <p>累计回访人数</p>
              <div class="fang_num4" :style="{'marginLeft':item.revisitNumber/revisitNumber>=1?90+'%':item.revisitNumber/revisitNumber==0?0+'%':(item.revisitNumber/revisitNumber*100-2).toFixed(1)+'%'}"><span id="lei_huifang">{{(isNaN(item.revisitNumber/revisitNumber)?0:item.revisitNumber/revisitNumber*100).toFixed(1)+'%'}}</span></div>
              <div class="zhongchang4">
                <div class="jindu4" :style="{'width':item.revisitNumber/revisitNumber>1?100+'%':item.revisitNumber/revisitNumber==0?0+'%':(item.revisitNumber/revisitNumber*100).toFixed(1)+'%'}"></div>
              </div>
              <div class="num_wrap"><span class="wancheng">当前完成：<em class="wannum4">{{item.revisitNumber}}</em></span><span class="mubiao">目标：<em class="munum4">{{revisitNumber}}</em></span></div>
              </div>
			  </mt-swipe-item>
			  			    
			</mt-swipe> 
				</div>
				</div>
			 <div class="nomubiao" v-show="nomubiaoflag">
             <p>暂无设置目标，<a href="javascript:;" @click="settmubiao()">点击设置</a></p>
			 </div>
			</div> -->

        <!-- <div class="fengexian"></div> -->
		<div class="changyong_menu">
			<div class="changyong_header">
			   <p class="text">常用功能</p>
			   <!-- <p class="add">添加</p> -->
		    </div>
		    <div class="changyong_con">
		    	<div class="changyong_con1 clear">

		    	   <div class="item " @click="addcus()" v-show="addclient"> 
		    	   	   <span class="feng1"></span>
				 	   
				 	   <p>添加客户</p>
				   	</div>
					  <div class="item " @click="jiedai()"  v-show="cjiedai">
				 	 	 <span class="feng7"></span>
				 	   
				 	   <p>问卷调查</p>
				 	</div>
					  <div class="item "  @click="ticepinggu()"  v-show="tcpg">
		    	   	<span class="feng5"></span>
				 	   
				 	   <p>体测评估</p>
				 	  </div>
                     
					  <div class="item "  v-show="hetong" @click="dianziht()">
								<span class="feng27"></span>
								
								<p>电子合同</p>
			         </div>
				 			       		       

		    
				 	 <div class="item "  v-show="daiyue">
             	<a :href="url2" >
				 	 	 <span class="feng6"></span>
				 	  
				 	   <p>私教代约</p>
							 </a>
				 	</div>
           
            
				 	 	 <div class="item "  v-show="yuyue"> 
							<a :href="url1">	 
				 	 	 <span class="feng21"></span>
				 	  
				 	   <p>我的预约</p>
							 </a>
				 	  </div>
             
            
				 	  	 <div class="item "  v-show="fangan">
							<a :href="url3"> 
				 	 	 <span class="feng22"></span>
				 	  
				 	   <p>方案模板</p>
							 </a>
				 	   </div> 
             
            	<div class="item "  v-show="inbody" @click="ainbody()">
				 	 	 <span class="feng23"></span>
				 	  
				 	   <p>inbody数据</p>
				 	   </div>

		       

						
							<div class="item " @click="meirong()"  v-show="spa">
								<span class="feng24"></span>
								
								<p>spa电子档案</p>
							</div>

							<div class="item "  v-show="tckedui">
                               <a href="http://crm.physicalclub.com/web_App/inside_schedule.html">
								<span class="feng25"></span>
								
								<p>团操课表核对</p>
                               </a>
							</div>
                        <div class="item " @click="fenxiangka()"  v-show="fenxiang">
								<span class="feng26"></span>
								<p>分享体验卡</p>
				 	     </div>
                       <div class="item " @click="yejichaxun()"  v-show="yeji">
				 	 	<span class="feng2"></span>
				 	
				 	   <p>业绩查询</p>
				 	</div>
					 <div class="item " @click="keguanmeth()"  v-show="keguan">
				 	 	<span class="feng34"></span>
				 	
				 	   <p>课时管理</p>
				 	</div>
               <div class="item " @click="huisuometh()"  v-show="huisuo">
				 	 	<span class="feng2" style="margin-left: 0.1rem;"></span>
				 	   <p>会所业绩查询</p>
				 	</div>
				    </div>
         
		    </div>
		</div>
		<!-- <div>{{resceshi}}</div> -->
		<div class="bottom_height"></div>
		</div>
<!-- 内容 -->
   </mt-loadmore>
 </div>
    
</template>

<script>
// import $ from "jquery";引入jquery
import Promise from 'es6-promise';
export default {
  data() {
    return {
      topStatus: "",
      todayyeji:[],//员工今天销售业绩
      yueyeji:[],//员工本月销售业绩
			mubiaoyeji:[],//员工本月业绩目标
			resceshi:"",
			salePerformance:0,
			consumePerformance:0,
			customerNumber:0,
			revisitNumber:0,
			dealCustomer:0,
			dainum1:false,
			js:"",
			xs:"",
			positions:"",
			totaldai:"",

		 addclient:false, 
			cjiedai:false, 
			tcpg:false, 
			yeji:false,
			daiyue:false,
			yuyue:false, 
			huisuo:false,
			fangan:false, 
			inbody:false, 
			spa:false, 
			tckedui:false, 
			fenxiang:false,
			hetong:false,
			daibanflag:false,
            keguan:false, 
			mubiaoflag:true,
			nomubiaoflag:false,
			url1:this.config.service_ip1+'/train/?v='+new Date().getTime()+'#/management/richeng_management',//我的预约
      url2:this.config.service_ip1+'/train/?v='+new Date().getTime()+'#/personaTrain/mycustomer',//私教代约
			url3:this.config.service_ip1+'/train/?v='+new Date().getTime()+'#/trainerTemplate/planTemplate'//方案模板
			
			// url1:'http://crm.physicalclub.com/train/?v='+new Date().getTime()+'#/management/richeng_management',//我的预约
      // url2:'http://crm.physicalclub.com/train/?v='+new Date().getTime()+'#/personaTrain/mycustomer',//私教代约
      // url3:'http://crm.physicalclub.com/train/?v='+new Date().getTime()+'#/trainerTemplate/planTemplate'//方案模板
    };
  },
  inject:['jurisdiction'],
  created() {
		 this.fang()
		 this.getcustomer()
		  //this.cheng()
		  this.getquanxian();
				
	},
  methods: {
    fang(rate){
      this.todayyeji=[]
			this.yueyeji=[]
			 this.mubiaoyeji=[]
       this.instance.$post('/rest/wx/employee/getEmpAimInfoByData',{ status:1},res => {
        console.log(JSON.stringify(res));
            this.todayyeji.push(res.rows[0])
         this.$refs.loadmore.onTopLoaded()        
       
     
    },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
		},
					// 获取员工权限
			getquanxian(){
			if(this.$store.state.jurisdiction.length>0){
				 this.$store.state.jurisdiction.forEach(item=>{
					 console.log(item.permissionName )
						if(item.permissionName == '添加客户'){
               this.addclient = true;
						}
            if(item.permissionName == '客户接待'){
							 this.cjiedai = true;
						}
            if(item.permissionName == '体测评估'){
								 this.tcpg = true;
						}
						 if(item.permissionName == '业绩查询'){
								 this.yeji = true;
						}
						 if(item.permissionName == '私教代约'){
								 this.daiyue = true;
						}
						 if(item.permissionName == '我的预约'){
								 this.yuyue = true;
						}
						 if(item.permissionName == '私教模板'){
								 this.fangan = true;
						}
						 if(item.permissionName == 'inbody体测查询'){
								 this.inbody = true;
						}
						 if(item.permissionName == 'SPA电子档案'){
								 this.spa = true;
						}
						 if(item.permissionName == '团课课表核对'){
								 this.tckedui = true;
						}
						if(item.permissionName == '分享体验卡'){
								 this.fenxiang = true;
						}
						if(item.permissionName == '电子合同'){
								 this.hetong = true;
						}
                        if(item.permissionName == '代办'){
								this.daibanflag = true;
						} 
                        if(item.permissionName == '课时发布'){
								this.keguan = true;
						}
						if(item.permissionName == '会所业绩查询'){
								this.huisuo = true;
						}
					})
			}
        //  this.instance.$post('/rest/wx/coach/plan/getUserFunctionPermission',{},res => {
		// 			 console.log('权限')
		// 		console.log(res);			
		// 		if(res.status){
		// 			var data = res.rows;
		// 	// 		data.forEach(item=>{
		// 	// 			if(item.permissionName == '添加客户'){
        //     //    this.addclient = true;
		// 	// 			}
        //     // if(item.permissionName == '客户接待'){
		// 	// 				 this.cjiedai = true;
		// 	// 			}
        //     // if(item.permissionName == '体测评估'){
		// 	// 					 this.tcpg = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == '业绩查询'){
		// 	// 					 this.yeji = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == '私教代约'){
		// 	// 					 this.daiyue = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == '我的预约'){
		// 	// 					 this.yuyue = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == '私教模板'){
		// 	// 					 this.fangan = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == 'inbody体测查询'){
		// 	// 					 this.inbody = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == 'SPA电子档案'){
		// 	// 					 this.spa = true;
		// 	// 			}
		// 	// 			 if(item.permissionName == '团课课表核对'){
		// 	// 					 this.tckedui = true;
		// 	// 			}
		// 	// 			if(item.permissionName == '分享体验卡'){
		// 	// 					 this.fenxiang = true;
		// 	// 			}
		// 	// 			if(item.permissionName == '电子合同'){
		// 	// 					 this.hetong = true;
		// 	// 			}
        //     //             if(item.permissionName == '代办'){
		// 	// 					this.daibanflag = true;
		// 	// 			}
               
		// 	// 		})
		// 		}
               
		// 	 })			 
			},
			//获取等待回访数量
			  getcustomer(rate){
		//    this.getcustomerarr = []
			this.instance.$post('/rest/wx/customerGx/findIndexData ',{},res => {
				console.log('获取等待回访数量')
			console.log(res);       
                 if(res.status){
					 this.totaldai = res.rows[0].visitCustomer
					 this.dainum1 = true
				 }      
           },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
        },
		 getusery(){
          this.instance.$post('/rest/wx/customer/getQyUser',{
              
           },res => {
       console.log(JSON.stringify(res));
      
        var roles =  res.rows[0].roles
        console.log(roles)
       roles.forEach( item1=>{
         console.log(item1)
        if(item1.roleName=="SPA技师"){
         
            this.js="SPA技师";
            this.positions = "SPA技师";
            
        }else if(item1.roleName=="销售"){
             
                this.xs="销售";
                 this.positions = "销售";
				}
				
				if(this.positions!=""){
					 if(this.js!=""&&this.xs!=""){
					this.positions="SPA技师";
				}
          this.dainum()            
				}
       })
              
   })
			},
				todayaddmeth(){
   this.$router.push({
                name: "todayadd"               
              });
	},
		todaycheng(){
   this.$router.push({
                name: "todaycheng"               
              });
	},
	keguanmeth(){
   this.$router.push({
                name: "classhour"               
              });
	},
	huisuometh(){
   this.$router.push({
                name: "clubPerformance"               
              });
	},
	
			dainum(){
         this.instance.$post('/rest/wx/records/countUntreatedRecord',{
								name:this.positions
							},res => {
				 console.log(88888);				
			 console.log(res);
			 if(res.rel){
				 if(res.total!=0){
					 this.totaldai = res.total;
					 this.dainum1 = true
				}
			 }else{
				 this.$vux.toast.text(res.message)
			 }
		
           })
			},

			medaiban(){
       
             this.$router.push({
                name: "yuandaihui",
                query: {
                 
                
                }
              });
			
			},
			settmubiao(){
        this.$router.push({
                name: "parsontarget",
                query: {
                  
                
                }
              });
			},
			dianziht(){
              this.$router.push({
                name: "shoudianziht",
                query: {
                  
                
                }
              });
			},
		addcus(){
       this.$router.push({
                name: "addclient",
                query: {
                }
              });
		},
		yejichaxun(){
        this.$router.push({
                name: "empPerformance",
                query: {
                  
                
                }
              });
		},
		fenxiangka(){
      this.$router.push({
                name: "fenxiangmenu",
                query: {
                  
                
                }
              });
		},
		ticepinggu(){
       this.$router.push({
                name: "newticepinggu"
              });
		},
			meirong(){
      this.$router.push({
                name: "meirongshouye",
                query: {
                  
                
                }
              });
		},
		jiedai(){
     this.$router.push({
                name: "cusjiedai",
                query: {
                  
                
                }
              });
		},
		ainbody(){
		
      this.$router.push({
                name: "inbodylist",
                query: {
                  
                
                }
              });
		},
    cheng:function(rate){		
        this.instance.$post('/rest/wx/employee/getEmpAimInfoByData',{ status:2},res => {
        console.log(res);
        this.feng(1)
					this.yueyeji.push(res.rows[0])
					
    },error=>{this.$refs.loadmore.onTopLoaded()},rate)
	},
	
	//个人目标
  feng(rate){
     this.instance.$post('/rest/wx/employee/getEmpAimInfo',{ status:2},res => {
				console.log(JSON.stringify(res));
				this.resceshi = res;
				if(res.rows.length>0){

      this.salePerformance=res.rows[0].salePerformance
			 this.consumePerformance=res.rows[0].consumePerformance
			 this.customerNumber=res.rows[0].customerNumber
			 this.revisitNumber=res.rows[0].revisitNumber
			 this.dealCustomer=res.rows[0].dealCustomer
				}
			this.ismubiao()
    },error=>{this.$refs.loadmore.onTopLoaded()},rate)
	},
	ismubiao(){
    if(this.salePerformance==0 && this.consumePerformance==0 && this.customerNumber==0 && this.revisitNumber==0 && this.dealCustomer==0){
			this.mubiaoflag = false;
			this.nomubiaoflag = true;
		}else{
				this.mubiaoflag = true;
					this.nomubiaoflag = false;
		}
	},
    //  提示框 比如请输入电话号码  调 this.config.showTip(this,"请输入电话号码");
    // post请求
  //  this.instance.$post('/rest/wx/customer/getc',{请求参数},res => {
  //      console.log(res);
  //  })
  // get请求
   //  this.instance.$get('/rest/wx/customer/getc',{params: { 请求参数 }},res => {
  //      console.log(res);
  //  })
//this.$vux.toast.text("请选择项目类型");
// customerId:this.$route.query.customerId,

    // 下拉刷新状态
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
        // 隐藏下拉刷新方法
       this.fang()
		 this.getcustomer()
		  //this.cheng()
			this.jurisdiction()
      
      }, 300);
    }
  },
 mounted(){
    
 },
  components: {
  },
 watch: {
	 '$store.state.jurisdiction': function () {
	  //你需要执行的代码
	  this.getquanxian();
	}
 }

//     myValue: function(newVal, oldVal) {
// 		//其他业务代码
// 		console.log(newVal+"*"+oldVal)
//     }
// }
};
</script>

<style scoped lang='less'>
    // *{margin:0;padding:0}
		// 	html{overflow-x:hidden;}
		// 	 body{font-size: 12px;background: #F7F7F7;}
		.fengexian{height:10px;background:rgba(247,247,247,1);}
		.nomubiao{height:2.6rem;line-height: 2.6rem;text-align: center;}
		.nomubiao p{font-size: 0.32rem;}
		.nomubiao a{font-size: 0.32rem;color:#4978B0;}
			 em{font-style: normal;}
			 .daibannum{position: absolute;top:0;right:-0.2rem;height:0.3rem;line-height: 0.26rem;text-align: center;background: #FF0000;
			    border-radius: 50%;padding:0 0.1rem;
			 }
			 .daibannum span{color:#fff;font-size: 0.22rem;}
			  .qi_home_header{width:100%;background: #4978B0;position: relative;}
		      .qi_home_guang{background: url(../../assets/images/guang.png) no-repeat;background-size:100%;}
		   .today_yeji{text-align: center;padding:30px 0;}		  
		   .today_yeji .todayval{font-size: 0.72rem;color: #fff;}
		   .today_yeji .text{font-size: 0.3rem;color: #fff;}
		   a{text-decoration: none;}
		   .xian{background: url(../../assets/images/qi_home_xian.png) no-repeat;background-size:100%;width:90%;height:1px;margin: 0 auto;}
		   .yeji_con{display: flex;padding:0.2rem 0;}
		   .yeji_con .item{flex:1;text-align: center;}
		   .yeji_con .value{font-size: 0.48rem;color: #fff;}
		   .yeji_con .text{font-size: 0.24rem;color: #fff;padding-top: 0.1rem;}
		   .daiban{text-align: center;position: absolute;top:38px;right: 18px;}
		   .daiban img{width:0.38rem;height:0.44rem;}
		    .daiban p{font-size: 0.3rem;color: #fff;}
		     .geren_mubiao_wrap{background: #fff;} 
		     .geren_mubiao_header{}
		     .geren_mubiao_header p{font-size: 0.34rem;color: #1D1D1D;font-weight: 500;padding:0.2rem 0 0.1rem 0.3rem;}
			 
			 .total_yeji{margin:0 auto;width:90%;}
			 .total_yeji .miaosu{/*padding-top: 0.2rem;*/}
		     .total_yeji p{font-size: 0.28rem;color: #1D1D1D;position: relative;bottom: -0.16rem;}			 
			 .zhongchang{margin:0 auto; width:100%;height:0.2rem;background: #99CBFF;border-radius: 10px;}
			 .zhongchang1{margin:0 auto; width:100%;height:0.2rem;background: #FFD284;border-radius: 10px;}
			 .zhongchang2{margin:0 auto; width:100%;height:0.2rem;background: #99CBFF;border-radius: 10px;}
			 .zhongchang3{margin:0 auto; width:100%;height:0.2rem;background: #FFD284;border-radius: 10px;}
			  .zhongchang4{margin:0 auto; width:100%;height:0.2rem;background: #FFD284;border-radius: 10px;}
			 .jindu{/*width:50%;*/height:0.2rem;background: #3598FF;border-radius: 10px;}
			  .jindu1{/*width:50%;*/height:0.2rem;background: #FFA21E;border-radius: 10px;}
			   .jindu2{/*width:50%;*/height:0.2rem;background: #3598FF;border-radius: 10px;}
			  .jindu3{/*width:50%;*/height:0.2rem;background: #FFA21E;border-radius: 10px;}
			  .jindu4{/*width:50%;*/height:0.2rem;background: #FFA21E;border-radius: 10px;}
			 
			 .num_wrap{height:0.7rem;line-height: 0.7rem;font-size: 0.24rem;color: #999999;padding-top: 0.04rem;}
			 .num_wrap .wancheng{float:left;}
			 .num_wrap .mubiao{float:right;}
			 			
		    
		    .fang_num{width:12%;height:0.36rem;line-height:0.36rem;background: #3598FF;text-align: center;border-radius:14px ;
		                position: relative;top:0.28rem;font-size:0.2rem;color:#fff;overflow: hidden;
		    }
		    .fang_num1{width:12%;height:0.36rem;line-height:0.36rem;background: #FFA21E;text-align: center;border-radius:14px ;
		                position: relative;top:0.28rem;font-size:0.2rem;color:#fff;overflow: hidden;
		    }
		    .fang_num2{width:12%;height:0.36rem;line-height:0.36rem;background: #3598FF;text-align: center;border-radius:14px ;
		                position: relative;top:0.28rem;font-size:0.2rem;color:#fff;overflow: hidden;
		    }
		    .fang_num3{width:12%;height:0.36rem;line-height:0.36rem;background:#FFA21E;text-align: center;border-radius:14px ;
		                position: relative;top:0.28rem;font-size:0.2rem;color:#fff;overflow: hidden;
		    }
		    .fang_num4{width:12%;height:0.36rem;line-height:0.36rem;background:#FFA21E;text-align: center;border-radius:14px ;
		                position: relative;top:0.28rem;font-size:0.2rem;color:#fff;overflow: hidden;
		    }
		    .changyong_menu{background: #fff;}
		    .changyong_header{height:1rem;line-height: 1rem; padding:  0 5%;}
		    .changyong_header .text{float: left;font-size: 0.34rem;color: #1D1D1D;}
		    .changyong_header .add{float: right;font-size: 0.24rem;color: #999999;text-shadow:0px 3px 20px rgba(74,119,176,0.5); } 
				//  .changyong_con1{display: flex;flex-wrap:wrap;}
				.clear:after{content:'';display:block;clear:both;}
        .clear{zoom:1;}

				.changyong_con1{width:100%;}
		    .changyong_con1 .item{float: left; text-align: center;width:25%;margin-bottom:0.3rem;}
		    .changyong_con1 img{width:0.46rem;height:0.46rem;padding-bottom: 0.2rem;}
		    .changyong_con1 p{font-size: 0.24rem;color: #1D1D1D;padding-top:0.1rem;}
				.changyong_con2{margin-top:0.3rem;padding-bottom: 0.2rem;}
				.changyong_con3{padding-bottom: 0.2rem;}
		    .bottom_wrap{display: flex;background: #F7F7F7;height:1rem;width:100%;position: fixed;bottom: 0.04rem;
		    border-top:1px solid rgba(175,175,175,0.7);
		    }
		   
		   .bottom_wrap .item{flex:1;text-align: center;}
		   .bottom_wrap .item .active{background: #DCE4F1;}
		    .bottom_wrap img{width:0.5rem;padding-top:0.1rem;}
		    .bottom_wrap p{font-size: 0.2rem;color: #686868;padding-top: 0.1rem;}
		    .shouye{background: #DCE4F1;border-radius: 6px;}
		    .kehu{background: blue;}
		    .jingying{background: #999;}
		    .me{}
		    .bottom_height{width:100%;height:1.2rem;}
		    
		    .feng1{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_addcustomer@2x.png) no-repeat;background-size:contain ;}
		    .feng2{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_achievement@2x.png) no-repeat;background-size:contain ;}
		    .feng3{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_myclient@2x.png) no-repeat;background-size:contain ;}
		    .feng4{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_experiencecard@2x.png) no-repeat;background-size:contain ;}
		    .feng5{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_evaluation@2x.png) no-repeat;background-size:contain ;}
		    
		    .feng6{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_substitute@2x.png) no-repeat;background-size:contain ;}
		     .feng7{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_customerreception@2x.png) no-repeat;background-size:contain ;}
	 .feng8{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_classrecords@2x.png) no-repeat;background-size:contain ;}
	 .feng21{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_order@2x.png) no-repeat;background-size:contain ;}
		.feng22{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_stencil@2x.png) no-repeat;background-size:contain ;}
		 .feng23{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_inbodytest@2x.png) no-repeat;background-size:contain ;}
			.feng24{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_spafile@2x.png) no-repeat;background-size:contain ;}
			 .feng25{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_schedulecheck@2x.png) no-repeat;background-size:contain ;}
				.feng26{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_sharecare@2x.png) no-repeat;background-size:contain ;}
				 .feng27{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_contract@2x.png) no-repeat;background-size:contain ;}
	    .feng34{display: inline-block;width:0.54rem;height:0.54rem; background: url(../../assets/images/home_menu_classissued@2x.png) no-repeat;background-size:contain ;}
</style>
