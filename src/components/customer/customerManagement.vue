<template>
  <div class="container" :class="{'notScroll':flagactive}">
    <div class="qi_home_shuai" v-show="screenDetail">
      <div class="qi_home_shuai_con_left" @click="shaihide()"></div>
      <div class="qi_home_shuai_con">
        <div class="huoyuedu_wrap">
          <p>活跃度</p>
          <div class="huoyuedu_con">
            <div class="item" :class="{'active':selectType===1}" @click="select(1,'新增')">
              <span>新增</span>
            </div>
            <div class="item" :class="{'active':selectType===2}" @click="select(2,'活跃')">
              <span>活跃</span>
            </div>
            <div class="item" :class="{'active':selectType===3}" @click="select(3,'沉睡')">
              <span>沉睡</span>
            </div>
            <div class="item" :class="{'active':selectType===4}" @click="select(4,'流失')">
              <span>流失</span>
            </div>
          </div>
        </div>
        <div class="zuijindao_wrap">
          <p>最近到店日期</p>
          <div class="zuijindao_con">
            <div class="date_xuan">
              <div class="item" id="calendar">
                <span>起始：</span>
                <input
                  type="text"
                  placeholder="0000-00-00"
                  readonly
                  id="birthday"
                  v-model="selectdianStart"
                />
                <img src="../../assets/images/home_menu_date@2x.png" />
                <datetime v-model="selectdianStart" @on-confirm="fangonConfirm" class="fang"></datetime>
              </div>

              <div class="item" id="calendar1">
                <span>结束：</span>
                <input
                  type="text"
                  placeholder="0000-00-00"
                  readonly
                  id="jieshu"
                  v-model="selectdianEnd"
                />
                <img src="../../assets/images/home_menu_date@2x.png" />
                <datetime v-model="selectdianEnd" @on-confirm="fangonConfirm" class="fang"></datetime>
              </div>
            </div>
            <div class="shijian_duan" id="zuijindao">
              <div
                class="item"
                daodiandate="yizhou"
                :class="{'active':selectdianType===1}"
                @click="selectdian(1,'yizhou')"
              >
                <span>最近一周</span>
              </div>
              <div
                class="item"
                daodiandate="yiyue"
                :class="{'active':selectdianType===2}"
                @click="selectdian(2,'yiyue')"
              >
                <span>最近一月</span>
              </div>
              <div
                class="item"
                daodiandate="sanyue"
                :class="{'active':selectdianType===3}"
                @click="selectdian(3,'sanyue')"
              >
                <span>最近三月</span>
              </div>
              <div
                class="item"
                daodiandate="bannian"
                :class="{'active':selectdianType===4}"
                @click="selectdian(4,'bannian')"
              >
                <span>最近半年</span>
              </div>
            </div>
          </div>
        </div>
        <div class="year_jine_wrap">
          <p>近一年交款金额</p>
          <div class="year_jine_con">
            <input type="number" placeholder="最低金额" id="zuidijine" v-model="yearjineStart" />
            <div class="qujianxian"></div>
            <input type="number" placeholder="最高金额" id="zuigaojine" v-model="yearjineEnd" />
          </div>
        </div>
        <div class="year_jine_wrap">
          <p>年到店次数</p>
          <div class="year_jine_con">
            <input type="number" placeholder="1" id="didaodian" v-model="yearcishuStart" />
            <div class="qujianxian"></div>
            <input type="number" placeholder="999" id="gaodaodian" v-model="yearcishuEnd" />
          </div>
        </div>
        <div class="zuijindao_wrap">
          <p>健身卡过期客户</p>
          <div class="zuijindao_con">
            <div class="date_xuan">
              <div class="item">
                <span>起始：</span>
                <input
                  type="text"
                  placeholder="0000-00-00"
                  readonly
                  id="birthday1"
                  v-model="overCardStart"
                />
                <img src="../../assets/images/home_menu_date@2x.png" />
                <datetime v-model="overCardStart" @on-confirm="fangonConfirm" class="fang"></datetime>
              </div>

              <div class="item">
                <span>结束：</span>
                <input
                  type="text"
                  placeholder="0000-00-00"
                  readonly
                  id="jieshu1"
                  v-model="overCardEnd"
                />
                <img src="../../assets/images/home_menu_date@2x.png" />
                <datetime v-model="overCardEnd" @on-confirm="fangonConfirm" class="fang"></datetime>
              </div>
            </div>
            <div class="shijian_duan" id="jianshenguoqi">
              <div
                class="item"
                daodiandate="yizhou"
                :class="{'active':selectdian1Type1===1}"
                @click="selectdian1(1,'yizhou')"
              >
                <span>最近一周</span>
              </div>
              <div
                class="item"
                daodiandate="yiyue"
                :class="{'active':selectdian1Type1===2}"
                @click="selectdian1(2,'yiyue')"
              >
                <span>最近一月</span>
              </div>
              <div
                class="item"
                daodiandate="sanyue"
                :class="{'active':selectdian1Type1===3}"
                @click="selectdian1(3,'sanyue')"
              >
                <span>最近三月</span>
              </div>
              <div
                class="item"
                daodiandate="bannian"
                :class="{'active':selectdian1Type1===4}"
                @click="selectdian1(4,'bannian')"
              >
                <span>最近半年</span>
              </div>
            </div>
          </div>
        </div>
        <div class="qi_sure_height"></div>
        <div class="qi_sure">
          <div class="item" id="congzhi" @click="congzhi()">
            <span>重置</span>
          </div>
          <div class="item sure" id="suan_sure" @click="screennone()">
            <span>确定</span>
          </div>
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
      <div class="qi_my_coustomer">
        <div class="qi_home_header" v-if="getcustomerarr.length>0">
          <div class="today_yeji">
            <p class="todayval" id="cusnum">{{getcustomerarr[0].totalCustomer}}</p>
            <p class="text">客户数量</p>
          </div>
          <div class="yeji_con">
            <div class="item" @click="todayaddmeth">
              <p class="value" id="txinzeng">{{getcustomerarr[0].newCustomer}}</p>
              <p class="text">今日新增</p>
            </div>
            <router-link to="/customer/yuandaihui" class="item">
              <div id="fdaihuifang">
                <p class="value" id="thuifang">{{getcustomerarr[0].visitCustomer}}</p>
                <p class="text">等待回访</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="qi_search_wrap">
          <div class="seach">
            <input
              type="text"
              id="search_val"
              placeholder="请输入姓名/卡号/手机号码查找会员"
              v-model="kehunametel"
            />
            <span id="search_wrap" @click="keseachbtn()">
              <em>搜索</em>
            </span>
          </div>
          <div class="shuxian">
            <span class="line"></span>
          </div>
          <div class="shuaixuan" @click="screenShow()">
            <span :class="{shuaixu:fangscreen}">筛选</span>&nbsp&nbsp
            <em class="triangle_border_down" :class="{shuaixu1:fangscreen}"></em>
          </div>
        </div>
        <div
          class="datacontent"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="isMoreLoading"
          :infinite-scroll-immediate-check="true"
          infinite-scroll-distance="10"
        >
          <div class="mycustomer_list">
            <div
              class="mycustomer_item"
              v-for="(item1,index) in getmycustomerlist.length>0?getmycustomerlist:searchlist"
              :key="index"
              @click="glass(item1.fldclientid,item1.crmid)"
            >
              <div class="mycustomer_fang">
                <div class="yewu_ico">
                  <img src="../../assets/images/default.png" />
                  <div class="item" v-show="item1.sameMobileCount>1">
                    <span v-show="item1.sameMobileCount<=99">{{item1.sameMobileCount}}</span>
                    <span v-show="item1.sameMobileCount>99">99+</span>
                  </div>
                </div>
                <div class="yewu_text yewu_text2">
                  <div class="jianshen_text fangname">{{item1.fldfirstname}}</div>
                  <div class="fangtel">
                    <div class="itemtel">{{item1.fldworkphone}}</div>
                  </div>
                </div>
                <div
                  class="yewu_sanjiao item"
                  v-if="item1.firstRegistCard ==undefined && item1.lastVisit==undefined"
                ></div>
                <div class="yewu_sanjiao item" v-else>
                  <div class="jianshen_text1">卡号：{{item1.firstRegistCard}}</div>
                  <div
                    class="jianshen_text1"
                  >最后到店:{{ item1.lastVisit?filDate(item1.lastVisit): item1.lastVisit }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 筛选显示 -->
          <div class="mycustomer_list">
            <div
              class="mycustomer_item"
              v-for="(item1,index) in getshaixuanvalList.length>0?getshaixuanvalList:getshaiguoqiList"
              :key="index"
              @click="glass(item1.fldclientid)"
            >
              <div class="mycustomer_fang">
                <div class="yewu_ico">
                  <img src="../../assets/images/default.png" />
                </div>
                <div class="yewu_text yewu_text2">
                  <div class="jianshen_text fangname">{{item1.fldfirstname}}</div>
                  <div class="fangtel">
                    <div class="itemtel">{{item1.fldworkphone}}</div>
                    <div class="item" v-show="item1.sameMobileCount>1">
                      <span v-show="item1.sameMobileCount<=99">{{item1.sameMobileCount}}</span>
                      <span v-show="item1.sameMobileCount>99">99+</span>
                    </div>
                  </div>
                </div>
                <div
                  class="yewu_sanjiao item"
                  v-if="item1.firstRegistCard ==undefined && item1.lastVisit==undefined"
                ></div>
                <div class="yewu_sanjiao item" v-else>
                  <div class="jianshen_text1">卡号：{{item1.firstRegistCard}}</div>
                  <div
                    class="jianshen_text1"
                  >最后到店:{{ item1.lastVisit?filDate(item1.lastVisit): item1.lastVisit }}</div>
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

        <div class="zanwujilu" v-show="nocustomer">
          <div class="title">暂无客户信息</div>
          <div class="title">你可以手动添加客户信息</div>
          <!--<p>更好的管理会员上课安排</p>-->
        </div>
        <div class="zanwujilu" v-show="nodata">
          <div class="title">暂无数据</div>
          <!-- <div class="title">你可以手动添加客户信息</div> -->
          <!--<p>更好的管理会员上课安排</p>-->
        </div>
        <div class="bottom_height"></div>
      </div>
    </mt-loadmore>
    <!-- 最近到店起始 -->
    <div class="tianjia" @click="addclient()"></div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="selectdianStart1"
      :startDate="startDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
    ></mt-datetime-picker>

    <!-- 最近到店结束 -->
    <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="selectdianEnd1"
      :startDate="startDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm1"
    ></mt-datetime-picker>

    <!-- 健身卡过期客户 -->
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="overCardStart1"
      :startDate="startDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm2"
    ></mt-datetime-picker>
    <!-- 健身卡过期客户 -->
    <mt-datetime-picker
      ref="picker3"
      type="date"
      v-model="overCardEnd1"
      :startDate="startDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm3"
    ></mt-datetime-picker>
    <div class="bottomheight"></div>
  </div>
</template>

<script>
import { html2canvas } from "html2canvas";
import $ from "jquery";
var date = new Date(); //获取系统当前时间
import { MessageBox } from "mint-ui";
import Promise from "es6-promise";
import { Datetime } from "vux";
Promise.polyfill();
export default {
  data() {
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
      kehunametel: "", //搜索框值
      getcustomerarr: [],
      getmycustomerlist: [],
      screenDetail: false, //控制筛选
      selectType: 0, //选择活跃度
      selectValue: "", //选择活跃度值
      selectdianType: 0,
      selectdian1Type1: 0,
      selectdianStart: "", //到店起始
      selectdianStart1: new Date(),
      selectdianEnd: "", //到店结束
      selectdianEnd1: new Date(),
      overCardStart: "",
      overCardStart1: new Date(),
      overCardEnd: "",
      overCardEnd1: new Date(),
      yearjineStart: "", //年交款金额
      yearjineEnd: "",
      yearcishuStart: "", //年到店次数
      yearcishuEnd: "",
      getshaixuanvalList: [],
      getshaiguoqiList: [],
      nocustomer: false,
      nodata: false,
      datavalue: {
        pageFlag: false,
        name: "",
        mobile: ""
      },
      searchlist: [],
      startDate: new Date("2014-1-1"),
      flagactive: false,
      fangscreen: false,
      value1: "2015-11-12",
      sDate: new Date("1950-01-01"),
      eDate: new Date(),
      gonghao: ""
    };
  },
  created() {
    this.getgonghao();
  },
  methods: {
    formatDate: function(date) {
      var d = new Date(date);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      return year + "-" + month + "-" + day;
    },
    filDate: function(value) {
      var filValue = value.split(" ");
      return filValue[0];
    },

    getgonghao() {
      //alert(this.$route.meta.slide)
      if (this.$route.meta.slide == 6) {
        this.instance.$post("/rest/wx/customer/getQyUser", {}, res => {
          console.log(res.rows[0].userName);
          this.gonghao = res.rows[0].userName;
          this.getcustomer();
        });
      }
    },
    getcustomer(rate) {
      this.getcustomerarr = [];
      this.instance.$post(
        "/rest/wx/customerGx/findIndexData ",
        {},
        res => {
          console.log(JSON.stringify(res));
          this.getcustomerarr.push(res.rows[0]);
          console.log(this.getcustomerarr);
          this.$refs.loadmore.onTopLoaded();
          this.getmycustomer();
        },
        error => {
          this.$refs.loadmore.onTopLoaded();
        },
        rate
      );
    },
    getmycustomer(rate) {
      this.instance.$post(
        "/rest/wx/customerGx/findCustomerGx ",
        {
          pageFlag: true,
          pageNo: this.pageVal,
          pageSize: this.pageSize,
          userId: this.gonghao
          //userId:64417
        },
        res => {
          console.log(res);
          if (res.status) {
            if (this.loading == 1) {
              this.getmycustomerlist = [];
            }
            res.rows.forEach(item => {
              this.getmycustomerlist.push(item);
              //alert(item.lastVisit)
            });
          } else {
            this.nocustomer = true;
            this.$vux.toast.text(res.message, "center");
          }
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

          this.pageCount = Math.ceil(res.total / this.pageSize);
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;
        },
        error => {
          if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
          }
        },
        rate
      );
    },
    addclient() {
      this.$router.push({
        name: "addclient"
      });
    },
    todayaddmeth() {
      this.$router.push({
        name: "todayadd"
      });
    },
    //点击搜索按钮
    keseachbtn() {
      if (this.kehunametel.trim() == "") {
        this.$vux.toast.text("请输入姓名或手机号码", "center");
        return false;
      }

      this.instance.$post(
        "/rest/wx/customerGx/findCustomerGx",
        {
          dimField: this.config.Trim(this.kehunametel, "g")
          //	userId:this.gonghao
        },
        res => {
          // console.log(JSON.stringify(res));
          console.log(res)
          this.getmycustomerlist = [];
          this.getshaixuanvalList = [];
          this.getshaiguoqiList = [];
          this.searchlist = [];
          if (res.status) {
            res.rows.forEach(item => {
              this.searchlist.push(item);
              //alert(item.firstRegistCard)
            });
            this.nocustomer = false;
          } else {
            this.nocustomer = true;
          }
        }
      );
    },
    congzhi() {
      this.selectType = 0;
      this.selectValue = "";
      this.selectdianType = 0;
      this.selectdian1Type1 = 0;
      this.selectdianStart = ""; //到店起始
      this.selectdianEnd = ""; //到店结束
      this.yearjineStart = ""; //年交款金额
      this.yearjineEnd = "";
      this.yearcishuStart = ""; //年到店次数
      this.yearcishuEnd = "";
      this.overCardStart = "";
      this.overCardEnd = "";
      $("#birthday").val("");
      $("#jieshu").val("");
      $("#birthday1").val("");
      $("#jieshu1").val("");
    },
    jianshenclear() {
      this.selectType = 0;
      this.selectdianType = 0;
      // this.selectdianStart="";//到店起始
      // this.selectdianEnd="";//到店结束
      this.yearjineStart = ""; //年交款金额
      this.yearjineEnd = "";
      this.yearcishuStart = ""; //年到店次数
      this.yearcishuEnd = "";
      // $('#birthday').val('');
      // $('#jieshu').val('');
      console.log(this.selectdianStart + "selectdianStart");
    },
    shaihide() {
      this.screenDetail = false;
    },
    openPicker() {
      console.log(1);
      // this.$refs.picker.open();
      this.$refs.fang.click();
    },
    openPicker1() {
      this.$refs.picker1.open();
    },
    openPicker2() {
      console.log(1);
      this.$refs.picker2.open();
    },
    openPicker3() {
      console.log(1);
      this.$refs.picker3.open();
    },
    fangonConfirm() {
      this.selectdianType = 0;
      this.selectdian1Type1 = 0;
    },
    handleConfirm() {
      console.log(this.selectdianStart1);
      $(".v-modal").css("opacity", "0");
      console.log(this.config.formatDate(this.selectdianStart1));
      //  var d = new Date(this.selectdianStart);
      //  console.log(d)
      this.selectdianStart = this.config.formatDate(this.selectdianStart1);
      this.selectdianType = 0;
      this.selectdian1Type1 = 0;
    },
    handleConfirm1() {
      console.log(this.selectdianEnd1);
      $(".v-modal").css("opacity", "0");
      console.log(this.config.formatDate(this.selectdianEnd1));
      this.selectdianEnd = this.config.formatDate(this.selectdianEnd1);
      this.selectdianType = 0;
      this.selectdian1Type1 = 0;
    },
    handleConfirm2() {
      console.log(this.overCardStart1);
      $(".v-modal").css("opacity", "0");
      console.log(this.config.formatDate(this.overCardStart1));
      this.overCardStart = this.config.formatDate(this.overCardStart1);
      this.selectdianType = 0;
      this.selectdian1Type1 = 0;
      // this.jianshenclear()
    },
    handleConfirm3() {
      console.log(this.overCardEnd1);
      $(".v-modal").css("opacity", "0");
      console.log(this.config.formatDate(this.overCardEnd1));
      this.overCardEnd = this.config.formatDate(this.overCardEnd1);
      this.selectdianType = 0;
      this.selectdian1Type1 = 0;
      // this.jianshenclear()
    },
    select(type, value) {
      this.selectType = type;
      this.selectValue = value;
    },
    DateAdd(interval, number, date) {
      switch (interval) {
        case "y ": {
          date.setFullYear(date.getFullYear() + number);
          return date;
          break;
        }
        case "q ": {
          date.setMonth(date.getMonth() + number * 3);
          return date;
          break;
        }
        case "m ": {
          date.setMonth(date.getMonth() + number);
          return date;
          break;
        }
        case "w ": {
          date.setDate(date.getDate() + number * 7);
          return date;
          break;
        }
        case "d ": {
          date.setDate(date.getDate() + number);
          return date;
          break;
        }
        case "h ": {
          date.setHours(date.getHours() + number);
          return date;
          break;
        }
        case "m ": {
          date.setMinutes(date.getMinutes() + number);
          return date;
          break;
        }
        case "s ": {
          date.setSeconds(date.getSeconds() + number);
          return date;
          break;
        }
        default: {
          date.setDate(d.getDate() + number);
          return date;
          break;
        }
      }
    },
    selectdian(type, value) {
      this.selectdianType = type;
      console.log(value);
      console.log(type);
      var date = new Date(); //获取系统当前时间
      this.selectdianEnd = this.config.formatDate(this.config.currentTime());
      if (value == "yizhou") {
        var newDate = this.DateAdd("d ", -7, date);
        this.selectdianStart = this.config.formatDate(newDate);
        console.log(this.selectdianStart);
      }
      if (value == "yiyue") {
        var newDate = this.DateAdd("m ", -1, date);
        this.selectdianStart = this.config.formatDate(newDate);
      }
      if (value == "sanyue") {
        var newDate = this.DateAdd("m ", -3, date);
        this.selectdianStart = this.config.formatDate(newDate);
      }
      if (value == "bannian") {
        var newDate = this.DateAdd("m ", -6, date);
        this.selectdianStart = this.config.formatDate(newDate);
      }
    },
    selectdian1(type, value) {
      this.selectdian1Type1 = type;
      console.log(this.selectdian1Type1);
      console.log(this.selectdianStart);
      var date = new Date(); //获取系统当前时间
      this.overCardEnd = this.config.formatDate(this.config.currentTime());
      if (value == "yizhou") {
        var newDate = this.DateAdd("d ", -7, date);
        this.overCardStart = this.config.formatDate(newDate);
        console.log(this.overCardStart);
      }
      if (value == "yiyue") {
        var newDate = this.DateAdd("m ", -1, date);
        this.overCardStart = this.config.formatDate(newDate);
      }
      if (value == "sanyue") {
        var newDate = this.DateAdd("m ", -3, date);
        this.overCardStart = this.config.formatDate(newDate);
      }
      if (value == "bannian") {
        var newDate = this.DateAdd("m ", -6, date);
        this.overCardStart = this.config.formatDate(newDate);
      }
      //  this.jianshenclear()
    },
    screenShow() {
      this.screenDetail = true;
      //this.congzhi()
      this.flagactive = true;
    },
    //筛选确定
    screennone() {
      this.getmycustomerlist = [];
      this.getshaixuanvalList = [];
      this.getshaiguoqiList = [];
      this.searchlist = [];
      this.screenDetail = false;
      this.pageVal = 1;
      console.log(this.formatDate(this.selectdianStart));
      if (this.overCardStart != "" && this.overCardEnd != "") {
        this.getshaiguoqi();
      } else {
        this.getshaixuanval();
      }
      this.flagactive = false;
      if (
        this.selectValue != "" ||
        this.selectdianStart != "" ||
        this.selectdianEnd != "" ||
        this.yearcishuStart != "" ||
        this.yearcishuEnd != "" ||
        this.yearjineStart != "" ||
        this.yearjineEnd != "" ||
        this.overCardStart != "" ||
        this.overCardEnd != ""
      ) {
        this.fangscreen = true;
      } else {
        this.fangscreen = false;
      }
    },
    //筛选我的客户
    getshaixuanval() {
      if (
        this.selectValue == "" &&
        this.selectdianStart == "" &&
        this.selectdianEnd == "" &&
        this.yearcishuStart == "" &&
        this.yearcishuEnd == "" &&
        this.yearjineStart == "" &&
        this.yearjineEnd == ""
      ) {
        this.getgonghao();
        return;
      }

      this.instance.$post(
        "/rest/wx/customerGx/findCustomerGx",
        {
          pageFlag: true,
          pageNo: this.pageVal,
          pageSize: this.pageSize,
          status1: this.selectValue, //活跃性
          lastVisitStart: this.selectdianStart,
          lastVisitEnd: this.selectdianEnd,
          totalVisitmin: this.yearcishuStart, //年到店次数
          totalVisitmax: this.yearcishuEnd,
          totalCostmin: this.yearjineStart,
          totalCostmax: this.yearjineEnd,
          userId: this.gonghao
        },
        res => {
          console.log(res);

          if (res.status) {
            res.rows.forEach(item => {
              this.getshaixuanvalList.push(item);
            });
          } else {
            this.nocustomer = true;
            //this.$vux.toast.text(res.message, "center");
          }

          this.pageCount = Math.ceil(res.total / this.pageSize);
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;
        }
      );
    },
    //筛选健身过期客户
    getshaiguoqi() {
      console.log(this.pageVal);
      this.instance.$post(
        "/rest/wx/customerGx/findCustomerGxCardOver",
        {
          pageFlag: true,
          pageNo: this.pageVal,
          pageSize: this.pageSize,
          overCardStart: this.overCardStart,
          overCardEnd: this.overCardEnd
        },
        res => {
          console.log(res);
          if (res.status) {
            res.rows.forEach(item => {
              this.getshaiguoqiList.push(item);
            });
          } else {
            this.nocustomer = true;
            //this.$vux.toast.text(res.message, "center");
          }
          this.pageCount = Math.ceil(res.total / this.pageSize);
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;
        }
      );
    },
    glass(filid,crmid) {
      this.$router.push({
        name: "customerDetail",
        query: {
          filid: filid,
          crmid: crmid
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
        this.getcustomer(1);
      }, 300);
    },
    //上拉分页
    loadMore() {
      //alert(this.$route.meta.slide)
      if (this.$route.meta.slide == 6) {
        this.pageVal += 1; // 增加分页
        this.isMoreLoading = true; // 设置加载更多中
        this.isLoading = true; // 加载中
        if (this.pageVal > this.pageCount) {
          this.isMoreLoading = true; // 设置加载更多中
          this.isLoading = false; // 加载中
          this.noMore = true;
          if (this.getmycustomerlist.length == 0) {
            this.noMore = false;
          }
          return false;
        }
        if (this.getmycustomerlist.length > 0) {
          this.getmycustomer(1);
        } else {
          if (this.searchlist.length == 0) {
            if (this.overCardStart != "" && this.overCardEnd != "") {
              this.getshaiguoqi();
            } else {
              this.getshaixuanval();
            }
          } else {
            this.isLoading = false;
          }
        }
      }
    }
  },
  watch: {
    $route(to, from) {
      if (from.meta.slide == 1) {
        this.pageVal = 1;
        this.loading = 1;
        this.getgonghao();
        this.fangscreen = false;
        this.congzhi();
      }
    }
  },
  mounted() {},
  updated() {
    //   $('.tianjia').css({"position":"fixed","bottom":"1.1rem"})
  },
  components: {
    Datetime
  }
};
</script>
<style scoped lang="less">
.bottom_height {
  width: 100%;
  height: 1.2rem;
}
.bottomheight {
  height: 1.3rem;
}
.shuaixu {
  color: #4a77b0 !important;
}
.shuaixu1 {
  border-color: #4a77b0 transparent transparent !important;
}
.notScroll {
  overflow: hidden !important;
}
.qi_home_header {
  width: 100%;
  background: #5076b7;
  position: relative;
}
.today_yeji {
  text-align: center;
  padding: 30px 0;
}
.today_yeji .todayval {
  font-size: 0.72rem;
  color: #fff;
}
.today_yeji .text {
  font-size: 0.3rem;
  color: #fff;
}
.yeji_con {
  display: flex;
  padding: 0.2rem 0;
}
.yeji_con .item {
  flex: 1;
  text-align: center;
}
.yeji_con .value {
  font-size: 0.48rem;
  color: #fff;
}
.yeji_con .text {
  font-size: 0.24rem;
  color: #fff;
  padding-top: 0.1rem;
}
.qi_search_wrap {
  padding: 0 1.5%;
  height: 1.04rem;
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
.seach input {
  width: 76%;
  height: 0.6rem;
  padding-left: 0.1rem;
  outline: none;
  font-size: 0.3rem;
  border: 1px solid #d6d6d6;
  border-radius: 4px 0 0 4px;
  -webkit-appearance: none;
}
#search_wrap {
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
  border-radius: 0 4px 4px 0;
}
#search_wrap img {
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.15rem 0.1rem 0 0;
}
#search_wrap em {
}
#search_val {
}

input::-webkit-input-placeholder {
  font-size: 0.24rem;
  color: #999;
}
.shuxian {
  width: 7%;
  text-align: center;
  float: left;
  padding-top: 0.22rem;
  padding-left: 1%;
}
.shuxian .line {
  display: inline-block;
  width: 1px;
  height: 0.6rem;
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

.mycustomer_item {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #f7f7f7;
}
.mycustomer_fang {
  padding-right: 3%;
}
.mycustomer_list {
  padding: 0 0 0 0.3rem;
}
.yewu_ico,
.yewu_text {
  float: left;
}
.yewu_ico {
  width: 11.4%;
  position: relative;
  box-sizing: border-box;
}
.yewu_sanjiao {
  float: left;
  padding-top: 0.2rem;
  width: 38%;
}

.yewu_ico img {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  border: 1px solid #f8f8f8;
}

.yewu_text {
  padding-left: 4%;
  width: 46%;
}

.yewu_text1 {
  height: 2.2rem;
  line-height: 2.2rem;
}

.yewu_text2 {
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
  width: 100%;
}
.fangtel .itemtel {
  width: 50%;
  display: inline-block;
}
.fangtel .item {
  position: relative;
  top: -0.16rem;
  display: inline-block;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  background: red;
  padding: 0 0.1rem;
  border-radius: 50%;
}
.fangtel .item span {
  font-size: 0.2rem;
  color: #fff;
}
.yewu_ico .item {
  position: absolute;
  top: 0.1rem;
  right: -24%;
  text-align: center;
  background: red;
  border-radius: 50%;
  font-size: 0.2rem;
  padding: 0 0.1rem;
}
.yewu_ico .item span {
  font-size: 0.2rem;
  color: #fff;
}
.jianshen_text1 {
  font-size: 0.26rem;
  color: #989898;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

.zanwujilu {
  margin-top: 30%;
  text-align: center;
}
.zanwujilu .title {
  color: #919191;
  font-size: 0.3rem;
}

.zanwujilu p {
  color: #919191;
  font-size: 0.28rem;
}
.mycustomer_list .mycustomer_item:last-child {
  margin-bottom: 1.2rem;
}
.mycustomer_list .mycustomer_item:first-child {
  border-top: 1px solid #f7f7f7;
}
.bottom_wrap {
  display: flex;
  background: #f7f7f7;
  height: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0.04rem;
  border-top: 1px solid rgba(175, 175, 175, 0.7);
}
.bottom_wrap .item {
  flex: 1;
  text-align: center;
}
.bottom_wrap .item .active {
  background: #dce4f1;
}
.bottom_wrap img {
  width: 0.5rem;
  padding-top: 0.1rem;
}
.bottom_wrap p {
  font-size: 0.2rem;
  color: #afafaf;
  padding-top: 0.1rem;
}
.shouye {
  background: #dce4f1;
  border-radius: 6px;
}
.kehu {
  background: #dce4f1;
  border-radius: 6px;
}
.jingying {
  background: #dce4f1;
  border-radius: 6px;
}
.me {
  background: #dce4f1;
  border-radius: 6px;
}
.bottom_height {
  width: 100%;
  height: 1.2rem;
}
/*点击帅选*/
.qi_home_shuai {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 99999999;
}
.qi_home_shuai_con_left {
  width: 20%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  left: 0;
  overflow-y: auto;
}
.qi_home_shuai_con {
  width: 78%;
  height: 100%;
  background: #f7f7f7;
  position: absolute;
  right: 0;
  overflow-x: hidden;
}

.huoyuedu_wrap {
  background: #fff;
  padding-left: 3%;
}
.huoyuedu_wrap p {
  height: 0.79rem;
  line-height: 0.79rem;
  font-size: 0.3rem;
  color: #1d1d1d;
  border-bottom: 1px solid #d6d6d6;
}
.huoyuedu_con {
  display: flex;
  height: 0.9rem;
  padding-top: 0.3rem;
}
.huoyuedu_con .item {
  flex: 1;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #f7f7f7;
  margin-right: 3%;
  text-align: center;
  font-size: 0.24rem;
  color: #1d1d1d;
}
.huoyuedu_con .item.active {
  background: #4978b0;
  color: #fff;
}
.zuijindao_wrap {
  background: #fff;
  padding-left: 3%;
  margin-top: 0.3rem;
}
.zuijindao_wrap p {
  height: 0.79rem;
  line-height: 0.79rem;
  font-size: 0.3rem;
  color: #1d1d1d;
  border-bottom: 1px solid #d6d6d6;
}
.zuijindao_con {
}

.date_xuan {
  display: flex;
  margin-top: 0.3rem;
}

.date_xuan .item {
  flex: 1;
  height: 0.6rem;
  background: rgba(247, 247, 247, 1);
  border-radius: 2px;
  margin-right: 3%;
  position: relative;
}
.fang {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.date_xuan span {
  font-size: 0.22rem;
  color: #1d1d1d;
  padding-left: 4%;
}
.date_xuan input {
  width: 51%;
  height: 0.4rem;
  border: 0;
  background: rgba(247, 247, 247, 1);
  margin-right: 2%;
  padding-top: 0.14rem;
  outline: none;
}
.date_xuan img {
  width: 12%;
  height: 0.36rem;
  position: relative;
  top: 0.05rem;
}
.shijian_duan {
  display: flex;
  padding: 0.3rem 0;
}
.shijian_duan .item {
  flex: 1;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background: rgba(247, 247, 247, 1);
  border-radius: 2px;
  margin-right: 3%;
  font-size: 0.24rem;
  color: #1d1d1d;
}
.shijian_duan .item.active {
  background: #4978b0;
  color: #fff;
}
.year_jine_wrap {
  background: #fff;
  padding-left: 3%;
  margin-top: 0.3rem;
}
.year_jine_wrap p {
  height: 0.79rem;
  line-height: 0.79rem;
  font-size: 0.3rem;
  color: #1d1d1d;
  border-bottom: 1px solid #d6d6d6;
}
.year_jine_con {
  display: flex;
  padding: 0.3rem 3% 0.3rem 0;
}
.year_jine_con input {
  flex: 1;
  width: 100%;
  height: 0.6rem;
  outline: none;
  text-align: center;
  background: #f7f7f7;
  border: 0;
}
.qujianxian {
  width: 4%;
  height: 2px;
  background: #1d1d1d;
  position: relative;
  top: 0.28rem;
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
input::-webkit-input-placeholder {
  color: #999;
}
</style>
