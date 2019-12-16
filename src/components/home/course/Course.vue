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
      <Calendar />
      <div class="branch-store">
        <div class="branch-store-nav">
          <div class="branch-store-clock">
            <img src="../../../assets/image/clock_icon@2x.png" alt />
            <p>8:00~10:00</p>
          </div>
          <a class="branch-store-qr" @click="toqr">
            <img src="../../../assets/image/code@2x.png" alt />
            <!-- <img src="../../../assets/image/right_btn@2x.png" alt /> -->
          </a>
        </div>
        <div class="branch-store-line"></div>
        <a class="branch-store-footer" @click="toappointment">
          <img src="../../../assets/images/1.jpg" alt />
          <div class="branch-store-footer-p">
            <div>
              <p>
                BODYBALANCE莱美身心 (
                <span style="color:red">10</span>/20人)
              </p>
              <img src="../../../assets/image/right_btn@2x.png" alt />
            </div>
            <p>星河中心健身分店</p>
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
      fadeInR: false
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
    toqr() {
      setTimeout(() => {
        this.$router.push({
          name: "qr"
        });
      }, 500);
    },
    toappointment() {
      setTimeout(() => {
        this.$router.push({
          name: "appointment"
        });
      }, 500);
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
    border-color: #4a77b0;
    border-style: solid;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    background: #4a77b0;
    font-size: 0.32rem;
    color: white;
  }
  .button-exercise-white {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 1px;
    border-color: #4a77b0;
    border-style: solid;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    background: white;
    font-size: 0.32rem;
    color: #4a77b0;
  }
  .button-customer-blue {
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
  .button-customer-white {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 0;
    border-color: #4a77b0;
    border-style: solid;
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    background: white;
    font-size: 0.32rem;
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
      font-size: 0.24rem;
      color: #4978B0;
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
    img {
      width: 1rem;
      height: 0.95rem;
    }
    .branch-store-footer-p {
      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 0.24rem;
          margin-right: 1.5rem;
          margin-top: 0.1rem;
        }
        img {
          width: 0.16rem;
          height: 0.25rem;
        }
      }
      p:nth-child(2) {
        font-size: 0.44rem;
        transform: scale(0.5);
        margin-bottom: 0.16rem;
        color: #999999;
        margin-left: -1.8rem;
        margin-top: -0.1rem;
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