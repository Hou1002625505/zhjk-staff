<template>
  <div class="container">
    <div class="cus_wrap">
      <div class="add_customer_wrap" v-show="chacus">
        <div class="add_customer">
          <label>卡号/手机号码</label>
          <input
            type="text"
            placeholder="请添加会员卡号或手机号码"
            maxlength="15"
            name="addtel"
            v-model="katel"
            @keyup="chanbtn()"
          />
        </div>
        <div class="add_btn" id="add_btn" @click="addmei()">
          <span>添加</span>
        </div>
      </div>

      <div class="queren_add" v-show="cusdetail">
        <div class="item">
          <span class="name">会员手机</span>
          <span class="con" id="telcon">{{telcon}}</span>
        </div>
        <div class="item">
          <span class="name">会员姓名</span>
          <span class="con" id="namecon">{{namecon}}</span>
        </div>
        <div class="item">
          <span class="name">性别</span>
          <span class="con" id="sexcon">{{sexcon}}</span>
        </div>
        <div class="item">
          <span class="name1">会员电子ID</span>
          <span id="dianzicon">{{dianzicon}}</span>
        </div>
        <div class="add_btn" id="confirm_add" @click="sure_add()">
          <span>确认添加</span>
        </div>
      </div>
      <div class="tanchuang_wrap9" v-show="tan">
        <div class="pic_wrap">
          <div class="text_info">
            <p class="strongg">请通知会员关注微信公众号</p>
            <p class="strongg1">“中航健身会”并绑定会员卡</p>
          </div>
          <div class="btn9">
            <div class="clickbtn9" @click="fanhui()">
              <span>返回</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tanchuang_wrap10" v-show="tan1">
        <div class="pic_wrap">
          <div class="text_info1">
            <p class="strongg">请填写正确卡号或手机号</p>
          </div>
          <div class="btn9">
            <div class="clickbtn9" @click="fanhui()">
              <span>返回</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cusdetail: false,
      tan: false,
      tan1: false,
      katel: "",
      telcon: "",
      namecon: "",
      sexcon: "",
      dianzicon: "",
      customerId: "",
      chacus: true,
      inbodflag: this.$route.query.inbodflag
    };
  },
  methods: {
    chanbtn() {
      console.log(this.katel);
      var value = this.katel;
      if (value.length > 0) {
        $(".add_btn").css("background", "#5176AB");
      } else {
        $(".add_btn").css("background", "#DBDBDB");
      }
    },
    addmei() {
      var phone = this.katel;
      if (phone.length > 7) {
        this.instance.$get(
          "/rest/wx/customer/getCustomerInfoByIdOrTel",
          {
            params: {
              tel: phone
            }
          },
          res => {
            console.log(res);
            if (res.status) {
              this.chacus = false;
              this.cusdetail = true;
              this.telcon = res.rows[0].mobile;
              this.namecon = res.rows[0].name;
              if (res.rows[0].sex == 0 || res.rows[0].sex == 2) {
                this.sexcon = "女";
              } else {
                this.sexcon = "男";
              }
              this.dianzicon = res.rows[0].customerCode;
              this.customerId = res.rows[0].customerId;
            } else {
              this.$vux.toast.text(res.message);
            }
          }
        );
      } else {
        this.$vux.toast.text("请填写正确卡号或手机号");
      }
    },
    sure_add() {
      this.instance.$get(
        "/rest/wx/coach/addCusRelationCoach",
        {
          params: {
            customerId: this.customerId
          }
        },
        res => {
          console.log(res);
          if (res.status) {
            if (this.inbodflag == 1) {
              this.$router.push({
                name: "inbodylist",
                query: {}
              });
            } else {
              this.$router.push({
                name: "meirongshouye",
                query: {}
              });
            }
          } else {
            this.$vux.toast.text(res.message);
          }
        }
      );
    },
    fanhui() {
      this.tan = false;
      this.tan1 = false;
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.cus_wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f7f7f7;
}
.add_customer {
  width: 96%;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  margin: 0.3rem 0;
  padding-left: 4%;
}
.add_customer label {
  font-size: 0.3rem;
  color: #2c2e34;
  width: 35%;
  display: inline-block;
}
.add_customer input {
  padding: 0 2%;
  font-size: 0.28rem;
  color: #2c2e34;
  height: 0.8rem;
  border: none;
  outline: none;
  width: 61%;
  display: inline-block;
}
.add_btn {
  background: #dbdbdb;
  width: 90%;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  margin: 1rem auto 0;
  border-radius: 10px;
}
.add_btn span {
  font-size: 0.36rem;
  color: #fff;
}
.queren_add {
  margin-top: 0.3rem;
}
.queren_add .item {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  margin-bottom: 1px;
}
.queren_add .name {
  font-size: 0.3rem;
  color: #919191;
  padding: 0 0.3rem;
}
.queren_add .con {
  font-size: 0.3rem;
  color: #2c2e34;
  float: right;
  padding-right: 0.3rem;
}
.queren_add .name1 {
  font-size: 0.28rem;
  color: #919191;
  display: inline-block;
  width: 29%;
  padding: 0 2% 0 3%;
}
#dianzicon {
  display: inline-block; /*width:63%;*/
  font-size: 0.3rem;
  color: #2c2e34;
  padding-right: 3.8%;
  overflow: hidden;
  float: right;
}
input::-webkit-input-placeholder {
  color: #999;
  font-size: 0.28rem;
}
.tanchuang_wrap9 {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
}
.tanchuang_wrap10 {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
}
.pic_wrap {
  background: url(../../assets/images/sijiaotuanchuang.png);
  background-size: 100%;
  width: 5.7rem;
  height: 3.95rem;
  margin: 2rem auto 0;
  border-radius: 6px;
}
.btn9 {
  position: absolute;
  top: 4rem;
  left: 1.6rem;
}
.clickbtn9 {
  margin: 0 auto;
  position: relative;
  top: 0.6rem;
  width: 4.3rem;
  height: 0.7rem;
  line-height: 0.7rem;
  background: #00a0e9;
  text-align: center;
  border-radius: 35px;
}
.clickbtn9 span {
  color: #fff;
  font-size: 0.36rem;
}
.text_info {
  text-align: center;
  position: absolute;
  top: 2.7rem;
  left: 1.4rem;
}
.text_info1 {
  text-align: center;
  position: absolute;
  top: 2.85rem;
  left: 1.7rem;
}
.text_info p,
.text_info1 p {
  font-size: 0.36rem;
  color: #fff;
}
</style>
