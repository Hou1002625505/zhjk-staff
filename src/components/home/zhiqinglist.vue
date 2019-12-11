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

        <div
			class="datacontent"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="isMoreLoading"
			:infinite-scroll-immediate-check="true"
			infinite-scroll-distance="10"
		>             
   <div class="item_wrap">			
		<div class="item_list_wrap">	
			<div class="item_list" v-for="(item,index) in getcusinfoList" :key="index" @click="shushow(item.id,item.empName,item.customerWriteTime,item.itemName)">
				<div class="itemType">项目类型:{{item.itemName}}</div>
				<div class="itemDetailed">
					<span>客户姓名</span>
					<span>{{item.customerName}}</span>
				</div>
				<div class="itemDetailed">
					<span>操作人</span>
					<span>{{item.empName}}</span>
				</div>
				<div class="itemDetailed">
					<span>确认签字时间</span>
					<span>{{filDate(item.customerWriteTime)}}</span>
				</div>
			</div>
			
		   </div>				
		</div>
      </div>
		
		<div class="zanwujilu" v-show="nocustomer"><span>暂无数据可点击下方按钮添加</span></div>
    </mt-loadmore>
    <div class="add_btn" @click="addcus()"></div>
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
       name:this.$route.query.name,
        head:this.$route.query.head,
        customerId:this.$route.query.customerId,
        sex:this.$route.query.sex,
        mobile:this.$route.query.mobile,
        getcusinfoList:[],
        nocustomer:false
     }
   },
   created(){
     this.getcusinfo()
   },
   methods: {
     getcusinfo(){
        this.instance.$post('/rest/wx/customerKnowBook/getKnowBookListPage',{
            page:this.pageVal,
			rows:this.pageSize,
			param:{
				id:this.customerId
			}
        },res => {
       console.log(res);
           
             if (this.loading == 1) {
            this.getcusinfoList = [];
		        }
		  	 res.rows.forEach(item => {
             this.getcusinfoList.push(item)
            
         });
           
          if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
            if (res.rows.length == 0) {
			  this.show = true;
			  this.nocustomer = true;
            } else {
			  this.show = false;
			   this.nocustomer = false;
            }
          }
               
         this.pageCount =Math.ceil(res.total/this.pageSize);
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;

      })
     },
     shushow(id,empName,rutime,itemName){
      this.$router.push({
                name: "zhishow",
                query: {
                 id:id,   
                 empName:empName,
                 rutime:rutime,
                 itemName:itemName
                }
              });
     },
     addcus(){
       this.$router.push({
                name: "zhiqinginfo",
                query: {
                  name:this.name,
                  head:this.head,
                  customerId:this.customerId,
                  sex:this.sex,
                  mobile:this.mobile
                
                }
              });
     },
    filDate(value) {
			var filValue = value.split(' ');
			return filValue[0];
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
        this.getcusinfo()
     
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
        if (this.getcusinfoList.length == 0) {
          this.noMore = false;
        }
        return false;
      }	  
     this.getcusinfo()
	},
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
 .add_btn{
		position: fixed;
		bottom: 0.3rem;
		width: 1.1rem;
		height: 1.1rem;
		background: url(../../assets/images/btn_add@2x_1.png) no-repeat;
		background-size: 100%;
		left: 50%;
		 -webkit-transform: translate(-50%);
	}
	.item_list{
		width: 100%;
		background: url(../../assets/images/itemBakgr.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
		padding-bottom: 0.42rem;
		    margin-bottom: -0.25rem;
	}
	.item_list .itemType{
		position: relative;
		padding: 0.7rem;
		padding-top: 0.58rem;
		font-size: 0.32rem;
		padding-bottom: 0.4rem;
	}
	.item_list .itemDetailed{
		display: flex;
		justify-content: space-between;
		font-size: 0.3rem;
		padding: 0.16rem 0.7rem;
	}
	.compile{
		position: absolute;
	  font-size: 0.32rem;
	  padding: 0.1em 0.25rem;
	  background-color: #4a77b0;
	  border-radius: 20px;
	  right: 0.62rem;
	  top: 0.48rem;
	  color: #fff;
	}
	.zanwujilu{text-align: center;padding-top: 4rem;
	         
	}
 
</style>
