<template>
 <div class='container'>
    <div class="shangke_jilu_wrap">
			<div class="jilu_tab">
				<div class="wancheng fl" :class="{'jiluactive':conflag==1}"  @click="tabselect(1)">已领取</div>
				<div class="quxiao fl " :class="{'jiluactive':conflag==2}"  @click="tabselect(2)">已到店</div>
			</div>
           
           <!--已领取-->
			
			<div class="dataList" v-show="conflag==1">
                <div class="jilu_detailsitem" v-for="(item,index) in nokexiao" :key="index" :class="{active:item.deptName != 0}">
                    <div class="usermes">
                    <div class="userheadImg"><img :src="item.realName"/></div>
                    <div class="userphone"><a :href="'tel:'+ item.mobile" >{{item.mobile}}</a></div>
                    </div>
                    <div class="card_bottom">
                    <div class="lq_time lqtime"><p><span>{{item.packageName}}</span></p>
                    </div>
                    <div class="card_name"><p>领取时间：{{item.receiveDate.split(' ')[0]}}</p><p>活动时间：{{item.validDateEnd.split(' ')[0]}}</p>
                    </div>
                    </div>
                </div>
                <div class="zanwujilu_wrap" v-show="nodata1">
                    <div class="zanwujilu"></div>
                    <p>暂无记录</p>
                </div>
          </div>

			<!--已到店-->
			
			<div class="dataList" v-show="conflag==2">
                <div class="jilu_detailsitem"  v-for="(item,index) in yikexiao" :key="index" :class="{active:item.deptName != 0}">
                    <div class="usermes">
                    <div class="userheadImg"><img  :src="item.realName"/></div>
                   <div class="userphone" style="margin:0;"><a :href="'tel:'+ item.mobile" >{{item.mobile}}</a><span>{{item.name}}</span></div>
                    </div>
                    <div class="card_bottom">
                    <div class="lq_time lqtime"><em>领取时间：{{item.receiveDate.split(' ')[0]}}</em><em class="jiao_name"><span>{{item.packageName}}</span></em>
                    </div>
                   <div class="card_name"><p>使用时间：{{item.verifyDate.split(' ')[0]}}</p><p>活动时间：{{item.validDateEnd.split(' ')[0]}}</p>
                    </div>
                    </div>
                </div>
                <div class="zanwujilu_wrap" v-show="nodata2">
				<div class="zanwujilu"></div>
				<p>暂无记录</p>
			</div>
          </div>
			



		</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        nokexiao:[],
        yikexiao:[],
        nodata1:false,
        nodata2:false,
        conflag:1
     }
   },
   created(){
     this.getyilingqu()
   },
   methods: {
      getyilingqu(){
         this.instance.$post('/rest/wx/customerCoupon/getCustomerCouponListPage',{
            page: 1,
				rows: 20,
				param:{
					 status: "0" //0:未核销，1：已核销
				}
         },res => {
             this.getyidaodian()
       console.log(res);
       var data = res.rows
       if(data.length>0){     
       data.forEach(item => {
           this.nokexiao.push(item)
       });
        }else{
           this.nodata1 = true
        } 
   })
      },
      getyidaodian(){
         this.instance.$post('/rest/wx/customerCoupon/getCustomerCouponListPage',{
            page: 1,
				rows: 20,
				param:{
					 status: "1" //0:未核销，1：已核销
				}
         },res => {
       console.log(res);
       var data = res.rows
       if(data.length>0){     
       data.forEach(item => {
           this.yikexiao.push(item)
       });
        }else{
           this.nodata2 = true
        } 
   })
      },
      tabselect(type){
          this.conflag=type
      }

   },
   components: {

   }
 }
</script>

<style scoped lang="less">
	.fl {
			float: left;
		}
		
		.fr {
			float: right;
		}
		.jiao_name{display: inline-block; width:30%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;float:right;text-align: center;}
		.lqtime{height:0.4rem;}
		.lqtime p{width:30%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align: center;float: right;}
		/*.shangke_jilu_wrap{padding:0 0.3rem;}*/
		
		.shangke_jilu_wrap1 {
			padding: 0 0.3rem;
		}
		/*.jilu_tab{height:0.64rem;width:6.9rem;border: 1px solid #5176AB;border-radius: 4px;margin:0.3rem 0 0.2rem 0;}*/
		
		.jilu_tab {
			width: 100%;
			height: 0.64rem;
			padding: 0.3rem 0 0.3rem 0;
			position: fixed;
			top: 0;
			background-color: #fff;
			z-index: 999;
		}
		
		.jilu_tab .wancheng {
			height: 0.74rem;
			line-height: 0.74rem;
			width: 46%;
			text-align: center;
			color: #fff;
			font-size: 0.36rem;
			margin-left: 3.6%;
			border-radius: 4px 0 0 4px;
			background-color: #CDCDCD;
		}
		
		.jilu_tab .quxiao {
			height: 0.74rem;
			line-height: 0.74rem;
			width: 46%;
			text-align: center;
			font-size: 0.36rem;
			border-radius: 0 4px 4px 0px;
			    background-color: #CDCDCD;
			    color: #fff;
		}
		
		.jiluactive {
			background: #5176AB !important;
			color: #fff!important;
		}
		
		.jilu_detailsitem_wrap {
			padding: 0 0.3rem;
			margin-top: 1.28rem;
		}
		
		.riqi_header {
			height: 0.9rem;
			width: 100%;
			position: relative;
		}
		
		.riqi_header img {
			width: 0.4rem;
			height: 0.37rem;
			margin-top: 0.26rem;
			float: right;
		}
		
		.riqi_header input {
			width: 100%;
			height: 0.4rem;
			position: relative;
			bottom: 0.08rem;
			border: none;
			background: #E4E4E4;
			font-size: 0.36rem;
			color: #2C2E34;
		}
		
		.pictrue1 {
			display: inline-block;
			width: 42%;
		}
		
		.inputriqi {
			display: inline-block;
			width: 46%;
		}
		
		.jilu_detailsitem {
			width: 94%;
			margin:0 3%;
			height: 2.3rem;
			background: url(../../assets/images/experience_card.png) no-repeat;
			background-size: 100%;
		}
		.jilu_detailsitem.active{
			background:url(../../assets/images/discount_coupon.png) no-repeat;
			background-size: 100%;
		}
		
		.fanhuitoday {
			background: url(../../assets/images/fanhuitoday.png);
			background-size: 100%;
			width: 0.21rem;
			height: 0.3rem;
			position: absolute;
			left: 0.2rem;
			top: 0.28rem;
			font-size: 0.3rem;
			color: #04A1E9;
		}
		
		.shangke_time {
			font-size: 0.2rem;
			color: #919191;
			position: relative;
			left: -2.2rem;
			top: -0.2rem;
		}
		
		.jilu_date {
			color: #919191;
			font-size: 0.2rem;
			padding: 0.12rem 0 0 0.2rem;
		}
		
		.jiage {
			color: #FF0000;
			font-size: 0.4rem;
			display: inline-block;
		}
		
		.jiage1 {
			color: #919191;
			font-size: 0.4rem;
			display: inline-block;
		}
		
		.customer_name {
			padding: 0 0.3rem;
			height: 0.9rem;
			line-height: 0.9rem;
		}
		
		.pictrue {
			margin-top: 0.15rem;
			margin-left: 0.18rem;
			margin-right: 0.18rem;
		}
		
		.pictrue img {
			width: 0.56rem;
			height: 0.48rem;
		}
		
		.leixing {
			margin-top: 0.2rem;
			padding: 0 0.2rem;
			height: 0.5rem;
			line-height: 0.5rem;
			border: 1px solid #E4E4E4;
			border-radius: 0.25rem;
			text-align: center;
		}
		
		.leixing span {
			font-size: 0.26rem;
		}
		
		.recordDate {
			float: left;
			font-size: 0.36rem;
			padding-left: 0.32rem;
			padding-top: 0.18rem;
		}
		
		.mingzi {
			padding: 0 0.4rem;
			font-size: 0.3rem;
			padding-left: 0.25rem;
		}
		
		.jiantou {
			margin-top: 0.06rem;
		}
		
		.jiantou img {
			width: 0.2rem;
		}
		
		.zanwujilu_wrap,
		.zanwujilu_wrap2,
		.zanwujilu_wrap3 {
			width: 1.5rem;
			margin: 3.5rem auto 0;
		}
		
		.zanwujilu {
			width: 1.5rem;
			height: 1.3rem;
			background: url(../../assets/images/shangke_jilu.png);
			background-size: 100%;
		}
		
		.zanwujilu_wrap p,
		.zanwujilu_wrap2 p,
		.zanwujilu_wrap3 p {
			font-size: 0.36rem;
			color: #999;
			margin-top: 0.1rem;
		}
		
		.weui-loadmore_line {
			display: none;
		}
		
		.weui-loadmore_line .weui-loadmore__tips {
			padding: 0 1em;
			/*margin-bottom: 2em;*/
			color: #333;
		}
		
		.weui-loadmore_line .weui-loadmore__tips {
			margin-top: 0;
		}
		
		.weui-loadmore_line .weui-loadmore__tips {
			background-color: inherit;
		}
		
		.weui-loadmore_line {
			display: none;
			border-top: 1px solid rgba(255, 255, 255, .1);
		}
		.usermes{			   
			    padding-top: 0.45rem;  
                height:0.8rem;
		}
			.usermes .userheadImg{
				float: left;
				padding-left: 0.45rem;
			}
		.usermes .userheadImg img{
			width: 0.65rem;
			border-radius: 50%;
			border:1px solid #F8F8F8;
		}
		.usermes .userphone{
			float: left;
			font-size: 0.3rem;
			    padding-left: 0.2rem;
       margin-top: 0.15rem;
        }
        .usermes .userphone1{
			float: left;
			font-size: 0.3rem;
			    padding-left: 0.2rem;
       margin-top: -0.1rem;
		}
		.usermes .userphone a{
			display: block;
			/*width: 2rem;*/
			color: #6D6D6D;
			    line-height: 0.35rem;
			    margin-bottom: 0.08rem;
		}
			.usermes .userphone span{
				display: block;
		background-color: #61B5DC;
		text-align: center;
		color: #fff;
		font-size: 0.22rem;
		border-radius: 2px;
		padding:0 0.28rem;
		    width: 35%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
		}
		.card_bottom{
			
		
			padding: 0  0.45rem;
			color: #4E4E4E;
			font-size: 0.25rem;
			margin-top: 0.01rem;
		}
		.card_name{ 
			height:0.4rem;
		}
		.lq_time p{
		  //line-height: 0.5rem
		}
		.lq_time span{
		  //padding-left:82%;
		}
		.lq_time{
				
				//height:0.5rem;
		}
		
		.card_name p{
			float: left;
		}
		.card_name p:last-child{
			float: right;
		}
		.dataList{
			padding-top: 1.3rem;
		}
 
</style>
