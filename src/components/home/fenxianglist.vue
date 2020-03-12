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
             <div class="notCard" v-show="nocustomer">
				<img src="../../assets/images/notcard.png"/>
				<p>空空荡荡的～</p>
			</div>
         <div
			class="datacontent"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="isMoreLoading"
			:infinite-scroll-immediate-check="true"
			infinite-scroll-distance="10"
		>    
		<div class="card_g">
			<div class="card_list">
                <div v-for="(item,index) in getcarlist" :key="index" @click="qufenxiang(item.couponId,item.packageName)">
                    <div :class="{coupons:item.couponType==1,coupons1:item.couponType==2,experience:item.couponType==0}">
                        <div class="card_top">
                        <div class="exper_name">
                            <p>{{item.packageName}}</p>
                            <p>FREE EXPERIENCE PASS</p>
                        </div>
                        </div>
                        <div class="card_bottom" >
                            <div class="date" v-show="item.validDateEnd">领取日期截止：{{formatDate(item.validDateEnd)}}</div>
                            <div class="goShare arrow">去分享</div>
                        </div>
                    </div>
                  </div>   
			</div>
		</div>
        </div>
</mt-loadmore>

 </div>
</template>

<script>
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
      getcarlist:[],
      nocustomer:false,
      gonghao:""
     }
   },
   created(){
    this.getcarlistvalue()
    this.getuser()
   },
   methods: {
       formatDate(date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        if(month<10){
            month="0"+month;
        }
        return year + '-' + month + '-' + day; 
    },
     getcarlistvalue(){
           this.instance.$post('/rest/wx/coupon/getEmpShareList',{
               page:this.pageVal,
                rows:this.pageSize,
                param:{
                    id:0
                }
           },res => {
       console.log(res);
       
            
			 
		 if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
            if (res.results.length == 0) {
			  this.show = true;
			  this.nocustomer = true;
            } else {
			  this.show = false;
			   this.nocustomer = false;
            }
          }
          if (this.loading == 1) {
            this.getcarlist = [];
		  }
		  	         res.results.forEach( item =>{
             this.getcarlist.push(item)
            //  console.log(this.getcarlist)
		      })
         this.pageCount = res.pageCount;
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;     
      })
     },
     getuser(){
       this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
       console.log(res);
       this.gonghao = res.rows[0].userName
   })
     },
     qufenxiang(id,name){
       
        this.$router.push({
                name: "fenxianghaibao",
                query: {
                    code:this.gonghao,
                    id:id,
                    name:name
                }
              }); 
     },
      // 下拉刷新状态
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
		// 隐藏下拉刷新方法
		 this.pageVal = 1;
        this.loading = 1;
        this.getcarlistvalue(1)
      
      }, 300);
	},
	 loadMore() {
      this.pageVal += 1; // 增加分页
      this.isMoreLoading = true; // 设置加载更多中
      this.isLoading = true; // 加载中
      if (this.pageVal > this.pageCount) {
        this.isMoreLoading = true; // 设置加载更多中
        this.isLoading = false; // 加载中
        this.noMore = true;
        if (this.getcarlist.length == 0) {
          this.noMore = false;
        }
        return false;
      }	  
     this.getcarlistvalue()
	},

   },
   components: {

   }
 }
</script>

<style scoped lang="less">
  .card_g{
	 /*display: none;*/
	     padding-top: 0.35rem;
	}
	.card_g .experience:first-child{
		margin-top: 0;
	}
	.weui-loadmore{
		color: #fff;
	}
	.experience{
		position: relative;
		width: 92%;
		margin-left: 4%;
		height: 2.6rem;
		border-radius: 10px;
background: url(../../assets/images/experience.png) no-repeat;
background-size: 100%;
overflow: hidden;
z-index: 99999;
	}
	.coupons{
		position: relative;
		width: 92%;
		margin-left: 4%;
		height: 2.6rem;
		border-radius: 10px;
background: url(../../assets/images/experience1.png) no-repeat;
background-size: 100%;
overflow: hidden;
z-index: 99999;
  }
  .coupons1{
		position: relative;
		width: 92%;
		margin-left: 4%;
		height: 2.6rem;
		border-radius: 10px;
background: url(../../assets/images/experience1.png) no-repeat;
background-size: 100%;
overflow: hidden;
z-index: 99999;
	}
	.card_top{
		width: 100%;
		height: 1.67rem;
		overflow: hidden;
	}
	.card_top .exper_img{
		float: left;
		padding: 0.4rem 0.3rem;
    padding-right: 0;
	}
	.card_top .exper_name{
		    width: 100%;
		float: left;
		    padding-top: 0.45rem;
    padding-left: 1.6rem;
	}
		.exper_name p{
			width: 100%;
		color: #666666;
		font-size: 0.16rem;
	}
	.exper_name p:first-child{
			width: 90%;
		color: #333;
		    font-size: 0.36rem;
    margin-bottom: -0.1rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
	}
	.exper_img img{
		width: 1.2rem;
	}
	.card_bottom{
		width: 100%;
		height: 0.7rem;
	}
	.card_bottom .date{
		float: left;
		font-size: 0.26rem;
		padding: 0.15rem;
		padding-left: 0.45rem;
		color: #666666;
	}
	.card_bottom .goShare{
		position: relative;
		float: right;
		font-size: 0.26rem;
		padding: 0.15rem;
		padding-right: 0.7rem;
		color: #4A77B0;
	}
	/*箭头*/
		 .arrow:after {
    content: " ";
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    border-width: 1px 1px 0 0;
    border-color: #4A77B0;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: absolute;
   top:0.26rem;
    right: 0.45rem;
}
.notCard{
	text-align: center;
	padding-top: 45%;
	
}
.notCard img{
	width: 50%;
	
}
.notCard p{
	padding-top: 0.35rem;
	text-align: center;
	font-size: 0.35rem;
	color: #666666;
}
 
</style>
