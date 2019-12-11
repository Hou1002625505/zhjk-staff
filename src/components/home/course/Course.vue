<template>
  <div class="color-background">
    <div class="course-qh">
      <button>团操课表</button>
      <button>客户分析</button>
    </div>
    <Calendar />
    <div class="branch-store">
      <div class="branch-store-nav">
        <div class="branch-store-clock">
          <img src="../../../assets/image/clock_icon@2x.png" alt />
          <p>8:00~10:00</p>
        </div>
        <div class="branch-store-qr">
          <img src="../../../assets/image/code@2x.png" alt />
          <img src="../../../assets/image/right_btn@2x.png" alt="">
        </div>
      </div>
      <div class="branch-store-line"></div>
      <div class="branch-store-footer">
        <img src="../../../assets/images/1.jpg" alt="">
        <div class="branch-store-footer-p">
          <p>BODYBALANCE莱美身心 (<span style="color:red">10</span>/20人)</p>
          <p>星河中心健身分店</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";

export default {
  components: {
    Calendar
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
  button:nth-child(1) {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 1px;
    border-color: #4a77b0;
    border-style: solid;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    background: #4a77b0;
    font-size: 0.32rem;
    color: white;
  }
  button:nth-child(2) {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 0;
    border-color: #4a77b0;
    border-style: solid;
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    background: #4a77b0;
    font-size: 0.32rem;
    color: white;
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
      font-size: 12px;
      color: blue;
      img {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.17rem;
      }
    }
    .branch-store-qr {
      display: flex;
      img:nth-child(1){
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.17rem;
      }
      img:nth-child(2){
        width: 0.16rem;
        height: 0.25rem;
      }
    }
  }
  .branch-store-line {
    height: 1px;
    background: #d6d6d6;
    margin: 0 0.2rem 0 0.2rem;
  }
  .branch-store-footer{
    display:flex;
    justify-content: space-between;
    padding:0.25rem 0.2rem 0.2rem 0.2rem;
    img{
      width:1rem;
      height:0.95rem
    }
    .branch-store-footer-p{
      p:nth-child(1){
        font-size:12px;
        margin-right:1.5rem;
        margin-top:0.1rem;
      }
      p:nth-child(2){
        font-size:22px;
        transform:scale(0.5);
        margin-bottom: 0.16rem;
        color:#999999;
        margin-left:-1.8rem;
        margin-top: -0.1rem
      }
    }
  }
}
</style>