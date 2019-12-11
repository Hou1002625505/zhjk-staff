<template>
  <div class="container">
    <!-- <div class="meu">
     <div :class="index==0?'submeu active':'submeu'" @click="switchs(0)">预约课程 <div class="line"></div> </div>
       <div :class="index==1?'submeu active':'submeu'" @click="switchs(1)">历史预约</div>
    </div>-->
    <mt-loadmore
      :top-method="loadTop"
      :max-distance="150"
      @top-status-change="handleTopChange"
      ref="loadmore"
    >
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
        <div class="datalist" v-for="item in yyList" :key="item.id" v-if="index==0">
          <div class="time">
            <div
              class="date"
            >{{item.appointDate!=undefined?item.appointDate.split("-")[1]+"月"+item.appointDate.split("-")[2]+"日":''}} {{item.timeScope!=undefined?item.timeScope.split("-")[0]:''}}</div>
            <div class="date">
              <div class="glass" @click="glass(item.appointDate,item.clubName,item.clubId,item.deductions,item.deductionsZz,item.packageId,item.itemId,item.tradePackage,item.itemName,item.no,item.number,item.remainNum,item.remainNumZz)">入场上课</div>
            </div>
          </div>
          <div class="glass_title">{{item.tradePackage}}</div>
          <div class="glass_info">
            <div class="glass_infos">私教X{{item.number}}</div>
            <div
              class="glass_infos"
            >{{(item.remainNum>0&&item.remainNumZz>0)?item.number+'次':(item.remainNum>0&&item.remainNumZz<=0)?item.number+'次':(item.remainNum<=0&&item.remainNumZz>0)?item.deductions+'元':item.deductions+'元'}}</div>
          </div>
          <div class="glass_title">{{item.fitName}}</div>
          <div class="glass_info">
            <div class="glass_infos">健身</div>
            <div class="glass_infos">{{item.deductionsZz}}元</div>
          </div>
          <div class="glass_info1 iLeft">
            <div class="glass_infos1 item">上课教练：{{item.coachName}}</div>
            <div class="glass_infos1 item">上课门店：{{item.clubName}}</div>
          </div>
        </div>

        <div class="loading-box tc" v-if="isLoading">
          <mt-spinner type="fading-circle" class="loading-more" :size="20"></mt-spinner>
          <span class="loading-more-txt">加载中...</span>
        </div>
        <div class="no-more" v-if="noMore">没有更多数据了</div>
      </div>
    </mt-loadmore>
    
    <div class="noDate" v-show="show">暂无记录</div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      index: 0,
      topStatus: "",
      loading: 0,
      show: false,
      pageVal: 1,
      pageSize: 5,
      pageCount: 1,
      isLoading: false, // 加载中转菊花
      isMoreLoading: true, // 加载更多中
      noMore: false, // 是否还有更多
      currentTime: this.config.formatDate(this.config.currentTime()),
      yyList: []
    };
  },
  created() {
    this.getOrderListByPage();
  },
  methods: {
    getOrderListByPage(rate) {
      // if(this.pageVal==1&&this.loading==0){
      //   this.config.showWaiting();
      // }
      this.instance.$post("/rest/wx/coach/getOrderListByPage",
       {
          page: this.pageVal,
          rows: this.pageSize,
          param: {
            status: 0
          }
        },res => {
         // console.log(JSON.stringify(res));
          if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
            if (res.results.length == 0) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
          if (this.loading == 1) {
            this.yyList = [];
          }

          this.yyList = this.yyList.concat(res.results);
          this.pageCount = res.pageCount;
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;
        }, err => {
          if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
          }
        },rate);
    },
    glass(time,clubName,clubId,sijiaojiage,jianshenjiage,packageId,itemId,packageName,itemName,orderCode,number,remainNum,remainNumZz) {
      if (time != this.currentTime) {
        this.$vux.toast.text("预约时间已过或还没到时间", "top");
      }else{
            this.$router.push({
                name: "personalCodeEntry",
                query: {
                  clubName: clubName,
                  clubId: clubId,
                  sijiaojiage:sijiaojiage,
                  jianshenjiage:jianshenjiage,
                  packageId: packageId,
                  packageName: this.taocanName,
                  itemId: itemId,
                  packageName:packageName,
                  itemName: itemName,
                  orderCode: orderCode,
                  number: number,
                  remainNum: remainNum,
                  remainNumZz: remainNumZz
                }
              });
      }
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
        this.pageVal = 1;
        this.loading = 1;
        this.getOrderListByPage(1);
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
        if (this.yyList.length == 0) {
          this.noMore = false;
        }
        return false;
      }
      this.getOrderListByPage(1);
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.container {
  background-color: #f7f7f7;
  .datacontent {
    margin-top: 0.2rem;
  }
  .meu {
    display: flex;
    position: sticky;
    top: 0;
    background-color: #fff;
    .submeu {
      position: relative;
      flex: 1;
      text-align: center;
      border-bottom: 2px solid #f7f7f7;
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.34rem;
      .line {
        position: absolute;
        width: 1px;
        height: 0.6rem;
        top: 0.15rem;
        right: 0;
        background-color: #f7f7f7;
      }
    }
    .active {
      color: #0200fa;
      border-bottom: 2px solid #0200fa;
    }
  }
  .datalist {
    border-top: 1px solid #f7f7f7;
    background-color: #fff;
    margin-bottom: 0.2rem;
    // padding-top: 0.3rem;
    .time {
      display: flex;
      border-bottom: 1px solid #f7f7f7;
      border-top: 1px solid #f7f7f7;
      font-size: 0.32rem;
      .date:first-child {
        padding-top: 0.25rem;
      }
      .date {
        flex: 1;
        padding: 0.2rem 0.3rem;
        .glass {
          float: right;
          border: 1px solid #0200fa;
          color: #0200fa;
          width: 1.7rem;
          text-align: center;
          height: 0.5rem;
          border-radius: 5px;
          line-height: 0.5rem;
        }
      }
    }
    .glass_title {
      color: #7a7a7a;
      font-size: 0.28rem;
      padding: 0.25rem 0.3rem;
    }
    .glass_info {
      display: flex;
      padding: 0rem 0.3rem;
      .glass_infos {
        flex: 1;
        font-size: 0.28rem;
      }
      .glass_infos:last-child {
        text-align: right;
      }
    }
    .glass_info1 {
      width: 100%;
      .glass_infos1 {
        width: 53%;
        float: left;
        text-align: right;
        padding-right: 3%;
      }
      .glass_infos1:first-child {
        width: 40%;
        text-align: left;
      }
    }
    .item {
      font-size: 0.26rem !important;
    }
    .iLeft {
      padding: 0.2rem 0rem;
      border-top: 1px solid #f7f7f7;
      width: 96%;
      margin-left: 4%;
      margin-top: 0.25rem;
      padding-bottom: 0.6rem;
    }
  }
  .noDate {
    padding-top: 2rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.38rem;
    margin-top: -0.3rem;
  }
}
</style>
