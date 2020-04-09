<template>
  <div class="container">
    <mt-loadmore
      :top-method="loadTop"
      :max-distance="150"
      @top-status-change="handleTopChange"
      ref="loadmore"
    >
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
        <span v-show="topStatus === 'loading'">
          <mt-spinner type="triple-bounce" class="loading-more" :size="20"></mt-spinner>
        </span>
        <span v-show="topStatus === 'drop'">松开刷新</span>
      </div>
      <div>
        <div class="customer_data">
          <div class="customer_K">
            <div class="customer_head">
              <img
                :src="fldsex==1?require('../../assets/images/boy-photo@2x.png'):fldsex==0 || fldsex==2?require('../../assets/images/girl-photo@2x.png'):require('../../assets/images/default.png')"
              />
              <div class="active" id="dynamic">{{activeStatus}}</div>
            </div>
            <div class="customer_info">
              <div class="name">
                <img
                  :src="fldsex==1?require('../../assets/images/icon_boy@2x.png'):require('../../assets/images/icon_girl@2x.png')"
                  id="sexImg"
                />
                <p id="name">{{fldfirstname}}</p>
                <p class="birthday">
                  <span id="birthday"></span>
                </p>
              </div>
              <a :href="'tel:'+fldworkphone" class="phone" id="phone">{{fldworkphone}}</a>
              <div class="registerShop" style="margin-bottom: 0;">
                注册分店：
                <span id="registerShop">{{hospname}}</span>
              </div>
              <div class="cancel">
                <div class="checkbox" @click="genjinstatus()"></div>
                <p style="height: 0.3rem;line-height: 0.34rem;">不再跟进</p>
              </div>
            </div>
          </div>
        </div>
        <div class="memberinfo">
          <div class="info" id="packageDetail" @click="packagedetail()">
            <img src="../../assets/images/icon_package@2x.png" />
            <p>套餐详情</p>
          </div>
          <div class="info" id="huifangjilu" @click="huifangjilu()">
            <img src="../../assets/images/icon_returnvisit@2x.png" />
            <p>回访记录</p>
          </div>
          <div class="info" id="packageDetail" @click="jiedaidetail()">
            <img src="../../assets/images/icon_receptiondetails@2x.png" />
            <p>问卷调查</p>
          </div>
          <div class="info" id="huifangjilu" @click="ticeping()">
            <img src="../../assets/images/icon_bodytes@2x.png" />
            <p>体测评估</p>
          </div>
          <div class="info" id="dianzihet" @click="dianzihetong()">
            <img src="../../assets/images/icon_contract@2x.png" />
            <p>电子合同</p>
          </div>
        </div>
        <div class="fitst">
          <div class="title">基本信息</div>
          <div class="datalist">
            <div class="costomer_xin">
              <div class="costomer_xi">会员卡号</div>
              <div class="costomer_xi" @click="showkaliebiao()" style="position:relative">
                <span id="cardNo">{{firstRegistCard?firstRegistCard:"__"}}</span>
                <span v-show="showarrow" class="arrow"></span>
                <div class="kaliebiao" v-show="kaliebiaoflag">
                  <p v-for="(item,index) in kaliebiaolist" :key="index">{{item.carcode1}}</p>
                </div>
              </div>
              
            </div>
            <div class="costomer_xin">
              <div class="costomer_xi">出生日期</div>
              <div class="costomer_xi">
                <span>{{birthday1?birthday1:"__"}}</span>
              </div>
            </div>
            <div class="costomer_xin">
              <div class="costomer_xi">客户年龄</div>
              <div class="costomer_xi">
                <span>{{birthday1?fangage:"__"}}</span>
              </div>
            </div>
            <div class="costomer_xin">
              <div class="costomer_xi">最后到店</div>
              <div class="costomer_xi" id="arrivalAime">{{lastVisit?lastVisit.split(" ")[0]:"__"}}</div>
            </div>
            <!--<div class="costomer_xin">
					<div class="costomer_xi">结婚纪念日</div>
					<div class="costomer_xi" id="commemoration"></div>
				</div>
				<div class="costomer_xin">
					<div class="costomer_xi">兴趣爱好</div>
					<div class="costomer_xi" id="interest"></div>
            </div>-->
            <!--<div class="costomer_xin">
					<div class="costomer_xi">客户来源</div>
					<div class="costomer_xi" id="customer_source">__</div>
            </div>-->
          </div>
        </div>
        <div class="fourty">
          <!-- <div class="title">CRM标签</div>
          <div style="display:flex;padding:0.14rem 0 0.14rem 0.3rem;flex-wrap:wrap;border-top:1px solid #F7F7F7;border-bottom:1px solid #F7F7F7" id="crmbiaoqian">
            <div v-for="(item,index) in getcustomertag" :key="index">
              <div v-if="item.sourceSystem == 1" style="font-size:0.24rem;background:#F7F7F7;padding:0.14rem 0.16rem;margin:0 0.16rem 0.16rem 0">
                <span v-if="item.groupName">{{ item.groupName }}</span>
                <span v-if="item.groupName&&item.tagName">:</span>
                <span v-if="item.tagName">{{ item.tagName }}</span>
              </div>
              <div v-else></div>
            </div>
          </div> -->
          <div class="title">广信标签</div>
          <div style="display:flex;padding:0.14rem 0 0.14rem 0.3rem;flex-wrap:wrap;border-top:1px solid #F7F7F7;min-height:0.5rem" id="gxbiaoqian">
            <div v-for="(item,index) in getcustomertaggx" :key="index">
              <!-- <span v-if="item.data.length > 1">{{ item1.groupName }}:</span> -->
              <div v-for="(item1,index1) in item.data" :key="index1">
                <div v-if="item1.length = 1" style="font-size:0.24rem;background:#F7F7F7;padding:0.14rem 0.16rem;margin:0 0.16rem 0.16rem 0">
                  <span>{{ item1.tagName }}</span>
                </div>
                <div v-else-if="item1.length > 1" style="font-size:0.24rem;background:#F7F7F7;padding:0.14rem 0.16rem;margin:0 0.16rem 0.16rem 0">
                  <span v-if="index1 = 0">{{ item1.groupName }}:{{ item1.tagName }}、</span>
                  <span v-else>{{ item1.tagName }}、</span>
                </div>
              </div>
            </div>
          </div>
          <div style="height:1px;background:#F7F7F7;margin:0 0.3rem;box-sizing:border-box"></div>
          <div class="title">企业微信标签</div>
          <div style="display:flex;padding:0.14rem 0 0.14rem 0.3rem;flex-wrap:wrap;border-top:1px solid #F7F7F7;" id="qywxbiaoqian">
            <div v-for="(item,index) in getcustomertagqywx" :key="index">
              <!-- <span v-if="item.data.length > 1">{{ item1.groupName }}:</span> -->
              <div v-for="(item1,index1) in item.data" :key="index1">
                <div v-if="item1.length = 1" style="font-size:0.24rem;background:#F7F7F7;padding:0.14rem 0.16rem;margin:0 0.16rem 0.16rem 0">
                  <span>{{ item1.tagName }}</span>
                </div>
                <div v-else-if="item1.length > 1" style="font-size:0.24rem;background:#F7F7F7;padding:0.14rem 0.16rem;margin:0 0.16rem 0.16rem 0">
                  <span v-if="index1 = 0">{{ item1.groupName }}:{{ item1.tagName }}、</span>
                  <span v-else>{{ item1.tagName }}、</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="second">
          <div class="title">消费情况</div>
          <div class="datalist">
            <!--<div class="costomer_xin">
					<div class="costomer_xi">月到店次数</div>
					<div class="costomer_xi" id="store_number">__</div>
            </div>-->
            <!--<div class="costomer_xin">
					<div class="costomer_xi">月交款金额</div>
					<div class="costomer_xi" id="store_money">__</div>
            </div>-->
            <div class="costomer_xin">
              <div class="costomer_xi">年到店次数</div>
              <div class="costomer_xi" id="year_number">{{visitYear?visitYear+"次":"__"}}</div>
            </div>
            <div class="costomer_xin">
              <div class="costomer_xi">年交款金额</div>
              <div class="costomer_xi" id="year_money">{{costYear?costYear+"元":"__"}}</div>
            </div>
          </div>
        </div>
        <div class="third" style="margin-bottom: 20px;">
          <div class="title">服务人员</div>
          <div class="datalist">
            <div class="costomer_xin">
              <div class="costomer_xi">美容顾问</div>
              <div class="costomer_xi" id="beautyAdvisor">{{spaSaleName?spaSaleName:"__"}}</div>
            </div>
            <div class="costomer_xin">
              <div class="costomer_xi">健身顾问</div>
              <div class="costomer_xi" id="fitnessConsultant">{{fitSaleName?fitSaleName:"__"}}</div>
            </div>
            <div class="costomer_xin">
              <div class="costomer_xi">私人教练</div>
              <div class="costomer_xi" id="privateCoach">{{fitCoachName?fitCoachName:"__"}}</div>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
    
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      filid: this.$route.query.filid,
      crmid: this.$route.query.crmid,
      //filid:'099105851',
      getDetailarr: [],
      getcustomertaggx: [],
      getcustomertagqywx:[],
      topStatus: "",
      activeStatus: "",
      costYear: "",
      firstRegistCard: "",
      fitCoachId: "",
      fitSaleCode: "",
      fitSaleId: "",
      fitSaleName: "",
      fldclientid: "",
      fldfirstname: "",
      fldsex: "",
      fldworkphone: "",
      hospname: "",
      lastVisit: "",
      postcode: "",
      sameMobileCount: "",
      spaSaleId: "",
      visitMonth: "",
      visitYear: "",
      kaliebiaoflag: false,
      kaliebiaolist: [],
      showarrow: false,
      birthday1: "",
      fangage: ""
    };
  },
  created() {
    console.log(this.filid);
    console.log(this.crmid);
    this.getDetail();
    // this.getcustomertag();
      
    
  },
  methods: {
    getDetail(rate) {
      this.getDetailarr = [];
      this.instance.$post(
        "/rest/wx/customerGx/findCustomerGx ",
        { fldclientid: this.filid },
        res => {
          // console.log(res);
          this.genjinzhuangtai();
          this.getDetailarr.push(res.rows[0]);
          this.activeStatus = res.rows[0].activeStatus;
          this.costYear = res.rows[0].costYear;
          this.firstRegistCard = res.rows[0].firstRegistCard;
          this.fitCoachId = res.rows[0].fitCoachId;
          this.fitSaleCode = res.rows[0].fitSaleCode;
          this.fitSaleId = res.rows[0].fitSaleId;
          this.fitSaleName = res.rows[0].fitSaleName;
          this.fldclientid = res.rows[0].fldclientid;
          this.fldfirstname = res.rows[0].fldfirstname;
          this.fldsex = res.rows[0].fldsex;
          this.fldworkphone = res.rows[0].fldworkphone;
          this.hospname = res.rows[0].hospname;
          this.lastVisit = res.rows[0].lastVisit;
          this.postcode = res.rows[0].postcode;
          this.sameMobileCount = res.rows[0].sameMobileCount;
          this.spaSaleId = res.rows[0].spaSaleId;
          this.visitMonth = res.rows[0].visitMonth;
          this.visitYear = res.rows[0].visitYear;
          var fangyear = parseInt(res.rows[0].birthday.split("-")[0]);
          if (fangyear > 0) {
            this.birthday1 = res.rows[0].birthday;

            this.fangage =
              parseInt(
                this.config.formatDate1(this.config.currentTime()).split("-")[0]
              ) - fangyear;
            // console.log('fff')
            // console.log(this.fangage)
          }

          this.$refs.loadmore.onTopLoaded();
        },
        error => {
          this.$refs.loadmore.onTopLoaded();
        },
        rate
      );
    },

    getcustomertag() {},

    genjinzhuangtai() {
      this.instance.$post(
        "/rest/wx/customerGx/getVisitStatus",
        {
          userId: this.filid
        },
        res => {
          this.getkaliebiao();
          // console.log(res);
          if (res.rows[0].status == 0) {
            $(".checkbox").addClass("active");
          }
        }
      );
    },
    getkaliebiao() {
      this.instance.$post(
        "/rest/wx/customerGx/getUserGxCardList",
        {
          userId: this.filid
        },
        res => {
          // console.log(res);

          if (res.status) {
            var data = res.rows;
            if (data.length > 1) {
              data.forEach(item => {
                this.kaliebiaolist.push(item);
              });
              this.showarrow = true;
            }
          }
        }
      );
    },
    showkaliebiao() {
      if (this.kaliebiaoflag) {
        this.kaliebiaoflag = false;
      } else {
        this.kaliebiaoflag = true;
      }
    },

    genjinstatus() {
      if ($(".checkbox").hasClass("active")) {
        this.VisitStatus(1);
      } else {
        this.VisitStatus(0);
      }
    },
    VisitStatus(sta) {
      this.instance.$post(
        "/rest/wx/customerGx/updateVisitStatus",
        {
          customerGxId: this.filid,
          status: sta
        },
        res => {
          // console.log(res);
          if (res.status) {
            if (sta == 1) {
              $(".checkbox").removeClass("active");
            } else {
              $(".checkbox").addClass("active");
            }
          } else {
            this.$vux.toast.text(res.message, "center");
          }
        }
      );
    },
    packagedetail() {
      this.$router.push({
        name: "package_details",
        query: {
          filid: this.filid
        }
      });
    },
    dianzihetong() {
      this.$router.push({
        name: "dianzihetong",
        query: {
          filid: this.filid
        }
      });
    },
    huifangjilu() {
      this.$router.push({
        name: "kedaihuifang",
        query: {
          filid: this.filid
        }
      });
    },
    ticeping() {
      this.$router.push({
        name: "sideHistory",
        query: {
          filid: this.filid,
          mobile: this.fldworkphone
        }
      });
    },
    taocandetail() {
      this.$router.push({
        name: "package_details",
        query: {
          filid: this.filid
        }
      });
    },
    jiedaidetail() {
      this.$router.push({
        name: "jiedaidetail",
        query: {
          filid: this.filid
        }
      });
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
        // 隐藏下拉刷新方法
        this.pageVal = 1;
        this.loading = 1;
        this.getcustomer(1);
      }, 300);
    }
  },
  components: {},
  mounted:function(){
    // if($('#crmbiaoqian').html() == ''){
    //   $('#crmbiaoqian').html('暂无')
    // }
    // if($('#gxbiaoqian').html() == ''){
    //   $('#gxbiaoqian').html('暂无')
    // }
    // if($('#qywxbiaoqian').html() == ''){
    //   $('#qywxbiaoqian').html('暂无')
    // }
    var that = this
    this.instance.$post(
      "/rest/wx/customerGx/customerTagList",
      { customerCode: this.crmid },
      res => {
        console.log(res);
        var arr = res.rows

//         var arr = [{"Group":1,"Groupheader":"质量管理","Leftimg":"","Left":"","Min":"","Right":"","Rightimg":""},
// {"Group":1,"Groupheader":"","Leftimg":"","Left":"","Min":"质量巡检","Right":"","Rightimg":""},
// {"Group":2,"Groupheader":"设备管理","Leftimg":"","Left":"","Min":"","Right":"","Rightimg":""},
// {"Group":2,"Groupheader":"","Leftimg":"","Left":"","Min":"设备专业点检","Right":"","Rightimg":""},
// {"Group":2,"Groupheader":"","Leftimg":"","Left":"","Min":"设备日检","Right":"","Rightimg":""},
// {"Group":2,"Groupheader":"","Leftimg":"","Left":"","Min":"设备周检","Right":"","Rightimg":""},
// {"Group":2,"Groupheader":"","Leftimg":"","Left":"","Min":"设备月检","Right":"","Rightimg":""}]
        var map = {},
            dest = [];
        for(var i = 0; i < arr.length; i++){
            var ai = arr[i];
            if(!map[ai.sourceSystem]){
                dest.push({
                    sourceSystem: ai.sourceSystem,
              
                    data: [ai]
                });
                map[ai.sourceSystem] = ai;
            }else{
                for(var j = 0; j < dest.length; j++){
                    var dj = dest[j];
                    if(dj.sourceSystem == ai.sourceSystem){
                        dj.data.push(ai);
                        break;
                    }
                }
            }
        }
        var getcustomertaggx = []
        var getcustomertagqywx = []
        for(var i=0;i<dest.length;i++){
          if(dest[i].sourceSystem == 2){
            getcustomertaggx = dest[i]
          }else if(dest[i].sourceSystem == 3){
            getcustomertagqywx = dest[i]
          }
        }

        var dest1 = []
        if(getcustomertaggx == ''){
          dest1 = []
        }else{
          for(var i = 0; i < getcustomertaggx.data.length; i++){
            var ai = getcustomertaggx.data[i];
            if(!map[ai.groupName]){
                dest1.push({
                    groupName: ai.groupName,
              
                    data: [ai]
                });
                map[ai.groupName] = ai;
            }else{
                for(var j = 0; j < dest1.length; j++){
                    var dj = dest1[j];
                    if(dj.groupName == ai.groupName){
                        dj.data.push(ai);
                        break;
                    }
                }
            }
          }
        }

        var dest2 = []
        if(getcustomertagqywx == ''){
          dest2 = []
        }
        else{
          for(var i = 0; i < getcustomertagqywx.data.length; i++){
            var ai = getcustomertagqywx.data[i];
            if(!map[ai.groupName]){
                dest2.push({
                    groupName: ai.groupName,
              
                    data: [ai]
                });
                map[ai.groupName] = ai;
            }else{
                for(var j = 0; j < dest2.length; j++){
                    var dj = dest2[j];
                    if(dj.groupName == ai.groupName){
                        dj.data.push(ai);
                        break;
                    }
                }
            }
          }
        }
        this.getcustomertaggx = dest1
        this.getcustomertagqywx = dest2

        setTimeout(() => {
          var html = `
            <p style="text-align:center;width:100%;font-size:0.3rem;height:0.7rem;line-height:0.7rem">暂无</p>
          `
          // if($('#crmbiaoqian').children().children().html() == ''){
          //   $('#crmbiaoqian').html(html)
          // }else if($('#crmbiaoqian').html() == ''){
          //   $('#crmbiaoqian').html(html)
          // }

          if($('#gxbiaoqian').children().children().html() == ''){
            $('#gxbiaoqian').html(html)
          }else if($('#gxbiaoqian').html() == ''){
            $('#gxbiaoqian').html(html)
          }

          if($('#qywxbiaoqian').children().children().html() == ''){
            $('#qywxbiaoqian').html(html)
          }else if($('#qywxbiaoqian').html() == ''){
            $('#qywxbiaoqian').html(html)
          }
        }, 100);
        
      }
    );
      
    
  }
};
</script>

<style scoped lang="less">
.kaliebiao {
  // width: 40%;
  text-align: center;
  background: #35495e;
  position: absolute;
  right: 0;
  top: 85%;
  border-radius: 2px;
  opacity: 0.8;
}
.kaliebiao p {
  font-size: 0.3rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: #f4f5f7;
  line-height: 0.5rem;
}
.customer_data {
  padding-top: 0.2rem;
}

.customer_data .customer_K {
  width: 92%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0px 0px 2px 0px rgba(73, 120, 176, 0.5);
  border-radius: 20px 20px 0px 0px;
}

.customer_K .customer_head {
  width: 19%;
  position: relative;
  float: left;
  margin: 0.32rem 0.3rem;
  margin-right: 0.1rem;
}

.customer_head img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}

.customer_head .active {
  position: absolute;
  text-align: center;
  background-color: #ffa21e;
  color: #fff;
  border-radius: 15px;
  width: 0.96rem;
  font-size: 0.28rem;
  height: 0.38rem;
  line-height: 0.4rem;
  bottom: -0.12rem;
  left: 0.12rem;
}

.customer_data .customer_info {
  position: relative;
  width: 70%;
  color: #1d1d1d;
  float: left;
  font-size: 0.3rem;
  padding: 0.36rem 0;
}

.customer_data .customer_info .cancel {
  position: absolute;
  right: -0.1rem;
  top: 0.38rem;
  font-size: 0.32rem;
  width: 1.8rem;
}

.customer_data .customer_info .cancel .checkbox {
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #4978b0;
  float: left;
  margin-right: 0.06rem;
  border-radius: 2px;
}

.customer_data .customer_info .cancel .checkbox.active {
  width: 0.32rem;
  height: 0.32rem;
  background: url(../../assets/images/icon_nofollowup@2x.png) no-repeat;
  background-size: 100% 100%;
  border: none;
}

.customer_data .customer_info div {
  margin-bottom: 0.21rem;
}

.customer_data .customer_info .name {
  font-size: 0.32rem;
}

.customer_data .customer_info .registerShop {
  line-height: 0.38rem;
}

.customer_data .customer_info .phone {
  display: block;
  width: 1.98rem;
  color: #4978b0;
  text-align: center;
  border-bottom: 1px solid #4978b0;
  margin-top: 0.53rem;
  line-height: 0.36rem;
  margin-bottom: 0.21rem;
}
.customer_data .customer_info .name p {
  float: left;
  width: 22%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 0.38rem;
  line-height: 0.38rem;
}
.arrow:after {
  content: " ";
  display: inline-block;
  height: 8px;
  width: 8px;
  border-width: 0 2px 2px 0;
  border-color: #d6d6d6;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  // position: absolute;
  // top: 50%;
  // margin-top: -6px;
  // right: 16px;
  margin-left: 0.2rem;
}
.customer_data .customer_info .name p.birthday {
  color: #ffa21e;
  font-size: 0.3rem;
}

.customer_data .customer_info .name p img {
  width: 0.3rem;
  margin: 0 0.2rem;
  margin-right: 0.15rem;
  vertical-align: top;
}

.customer_data .customer_info .name img {
  width: 0.22rem;
  float: left;
  margin-right: 0.1rem;
}

.memberinfo {
  //display: flex;
  padding: 0.44rem 0 0.4rem 0;
  //box-shadow: 0px 0px 4px 0px rgba(73, 120, 176, 0.5);
  border-top: 1px solid #e7edf5;
  border-bottom: 1px solid #e7edf5;
  margin-top: 0px;
  background-color: #fff;
  overflow-x: auto;
  white-space: nowrap;
}

.memberinfo .info {
  //display: inline-block;
  //float:left;
  position: relative;
  //  flex: 1;
  //  -webkit-flex: 1;
  width: 22%;
  text-align: center;
  display: inline-table;
}

.memberinfo .info p {
  font-size: 0.3rem;
}

.memberinfo .info img {
  width: 0.68rem;
  margin-bottom: 0.2rem;
}

.memberinfo .info .line {
  position: absolute;
  width: 1px;
  height: 1.1rem;
  right: 0;
  top: 0.06rem;
  background-color: #f7f7f7;
}

.title {
  padding: 0.1rem 0.3rem;
  font-size: 0.34rem;
  font-weight: bold;
  height: 0.8rem;
  line-height: 0.8rem;
}

.datalist {
  border-bottom: 1px solid #f7f7f7;
}

.costomer_xin {
  display: flex;
  border-top: 1px solid #f7f7f7;
  padding: 0.1rem 0.3rem;
  font-size: 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
}

.costomer_xi {
  flex: 1;
  -webkit-flex: 1;
}

.costomer_xin .costomer_xi:last-child {
  text-align: right;
}

.fourty,
.second,
.third {
  border-top: 10px solid #f7f7f7;
}

.costomer_xi img {
  width: 0.3rem;
  vertical-align: middle;
  margin-left: 0.1rem;
}
</style>
