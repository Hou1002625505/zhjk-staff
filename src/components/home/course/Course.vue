<template>
  <div class="color-background">
    <div class="course-qh">
      <button
        @click="exercise('exercise')"
        :class="shift == 'exercise' ? exerciseblue : exercisewhite"
      >团操课表</button>
      <button
        @click="customer('customer')"
        :class="shift == 'customer' ? customerblue : customerwhite"
      >客户分析</button>
    </div>
    <div
      v-if="shift == 'exercise'"
      :class="{'fadeOut':fadeOut,'fadeIn':fadeIn,'fadeOutR':fadeOutR,'fadeInR':fadeInR}"
    >
      <Calendar @abc="ceshi"/>

      <div class="branch-store" v-for="(item,index) in data1" :key="index">
        <div class="branch-store-nav">
          <div class="branch-store-clock">
            <img src="../../../assets/image/clock_icon@2x.png" alt />
            <p>{{item.timeStr}}</p>
          </div>
          <a class="branch-store-qr" @click="toqr(index)">
            <img src="../../../assets/image/code@2x.png" alt />
            <!-- <img src="../../../assets/image/right_btn@2x.png" alt /> -->
          </a>
        </div>
        <div class="branch-store-line"></div>
        <a class="branch-store-footer" @click="toappointment">
          <img :src="`http://test.physicalclub.com/crm/images/${item.pictures}`" alt />
          <!-- <img :src="`http://crm.physicalclub.com/crm/images/${item.pictures}`" alt /> -->
          <div class="branch-store-footer-p">
            <div>
              <p>
                BODYBALANCE莱美身心 (
                <span style="color:red">{{item.minNumber}}</span>/{{item.maxNumber}}人)
              </p>
              <img src="../../../assets/image/right_btn@2x.png" alt />
            </div>
            <p>{{ item.storeName }}</p>
          </div>
        </a>
      </div>

    </div>
    <div
      v-if="shift == 'customer'"
      :class="{'fadeOut':fadeOut,'fadeIn':fadeIn,'fadeOutR':fadeOutR,'fadeInR':fadeInR}"
    >还没开始哦！</div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import axios from 'axios'  
import $ from 'jquery'

export default {
  
  components: {
    Calendar
  },
  data() {
    return {
      shift: "exercise",
      exerciseblue: "button-exercise-blue",
      exercisewhite: "button-exercise-white",
      customerblue: "button-customer-blue",
      customerwhite: "button-customer-white",
      fadeOut: false,
      fadeIn: false,
      fadeOutR: false,
      fadeInR: false,
      data1:''
    };
  },
  methods: {
    exercise(type) {
      setTimeout(() => {
        this.shift = type;
      }, 250);
      const self = this;
      self.fadeOut = true;
      self.fadeIn = false;
      self.fadeInR = false;
      self.fadeOutR = false;
      setTimeout(function() {
        self.fadeIn = true;
        self.fadeOut = false;
        self.fadeOutR = false;
        self.fadeInR = false;
      }, 250);
    },
    customer(type) {
      setTimeout(() => {
        this.shift = type;
      }, 250);
      const self = this;
      self.fadeOutR = true;
      self.fadeInR = false;
      self.fadeOut = false;
      self.fadeIn = false;
      setTimeout(function() {
        self.fadeInR = true;
        self.fadeOutR = false;
        self.fadeOut = false;
        self.fadeIn = false;
      }, 250);
    },
    toqr(index) {
      setTimeout(() => {
        this.$router.push({
          name: "qr",
          params: {
            data1 : this.data1[index]
          }
        });
      }, 500);
    },
    toappointment() {
      setTimeout(() => {
        this.$router.push({
          name: "appointment"
        });
      }, 500);
    },
    ceshi(payload){
      var date = $('.year-month-a').html().split('年')[0]
      var date1 = $('.year-month-a').html().split('年')[1].split('月')[0]
      if(date1 < 10){
        date1 = '0' + date1
      }
      var date0 = date + '-' + date1
      //console.log($('.year-month-a').html().split('年')[0])
        axios.get(
        'rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordList/'+date0)
        .then(response =>{
          console.log(response.data)
          for(var i=0; i< response.data.rows.length;i++){
            if(response.data.rows[i].dayStr == payload){
                console.log(i)
                this.data1 = response.data.rows[i].children
                console.log(this.data1)
                break;
            }else{
              this.data1 = ''
            }
          }


        })
    }
  },
  created : function(){
    
  }
};
</script>

<style lang="less" scoped>
.color-background {
  background: #f7f7f7;
}

.course-qh {
  display: flex;
  justify-content: space-around;
  padding: 0.3rem 0.3rem 0 0.3rem;
  background: white;
  .button-exercise-blue {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 1px;
    border-color: #4d78bd;
    border-style: solid;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    background: #4d78bd;
    font-size: 0.34rem;
    color: white;
  }
  .button-exercise-white {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 1px;
    border-color: #4d78bd;
    border-style: solid;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    background: white;
    font-size: 0.34rem;
    color: #4d78bd;
  }
  .button-customer-blue {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 0;
    border-color: #4d78bd;
    border-style: solid;
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    background: #4d78bd;
    font-size: 0.34rem;
    color: white;
  }
  .button-customer-white {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 0;
    border-color: #4d78bd;
    border-style: solid;
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    background: white;
    font-size: 0.34rem;
    color: #4a77b0;
  }
}

.branch-store {
  height: 2.04rem;
  margin: 0.2rem 0.2rem 0 0.2rem;
  background: white;
  .branch-store-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.63rem;
    padding: 0 0.17rem 0 0.17rem;
    .branch-store-clock {
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      color: #4978b0;
      img {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.17rem;
      }
    }
    .branch-store-qr {
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      // img:nth-child(2) {
      //   width: 0.16rem;
      //   height: 0.25rem;
      // }
    }
  }
  .branch-store-line {
    height: 1px;
    background: #d6d6d6;
    margin: 0 0.2rem 0 0.2rem;
  }
  .branch-store-footer {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.2rem 0.2rem 0.2rem;
    color: #1d1d1d;
    img {
      width: 1rem;
      height: 0.95rem;
      border-radius: 50%;
    }
    .branch-store-footer-p {
      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 0.26rem;
          margin-right: 1.15rem;
        }
        img {
          width: 0.16rem;
          height: 0.25rem;
        }
      }
      p:nth-child(2) {
        font-size: 0.24rem;
        //margin-bottom: 0.16rem;
        color: #999999;
        margin-top: 0.1rem;
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