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
        <div class="branch-store-nav" :id="`${item.id}`" @click="(item.state == 1)?toqr(index) : ''">
          <div class="branch-store-clock">
            <img src="../../../assets/image/clock_icon@2x.png" alt />
            <p>{{item.timeStr}}</p>
          </div>
          <a class="branch-store-qr" style="width:0.4rem;height:0.4rem" v-if="`${item.state}` == 1">
            <img src="../../../assets/image/code@2x.png" alt />
            <!-- <img src="../../../assets/image/right_btn@2x.png" alt /> -->
          </a>
        </div>
        <div class="branch-store-line"></div>
        <a class="branch-store-footer" @click="toappointment(index)">
          <img :src="`http://test.physicalclub.com/crm/images/${item.pictures}`" alt />
          <!-- <img :src="`http://crm.physicalclub.com/crm/images/${item.pictures}`" alt /> -->
          <div class="branch-store-footer-p">
            <div>
              <p>
                {{ item.storeName }} (
                <span style="color:red">{{ item.signCount }}</span>/{{ item.totalCount }}人)
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
      data1:'',
      count:'',
      count1:'',
      opinionData : '',
      opinionData1:'',
      opinionData2:'',
      customerList:'',
      lunbo1:'',
      lunbo2:'',
      lunbo3:''
    };
  },
  computed:{
    
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
    toappointment(index) {
      console.log(this.data1)
      axios.get('/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordItem/'+1+'/'+this.data1[index].id)
      .then(response => {
        console.log(response.data.rows[0])
        this.lunbo1 = response.data.rows[0]
        this.customerList = response.data.rows[0].customerList
        this.opinionData = [
          {value: this.lunbo1.studentAgeAnalysis[0].count, name: "20岁以下"},
          {value: this.lunbo1.studentAgeAnalysis[1].count, name: "20-24岁" },
          {value: this.lunbo1.studentAgeAnalysis[2].count, name: "25-30岁" },
          {value: this.lunbo1.studentAgeAnalysis[3].count, name: "31-40岁" },
          {value: this.lunbo1.studentAgeAnalysis[4].count, name: "41-50岁" },
          {value: this.lunbo1.studentAgeAnalysis[5].count, name: "50岁以上" },
          // response.data.rows[0].studentAgeAnalysis[5].count
        ]
      
      })

      axios.get('/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordItem/'+2+'/'+this.data1[index].id)
      .then(response => {
        this.lunbo2 = response.data.rows[0]
        console.log(response.data.rows[0])
        this.opinionData1 = [
          {value: this.lunbo2.classFrequency[0].count, name: "1-3次"},
          {value: this.lunbo2.classFrequency[1].count, name: "4-10次" },
          {value: this.lunbo2.classFrequency[2].count, name: "10-20次" },
          {value: this.lunbo2.classFrequency[3].count, name: "20-30次" },
          {value: this.lunbo2.classFrequency[4].count, name: "30次以上" },
        ]
      })

      axios.get('/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordItem/'+3+'/'+this.data1[index].id)
      .then(response => {
        this.lunbo3 = response.data.rows[0]
        console.log(response.data.rows[0])
        this.opinionData2 =[
          {value: this.lunbo3.classFrequency[0].count, name: "1-3次"},
          {value: this.lunbo3.classFrequency[1].count, name: "4-10次" },
          {value: this.lunbo3.classFrequency[2].count, name: "10-20次" },
          {value: this.lunbo3.classFrequency[3].count, name: "20-30次" },
          {value: this.lunbo3.classFrequency[4].count, name: "30次以上" },
        ]
      })

      setTimeout(() => {
        this.$router.push({
          name: "appointment",
          params:{
            kcid : this.data1[index].id,
            data1 : this.data1[index],
            lunbo1:this.lunbo1,
            lunbo2:this.lunbo2,
            lunbo3:this.lunbo3,
            opinionData:this.opinionData,
            opinionData1:this.opinionData1,
            opinionData2:this.opinionData2,
            customerList:this.customerList,
          }
        });
      }, 500);
    },
    ceshi(payload,year){
      var date = year.split('年')[0]
      var date1 =year.split('年')[1].split('月')[0]
      if(date1 < 10){
        date1 = '0' + date1
      }
      var date0 = date + '-' + date1
      
        axios.get(
        '/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordList/'+date0)
        .then(response =>{
          console.log(response)
          for(var i=0; i< response.data.rows.length;i++){
            if(response.data.rows[i].dayStr == payload){
                //console.log(i)
                this.data1 = response.data.rows[i].children
                //console.log(this.data1)
                
                break;
            }else{
              this.data1 = ''
            }
          }
          
        })
        
    }
  },
  created : function(){
    
  },
  mounted:function(){

    aaa()

    $('#leftleft').click(function(){
        for(var j=0;j<$('.days').children().length;j++){
          $('.days').children().eq(j).children().children().eq(0).children().children().eq(1).css('background','white')
        }
        aaa()
    })

    $('#rightright').click(function(){
        for(var j=0;j<$('.days').children().length;j++){
          $('.days').children().eq(j).children().children().eq(0).children().children().eq(1).css('background','white')
        }
        aaa()
    })

    function aaa(){
      // console.log($('.days').length)
      // console.log($('.days').children().length)
      console.log(Number($('.days').children().eq(17).children().children().eq(0).children().text()))
      console.log(new Date().getDate())

      var date = $('.year-month-a').html().split('年')[0]
      var date1 =$('.year-month-a').html().split('年')[1].split('月')[0]
      if(date1 < 10){
        date1 = '0' + date1
      }
      var date0 = date + '-' + date1

      axios.get(
      '/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordList/'+date0)
      .then(response =>{
        console.log(response.data.rows)
        for(var i=0;i<response.data.rows.length;i++){
          for(var j=0;j<$('.days').children().length;j++){
            if($('.days').children().eq(j).children().children().eq(0).children().children().eq(0).html() == Number(response.data.rows[i].dayStr)){
              if(response.data.rows[i].state == 1){
                $('.days').children().eq(j).children().children().eq(0).children().children().eq(1).css('background','blue')
                console.log(j)
                
              }else if(response.data.rows[i].state == 0){
                $('.days').children().eq(j).children().children().eq(0).children().children().eq(1).css('background','red')
                
              }
            }
          }
          if(new Date().getDate() == Number(response.data.rows[i].dayStr)){
            for(var j=0;j<$('.days').children().length;j++){
                if(Number($('.days').children().eq(j).children().children().eq(0).children().text()) == new Date().getDate()){
                  //console.log(j)
                  if(response.data.rows[i].state == 1){
                    $('.days').children().eq(j).children().children().eq(0).children().children('.active-radius').css('background','blue')
                    console.log(j)
                  }else if(response.data.rows[i].state == 0){
                    $('.days').children().eq(j).children().children().eq(0).children().children('.active-radius').css('background','red')
                  }
                }
            }
              
            }
        }
        
      })
    }

      
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