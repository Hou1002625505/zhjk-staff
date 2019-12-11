<template>
 <div class='container'>
      <div class="nav">
		<div class="weui-tab">
			<div class="weui-navbar">
				<a class="weui-navbar__item " :class="{'weui-bar__item--on':youxiao==1}"  @click="tabselect(1)">
					有效
				</a>
				<a class="weui-navbar__item" :class="{'weui-bar__item--on':youxiao==2}"   @click="tabselect(2)">
					失效
				</a>
				<a class="weui-navbar__item" :class="{'weui-bar__item--on':youxiao==3}"   @click="tabselect(3)">
					冻结
				</a>
			</div></div></div>
			<div class="weui-tab__bd" style="padding-top: 1.32rem;">

				<div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active" v-if="youxiao==1">
					<div class="data_list" id="data_list1">
						<div class="validItem" v-for="(item,index) in taocanyouxiao" :key="index" @click="taocandetail(item.customerPackageId,item.packageName,item.buyDate,item.openDate,item.closedate,item.remainMoney)">
							<div class="give" v-if="item.freeuser==1"></div>
							<div class="package_title">
								<div class="line"></div>会员卡号:{{item.outsideCode}}</div>
							<div class="packageInfo">
								<div class="item"><span>套餐名称：</span>{{item.packageName}}</div>
								<div class="item"><span>余 <em>{{(item.packageType==1||item.packageType==2)?'次':'额'}}</em>：</span>{{(item.packageType==1||item.packageType==2)?item.maxCount>0?item.maxCount-item.usedCount+'次':0+'次':item.remainMoney+'元'}}</div>
								<div class="item"><span>失效时间：</span>{{item.closedate?yyyy_MM_dd(item.closedate):''}}</div>
								<div class="item"><span>购买时间：</span>{{item.buyDate?yyyy_MM_dd(item.buyDate):''}}</div>
							</div>
						</div>
					</div>
					 	 		
          	     <div class="zanwujilu a" v-if="zanyouxiao"><span>暂无数据</span></div>
			  </div>

				<div id="tab2" class="weui-tab__bd-item"  v-if="youxiao==2">
					<div class="data_list" id="data_list2">
                        <div class="validItem" v-for="(item1,index) in taocanshixiao" :key="index">
							<div class="give" v-if="item1.freeuser==1"></div>
							<div class="package_title">
								<div class="line"></div>会员卡号:{{item1.outsideCode}}</div>
							<div class="packageInfo">
								<div class="item"><span>套餐名称：</span>{{item1.packageName}}</div>
								<div class="item"><span>余 <em>{{(item1.packageType==1||item1.packageType==2)?'次':'额'}}</em>：</span>{{(item1.packageType==1||item1.packageType==2)?item1.maxCount>0?item1.maxCount-item1.usedCount+'次':0+'次':item1.remainMoney+'元'}}</div>
								<div class="item"><span>失效时间：</span>{{item1.closedate?yyyy_MM_dd(item1.closedate):''}}</div>
								<div class="item"><span>购买时间：</span>{{item1.buyDate?yyyy_MM_dd(item1.buyDate):''}}</div>
							</div>
						</div>
					</div>
	                  
          	        <div class="zanwujilu b"  v-if="zanshixiao"><span>暂无数据</span></div>
				</div>
				<div id="tab3" class="weui-tab__bd-item"  v-if="youxiao==3">
					<div class="data_list" id="data_list3">
                        <div class="validItem" v-for="(item,index) in taocandongjie" :key="index">
							<div class="give" v-if="item.freeuser==1"></div>
							<div class="package_title">
								<div class="line"></div>会员卡号:{{item.outsideCode}}</div>
							<div class="packageInfo">
								<div class="item"><span>套餐名称：</span>{{item.packageName}}</div>
								<div class="item"><span>余 <em>{{(item.packageType==1||item.packageType==2)?'次':'额'}}</em>：</span>{{(item.packageType==1||item.packageType==2)?item.maxCount>0?item.maxCount-item.usedCount+'次':0+'次':item.remainMoney+'元'}}</div>
								<div class="item"><span>失效时间：</span>{{item.closedate?yyyy_MM_dd(item.closedate):''}}</div>
								<div class="item"><span>购买时间：</span>{{item.buyDate?yyyy_MM_dd(item.buyDate):''}}</div>
							</div>
						</div>
					</div>
					 	 
          	         <div class="zanwujilu c"  v-if="zandongjie"><span>暂无数据</span></div>
				</div>
			</div>
		</div> 
 
</template>

<script>
 export default {
   data () {
     return {
		 filid:this.$route.query.filid,
		 taocanyouxiao:[], 
		  taocanshixiao:[], 
		   taocandongjie:[],
		   youxiao:1,
		   zanyouxiao:false,
		   zanshixiao:false,
		     zandongjie:false
     }
   },
   created(){
	  this.gettaocandetail()
   },
   methods: {
      gettaocandetail(){
		    this.instance.$post('/rest/wx/customerGx/getCustomerGxPackageList',{
				pageFlag:false,
				userId:this.filid,
				status:1
			},res => {
				
			
	   console.log(res);
          if(res.status){
             var data = res.rows;
			data.forEach(item => {
				this.taocanyouxiao.push(item)
			});
		  }else{
			 this.zanyouxiao = true;  
		  }  
		 this.gettaocandetail2()	

      })
	  },
	    gettaocandetail2(){
		    this.instance.$post('/rest/wx/customerGx/getCustomerGxPackageList',{
				pageFlag:false,
				userId:this.filid,
				status:2
			},res => {
			
			 if(res.status){	
	   console.log(res);
		var data = res.rows;
	
		data.forEach(item => {
			this.taocanshixiao.push(item)
		});
			 }else{
				this.zanshixiao = true;   
			 }

			 console.log(this.taocanshixiao)
			  this.gettaocandetail6()
      })
	  },
	   gettaocandetail6(){
		    this.instance.$post('/rest/wx/customerGx/getCustomerGxPackageList',{
				pageFlag:false,
				userId:this.filid,
				status:6
			},res => {
				 if(res.status){	
	   console.log(res);
		var data = res.rows;
		data.forEach(item => {
			this.taocandongjie.push(item)
		});
				 }else{
					 this.zandongjie = true;   
				 }
      })
	  },
	  taocandetail(id,name,buydate,opendate,closedate,rmoney){
         this.$router.push({
                name: "tcdetails",
                query: {
				  id: id,
				  name:name,
				  buydate:buydate,
				  opendate:opendate,
				  closedate:closedate,
				  rmoney:rmoney
                }
              });
	  },
	  tabselect(type){
		 this.youxiao = type;
		 console.log(type)
	  },		  
	 yyyy_MM_dd(value) {
				if(value.length == 8) {
					return value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
				} else if(value.length == 6) {
					return value.substring(0, 4) + "-" + value.substring(4, 6);
				} else {
					return value;
				}
		}

   },
   components: {
   }
 }
 
</script>

<style scoped lang="less">
    .container{width:100%;overflow-x: hidden;}
   .nav{
				     padding: 0.3rem 0;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
			}
			.weui-tab__bd-item {
				//display: none;
			}
			
			.weui-tab__bd .weui-tab__bd-item.weui-tab__bd-item--active {
				display: block;
			}
			
			.weui-navbar {
				position: inherit;
				width: 91%;
				border: 1px solid #4A77B0;
				border-radius: 5px;
				background-color: #fff;
				margin: 0 4.5%;
			}
			
			.weui-navbar__item {
				padding: 0.08rem 0;
				color: #4A77B0;
				font-size: 0.32rem;
				border-right: 1px solid #4A77B0;
			}
			
			.weui-navbar .weui-navbar__item:last-child {
				border-right: none;
			}
			
			.weui-navbar__item:after,
			.weui-navbar:after {
				border: none;
			}
			
			.weui-bar__item--on,
			.weui-navbar__item:hover {
				background-color: #4A77B0;
				color: #fff;
			}
			
			.data_list {
				margin-top: -0.06rem;
				padding-bottom: 0.07rem;
			}
			
			.validItem {
				position: relative;
				width: 92%;
				margin: 0 auto;
				height: 2.9rem;
				background: url(../../assets/images/img_bg@2x.png) no-repeat;
				background-size: 100%;
				margin-bottom: 0.18rem;
			}
			
			.validItem .give {
				position: absolute;
				width: 0.56rem;
				height: 0.56rem;
				top: 0.06rem;
				right: 0.06rem;
				background: url(../../assets/images/img_presentblue@2x.png) no-repeat;
				background-size: 100%;
			}
			
			.validItem .give.active {
				background: url(../../assets/images/img_presentgrey@2x.png) no-repeat;
				background-size: 100%;
			}
			
			.validItem .package_title {
				font-size: 0.32rem;
				padding: 0.16rem 0.4rem;
			}
			
			.package_title .line {
				display: inline-block;
				width: 2px;
				height: 0.3rem;
				background-color: #4A77B0;
				margin-right: 0.16rem;
				vertical-align: middle;
				margin-top: -0.05rem;
			}
			
			.validItem .item {
				font-size: 0.3rem;
				color: #1D1D1D;
				padding: 0rem 0.38rem;
				line-height: 0.48rem;
			}
			
			.validItem .item:first-child {
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			
			.validItem .packageInfo {
				margin-top: 0.038rem;
			}
			
			.validItem .item span {
				color: #999999;
				margin-right: 0.2rem;
			}
			
			.validItem .item em {
				font-style: normal;
				margin-left: 0.5rem;
			}
			.zanwujilu{position: fixed;top:0;left:0;bottom:0;right:0;background: #fff;text-align: center;padding-top: 4rem;
	        //   display: none;
	}
		.zanwujilu span {
			color: #919191;
			font-size: 0.3rem;
			
		}
</style>
