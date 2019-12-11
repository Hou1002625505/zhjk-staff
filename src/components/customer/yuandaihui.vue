<template>
  <div class="container" :class="{'notScroll':flagactive}">
    <!--回访筛选-->
    <div class="qi_home_shuai" v-show="huishuaixuan1">
      <div class="qi_home_shuai_con_left" @click="shaihide()"></div>
      <div class="qi_home_shuai_con">
        <div class="item" v-for="(item,index) in fangshuaixuanlist" :key="index">
          <div class="itemp">
            <em>{{item.name}}</em>
            <span class="check_wrap">
              <input
                type="checkbox"
                :value="item.dictionaryId"
                name="fangch"
                @click="selectshuai(index,$event)"
                v-model="checkedValue"
              />
              <span
                class="xuanzhong"
                v-show="(checkedValue.toString()).indexOf(item.dictionaryId)!=-1"
              ></span>
              <span class="noxuanzhong"></span>
            </span>
          </div>
        </div>
        <div class="qi_sure_wrap"></div>
      </div>

      <div class="qi_sure">
        <div class="item" id="congzhi" @click="chongzhime()">
          <span>重置</span>
        </div>
        <div class="item sure" id="suan_sure" @click="suansure1()">
          <span>确定</span>
        </div>
      </div>
    </div>

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
      <div class="qi_hui_fang_wrap">
        <div class="qi_hui_fang_header">
          <div class="item daihuifang active">
            <span>等待回访</span>
          </div>

          <div class="item huifanglishi" @click="huihistory()">
            <span>回访历史</span>
          </div>

          <div class="item bugenjin" @click="bugenmeth()">
            <span>不跟进的客户</span>
          </div>
        </div>
        <div class="qi_hui_fang_con0">
          <div class="qi_search_wrap">
            <div class="seach">
              <input
                type="text"
                class="search_val0"
                placeholder="请输入姓名/卡号/手机号码查找会员"
                v-model="seachvue"
              />
              <span class="search_wrap huisearchbtn" @click="searchmeth()">
                <em>搜索</em>
              </span>
            </div>
            <div class="shuxian">
              <span class="line"></span>
            </div>
            <div class="shuaixuan" @click="huishuaixuan()">
              <span :class="{shuaixu:fangscreen}">筛选</span>&nbsp&nbsp
              <em :class="{shuaixu1:fangscreen}" class="triangle_border_down"></em>
            </div>
          </div>
          <!-- 搜索展示      -->
          <div class="qi_hui_data_list0">
            <div
              class="qi_hui_fang_item"
              v-for="(item,index) in seachhuilist.length>0?seachhuilist:shuairesultlist"
              :key="index"
            >
              <div>
                <div class="qi_hui_data">
                  <div class="mingcheng">
                    <img src="../../assets/images/icon_girl@2x.png" />&nbsp&nbsp
                    <span>{{item.customerGxName}}</span>
                  </div>
                  <div class="fangvalue">
                    &nbsp&nbsp&nbsp&nbsp
                    <a :href="'tel:'+item.customerGxMobile">{{item.customerGxMobile}}</a>
                  </div>
                  <div
                    class="tian_huifang"
                    @click.stop="dengjijieguo(item.visitId,item.customerGxName,item.customerGxMobile,item.visitPlanDate,item.visitTypeName,item.remarks)"
                  >
                    <span>填写回访</span>
                  </div>
                </div>
                <div @click="cusdetail(item.customerGxId)">
                  <div class="qi_hui_data">
                    <div class="mingcheng1">回访日期：</div>
                    <div
                      class="fangvalue1"
                    >{{item.visitPlanDate?(item.visitPlanDate).split(' ')[0]:""}}</div>
                  </div>
                  <div class="qi_hui_data">
                    <div class="mingcheng1">回访类型：</div>
                    <div class="fangvalue1">{{item.visitTypeName}}</div>
                  </div>
                  <div class="qi_hui_data">
                    <div class="mingcheng1">
                      备
                      <em style="opacity: 0;">空格</em>注：
                    </div>
                    <div class="fangvalue1">{{item.remarks}}</div>
                    <div class="quxiao_huifang" @click.stop="quxiaoshow(item.visitId)">
                      <span>取消回访</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="datacontent"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="isMoreLoading"
            :infinite-scroll-immediate-check="true"
            infinite-scroll-distance="10"
          >
            <div class="qi_hui_data_list0">
              <div class="qi_hui_fang_item" v-for="(item,index) in getyuandailist" :key="index">
                <div>
                  <div class="qi_hui_data">
                    <div class="mingcheng">
                      <img src="../../assets/images/icon_girl@2x.png" />&nbsp&nbsp
                      <span>{{item.customerGxName}}</span>
                    </div>
                    <div class="fangvalue">
                      &nbsp&nbsp&nbsp
                      <a :href="'tel:'+item.customerGxMobile">{{item.customerGxMobile}}</a>
                    </div>
                    <div
                      class="tian_huifang"
                      @click.stop="dengjijieguo(item.visitId,item.customerGxName,item.customerGxMobile,item.visitPlanDate,item.visitTypeName,item.remarks)"
                    >
                      <span>填写回访</span>
                    </div>
                  </div>
                  <div @click="cusdetail(item.customerGxId)">
                    <div class="qi_hui_data">
                      <div class="mingcheng1">回访日期：</div>
                      <div
                        class="fangvalue1"
                      >{{item.visitPlanDate?(item.visitPlanDate).split(' ')[0]:""}}</div>
                    </div>
                    <div class="qi_hui_data">
                      <div class="mingcheng1">回访类型：</div>
                      <div class="fangvalue1">{{item.visitTypeName}}</div>
                    </div>
                    <div class="qi_hui_data">
                      <div class="mingcheng1">
                        备
                        <em style="opacity: 0;">空格</em>注：
                      </div>
                      <div class="fangvalue1">{{item.remarks}}</div>
                      <div class="quxiao_huifang" @click.stop="quxiaoshow(item.visitId)">
                        <span>取消回访</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="loading-box tc" v-if="isLoading">
              <mt-spinner type="fading-circle" class="loading-more" :size="20"></mt-spinner>
              <span class="loading-more-txt">加载中...</span>
            </div>
            <div class="no-more" v-if="noMore">没有更多数据了</div>
          </div>

          <div class="zanwujilu" v-show="dainodata">
            <div class="title">暂无数据</div>
            <!-- <div class="title">你可以手动添加</div> -->
            <!--<p>更好的管理会员上课安排</p>-->
          </div>
        </div>
      </div>
      <div class="quxiao_tanchuang" v-show="quxiaohui">
        <div class="tuanchuang_wrap">
          <div class="tuanchuang_header">
            <span>是否取消回访？</span>
          </div>
          <div class="tuanchuang_con">
            <div class="item" v-for="(item,index) in quxiaoyuanlist" :key="index">
              <em>{{item.name}}</em>
              <span class="check_wrap">
                <input type="radio" :value="item.name" name="rufangjian" v-model="selecttypevalue" />
                <span class="xuanzhong" v-show="item.name==selecttypevalue"></span>
                <span class="noxuanzhong"></span>
              </span>
            </div>
          </div>

          <div class="tuanchuang_bottom">
            <div class="fangfou" @click="quxiaohide()">
              <span style="font-size:0.3rem;color:#1D1D1D;">再想想</span>
            </div>
            <div class="fangsure" id="quxiaohuif_sure" @click="quhuisure()">
              <span style="font-size:0.3rem;color:#1D1D1D;">确定</span>
            </div>
          </div>
          <div class="tuanchuang_close" @click="quxiaohide()">
            <img src="../../assets/images/icon_chose@2x.png" />
          </div>
        </div>
      </div>
    </mt-loadmore>
    <div class="tianjia" @click="tianjiahuifang()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      topStatus: "",
      loading: 0,
      show: false,
      pageVal: 1,
      pageSize: 6,
      pageCount: 1,
      isLoading: false, // 加载中转菊花
      isMoreLoading: true, // 加载更多中
      noMore: false, // 是否还有更多
      selecttype: 0,
      selecttypevalue: "", //取消回访原因
      visitId: "",
      gonghao: "",
      quxiaohui: false,
      getyuandailist: [],
      huishuaixuan1: false,
      fangshuaixuanlist: [],
      huishuai: "",
      seachvue: "",
      datavalue: {
        pageFlag: false,
        customerName: "",
        mobile: "",
        status: 0
      },
      seachhuilist: [],
      checkedValue: [],
      shuairesultlist: [],
      dainodata: false,
      flagactive: false,
      fangscreen: false,
      quxiaoyuanlist: []
    };
  },
  created() {
    this.getgonghao();
    this.fangshuaixuan();
  },
  methods: {
    getgonghao() {
      this.instance.$post("/rest/wx/customer/getQyUser", {}, res => {
        console.log(res.rows[0].userName);
        this.gonghao = res.rows[0].userName;
        this.yuandaihui();
      });
    },
    yuandaihui() {
      this.instance.$post(
        "/rest/wx/customerGx/getVisitCustomerList ",
        {
          pageFlag: true,
          pageNo: this.pageVal,
          pageSize: this.pageSize,
          name: this.gonghao,
          status: 0
        },
        res => {
          console.log(res);
          this.shuairesultlist = [];
          this.seachhuilist = [];

          if (this.loading == 1) {
            this.getyuandailist = [];
          }
          res.rows.forEach(item => {
            this.getyuandailist.push(item);
          });
          if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
            if (res.rows.length == 0) {
              this.show = true;
              this.dainodata = true;
            } else {
              this.show = false;
              this.dainodata = false;
            }
          }

          this.pageCount = Math.ceil(res.total / this.pageSize);
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;
        },
        error => {
          if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
          }
        }
      );
    },
    cusdetail(filid) {
      this.$router.push({
        name: "customerDetail",
        query: {
          filid: filid
        }
      });
    },
    suansure1() {
      if (this.checkedValue.length > 0) {
        this.fangscreen = true;
      } else {
        this.fangscreen = false;
      }
      this.flagactive = false;
      console.log(this.checkedValue.toString());
      this.instance.$post(
        "/rest/wx/customerGx/getVisitCustomerList",
        {
          pageFlag: false,
          name: this.gonghao,
          status: 0,
          type: this.checkedValue.toString()
        },
        res => {
          this.noMore = false;
          console.log(res);
          if (res.rows.length == 0) {
            this.dainodata = true;
          } else {
            this.dainodata = false;
          }
          this.getyuandailist = [];
          this.shuairesultlist = [];
          this.seachhuilist = [];
          res.rows.forEach(item => {
            this.shuairesultlist.push(item);
          });
          this.huishuaixuan1 = false;
          this.isLoading = false;
        }
      );
    },
    searchmeth() {
      console.log(this.seachvue);
      if (this.seachvue == "") {
        this.$vux.toast.text("请输入姓名或手机号码", "center");
        return false;
      } else if (isNaN(this.seachvue)) {
        this.datavalue.customerName = this.seachvue;
      } else {
        if (this.seachvue.length != 11) {
          this.$vux.toast.text("输入手机号码不正确", "center");
          return false;
        }
        this.datavalue.mobile = this.seachvue;
      }
      console.log(this.datavalue);
      this.seachhuilist = [];
      this.instance.$post(
        "/rest/wx/customerGx/getVisitCustomerList",
        {
          customerName: this.datavalue.customerName,
          mobile: this.datavalue.mobile,
          pageFlag: false,
          status: 0
        },
        res => {
          this.getyuandailist = [];
          this.seachhuilist = [];
          this.shuairesultlist = [];
          this.noMore = false;
          console.log(res);
          if (res.rows.length == 0) {
            this.dainodata = true;
          } else {
            this.dainodata = false;
          }

          res.rows.forEach(item => {
            this.seachhuilist.push(item);
          });
          console.log(this.seachhuilist);
        }
      );
    },
    chongzhime() {
      this.checkedValue = [];
    },
    selectshuai(inde, e) {
      var el = e.currentTarget;
      console.log(this.checkedValue);
    },
    tianjiahuifang() {
      this.$router.push({
        name: "yuannewhuifang",
        query: {
          gonghao: this.gonghao
        }
      });
    },
    huihistory() {
      this.$router.replace({
        name: "yuanlishi",
        query: {
          gonghao: this.gonghao
        }
      });
    },
    bugenmeth() {
      this.$router.replace({
        name: "bugenjin",
        query: {
          gonghao: this.gonghao
        }
      });
    },
    fangshuaixuan() {
      this.instance.$post(
        "/rest/wx/dictionnary/getDictionNaryTypeList",
        {
          typeCode: "visitType"
        },
        res => {
          console.log(res.rows[0].dlist);
          var data = res.rows[0].dlist;
          data.forEach(item => {
            this.fangshuaixuanlist.push(item);
          });
          this.quxiaoyuanyin();
        }
      );
    },
    quxiaoyuanyin() {
      this.instance.$post(
        "/rest/wx/dictionnary/getDictionNaryTypeList",
        {
          typeCode: "refuse"
        },
        res => {
          console.log("取消原因");
          console.log(res);
          console.log(res.rows[0].dlist);
          var data = res.rows[0].dlist;
          data.forEach(item => {
            this.quxiaoyuanlist.push(item);
          });
        }
      );
    },
    quxiaoshow(value) {
      this.visitId = value;
      this.quxiaohui = true;
    },
    quxiaohide() {
      this.quxiaohui = false;
      this.selecttype = 0;
      this.selecttypevalue = ""; //取消回访原因
    },
    huishuaixuan() {
      this.huishuaixuan1 = true;
      this.flagactive = true;
    },
    fselecttype(type, e) {
      var el = e.currentTarget;
      // console.log(el.getAttribute('value'))
      console.log(el.checked);
      if (el.checked) {
        console.log(1);
        this.selecttype = type;
        this.selecttypevalue = el.getAttribute("value");
      }
    },
    quhuisure(rate) {
      if (this.selecttypevalue != "") {
        this.instance.$post(
          "/rest/wx/customerGx/updateVisitCustomerGx ",
          {
            visitId: this.visitId,
            status: 3,
            visitResult: "取消:" + this.selecttypevalue
          },
          res => {
            console.log(JSON.stringify(res));
            if (res.status) {
              this.quxiaohui = false;
              this.getyuandailist = [];
              this.yuandaihui(); //取消成功重新获取列表
              this.selecttype = 0;
              this.selecttypevalue = ""; //取消回访原因
            }
            this.$refs.loadmore.onTopLoaded();
          },
          error => {
            this.$refs.loadmore.onTopLoaded();
          },
          rate
        );
      } else {
        this.$vux.toast.text("请选择原因", "center");
      }
    },
    dengjijieguo(
      visitId,
      customerGxName,
      customerGxMobile,
      visitPlanDate,
      visitTypeName,
      remarks
    ) {
      this.$router.push({
        name: "yuandengjieg",
        query: {
          visitId: visitId,
          customerGxName: customerGxName,
          customerGxMobile: customerGxMobile,
          visitPlanDate: visitPlanDate,
          visitTypeName: visitTypeName,
          remarks: remarks
        }
      });
    },
    shaihide() {
      this.huishuaixuan1 = false;
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
        this.getgonghao(1);
      }, 300);
    },
    loadMore() {
      if (this.seachhuilist.length == 0 && this.shuairesultlist.length == 0) {
        this.pageVal += 1; // 增加分页
        this.isMoreLoading = true; // 设置加载更多中
        this.isLoading = true; // 加载中
        if (this.pageVal > this.pageCount) {
          this.isMoreLoading = true; // 设置加载更多中
          this.isLoading = false; // 加载中
          this.noMore = true;
          if (this.getyuandailist.length == 0) {
            this.noMore = false;
          }
          return false;
        }

        this.getgonghao(1);
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.notScroll {
  overflow: hidden !important;
}
.shuaixu {
  color: #4a77b0 !important;
}
.shuaixu1 {
  border-color: #4a77b0 transparent transparent !important;
}
.qi_home_shuai_con_left {
  width: 20%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  left: 0;
}
.qi_sure_wrap {
  height: 1rem;
}
.qi_home_shuai_con {
  width: 75%;
  height: 100%;
  background: #f7f7f7;
  position: absolute;
  right: 0;
  padding-left: 4%;
  overflow-y: auto;
}

.qi_hui_fang_header {
  padding: 0.3rem;
  height: 0.7rem;
  display: flex;
}
.qi_hui_fang_header .item {
  flex: 1;
}
.daihuifang {
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid rgba(73, 120, 176, 1);
  border-radius: 10px 0px 0px 10px;
}
.daihuifang.active {
  background: #4978b0;
}
.daihuifang.active span {
  color: #fff !important;
}
.daihuifang span {
  font-size: 0.34rem;
  color: #4a77b0;
}
.huifanglishi {
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid rgba(73, 120, 176, 1);
  border-left: 0;
}
.huifanglishi span {
  font-size: 0.34rem;
  color: #4a77b0;
}
.huifanglishi.active {
  background: #4978b0;
}
.huifanglishi.active span {
  color: #fff !important;
}
.bugenjin {
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid rgba(73, 120, 176, 1);
  border-radius: 0px 10px 10px 0px;
  border-left: 0;
}
.bugenjin span {
  font-size: 0.34rem;
  color: #4a77b0;
}
.bugenjin.active {
  background: #4978b0;
}
.bugenjin.active span {
  color: #fff !important;
}
.triangle_border_down {
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 8px 5px 0;
  border-style: solid;
  border-color: #999 transparent transparent; /*灰 透明 透明 */
  /*margin:40px auto;*/
  position: relative;
}
.qi_hui_fang_item {
  margin: 0 auto 0.3rem;
  padding: 0 3%;
  width: 86%;
  height: 2.5rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(73, 120, 176, 0.3);
  border-radius: 10px;
}
.qi_hui_fang_item1 {
  margin: 0 auto 0.3rem;
  padding: 0 3%;
  width: 86%;
  height: 3.04rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(49, 65, 85, 0.3);
  border-radius: 10px;
}
.qi_hui_data {
  padding-top: 0.08rem;
}
.qi_hui_data .mingcheng {
  display: inline-block;
}
.mingcheng img {
  width: 0.18rem;
  height: 0.3rem;
}
.mingcheng span {
  font-size: 0.3rem;
  color: #1d1d1d;
}
.qi_hui_data .fangvalue {
  display: inline-block;
}
.fangvalue img {
  width: 0.18rem;
  height: 0.3rem;
}
.fangvalue a {
  font-size: 0.3rem;
  color: #4978b0;
  text-decoration: underline;
}
.mingcheng1 {
  display: inline-block;
  font-size: 0.3rem;
  color: #999999;
}
.fangvalue1 {
  display: inline-block;
  font-size: 0.3rem;
  color: #1d1d1d;
}
.quxiao_huifang {
  display: inline-block;
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid rgba(73, 120, 176, 1);
  border-radius: 10px;
  text-align: center;
  float: right;
  position: relative;
  top: -0.14rem;
}
.quxiao_huifang span {
  font-size: 0.3rem;
  color: #4a77b0;
}
.tian_huifang {
  display: inline-block;
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid rgba(73, 120, 176, 1);
  border-radius: 10px;
  text-align: center;
  float: right;
  position: relative;
  top: 0.2rem;
}
.tian_huifang span {
  font-size: 0.3rem;
  color: #4a77b0;
}

.quxiao_tanchuang {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.tuanchuang_wrap {
  width: 70%;
  margin: 40% auto 0;
}
.tuanchuang_header {
  width: 100%;
  height: 1rem;
  background: rgba(73, 120, 176, 1);
  border-radius: 10px 10px 0px 0px;
  line-height: 1rem;
  text-align: center;
}
.tuanchuang_header span {
  font-size: 0.36rem;
  color: #fff;
}
.tuanchuang_con {
  background: #fff;
  padding: 0 4%;
}
.tuanchuang_con .item {
  padding: 0.3rem 0;
}
.tuanchuang_con .item em {
  font-size: 0.3rem;
  color: #1d1d1d;
}
.check_wrap {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  position: relative;
  vertical-align: middle;
  float: right;
}
.check_wrap input {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
}
.xuanzhong {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: url(../../assets/images/xuanzhongf.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
}
.noxuanzhong {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: url(../../assets/images/noxuanzhongf.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.tuanchuang_bottom {
  width: 100%;
  height: 1rem;
  border-top: 1px solid #d6d6d6;
  background: rgba(255, 255, 255, 1);
  border-radius: 0 0 10px 10px;
}
.tuanchuang_bottom .fangfou {
  display: inline-block;
  width: 49%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-right: 1px solid #d6d6d6;
}
.tuanchuang_bottom .fangsure {
  display: inline-block;
  width: 48%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.tuanchuang_close {
  width: 0.6rem;
  margin: 0.4rem auto 0;
}
.tuanchuang_close img {
  width: 0.6rem;
  height: 0.6rem;
}
/* 筛选*/
.qi_home_shuai {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.qi_home_shuai_con .item {
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(214, 214, 214, 1);
}
.qi_home_shuai_con .itemp {
  padding-right: 4%;
}
.qi_home_shuai_con .itemp em {
  font-size: 0.3rem;
  color: #1d1d1d;
}
.qi_sure_wrap {
  height: 1rem;
}
.qi_sure {
  height: 1rem;
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 22%;
}
.qi_sure .item {
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  flex: 1;
  text-align: center;
  border-top: 1px solid #afafaf;
}
.qi_sure .sure {
  background: #4978b0;
  border: none;
}
.qi_sure_height {
  width: 100%;
  height: 1rem;
}
.qi_sure span {
  font-size: 0.36rem;
  color: #1d1d1d;
}
.qi_sure .sure span {
  color: #fff !important;
}
.qi_search_wrap {
  padding: 0 5%;
  height: 1rem;
  margin-bottom: 0.3rem;
}
.seach {
  width: 77%;
  height: 0.8rem;
  background: #fff;
  border-radius: 20px;
  position: relative;
  float: left;
  padding-top: 0.2rem;
}
.seach1 {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  border-radius: 20px;
  position: relative;
  float: left;
  padding-top: 0.2rem;
}
.seach input {
  width: 76%;
  height: 0.6rem;
  padding-left: 0.1rem;
  outline: none;
  font-size: 0.3rem;
  border: 1px solid #d6d6d6;
  border-radius: 10px 0 0 10px;
  -webkit-appearance: none;
}
.seach1 input {
  width: 76%;
  height: 0.6rem;
  padding-left: 0.1rem;
  outline: none;
  font-size: 0.3rem;
  border: 1px solid #d6d6d6;
  border-radius: 10px 0 0 10px;
  -webkit-appearance: none;
  text-align: center;
}
.search_wrap {
  display: inline-block;
  width: 22%;
  height: 0.64rem;
  margin-top: 0.2rem;
  font-size: 0.3rem;
  color: #fff;
  background: #4a77b0;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 0 10px 10px 0;
}
.search_wrap img {
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.15rem 0.1rem 0 0;
}
input::-webkit-input-placeholder {
  font-size: 0.24rem;
  color: #999;
}
.shuxian {
  width: 7%;
  text-align: center;
  float: left;
  padding-top: 0.1rem;
  padding-left: 1%;
}
.shuxian .line {
  display: inline-block;
  width: 1px;
  height: 0.8rem;
  background: #999;
  opacity: 0.6;
}
.shuaixuan {
  float: right;
  line-height: 1rem;
}
.shuaixuan span {
  font-size: 0.3rem;
  color: #999;
}
.mycustomer_item {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
}
.mycustomer_fang {
  padding-right: 0.3rem;
}
.mycustomer_list {
  padding: 0 0 0 0.3rem;
}
.yewu_ico,
.yewu_text {
  float: left;
}

.yewu_sanjiao {
  float: right;
}

.yewu_ico img {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  border: 1px solid #f8f8f8;
}

.yewu_text {
  padding-left: 0.3rem;
  width: 40%;
}

.yewu_text1 {
  height: 2.2rem;
  line-height: 2.2rem;
}

.yewu_text2 {
  padding-top: 0.2rem;
}

.yewu_sanjiao {
  padding-top: 0.2rem;
}

.yewu_sanjiao img {
  width: 0.21rem;
  height: 0.38rem;
}

.jianshen_text {
  font-size: 0.32rem;
  color: #1d1d1d;
  width: 100%;
  word-break: keep-all; /* 不换行 */
  whitewhite-space: nowrap; /* 不换行 */
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis;
}
.fangtel {
  font-size: 0.24rem !important;
  color: #1d1d1d !important;
}
.jianshen_text1 {
  font-size: 0.26rem;
  color: #989898;
}
.item1 {
  color: #989898 !important;
}

.tianjia {
  position: fixed;
  bottom: 1.1rem;
  left: 45%;
  width: 1rem;
  height: 1rem;
  background: url(../../assets/images/btn_add@2x_1.png);
  background-size: 100%;
}
.mycustomer_list .mycustomer_item:last-child {
  margin-bottom: 1.2rem;
}
.mycustomer_list .mycustomer_item:first-child {
  border-top: 1px solid rgba(230, 230, 230, 1);
}
.tianjia {
  position: fixed;
  bottom: 0;
  left: 45%;
  width: 1rem;
  height: 1rem;
  background: url(../../assets/images/btn_add@2x_1.png);
  background-size: 100%;
}
.zanwujilu {
  margin-top: 30%;
  text-align: center;
}
.zanwujilu .title {
  color: #919191;
  font-size: 0.36rem;
}
.zanwujilu p {
  color: #919191;
  font-size: 0.28rem;
}
</style>
