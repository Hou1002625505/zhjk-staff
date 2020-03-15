<template>
  <div id="calendar" :class="{'change':isChange}">
    <!-- 年份 月份 -->
    <div class="year-month">
      <!-- <div class="year-month_left">
        <span class="top-time">{{currentMonth}}月</span>
        <ul>
          <li>{{weekdays[newWeek]}}</li>
          <li>{{currentYear}}年</li>
        </ul>
      </div>
      <div class="year-month_right"><x-icon @click="addSchedule" type="ios-plus-empty" size="30" class="i-plus-empty"></x-icon></div>-->
      <div @click="leftSliding">
        <img src="../../../assets/image/left_btn@2x.png" alt />
      </div>
      <div class="year-month-a">{{currentYear}}年{{currentMonth}}月</div>
      <div @click="rightSliding">
        <img src="../../../assets/image/right_btn@2x.png" alt />
      </div>
    </div>
    <!-- 星期 -->
    <ul class="weekdays">
      <li v-for="(vo,index) in weekdays" v-text="vo" :key="index"></li>
    </ul>
    <!-- 日期 -->
    <ul
      class="days"
      :class="{'fadeOut':fadeOut,'fadeIn':fadeIn,'fadeOutR':fadeOutR,'fadeInR':fadeInR}"
      @touchstart="allTouchStart"
      @touchend="allTouchEnd"
      @touchstart.stop="touchStart"
      @touchend.stop="touchEnd"
    >
      <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
      <li
        v-for="(dayobject,index) in days"
        :class="{'weekend':(index%7 === 0)||((index+1)%7 === 0)}"
        :key="index"
      >
        <!--本月-->
        <!--如果不是本月 改变类名加灰色-->
        <div
          v-if="dayobject.day.getMonth()+1 !== currentMonth"
          @click="otherMonth(dayobject.day.getDate())"
          class="other-month"
        ></div>
        <!-- {{dayobject.day.getDate()}} -->
        <!--如果是本月 还需要判断是不是这一天-->
        <div v-else class="everyDay">
          <!--今天 同年同月同日-->
          <div
            @click="getDayMessage(currentYear,currentMonth,dayobject.day.getDate())"
            v-if="dayobject.day.getFullYear() === new Date().getFullYear() && dayobject.day.getMonth() === new Date().getMonth() && dayobject.day.getDate() === new Date().getDate()"
            :class="{'active':dayobject.day.getDate() === otherDay}"
          >
            <div class="active-col">
              {{ dayobject.day.getDate()}}
              <div class="active-radius"></div>
            </div>
          </div>
          <div
            :class="{'otherday':dayobject.day.getDate() === otherDay}"
            v-else
            @click="getDayMessage(currentYear,currentMonth,dayobject.day.getDate())"
          >
            <div class="otherday-col">
              <div
                v-if="dayobject.day.getFullYear() < new Date().getFullYear() || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() < new Date().getMonth() 
                || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() === new Date().getMonth() && dayobject.day.getDate() < new Date().getDate()"
                class="otherday-col-hui"
              >{{ dayobject.day.getDate()}}</div>
              <div
                v-if="dayobject.day.getFullYear() > new Date().getFullYear() || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() > new Date().getMonth() 
                || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() === new Date().getMonth() && dayobject.day.getDate() > new Date().getDate()"
              >{{ dayobject.day.getDate()}}</div>
              <div
                v-if="dayobject.day.getFullYear() < new Date().getFullYear() || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() < new Date().getMonth() 
                || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() === new Date().getMonth() && dayobject.day.getDate() < new Date().getDate()"
                class="otherday-radius-hui"
              ></div>
              <div
                v-if="dayobject.day.getFullYear() > new Date().getFullYear() || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() > new Date().getMonth() 
                || dayobject.day.getFullYear() === new Date().getFullYear()&&dayobject.day.getMonth() === new Date().getMonth() && dayobject.day.getDate() > new Date().getDate()"
                class="otherday-radius-red"
              ></div>
            </div>
          </div>
          <div :class="{'circle':dayobject.status==='3','o':dayobject.status==='2'}"></div>
        </div>
      </li>
    </ul>
    <!--背景色-->
    <!-- <div class="background" :class="{'change':isChange}">
      <div v-for="(value,index) in 5" :class="{'dbg':(index%2===0),'lbg':(index%2!==0)}" :key="index"></div>
    </div>-->
  </div>
</template> 

<script>

import $ from 'jquery'

export default {
  name: "Calendar",
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      newWeek: 1,
      days: [],
      weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      // 上下滑动的鼠标位置
      positionSX: "",
      positionEX: "",
      positionSY: "",
      positionEY: "",
      isChange: false,
      // 左右滑动动画的初始状态
      show: true,
      fadeOut: false,
      fadeIn: false,
      fadeOutR: false,
      fadeInR: false,
      monthList: [],
      status: "",
      otherDay: ""
    };
  },
  created() {
    this.initData(null);
  },
  methods: {
    getDayMessage(y, m, d) {
      this.getCurrentWeek(y, m, d);
      const str = this.formatDate(y, m, d);
      this.$emit("change", str, m, d);
      this.otherDay = d;
      this.$emit("abc",$(this)[0].otherDay)
      //($(this)[0].otherDay)
    },
    getCurrentWeek(y, m, d) {
      const w = `${y}-${m}-${d}`;
      const weekArr = w.split("-");
      const weeks = new Date(weekArr[0], parseInt(weekArr[1] - 1), weekArr[2]);
      this.newWeek = weeks.getDay();
    },
    otherMonth(day) {
      if (day < 15) {
        this.rightSliding();
      } else if (day > 15) {
        this.leftSliding();
      }
    },
    addSchedule() {
      this.$emit("add");
    },
    //向下滑监听坐标
    allTouchStart(e) {
      //开始x轴坐标
      this.positionSX = e.changedTouches[0].clientX;
      //开始y轴坐标
      this.positionSY = e.changedTouches[0].clientY;
    },
    allTouchEnd(e) {
      //结束x轴坐标
      this.positionEX = e.changedTouches[0].clientX;
      //结束y轴坐标
      this.positionEY = e.changedTouches[0].clientY;
      const distanceY = this.positionEY - this.positionSY;
      const distanceX = this.positionSX - this.positionEX;
      //判断滑动的方向
      if (distanceY < -30 && Math.abs(distanceY) > Math.abs(distanceX)) {
        this.isChange = true;
      }
      if (distanceY > 30 && Math.abs(distanceY) > Math.abs(distanceX)) {
        this.isChange = false;
      }
    },

    //监听左右滑动坐标
    touchStart(e) {
      //开始x轴坐标
      this.positionSX = e.changedTouches[0].clientX;
      //开始y轴坐标
      this.positionSY = e.changedTouches[0].clientY;
    },
    touchEnd(e) {
      this.show = !this.show;
      //结束x轴坐标
      this.positionEX = e.changedTouches[0].clientX;
      //结束y轴坐标
      this.positionEY = e.changedTouches[0].clientY;
      const distanceY = this.positionEY - this.positionSY;
      const distanceX = this.positionSX - this.positionEX;
      //判断滑动 的方向
      if (distanceX > 30 && Math.abs(distanceY) < Math.abs(distanceX)) {
        this.rightSliding();
      }
      if (distanceX < -30 && Math.abs(distanceY) < Math.abs(distanceX)) {
        this.leftSliding();
      }
    },
    //向右滑动
    rightSliding() {
      const self = this;
      self.pickNext(self.currentYear, self.currentMonth);
      self.fadeOut = true;
      self.fadeIn = false;
      self.fadeInR = false;
      self.fadeOutR = false;
      setTimeout(function() {
        self.fadeIn = true;
        self.fadeOut = false;
        self.fadeOutR = false;
        self.fadeInR = false;
      }, 300);
    },
    //向左滑动
    leftSliding() {
      const self = this;
      self.pickPre(self.currentYear, self.currentMonth);
      self.fadeOutR = true;
      self.fadeInR = false;
      self.fadeOut = false;
      self.fadeIn = false;
      setTimeout(function() {
        self.fadeInR = true;
        self.fadeOutR = false;
        self.fadeOut = false;
        self.fadeIn = false;
      }, 300);
    },
    initData(cur) {
      let date;
      if (cur) {
        date = new Date(cur);
      } else {
        var now = new Date();
        //var t = this.formatDate(now.getFullYear(), now.getMonth(), 1);
        //console.log(t)
        //var d = new Date(t);
        now.setDate(35);
        date = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
        // console.log(t)
        // console.log(d)
        console.log(date)
      }
      //console.log(date)
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
      this.currentWeek = date.getDay();
      //console.log(date)
      //console.log(this.currentYear)
      if (!cur || !this.otherDay) {
        this.otherDay = new Date().getDate();
      }
      const str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      //初始化本周
      for (let i = this.currentWeek; i >= 0; i--) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        const dayobject = {}; //用一个对象包装Date对象 以便为以后预定功能添加属性
        dayobject.day = d;
        dayobject.status = "";
        this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
      }
      //其他周
      for (let i = 1; i <= 34 - this.currentWeek; i++) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);
        const dayobject = {};
        dayobject.day = d;
        dayobject.status = "";
        this.days.push(dayobject);
      }
      //选中日期在其他月份是否超出最大日期判断
      const arr = [];
      for (let j = 0, length = this.days.length; j < length; j++) {
        if (this.days[j].day.getMonth() + 1 === this.currentMonth) {
          arr.push(this.days[j].day.getDate());
        }
      }
      const maxDate = Math.max.apply(null, arr);
      if (this.otherDay > maxDate) {
        this.otherDay = maxDate;
      }

      this.getDayMessage(this.currentYear, this.currentMonth, this.otherDay);
    },
    //     上个月信息
    pickPre(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 下个月信息
    pickNext(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 补零处理
    formatDate(year, month, day) {
      let y = year;
      let m = month;
      if (m < 10) m = "0" + m;
      let d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    }
  },
  mounted() {
    // console.log(this.days);
    // console.log(this.days[0].day.getMonth());
    // console.log(this.currentDay)
    // console.log(this.currentYear)
    // console.log(new Date().getFullYear())
    // console.log(this.date)
  }
};
</script>
 
<style lang="less" scoped>
#calendar {
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  background: white;
  .change {
    height: 5rem !important;
  }
  .year-month {
    margin: 0.3rem 0 0.3rem 0;
    font-size: 0.3rem;
    color: #000;
    display: flex;
    justify-content: center;
    font-weight: bold;
    .year-month-a {
      width: 1.72rem;
      text-align: center;
      margin-left: 0.23rem;
      margin-right: 0.23rem;
    }
    img {
      width: 0.16rem;
      height: 0.25rem;
    }
    // .year-month {
    //     height:80px;
    //     width: 100%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-around;
    //     .year-month_left{
    //       height:100%;
    //       width:80%;
    //       padding-left: 25px;
    //       display: flex;
    //       align-items: center;
    //         .top-time {
    //           color:#333;
    //           font-size:26px;
    //           font-weight:500;
    //           margin-right: 15px;
    //       }
    //       ul{
    //         display:flex;
    //         flex-direction:column;
    //         li{
    //           color:#444;
    //           font-size:16px;
    //         }
    //       }
    //     }
    //     .year-month_right{
    //       height:100%;
    //       width:20%;
    //       display: flex;
    //       align-items: center;
    //       justify-content: flex-end;
    //       padding-right: 12px;
    //       .i-plus-empty{
    //         fill: #f18d2f;
    //       }
    //     }
    //   }
  }
  .weekdays {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 0.26rem;
    padding: 0 0.3rem 0 0.3rem;
    font-weight: bold;
    // margin: 0;
    // height: 40px;
    // font-size: 15px;
    // display: flex;
    // flex-wrap: wrap;
    // color: #666;
    // justify-content: space-around;
    // li{
    //   display: inline-block;
    //   width: 13.6%;
    //   text-align: center;
    //   display:flex;
    //   justify-content:center;
    //   align-items:center;
    // }
  }
  .days {
    height: 2.8rem;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    position: relative;
    padding-bottom: 0.22rem;
    li {
      list-style-type: none;
      display: inline-block;
      height: 0.54rem;
      width: 13.4%;
      text-align: center;
      font-size: 0.26rem;
      color: #000;
      position: relative;
      .active {
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid blue;
        color: black;
        width: 0.54rem;
        height: 0.54rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .active-radius {
          width: 0.04rem;
          height: 0.04rem;
          border: 1px;
          background: blue;
          border-radius: 50%;
          display: flex;
          justify-content: center;
        }
      }

      .other-month {
        width: 0.54rem;
        height: 0.54rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: blanchedalmond;
      }
      .everyDay {
        width: 0.8rem;
        height: 0.54rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .circle {
        width: 0.08rem;
        height: 0.08rem;
        border-radius: 50%;
        background-color: #f2553d;
        position: absolute;
        bottom: 0.12rem;
        left: 48%;
      }
      .o {
        width: 0.08rem;
        height: 0.08rem;
        border-radius: 50%;
        border: 1px solid #f2553d;
        position: absolute;
        bottom: 1px;
        left: 49%;
      }
      .otherday {
        width: 0.54rem;
        height: 0.54rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid blue;
        box-sizing: border-box;
      }
      .otherday-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .otherday-col-hui {
          color: #d6d6d6;
        }
        .otherday-radius-hui {
          width: 0.04rem;
          height: 0.04rem;
          border: 1px;
          background: #d6d6d6;
          border-radius: 50%;
        }
        .otherday-radius-red {
          width: 0.04rem;
          height: 0.04rem;
          border: 1px;
          background: red;
          border-radius: 50%;
        }
      }
    }
  }
  .fadeOut {
    animation-name: fadeOut;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
  }
  .fadeOutR {
    animation-name: fadeOutR;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
  }
  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
  }
  .fadeInR {
    animation-name: fadeInR;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
  }
  // .background {
  //   position: absolute;
  //   top: 100px;
  //   height: 211px;
  //   width: 100%;
  //   z-index: -1;
  //   overflow: hidden;
  //   transition: all 0.5s;
  //   .dbg {
  //     background-color: #e1e1e1;
  //     height: 42.2px;
  //   }
  //   .lbg {
  //     background-color: #d5d5d5;
  //     height: 42.2px;
  //   }
  // }
}
@keyframes fadeOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fadeOutR {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
@keyframes fadeInR {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>