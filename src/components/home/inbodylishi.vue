<template>
 <div class='container'>
<div class="title">健康评估标准</div>
<div id="pieEchart" style="width:100%;text-align:center;"><div class="wrap"><img src="../../assets/images/bingtu.png"/></div></div>
<div class="data" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="isMoreLoading"
        :infinite-scroll-immediate-check="true"
        infinite-scroll-distance="10">
        <div class="data1">
<div class="score" v-for="(item,index) in yyList" :key="index" @click="detail(item.bodytest_id)">
  <div class="item"><span class="circle" :style="{'backgroundColor':item.bodyTestDetail.fitness_score>85?'#7980F5':item.bodyTestDetail.fitness_score>=70?'#41D09B':'#F8B85E'}"></span> {{item.testtime|timeformat}}</div>
  <div class="item">{{item.bodyTestDetail.fitness_score}}分 <img :src="item.bodyTestDetail.trend==1?arrow1:item.bodyTestDetail.trend==0?arrow2:''" alt=""></div>
</div>
<!-- <div class="score">
  <div class="item"><span class="circle" ></span> 1234654645645654</div>
  <div class="item">78分 <img :src="arrow1" alt=""></div>
</div> -->
     <div class="loading-box tc" v-if="isLoading">
          <mt-spinner type="fading-circle" class="loading-more" :size="20"></mt-spinner>
          <span class="loading-more-txt">加载中...</span>
        </div>
        <div class="no-more" v-if="noMore">没有更多信息了</div>
</div>
 </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       arrow1:require('../../assets/images/home_menu_increase@2x.png'),
       arrow2:require('../../assets/images/home_menu_increase拷贝@2x.png'),
        loading: 0,
      show: false,
      pageVal: 1,
      oldVal:1,
      pageSize: 10,
      pageCount: 1,
      yyList:[],
      isLoading: false, // 加载中转菊花
      isMoreLoading: true, // 加载更多中
      noMore: false, // 是否还有更多
      customerId:this.$route.query.customerId
     }
   },
   created(){
  this.getOrderListByPage();
   },
   mounted(){
     //this.receivedata();
   },
   methods: {
   getOrderListByPage(rate) {
      this.instance.$post("/rest/wx/bodyTest/getBodyTestListByPage",
       {
         	page:this.pageVal,
				rows:this.pageSize,
        param:{id:this.customerId}
       },res => {
          this.oldVal=this.pageVal;
        // console.log(JSON.stringify(res));
          if (this.pageVal == 1) {
            if (res.results.length == 0) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
          if (this.loading == 1) {
            this.yyList = [];
                  document.documentElement.scrollTop = document.body.scrollTop = 0;
          }

          this.yyList = this.yyList.concat(res.results);
          this.pageCount = res.pageCount;
          if(this.pageCount==1){
                 this.noMore = true;
          }
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;
          for(var i=0;i<this.yyList.length;i++){
            var item=this.yyList[i];
            // 跟上次分数对比  trend:0 低，1 高
           if(item.bodyTestDetail.fitness_score>this.yyList[i+1].bodyTestDetail.fitness_score){
               item.bodyTestDetail.trend=1;
           }else if(item.bodyTestDetail.fitness_score==this.yyList[i+1].bodyTestDetail.fitness_score){
              item.bodyTestDetail.trend=2;
           }else{
           item.bodyTestDetail.trend=0;
           }
          }
        }, err => {
          if (this.pageVal == 1) {
              this.loading = 0;
             this.pageVal=this.oldVal;
          }
        },rate);
    },
    detail(bodytest_id){
 this.$router.push({
                 name:"inbodydetailID",
                   query:{
                     bodytest_Id:bodytest_id,
                     customerId:this.customerId
                 }
           })
    },
      loadMore() {
      this.pageVal += 1; // 增加分页
      this.isMoreLoading = true; // 设置加载更多中
      this.isLoading = true; // 加载中
      if (this.pageVal > this.pageCount) {
        this.isMoreLoading = true; // 设置加载更多中
        this.isLoading = false; // 加载中
        this.noMore = true;
        if (this.yyList.length == 0) {
          this.noMore = false;
        }
        return false;
      }
      this.getOrderListByPage(1);
    }
     
   },
  filters:{
		timeformat:function(data){
			  var d = new Date(data);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  if(hour<10){
    hour="0"+hour
  }
  if(minutes<10){
    minutes="0"+minutes
  }
  return  year+ '-' + month + '-' + day;
		}
	},
   components: {

   }
 }
</script>

<style scoped lang="less">
#pieEchart img{width:100%;}
.container{
    background-color: #fff;
    .title{
        font-weight: bold;
        font-size: 0.36rem;
        text-align: center;
        padding-top: 0.35rem;
    //margin-bottom: -65px;
    }
    .pie {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: yellowgreen;
    background-image: linear-gradient(to right, transparent 50%, #655 0);
    overflow: hidden;
}
.pie span{
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0/50%;
    background-color: inherit;
    transform-origin: left;
    transform: rotate(.2turn);
}
.data{
         margin-top: 0.1rem;
         padding-bottom: 0.3rem;
      background-color: #fff;
      .data1{

     margin: 0 0.3rem;
      }
      .score:first-child{
        
      border-top: 1px solid #f7f7f7;
      }
  .score{
  display: flex;
  height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #f7f7f7;
  .item{
    flex: 1;
    font-size: 0.4rem;
    text-align: right;
        position: relative;
    img{
      width: 0.2rem;
    vertical-align: middle;
    margin-top: -0.1rem;
        position: absolute;
    top: 0.56rem;
    right: 0.2rem;
    }
  }
   .item:last-child{
     padding-right: 0.6rem;
   }
  .item:first-child{
     font-size: 0.28rem;
      text-align: left;
      span.circle{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background-color: red;
        border-radius: 50%;
        margin:0 0.3rem;
      }
  }

}
}

}
</style>
