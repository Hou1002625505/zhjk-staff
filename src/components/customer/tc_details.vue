<template>
 <div class='container'>
	  <mt-loadmore :top-method="loadTop"   :max-distance="150"
                 @top-status-change="handleTopChange" ref="loadmore">
                  <div slot="top" class="mint-loadmore-top">
                    <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                    <span v-show="topStatus === 'loading'">
                            <mt-spinner type="triple-bounce" class="loading-more" :size="20"></mt-spinner>
                  </span>
                    <span v-show="topStatus === 'drop'">松开刷新</span>
                  </div>
    	<div class="nav">
		<div class="card_detail">
			<div class="title" id="title">{{this.name}}</div>
			<div class="mx">
				<div class="mx_list">
					<div class="mx_lists">购买日期:</div>
					<div class="mx_lists" id="bDate">{{this.buydate?this.yyyy_MM_dd(this.buydate).split(" ")[0]:''}}</div>
				</div>
				<div class="mx_list">
					<div class="mx_lists">启用日期:</div>
					<div class="mx_lists" id="oDate">{{this.opendate?this.yyyy_MM_dd(this.opendate).split(" ")[0]:''}}</div>
				</div>
				<div class="mx_list">
					<div class="mx_lists">有效日期:</div>
					<div class="mx_lists" id="cDate">{{this.closedate?this.yyyy_MM_dd(this.closedate).split(" ")[0]:''}}</div>
				</div>
			</div>
			<div class="balance">
				<div class="balances">余次:0</div>
				<div class="balances">余额:<span  id="ron">{{this.rmoney}}</span></div>
			</div>
		</div>
		</div>
		<div class="package_title">
		<div class="line"></div>消费详情</div>
		<div class="data">
			<div class="data_title">
                 <div class="data_titles">日期</div>
                  <div class="data_titles">项目</div>
                   <div class="data_titles">数量</div>
			</div>
          
			 <div
			class="datacontent"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="isMoreLoading"
			:infinite-scroll-immediate-check="true"
			infinite-scroll-distance="10"
		   >
			<div class="data_list">
				<div class="package_info" v-show="datalist9.length>0">
					<div class="package_year"><span></span>2019年</div>
					<div class="package_list6" style="display:flex;padding: 0.3rem;" v-for="(item,index) in datalist9" :key="index">
						
							<div class="package_lists1" style="display:inline-block;min-width:26%;">{{item.createDate.split("-")[1]+'-'+item.createDate.split("-")[2].substring(0,2)}}</div>
							<div class="package_lists1" style="display:inline-block;min-width:62%;">{{item.name}}</div>
							<div class="package_lists1" style="text-align:center">{{item.count}}</div>
						
					</div>
			    </div>
			<div class="package_info" v-show="datalist8.length>0">
					<div class="package_year"><span></span>2018年</div>
					<div class="package_list6" style="display:flex;padding: 0.3rem;" v-for="(item,index) in datalist8" :key="index">
						
							<div class="package_lists1" style="display:inline-block;min-width:26%;">{{item.createDate.split("-")[1]+'-'+item.createDate.split("-")[2].substring(0,2)}}</div>
							<div class="package_lists1" style="display:inline-block;min-width:62%;">{{item.name}}</div>
							<div class="package_lists1" style="text-align:center">{{item.count}}</div>
						
					</div>
			</div>
			<div class="package_info" v-show="datalist7.length>0">
					<div class="package_year"><span></span>2017年</div>
					<div class="package_list6" style="display:flex;padding: 0.3rem;" v-for="(item,index) in datalist7" :key="index">
						
							<div class="package_lists1" style="display:inline-block;min-width:26%;">{{item.createDate.split("-")[1]+'-'+item.createDate.split("-")[2].substring(0,2)}}</div>
							<div class="package_lists1" style="display:inline-block;min-width:66%;">{{item.name}}</div>
							<div class="package_lists1" style="text-align:center">{{item.count}}</div>
						
					</div>
			</div>
			<div class="package_info" v-show="datalist6.length>0">
					<div class="package_year"><span></span>2016年</div>
					<div class="package_list6" style="display:flex;padding: 0.3rem;" v-for="(item,index) in datalist6" :key="index">
						
							<div class="package_lists1" style="display:inline-block;min-width:26%;">{{item.createDate.split("-")[1]+'-'+item.createDate.split("-")[2].substring(0,2)}}</div>
							<div class="package_lists1" style="display:inline-block;min-width:66%;">{{item.name}}</div>
							<div class="package_lists1" style="text-align:center">{{item.count}}</div>
						
					</div>
			</div>					
		</div>
        </div>
       

		</div>
		
			<div class="zanwujilu_wrap" v-show="nodata">
				<div class="zanwujilu"></div>
				<p>暂无数据</p>
			</div>
	 </mt-loadmore>
 </div>
</template>

<script>
import $ from "jquery"
 export default {
   data () {
     return {
		  index: 0,
      topStatus: "",
      loading: 0,
      show: false,
      pageVal: 1,
      pageSize: 10,
      pageCount: 1,
      isLoading: false, // 加载中转菊花
      isMoreLoading: true, // 加载更多中
	  noMore: false, // 是否还有更多 
        id: this.$route.query.id,
		name:this.$route.query.name,
		buydate:this.$route.query.buydate,
		opendate:this.$route.query.opendate,
		closedate:this.$route.query.closedate,
		rmoney:this.$route.query.rmoney,
		nodata:false,
		datalist6:[],
		datalist7:[],
		datalist8:[],
		datalist9:[],
		detaillist:[]
     }
   },
   created(){
	 //this.taocandetail()
	
   },
   methods: {
	 
      taocandetail(){
		
			var myDate = new Date(); //获取系统当前时间
			var todaydate = myDate.getTime(); //获取当前时间
			 var dates = this.config.formatDate(todaydate).split("-");
			//$(".package_year span").text(dates[0]);
		
		this.instance.$post('/rest/wx/customerGx/getCustomerPackageTradeDetail',{
            pageFlag:true,
			pageNo:this.pageVal,
			pageSize:this.pageSize,
			tid:this.id
		},res => {
		console.log(res);
		var data = res.rows;
      if(data.length > 0) { 
        this.nodata =false
          if (this.loading == 1) {
           this.datalist9 = [];
          this.datalist8 = [];
           this.datalist7 = [];
            this.datalist6 = [];
                  }
        for(var i=0;i<data.length;i++){
          var item=data[i];
          var year=item.createDate.split("-")[0];
          var year1=item.createDate.split("-")[1];
          console.log(year);
          
          var month=item.createDate.split("-")[1];
          var day=item.createDate.split("-")[2].substring(0,2);
                this.detaillist.push(item)
            if(year==2017){
            this.datalist7.push(item)
            
            }else if(year==2018){
            this.datalist8.push(item)
            
            }else if(year==2019){
            this.datalist9.push(item)
            }else{
            this.datalist6.push(item)  
            }
        
          }
          

              
          
        } else {
        
          this.nodata =true
        }
        if (this.pageVal == 1) {
          this.$refs.loadmore.onTopLoaded();
          if (data.length == 0) {
            this.show = true;
        
          } else {
            this.show = false;
        
          }
        }
         
        this.pageCount = Math.ceil(res.total/this.pageSize);
        this.isMoreLoading = false;
        this.isLoading = false;
        this.loading = 0;
        })

		
	 },
	  yyyy_MM_dd(value) {
				if(value.length == 8) {
					return value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
				} else if(value.length == 6) {
					return value.substring(0, 4) + "-" + value.substring(4, 6);
				} else {
					return value;
				}
			},
	     // 下拉刷新状态
    handleTopChange(status) {
      this.topStatus = status;
	},		
	//上拉刷新
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
        
		// 隐藏下拉刷新方法
		 this.pageVal = 1;
        this.loading = 1;
        this.taocandetail()
      
      }, 300);
    },
			//上拉分页
	 loadMore() {

      this.pageVal += 1; // 增加分页
      this.isMoreLoading = true; // 设置加载更多中
      this.isLoading = true; // 加载中
      if (this.pageVal > this.pageCount) {
        this.isMoreLoading = true; // 设置加载更多中
        this.isLoading = false; // 加载中
        this.noMore = true;
        if (this.detaillist.length == 0) {
          this.noMore = false;
        }
        return false;
      }
	   this.taocandetail()   
	},

   },
   mounted(){
	  this.taocandetail()
	 
   },
   updated(){
	
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
// .data_list{margin-bottom:1rem;}
 .nav{
		width: 100%;
		    padding: 0.3rem 0;
	}
	.nav .card_detail{
		width: 92%;
		height: 3.68rem;
		margin: 0 auto;
		background: url(../../assets/images/img_packagedetails_bg@2x.png) no-repeat;
		background-size: 100%;
	}
	.card_detail .title{
		text-align: center;
		color: #fff;
		height: 0.8rem;
    line-height: 0.8rem;
	}
	.mx_list,.balance{
		display: flex;
	}
	.mx_list .mx_lists{
		flex: 1;
		-webkit-flex: 1;
		padding: 0rem 0.36rem;
		    height: 0.66rem;
    line-height: 0.66rem;
	}
		.mx_list .mx_lists:first-child{
			color: #999999;
		}
		.mx_list .mx_lists:last-child{
			text-align: right;
		}
	.balance .balances{
			flex: 1;
		-webkit-flex: 1;
		text-align: center;
		height: 0.8rem;
		line-height: 0.8rem;
		padding-top: 0.05rem;
		}
			.package_title {
				padding: 0.3rem 0.4rem;
				font-size: 0.38rem;
				border-top:10px solid #F7F7F7;
			}
			
			.package_title .line {
				display: inline-block;
				width: 3px;
				height: 0.4rem;
				background-color: #4A77B0;
				margin-right: 0.16rem;
				vertical-align: middle;
				margin-top: -0.01rem;
			}
			.data .data_title,.package_lists{
				display: flex;
				padding:0.33rem;
				border-top: 1px solid #f7f7f7;
				flex-wrap:wrap;
			}
			.package_lists{
				font-size: 0.28rem;
				margin: 0 0.3rem;
              padding: 0.33rem 0;
			}
			.data .data_title .data_titles,.package_lists1{
					flex: 1;
		-webkit-flex: 1;
			}
			.data .data_title .data_titles:first-child,.package_lists .package_lists1:first-child{
				min-width: 26%;
			}
			.package_lists .package_lists1:first-child{
				color: #999999;
				font-size: 0.27rem;
			}
			.data .data_title .data_titles:nth-of-type(2),.package_lists .package_lists1:nth-of-type(2){
				min-width: 62%;
			}
			.package_lists .package_lists1:nth-of-type(2){
				    line-height: 0.36rem;
			}
			.package_lists1:last-child{
				text-align: center;
			}
			.package_info .package_year{
				padding: 0.3rem 0.33rem;
				background-color: #F7F7F7;
				color: #999999;
				font-size: 0.28rem;
				border-top: 1px solid #F7F7F7;
			}
			.package_list{
					border-top: 1px solid #F8F8F8;
						border-bottom: 1px solid #F7F7F7;
			}
			.zanwujilu_wrap{
			width: 1.5rem;
			margin: 1.5rem auto 0;
		}
 
</style>
