<template>
  <div class="main">
    <div class="customerInfo" style="border-top: 1px solid #f7f7f7;">
      <div class="info">
        <div class="itemtype">预约类型</div>
        <div class="iteminfo" style="color:#FF0000;">{{orderType==0?'私教代约':'客户线上预约'}}</div>
      </div>
      <div class="info">
        <div class="itemtype">客户姓名</div>
        <div class="iteminfo">{{customerName}}</div>
      </div>
      <div class="info">
        <div class="itemtype">手机号码</div>
        <div class="iteminfo">{{tel}}</div>
      </div>
      <div class="info">
        <div class="itemtype">上课门店</div>
        <div class="iteminfo">{{clubName}}</div>
      </div>
      <!-- <div class="info">
                <div class="itemtype">健身套餐</div>
                <div class="iteminfo">{{fitName}}</div>
      </div>-->
      <div class="info">
        <div class="itemtype">扣费套餐</div>
        <div class="iteminfo">{{tradePackage}}</div>
      </div>
      <div class="info" @click="goClass">
        <div class="itemtype">上课类型</div>
        <div class="iteminfo">{{classtype1!=''?classtype1.itemsName:itemName}}</div>
      </div>
      <div class="info">
        <div class="itemtype">上课节数</div>
        <div class="iteminfo">{{number}}</div>
      </div>
      <div class="info" @click="changePlan" v-if="status==7&&orderType==1&&status!=8">
        <div class="itemtype">训练计划</div>
        <div
          class="iteminfo"
          :style="{'padding-right:':no!=''?'0.1rem':'','width':no!=''?'66%':'','color':plandetailid==null?'#999':''}"
        >{{plandetailid==null&&status==7&&orderType==1?'去添加训练计划':planDetailName}}</div>
        <img src="../../assets/images/my_menu_more@2x.png" class="arrow" v-if="no!=''" />
      </div>
      <div class="info">
        <div class="itemtype">上课时间</div>
        <div class="iteminfo">{{appointDate+" "+timeScope}}</div>
      </div>
      <!-- <div class="info">
                <div class="itemtype">健身消费</div>
                <div class="iteminfo" style="color:#FF0000">{{remainNumZz>0?'1次':parseFloat(deductionsZz).toFixed(2)+'元'}}</div>
      </div>-->
      <div class="info">
        <div class="itemtype">私教消费</div>
        <div
          class="iteminfo"
          style="color:#FF0000"
        >{{remainNum>0?number+'次':parseFloat(deductions).toFixed(2)*number+'元'}}</div>
      </div>
    </div>
    <div class="btn" v-if="status==0&&status!=8">
      <div class="items1" @click="cancel">取消预约</div>
    </div>
    <div class="btn" v-else-if="status==7&&orderType==1&&status!=8">
      <div class="items" @click="cancel">取消预约</div>
      <div class="items" @click="openGlass">开始上课</div>
    </div>

    <div
      class="btn item"
      v-else-if="status==7&&orderType==0"
      style="width: 92%; background-color: #5176AB;color:#fff;"
      @click="evaluate"
    >评价</div>
    <div
      class="btn item"
      v-else
      style="width: 92%;"
    >{{status==1?'已取消':status==2?'已结束':status==3?'已过期':status==4?'已上课':status==5?'已入场':status==6?'已离场':status==7&&orderType==0?'评价':status==8?'扣费中':'取消成功'}}</div>
    <div class="msk" v-show="show" @click="cancels">
      <div class="cancel" @click.stop="cen">
        <div class="title">提醒</div>
        <div class="content">确定要取消预约课程吗？</div>
        <div class="menu">
          <div class="submenu" @click.stop="cancels">再想想</div>
          <div class="submenu" @click="affirm">确定</div>
        </div>
      </div>
    </div>
    <div class="msk" v-show="show1" @click.stop="cancel1"></div>
    <transition name="mybox" mode="out-in">
      <div class="businessType" v-show="show1">
        <div
          class="type"
          v-for="(item,index) in typeList"
          :key="index"
          @click="businessTypes(item)"
        >{{item}}节</div>
      </div>
    </transition>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      querydate: this.$route.query.querydate,
      shijianduan: this.$route.query.shijianduan,
      show: false,
      currentTime: this.config.formatDate2(this.config.currentTime()),
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
        "#/management/endcourse", //我的预约
      url2:
        this.config.service_ip1 +
        "/train/?v=" +
        new Date().getTime() +
        "#/personaTrain/trainer/trainTemplate", //训练计划
      url3:
        this.config.service_ip1 +
        "/train/?v=" +
        new Date().getTime() +
        "#/management/train_course" //我的预约
    };
  },
  created() {
    //  console.log(this.status)
    //alert(this.shijianduan)
    var secondval = sessionStorage.getItem("secondval");
    if (secondval == 0) {
      sessionStorage.removeItem("secondval");
      this.$router.back();
    }
    //this.findCpByTypesj(this.sysClubCode,this.customerId)
    //this.trainByType();
    this._getSingerList();
  },
  methods: {
    _getSingerList(rate) {
      let data = {
        page: 1,
        rows: 100
      };
      // console.log(timeList)
      // let timeList=this.currentTime+","+this.config.dateAdd(this.config.currentTime(),1)+","+this.config.dateAdd(this.config.currentTime(),2)+","+this.config.dateAdd(this.config.currentTime(),3)+","+this.config.dateAdd(this.config.currentTime(),4);
      data.param = {
        statusArray: "0,5,6,7,8",
        dateList: this.querydate,
        name: "asc"
      };
      this.instance.$post(
        "/rest/wx/coach/getOrderListPageByCoach",
        data,
        res => {
          var data = res.results;
          var shijianduannum = parseInt(this.shijianduan.replace(/:/g, ""));
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

              if (this.gethourcha(timeScope1, timeScope2, this.shijianduan)) {
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
              }
            }
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
    //  修改上课时间
    selectTime() {
      if (this.status == 0) {
        var that = this;
        this.$vux.datetime.show({
          cancelText: "取消",
          confirmText: "确定",
          format: "YYYY-MM-DD HH:mm",
          hourList: [
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
          ],
          minuteList: [
            "00",
            "05",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40",
            "45",
            "50",
            "55"
          ],
          value: that.currentTime,
          startDate: that.currentTime,
          onConfirm(val) {
            var date = new Date(new Date().getTime());
            var hour = date.getHours();
            if (that.timeScope.split("-")[0] > that.timeScope.split("-")[1]) {
              var minutes = that.TimeDifference(
                that.appointDate + " " + that.timeScope.split("-")[0],
                that.addDate(that.appointDate) +
                  " " +
                  that.timeScope.split("-")[1]
              );
            } else {
              var minutes = that.TimeDifference(
                that.appointDate + " " + that.timeScope.split("-")[0],
                that.appointDate + " " + that.timeScope.split("-")[1]
              );
            }

            // alert(minutes)
            // return
            var x = val; // 取得的TextBox中的时间
            var time = new Date(x.replace(/-/g, "/"));
            var b = minutes; //分钟数

            time.setMinutes(time.getMinutes() + b, time.getSeconds(), 0);

            // alert(val.split(" ")[0])
            //     alert(val.split(" ")[1]+"-"+that.config.formatDate1(time).split(" ")[1]);
            //     alert(val)
            var data = {
              no: that.No,
              appointDate: val.split(" ")[0],
              timeScope:
                val.split(" ")[1] +
                "-" +
                that.config.formatDate1(time).split(" ")[1],
              appoint: val,
              courseType: that.itemName,
              itemId: that.itemId,
              itemName: that.itemName,
              number: that.number,
              deductionsBz: that.deductionsBz,
              deductions: that.deductions,
              relaId: that.relaId
            };
            that.instance.$post("/rest/wx/coach/updateOrderTime", data, res => {
              // console.log(JSON.stringify(res));
              if (res.status) {
                that.changeTime =
                  val + "-" + that.config.formatDate1(time).split(" ")[1];
                that.timeScope =
                  val.split(" ")[1] +
                  "-" +
                  that.config.formatDate1(time).split(" ")[1];
                that.appointDate = val.split(" ")[0];
                that.config.showSuccess(that, "修改成功");
                //  that.$route.meta.cancel=1;
                //  setTimeout(()=>{
                // that.$router.back(-1)
                //   },1000)
              } else {
                that.config.showTip(that, res.message);
              }
            });
            // if(that.currentTime==val.split(' ')[0]&&val.split(" ")[1].split(":")[0]<hour){
            //         that.config.showTip(that,"时间选择有误,开始时间已过,请重新选择'");
            // }else{
            // that.time=val;
            // alert( this.currentTime)
            // }
            //console.log('plugin confirm', val+":00");
          }
        });
      }
    },
    // 获取上课类型
    goClass() {
      this.$router.push({
        name: "classtypes",
        query: {
          clubId: this.sysClubCode,
          packageId: this.packageId,
          itemname: this.itemName
        }
      });
    },
    trainByType() {
      //     this.instance.$get('/rest/wx/customer/pac/findItemsByPack',{ params: {
      //           packageId:this.packageId,
      //           clubId:this.sysClubCode,
      //           fitType: "3"
      //         }},res => {
      //           res.rows.forEach(element => {
      //             if(element.itemId==this.itemId){
      //               console.log(element)
      //             }
      //           });
      //  console.log("上课类型"+JSON.stringify(res));
      //  })
    },
    cancel1() {
      this.show1 = false;
    },
    selectClass() {
      this.show1 = true;
    },
    businessTypes(item) {
      if (this.sjtaocan == "") {
        this.config.showTip(this, "扣费套餐不存在");
        return;
      }
      if (this.sjtaocan.packageType == 3 || this.sjtaocan.packageType == 4) {
        //私教套餐 储值卡
        if (
          parseFloat(this.sjtaocan.remainMoney) <
          parseFloat(this.deductions) * parseInt(item)
        ) {
          this.config.showTip(this, "私教套餐余额不足");
          return;
        }
      } else if (
        this.sjtaocan.packageType == 1 ||
        this.sjtaocan.packageType == 2
      ) {
        //次卡
        // alert(this.sjtaocan.remainCount+"*"+parseInt(this.classnumber))
        if (parseInt(this.sjtaocan.remainCount) < parseInt(item)) {
          this.config.showTip(this, "私教套餐余次不足");
          return;
        }
        if (this.sjtaocan.remainMoney <= 0) {
          this.config.showTip(this, "私教套餐余额不足");
          return;
        }
      }
      var that = this;
      this.show1 = false;
      var val = this.appointDate + " " + this.timeScope.split("-")[0]; // 取得的TextBox中的时间
      var time = new Date(val.replace(/-/g, "/"));
      if (that.timeScope.split("-")[0] > that.timeScope.split("-")[1]) {
        var minutes = that.TimeDifference(
          that.appointDate + " " + that.timeScope.split("-")[0],
          that.addDate(that.appointDate) + " " + that.timeScope.split("-")[1]
        );
      } else {
        var minutes = that.TimeDifference(
          that.appointDate + " " + that.timeScope.split("-")[0],
          that.appointDate + " " + that.timeScope.split("-")[1]
        );
      }
      //  alert(minutes)
      //  return
      //  var minutes=this.TimeDifference(this.appointDate+" "+this.timeScope.split('-')[0],this.appointDate+" "+this.timeScope.split('-')[1])
      var b = minutes; //分钟数

      time.setMinutes(time.getMinutes() + b, time.getSeconds(), 0);
      var shichang = parseInt(item) * parseInt(minutes / this.number) * 60000;
      //  alert(shichang)
      var xuanzevalue = val.replace(/-/g, "/");
      var xuanzevalue1 = new Date(xuanzevalue);
      var xuanzevalue2 = xuanzevalue1.getTime(); //转成时间戳
      var jiesutime = xuanzevalue2 + shichang;
      var timescope =
        val.split(" ")[1] +
        "-" +
        this.config.formatDate1(new Date(jiesutime)).split(" ")[1];

      var data = {
        no: this.No,
        appointDate: val.split(" ")[0],
        timeScope: timescope,
        appoint: val,
        courseType: this.itemName,
        itemId: this.itemId,
        itemName: this.itemName,
        number: item,
        deductionsBz: this.deductionsBz,
        deductions: this.deductions,
        relaId: this.relaId
      };
      this.instance.$post("/rest/wx/coach/updateOrderTime", data, res => {
        // console.log(JSON.stringify(res));
        if (res.status) {
          this.config.showSuccess(this, "修改成功");
          this.number = item;
          that.timeScope = timescope;
          that.appointDate = val.split(" ")[0];
          that.changeTime = val + "-" + that.timeScope.split("-")[1];

          // setTimeout(()=>{
          //             this.$router.back(-1)
          //               },1000)
        } else {
          this.config.showTip(this, res.message);
        }
      });
    },
    TimeDifference(time1s, time2s) {
      //定义两个变量time1,time2分别保存开始和结束时间
      var time1 = time1s;
      var time2 = time2s;
      //判断开始时间是否大于结束日期
      if (time1 > time2) {
        //   alert("开始时间不能大于结束时间！");
        return false;
      }
      //截取字符串，得到日期部分"2009-12-02",用split把字符串分隔成数组
      var begin1 = time1.substr(0, 10).split("-");
      var end1 = time2.substr(0, 10).split("-");

      //将拆分的数组重新组合，并实例成化新的日期对象
      var date1 = new Date(begin1[1] + "/" + begin1[2] + "/" + begin1[0]);
      var date2 = new Date(end1[1] + "/" + end1[2] + "/" + end1[0]);
      //得到两个日期之间的差值m，以分钟为单位
      //Math.abs(date2-date1)计算出以毫秒为单位的差值
      //Math.abs(date2-date1)/1000得到以秒为单位的差值
      //Math.abs(date2-date1)/1000/60得到以分钟为单位的差值
      var m = parseInt(Math.abs(date2 - date1) / 1000 / 60);

      //小时数和分钟数相加得到总的分钟数
      //time1.substr(11,2)截取字符串得到时间的小时数
      //parseInt(time1.substr(11,2))*60把小时数转化成为分钟
      var min1 =
        parseInt(time1.substr(11, 2)) * 60 + parseInt(time1.substr(14, 2));
      var min2 =
        parseInt(time2.substr(11, 2)) * 60 + parseInt(time2.substr(14, 2));
      //两个分钟数相减得到时间部分的差值，以分钟为单位
      var n = min2 - min1;
      //将日期和时间两个部分计算出来的差值相加，即得到两个时间相减后的分钟数
      var minutes = m + n;
      return minutes;
      // console.log(minutes);
    },
    openGlass() {
      if (this.plandetailid != null) {
        window.location.href =
          this.url3 +
          "?planDetailId=" +
          this.plandetailid +
          "&planDetailName=" +
          this.planDetailName +
          "&headImg=" +
          this.headImg +
          "&no=" +
          this.no +
          "&time=" +
          this.appointDate +
          "&timeScope=" +
          this.timeScope;
        //  this.$router.push({
        //              name:"train_course",
        //               query:{
        //               planDetailId:this.plandetailid,
        //               planDetailName:this.planDetailName,
        //               headImg:this.headImg,
        //               no:this.no,
        //               time:this.appointDate,
        //               timeScope:this.timeScope
        //              }
        //            })
      } else {
        this.config.showTip(this, "请添加训练计划");
      }
    },
    cancel() {
      this.config.showWaiting();
      let data = {
        orderNo: this.No
      };
      $.ajax({
        type: "post",
        url: this.config.service_ip + "/rest/wx/customer/validateIsEntranceQY",
        data: data,
        success: res => {
          this.config.closeWaiting();
          if ((res.code = "200")) {
            if (res.status) {
              this.config.showTip(this, "会员已入场，不能取消");
            } else {
              this.show = !this.show;
            }
          } else if (res.code == "500") {
            this.config.showTip(this, res.message);
          }
        },
        error: function() {
          this.config.closeWaiting();
        }
      });
    },
    //  修改训练计划
    changePlan() {
      if (this.no != "" && this.status == 7 && this.orderType == 1) {
        //  alert(this.no)
        window.location.href =
          this.url2 +
          "?customerId=" +
          this.customerId +
          "&customerName=" +
          this.customerName +
          "&customerheadimg=" +
          this.headImg +
          "&no=" +
          this.no +
          "&changeplan=1";
        //  this.$router.push({
        //          name:"trainTemplate",
        //            query:{
        //       customerId:this.customerId,
        //       customerName:this.customerName,
        //       customerheadimg:this.headImg,
        //     no:this.no,
        //     changeplan:1
        //          }
        //    })
      }
    },
    affirm() {
      this.config.showWaiting();
      let data = {
        flag: "cancel",
        orderNo: this.No
      };
      $.ajax({
        type: "post",
        url: this.config.service_ip + "/rest/wx/coach/updateOrderStatus",
        data: data,
        success: res => {
          this.config.closeWaiting();
          if (res.status) {
            this.config.showSuccess(this, "取消成功");
            this.show = !this.show;
            setTimeout(() => {
              this.$router.back(-1);
            }, 1000);
            //  this.status=-1;
            //        this.$route.meta.cancel=1;
          } else {
            this.config.showTip(this, "预约取消失败");
          }
        },
        error: function() {
          this.config.closeWaiting();
        }
      });
    },
    cen() {},
    // 获取私教套餐
    findCpByTypesj(clubid, customerid) {
      this.instance.$get(
        "/rest/wx/customer/pac/findCpByType",
        {
          params: {
            clubId: clubid,
            fitType: 3,
            customerId: customerid
          }
        },
        res => {
          console.log(JSON.stringify(res) + "扣费套餐");
          let fidsjFlag = 0;
          res.rows.forEach(element => {
            element.pacList.forEach(element => {
              // console.log(this.packageId)
              if (element.sysCustomerPacId == this.packageId) {
                //  console.log(element.remainCount+"&"+element.remainMoney)
                this.sjtaocan = element;
                fidsjFlag = 1;
                console.log(element);
              }
            });
          });
          if (fidsjFlag == 0) {
            this.sjtaocan = "";
            return;
          }
        }
      );
    },
    evaluate() {
      window.location.href =
        this.url1 +
        "?coachPlanId=" +
        this.coachplanid +
        "&planDetailId=" +
        this.plandetailid +
        "&no=" +
        this.No +
        "&time=" +
        this.appointDate +
        "&timeScope=" +
        this.timeScope;
      // this.$router.replace({
      //              name:"endcourse",

      //               query:{
      //               coachPlanId:this.coachplanid,
      //               planDetailId:this.plandetailid,
      //               no:this.No,
      //                time:this.appointDate,
      //               timeScope:this.timeScope
      //              }
      //            })
    },
    // 日期，在原有日期基础上，增加days天数，默认增加1天
    addDate(date, days) {
      if (days == undefined || days == "") {
        days = 1;
      }
      var date = new Date(date);
      date.setDate(date.getDate() + days);
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return (
        date.getFullYear() +
        "-" +
        this.getFormatDate(month) +
        "-" +
        this.getFormatDate(day)
      );
    },
    // 日期月份/天的显示，如果是1位数，则在前面加上'0'
    getFormatDate(arg) {
      if (arg == undefined || arg == "") {
        return "";
      }

      var re = arg + "";
      if (re.length < 2) {
        re = "0" + re;
      }
      return re;
    },
    cancels() {
      this.show = !this.show;
    }
  },
  watch: {
    $route(to, from) {
      if (from.meta.classtype != undefined && from.meta.classtype != "") {
        var that = this;
        console.log(from.meta.classtype);
        if (this.sjtaocan == "") {
          this.config.showTip(this, "扣费套餐不存在");
          return;
        }
        if (this.sjtaocan.packageType == 3 || this.sjtaocan.packageType == 4) {
          //私教套餐 储值卡
          if (
            parseFloat(this.sjtaocan.remainMoney) <
            parseFloat(this.deductions) * parseInt(this.number)
          ) {
            this.config.showTip(this, "私教套餐余额不足");
            return;
          }
        } else if (
          this.sjtaocan.packageType == 1 ||
          this.sjtaocan.packageType == 2
        ) {
          //次卡
          // alert(this.sjtaocan.remainCount+"*"+parseInt(this.classnumber))
          if (parseInt(this.sjtaocan.remainCount) < parseInt(this.number)) {
            this.config.showTip(this, "私教套餐余次不足");
            return;
          }
          if (this.sjtaocan.remainMoney <= 0) {
            this.config.showTip(this, "私教套餐余额不足");
            return;
          }
        }

        let courseTimes = 60;
        if (
          from.meta.classtype.courseTime &&
          from.meta.classtype.courseTime != "" &&
          from.meta.classtype.courseTime != 0
        ) {
          courseTimes = from.meta.classtype.courseTime;
        }
        var val = this.appointDate + " " + this.timeScope.split("-")[0]; // 取得的TextBox中的时间
        // var time = new Date(val.replace(/-/g,"/"));
        //  if(that.timeScope.split('-')[0]>that.timeScope.split('-')[1]){
        //           var minutes=that.TimeDifference(that.appointDate+" "+that.timeScope.split('-')[0],that.addDate(that.appointDate)+" "+that.timeScope.split('-')[1])
        //        }else{
        //  var minutes=that.TimeDifference(that.appointDate+" "+that.timeScope.split('-')[0],that.appointDate+" "+that.timeScope.split('-')[1])
        //        }
        //       //  alert(minutes)
        //       //  return
        // //  var minutes=this.TimeDifference(this.appointDate+" "+this.timeScope.split('-')[0],this.appointDate+" "+this.timeScope.split('-')[1])
        // var b = minutes; //分钟数

        // time.setMinutes(time.getMinutes() + b, time.getSeconds(), 0);
        var shichang = parseInt(this.number) * parseInt(courseTimes) * 60000;
        //  alert(shichang)
        var xuanzevalue = val.replace(/-/g, "/");
        var xuanzevalue1 = new Date(xuanzevalue);
        var xuanzevalue2 = xuanzevalue1.getTime(); //转成时间戳
        var jiesutime = xuanzevalue2 + shichang;
        var timescope =
          val.split(" ")[1] +
          "-" +
          this.config.formatDate1(new Date(jiesutime)).split(" ")[1];
        var data = {
          no: this.No,
          appointDate: val.split(" ")[0],
          timeScope: timescope,
          appoint: val,
          courseType: from.meta.classtype.itemsName,
          itemId: from.meta.classtype.itemId,
          itemName: from.meta.classtype.itemsName,
          number: this.number,
          deductionsBz: from.meta.classtype.itemBzPrice,
          deductions: from.meta.classtype.itemPrice,
          relaId: from.meta.classtype.relaId
        };
        this.instance.$post("/rest/wx/coach/updateOrderTime", data, res => {
          // console.log(JSON.stringify(res));
          if (res.status) {
            this.config.showSuccess(this, "修改成功");
            this.classtype1 = from.meta.classtype;
            this.deductions = this.classtype1.itemPrice;
            this.itemName = this.classtype1.itemsName;
            this.itemId = this.classtype1.itemId;
            this.deductionsBz = this.classtype1.itemBzPrice;
            this.timeScope = timescope;
            this.appointDate = val.split(" ")[0];
            this.changeTime = val + "-" + this.timeScope.split("-")[1];
            from.meta.classtype = "";
            //  setTimeout(()=>{
            //               this.$router.back(-1)
            //                 },1000)
          } else {
            this.config.showTip(this, res.message);
          }
        });
        // //  console.log(this.classtype1.relaId)
        //   this.yyTime='';
        // from.meta.classtype='';
      }
    }
  }
};
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 92% !important;
  padding-top: 20px;
  padding-bottom: 1rem;
  background-color: #fff;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  .customerInfo {
    .info {
      position: relative;
      border-bottom: 1px solid #f7f7f7;
      height: 1rem;
      line-height: 1rem;
      padding: 0 0.3rem;
      .itemtype,
      .iteminfo {
        width: 28%;
        float: left;
        font-size: 0.32rem;
        font-weight: 500;
      }
      .itemcolor {
        color: #999999;
        font-size: 0.28rem;
        font-weight: 400;
      }
      .iteminfo {
        width: 72%;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
      }
      .arrow {
        position: absolute;
        width: 0.2rem;
        right: 0.3rem;
        top: 0.36rem;
      }
    }
  }
  .btn {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin: 0 auto;
    font-size: 0.36rem;
    margin-top: 0.6rem;
    float: left;
    margin-left: 4%;
    .items1 {
      width: 92%;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      float: left;
      border-radius: 5px;
      background-color: #5176ab;
    }
    .items {
      width: 43%;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      float: left;
      border-radius: 5px;
      background-color: #5176ab;
    }
    .items:first-child {
      background-color: #fff;
      color: #5176ab;
      border: 1px solid rgba(81, 118, 171, 1);
      margin-right: 5%;
    }
  }
  .btn.item {
    color: #999999;
    background-color: #f7f7f7;
  }
  .msk {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
  }
  .stores {
    width: 80%;
    position: absolute;
    height: 100%;
    background-color: #fff;
    overflow-y: auto;
    top: 0;
    right: 0;
    .taocan:last-child {
      margin-bottom: 1.2rem;
    }
    .taocan {
      .ts {
        font-size: 0.3rem;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        border-radius: 5px;
        padding: 0.36rem 0;
        color: #1c1c1c;
        margin-top: 0.5rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 2px 0px rgba(2, 0, 250, 0.4);
      }
      .active {
        color: #0200fa;
      }
    }
    .regions {
      width: 54% !important;
    }
    .region p:last-child,
    .regions p:last-child {
      margin-bottom: 1.2rem;
    }
    .region,
    .regions {
      float: right;
      width: 45%;
      text-align: center;
      height: 100%;
      font-size: 0.3rem;
      overflow-y: auto;
      .active {
        color: #0200fa;
      }
      p {
        margin-bottom: 0.6rem;
      }
      p:first-child {
        margin-top: 0.4rem;
      }
    }
    .btn {
      width: 100%;
      height: 1rem;
      position: absolute;
      bottom: 0;
      text-align: center;
      font-size: 0.36rem;
      .determine,
      .cancel {
        width: 55%;
        height: 1rem;
        line-height: 1rem;
        float: left;
        background-color: #fff;
      }
      .determine {
        background-color: #0200fa;
        color: #fff;
      }
      .cancel {
        width: 45%;
        background-color: #f2f2f2;
      }
    }
  }
  .msk {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    .cancel {
      width: 70%;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 10px;
      position: absolute;
      left: 15%;
      top: 50%;
      transform: translateY(-50%);
      .title {
        color: #fff;
        background-color: #4978b0;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.36rem;
        border-radius: 10px 10px 0 0;
      }
      .content {
        text-align: center;
        padding: 1rem 0;
        font-size: 0.36rem;
      }
      .menu {
        display: flex;
        border-top: 1px solid #f7f7f7;
        .submenu {
          flex: 1;
          text-align: center;
          padding: 0.3rem 0;
          font-size: 0.3rem;
        }
        .submenu:first-child {
          border-right: 1px solid #f7f7f7;
        }
      }
    }
  }
}
.businessType {
  position: absolute;
  bottom: 0rem;
  width: 100%;
  border-top: 1px solid #f7f7f7;
  background-color: #fff;
  height: 2.7rem;
  .type {
    width: 49%;
    float: left;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.36rem;
  }
  .type:nth-of-type(odd) {
    border-right: 1px solid #f7f7f7;
  }
  .type:nth-of-type(1) {
    border-bottom: 1px solid #f7f7f7;
  }
  .type:nth-of-type(2) {
    border-bottom: 1px solid #f7f7f7;
  }
}
.mybox-leave-active,
.mybox-enter-active {
  transition: all 0.3s linear;
}
.mybox-leave-active,
.mybox-enter {
  height: 0px !important;
}
.mybox-leave,
.mybox-enter-active {
  height: 126px;
}
</style>
