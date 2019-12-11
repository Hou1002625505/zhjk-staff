<template>
 <div class='container'>
    <div class="addG wjtc">
		<div class="weui-cells weui-cells_form">
  <div class="weui-cell" style="border-top: 1px solid #e4e4e4;">
    <div class="weui-cell__hd"><label class="weui-label">联系电话</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput5"  @blur="telcusinfo()" id="name" style="position:relative;right:18px;" type="number" maxlength="50" oninput="if(value.length>15)value=value.slice(0,15)" placeholder="请输入手机号码" v-model="custel">
    </div>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">姓<span class="zk">名</span></label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput5" id="phone" type="text" style="position:relative;right:18px;" placeholder="请输入客户姓名"  v-model="cusname">
    </div>
  </div>
   <div class="weui-cell" style="padding: 13.5px 15px;">
    <div class="weui-cell__hd"><label class="weui-label">性<span class="zk">别</span></label></div>
   <div class="weui-cell__hd" style="position: absolute;right: 15px;color: #919191;font-family: '微软雅黑';">
    <div class=" weui-cells_checkbox sex" style=" margin-top: 0;float: left; ">
      <label class="weui-cell weui-check__label" style="padding: 0;margin-right: 10px;border-bottom:none" >
     <div class="weui-cell__hd">
      <input type="radio" class="weui-check" name="checkbox1" maxlength="500" :checked="checksex1==1" value="1" @click="checksex(1)">
      <i class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd">
      <p>男</p>
    </div>
  </label>
  
		 		</div>
		 		 <div class="weui-cells weui-cells_checkbox" style=" margin-top: 0;">
      <label class="weui-cell weui-check__label" style="padding: 0;border-bottom:none" >
     <div class="weui-cell__hd">
      <input type="radio" class="weui-check" name="checkbox1" :checked="checksex1==2" value="2"  @click="checksex(2)">
      <i class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd">
      <p>女</p>
    </div>
  </label>
  
		 		</div>
    </div> 
  </div>
   <div class="weui-cell " id="showDatePicker">
    <div class="weui-cell__hd" ><label class="weui-label">出生日期</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput5" id="dateBirth" style="position:relative;right:18px;" type="text" placeholder="请选择出生日期" onfocus="this.blur()"  v-model="pickerValue" readonly="readonly"  @click="selecdate()">
    </div>
  </div>
   <div class="weui-cell customers" id="selectCus" >
    <div class="weui-cell__hd"><label class="weui-label">身高(cm)</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput6" style="position:relative;right:18px;" type="number" id="customer_source"  placeholder="请填写客户身高" v-model="shengao" oninput="if(value>300)value=''">
    </div>
  </div>

   <div class="weui-cell customers borbottom" id="selectCus" style="border-bottom: 1px solid #e4e4e4;">
    <div class="weui-cell__hd"><label class="weui-label">体重(kg)</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput6" type="number" id="customer_source" v-model="weight" style="position:relative;right:18px;"  placeholder="请填写客户体重"   oninput="if(value>300)value=''">
    </div>
  </div>
  <!-- <div class="weui-cell customers borbottom" id="selectCus" >
    <div class="weui-cell__hd"><label class="weui-label">证件类型</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input painput6" type="number" disabled="disabled" id="customer_source"  style="position:relative;right:18px;"  placeholder="身份证" onfocus="this.blur()" oninput="if(value>300)value=''">
    </div>
  </div>
  <div class="weui-cell customers borbottom" id="selectCus" >
    <div class="weui-cell__hd"><label class="weui-label">证件号码</label></div>
    <div class="weui-cell__bd arrow">
      <input class="weui-input painput6" type="text" @keyup="idnumber" maxlength="20" id="customer_source" v-model="idnumber" style="position:relative;right:18px;"  placeholder="请填写证件号码"   oninput="if(value.length>30)value=''">
    </div>
  </div> -->
  <div class="btn" @click="affrims()" v-if="!affraims">确定</div>
</div> 
<div class="zemsk" v-if="affraims"></div>
 <!-- <div class="addCustomer_finish" @click="xiayibu()"><span>完成</span></div> -->
 </div>
 <div class="menus">
  <div class="title">请填写以下问卷调查</div>
  <div class="tip">测试问卷选填任意一项，顾问总结报告必填.</div>
  <div class="btn">
    <div :class="menuFlag==1?'item active':'item'" @click="changeMenu(1)">问卷列表</div>
     <div :class="menuFlag==2?'item active':'item'" @click="changeMenu(2)">问卷填写历史</div>
  </div>
</div>
<div class="ques_list_wrap" v-if="menuFlag==1">
    <div class="ques_list">
        <div class="ques_item" @click="xiayibu(1)">
            <div class="item_left">
                <div class="title">GFP与健康目标</div>
                <div class="miaosu">
                    <p>用于识别少数不适宜作体能活动或</p>
                    <p>是需经医生建议才适合活动的客户</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
              <div class="sanjiao" v-show="fanggfp==1"><span>完成</span></div>
        </div>

         <div class="ques_item" @click="xiayibu(2)">
            <div class="item_left">
                <div class="title">PAR-Q问卷</div>
                <div class="miaosu">
                    <p>GFP(来宾健体纪录)用于得到客户信</p>
                    <p>息,掌握客户需求与健身动机</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
               <div class="sanjiao1" v-show="fangpar===1"><span>未通过</span></div> 
              <div class="sanjiao" v-show="fangpar===0"><span>通过</span></div>
        </div>

         <div class="ques_item" @click="xiayibu1()">
            <div class="item_left">
                <div class="title">顾问总结报告</div>
                <div class="miaosu">
                    <p>请填写本次接待总结</p>
                </div>
            </div>
             <div class="item_right">
                 <span>填写报告</span>
             </div>
        </div>
    </div>
     </div>
     <div class="questionnaire" v-if="this.menuFlag==2">
         <div class="totals" v-for="(item,index) in questionnaireData" :key="index" v-if="item.gfpList||item.parList||item.summaryList">
             <div class="name">{{item.empName}} <div class="line"></div></div>
             <div class="totalcont">
                <div class="item" v-if="item.gfpList" @click="wqdetail(1,item.gfpList.gxId)">
                  <p class="p1">GFP与健康目标</p>
                   <p class="p2">接待日期：{{item.writeDate.split(" ")[0]}}</p>
                   <div class="btn">查看记录</div>
                   <div class="diamonds"></div>
                       <div class="diamonds" style="right:0;left: initial;"></div>
                       <div class="diamonds" style="bottom:0;top: initial;"></div>
                       <div class="diamonds" style="bottom:0;right:0;top: initial;left: initial;"></div>
                </div>
                <div class="item" v-if="item.parList" @click="wqdetail(2,item.parList.gxId)">
                  <p class="p1">PAR-Q问卷</p>
                   <p class="p2">接待日期：{{item.writeDate.split(" ")[0]}}</p>
                   <div class="btn">查看记录</div>
                   <div class="diamonds"></div>
                       <div class="diamonds" style="right:0;left: initial;"></div>
                       <div class="diamonds" style="bottom:0;top: initial;"></div>
                       <div class="diamonds" style="bottom:0;right:0;top: initial;left: initial;"></div>
                        <div class="sanjiao1" style="top:0;" v-if="item.parList.status==1"><span>未通过</span></div> 
                </div>
                 <div class="item"  v-if="item.summaryList" @click="wqdetail(3,item.summaryList.gxId)">
                  <p class="p1">顾问总结报告</p>
                   <p class="p2">接待日期：{{item.writeDate.split(" ")[0]}}</p>
                   <div class="btn">查看记录</div>
                   <div class="diamonds"></div>
                       <div class="diamonds" style="right:0;left: initial;"></div> 
                       <div class="diamonds" style="bottom:0;top: initial;"></div>
                       <div class="diamonds" style="bottom:0;right:0;top: initial;left: initial;"></div>
                </div>
             </div>
         </div>
     </div>
     <div class="addCustomer_finish" @click="finishs()" v-if="menuFlag==1"><span>完成</span></div>
    <mt-datetime-picker
    ref="picker"
    type="date"
    v-model="datevalue" 
     year-format="{value}年"
  month-format="{value}月"
  date-format="{value}日"
  :startDate="sDate"
  :endDate="eDate"
   @confirm="handleConfirm"
    >
  </mt-datetime-picker>
  <!-- 系统已有该客户 -->
  <div class="xitong_wrap" v-show="xitongflag">
      <div class="xitong_wra">
      <div class="xitong_header">
              <p>提示：系统已有该客户</p>
       </div>
     <div class="xitong_con">
        
           <div class="tishi">
               <p>请选择客户继续接待</p>
           </div>
            <div class="xitong_list">

               <div class="xitong_item" v-for="(item,index) in telcusinfolist" :class="{active:item.gxId==gxingId}" :key="index" @click="selectcus(item.gxId)">
                   <div class="data">
                     <span class="ming">客户姓名： </span><span class="value">{{tihuan(item.customerName)}}</span>                   
                   </div>
                   <div class="data">
                        <span class="ming">健身顾问： </span><span class="value">{{tihuan(item.primaryName)}}</span>
                   </div>
                    <div class="data">
                        <span class="ming">私教顾问： </span><span class="value">{{tihuan(item.primaryName)}}</span>
                   </div>
                    <div class="data">
                        <span class="ming">是否已填写问卷： </span><span class="value">{{item.isReception==1?'否':'是'}}</span>
                   </div>
               </div>
              
            </div>
            <div class="btn_wrap">
                <div class="bujie" @click="bujied()"><span>不接待</span></div>
                <div class="jixu" @click="continiu()"><span>继续接待</span></div>
            </div>
       </div>      
     </div>
  </div>
  <div class="tanchuang_wrap" v-show="tanflags">
        <div class="tanchuang">
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
import { $ } from "jquery";
 export default {
   data () {
     return {
        cusname:"",
        custel:"",
        checksex1:"",      
        pickerValue:"",
        shengao:"",
        weight:"",
        datevalue:new Date('1970'),       
        gonghao:"",
        xitongflag:false,
        sDate:new Date('1950'),
        eDate:new Date(),
        telcusinfolist:[],
        gxingId:"",
        idnumber:"",//身份证号码
        status:1,//广信未存在档案
        menuFlag:1,
        fanggfp:'',
        fanggfpData:'',
        fangpar:'',
        fangparData:'',
        questionnaireData:[],
        wqhistory:'',
        tanflags:false,
        affraims:false,
        receptionId:''
     }
   },
   created(){
    
   },
   methods: {
       getgonghao(){
          this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
       console.log(res);
       this.gonghao = data.rows[0].userName;
     })
       },      
       tihuan(item){
			
			if(item ==undefined || item ==null){
				item = "无"
			}else{
				return item
			}
			return item
        },
        bujied(){
          // this.xitongflag=false
          this.$router.push({
                name: "home",
                 query: {
                }               
              });
        },
        selectcus(gxingid){
            console.log(gxingid)
            this.gxingId = gxingid
            
        },
    telcusinfo(){
        this.gxingId = "";
       if(this.custel != ""){
      this.instance.$post('/rest/wx/reception/getCustomerDossier',{
          mobile:this.custel
      },res => {
       console.log(JSON.stringify(res));
        this.telcusinfolist = []
       if(res.status){
           var data = res.rows;
           if(data.length>0){
             this.xitongflag = true;         
           data.forEach(item => {
               this.telcusinfolist.push(item)
           });
           this.status = 0;
           }else{
            this.status = 1;
            this.tanflags=true;
           }
       }
     })
     }
    },
    affrims(){
        if(this.custel==""){
		 this.$vux.toast.text("请输入客户手机号", "center");
	}else if(this.checksex1==""){
		 this.$vux.toast.text("请选择性别", "center");
	}else if(this.pickerValue==""){
		 this.$vux.toast.text("请选择出生日期", "center");
	}else if(this.shengao==""){
         this.$vux.toast.text("请填写身高", "center");
    }else if(this.weight==""){    
          this.$vux.toast.text("请填写体重", "center");
    }else{
        this.instance.$post('/rest/wx/reception/addGxCustomerInfo ',{
              gxId:this.gxingId,    
             customerName:this.cusname,
				mobile:this.custel,
				sex:this.checksex1,				
				birthday:this.pickerValue,
				height:this.shengao,
                weight:this.weight,
                status:this.status
         },res => {
         console.log(JSON.stringify(res));
         if(res.rel){
                this.receptionId=res.msg;
                this.affraims=!this.affraims;
         }else{
           //alert(res.msg)
            this.$vux.toast.text(res.msg, "center");
         }

        })
    }
    },
     xiayibu(i){
       if(!this.affraims){
          this.$vux.toast.text("请先确定客户信息", "center");
          return;
       }
  if(i==1){
 if(this.fanggfp==1){  
      this.$router.push({
                name: "chagfps",
                query: {
                   gxId:this.fanggfpData.gxId, 
                  parid:this.fanggfpData.parid,
                    gfpid:this.fanggfpData.gfpid,
                    fangpar:this.fanggfpData.fangpar,
                     fanggfp:this.fanggfpData.fanggfp     
                }
              });
  }else{
    this.$router.push({
                name: "gfpquestions",
                query: {
                  gxId:this.gxingId,
                  receptionId:this.receptionId
                
                }    
              });
  }
  }else{
     if(this.fangpar===0 || this.fangpar===1){

            this.$router.push({
                name: "chapars",
                query: {
                   gxId:this.fangparData.gxId, 
                   parid:this.fangparData.parid,
                    gfpid:this.fangparData.gfpid,
                  fangpar:this.fangparData.fangpar,
                    fanggfp:this.fangparData.fanggfp     
                }
              }); 
         }else{
             this.$router.push({
                name: "parquestions",
               query: {
                  gxId:this.gxingId,
                  receptionId:this.receptionId
                
                }    
              });
         }
  }
//         if(this.cusname==""||this.custel==""||this.checksex1==""||this.pickerValue==""||this.shengao==""||this.weight==""){
// 		 this.$vux.toast.text("请先填写完整上述信息", "center");
//     }else{ 
//         //alert(this.idnumber)
//          this.instance.$post('/rest/wx/reception/addGxCustomerInfo ',{
//               gxId:this.gxingId,    
//              customerName:this.cusname,
// 				mobile:this.custel,
// 				sex:this.checksex1,				
// 				birthday:this.pickerValue,
// 				height:this.shengao,
//                 weight:this.weight,
//                 status:this.status
//          },res => {
//          console.log(JSON.stringify(res));
//          if(res.rel){
//            if(this.gxingId == ""){
//              if(i==1){
//  this.$router.push({
//                 name: "gfpquestions",
//                query: {
//                   gxId:res.message,
//                   receptionId:res.msg
//                 }    
//               });
//              }else{
//                this.$router.push({
//                 name: "parquestions",
//                query: {
//                   gxId:res.message,
//                   receptionId:res.msg
                
//                 }    
//               });
//              }
             

//            }else{
//              if(i==1){
// this.$router.push({
//                 name: "gfpquestions",
//                 query: {
//                   gxId:this.gxingId,
//                   receptionId:res.msg
                
//                 }    
//               });
//              }else{
//                this.$router.push({
//                 name: "parquestions",
//                 query: {
//                   gxId:this.gxingId,
//                   receptionId:res.msg
                
//                 }    
//               });
//              }
//            }
           

//          }else{
//            //alert(res.msg)
//             this.$vux.toast.text(res.msg, "center");
//          }

//         })
//      }

     },
     xiayibu1(){
         if(this.fanggfp===''&&this.fangpar===''){
            this.$vux.toast.text('测试问卷请先选填一项', "center");
            return;
         }
         if(this.wqhistory==1){
             this.$router.push({
                name: "chaguwenjies",
                query: {
                   gxId:this.fanggfpData.gxId
                }
              });
         }else{
                 this.$router.push({
                name: "guwenjies",
                query: {
                   gxId:this.fanggfpData.gxId, 
                   receptionId:this.fanggfpData.receptionId,  
                  gfpid:this.fanggfpData.gfpid,
                  parid:this.fangparData.parid
                }
              });
         }
        
      
     },
     tanAdds(){
           this.$router.push({
                name: "addclient"
              });
     },
     continiu(){
        
        console.log(this.gxingId)
         if(this.gxingId !=""){
              this.instance.$post('/rest/wx/reception/getCustomerDossier',{
                  id:this.gxingId
              },res => {
                console.log(res);
                if(res.status){
                    var data = res.rows[0]
                    this.custel = data.mobile;
                    this.cusname = data.customerName
                    this.checksex1 = data.sex;
                      this.pickerValue = data.birthday?data.birthday.split(' ')[0]:'';
                    this.shengao =  data.height?data.height:''
                    this.weight =  data.weight?data.weight:''
                    
          //  this.idnumber
                 this.xitongflag = false;
                }
              })
         }else{
            this.$vux.toast.text("请选择客户", "center");
         }
          
     },
     finishs(){
if(this.fanggfp===''&&this.fangpar===''){
            this.$vux.toast.text('测试问卷请先选填一项', "center");
            return;
         }
         if(this.wqhistory!=1){
               this.$vux.toast.text('请填写顾问总结报告', "center");
            return;
         }
           this.$router.push({
                name: "customerDetail",
                query: {
                   filid:this.gxingId
                }
              });
     },
     changeMenu(i){
        if(i==2){
          if(this.gxingId==''){
          this.$vux.toast.text("请先填写客户信息", "center");
          return;
       }
            this.instance.$post('/rest/wx/reception/getCusReceptionInfoById',{
                  gxId:this.gxingId
              },res => {
                console.log(JSON.stringify(res));
                if(res.status){
                  this.questionnaireData=res.rows;
                }
              })   
       }
       this.menuFlag=i;
      
     },
     selecdate(){
        this.$refs.picker.open();
     },
     handleConfirm(){
        console.log(this.datevalue)
           console.log(this.config.formatDate(this.datevalue))
           this.pickerValue = this.config.formatDate(this.datevalue)
     },
     checksex(value){
        this.checksex1 = value 
       console.log(value)
     },
    //  问券历史
    wqdetail(i,gxid){
      if(i==1){
         this.$router.push({
                name: "chagfps",
                query: {
                   gxId:gxid,
                   hisIndex:1
                }
              });
      }else if(i==2){
           this.$router.push({
                name: "chapars",
                query: {
                   gxId:gxid,  
                     hisIndex:1
                }
              }); 
      }else{
          this.$router.push({
                name: "chaguwenjies",
                query: {
                   gxId:gxid
                }
              });
      }
    }
   },
    watch:{
     idnumber(){
        this.idnumber = this.idnumber.replace(/[^\w\\/]/ig,'')
     }
    
   },
   updated(){
    //  $('.painput5').css({"position":"absolute","right":"18px"})
    //  $('.painput6').css({"position":"absolute","right":"18px"})
   },
   components: {

   },
     watch: {
    $route(to, from) {
      // console.log(from.meta.partc) 
       if(from.meta.tc!=undefined&&from.meta.tc!=""){
          this.fanggfp=from.meta.tc.fanggfp;
          this.fanggfpData=from.meta.tc;
          from.meta.tc="";
       }
       if(from.meta.partc!=undefined&&from.meta.partc!=""){
          this.fangpar=from.meta.partc.fangpar;
          this.fangparData=from.meta.partc;
          from.meta.partc='';
       }
        if(from.meta.wqhistory!=undefined&&from.meta.wqhistory!=""){
          this.wqhistory=1;
          from.meta.wqhistory="";
       }
    }
  }
 }
</script>

<style scoped lang="less">
.container{
  background-color: #f7f7f7;
      padding: 4%;
          width: 92% !important;
          height: initial !important;
          // overflow-y: auto;
          // -webkit-overflow-scrolling: touch;
}
  .xitong_wrap{
      position: fixed;top:0;left:0;top:0;bottom: 0;background: rgba(0, 0, 0, 0.3);z-index: 4999;width:100%;height:100%;
  }
  .xitong_wra{margin-top:1rem;}
  .xitong_header{
      width:84%;height:1rem;line-height: 1rem; background:rgba(74,119,176,1);
border-radius:10px 10px 0px 0px;text-align: center;margin: 0 auto;
  }
    .xitong_header p{font-size: 0.36rem;color: #FFFFFF;}
     .xitong_con{
     background: #fff;width:78%;margin: 0 auto;padding:3%;border-radius: 0px 0px 10px 10px;
     padding-top: 0;
 }
    .xitong_con .tishi{
        height:1rem;
        line-height: 1rem;
        text-align: center;
    }
    .xitong_con .tishi p{font-size: 0.3rem;color: #999999;}
    .xitong_list{
       height:6.2rem;
       overflow-y:auto;
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
    .btn_wrap{height:0.8rem;padding-bottom: 0.3rem;
    padding-bottom: 0.1rem;
    padding-top: 0.3rem;
    }
    .bujie{width:45%;height:0.8rem;line-height: 0.8rem;text-align: center;border:1px solid rgba(74,119,176,1);
border-radius:10px;float: left;}
.bujie span{font-size: 0.36rem;color: #4A77B0;}
    .jixu{width:45%;height:0.8rem;line-height: 0.8rem;text-align: center;background: #4A77B0;
border-radius:10px;float: right;}
.jixu span{font-size: 0.36rem;color: #FFFFFF;}



		/*.weui-loadmore{
		    margin: 10.5em auto;
    }*/
    .borbottom{ border-bottom:1px solid rgba(247,247,247,0.5);}
	.weui-cell:before{
        left: 0;
        //  border-top:1px solid #e4e4e4 !important;
    }
	.weui-cell{
		padding: 13px 15px;
		
	}
	.weui-cells{
        margin-top:0;
        //border-top:1px solid #f7f7f7 !important;
    }
	.weui-check__label:active{
		background-color: #fff;
	}
	.weui-label{
		position: relative;
		color:#1D1D1D ;
		font-family: "微软雅黑";
	}
	.weui-cells:after{
		position: inherit;
	}
	.weui-cell:before,.weui-cells:before{
	 
		border-top:none;
	}
	.customers:after{
		border:none !important;
	}
	[class*=" weui-icon-"], [class^=weui-icon-]{
		    vertical-align: bottom;
	}
	.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{
		color: #4A77B0;
	}
	.weui-cells_form input, .weui-cells_form label[for]{
		text-align: right;
	}
	input::-webkit-input-placeholder{
		color: #919191;
		font-family: "微软雅黑";
	}
	 .arrow:after {
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color: #d6d6d6;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 16px;
}
.explain{
	width: 92%;
	margin: 0.3rem 4%;
}
.customers:after{
	content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
 .w1:after{
	content: "*";
	    position: absolute;
	        /*right: 27px;*/
    font-size: 20px;
    top: -2px;
}
.textEx{
	    padding: 0.18rem 0.2rem;
    background: #fff;
    resize: none;
    /*border: 1px solid #919191;*/
    border-radius: 3px;
   box-shadow: 0px 0px 5px 0px rgba(104,104,104,0.4) inset;
}
textarea::-webkit-input-placeholder{
	font-family: "微软雅黑";
	color: #919191;
}
 textarea{width:94%;outline: none;font-size: 16px;border: none;}
.addCustomer_finish {
    margin: 0.3rem auto 0;
    width: 100%;
    height: 0.85rem;
    line-height:0.85rem;
    font-size: 0.36rem;
    text-align: center;
    background: #5176AB;
    border-radius: 6px;
    color: #fff;
    font-family: "微软雅黑";
    }
    /*日期*/
   .weui-picker__action{
   	color: #919191;
   	font-family: "微软雅黑";
   }
   .weui-picker__action:last-child{
   	   	color: #5176AB;
   	font-family: "微软雅黑";
   }
   /*客户来源*/
  .shangke_type {
	background: #fff;
	position: absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
.shangke_type_header {
	height:1rem;
	line-height: 1rem;
	text-align: center;
	margin: 0.5rem 0;
}
.shangke_type_header span {
	font-size:0.36rem;
	color:#2C2E34;
}
.item_box {
	text-align: center;
	    margin-top: 1.3rem;
}

.item_box .item {
	display: block;
	width: 38%;
	margin-bottom: 0.3rem;
	float: left;
	margin: 0 6%;
}
.item_box .item span {
	    display: inline-block;
    width: 90%;
    height: 0.66rem;
    line-height: 0.66rem;
    margin-bottom: 35px;
    border: 1px solid #5176AB;
    border-radius: 5px;
    font-size: 0.3rem;
    color: #2C2E34;
}
.item_box .item span.active{
	background-color:#5176AB ;
	color: #fff;
}
.zk{
	padding-left: 32px;
}
.line{
	border-bottom: 1px solid #f7f7f7;
}
 ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999999;
    font-size: 0.28rem;
}
.menus{
  padding-top: 0.41rem;
  position: sticky;
    top: -1px;
    background-color: #f7f7f7;
    z-index:1;
    padding-bottom: 0.1rem;
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
      // border:none !important;
      background-color: #4A77B0;
      color: #fff;
    }
  }
}
 .ques_list_wrap{width:100%;background:#F7F7F7;}
  .ques_list{padding-top:0.1rem;}
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
   .sanjiao span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
    .sanjiao1{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_notapproved@2x.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
   }
   .sanjiao1 span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
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
.addG{
  position: relative;
  .zemsk{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
.addG .btn{
      width: 90%;
    height: 0.85rem;
    line-height: 0.85rem;
    font-size: 0.36rem;
    text-align: center;
    background: #5176AB;
    border-radius: 6px;
    margin: 0 auto;
    color: #fff;
    font-family: "\5FAE\8F6F\96C5\9ED1";
    margin-top: 0.3rem;
}
.tanchuang_wrap{position: fixed;top:0;left:0;right:0;left:0;background: rgba(0,0,0,0.3);width:100%;height:100%;z-index: 101;}
.tanchuang{    width: 70%;
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
</style>
