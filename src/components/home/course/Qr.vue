<template>
  <div class="qr">
    <img src="../../../assets/image/code_bg@2x.png" alt />
    <div class="qr-background">
      <div class="qr-column">
        <img src="../../../assets/images/1.jpg" alt />
        <p>张琳</p>
        <p>BODYBALANCE莱美身心</p>
        <p>10:00~11:00</p>
        <div class="qr-register">
          <div class="qr1-register-column">
            <p>10</p>
            <p>已预约</p>
          </div>
          <div class="qr1-register-column"></div>
          <div class="qr1-register-column">
            <p>9</p>
            <p>已签到</p>
          </div>
          <div class="qr1-register-column"></div>
          <div class="qr1-register-column">
            <p>1</p>
            <p>未签到</p>
          </div>
        </div>
        <img src="../../../assets/image/code@3x.png" alt="">
        <p>会员通过微信扫描二维码上课签到.</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.qr {
  width: 100%;
  position: relative;
  img:nth-child(1) {
    background: #4978b0;
    height: 3.6rem;
    width: 100%;
    z-index: -1;
  }
  .qr-background {
    width: 100%;
    height: 5rem;
    background: white;
    position: absolute;
    top: 1.1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    .qr-column {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img:nth-child(1) {
        width: 1.44rem;
        height: 1.44rem;
        border-radius: 50%;
        margin-top: -0.72rem;
        z-index: 1;
      }
      p:nth-child(2) {
        margin-top: 0.23rem;
        font-size: 0.36rem;
        font-weight: bold;
      }
      p:nth-child(3) {
        margin-top: 0.24rem;
        font-size: 0.3rem;
      }
      p:nth-child(4) {
        margin-top: 0.2rem;
        color: #999999;
        font-size: 0.3rem;
      }
      .qr-register {
        width: 100%;
        box-sizing: content-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.6rem;
        .qr1-register-column:nth-child(1) {
          margin-left: 1.1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          p:nth-child(1) {
            font-size: 0.3rem;
          }
          p:nth-child(2) {
            font-size: 0.24rem;
            color: #999999;
            margin-top:-0.01rem;
          }
        }
        .qr1-register-column:nth-child(2) {
          line-height:0.5rem;
          height: 0.5rem;
          width: 1px;
          background: black;
        }
        .qr1-register-column:nth-child(3) {
          display: flex;
          flex-direction: column;
          align-items: center;
          p:nth-child(1) {
            font-size: 0.3rem;
          }
          p:nth-child(2) {
            font-size: 0.24rem;
            color: #999999;
            margin-top:-0.01rem;
          }
        }
        .qr1-register-column:nth-child(4) {
          height: 0.5rem;
          width: 1px;
          background: black;
        }
        .qr1-register-column:nth-child(5) {
          margin-right: 1.1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          p:nth-child(1) {
            font-size: 0.3rem;
          }
          p:nth-child(2) {
            font-size: 0.24rem;
            color: #999999;
            margin-top:-0.01rem;
          }
        }
      }
      img:nth-child(6){
          width:3.76rem;
          height:3.76rem;
          margin-top:0.7rem;
      }
      p:nth-child(7){
        font-size:0.24rem;
        margin-top:0.7rem;
        color:#999999
      }
    }
  }
}
</style>