<template>
 <div class='container'>
       	<div class="personal" v-for="(item,index) in getuserinfolist" :key="index">
			<div class="circle">
			<div class="headimg">
			</div>
				<div class="little"></div>
				<img :src="item.avatar" alt="" id="headimg">
              </div>
              <div class="personalinfo">
                  <p id="custmoer_name">{{item.realName}}</p>
                  <p id="custmoer_number">{{item.userName}}</p>
              </div>
            <!-- <div class="distance">
                <img src="../../assets/images/my_menu_morewhite@2x.png" alt="">
              </div> -->
            </div>
			<div class="fengexian"></div>
            <div class="menu">
            	  <!-- <div class="subitem">
                     个人中心 <div class="distance">
              </div>
              </div> -->
                   <!--根据当前完成业绩来移动jindu和fang_num-->
		<div class="geren_mubiao_wrap">
			<!-- <div class="geren_mubiao_header">
				<p>个人目标</p>
			</div> -->
			 <div class="benyuetarget">本月目标</div>
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
			</div>
			       <div class="fborderwraph"></div>
			       <div class="fborderwrap">
                   <div v-show="parsonflag">  
                   <router-link to="/me/parsontarget" tag="div">
                     <div class="fborderbott">
                     <div  class="subitem" style="font-weight:normal">
                     个人目标 <div class="distance">
                        <img src="../../assets/images/my_menu_more@2x.png" alt="">
                        </div>
                     </div>
                     </div>
                    </router-link>
                    </div>
                      	<a :href="url1">
					<div class="fborderbott">		  
						<div class="subitem" style="font-weight:normal">
								我的预约 <div class="distance">
							<img src="../../assets/images/my_menu_more@2x.png" alt="">
						</div>
						</div> 
                    </div>
                 </a>
                    	<a :href="url3">
						<div class="fborderbott">	
                        <div class="subitem" style="font-weight:normal">
                     方案模板 <div class="distance">
                <img src="../../assets/images/my_menu_more@2x.png" alt="">
              </div>
                     </div>
					 </div> 
                   </a>
				    
                   <router-link to="/me/yuanuppic" tag="div">
                    
                     <div  class="subitem" style="font-weight:normal;padding-left:0.3rem;">
                     上传照片 <div class="distance">
                        <img src="../../assets/images/my_menu_more@2x.png" alt="">
                        </div>
                     </div>
                     
                    </router-link>
                    
            </div>
            </div>
          
 </div>
</template>

<script>
 export default {
   data () {
     return {
       getuserinfolist:[],
       parsonflag:false,
      url1:this.config.service_ip1+'/train/?v='+new Date().getTime()+'#/management/richeng_management',//我的预约
      url3:this.config.service_ip1+'/train/?v='+new Date().getTime()+'#/trainerTemplate/planTemplate',//方案模板
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
      mubiaoflag:true,
			nomubiaoflag:false,
      //  url1:'http://crm.physicalclub.com/train/?v='+new Date().getTime()+'#/management/richeng_management',//我的预约
      // url3:'http://crm.physicalclub.com/train/?v='+new Date().getTime()+'#/trainerTemplate/planTemplate'//方案模板
     }
   },
   created(){
      this.getuserinfo()
	  this.cheng()
	  console.log('fff')
	  console.log(this.$store.state.jurisdiction)
   },
   methods: {
     getuserinfo(){
    this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
      console.log(JSON.stringify(res));
      this.getuserinfolist.push(res.rows[0])
      //alert(res.rows[0].avatar)
      this.getquanxian()
    })
     },
     	// 获取员工权限
			getquanxian(){
      	if(this.$store.state.jurisdiction.length>0){
				 this.$store.state.jurisdiction.forEach(item=>{
      if(item.permissionName == '个人目标'){
								this.parsonflag = true;
						}
               
					})
			}		 
      },
        cheng:function(rate){		
        this.instance.$post('/rest/wx/employee/getEmpAimInfoByData',{ status:2},res => {
        console.log(res);
        this.feng(1)
					this.yueyeji.push(res.rows[0])
					
    },error=>{this.$refs.loadmore.onTopLoaded()},rate)
	},
	settmubiao(){
        this.$router.push({
                name: "parsontarget",
                query: {
                  
                
                }
              });
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
   },
    watch: {
	 '$store.state.jurisdiction': function () {
	  //你需要执行的代码
	  this.getquanxian();
	}
 },
   		
     updated() {
    $('.distance').find('img').css({'width':'0.18rem'});
    
 },
   components: {
   }
 }
</script>

<style scoped lang="less">
   .fborderwraph{width:100%;height:10px;background-color: #fff;}
   .benyuetarget{padding:0.2rem 0 0 0.4rem;font-size:0.34rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(29,29,29,1);}
  .fborderwrap{border-bottom: 1px solid #f7f7f7;border-top: 1px solid #f7f7f7;} 
  .fborderbott{ border-bottom: 1px solid #f7f7f7;margin-left:0.3rem;}
   img{
		vertical-align: inherit;
	}
	 .personal{
         position: relative;
            padding: 0.35rem 0.3rem;
                padding-top: 0.4rem;
    color: #fff;
    overflow: hidden;
		  background-color: #4978B0;
		  padding-bottom: 0;
       }
       .circle{
       	position: relative;
       	float: left;
       	    width: 1.7rem;
    height: 2rem;
       }
       .personal .headimg{
       	position: absolute;
       	width: 1.7rem;
       	background-color: #8AB9F0;
       	height: 1.7rem;
       	border-radius: 50%;
       	opacity: 0.14;
    float: left;
    top: 0;
    z-index: 9;
       }
       .personal .little{
       	position: absolute;
       	   	width: 1.4rem;
       	background-color: #8AB9F0;
       	height: 1.4rem;
       	border-radius: 50%;
       	top: 0.15rem;
       	left: 0.15rem;
       	z-index: 99;
       	opacity: 0.2;
       }
      .circle  img{
      	position: absolute;
      	width: 1.15rem;
      	    height: 1.15rem;
           border-radius: 50%;
           float: left;
               border: 2px solid #fff;
               z-index: 9999;
              left: 0.245rem;
    top: 0.245rem;
    z-index: 999;
      }
          .personalinfo{
           float: left;
           padding-left: 0.3rem;
           color: #fff;
           width: 50%;
           font-size: 0.32rem;
               line-height: 0.48rem;
    padding-top: 0.35rem;
           
         }
        .personalinfo p:last-child{
               width: 100%;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
               font-size: 0.26rem;
           }
         .distance{
           position: absolute;
           text-align: center;
           right: 0.3rem;
           font-size: 0.3rem;
           top: 0.42rem;
         }
         .personal  .distance img{
             width: 0.18rem;
             float:none;
    margin-top: 0.76rem; 
           }
         .info img{
         width: 0.3rem;
         margin-left: 0.16rem;
         
       }
        .bottom_wrap{display: flex;background: #F7F7F7;height:1.1rem;width:100%;position: fixed;bottom: 0.04rem;}
		   .bottom_wrap .item{flex:1;text-align: center;}
		   .bottom_wrap .item .active{background: #DCE4F1;}
		    .bottom_wrap img{width:0.5rem;padding-top:0.1rem;}
		    .bottom_wrap p{font-size: 0.2rem;color: #686868;padding-top: 0.1rem;}
       .menu{
            width: 100%;
    // padding: 0 0.3rem;
    background-color: #fff;
        border-radius: 5px 5px 0px 0px;
        position: absolute;
		 top: 2.42rem;
		 border-top:10px solid rgba(247,247,247,1);
       }
       .menu .subitem:first-child{
       	font-weight: 700;
       	    font-size: 0.32rem;
       	    padding: 0.3rem 0.3rem 0.3rem 0;
       }
        .subitem{
        	display: block;
         position: relative;
    font-size: 0.3rem;
    color: #1D1D1D;
   
    padding: 0.36rem 0.36rem 0.36rem 0;
         }
           .subitem img{
              width: 0.58rem;
              vertical-align: middle;
            }
           .subitem .distance{
           position: absolute;
           text-align: center;
           right:0.3rem;
           font-size: 0.3rem;
           top: 0.32rem;
          
         }
         .subitem .distance  img{
             width: 0.18rem;
             float:none;
           }
       .subitem:active{
         background-color: #f7f7f7;
       }


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
		     .geren_mubiao_wrap{background: #fff;border-bottom:10px solid #f7f7f7;} 
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
</style>
