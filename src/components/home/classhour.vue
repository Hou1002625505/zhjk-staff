<template>
  <div class="container" v-wechat-title="ftitle">
    <mt-swipe
      :show-indicators="false"
      @change="handleChange"
      :continuous="false"
      :auto="0"
      :defaultIndex="swiperItemIndex"
    >
      <mt-swipe-item class="swiper-demo-img" v-for="(item, index8) in weekList" :key="index8">
        <div class="dataList">
          <ul>
            <li
              class="zdata"
              v-for="(item,index) in item.items"
              :key="index"
              @click="selectclitime(item)"
            >
              <p>{{item.substring(0,5)}}</p>
              <p
                style="position:relative;top:-4px;"
              >{{item.substring(0,5)==currentTime.replace(/-/g,'.').substring(5,10)?'今天':item.substring(6,8)}}</p>
              <div :class="{'circle':item.substring(0,5)==circleselected}"></div>
            </li>
          </ul>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 课时发布查询 -->
    <div v-show="ffabuflag">
      <div class="courselist_wrap" v-show="courselist">
        <div class="coursetable">
          <div class="coursetime clear">
            <div
              class="courseitem"
              v-for="(item,index1) in times"
              :key="index1"
              @click="yiyuyue.indexOf(item.xianshitime)>=0&&fyijiesuarr.indexOf(item.xianshitime)<0&&clickyiyuyue(item.xianshitime)"
              :class="{courseitemactive:'',bottomright:item.id==35,bottomleft:item.xianshitime=='20:00'}"
            >
              <span
                :class="{active:yifabucourse.indexOf(item.xianshitime)>=0,active1:yiyuyue.indexOf(item.xianshitime)>=0&&fyijiesuarr.indexOf(item.xianshitime)<0}"
                v-html="yiyuyue.indexOf(item.xianshitime)>=0?fyijiesuarr.indexOf(item.xianshitime)>=0?'已结束':'已约':item.xianshitime"
              >{{item.xianshitime}}</span>
            </div>
          </div>
        </div>
        <div class="fabushuom">
          <p>注：选择8:00,表示选择时间为8:00-8:30，灰色字体表示课时未发</p>
          <p>布，黑色字体表示已发布的课时.</p>
        </div>
        <div class="cursorbianji" v-show="courseaddflag">
          <div class="cursorbianjiitem">
            <span @click="coursezhuijia">课时追加</span>
            <span style="margin-left:0.3rem;" @click="coursexiajia">课时下架</span>
          </div>
        </div>
      </div>
      <div class="nocourse" v-show="fnodataflag">
        <p>您还没发布课时</p>
        <p>点击下方蓝色按钮发布课时！</p>
      </div>
      <div class="coursefabubtn_wrap" v-show="courseaddflag">
        <div class="coursefabubtn" @click="classpublish">课时发布</div>
      </div>
    </div>
    <!-- 课时下架 -->
    <div v-show="fxiajiaflag">
      <div class="coursetable">
        <div class="coursetime clear">
          <div
            class="courseitem"
            v-for="(item,index1) in times"
            :key="index1"
            @click="yifabucourse.indexOf(item.xianshitime)>=0&&selectxiajiame(item.id)"
            :class="{courseitemactive:'',bottomright:item.id==35,bottomleft:item.xianshitime=='20:00'}"
          >
            <span
              :class="{active:yifabucoursexiajia.indexOf(item.id)>=0||yifabucourse.indexOf(item.xianshitime)>=0,active1:yiyuyue.indexOf(item.xianshitime)>=0&&fyijiesuarr.indexOf(item.xianshitime)<0}"
              v-html="yiyuyue.indexOf(item.xianshitime)>=0?fyijiesuarr.indexOf(item.xianshitime)>=0?'已结束':'已约':item.xianshitime"
            >{{item.xianshitime}}</span>
            <img
              :src="yifabucoursexiajia.indexOf(item.id)>=0?checkbtn1:checkbtn"
              v-if="item.xianshitime!=''&&yiyuyue.indexOf(item.xianshitime)<0&&yifabucourse.indexOf(item.xianshitime)>=0"
            />
          </div>
        </div>
      </div>
      <div class="xiajiayuanyin">
        <p>请选择下架原因</p>
        <div class="yuanyinitem_wrap clear">
          <div
            class="yuanyinitem"
            v-for="(item,index3) in xiajiareasonlist"
            :key="index3"
            :xiajiayyId="item.dictionaryId"
            :class="{active:item.dictionaryId==selectxiajiaid}"
            @click="selecxiajiame(item.dictionaryId,item.name)"
          >{{item.name}}</div>
        </div>
        <div class="textarea_wrap" v-show="selectname=='其他'">
          <textarea placeholder="其他原因" v-model="xiajaireason" maxlength="100"></textarea>
        </div>
      </div>
      <div class="fcoursefabubtn_wrapheight"></div>
      <div class="fcoursefabubtn_wrap">
        <div class="fcoursefabubtn" @click="coursexzquxiao">取消</div>
        <div class="fcoursefabubtn1" @click="surecoursexiajia">确定下架</div>
      </div>
    </div>

    <!-- 课时追加 -->
    <div v-show="fzhuijiaflag">
      <div class="coursetable">
        <div class="coursetime clear">
          <div
            class="courseitem"
            v-for="(item,index1) in times"
            :key="index1"
            @click="yifabucourse.indexOf(item.xianshitime)<0&&selectedzhuijia(item.id)"
            :class="{courseitemactive:'',bottomright:item.id==35,bottomleft:item.xianshitime=='20:00'}"
          >
            <span
              :class="{active:yifabucoursezhuijia.indexOf(item.id)>=0,active1:yiyuyue.indexOf(item.xianshitime)>=0&&fyijiesuarr.indexOf(item.xianshitime)<0}"
              v-html="yiyuyue.indexOf(item.xianshitime)>=0?fyijiesuarr.indexOf(item.xianshitime)>=0?'已结束':'已约':item.xianshitime"
            >{{item.xianshitime}}</span>
            <img
              :src="yifabucoursezhuijia.indexOf(item.id)>=0?checkbtn:checkbtn1"
              v-if="item.xianshitime!=''&&yiyuyue.indexOf(item.xianshitime)<0"
            />
          </div>
        </div>
        <div class="fcoursefabubtn_wrap">
          <div class="fcoursefabubtn" @click="coursexzquxiao">取消</div>
          <div class="fcoursefabubtn1" @click="surecoursezhuijia">确定追加</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      currentTime: this.config.formatDate(this.config.currentTime()),
      currentTime1: this.config.formatDate2(this.config.currentTime()),
      //  info: [],
      iconIndex: 0,
      weekList: [], //最近一周时间
      weekList1: [],
      positionX: 0,
      flags: false,
      swiperItemIndex: 8,
      positionY: 0,
      month: new Date().getMonth() + 1,
      customerList: [],
      yuyueList: [],
      times: [
        { xianshitime: "06:00", courseduan: "06:00-06:30", id: 1 },
        { xianshitime: "06:30", courseduan: "06:30-07:00", id: 2 },
        { xianshitime: "07:00", courseduan: "07:00-07:30", id: 3 },
        { xianshitime: "07:30", courseduan: "07:30-08:00", id: 4 },
        { xianshitime: "08:00", courseduan: "08:00-08:30", id: 5 },
        { xianshitime: "08:30", courseduan: "08:30-09:00", id: 6 },
        { xianshitime: "09:00", courseduan: "09:00-09:30", id: 7 },
        { xianshitime: "09:30", courseduan: "09:30-10:00", id: 8 },
        { xianshitime: "10:00", courseduan: "10:00-10:30", id: 9 },
        { xianshitime: "10:30", courseduan: "10:30-11:00", id: 10 },
        { xianshitime: "11:00", courseduan: "11:00-11:30", id: 11 },
        { xianshitime: "11:30", courseduan: "11:30-12:00", id: 12 },
        { xianshitime: "12:00", courseduan: "12:00-12:30", id: 13 },
        { xianshitime: "12:30", courseduan: "12:30-13:00", id: 14 },
        { xianshitime: "13:00", courseduan: "13:00-13:30", id: 15 },
        { xianshitime: "13:30", courseduan: "13:30-14:00", id: 16 },
        { xianshitime: "14:00", courseduan: "14:00-14:30", id: 17 },
        { xianshitime: "14:30", courseduan: "14:30-15:00", id: 18 },
        { xianshitime: "15:00", courseduan: "15:00-15:30", id: 19 },
        { xianshitime: "15:30", courseduan: "15:30-16:00", id: 20 },
        { xianshitime: "16:00", courseduan: "16:00-16:30", id: 21 },
        { xianshitime: "16:30", courseduan: "16:30-17:00", id: 22 },
        { xianshitime: "17:00", courseduan: "17:00-17:30", id: 23 },
        { xianshitime: "17:30", courseduan: "17:30-18:00", id: 24 },
        { xianshitime: "18:00", courseduan: "18:00-18:30", id: 25 },
        { xianshitime: "18:30", courseduan: "18:30-19:00", id: 26 },
        { xianshitime: "19:00", courseduan: "19:00-19:30", id: 27 },
        { xianshitime: "19:30", courseduan: "19:30-20:00", id: 28 },
        { xianshitime: "20:00", courseduan: "20:00-20:30", id: 29 },
        { xianshitime: "20:30", courseduan: "20:30-21:00", id: 30 },
        { xianshitime: "21:00", courseduan: "21:00-21:30", id: 31 },
        { xianshitime: "21:30", courseduan: "21:30-22:00", id: 32 },
        { xianshitime: "22:00", courseduan: "22:00-22:30", id: 33 },
        { xianshitime: "", courseduan: "", id: 34 },
        { xianshitime: "", courseduan: "", id: 35 }
      ],

      checkbtn: require("../../assets/images/set_btn@2x.png"),
      checkbtn1: require("../../assets/images/nor_btn@2x.png"),
      lastTime: "",
      nextTime: "",
      lastweekList1: [],
      nextweekList1: [],
      inversionTime: "",
      userName: "",
      fdatestr: this.config.formatDate(this.config.currentTime()),
      circleselected: this.config
        .formatDate(this.config.currentTime())
        .replace(/-/g, ".")
        .substring(5, 10),
      fnodataflag: false,
      courselist: false,
      yifabucourse: [],
      yifabucourseid: [],
      yifabucoursexiajia: [], //课时下架已选
      yifabucoursezhuijia: [], //课时追加已选
      yiyuyue: [],
      ffabuflag: true,
      fxiajiaflag: false,
      fzhuijiaflag: false,
      xiajiareasonlist: [],
      selectxiajiaid: "",
      courseid: "",
      xiajaireason: "",
      courseaddflag: true,
      ftitle: "课时管理",
      selectname: "",
      fyijiesuarr: [],
      fyikoufei: [],
      customerId: "",
      headImg: "",
      no: "",
      customerName: "",
      appointDate: "",
      timeScope: "",
      tel: "",
      clubName: "",
      sjtaocan: "",
      courseType: "",
      tradePackage: "",
      fitName: "",
      number: "",
      itemName: "",
      deductions: "",
      deductionsZz: "",
      remainNum: "",
      remainNumZz: "",
      No: "",
      plandetailid: "",
      planDetailName: "",
      status: "",
      packageId: "",
      sysClubCode: "",
      itemId: "",
      deductionsBz: "",
      relaId: "",
      changeTime: "",
      classtype1: "",
      typeList: ["1", "2", "3", "4"],
      show1: false,
      orderType: "",
      no: "",
      url1:
        this.config.service_ip1 +
        "/train/?v=" +
        new Date().getTime() +
        "#/management/my_management" //我的预约
    };
  },
  created() {
    var that = this;
    var currentDate = new Date(this.currentTime);
    var timesStamp = currentDate.getTime();
    var currenDay = currentDate.getDay();
    var dates = [];
    //  let mapsw={
    //    items: []
    // }
    for (var i = 0; i < 7; i++) {
      var week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
        new Date(
          new Date(
            timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
          )
        ).getDay()
      ];
      // console.log(week)
      var date = "",
        date1 = "";
      // console.log(this.config.formatDate(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).split('-')[1]);
      var shds = this.config
        .formatDate(
          timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
        )
        .split("-")[1];
      var shds1 = this.config
        .formatDate(
          timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
        )
        .split("-")[2];
      date = shds + "." + shds1;
      // console.log(date)
      dates.push(date + "." + week);
      date1 =
        this.config
          .formatDate(
            timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
          )
          .split("-")[0] +
        "-" +
        shds +
        "-" +
        shds1;

      console.log(date1 + "(((");
      //  mapsw.items.push(date1)
      if (i == 0) {
        this.lastTime = this.config.dateAdd(date1, -1);
      }
      if (i == 6) {
        this.nextTime = this.config.dateAdd(date1, 1);
        //  this.weekList1.push(mapsw);
      }
    }
    //console.log(this.lastTime+"滑一下")
    for (var i = 0; i <= 7; i++) {
      this.dateCalculation(this.lastTime, -1);
    }
    this.dateCalculation(this.currentTime, 0);
    this.dateCalculation(this.nextTime, 1);
    // this._getSingerList(0,0)
    //  console.log(this.weekList1)
    // alert(this.weekList1)
    this.getQyUser();
    this.queryxiajiareason();
  },
  methods: {
    //获取工号
    getQyUser() {
      this.instance.$post("/rest/wx/customer/getQyUser", {}, res => {
        console.log(res);

        this.userName = res.rows[0].userName;
        this.querycourse();
      });
    },
    //课时查询接口
    querycourse() {
      //  let timeList='';
      //   for(var i=0;i<this.weekList1[this.swiperItemIndex].items.length;i++){
      //               var item=this.weekList1[this.swiperItemIndex].items[i]
      //               if(timeList==''){
      //                 timeList+=item;
      //               }else{
      //                 timeList+=","+item
      //               }
      //   }
      //   console.log(timeList)
      this.instance.$post(
        "/rest/wx/coach/course/getCourseTimeListOfCoach",
        {
          coachCode: this.userName,

          courseDate: this.fdatestr
        },
        res => {
          console.log(res);
          if (res.status) {
            this.yifabucourse = [];
            this.yiyuyue = [];
            this.yifabucoursexiajia = [];
            this.yifabucoursezhuijia = [];
            this.yifabucourseid = [];
            this.fyijiesuarr = [];
            this.fyikoufei = [];
            var data = res.rows;
            var data1 = res.rows1;
            if (data.length > 0) {
              this.courselist = true;
              this.fnodataflag = false;
              this.courseid = data[0];
              for (var i = 1; i < data.length; i++) {
                var item = data[i];
                this.yifabucourse.push(item.substring(0, 5));
              }
              console.log(this.yifabucourse);
            } else {
              this.fnodataflag = true;
              this.courselist = false;
            }

            if (data1.length > 0) {
              console.log(data1);
              for (var j = 0; j < data1.length; j++) {
                var item1 = data1[j];
                console.log(item1);
                this.yiyuyue.push(item1.substring(0, 5));
              }
              console.log("sssss");
              console.log(this.yiyuyue);
            }
            var yidata = this.yifabucourse;
            var yidata1 = this.times;
            for (var k = 0; k < yidata.length; k++) {
              for (var l = 0; l < yidata1.length; l++) {
                if (yidata[k] == yidata1[l].xianshitime) {
                  this.yifabucoursexiajia.push(yidata1[l].id);
                  this.yifabucoursezhuijia.push(yidata1[l].id);
                  this.yifabucourseid.push(yidata1[l].id);
                }
              }
            }
          } else {
            this.fnodataflag = true;
            this.courselist = false;
          }
          this._getSingerList();
        }
      );
    },
    //下架原因查询
    queryxiajiareason() {
      this.instance.$post(
        "/rest/wx/dictionnary/getDictionNaryTypeList",
        {
          typeCode: "downreson"
        },
        res => {
          console.log(JSON.stringify(res));
          res.rows[0].dlist.forEach(item => {
            if (item.name == "其他") {
              this.xiajiareasonlist.push(item);
            } else {
              this.xiajiareasonlist.unshift(item);
            }
          });
        }
      );
    },
    //课时下架
    selectxiajiame(id) {
      //alert(1)
      var ids = this.yifabucoursexiajia.indexOf(id);
      if (ids >= 0) {
        //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
        this.yifabucoursexiajia.splice(ids, 1);
      } else {
        //选中该按钮
        this.yifabucoursexiajia.push(id);
      }
    },
    //课时追加

    selectedzhuijia(id) {
      //alert(1)
      var ids = this.yifabucoursezhuijia.indexOf(id);
      if (ids >= 0) {
        //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
        this.yifabucoursezhuijia.splice(ids, 1);
      } else {
        //选中该按钮
        this.yifabucoursezhuijia.push(id);
      }
    },
    //课时下架确定
    surecoursexiajia() {
      var fabuid1 = this.yifabucourseid;
      var fabuid2 = this.yifabucoursexiajia;
      var yidata1 = this.times;
      console.log(fabuid1);
      console.log(fabuid2);
      var fabuid3 = this.getArrDifference(fabuid1, fabuid2);
      var fxiajiashiduan = [];
      for (var x = 0; x < fabuid3.length; x++) {
        for (var y = 0; y < yidata1.length; y++) {
          if (fabuid3[x] == yidata1[y].id) {
            fxiajiashiduan.push(yidata1[y].courseduan);
          }
        }
      }
      console.log("方乘风");
      console.log(fxiajiashiduan);
      var fxiajiashiduanstr = fxiajiashiduan.join(",");
      //已预约id
      var yiyuyueid = [];
      var yidata = this.yiyuyue;
      var yidata1 = this.times;
      for (var k = 0; k < yidata.length; k++) {
        for (var l = 0; l < yidata1.length; l++) {
          if (yidata[k] == yidata1[l].xianshitime) {
            yiyuyueid.push(yidata1[l].id);
          }
        }
      }

      //已预约id + 已发布id
      var yiyuyuefabuid = this.unique(
        yiyuyueid.concat(this.yifabucoursexiajia)
      );
      var xiajiayixuan = this.bubbleSort(yiyuyuefabuid);
      console.log(xiajiayixuan);
      var shijianduan = [];
      var ftimes = this.times;
      for (var i = 0; i < xiajiayixuan.length; i++) {
        for (var j = 0; j < ftimes.length; j++) {
          if (xiajiayixuan[i] == ftimes[j].id) {
            shijianduan.push(ftimes[j].courseduan);
          }
        }
      }
      var shijianduanstr;
      console.log(shijianduan);
      if (shijianduan.length > 0) {
        var shijianduan1 = this.formatArr(shijianduan);
        var shijianduan2 = this.fangstrong(shijianduan1);

        console.log(shijianduan2);
        shijianduanstr = shijianduan1.join(",");
      }

      //var shijianduan1 = shijianduan
      if (shijianduanstr == undefined) {
        shijianduanstr = "";
      }

      if (this.selectxiajiaid == "") {
        this.$vux.toast.text("请选择原因", "center");
        return false;
      }
      if (this.selectname == "其他") {
        if (this.xiajaireason == "") {
          this.$vux.toast.text("请填写原因", "center");
          return false;
        } else {
          var data = {
            coachCode: this.userName,
            coachCourseTimeId: this.courseid,
            courseTimeScopes: shijianduanstr,
            xiajiayyId: this.selectxiajiaid,
            xiajiayy: this.xiajaireason,
            xiajiaTimescope: fxiajiashiduanstr,
            czleixing: 1
          };
        }
      } else {
        var data = {
          coachCode: this.userName,
          coachCourseTimeId: this.courseid,
          courseTimeScopes: shijianduanstr,
          xiajiayyId: this.selectxiajiaid,
          xiajiayy: "下架",
          xiajiaTimescope: fxiajiashiduanstr,
          czleixing: 1
        };
      }

      this.instance.$post("/rest/wx/coach/course/editCourseTime", data, res => {
        console.log(res);
        if (res.status) {
          this.ffabuflag = true;
          this.fxiajiaflag = false;
          this.fzhuijiaflag = false;
          this.ftitle = "课时管理";
          this.querycourse();
        } else {
          this.$vux.toast.text(res.message, "center");
        }
      });
    },
    //课时追加确定
    surecoursezhuijia() {
      // var fabuid1 = this.yifabucourseid;
      //  var fabuid2 = this.yifabucoursexiajia;
      //  console.log(fabuid1)
      //  console.log(fabuid2)
      //  var fabuid3 = this.getArrDifference(fabuid1,fabuid2);

      //  console.log(fabuid3)
      //已预约id
      var yiyuyueid = [];
      var yidata = this.yiyuyue;
      var yidata1 = this.times;
      for (var k = 0; k < yidata.length; k++) {
        for (var l = 0; l < yidata1.length; l++) {
          if (yidata[k] == yidata1[l].xianshitime) {
            yiyuyueid.push(yidata1[l].id);
          }
        }
      }
      //已预约id + 已发布id
      var yiyuyuefabuid = this.unique(
        yiyuyueid.concat(this.yifabucoursezhuijia)
      );
      var xiajiayixuan = this.bubbleSort(yiyuyuefabuid);
      console.log(xiajiayixuan);
      var shijianduan = [];
      var ftimes = this.times;
      for (var i = 0; i < xiajiayixuan.length; i++) {
        for (var j = 0; j < ftimes.length; j++) {
          if (xiajiayixuan[i] == ftimes[j].id) {
            shijianduan.push(ftimes[j].courseduan);
          }
        }
      }
      console.log(shijianduan);
      var shijianduanstr;
      if (shijianduan.length > 0) {
        var shijianduan1 = this.formatArr(shijianduan);
        var shijianduan2 = this.fangstrong(shijianduan1);
        console.log(shijianduan2);
        shijianduanstr = shijianduan1.join(",");
      }

      //var shijianduan1 = shijianduan
      if (shijianduanstr == undefined) {
        shijianduanstr = "";
      }

      this.instance.$post(
        "/rest/wx/coach/course/editCourseTime",
        {
          coachCode: this.userName,
          coachCourseTimeId: this.courseid,
          courseTimeScopes: shijianduanstr,
          xiajiayyId: "123",
          xiajiayy: "123",
          czleixing: 0
        },
        res => {
          console.log(res);
          if (res.status) {
            this.ffabuflag = true;
            this.fxiajiaflag = false;
            this.fzhuijiaflag = false;
            this.ftitle = "课时管理";
            this.querycourse();
          } else {
            this.$vux.toast.text(res.message, "center");
          }
        }
      );
    },
    clickyiyuyue(fshijianduan1) {
      this.ffshijianduan1 = fshijianduan1;

      this._fffgetSingerList();

      //  this.$router.push({
      //         name: "amymanagement",
      //         query:{
      //           querydate:this.fdatestr,
      //           shijianduan:shijianduan1
      //         }
      //       });
    },
    _fffgetSingerList(rate) {
      let data = {
        page: 1,
        rows: 100
      };
      // console.log(timeList)
      // let timeList=this.currentTime+","+this.config.dateAdd(this.config.currentTime(),1)+","+this.config.dateAdd(this.config.currentTime(),2)+","+this.config.dateAdd(this.config.currentTime(),3)+","+this.config.dateAdd(this.config.currentTime(),4);
      data.param = {
        statusArray: "0,5,6,7,8",
        dateList: this.fdatestr,
        name: "asc"
      };
      this.instance.$post(
        "/rest/wx/coach/getOrderListPageByCoach",
        data,
        res => {
          var data = res.results;
          var shijianduannum = parseInt(this.ffshijianduan1.replace(/:/g, ""));
          //alert(shijianduannum)
          console.log(data);
          if (data.length > 0) {
            var fangdata = "";
            for (var i = 0; i < data.length; i++) {
              var timeScope = "";
              var timeScope1 = "";
              var timeScope2 = "";
              var timeScope1num = 0;
              var timeScope2num = 0;
              var item = data[i];
              timeScope = item.timeScope;
              timeScope1 = timeScope.split("-")[0];
              timeScope2 = timeScope.split("-")[1];

              timeScope1num = parseInt(timeScope1.replace(/:/g, ""));
              timeScope2num = parseInt(timeScope2.replace(/:/g, ""));

              if (
                this.gethourcha(timeScope1, timeScope2, this.ffshijianduan1)
              ) {
                this.customerName = item.customerName;
                this.tel = item.tel;
                this.clubName = item.clubName;
                this.tradePackage = item.tradePackage;
                this.number = item.number;
                this.remainNum = item.remainNum;
                this.deductions = item.deductions;
                this.appointDate = item.appointDate;
                this.timeScope = item.timeScope;
                this.itemName = item.itemName;
                this.status = item.status;
                this.No = item.no;
                this.no = item.no;
                this.orderType = item.orderType;
                this.coachplanid = item.coachPlanId;
                if (item.planDetailId == "") {
                  this.plandetailid = null;
                } else {
                  this.plandetailid = item.planDetailId;
                }
                this.customerId = item.customerId;
                this.planDetailName = item.planDetailName;
                this.headImg = item.headImg;
                this.packageId = item.packageId;
                this.itemId = item.itemId;
                this.relaId = item.relaId;
                this.sysClubCode = item.sysClubCode;
                this.deductionsBz = item.deductionsBz;
                this.planDetailName = item.planDetailName;
                this.fitName = item.fitName;
              }
            }

            window.location.href =
              this.url1 +
              "?customerId=" +
              this.customerId +
              "&customerName=" +
              this.customerName +
              "&headImg=" +
              this.headImg +
              "&no=" +
              this.no +
              "&appointDate=" +
              this.appointDate +
              "&timeScope=" +
              this.timeScope +
              "&tel=" +
              this.tel +
              "&clubName=" +
              this.clubName +
              "&courseType=" +
              this.courseType +
              "&tradePackage=" +
              this.tradePackage +
              "&fitName=" +
              this.fitName +
              "&number=" +
              this.number +
              "&itemName=" +
              this.itemName +
              "&deductions=" +
              this.deductions +
              "&deductionsZz=" +
              this.deductionsZz +
              "&remainNum=" +
              this.remainNum +
              "&remainNumZz=" +
              this.remainNumZz +
              "&No=" +
              this.no +
              "&plandetailId=" +
              this.plandetailid +
              "&planDetailName=" +
              this.planDetailName +
              "&status=" +
              this.status +
              "&packageId=" +
              this.packageId +
              "&sysClubCode=" +
              this.sysClubCode +
              "&itemId=" +
              this.itemId +
              "&deductionsBz=" +
              this.deductionsBz +
              "&relaId=" +
              this.relaId +
              "&orderType=" +
              this.orderType;
          }
        },
        err => {},
        rate
      );
    },
    fangstrong() {
      alert(1);
    },
    gethourcha(beginTime, endTime, nowTime) {
      var strb = beginTime.split(":");
      if (strb.length != 2) {
        return false;
      }

      var stre = endTime.split(":");
      if (stre.length != 2) {
        return false;
      }

      var strn = nowTime.split(":");
      if (stre.length != 2) {
        return false;
      }
      var b = new Date();
      var e = new Date();
      var n = new Date();

      b.setHours(strb[0]);
      b.setMinutes(strb[1]);
      e.setHours(stre[0]);
      e.setMinutes(stre[1]);
      n.setHours(strn[0]);
      n.setMinutes(strn[1]);

      if (n.getTime() - b.getTime() >= 0 && n.getTime() - e.getTime() < 0) {
        return true;
      } else {
        // alert ("当前时间是：" + n.getHours () + ":" + n.getMinutes () + "，不在该时间范围内！");
        return false;
      }
    },
    coursezhuijia() {
      this.ffabuflag = false;
      this.fxiajiaflag = false;
      this.fzhuijiaflag = true;
      this.ftitle = "课时追加";
      //alert(this.$route.meta.title)
    },
    coursexiajia() {
      this.selectxiajiaid = "";
      this.xiajaireason = "";
      this.ffabuflag = false;
      this.fxiajiaflag = true;
      this.fzhuijiaflag = false;
      this.ftitle = "课时下架";
    },
    coursexzquxiao() {
      this.ffabuflag = true;
      this.fxiajiaflag = false;
      this.fzhuijiaflag = false;
      this.ftitle = "课时管理";
    },
    selecxiajiame(id, name) {
      this.selectxiajiaid = id;
      this.selectname = name;
    },
    //数组排序
    bubbleSort(arr) {
      var len = arr.length;

      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            // 相邻元素两两对比

            var temp = arr[j + 1]; // 元素交换

            arr[j + 1] = arr[j];

            arr[j] = temp;
          }
        }
      }
      return arr;
    },
    //取出两个数组的不同元素
    getArrDifference(arr1, arr2) {
      return arr1.concat(arr2).filter(function(v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
      });
    },
    formatArr(arr) {
      let currencyIndex = [0];
      let currencyItem = arr[0].split("-")[1];
      for (let j = 1; j < arr.length; j++) {
        if (arr[j].indexOf(currencyItem) > -1) {
          currencyItem = arr[j].split("-")[1];
        } else {
          currencyItem = arr[j].split("-")[1];
          currencyIndex.push(j);
        }
      }
      let fallyArr = [];
      for (let i = 0; i < currencyIndex.length; i++) {
        let endArr;
        let starStr = arr[currencyIndex[i]].split("-")[0];
        if (currencyIndex.length < 2) {
          endArr = arr[arr.length - 1].split("-")[1];
        } else {
          if (i == currencyIndex.length - 1) {
            endArr = arr[arr.length - 1].split("-")[1];
          } else {
            endArr = arr[currencyIndex[i + 1] - 1].split("-")[1];
          }
        }

        fallyArr.push(`${starStr}-${endArr}`);
      }
      return fallyArr;
    },
    fangstrong(arr1) {
      var arr2 = [];
      for (var i = 0; i < arr1.length; i++) {
        var arritem = arr1[i].split("-")[1];
        var arritemnum = parseInt(arritem.replace(/:/g, ""));
        var arritem1 = arritem.split(":")[1];
        var arritemnum1 = 0;
        if (arritem1 == "30") {
          arritemnum1 = arritemnum - 30;
        } else {
          arritemnum1 = arritemnum - 70;
        }
        var arritemnum1str = "";
        var farrstr = arritemnum1.toString();
        if (farrstr.length == 3) {
          arritemnum1str = "0" + farrstr;
        } else {
          arritemnum1str = arritemnum1.toString();
        }

        console.log(arritemnum1str);
        var arritemnum1str1 =
          arritemnum1str.substring(0, 2) + ":" + arritemnum1str.substring(2, 4);
        console.log(arritemnum1str1);
        var zhongstr = "";
        if (arr1[i].split("-")[0] == arritemnum1str1) {
          zhongstr = arr1[i].split("-")[0];
        } else {
          zhongstr = arr1[i].split("-")[0] + "-" + arritemnum1str1;
        }
        console.log(zhongstr);
        arr2.push(zhongstr);
      }
      return arr2;
    },
    handleChange(index) {
      //   console.log(index)
      this.swiperItemIndex = index;
      if (this.weekList.length - 1 == index) {
        // alert(32432)
        //console.log( this.nextTime);
        this.flags = true;
        this.dateCalculation(this.nextTime);
        //this._getSingerList(0,0);
        // this._getSingerList();
      } else {
        //this._getSingerList(0,0);
        // if(index==0){
        //    this.dateCalculation(this.inversionTime,-2);
        //      this.swiperItemIndex=1;
        //   console.log(this.inversionTime)
        // }
        // }
        //  this._getSingerList(0,0);
      }
      this.month = parseInt(
        this.weekList[this.swiperItemIndex].items[0].substring(0, 2)
      );
    },
    selectclitime(dateid) {
      this.circleselected = dateid.substring(0, 5);
      var nianfen = this.currentTime.substring(0, 4);
      var yueri = this.circleselected.replace(/\./g, "-");
      var fdate = nianfen + "-" + yueri;
      //alert(fdate)
      this.fdatestr = fdate;
      var selectdate = fdate.replace(/-/g, "/");
      var shacha =
        new Date(selectdate).getTime() - new Date(this.currentTime1).getTime();
      //  alert(shacha)
      if (shacha < 0) {
        this.courseaddflag = false;
      } else {
        this.courseaddflag = true;
      }
      //  this._getSingerList()
      this.querycourse();
    },
    dateCalculation(currentTime, id) {
      var that = this;
      var currentDate = new Date(currentTime);
      var timesStamp = currentDate.getTime();
      var currenDay = currentDate.getDay();
      var dates = [];
      // if(this.flags){
      //      this.weekList1=[];
      //          }
      let mapsw = {
        items: []
      };
      for (var i = 0; i < 7; i++) {
        var week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
          new Date(
            new Date(
              timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
            )
          ).getDay()
        ];
        // console.log(week)
        var date = "",
          date1 = "";
        // console.log(this.config.formatDate(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).split('-')[1]);
        var shds = this.config
          .formatDate(
            timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
          )
          .split("-")[1];
        var shds1 = this.config
          .formatDate(
            timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
          )
          .split("-")[2];
        date = shds + "." + shds1;
        // console.log(date)
        dates.push(date + "." + week);
        date1 =
          this.config
            .formatDate(
              timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
            )
            .split("-")[0] +
          "-" +
          shds +
          "-" +
          shds1;

        // console.log(date1+"(((")
        //  if(this.flags){
        //     this.weekList1.push(date1);
        //  }
        mapsw.items.push(date1);
        if (id == 1) {
          this.nextweekList1.push(date1);
        }
        if (id == -1) {
          this.lastweekList1.push(date1);
        }

        if (i == 0) {
          this.lastTime = this.config.dateAdd(date1, -1);
          if (id == -1) {
            this.inversionTime = this.lastTime;
            //console.log(this.lastTime+"SADSAD")
          }
        }
        if (i == 6) {
          this.nextTime = this.config.dateAdd(date1, 1);
          if (id == -1) {
            this.weekList1.unshift(mapsw);
          } else {
            this.weekList1.push(mapsw);
          }
        }
        //console.log(date1)
      }
      // console.log( this.weekList1+"***")
      let maps = {
        items: []
      };
      dates.forEach((element, index) => {
        maps.items.push(element);
        if (dates.length - 1 == index) {
          if (id == -1) {
            that.weekList.unshift(maps);
          } else {
            that.weekList.push(maps);
          }
        }
      });
      this.weekList.forEach((element, index) => {
        element.items.forEach((element, index1) => {
          if (
            element.substring(0, 5) ==
            this.currentTime.replace(/-/g, ".").substring(5, 10)
          ) {
            this.iconIndex = index1;
          }
        });
      });
      //console.log(this.weekList)
    },
    _getSingerList(rate) {
      let data = {
        page: 1,
        rows: 100
      };
      // console.log(timeList)
      // let timeList=this.currentTime+","+this.config.dateAdd(this.config.currentTime(),1)+","+this.config.dateAdd(this.config.currentTime(),2)+","+this.config.dateAdd(this.config.currentTime(),3)+","+this.config.dateAdd(this.config.currentTime(),4);
      data.param = {
        statusArray: "0,1,2,4,5,6,7,8",
        dateList: this.fdatestr,
        name: "asc"
      };
      this.instance.$post(
        "/rest/wx/coach/getOrderListPageByCoach",
        data,
        res => {
          var arr = [];
          var arr1 = this.unique(this.yiyuyue);
          var farr1 = this.unique(this.yiyuyue);
          console.log(arr1);
          var arr2 = [];
          var arr3 = [];
          var arr4 = [];
          var arr8 = [];
          var arr9 = []; //已结束的时间段
          var arr10 = [];
          var arr11 = []; //已扣费的时间段
          var data = res.results;
          if (data.length > 0) {
            data.forEach(item => {
              if (item.status == 1) {
                arr.push(item.timeScope);
              }
              if (item.status == 0) {
                arr3.push(item.timeScope);
              }
              //课程结束，已扣费私教自己约的
              if (
                item.status == 2 ||
                (item.status == 7 && item.orderType == 0)
              ) {
                arr8.push(item.timeScope);
              }
              if (item.status == 7) {
                arr10.push(item.timeScope);
              }
            });
          }

          console.log(arr);

          if (arr.length > 0) {
            for (var i = 0; i < arr1.length; i++) {
              for (var j = 0; j < arr.length; j++) {
                var arritem0 = arr[j].split("-")[0];
                var arritem1 = arr[j].split("-")[1];

                if (this.gethourcha(arritem0, arritem1, arr1[i])) {
                  arr2.push(arr1[i]);
                }
              }
            }

            for (var m = 0; m < arr2.length; m++) {
              for (var n = 0; n < arr1.length; n++) {
                if (arr2[m] == arr1[n]) {
                  arr1.splice(arr1[n], 1);
                }
              }
            }
            //this.yiyuyue = arr1
          }
          if (arr3.length > 0) {
            for (var o = 0; o < farr1.length; o++) {
              for (var p = 0; p < arr3.length; p++) {
                var arritem0 = arr3[p].split("-")[0];
                var arritem1 = arr3[p].split("-")[1];

                if (this.gethourcha(arritem0, arritem1, farr1[o])) {
                  arr4.push(farr1[o]);
                }
              }
            }
            console.log(arr4);
            var arr5 = arr1.concat(arr4);
            console.log("aaaaa");
            console.log(arr5);
            //this.yiyuyue = arr5
          }
          if (arr8.length > 0) {
            for (var x = 0; x < farr1.length; x++) {
              for (var z = 0; z < arr8.length; z++) {
                var arritem0 = arr8[z].split("-")[0];
                var arritem1 = arr8[z].split("-")[1];

                if (this.gethourcha(arritem0, arritem1, farr1[x])) {
                  arr9.push(farr1[x]);
                }
              }
            }
            console.log("已结束课时");
            console.log(arr9);
            this.fyijiesuarr = arr9;
          }
          if (arr10.length > 0) {
            for (var x = 0; x < farr1.length; x++) {
              for (var z = 0; z < arr10.length; z++) {
                var arritem0 = arr10[z].split("-")[0];
                var arritem1 = arr10[z].split("-")[1];

                if (this.gethourcha(arritem0, arritem1, farr1[x])) {
                  arr11.push(farr1[x]);
                }
              }
            }
            console.log("已扣费课时");
            console.log(arr11);
            this.fyikoufei = arr11;
          }
        },
        err => {},
        rate
      );
    },
    gethourcha(beginTime, endTime, nowTime) {
      var strb = beginTime.split(":");
      if (strb.length != 2) {
        return false;
      }

      var stre = endTime.split(":");
      if (stre.length != 2) {
        return false;
      }

      var strn = nowTime.split(":");
      if (stre.length != 2) {
        return false;
      }
      var b = new Date();
      var e = new Date();
      var n = new Date();

      b.setHours(strb[0]);
      b.setMinutes(strb[1]);
      e.setHours(stre[0]);
      e.setMinutes(stre[1]);
      n.setHours(strn[0]);
      n.setMinutes(strn[1]);

      if (n.getTime() - b.getTime() >= 0 && n.getTime() - e.getTime() < 0) {
        return true;
      } else {
        // alert ("当前时间是：" + n.getHours () + ":" + n.getMinutes () + "，不在该时间范围内！");
        return false;
      }
    },

    //数组去重
    unique(arr) {
      var uniqueArr = [],
        len = arr.length;
      for (var i = 0; i < len; i++) {
        if (uniqueArr.indexOf(arr[i]) == -1) {
          uniqueArr.push(arr[i]);
        }
      }
      return uniqueArr;
    },
    getIntervalHour(endDate, timeScope) {
      var timer = timeScope.split("-");
      var result = endDate + " " + timer[0] + ":00";
      var resultZh = result.replace(new RegExp(/-/gm), "/");
      var end = new Date(resultZh);
      var dateZh = endDate.replace(new RegExp(/-/gm), "/");
      var startDate = new Date(dateZh + " " + "06:00:00"); //获取系统当前时间
      var ms = end.getTime() - startDate.getTime();
      if (ms < 0) return 0;
      return (ms / 1000 / 60 / 60).toFixed(1) * 0.93;
      // console.log((ms / 1000 / 60 / 60).toFixed(1) * 0.9)
    },
    switchs() {
      this.$router.replace({
        name: "course_History"
      });
    },
    goDetails(
      customername,
      name1,
      appointdate,
      timescope,
      tell,
      clubname,
      coursetype,
      tradepackage,
      fitname,
      numbers,
      itemname,
      deductionS,
      deductionszz,
      remainnum,
      remainnumZz,
      no,
      plandetailid,
      planDetailname,
      statuss,
      customerid,
      headimg,
      No,
      packageid,
      sysclubcode,
      itemid,
      deductionsbz,
      relaid
    ) {
      var reg = new RegExp("[~#^$@%&!?%*]", "g");
      if (customername.match(reg)) {
        customername = encodeURI(customername);
      }
    },
    change() {
      localStorage.setItem("change", 0);
      this.$router.replace({
        name: "richeng_management"
      });
    },
    approximately() {
      this.$router.push({
        path: "/personaTrain/mycustomer"
      });
    },
    classpublish() {
      this.$router.push({
        name: "classpublish"
      });
    },
    _normalizeSinger(list) {
      this.yuyueList = [];
      // console.log(this.weekList1[this.swiperItemIndex].items)
      this.weekList1[this.swiperItemIndex].items.forEach(element => {
        // console.log(element)
        let map = {
          time: element,
          items: []
        };
        list.forEach((item, index) => {
          const key = item.appointDate.substring(0, 10);
          // console.log(key)
          if (key == element) {
            map.items.push(item);
          }
        });
        this.yuyueList.push(map);
      });

      //   console.log(JSON.stringify(this.yuyueList))
    }
  },
  directives: {
    drag: {
      // 指令的定义
      bind: el => {
        let odiv = el; //获取当前元素
        let disX = "",
          disY = "";
        odiv.addEventListener("touchstart", e => {
          e.preventDefault();
          //  console.log(e.touches[0].clientX)
          disX = e.touches[0].clientX - odiv.offsetLeft;
          disY = e.touches[0].clientY - odiv.offsetTop;
        });
        odiv.addEventListener("touchmove", e => {
          e.preventDefault();
          let left = e.touches[0].clientX - disX;
          let top = e.touches[0].clientY - disY;
          //绑定元素位置到positionX和positionY上面
          this.positionX = top;
          this.positionY = left;
          //移动当前元素
          odiv.style.left = left / 55 + "rem";
          odiv.style.top = top / 55 + "rem";
        });
        odiv.addEventListener("touchend", e => {
          e.preventDefault();
        });
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.coursefabubtn_wrapheight {
  height: 1.4rem;
}
.mint-swipe-items-wrap > div {
  height: 74px;
}
.mint-swipe-items-wrap {
  height: 74px !important;
}
.mint-swipe {
  height: 74px !important;
}
.menus {
  max-width: 640px;
  width: 96%;
  position: fixed;
  top: 0;
  padding: 4%;
  z-index: 2;
  background-color: #fff;
  // height: 1rem;
  // padding-bottom: 0.31rem;
  .menu {
    width: 88%;
    display: flex;
    border: 1px solid #4a77b0;
    border-radius: 5px;
    .item {
      flex: 1;
      text-align: center;
      font-size: 0.34rem;
      color: #4a77b0;
      padding: 0.15rem 0;
    }
    .active {
      background-color: #4a77b0;
      color: #fff;
    }
  }
  img {
    width: 0.4rem;
    position: absolute;
    right: 0.5rem;
    top: 0.52rem;
  }
}
.dataList {
  background-color: #f7f7f7;
  margin-top: 17px;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  position: sticky;
  z-index: 999;
  max-width: 640px;
  padding: 0.1rem 0;
  height: 30px;
  top: 17px;
  // left: 0.9rem;
  width: 100%;
  .zdata {
    width: 14.25%;
    text-align: center;
    position: relative;
    float: left;
    .circle {
      position: absolute;
      width: 41px;
      height: 41px;
      border: 2px solid #4a77b0;
      border-radius: 50%;
      top: -7.8px;
      z-index: 999999;
      left: 50%;
      transform: translate(-50%);
    }
    p {
      font-size: 12px;
      color: #1d1d1d;
    }
    p:last-child {
      font-size: 13px;
    }
  }
}
.dataItem {
  left: 0;
  width: 12%;
  .zdata {
    width: 100%;
    padding: 0 0.15rem;
  }
}
.appinfo {
  margin-top: 0.32rem;
  border-top: 1px solid #f7f7f7;
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  .timer {
    position: relative;
    width: 12.5%;
    text-align: center;
    float: left;
    .subsection {
      width: 100%;
      height: 0.91rem;
      border-bottom: 1px solid #f7f7f7;
      font-size: 13px;
      color: #1d1d1d;
      span {
        padding-top: 5px;
        display: block;
      }
    }
    .borders {
      border-left: 1px solid #f7f7f7;
    }
    .schooltime {
      width: 100%;
      height: 0.91rem;
      position: absolute;
      top: 0;
      background: rgba(153, 203, 255, 0.5);
      .slt {
        text-align: center;
        padding: 0 3px;
        padding-top: 8px;
      }
      p {
        font-size: 0.26rem;
        color: #1d1d1d;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:last-child {
        font-size: 0.2rem;
        color: #989898;
      }
      .prepare {
        position: absolute;
        width: 21px;
        height: 20px;
        top: 0;
        right: 0;

        font-size: 0.2rem;
        color: #fff;
        text-align: center;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}

.coursetable {
  width: 94%;
  margin: 0 auto;

  border: 1px solid #d6d6d6;
  border-bottom: none;
  border-right: none;
  border-radius: 6px;

  .coursetime {
    //  border-bottom: 1px solid #D6D6D6;
    .courseitem {
      float: left;
      width: 13.956%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      border-right: 1px solid #d6d6d6;
      border-bottom: 1px solid #d6d6d6;
      position: relative;
      span {
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }

      .active {
        color: #1d1d1d !important;
      }
      .active1 {
        color: #4978b0 !important;
      }
      img {
        width: 0.28rem;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  .courseitemactive {
    border-right: none !important;
  }
  .bottomright {
    border-bottom-right-radius: 6px !important;
  }
  .bottomleft {
    border-bottom-left-radius: 6px !important;
  }
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.clear {
  zoom: 1;
}
.fabushuom {
  padding: 3% 3% 0 3%;
}
.fabushuom p {
  font-size: 0.24rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.cursorbianji {
  padding: 0 3%;
  height: 0.6rem;
}
.cursorbianjiitem {
  float: right;
}
.cursorbianji span {
  display: inline-block;
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border: 1px solid rgba(73, 120, 176, 1);
  border-radius: 4px;
  font-size: 0.24rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(73, 120, 176, 1);
}
.coursefabubtn {
  width: 2.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: rgba(73, 120, 176, 1);
  box-shadow: 0px 2px 20px 0px rgba(91, 155, 232, 0.5);
  border-radius: 40px;
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);

  margin: 0 auto;
}
.coursefabubtn_wrap {
  position: fixed;
  bottom: 0.84rem;
  left: 0;
  right: 0;
}
.nocourse {
  text-align: center;
  padding-top: 50%;
}
.nocourse p {
  font-size: 0.3rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.xiajiayuanyin {
  padding-right: 3%;
}
.xiajiayuanyin p {
  padding-left: 3%;
  font-size: 0.3rem;
  font-family: PingFang-SC-Medium;
  line-height: 0.9rem;
  font-weight: 500;
  color: rgba(29, 29, 29, 1);
}
.yuanyinitem_wrap {
}
.yuanyinitem {
  width: 46.4%;
  margin: 0 0 0.4rem 3%;
  height: 0.6rem;
  float: left;
  line-height: 0.6rem;
  text-align: center;
  background: rgba(247, 247, 247, 1);
  border-radius: 4px;
  font-size: 0.26rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(29, 29, 29, 1);
}
.yuanyinitem_wrap .active {
  background: rgba(73, 120, 176, 1) !important;
  color: #ffffff !important;
}
.textarea_wrap {
  width: 94%;
  margin: 0 auto;
  height: 1.5rem;
  background: rgba(247, 247, 247, 1);
}
.textarea_wrap textarea {
  width: 96%;
  height: 96%;
  padding: 3%;
  resize: none;
  background: rgba(247, 247, 247, 1);
  border: none;
  font-size: 0.26rem;
  font-family: PingFang-SC-Medium;
  outline: none;
  font-weight: 500;
  color: rgba(29, 29, 29, 1);
}
.fcoursefabubtn {
  width: 47%;
  float: left;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border: 1px solid rgba(73, 120, 176, 1);
  border-radius: 10px;
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(73, 120, 176, 1);
}
.fcoursefabubtn1 {
  width: 47%;
  float: right;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border: 1px solid rgba(73, 120, 176, 1);
  background: rgba(73, 120, 176, 1);
  border-radius: 10px;
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: #fff;
}
.fcoursefabubtn_wrap {
  position: fixed;
  bottom: 0.34rem;
  left: 3%;
  right: 0;
  width: 94%;
  height: 1rem;
}
.fcoursefabubtn_wrapheight {
  height: 1.7rem;
}
</style>
