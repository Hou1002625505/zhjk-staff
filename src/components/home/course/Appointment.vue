<template>
  <div style="background:#f7f7f7">
    <div class="appointment-body">
      <div class="appointment-header">
        <p>{{ this.lunbo1.leagueCurriculumName }}</p>
        <p>{{ this.lunbo1.timeStr }}</p>
        <div class="appointment-header-register">
          <div class="appointment-header-register-column">
            <div class="appointment-header-register-column-p">{{ this.data1.totalCount }}</div>
            <div class="appointment-header-register-column-p">已预约</div>
          </div>
          <div class="appointment-header-register-column"></div>
          <div class="appointment-header-register-column">
            <div class="appointment-header-register-column-p">{{ this.data1.signCount }}</div>
            <div class="appointment-header-register-column-p">已签到</div>
          </div>
          <div class="appointment-header-register-column"></div>
          <div class="appointment-header-register-column">
            <div class="appointment-header-register-column-p">{{ Number(this.data1.totalCount) - Number(this.data1.signCount) }}</div>
            <div class="appointment-header-register-column-p">未签到</div>
          </div>
        </div>
      </div>
      <mt-swipe :auto="0" class="appointment-mt-swipe">
        <mt-swipe-item>
          <div class="mt-swipe-header">
            <div class="mt-swipe-header-left">
              <p></p>
              <p>年龄比对分析</p>
            </div>
            <div class="mt-swipe-header-right">
              <p>
                男:
                <span>{{ this.lunbo1.maleCount }}</span>人
              </p>
              <p>
                女:
                <span>{{ this.lunbo1.femaleCount }}</span>人
              </p>
            </div>
          </div>
          <my-echarts :opinionData="opinionData"></my-echarts>
          <!-- :titleText="titleText" :opinion="opinion" -->
          <div class="mt-swipe-flex">
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-red"></div>
              <p>20岁以下</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-orange"></div>
              <p>20-24岁</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-green"></div>
              <p>25-30岁</p>
            </div>
          </div>
          <div class="mt-swipe-flex">
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-sky"></div>
              <p>31-40岁</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-lightgreen"></div>
              <p>41-50岁</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-blue"></div>
              <p>50岁以上</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="mt-swipe-header">
            <div class="mt-swipe-header-left">
              <p></p>
              <p>上我课频次</p>
            </div>
            <div class="mt-swipe-header-right">
              <p>
                男:
                <span>{{ this.lunbo2.maleCount }}</span>人
              </p>
              <p>
                女:
                <span>{{ this.lunbo2.femaleCount }}</span>人
              </p>
            </div>
          </div>
          <my-echarts :opinionData="opinionData1"></my-echarts>
          <!-- :titleText="titleText" :opinion="opinion" -->
          <div class="mt-swipe-flex">
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-red"></div>
              <p>1-3次</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-orange"></div>
              <p>4-10次</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-green"></div>
              <p>10-20次</p>
            </div>
          </div>
          <div class="mt-swipe-flex" style="justify-content:left">
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-sky"></div>
              <p>20-30次</p>
            </div>
            <div class="mt-swipe-flex-one" style="margin-left:0.54rem">
              <div class="mt-swipe-circle-lightgreen"></div>
              <p>30次以上</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="mt-swipe-header">
            <div class="mt-swipe-header-left">
              <p></p>
              <p>累计上课频次</p>
            </div>
            <div class="mt-swipe-header-right">
              <p>
                男:
                <span>{{ this.lunbo3.maleCount }}</span>人
              </p>
              <p>
                女:
                <span>{{ this.lunbo3.femaleCount }}</span>人
              </p>
            </div>
          </div>
          <my-echarts :opinionData="opinionData2"></my-echarts>
          <!-- :titleText="titleText" :opinion="opinion" -->
          <div class="mt-swipe-flex">
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-red"></div>
              <p>1-3次</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-orange"></div>
              <p>4-10次</p>
            </div>
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-green"></div>
              <p>10-20次</p>
            </div>
          </div>
          <div class="mt-swipe-flex" style="justify-content:left">
            <div class="mt-swipe-flex-one">
              <div class="mt-swipe-circle-sky"></div>
              <p>20-30次</p>
            </div>
            <div class="mt-swipe-flex-one" style="margin-left:0.54rem">
              <div class="mt-swipe-circle-lightgreen"></div>
              <p>30次以上</p>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="appointment-footer-user" v-for="(item,index) in customerList" :key="index">
      <div class="appointment-footer-user-left">
        <img :src="`http://test.physicalclub.com/crm/images/${item.head}`" alt />
        <!-- <img :src="`http://crm.physicalclub.com/crm/images/${item.head}`" alt /> -->
        <div>
          <div class="appointment-footer-user-left-p">{{ item.name }}<img v-if="item.sex == 1" src="../../../assets/image/boy_icon@2x.png" alt=""><img v-if="item.sex == 0" src="../../../assets/image/boy_icon@2x.png" alt=""></div>
          <p>{{ item.mobile }}</p>
          <!-- <p>年龄:<span>23</span></p> -->
        </div>
      </div>
      <div class="appointment-footer-user-right" v-if="item.signState == 0">未签到</div>
      <div class="appointment-footer-user-right1" v-if="item.signState == 1">签到</div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import myEcharts from "./myEcharts.vue";
import axios from 'axios'  
import $ from 'jquery'
export default {
  components: {
    myEcharts
  },
  data() {
    return {
      //titleText: "年龄分布统计",
      // 扇形区域名称 lengend
      //opinion: ["18-25岁", "26-40岁", "41-50岁","51-60岁","61-70岁"],
      // series
      kcid : this.$route.params.kcid,
      data1 : this.$route.params.data1,
      customerList : [],
      lunbo1:'',
      lunbo2:'',
      lunbo3:'',
      opinionData: [
        // { value: 400, name: "61-70岁" },
      ],
      opinionData1: [
        // { value: 400, name: "61-70岁" },
      ],
      opinionData2: [
        // { value: 400, name: "61-70岁" },
      ],
      // opinionData1: [
      //   { value: 1, name: "18-25岁" },
      //   { value: 6, name: "26-40岁" },
      //   { value: 10, name: "41-50岁" },
      //   { value: 6, name: "51-60岁" }
      //   // { value: 400, name: "61-70岁" },
      // ]
    };
  },
  mounted:function(){

    axios.get('/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordItem/'+1+'/'+this.kcid)
    .then(response => {
      console.log(response.data.rows[0])
      this.lunbo1 = response.data.rows[0]
      this.customerList = response.data.rows[0].customerList
      this.opinionData = [
        {value: response.data.rows[0].studentAgeAnalysis[0].count, name: "20岁以下"},
        {value: response.data.rows[0].studentAgeAnalysis[1].count, name: "20-24岁" },
        {value: response.data.rows[0].studentAgeAnalysis[2].count, name: "25-30岁" },
        {value: response.data.rows[0].studentAgeAnalysis[3].count, name: "31-40岁" },
        {value: response.data.rows[0].studentAgeAnalysis[4].count, name: "41-50岁" },
        {value: response.data.rows[0].studentAgeAnalysis[5].count, name: "50岁以上" },
      ]
    })

    axios.get('/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordItem/'+2+'/'+this.kcid)
    .then(response => {
      this.lunbo2 = response.data.rows[0]
      console.log(response.data.rows[0])
      this.opinionData1 = [
        {value: response.data.rows[0].classFrequency[0].count, name: "1-3次"},
        {value: response.data.rows[0].classFrequency[1].count, name: "4-10次" },
        {value: response.data.rows[0].classFrequency[2].count, name: "10-20次" },
        {value: response.data.rows[0].classFrequency[3].count, name: "20-30次" },
        {value: response.data.rows[0].classFrequency[4].count, name: "30次以上" },
      ]
    })

    axios.get('/rest/wx/employeeCourse/getCourseSchedulinSubscribegRecordItem/'+3+'/'+this.kcid)
    .then(response => {
      this.lunbo3 = response.data.rows[0]
      console.log(response.data.rows[0])
      this.opinionData2 =[
        {value: response.data.rows[0].classFrequency[0].count, name: "1-3次"},
        {value: response.data.rows[0].classFrequency[1].count, name: "4-10次" },
        {value: response.data.rows[0].classFrequency[2].count, name: "10-20次" },
        {value: response.data.rows[0].classFrequency[3].count, name: "20-30次" },
        {value: response.data.rows[0].classFrequency[4].count, name: "30次以上" },
      ]
    })

    console.log(this.data1)
  }
};
</script>

<style lang="less" scoped>
.appointment-body {
  box-sizing: border-box;
  background: #f7f7f7;
  padding: 0.2rem 0.2rem 0 0.2rem;
  .appointment-header {
    border-radius: 0.1rem;
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:nth-child(1) {
      margin-top: 0.29rem;
      font-size: 0.34rem;
      color:#1D1D1D
    }
    p:nth-child(2) {
      color: #999999;
      font-size: 0.24rem;
      margin-top:0.14rem;
    }
    .appointment-header-register {
      width: 100%;
      box-sizing: content-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.3rem;
      margin-top:0.6rem;
      .appointment-header-register-column:nth-child(1) {
        margin-left: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .appointment-header-register-column-p:nth-child(1) {
          font-size: 0.3rem;
        }
        .appointment-header-register-column-p:nth-child(2) {
          font-size: 0.24rem;
          color: #999999;
          margin-top: -0.01rem;
        }
      }
      .appointment-header-register-column:nth-child(2) {
        height: 0.5rem;
        width: 1px;
        background: #d6d6d6;
      }
      .appointment-header-register-column:nth-child(3) {
        display: flex;
        flex-direction: column;
        align-items: center;
        .appointment-header-register-column-p:nth-child(1) {
          font-size: 0.3rem;
        }
        .appointment-header-register-column-p:nth-child(2) {
          font-size: 0.24rem;
          color: #999999;
          margin-top: -0.01rem;
        }
      }
      .appointment-header-register-column:nth-child(4) {
        height: 0.5rem;
        width: 1px;
        background: #d6d6d6;
      }
      .appointment-header-register-column:nth-child(5) {
        margin-right: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .appointment-header-register-column-p:nth-child(1) {
          font-size: 0.3rem;
        }
        .appointment-header-register-column-p:nth-child(2) {
          font-size:0.24rem;
          color: #999999;
          margin-top: -0.01rem;
        }
      }
    }
  }
  .appointment-mt-swipe {
    width: 100%;
    height: 4.7rem;
    background: white;
    border-radius: 0.1rem;
    margin-top: 0.2rem;
    
    .mt-swipe-header {
      display: flex;
      justify-content: space-between;
      .mt-swipe-header-left {
        display: flex;
        padding: 0.11rem 0.2rem 0 0.2rem;
        align-items: center;
        p:nth-child(1) {
          width: 0.05rem;
          height: 0.3rem;
          background: #4978b0;
        }
        p:nth-child(2) {
          font-size: 0.3rem;
          margin-left: 0.09rem;
        }
      }
      .mt-swipe-header-right {
        display: flex;
        font-size: 0.3rem;
        padding: 0.11rem 0.2rem 0 0.2rem;
        align-items: center;
        p:nth-child(1) {
          margin-right: 0.28rem;
          font-size:0.26rem;
          span {
            margin-left: 0.1rem;
          }
        }
        p:nth-child(2) {
          font-size:0.26rem;
          span {
            margin-left: 0.1rem;
          }
        }
      }
    }
    .mt-swipe-flex:nth-child(3) {
      display: flex;
      justify-content: space-between;
      padding: 0 0.6rem;
      .mt-swipe-flex-one {
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        .mt-swipe-circle-red {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: #d82743;
          margin-right: 0.2rem;
        }
        .mt-swipe-circle-orange {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: #ffa21e;
          margin-right: 0.2rem;
        }
        .mt-swipe-circle-green {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: #b8d927;
          margin-right: 0.2rem;
        }
      }
    }
    .mt-swipe-flex:nth-child(4) {
      display: flex;
      justify-content: space-between;
      padding: 0 0.52rem 0 0.5rem;
      margin-top:0.07rem;
      .mt-swipe-flex-one {
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        .mt-swipe-circle-sky {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: #27b5d9;
          margin-right: 0.2rem;
          margin-left:0.1rem;
        }
        .mt-swipe-circle-lightgreen {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: #3cd927;
          margin-right: 0.2rem;
          margin-left:0.4rem;
        }
        .mt-swipe-circle-blue {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: #278cd9;
          margin-right: 0.2rem;
          margin-left:0.3rem;
        }
      }
    }
  }
}
.appointment-footer-user {
  box-sizing: border-box;
  margin-top: 0.2rem;
  height: 1.6rem;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.2rem;
  align-items: center;
  .appointment-footer-user-left {
    display: flex;
    align-items: center;
    img:nth-child(1) {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    div:nth-child(2){
      display:flex;
      width:1.1rem;
      flex-direction: column;
      align-items: left;
      margin-left:0.2rem;
      .appointment-footer-user-left-p{
        display:flex;
        font-size:0.28rem;
        font-weight: bold;
        align-items: center;
        img{
          width:0.16rem;
          height:0.24rem;
          margin-left:0.08rem;
        }
      }
      p:nth-child(2){
        font-size:0.24rem;
        color: #999999;
      }
      p:nth-child(3){
        font-size:0.24rem;
      }
    }
  }
  .appointment-footer-user-right{
    width:1.2rem;
    height:0.5rem;
    background:#4978B0;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    font-size: 0.24rem;
  }
  .appointment-footer-user-right1{
    width:1.2rem;
    height:0.5rem;
    background:#F7F7F7;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#999999;
    font-size: 0.24rem;
  }
}

</style>