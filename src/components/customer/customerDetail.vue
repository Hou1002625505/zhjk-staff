<template>
 <div class='container' >
      <mt-loadmore :top-method="loadTop"   :max-distance="150"
                 @top-status-change="handleTopChange" ref="loadmore">
                  <div slot="top" class="mint-loadmore-top">
                    <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                    <span v-show="topStatus === 'loading'">
                            <mt-spinner type="triple-bounce" class="loading-more" :size="20"></mt-spinner>
                  </span>
                    <span v-show="topStatus === 'drop'">松开刷新</span>
                  </div>
       <div>
       	<div class="customer_data">
			<div class="customer_K">
				<div class="customer_head">
					<img :src="fldsex==1?require('../../assets/images/boy-photo@2x.png'):fldsex==0 || fldsex==2?require('../../assets/images/girl-photo@2x.png'):require('../../assets/images/default.png')" />
					<div class="active" id="dynamic">{{activeStatus}}</div>
				</div>
				<div class="customer_info">
					<div class="name"><img :src="fldsex==1?require('../../assets/images/icon_boy@2x.png'):require('../../assets/images/icon_girl@2x.png')" id="sexImg"/>
						<p id="name">{{fldfirstname}}</p>
						<p class="birthday"><span id="birthday"></span></p>
					</div>
					<a :href="'tel:'+fldworkphone" class="phone" id="phone">{{fldworkphone}}</a>
					<div class="registerShop" style="margin-bottom: 0;">注册分店：<span id="registerShop">{{hospname}}</span></div>
					<div class="cancel">
						<div class="checkbox" @click="genjinstatus()"></div><p style="height: 0.3rem;line-height: 0.34rem;">不再跟进</p></div>
				</div>
			</div>
		</div>
		<div class="memberinfo">
			<div class="info" id="packageDetail" @click="packagedetail()">
				<img src="../../assets/images/icon_package@2x.png" />
				<p>套餐详情</p>
			</div>
			<div  class="info" id="huifangjilu" @click="huifangjilu()">
				<img src="../../assets/images/icon_returnvisit@2x.png" />
				<p>回访记录</p>
			</div>
            <div class="info" id="packageDetail" @click="jiedaidetail()">
				<img src="../../assets/images/icon_receptiondetails@2x.png" />
				<p>问卷调查</p>
			</div>
			<div  class="info" id="huifangjilu" @click="ticeping()">
				<img src="../../assets/images/icon_bodytes@2x.png" />
				<p>体测评估</p>
			</div>
			<div class="info"  id="dianzihet" @click="dianzihetong()"> 
				<img src="../../assets/images/icon_contract@2x.png" />
				<p>电子合同</p>
			</div>
		</div>
		<div class="fitst">
			<div class="title">基本信息</div>
			<div class="datalist">
				<div class="costomer_xin">
					<div class="costomer_xi">会员卡号</div>
					<div class="costomer_xi" @click="showkaliebiao()"><span id="cardNo">{{firstRegistCard?firstRegistCard:"__"}}</span><span v-show="showarrow" class="arrow"></span></div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">出生日期</div>
					<div class="costomer_xi" ><span>{{birthday1?birthday1:"__"}}</span></div>
				</div>
					<div class="costomer_xin">
					<div class="costomer_xi">客户年龄</div>
					<div class="costomer_xi" ><span>{{birthday1?fangage:"__"}}</span></div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">最后到店</div>
					<div class="costomer_xi" id="arrivalAime">{{lastVisit?lastVisit.split(" ")[0]:"__"}}</div>
				</div>
				<!--<div class="costomer_xin">
					<div class="costomer_xi">结婚纪念日</div>
					<div class="costomer_xi" id="commemoration"></div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">兴趣爱好</div>
					<div class="costomer_xi" id="interest"></div>
				</div>-->
				<!--<div class="costomer_xin">
					<div class="costomer_xi">客户来源</div>
					<div class="costomer_xi" id="customer_source">__</div>
				</div>-->
			</div>
		</div>
		<div class="second">
			<div class="title">消费情况</div>
			<div class="datalist">
				<!--<div class="costomer_xin">
					<div class="costomer_xi">月到店次数</div>
					<div class="costomer_xi" id="store_number">__</div>
				</div>-->
				<!--<div class="costomer_xin">
					<div class="costomer_xi">月交款金额</div>
					<div class="costomer_xi" id="store_money">__</div>
				</div>-->
				<div class="costomer_xin">
					<div class="costomer_xi">年到店次数</div>
					<div class="costomer_xi" id="year_number">{{visitYear?visitYear+"次":"__"}}</div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">年交款金额</div>
					<div class="costomer_xi" id="year_money">{{costYear?costYear+"元":"__"}}</div>
				</div>
			</div>
		</div>
		<div class="third" style="margin-bottom: 20px;">
			<div class="title">服务人员</div>
			<div class="datalist">
				<div class="costomer_xin">
					<div class="costomer_xi">美容顾问</div>
					<div class="costomer_xi" id="beautyAdvisor">{{spaSaleName?spaSaleName:"__"}}</div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">健身顾问</div>
					<div class="costomer_xi" id="fitnessConsultant">{{fitSaleName?fitSaleName:"__"}}</div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">私人教练</div>
					<div class="costomer_xi" id="privateCoach">{{fitCoachName?fitCoachName:"__"}}</div>
				</div>
			</div>
		</div>
        </div>
         </mt-loadmore>
		<div class="kaliebiao" v-show="kaliebiaoflag">
			<p v-for="(item,index) in kaliebiaolist" :key="index">{{item.carcode1}}</p>			
		</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
	   filid:this.$route.query.filid,
	    //filid:'099105851',
       getDetailarr:[],
	   topStatus: "",
	   activeStatus: "",
		costYear: "",
		firstRegistCard: "",
		fitCoachId: "",
		fitSaleCode: "",
		fitSaleId: "",
		fitSaleName: "",
		fldclientid: "",
		fldfirstname: "",
		fldsex: "",
		fldworkphone: "",
		hospname: "", 
		lastVisit: "",
		postcode: "",
		sameMobileCount: "",
		spaSaleId: "",
		visitMonth: "",
		visitYear: "",
		kaliebiaoflag:false,
		kaliebiaolist:[],
		showarrow:false,
		birthday1:"",
		fangage:"" 
     }
   },
   created(){
     console.log(this.filid)
	 this.getDetail()
   },
   methods: {
       getDetail(rate){
            this.getDetailarr = []
         this.instance.$post('/rest/wx/customerGx/findCustomerGx ',{fldclientid:this.filid},res => {
		console.log(res);
		this.genjinzhuangtai()
		this.getDetailarr.push(res.rows[0])
		this.activeStatus=res.rows[0].activeStatus
		this.costYear=res.rows[0].costYear
		this.firstRegistCard=res.rows[0].firstRegistCard
		this.fitCoachId=res.rows[0].fitCoachId
		this.fitSaleCode=res.rows[0].fitSaleCode
		this.fitSaleId=res.rows[0].fitSaleId
		this.fitSaleName=res.rows[0].fitSaleName
		this.fldclientid=res.rows[0].fldclientid
		this.fldfirstname=res.rows[0].fldfirstname
		this.fldsex=res.rows[0].fldsex
		this.fldworkphone=res.rows[0].fldworkphone
		this.hospname=res.rows[0].hospname
		this.lastVisit=res.rows[0].lastVisit
		this.postcode=res.rows[0].postcode
		this.sameMobileCount=res.rows[0].sameMobileCount
		this.spaSaleId=res.rows[0].spaSaleId
		this.visitMonth=res.rows[0].visitMonth
		this.visitYear=res.rows[0].visitYear
		var fangyear = parseInt(res.rows[0].birthday.split('-')[0])
		if(fangyear>0){
			this.birthday1 = res.rows[0].birthday
				
			this.fangage = parseInt(this.config.formatDate1(this.config.currentTime()).split('-')[0])-fangyear
			// console.log('fff')
			// console.log(this.fangage)
		}
    

         this.$refs.loadmore.onTopLoaded()        
            
    },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
	},
	
	genjinzhuangtai(){
		
         this.instance.$post('/rest/wx/customerGx/getVisitStatus',{
			 userId:this.filid
		 },res => {
		this.getkaliebiao()	 
	   console.log(res)
	   if(res.rows[0].status==0){
			$(".checkbox").addClass("active");
		}
       })
	},
	getkaliebiao(){
       	
             this.instance.$post('/rest/wx/customerGx/getUserGxCardList',{
			 userId:this.filid
		 },res => {
	   console.log(res)
	   
	  if(res.status){
		  var data = res.rows;
		  if(data.length>1){
			
			  data.forEach(item => {
				  this.kaliebiaolist.push(item)
			  });
              this.showarrow = true;
		  }
			 
	  }

	   })
  
	},
    showkaliebiao(){
       if(this.kaliebiaoflag){
			  this.kaliebiaoflag=false;
		}else{
		      this.kaliebiaoflag=true;
		}
	},

	genjinstatus(){
        if($(".checkbox").hasClass("active")){
           	  	this.VisitStatus(1)
			}else{
			this.VisitStatus(0)
        }
	},
	VisitStatus(sta){
       this.instance.$post('/rest/wx/customerGx/updateVisitStatus',{
			 customerGxId:this.filid,
             status:sta
		 },res => {
	   console.log(res)
	   if(res.status){
			if(sta==1){
				$(".checkbox").removeClass("active");
			}else{
				$(".checkbox").addClass("active");
			}
		}else{
			this.$vux.toast.text(res.message, "center");
		}
       })
	},
	packagedetail(){
        this.$router.push({
                name: "package_details",
                query: {
                  filid: this.filid
                }
              });
	},
    dianzihetong(){
       this.$router.push({
                name: "dianzihetong",
                query: {
                  filid: this.filid
                
                }
              });
	},
	 huifangjilu(){
       this.$router.push({
                name: "kedaihuifang",
                query: {
                  filid: this.filid
                }
              });
	},
	ticeping(){
		this.$router.push({
                name: "sideHistory",
                query: {
                  filid: this.filid,
                  mobile:this.fldworkphone
                }
              });
	},
	taocandetail(){
        this.$router.push({
                name: "package_details",
                query: {
                  filid: this.filid
                }
              });
	},
	jiedaidetail(){
      this.$router.push({
                name: "jiedaidetail",
                query: {
                  filid: this.filid
                }
              });
	},
   handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
		// 隐藏下拉刷新方法
		 this.pageVal = 1;
        this.loading = 1;
        this.getcustomer(1)
      }, 300);
	}
   },
   components: {
   }
 }
</script>

<style scoped lang="less">
.kaliebiao{width:40%;text-align: center;background: #f7f7f7;position: absolute;right:0;top:52%;}
.kaliebiao p{font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);
line-height: 0.5rem;
}
   .customer_data {
			padding-top: 0.2rem;
		}
		
		.customer_data .customer_K {
			width: 92%;
			overflow: hidden;
			margin: 0 auto;
			box-shadow: 0px 0px 2px 0px rgba(73, 120, 176, 0.5);
			border-radius: 20px 20px 0px 0px;
		}
		
		.customer_K .customer_head {
			width: 19%;
			position: relative;
			float: left;
			margin: 0.32rem 0.3rem;
			margin-right: 0.1rem;
		}
		
		.customer_head img {
			width: 1.2rem;
			height: 1.2rem;
			border-radius: 50%;
		}
		
		.customer_head .active {
			position: absolute;
			text-align: center;
			background-color: #FFA21E;
			color: #fff;
			border-radius: 15px;
			width: 0.96rem;
			font-size: 0.28rem;
			height: 0.38rem;
			line-height: 0.4rem;
			bottom: -0.12rem;
			left: 0.12rem;
		}
		
		.customer_data .customer_info {
			position: relative;
			width: 70%;
			color: #1D1D1D;
			float: left;
			font-size: 0.3rem;
			padding: 0.36rem 0;
		}
		
		.customer_data .customer_info .cancel {
			position: absolute;
			right: -0.1rem;
			top: 0.38rem;
			font-size: 0.32rem;
			width: 1.8rem;
		}
		
		.customer_data .customer_info .cancel .checkbox {
			width: 0.3rem;
			height: 0.3rem;
			border: 1px solid #4978B0;
			float: left;
			margin-right: 0.06rem;
			border-radius: 2px;
		}
		
		.customer_data .customer_info .cancel .checkbox.active {
			width: 0.32rem;
			height: 0.32rem;
			background: url(../../assets/images/icon_nofollowup@2x.png) no-repeat;
			background-size: 100% 100%;
			border: none;
		}
		
		.customer_data .customer_info div {
			margin-bottom: 0.21rem;
		}
		
		.customer_data .customer_info .name {
			font-size: 0.32rem;
		}
		
		.customer_data .customer_info .registerShop {
			line-height: 0.38rem;
		}
		
		.customer_data .customer_info .phone {
			display: block;
			width: 1.98rem;
			color: #4978B0;
			text-align: center;
			border-bottom: 1px solid #4978B0;
			margin-top: 0.53rem;
			line-height: 0.36rem;
			margin-bottom: 0.21rem;
		}
		.customer_data .customer_info .name p {
			float: left;
			    width: 22%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 0.38rem;
line-height: 0.38rem;
		}
		 .arrow:after {
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 0 2px 2px 0;
    border-color: #d6d6d6;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    // position: absolute;
    // top: 50%;
    // margin-top: -6px;
    // right: 16px;
   margin-left:0.2rem;
}
		.customer_data .customer_info .name p.birthday {
			color: #FFA21E;
			font-size: 0.3rem;
		}
		
		.customer_data .customer_info .name p img {
			width: 0.3rem;
			margin: 0 0.2rem;
			margin-right: 0.15rem;
			vertical-align: top;
		}
		
		.customer_data .customer_info .name img {
			width: 0.22rem;
			float: left;
			margin-right: 0.1rem;
		}
		
		.memberinfo {
			//display: flex;
			padding: 0.44rem 0 0.4rem 0;
			box-shadow: 0px 0px 4px 0px rgba(73, 120, 176, 0.5);
			margin-top: 0px;
			background-color: #fff;	
			 overflow-x: auto;
			 white-space: nowrap;
		}
		
		.memberinfo .info {
			//display: inline-block;
			//float:left;
			position: relative;
			//  flex: 1;
			//  -webkit-flex: 1;
			width:22%;
			text-align: center;
			display: inline-table;
		}
		
		.memberinfo .info p {
			font-size: 0.3rem;
		}
		
		.memberinfo .info img {
			width: 0.68rem;
			margin-bottom: 0.2rem;
		}
		
		.memberinfo .info .line {
			position: absolute;
			width: 1px;
			height: 1.1rem;
			right: 0;
			top: 0.06rem;
			background-color: #F7F7F7;
		}
		
		.title {
			padding: 0.36rem 0.3rem;
			font-size: 0.35rem;
			font-weight: bold;
		}
		
		.datalist {
			border-bottom: 1px solid #F7F7F7;
		}
		
		.costomer_xin {
			display: flex;
			border-top: 1px solid #F7F7F7;
			padding: 0.3rem;
			font-size: 0.3rem;
		}
		
		.costomer_xi {
			flex: 1;
			-webkit-flex: 1;
		}
		
		.costomer_xin .costomer_xi:last-child {
			text-align: right;
		}
		
		.second,
		.third {
			border-top: 10px solid #F7F7F7;
		}
		
		.costomer_xi img {
			width: 0.3rem;
			vertical-align: middle;
			margin-left: 0.1rem;
		}
</style>
