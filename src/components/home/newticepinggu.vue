<template>
    <div :class="xitongflag||tanflags?'catain activeCa':'catain'">
        <div class="ticeheader">
        <div class="search">
           <img class="pic1" src="../../assets/images/icon_search@2x.png"/>
           <input type="number" placeholder="请输入手机号码查找会员" v-model="custel" @keyup="feng()" ref="input1">
           <img class="pic2" src="../../assets/images/icon_delete@2x.png" v-show="deleteFlag" @click="deletes"/>
          </div>
          <div v-show="!userInfo">
          <div class="tichesanname_wrap">
          <div class="tichesanname">
              <div class="tichesantext">
                 <div class="tichexian">
              
                 </div>
                 <div class="ticheyuan"></div>
             </div>
              <div class="tichesantext1">
               体测三部曲
             </div>
              <div class="tichesantext2">
                 <div class="ticheyuan"></div>
                  <div class="tichexian">
              
                 </div>
             </div>
          </div>
          </div>
          <div class="tichebuzou">
              <div class="tichebuzouitem">
                 <img class="img1" src="../../assets/images/chakehu.png" />
                 <p style="padding-top:0.1rem;">查找客户</p>
             </div>
               <div class="ticejiantou">
                  <img src="../../assets/images/chakehujian.png" />
             </div>
             <div class="tichebuzouitem">
                <img src="../../assets/images/chakehu1.png" />
                 <p>签署协议</p>
             </div>
               <div class="ticejiantou">
                  <img src="../../assets/images/chakehujian.png" />
             </div>
             <div class="tichebuzouitem">
                <img src="../../assets/images/chakehu2.png" />
                 <p>开始体测</p>
             </div>
           
          </div>
          </div>
          <div class="userinfo"  v-show="userInfo">
              <div class="boxshaws"></div>
              <div class="info">
                  <div class="item">客户姓名</div>
                       <div class="item">{{tihuan(curstomerInfo.customerName)}}</div>
              </div>
                <div class="info">
                  <div class="item">健身顾问</div>
                       <div class="item">{{tihuan(curstomerInfo.primaryName)}}</div>
              </div>
                <div class="info">
                  <div class="item">私人教练</div>
                       <div class="item">{{tihuan(curstomerInfo.operName)}}</div>
              </div>
                <div class="info">
                  <div class="item">是否已做体测评估</div>
                       <div class="item">{{tihuan(curstomerInfo.isReception)==0?'是':'否'}}</div>
              </div>
          </div>
        </div>
        <div class="zhiqingshubtn">
            <div class="item" style="width:16%;"> <img src="../../assets/images/qianshutu.png" /></div>
            <div class="item item1" style="width:54%;">运动测试及训练知情同意书</div>
            <div class="item" style="width:30%;" @click="sign"><div class="item2">{{qianName}}</div></div>
        </div>
         <div class="menus">
  <div class="title">请完成以下测试</div>
  <div class="tip">测试前请先签署客户知情书（inbody检测除外）</div>
  <div class="btn">
    <div :class="menuFlag==1?'item active':'item'" @click="changeMenu(1)">测试问卷</div>
     <div :class="menuFlag==2?'item active':'item'" @click="changeMenu(2)">测试历史</div>
  </div>
</div>
<div class="ques_list_wrap"  v-if="menuFlag==1">
    <div class="ques_list">
        <div class="ques_item" @click="gfpclick">
            <div class="item_left">
                <div class="title">Inbody检测</div>
                <div class="miaosu">
                    <p>采用极其精确的人体成份分析仪，</p>
                    <p>检查人体成份情况</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
        </div>

         <div class="ques_item" @click="parclick">
            <div class="item_left">
                <div class="title">体态静态评估</div>
                <div class="miaosu">
                    <p>通过评估发现你身上存在的一些</p>
                    <p>疼痛和活动受限的问题</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
              <div class="sanjiao" v-show="jingItem.fangjing==0"><span>完成</span></div>
        </div>

         <div class="ques_item" @click="dongclick">
            <div class="item_left">
                <div class="title">体能动态评估</div>
                <div class="miaosu">
                    <p>通过体能训练了解身体情况，更</p>
                    <p>好的管理身体健康</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
                <div class="sanjiao" v-show="dongpgItem.fangdong==0"><span>完成</span></div>
        </div>
    </div>
     </div>
     <div class="cehistory"  v-if="menuFlag==2">
         <div class="hisList" v-for="(item,index) in cehistroyList" :key="index">
          <div class="title">
              <img src="../../assets/images/circles.png" alt="" class="cir1">
              体测评估报告
                         <img src="../../assets/images/circles.png" alt="" class="cir2">
          </div>
          <div class="customerInfo">
              <div class="info">
                  <div class="item">客户姓名:</div>
                <div class="item">{{item.name}}</div>
              </div>
               <div class="info">
                  <div class="item">体测时间：</div>
                <div class="item">{{item.writeTime.split(" ")[0]}}</div>
              </div>
               <div class="info">
                  <div class="item">测试私教：</div>
                <div class="item">{{item.operator}}</div>
              </div>
               <div class="tc">
              <div class="item" style="margin-right:3%;">
                  <img src="../../assets/images/inbodyjcx.png" alt="">
                  Inbody检测
                   <div class="sanjiao1" v-show="item.testBody==0" ><span></span></div>
                  </div>
              <div class="item" style="margin-right:3%;">
                  <img src="../../assets/images/ttj.png" alt="" style="width:0.15rem;">体态静态评估
                       <div class="sanjiao1" v-show="item.staticId"><span></span></div>
                  </div>
              <div class="item">
                  <img src="../../assets/images/dtpg.png" alt="">体态动态评估
                       <div class="sanjiao1"  v-show="item.dynamicId"><span></span></div>
                  </div>
          </div>
          </div>
          <div class="btn" @click="lookbg(item.gxId,item.staticId,item.dynamicId)">查看报告</div>
                  <div class="btn1" @click="lookqs(item.consentId)">查看签署协议</div>
         </div>
         <div class="nohistory" v-if="nohis">暂无体测历史</div>
     </div>
        <div class="addCustomer_finish" @click="finishs()" v-if="menuFlag==1"><span>完成</span></div>

         <!-- 系统已有该客户 -->
  <div class="xitong_wrap" v-show="xitongflag" @click="hides">
      <div class="xitong_wra" @click.stop="ssd">
      <div class="xitong_header">
              <p>提示：系统已有该客户</p>
       </div>
     <div class="xitong_con">
            <div class="xitong_list">
               <div :class="gxid==item.gxId?'xitong_item gxidActive':'xitong_item'" v-for="(item,index) in telcusinfolist" :key="index" @click="selectCurstomer(item)">
                   <div class="data">
                     <span class="ming">客户姓名：</span><span class="value">{{tihuan(item.customerName)}}</span>                   
                   </div>
                   <div class="data">
                        <span class="ming">健身顾问： </span><span class="value">{{tihuan(item.primaryName)}}</span>
                   </div>
                    <div class="data">
                        <span class="ming">私教顾问： </span><span class="value">{{tihuan(item.operName)}}</span>
                   </div>
                    <div class="data">
                        <span class="ming">最近一次体测时间：  </span><span class="value">{{tihuan(item.isReception)==0?'是':'否'}}</span>
                   </div>
               </div>
            </div>
       </div>      
     </div>
  </div>
    <div class="tanchuang_wrap" v-show="tanflags" @click="tanHide">
        <div class="tanchuang" @click.stop="ssd">
             <div class="tanchuang_header">
                 <p>温馨提示</p>
             </div>
              <div class="tanchuang_con">
                  <p>该客户不存在，请先</p>
                  <p>添加客户信息！</p>
              </div>
               <div class="tanchuang_btn" @click="tanAdds()">
                   <p>立即添加</p>
               </div>
        </div>
    </div>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
     data () {
     return {
         menuFlag:1,
         xitongflag:false,
         deleteFlag:false,
         nohis:false,
         userInfo:false,
         qianName:'立即签署',
         custel:'',
         telcusinfolist:[],
         tanflags:false,
         curstomerInfo:'',
         gxid:'',
         zhiqingid:'', //知情书id
         jingItem:'',
         dongpgItem:'',
         cehistroyList:[]
     }
   },
   methods:{
     changeMenu(i){
     
       if(i==2){
            if(this.curstomerInfo==""){
             this.$vux.toast.text('请先查找客户', "center");
             return;
         }
          this.instance.$post('/rest/wx/reception/queryCustomerTestList',{
                   gxId:this.curstomerInfo.gxId, 
                   mobile:this.curstomerInfo.mobile
                 },res => {
                  console.log(JSON.stringify(res));
                  if(res.status){
                      this.cehistroyList=[];
                      if(res.rows.length>0){
                          this.nohis=false;
                          this.cehistroyList=res.rows;
                      }else{
                          this.nohis=true;
                      }
                  }
                })
       }
         this.menuFlag=i;
     },
     finishs(){
  if(this.jingItem.fangjing == undefined){
             this.$vux.toast.text("请完成体态静态评估测试");
         }else if(this.dongpgItem.fangdong == undefined){
             this.$vux.toast.text("请完成体能动态评估测试");
         }else{
           console.log(this.jingid)
            console.log(this.dongid)
            if(this.jingItem.jingid == undefined){
              
                 this.instance.$post('/rest/wx/reception/updateSportsConsent',{
                  id:this.zhiqingid,
                  pacId:this.dongpgItem.dongid
                 },res => {
                  console.log(res);
                })
            }else if(this.dongpgItem.dongid == undefined){
               
                 this.instance.$post('/rest/wx/reception/updateSportsConsent',{
                    id:this.zhiqingid,
                  gxId:this.jingItem.jingid
                 },res => {
                  console.log(res);
                })
            }else{
                
                  this.instance.$post('/rest/wx/reception/updateSportsConsent',{
                    id:this.zhiqingid,
                  gxId:this.jingItem.jingid,
                  pacId:this.dongpgItem.dongid
                 },res => {
                  console.log(res);
                })
            }
           
            this.$router.push({
                name: "ticepgbao",
                query: {
                   gxId:this.curstomerInfo.gxId, 
                   mobile:this.curstomerInfo.mobile,
                    pacId:this.dongpgItem.dongid,
                    jingid:this.jingItem.jingid  
                }
              });
         }
     },
      tanAdds(){
           this.$router.push({
                name: "addclient"
              });
     },
     tihuan(item){
			
			if(item ==undefined || item ==null){
				item = "无"
			}else{
				return item
			}
			return item
        },
     feng(){
       if(this.custel.replace(/(^\s*)|(\s*$)/g, "")!=''){
           this.deleteFlag=true;
       }else{
            this.deleteFlag=false;
       }
       if(this.custel.length==11){
           this.$refs.input1.blur();
          this.getcusinfo()
       }
     },
     selectCurstomer(item){
     this.curstomerInfo=item;
     this.gxid=item.gxId;
     this.userInfo=true;
       this.xitongflag=false;
       if(this.menuFlag==2){
           this.changeMenu(2);
       }
     },
     sign(){
         if(this.curstomerInfo==""){
             this.$vux.toast.text('请先查找客户', "center");
             return;
         }
  this.$router.push({
                name: "cuszhiqings",
                 query: {
                 gxId:this.curstomerInfo.gxId,
                 mobile:this.curstomerInfo.mobile,
                 customerName:this.curstomerInfo.customerName
                }   
              });
     },
      gfpclick(){
         if(this.curstomerInfo==""){
             this.$vux.toast.text('请先查找客户', "center");
             return;
         }
             this.$router.push({
                name: "inbodypics"
              });
        
         
     },
      //  体态静态评估
      parclick(){        
 if(this.curstomerInfo==""){
             this.$vux.toast.text('请先查找客户', "center");
             return;
         }
          if(this.zhiqingid==""){
             this.$vux.toast.text('请签署运动测试及训练知情同意书', "center");
             return;
         }
            this.$router.push({
                name: "jingpgs",
                query: {
                   gxId:this.curstomerInfo.gxId, 
                   mobile:this.curstomerInfo.mobile,
                   zhiqingid:this.zhiqingid   
                }
              }); 
     },
      dongclick(){
           if(this.curstomerInfo==""){
             this.$vux.toast.text('请先查找客户', "center");
             return;
         }
          if(this.zhiqingid==""){
             this.$vux.toast.text('请签署运动测试及训练知情同意书', "center");
             return;
         }
        this.$router.push({
                name: "dongpgs",
                query: {
                    gxId:this.curstomerInfo.gxId, 
                   mobile:this.curstomerInfo.mobile,
                    zhiqingid:this.zhiqingid   
                }
              }); 
     },
    //  查看报告
    lookbg(gxId,staticId,dynamicId){
        if(staticId==undefined&&dynamicId==undefined){
              this.$vux.toast.text('体态静态评估和体态动态评估未测，查看报告失败', "center");
              return;
        }
    this.$router.push({
                name: "ticepgbaos",
                query: {
                   gxId:gxId, 
                   mobile:this.curstomerInfo.mobile,
                    pacId:dynamicId,
                    jingid:staticId
                }
              });
    },
    // 查看签署
    lookqs(consentId){
               this.$router.push({
                name: "zhiqingImg",
                query: {
                   id:consentId
                }
              });
     
    },
     hides(){
        this.xitongflag=false;
     },
     tanHide(){
        this.tanflags=false;
     },
     ssd(){

     },
     getcusinfo(){
  if(this.custel == "" || this.custel.length<11){
            this.$vux.toast.text("手机号码为空或格式错误");
            return;
        }
      this.instance.$post('/rest/wx/reception/getCustomerDossierByTest',{
          mobile:this.custel
      },res => {
      //alert(JSON.stringify(res));
        this.telcusinfolist = []
       if(res.status){
           var data = res.rows;
           if(data.length>0){
                    this.xitongflag=true;
                         this.tanflags=false;
           data.forEach(item => {
               this.telcusinfolist.push(item)
           });
           }else{
                 this.xitongflag=false;
                 this.tanflags=true;
            //   this.$vux.toast.text("没有该客户，请添加客户");
           }
           
       }
     })
     },
     deletes(){
             this.custel='';
               this.deleteFlag=false;
     }
   },
    watch: {
    $route(to, from) { 
       if(from.meta.zhiqingid!=undefined&&from.meta.zhiqingid!=""){
          this.zhiqingid=from.meta.zhiqingid;
          this.qianName="已签署";
          from.meta.zhiqingid='';
       }
       if(from.meta.jingItem!=undefined&&from.meta.jingItem!=""){
          this.jingItem=from.meta.jingItem;
          from.meta.jingItem='';
       }
        if(from.meta.dongpgItem!=undefined&&from.meta.dongpgItem!=""){
          this.dongpgItem=from.meta.dongpgItem;
          from.meta.dongpgItem='';
       }
    }
  }
}
</script>
<style scoped  lang="less">
.catain{
        background-color: #f7f7f7;
          height: initial !important;
          padding-bottom: 0.3rem;
}
.ticeheader{
   width:100%;
height:5.3rem;
background:#4A77B0;
box-shadow:0px 2px 14px 0px rgba(74,119,176,0.2);
border-radius:0px 0px 0.4rem 0.4rem;
}
.search{width:94%;height:0.7rem;margin:0 auto;position: relative;top:0.3rem; background:#fff;
border-radius:0.2rem;position: relative;overflow: hidden;}
  .search input{width:70%; height:0.7rem;background:#fff;position: absolute;left:9%;padding-left: 2%;outline: none;font-size: 0.3rem;}
  .search img{width:0.26rem;height:0.26rem;}
  .search .pic1{position: absolute;top:0.2rem;left:3%;}
  .search .pic2{position: absolute;top:0.18rem;right:3%; width: 0.36rem;height: 0.36rem;}
   .tichesanname_wrap{text-align: center;}
   .tichesanname{margin:1rem auto 0;height:1rem;display: inline-block;}
    .tichesantext{float: left;}
     .tichesantext1{float: left;font-size:0.36rem;padding: 0 0.2rem;
font-family:PingFang SC;position: relative;top:0.08rem;
font-weight:500;
color:rgba(255,255,255,1);
}
      .tichesantext2{float: left;}
    .tichexian{display:inline-block;width:1.2rem;height: 1px;background: rgba(228,240,255,1)}
    .ticheyuan{display:inline-block;width:7px;
height:7px;position: relative;top:0.06rem;
background:rgba(228,240,255,1);
border-radius:50%;}
.tichebuzou{display: flex;margin-top:0.5rem;}
.tichebuzouitem {flex:1;text-align: center;}
.tichebuzouitem img{width:0.55rem;}
.tichebuzouitem .img1{width:0.62rem!important;}
.tichebuzouitem p{font-size:0.26rem;
font-family:PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);}
.ticejiantou{}
.ticejiantou img{width:1.12rem;}
.zhiqingshubtn{width:92%;margin: 0.45rem auto 0;
height:1.2rem;position: relative;
line-height: 1.2rem;
background:rgba(247,247,247,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);
border-radius:0.2rem;}
.zhiqingshubtn .item{float: left;text-align: center;}
.zhiqingshubtn .item1{font-size:0.3rem;
font-family:PingFang SC;
font-weight:500;
color:rgba(74,119,176,1);}
.zhiqingshubtn .item2{width:80%;
height:0.6rem;margin: 0.3rem auto 0;
line-height:0.6rem; 
background:rgba(255,187,42,1);
box-shadow:0px 2px 8px 0px rgba(214,151,17,0.7), 0px 3px 0px 0px rgba(255,175,3,1);
border-radius:0.3rem;
font-size:0.24rem;
font-family:PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
}
.zhiqingshubtn img{width:0.65rem;vertical-align: middle;}

input::-webkit-input-placeholder{
    font-size:  0.26rem;;
font-weight:500;
color:rgba(153,153,153,1);
}
.menus{
  padding-top: 0.41rem;
  position: sticky;
    top: -1px;
    background-color: #f7f7f7;
    z-index:1;
    padding-bottom: 0.1rem;
        margin-top: 0.1rem;
        width: 92%;
            padding-left: 4%;
  .title{
    font-size:0.4rem;
font-weight:bold;
color:rgba(29,29,29,1);
text-align: center;
  }
  .tip{
    font-size:0.24rem;
font-weight:400;
color:rgba(153,153,153,1);
text-align: center;
padding: 0.1rem 0;
  }
  .btn{
    display: flex;
    margin: 0.2rem 0;
    .item{
   flex: 1;
   text-align: center;
   border: 1px solid #4A77B0;
   height:0.73rem;
   line-height: 0.73rem;
   font-size: 0.34rem;
border-radius:0px 5px 5px 0px;
color: #4A77B0;
font-weight:500;
    }
    .item:first-child{
      border-right: none;
      border-radius:5px 0px 0px 5px;
    }
    .active{
      background-color: #4A77B0;
      color: #fff;
    }
  }
}
.ques_list_wrap{width:100%;background:#F7F7F7;}
  .ques_list{padding-top:0.1rem;width: 92%;
    padding-left: 4%;}
  .ques_item{width:92%;height:2.4rem;background:rgba(255,255,255,1);border-radius:10px;padding:0 4%;position: relative;margin-bottom: 0.3rem}
  .item_left{float:left;}
  .item_left .title{font-size: 0.4rem;color:#1D1D1D;    margin-top: 0.35rem; padding-bottom: 0.1rem;}
   .item_left .miaosu{margin-top:0.1rem;}
   .item_left .miaosu p{font-size: 0.24rem;color:#999999;}
   .item_right{float:right; width:1.5rem;height:0.6rem;line-height:0.58rem;text-align: center; background:#4A77B0;border-radius:4px;
     margin-top:0.9rem;
   } 
   .item_right span{font-size: 0.26rem;color:#FFFFFF;} 
   .sanjiao{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_complete@2x.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
   }
   .sanjiao1{width:0.5rem;height:0.62rem;background:url(../../assets/images/ceshi.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
      top: 0;
      
    background-repeat: no-repeat;
   }
   .sanjiao span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
//     .sanjiao1{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_notapproved@2x.png);background-size: 100%;position: absolute;right:0;
//      text-align: right;
//      top: 0;
//    }
   .sanjiao1 span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
   .tanchuang_wrap{position: fixed;top:0;left:0;right:0;left:0;background: rgba(0,0,0,0.3);width:100%;height:100%;z-index: 101;}
.tanchuang{        width: 70%;
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);}
.tanchuang_header{width:100%;height:1rem;line-height:1rem ;background:rgba(74,119,176,1);
border-radius:20px 20px 0px 0px;text-align: center;}
.tanchuang_header p{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1)}
.tanchuang_con{width:100%;background: #fff;text-align: center;}
.tanchuang_con p{line-height: 0.8rem;}
.tanchuang_btn{width:100%;height:1rem;line-height: 1rem;text-align: center;background: #fff;border-top:1px solid rgba(214,214,214,1);border-radius:0px 0px 20px 20px ;}
.tanchuang_btn p{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(74,119,176,1);}
.questionnaire{
  width: 98%;
  margin: 0 auto;
  .totals{
    padding:0.3rem 0; 
     .name{
       position: relative;
       width:1.3rem;
       margin-left: 0.3rem;
height:0.43rem;
line-height: 0.48rem;
text-align: center;
font-size:0.26rem;
font-weight:500;
color:rgba(255,255,255,1);
background:rgba(74,119,176,1);
border-radius:3px 3px 0px 0px;
.line{
   position: absolute;
        width:90%;
height:0.4rem;
border-radius:3px 3px 0px 0px;
border:1px dashed rgba(255,255,255,1);
top: 2px;
left: 4%;
}
     }
     .totalcont{
    width: 100%;
//  height:5rem;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);
border-radius:10px;
padding: 0.3rem 0 0.1rem  0;
.item{
  position: relative;
  width: 92%;
  height:1.6rem;
  margin: 0 auto;
background:rgba(247,247,247,1);
    margin-bottom: 0.2rem;
.p1{
  font-size:0.4rem;
font-weight:bold;
color:rgba(29,29,29,1);
padding-top: 0.25rem;
padding-left: 0.3rem;
}
.p2{
  font-size:0.24rem;
font-weight:500;
color:rgba(153,153,153,1);
padding-left: 0.3rem;
}
.btn{
  position: absolute;
  width:1.5rem;
height:0.6rem;
line-height: 0.6rem;
text-align: center;
background:rgba(74,119,176,1);
border-radius:2px;
font-size:0.26rem;
font-weight:500;
color:rgba(255,255,255,1);
right: 0.3rem;
top:0.49rem;
}
}
.diamonds{
  position: absolute;
  width: 0.15rem;
  height: 0.15rem;
  background-color: #fff;
  left: 0;
  top: 0;
}
     }
  }
}
.addCustomer_finish {
    margin: 0.3rem auto 0;
        width: 92%;
    height: 0.85rem;
    line-height:0.85rem;
    font-size: 0.36rem;
    text-align: center;
    background: #5176AB;
    border-radius: 6px;
    color: #fff;
    font-family: "微软雅黑";
    }
      .xitong_wrap{
      position: fixed;top:0;left:0;top:0;bottom: 0;background: rgba(0, 0, 0, 0.3);z-index: 4999;width:100%;height:100%;
  }
  .xitong_wra{
          position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .xitong_header{
      width:84%;height:1rem;line-height: 1rem; background:rgba(74,119,176,1);
border-radius:10px 10px 0px 0px;text-align: center;margin: 0 auto;
  }
    .xitong_header p{font-size: 0.36rem;color: #FFFFFF;}
     .xitong_con{
     background: #fff;width:78%;margin: 0 auto;padding:3%;padding-bottom: 0;border-radius: 0px 0px 10px 10px;
 }
    .xitong_con .tishi{
        height:1rem;
        line-height: 1rem;
        text-align: center;
    }
    .xitong_con .tishi p{font-size: 0.3rem;color: #999999;}
    .xitong_list{
       overflow-y:auto;
           max-height: 5.67rem;
    }
    .xitong_list .active{border:1px solid rgba(74, 119, 176, 1);}
    .xitong_item:first-child{margin-top:0.04rem;}
    .xitong_item{ 
        width:92%;
        margin:0 auto;
        padding:0 3%;
        box-shadow:0px 0px 6px 0px rgba(73,120,176,0.4);
border-radius:5px;
       margin-bottom: 0.3rem;
    }
    .xitong_item .data{
        padding:0.08rem 0;
    }
    .xitong_item .ming{
       font-size: 0.3rem;color: #999999;
    }
    .xitong_item .value{
    font-size: 0.3rem;color: #1D1D1D;
    }
    .activeCa{
        height: 100% !important;
        overflow: hidden !important;
        padding-bottom: 0 !important;
    }
.userinfo{
    width: 92%;
    margin: 0 auto;
    background:rgba(247,247,247,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);
border-radius:10px;
    margin-top: 0.73rem;
    position: relative;
    z-index: 1;
    .boxshaws{
           position: absolute;
    height: 3.6rem;
    background: #b6d6ff;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(73, 120, 176, 0.4);
    box-shadow: 0px 0px 8px 0px rgba(73, 120, 176, 0.4);
    opacity: 0.3;
    border-radius: 10px;
    top: -0.15rem;
    width: 90%;
    left: 5%;
    }
.info{
    display: flex;
        display: flex;
    height: 0.89rem;
    line-height: 0.89rem;
    padding: 0 0.3rem;
        position: relative;
    z-index: 1;
    background-color: #f7f7f7;
    border-radius: 10px;
    .item{
        flex: 1;
        font-size: 0.3rem;
        color: #999999;
    }
    .item:last-child{
      text-align: right;
      color: #1D1D1D;
    }
}
}
.gxidActive{
    border:1px solid rgba(74, 119, 176, 1);
}
.cehistory{
    width: 92%;
    margin: 0 auto;
        padding-top: 0.1rem;
    .hisList{
        width:100%;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);
border-radius:10px;
margin-bottom: 0.3rem;
.title{
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size:0.36rem;
font-weight:500;
color:rgba(74,119,176,1);
.cir1,.cir2{
    width: 0.8rem;
    vertical-align: middle;
   
}
.cir2{
 transform: rotate(180deg);
}
}
.customerInfo{
    width:94%;
margin: 0 auto;
background:rgba(247,247,247,1);
border-radius:5px;
.info{
    display: flex;
    .item{
        flex: 1;
        font-size:0.26rem;
font-weight:500;
color:rgba(29,29,29,1);
border-bottom: 1px solid #E4E4E4;
height: 0.72rem;
line-height: 0.72rem;
padding: 0 0.6rem;
    }
    .item:last-child{
        text-align: right;
    }
}
}
.tc{
    display: flex;
    padding: 6% 2%;
    .item{
        position: relative;
        flex: 1;
        text-align: center;
        font-size:0.24rem;
        // padding: 0 0.3rem;
font-weight:500;
color:rgba(29,29,29,1);
background:rgba(255,255,255,1);
box-shadow:0px 2px 10px 0px rgba(74,119,176,0.3);
border-radius:2px;
height: 1rem;
    overflow: hidden;
line-height: 1rem;
img{
      width: 0.3rem;
    vertical-align: middle;
    margin-right: 0.1rem;
}
    }
}
.btn{
    width:4.6rem;
height:0.7rem;
line-height: 0.7rem;
text-align: center;
background:rgba(74,119,176,1);
border-radius:30px;
font-size:0.26rem;
font-weight:500;
color:rgba(255,255,255,1);
margin:  0.4rem auto;
margin-bottom: 0;
}
.btn1{
    font-size:0.26rem;
font-weight:500;
text-decoration:underline;
color:rgba(74,119,176,1);
text-align: center;
padding: 0.1rem 0;
padding-bottom: 0.3rem;
}
    }
}
.zhiqingimg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    top:0;
    left: 0;
    z-index: 99;
    img{
        width: 100%;
    }
}
.nohistory{
    font-size:0.34rem;
    text-align: center;
font-weight:500;
color:rgba(153,153,153,1);
padding-top: 1.24rem;
    padding-bottom: 1.2rem;
}
</style>