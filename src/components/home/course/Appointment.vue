<template>
  <div class="appointment-body">
    <div class="appointment-header">
      <p>BODYBALANCE莱美身心</p>
      <p>10:00~11:00</p>
      <div class="appointment-header-register">
        <div class="appointment-header-register-column">
          <p>10</p>
          <p>已预约</p>
        </div>
        <p class="appointment-header-register-column"></p>
        <div class="appointment-header-register-column">
          <p>9</p>
          <p>已签到</p>
        </div>
        <p class="appointment-header-register-column"></p>
        <div class="appointment-header-register-column">
          <p>1</p>
          <p>未签到</p>
        </div>
      </div>
    </div>
    <mt-swipe :auto="0" class="appointment-mt-swipe">
      <mt-swipe-item>
        <p>1111111</p>
        <my-echarts :opinionData="opinionData"></my-echarts>
        <!-- :titleText="titleText" :opinion="opinion" -->
        <div class="mt-swipe-flex">
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
        </div>
        <p>111111</p>
      </mt-swipe-item>
      <mt-swipe-item>
        <p>1111111</p>
        <my-echarts :opinionData="opinionData"></my-echarts>
        <!-- :titleText="titleText" :opinion="opinion" -->
        <div class="mt-swipe-flex">
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
        </div>
        <p>111111</p>
      </mt-swipe-item>
      <mt-swipe-item>
        <p>1111111</p>
        <my-echarts :opinionData="opinionData"></my-echarts>
        <!-- :titleText="titleText" :opinion="opinion" -->
        <div class="mt-swipe-flex">
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
          <div class="mt-swipe-flex-one">
            <div class="mt-swipe-circle"></div>
            <p>20以下</p>
          </div>
        </div>
        <p>111111</p>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import myEcharts from "./myEcharts.vue";
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
      opinionData: [
        { value: 600, name: "18-25岁" },
        { value: 300, name: "26-40岁" },
        { value: 200, name: "41-50岁" },
        { value: 600, name: "51-60岁" }
        // { value: 400, name: "61-70岁" },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.appointment-body {
  box-sizing: border-box;
  background: #f7f7f7;
  padding: 0.2rem 0.2rem 0 0.2rem;
  .appointment-header {
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:nth-child(1) {
      margin-top: 0.29rem;
      font-size: 14px;
    }
    p:nth-child(2) {
      color: #999999;
      font-size: 12px;
    }
    .appointment-header-register {
      width: 100%;
      box-sizing: content-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.3rem;
      .appointment-header-register-column:nth-child(1) {
        margin-left: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        p:nth-child(1) {
          font-size: 12px;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #999999;
          margin-top: -0.01rem;
        }
      }
      .appointment-header-register-column:nth-child(2) {
        height: 0.5rem;
        width: 1px;
        background: #d6d6d6;
        margin-top: 0.2rem;
      }
      .appointment-header-register-column:nth-child(3) {
        display: flex;
        flex-direction: column;
        align-items: center;
        p:nth-child(1) {
          font-size: 12px;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #999999;
          margin-top: -0.01rem;
        }
      }
      .appointment-header-register-column:nth-child(4) {
        height: 0.5rem;
        width: 1px;
        background: #d6d6d6;
        margin-top: 0.2rem;
      }
      .appointment-header-register-column:nth-child(5) {
        margin-right: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        p:nth-child(1) {
          font-size: 12px;
        }
        p:nth-child(2) {
          font-size: 12px;
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
    .mt-swipe-flex {
      display: flex;
      justify-content: space-between;
      padding: 0 0.6rem;
      .mt-swipe-flex-one {
        display: flex;
        align-items: center;
        .mt-swipe-circle {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background: blue;
        }
      }
    }
  }
}
</style>