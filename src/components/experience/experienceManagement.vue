<template>
 <div class='container watermarks' >
     <!-- 菜单 -->
      <div class="menus">
              <div class="menu">
             <div  class="item active">经营概况</div>
              <div class="item br" @click="analysis">客户分析</div>
               <div class="item" @click="staff">员工分析</div>
         </div>
         <!-- 门店选择 -->
          <div class="currentStore" @click="showStore"> 
            <div class="item">当前门店 <span class="line"></span></div>
             <div  class="item">{{shopName1}}</div>
             <div class="distance">
                        <img src="../../assets/images/my_menu_more@2x.png" alt="">
                        </div>
          </div>
     </div>
     <div id="watermarks" ref="watermarks">
     <!-- 经营概况 -->
     <div class="experAna" @click="cancel1">
<div class="currentStore"  style="padding: 0 4%;"> 
            <div class="item" style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>经营概况<img src="../../assets/images/my_menu_question@2x.png" alt="" @click.stop="tipShow"> </div>
             <div  class="item" style="color:#FF0000;font-size:0.24rem;    padding-left: 0;
    padding-top: 0.4rem;float: right;padding-right: 0;">{{bussinessData.update_t!=undefined?'( 数据截止：'+bussinessData.update_t.split(" ")[0]+" "+bussinessData.update_t.split(" ")[1].substring(0,5)+" )":''}} </div>
          <div class="tip" v-show="tip">
          <p>消费人数：以手机号码去重统计；</p>
          <p>消费人次：以流水单号数量统计；</p>
        </div>
          </div>
<!-- 日期选择 -->
     <div class="selectDate">
         <div class="item1" @click.stop="selectDate">{{dateIndex==0?'今日':'自然月'}} <img src="../../assets/images/xialaarrow.png" > 
         <div class="options" v-show="show1"> 
           <div :class="dateIndex==0?'opItem active':'opItem'" @click.stop="selectTime(0)">今日</div>
               <div :class="dateIndex==0?'opItem':'opItem active'"  @click.stop="selectTime(1)">自然月</div>
         </div>
         </div>
         <div class="item2" v-if="dateIndex==0">
           {{currentTime}}
         </div>
         <div class="item1" @click.stop="showmonth" style="width: 2.2rem;" v-else>{{currentTime.split('-')[0]+"-"+selectMonths}} <img src="../../assets/images/home_menu_date@2x.png" style="top: 0.1rem;"> 
            <div class="months" v-show="show2" style="width: 2.4rem;">
              <div :class="selectMonths==item?'item active':'item'" :style="{'color':item>currentTime.split('-')[1]?'#999999':''}" @click.stop="selectMonth(item)" v-for="(item,index) in months" :key="index">{{parseInt(item)}}</div>
            </div>
         </div>
     </div>
      <div class="anl">
           <div class="alnflex bkr">
             <div class="item" style="border-right: 1px solid #f7f7f7;">
               <p class="alitem1">销售完成额</p>
               <p class="alitem2">{{bussinessData.sale_finish!=undefined?bussinessData.sale_finish:'无数据'}}</p>
                <p class="alitem1" v-if="dateIndex==1">同比<img :src="bussinessData.sale_finish_scale>0?rise:decline" v-if="bussinessData.sale_finish_scale!=undefined&&bussinessData.sale_finish_scale!=0"><span :class="bussinessData.sale_finish_scale==undefined?'clx1':bussinessData.sale_finish_scale<0?'clx':''">{{bussinessData.sale_finish_scale!=undefined?(Math.abs(bussinessData.sale_finish_scale)*100).toFixed(2)+"%":'无数据'}}</span> </p>
                 <p class="alitem1" v-else><span style="color:#fff">1</span></p>
             </div>
             <div class="item"> 
               <p class="alitem1">销售目标额</p>
               <p class="alitem2">{{bussinessData.sale_task!=undefined?bussinessData.sale_task:'无数据'}}</p>
                <p class="alitem1">完成比例{{bussinessData.sale_fin_bl1!=undefined?bussinessData.sale_fin_bl1:'无数据'}}</p>
             </div>
           </div>
             <div class="alnflex " style="padding-bottom: 0.3rem;">
             <div class="item" style="border-right: 1px solid #f7f7f7;">
               <p class="alitem1">成交人数</p>
               <p class="alitem2">{{bussinessData.sale_rs!=undefined?bussinessData.sale_rs:'无数据'}}</p>
                <p class="alitem1" v-if="dateIndex==1">同比<img :src="bussinessData.sale_rs_scale>0?rise:decline" style=" margin-top: -0.02rem;"  v-if="bussinessData.sale_rs_scale!=undefined&&bussinessData.sale_rs_scale!=0"><span :class="bussinessData.sale_rs_scale==undefined?'clx1':bussinessData.sale_rs_scale<0?'clx':''">{{bussinessData.sale_rs_scale!=undefined?(Math.abs(bussinessData.sale_rs_scale)*100).toFixed(2)+"%":'无数据'}}</span> </p>
                <p class="alitem1" v-else><span style="color:#fff">1</span></p>
             </div>
             <div class="item">
               <p class="alitem1">成交人次</p>
               <p class="alitem2">{{bussinessData.sale_rc!=undefined?bussinessData.sale_rc:'无数据'}}</p>
                <p class="alitem1" v-if="dateIndex==1">同比<img :src="bussinessData.sale_rc_scale>0?rise:decline" style=" margin-top: -0.02rem;" v-if="bussinessData.sale_rc_scale!=undefined&&bussinessData.sale_rc_scale!=0"><span :class="bussinessData.sale_rc_scale==undefined?'clx1':bussinessData.sale_rc_scale<0?'clx':''">{{bussinessData.sale_rc_scale!=undefined?(Math.abs(bussinessData.sale_rc_scale)*100).toFixed(2)+"%":'无数据'}}</span></p>
               <p class="alitem1" v-else><span style="color:#fff">1</span></p>
             </div>
           </div>
      </div>
          <div class="anl" style="border-top:none;">
           <div class="alnflex bkr">
             <div class="item" style="    border-right: 1px solid #f7f7f7;">
               <p class="alitem1">消耗完成额</p>
               <p class="alitem2">{{bussinessData.use_finish!=undefined?bussinessData.use_finish:'无数据'}}</p>
                <p class="alitem1" v-if="dateIndex==1">同比<img :src="bussinessData.use_finish_scale>0?rise:decline" style=" margin-top: -0.02rem;" v-if="bussinessData.use_finish_scale!=undefined&&bussinessData.use_finish_scale!=0"><span :class="bussinessData.use_finish_scale==undefined?'clx1':bussinessData.use_finish_scale<0?'clx':''">{{bussinessData.use_finish_scale!=undefined?(Math.abs(bussinessData.use_finish_scale)*100).toFixed(2)+"%":'无数据'}}</span></p>
               <p class="alitem1" v-else><span style="color:#fff">1</span></p>
             </div>
             <div class="item">
               <p class="alitem1">消耗目标额</p>
               <p class="alitem2">{{bussinessData.use_task!=undefined?bussinessData.use_task:'无数据'}}</p>
                <p class="alitem1">完成比例{{bussinessData.use_fin_bl1!=undefined?bussinessData.use_fin_bl1:'无数据'}}</p>
             </div>
           </div>
             <div class="alnflex " style="padding-bottom: 0.3rem;">
             <div class="item" style="border-right: 1px solid #f7f7f7;">
               <p class="alitem1">消费人数</p>
               <p class="alitem2">{{bussinessData.use_rs!=undefined?bussinessData.use_rs:'无数据'}}</p>
                <p class="alitem1" v-if="dateIndex==1">同比<img :src="bussinessData.use_rs_scale>0?rise:decline" style=" margin-top: -0.02rem;" v-if="bussinessData.use_rs_scale!=undefined&&bussinessData.use_rs_scale!=0"><span :class="bussinessData.use_rs_scale==undefined?'clx1':bussinessData.use_rs_scale<0?'clx':''">{{bussinessData.use_rs_scale!=undefined?(Math.abs(bussinessData.use_rs_scale)*100).toFixed(2)+"%":'无数据'}}</span></p>
            <p class="alitem1" v-else><span style="color:#fff">1</span></p>
             </div>
             <div class="item">
               <p class="alitem1">消费人次</p>
               <p class="alitem2">{{bussinessData.use_rc!=undefined?bussinessData.use_rc:'无数据'}}</p>
                <p class="alitem1" v-if="dateIndex==1">同比<img :src="bussinessData.use_rc_scale>0?rise:decline" style=" margin-top: -0.02rem;" v-if="bussinessData.use_rc_scale!=undefined&&bussinessData.use_rc_scale!=0"><span :class="bussinessData.use_rc_scale==undefined?'clx1':bussinessData.use_rc_scale<0?'clx':''">{{bussinessData.use_rc_scale!=undefined?(Math.abs(bussinessData.use_rc_scale)*100).toFixed(2)+"%":'无数据'}}</span></p>
             <p class="alitem1" v-else><span style="color:#fff">1</span></p>
             </div>
           </div>
      </div>
</div>
<!-- 数据分析 -->
<div class="alysis"  @click="cancel2">
  <div class="currentStore"  style="padding: 0 4%;overflow: inherit;height: 1.1rem;"> 
            <div class="item" style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>数据分析</div>
        <!-- <div class="tip" v-show="tip">
          <p>消费人数：以手机号码去重统计；</p>
          <p>消费人次：以流水单号数量统计；</p>
        </div> -->
   </div>
<!-- 日期选择 -->
     <div class="selectDate">
         <div class="item1" @click.stop="selectDate1">{{dateIndex1==0?'近7天':'自然月'}} <img src="../../assets/images/xialaarrow.png" > 
         <div class="options" v-show="show3">
           <div :class="dateIndex1==0?'opItem active':'opItem'" @click.stop="selectTime1(0)">近7天</div>
               <div :class="dateIndex1==0?'opItem':'opItem active'"  @click.stop="selectTime1(1)">自然月</div>
         </div>
         </div>
         <div class="item2" v-if="dateIndex1==0">
           {{fun_date(-6)}}至{{currentTime}}
         </div>
         <div class="item1" @click.stop="showmonth1" style="width: 2.2rem;" v-else>{{currentTime.split('-')[0]+"-"+selectMonths1}} <img src="../../assets/images/home_menu_date@2x.png" style="top: 0.1rem;"> 
            <div class="months" v-show="show4" style="width: 2.4rem;">
              <div :class="selectMonths1==item?'item active':'item'" :style="{'color':item>currentTime.split('-')[1]?'#999999':''}" @click.stop="selectMonth1(item)" v-for="(item,index) in months" :key="index">{{parseInt(item)}}</div>
          </div>
         </div>
     </div>
     <!-- 曲线 -->
     <div class="curve">
       <div class="zxImg">
           <div class="curves">
             <div class="item" style="margin: 0% 0 0 -20%;">
               <div class="items"><span class="circle"></span>销售额</div>
               <div class="items"><span class="circle active"></span>消耗额</div>
             </div>
           </div>
               <div id="box" style="width:100%;height:300px;"></div>
               </div>
                      <div class="zxImg">
                <div class="curves">
             <div class="item">
               <div class="items"><span class="circle"></span>消费人数</div>
               <div class="items"><span class="circle active"></span>消费人次</div>
             </div>
           </div>
                <div id="box1" style="width:100%;height:300px;margin-top: 0.5rem;"></div></div>
                    <div class="zxImg">
                 <div class="curves">
             <div class="item">
               <div class="items"><span class="circle"></span>成交人数</div>
               <div class="items"><span class="circle active"></span>成交人次</div>
             </div>
           </div>
                <div id="box2" style="width:100%;height:300px;margin-bottom: 1rem;margin-top: 0.5rem;"></div></div>
     </div>
</div>
</div>
    <!-- 所有门店 -->
    <div class="msk" v-show="show" @click.stop="cancel"></div>
    <transition name="slide-fade" mode="out-in">
      <div class="stores" v-show="show">
        <!-- <div class="region pborder">
          <p @click="throughCity" :class="allStore==1?'active':''">深圳全城</p>
          <p v-for="(item,index) in storesList" :key="index" :class="item.clubId==num&&allStore==0?'active':''" @click.stop="change(item.clubId,item.area,item.clubName)">{{item.area}}</p>
        </div> -->
        <div class="regions">
          <!-- <p>{{area}}</p> -->
          <p v-for="item in storeNameList"
            :key="item.clubId"
            :class="item.clubName==shopName1?'active':''"
            @click.stop="selectShop(item.clubName,item.sysClubCode,item.sysClubCode)" >{{item.clubName}}</p>
             <!-- <p v-for="item in storeNameList"
            :key="item.clubId"
            :class="item.clubName==shopName1?'active':''"
            @click.stop="selectShop(item.clubName,item.clubId,item.sysClubCode)" v-if="allStore==1">{{item.clubName}}</p> -->
        </div>
      </div>
    </transition>
 </div>
</template>

<script>
import { Datetime } from 'vux'
 export default {
   data () {
     return {
        currentTime:this.config.formatDate(this.config.currentTime()),
        selectMonths:this.config.formatDate(this.config.currentTime()).split('-')[1],
        selectMonths1:this.config.formatDate(this.config.currentTime()).split('-')[1],
      show:false,
      months:['01','02','03','04','05','06','07','08','09','10','11','12'],
      rise:require('../../assets/images/icon_down@2x.png'),
      decline:require('../../assets/images/icon_up@2x.png'),
      show1:false,
      show2:false,
       show3:false,
      show4:false,
      tip:false,
      allStore:0,
      dateIndex:1,
       dateIndex1:0,
      storesList:"",
      storeNameList:"",
      bussinessData:"",
      dataCurve:0,
      num:"",
      area:"",
      shopName1:"",
      isHis:0,
      selestoreNum:0
     }
   },
   created(){
   
         this.club(); 
         this.getuserinfo();
   },
   mounted(){
  //  this.lineChat();
      this.ispermission();
      
   },
   methods: {
      getuserinfo(){
    this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
      // console.log(JSON.stringify(res));
     this.watermark({watermark_txt0:res.rows[0].realName+'-'+res.rows[0].userName+' '+this.currentTime});
    })
     },
    //  权限
     ispermission(){
       var flag=0;
       	if(this.$store.state.jurisdiction.length>0){
				 this.$store.state.jurisdiction.forEach(item=>{
      if(item.permissionName == '经营管理'){
                flag=1;
						}  
          })
            if(flag==0){
               this.$refs.watermarks.style.display='none';
         this.config.showTip(this,"无权限访问");
           
      }
      }else{
        this.$refs.watermarks.style.display='none';
            this.config.showTip(this,"无权限访问");
        
      }
    
     },
     analysis(){
        this.$router.replace({
                name: "customerAnalysis"
              });
     },
     staff(){
       this.$router.replace({
                name: "staffAnalysis"
              });
     },
     showStore(){
        this.show=true;
        this.show1=false;
        this.show3=false;
     },
     tipShow(){
        this.tip=!this.tip;
     },
   selectShop(shopname, clubId, sysClubCode) {
      this.shopName1 = shopname;
      this.num = clubId;
        this.show =this.show1=this.show2=this.show3=this.show4=false;
      //  this.dateIndex1=0;
        this.selectMonths=this.config.formatDate(this.config.currentTime()).split('-')[1];
        this.selectMonths1=this.config.formatDate(this.config.currentTime()).split('-')[1];
       var data={
          sysClubCode:clubId,
          shopName:shopname
        }
           localStorage.setItem("storeInfo",JSON.stringify(data))
           if(this.dateIndex==0){
             this.selestoreNum=1;
                this.sinessData1();
                
           }else{
                this.sinessData();
         }
          this.addCookie("storeTime",10800,10800); 
    },
     change(clubid, area, clubName) {
      this.num = clubid;
      this.area = area;
      this.allStore=0;
    },
    throughCity(){
        this.allStore=1;
    },
     cancel() {
      this.show = false;
    },
     cancel1() {
      this.show1=this.show2 =this.tip=false;
    },
     cancel2() {
      this.show3=this.show4 = this.tip=false;
    },
    selectDate(){
         this.show1=!this.show1;
    },
     selectDate1(){
         this.show3=!this.show3;
    },
    selectTime(index){
  this.dateIndex=index;
   this.show1=false;
   this.dataCurve=0;
   this.sinessData1();
        // var data={
        //   dateIndex:this.dateIndex,
        //   dateIndex1:this.dateIndex1
        // }
        //    localStorage.setItem("dataRecords",JSON.stringify(data))
    },
     selectTime1(index){
  this.dateIndex1=index;
   this.show3=false;
      this.dataCurve=1;
        this.sinessData1();
        // var data={
        //   dateIndex:this.dateIndex,
        //   dateIndex1:this.dateIndex1
        // }
        //    localStorage.setItem("dataRecords",JSON.stringify(data))
    },
    showmonth(){
      this.show2=!this.show2;
    },
    showmonth1(){
      this.show4=!this.show4;
    },
    // 选择月份
    selectMonth(month){
      if(month>this.currentTime.split('-')[1]){
        return;
      }
        this.selectMonths=month;
           this.dataCurve=0;
         this.show2=false;
           this.sinessData1();
    },
      selectMonth1(month){
      if(month>this.currentTime.split('-')[1]){
        return;
      }
        this.selectMonths1=month;
           this.dataCurve=1;
         this.show4=false;
            this.sinessData1();
    },
     //   门店
    club() {
         this.instance.$post('/rest/wx/customer/club/employeeViewClub',{},res => {
   //console.log(JSON.stringify(res));
        if (res.status) {
            this.storeNameList = res.rows;
            // this.storesList = this.config.deteleObject(res.rows, "area");
               var second = this.getCookieValue("storeTime")?this.getCookieValue("storeTime"):0;//获取cookie值
                     var storeInfo=localStorage.getItem("storeInfo");
      if(storeInfo!=null&&second>0){
        var storeInfo1=JSON.parse(storeInfo);
              this.num =storeInfo1.sysClubCode;
            this.shopName1 = storeInfo1.shopName;
      }else{
    this.num = res.rows[0].sysClubCode;
   this.shopName1 = res.rows[0].clubName;
      }
      //             var dataRecords=localStorage.getItem("dataRecords");
      // if(dataRecords!=null){
      //   var dataRecords1=JSON.parse(dataRecords);
      //   if(dataRecords1.dateIndex==0&&dataRecords1.dateIndex1==0){
      //        this.isHis=1;
      //      this.sinessData();
      //   }else{
      //       this.dateIndex=dataRecords1.dateIndex;
      //       this.dataCurve=0;
      //         this.sinessData1();
      //   }
      // }else{
      //      this.isHis=1;
      //     this.sinessData();
      // }
      
            this.sinessData();
            // this.area = res.rows[0].area;
          }
       })
    },
    // 数据
   sinessData(){
     var data={
         type:"1",
    clubCode:this.num+"",
    method:"one"
     }
      var dataTimeS='',dataTimeS1="";
       for(var i=-6;i<1;i++){
             if(dataTimeS==""){
         if(this.fun_date(i,1)!=this.currentTime.replace(/-/g,'')){
             dataTimeS+=this.fun_date(i,1);
          }
            dataTimeS1+=this.fun_date(i,0);
        }else{
           if(this.fun_date(i,1)!=this.currentTime.replace(/-/g,'')){
               dataTimeS+=","+this.fun_date(i,1);
          }
               dataTimeS1+=","+this.fun_date(i,0);
        }
       
                  //  console.log(this.fun_date(i))
         }
        data.dateStr=dataTimeS;
       data.startDate=this.currentTime.split('-')[0]+this.currentTime.split('-')[1];
     
   // alert(dataTimeS)
      //   console.log(dataTimeS)
  this.instance.$post('/rest/wx/report/getOperationAnalysisReport',data,res => {
  console.log(JSON.stringify(res));
 if(res.rows.length>0){
    var dataQX1=[],dataQX2=[],dataQX3=[];//销售额图
     var consumption1=[],consumption2=[];//消费人数图数据
       var bargain1=[],bargain2=[];//成交人数图数据
   for(var i=0;i<res.rows.length;i++){
     var item=res.rows[i];
     if(item.date1==this.currentTime.split('-')[0]+this.currentTime.split('-')[1]){
           this.bussinessData=item;
     }
   }
  //  alert(1111)
   for(var j=0;j<dataTimeS1.split(',').length;j++){
     dataQX1.push(parseInt(dataTimeS1.split(',')[j].split('-')[1])+"."+parseInt(dataTimeS1.split(',')[j].split('-')[2]))
    //  console.log(1)
     var flag=0;
          for(var i=0;i<res.rows.length;i++){
     var item=res.rows[i];
        // console.log(item.date1+"*"+dataTimeS1.split(',')[j].replace(/-/g,''))
     if(item.date1==dataTimeS1.split(',')[j].replace(/-/g,'')){
       flag=1;
      //  销售额
         if(item.sale_finish){
dataQX2.push(item.sale_finish)
         }else{
           dataQX2.push(0)
         }
          if(item.use_finish){
dataQX3.push(item.use_finish)
         }else{
           dataQX3.push(0)
         }
        //  消费人数
         if(item.use_rs){
consumption1.push(item.use_rs)
         }else{
           consumption1.push(0)
         }
          if(item.use_rc){
consumption2.push(item.use_rc)
         }else{
           consumption2.push(0)
         }
        //  成交人数
         if(item.sale_rs){
bargain1.push(item.sale_rs)
         }else{
           bargain1.push(0)
         }
          if(item.sale_rc){
bargain2.push(item.sale_rc)
         }else{
           bargain2.push(0)
         }
        //  dataQX2.push(item.sale_finish)
       }
         }
         if(flag==0){
          //   console.log(2)
          //  销售额
            dataQX2.push(0)
              dataQX3.push(0)
               //  消费人数
                  consumption1.push(0)
              consumption2.push(0)
              // 成交人数
                bargain1.push(0)
              bargain2.push(0)
         }
       
     }
  // console.log(dataQX1)
  //   console.log(dataQX2)
  //     console.log(dataQX3)
  //     console.log(bargain1)
  //     console.log(bargain2)
  }
  this.lineChat(dataQX1,dataQX2,dataQX3)
  this.lineChat1(dataQX1,consumption1,consumption2);
  this.lineChat2(dataQX1,bargain1,bargain2);
       })
   },
    sinessData1(){
     var data={
         type:"1",
    clubCode:this.num+"",
    method:"one"
     }
      var dataTimeS='',dataTimeS1="";
       for(var i=-6;i<1;i++){
             if(dataTimeS==""){
         if(this.fun_date(i,1)!=this.currentTime.replace(/-/g,'')){
             dataTimeS+=this.fun_date(i,1);
          }
            dataTimeS1+=this.fun_date(i,0);
        }else{
           if(this.fun_date(i,1)!=this.currentTime.replace(/-/g,'')){
               dataTimeS+=","+this.fun_date(i,1);
          }
               dataTimeS1+=","+this.fun_date(i,0);
        }
       
                  //  console.log(this.fun_date(i))
         }
        data.dateStr=dataTimeS;
       if(this.dataCurve==0){
            if(this.dateIndex==0){
       data.startDate=this.currentTime.replace(/-/g,'');
      //  data.startDate='20190515'
     }else{
       dataTimeS=this.currentTime.split("-")[0]+this.selectMonths;
       data.startDate=dataTimeS
     }
       }else{
            if(this.dateIndex1==0){
       data.startDate=this.currentTime.replace(/-/g,'');
      //  data.startDate='20190515'
     }else{
       dataTimeS=this.currentTime.split("-")[0]+this.selectMonths1;
       data.startDate=dataTimeS;
      //  alert(this.selectMonths1)
        var lastDay= new Date(this.currentTime.split("-")[0],this.selectMonths1,0);
var year = lastDay.getFullYear();
var month = lastDay.getMonth() + 1;
month = month < 10 ? '0'+ month : month;
var day = lastDay.getDate();
day = day < 10 ? '0'+day : day; 
   var dateTimes1='',dateTimes2='';
         for(var i=1;i<=day;i+=3){
           
             var dataI=i;
            if(dataI<10){
               dataI='0'+i;
             }
           if(dateTimes1==""){
             dateTimes1+=this.currentTime.split("-")[0]+this.selectMonths1+dataI;
             dateTimes2+=i;
           }else{
              dateTimes1+=','+this.currentTime.split("-")[0]+this.selectMonths1+dataI;
                      dateTimes2+=','+i;
           }
            // console.log(dateTimes1)
         }
        //  console.log(dateTimes1)
        data.dateStr=dateTimes1;
     }
       }
  
   // alert(dataTimeS)
      //   console.log(dataTimeS)
  this.instance.$post('/rest/wx/report/getOperationAnalysisReport',data,res => {
  console.log(JSON.stringify(res));
 if(res.rows.length>0){
    var dataQX1=[],dataQX2=[],dataQX3=[];//销售额图
     var consumption1=[],consumption2=[];//消费人数图数据
       var bargain1=[],bargain2=[];//成交人数图数据
         if(this.dataCurve==0){
          for(var i=0;i<res.rows.length;i++){
     var item=res.rows[i];
     if(this.dateIndex==0){
         if(item.date1==this.currentTime.replace(/-/g,'')){
           this.bussinessData=item;
     }
     }else{
         if(item.date1==dataTimeS){
           this.bussinessData=item;
     }
     }
   
   }
       }
 
  //  alert(1111)
  if(this.dataCurve==1){
    if(this.dateIndex1==0){
   for(var j=0;j<dataTimeS1.split(',').length;j++){
     dataQX1.push(parseInt(dataTimeS1.split(',')[j].split('-')[1])+"."+parseInt(dataTimeS1.split(',')[j].split('-')[2]))
     console.log(1)
     var flag=0;
          for(var i=0;i<res.rows.length;i++){
     var item=res.rows[i];
        // console.log(item.date1+"*"+dataTimeS1.split(',')[j].replace(/-/g,''))
     if(item.date1==dataTimeS1.split(',')[j].replace(/-/g,'')){
       flag=1;
      //  销售额
         if(item.sale_finish){
dataQX2.push(item.sale_finish)
         }else{
           dataQX2.push(0)
         }
          if(item.use_finish){
dataQX3.push(item.use_finish)
         }else{
           dataQX3.push(0)
         }
        //  消费人数
         if(item.use_rs){
consumption1.push(item.use_rs)
         }else{
           consumption1.push(0)
         }
          if(item.use_rc){
consumption2.push(item.use_rc)
         }else{
           consumption2.push(0)
         }
        //  成交人数
         if(item.sale_rs){
bargain1.push(item.sale_rs)
         }else{
           bargain1.push(0)
         }
          if(item.sale_rc){
bargain2.push(item.sale_rc)
         }else{
           bargain2.push(0)
         }
        //  dataQX2.push(item.sale_finish)
       }
         }
         if(flag==0){
          //   console.log(2)
          //  销售额
            dataQX2.push(0)
              dataQX3.push(0)
               //  消费人数
                  consumption1.push(0)
              consumption2.push(0)
              // 成交人数
                bargain1.push(0)
              bargain2.push(0)
         }
       
     }
  }else{
          console.log(dateTimes2)
 for(var j=0;j<dateTimes1.split(',').length;j++){
     console.log(dateTimes1.split(',')[j])
     var flag=0;
          for(var i=0;i<res.rows.length;i++){
     var item=res.rows[i];
        // console.log(item.date1+"*"+dataTimeS1.split(',')[j].replace(/-/g,''))
     if(item.date1==dateTimes1.split(',')[j]){
       flag=1;
      //  销售额
         if(item.sale_finish){
dataQX2.push(item.sale_finish)
         }else{
           dataQX2.push(0)
         }
          if(item.use_finish){
dataQX3.push(item.use_finish)
         }else{
           dataQX3.push(0)
         }
        //  消费人数
         if(item.use_rs){
consumption1.push(item.use_rs)
         }else{
           consumption1.push(0)
         }
          if(item.use_rc){
consumption2.push(item.use_rc)
         }else{
           consumption2.push(0)
         }
        //  成交人数
         if(item.sale_rs){
bargain1.push(item.sale_rs)
         }else{
           bargain1.push(0)
         }
          if(item.sale_rc){
bargain2.push(item.sale_rc)
         }else{
           bargain2.push(0)
         }
        //  dataQX2.push(item.sale_finish)
       }
         }
         if(flag==0){
          //   console.log(2)
          //  销售额
            dataQX2.push(0)
              dataQX3.push(0)
               //  消费人数
                  consumption1.push(0)
              consumption2.push(0)
              // 成交人数
                bargain1.push(0)
              bargain2.push(0)
         }
       
     }

  }
 }
  // console.log(dataQX1)
  //   console.log(dataQX2)
  //     console.log(dataQX3)
  //     console.log(bargain1)
  //     console.log(bargain2)
  }
     if(this.dataCurve==1){
       if(this.dateIndex1==1){
         var dates=[];
         for(var k=0;k<dateTimes2.split(',').length;k++){
           dates.push(dateTimes2.split(',')[k]);
           
         }
         dataQX1=dates;
       }
             this.lineChat(dataQX1,dataQX2,dataQX3)
  this.lineChat1(dataQX1,consumption1,consumption2);
  this.lineChat2(dataQX1,bargain1,bargain2);
       }
      if( this.selestoreNum==1){
        this.dataCurve=1;
        this.sinessData1();
        this.selestoreNum=0;
        console.log(5544544)
      }
      //  if(this.isHis==0){
      //      this.isHis=1;
      //      var dataRecords=localStorage.getItem("dataRecords");
      // if(dataRecords!=null){
      // // alert(12212)
      //   var dataRecords1=JSON.parse(dataRecords);
      //       this.dateIndex1=dataRecords1.dateIndex1;
      //       this.dataCurve=1;
      //         this.sinessData1();
      // }
      //  }
 


       })
   },
  //  前7天日期
  fun_date(aa,i){
        var date1 = new Date(),
        time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
        var date2 = new Date(date1);
        date2.setDate(date1.getDate()+aa);
        if(i==1){
          var time2 = date2.getFullYear()+""+((date2.getMonth()+1)<10?'0'+(date2.getMonth()+1):(date2.getMonth()+1))+""+(date2.getDate()<10?"0"+date2.getDate():date2.getDate());
        }else{
          var time2 = date2.getFullYear()+"-"+((date2.getMonth()+1)<10?'0'+(date2.getMonth()+1):(date2.getMonth()+1))+"-"+(date2.getDate()<10?"0"+date2.getDate():date2.getDate());
        }
        return time2;
    },
    // 折线图
    lineChat(data1,data2,data3){
      var myChart = echarts.init(document.getElementById("box"));
        myChart.clear();
    // option 里面的内容基本涵盖你要画的图表的所有内容
    var option = {
        // 定义样式和数据
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis'
        },
        // legend: {
        //     data: ['销售额', '消耗额']
        // },
    grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        calculable: true,
        xAxis: [{
            axisLabel: {
                interval: 0
            },
              splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 0,
           type: 'dotted'
      }
　　},
        "axisTick":{       //y轴刻度线
          "show":false
        },
            axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                },
                         "show":false
            },
            type: 'category',
            boundaryGap: false,
            data: function() {
                var list =data1;
                return list;
            }()
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                }
            },
              splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 1,
           type: 'dotted'
      }
　　},
            "axisLine":{       //y轴
          "show":false
        },
        "axisTick":{       //y轴刻度线
          "show":false
        }
        }],
                    //提示框
            tooltip: {
            	//触发类型：坐标轴触发
            	trigger: 'axis'
                // backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
                // color:'#1D1D1D',
                // borderWidth:'1',
                // borderColor:'#d6d6d6',
                // textStyle:{
                // 	color:'#1D1D1D',
                // }
            },
        series: [ {
            name: '销售额',
            type: 'line',
             symbol: 'none',
             smooth: 0.3,
             color: ['#3598FF'],
            data: data2
        },{
            name: '消耗额',
            type: 'line',
             symbol: 'none',
             smooth: 0.3,
             color: ['#FFA21E'],
            data:data3
        }]
    };
    myChart.setOption(option);
    },
    lineChat1(data1,data2,data3){
      var myChart = echarts.init(document.getElementById("box1"));
         myChart.clear();
    // option 里面的内容基本涵盖你要画的图表的所有内容
    var option = {
        // 定义样式和数据
        backgroundColor:'#fff',
        tooltip: {
            trigger: 'axis'
        },
        // legend: {
        //     data: ['销售额', '消耗额']
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        calculable: true,
   xAxis: [{
            axisLabel: {
                interval: 0
            },
        "axisTick":{       //y轴刻度线
          "show":false
        },
          splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 0,
           type: 'dotted'
      }
　　},
            axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                },
                         "show":false
            },
            type: 'category',
            boundaryGap: false,
            data: function() {
                var list = data1;
                return list;
            }()
        }],
        yAxis: [{
 
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                }
            },
            splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 1,
           type: 'dotted'
      }
　　},
            "axisLine":{       //y轴
          "show":false

        },
        "axisTick":{       //y轴刻度线
          "show":false
        }
        }],
          tooltip: {
            	//触发类型：坐标轴触发
            	trigger: 'axis'
                // backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
                // color:'#1D1D1D',
                // borderWidth:'1',
                // borderColor:'#d6d6d6',
                // textStyle:{
                //   color:'#1D1D1D'
                // }
            },
        series: [ {
            name: '消费人数',
            type: 'line',
             symbol: 'none',
             smooth: 0.3,
             color: ['#3598FF'],
            data:data2
        },{
            name: '消费人次',
            type: 'line',
             symbol: 'none',
             smooth: 0.3,
             color: ['#FFA21E'],
            data:data3
        }]
    };
    myChart.setOption(option);
    },
    lineChat2(data1,data2,data3){
      var myChart = echarts.init(document.getElementById("box2"));
         myChart.clear();
    // option 里面的内容基本涵盖你要画的图表的所有内容
    var option = {
        // 定义样式和数据
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis'
        },
        // legend: {
        //     data: ['消费人', '消耗额']
        // },
   grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        calculable: true,
 
 
        xAxis: [{
            axisLabel: {
                interval: 0
            },
              splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 0,
           type: 'dotted'
      }
　　},
        "axisTick":{       //y轴刻度线
          "show":false
        },
            axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                },
              "show":false
            },
            type: 'category',
            boundaryGap: false,
            data: function() {
                var list = data1;
                return list;
            }()
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                }
            },
              splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 1,
           type: 'dotted'
      }
　　},
            "axisLine":{       //y轴
          "show":false

        },
        "axisTick":{       //y轴刻度线
          "show":false
        }
        }],
          tooltip: {
            	//触发类型：坐标轴触发
            	trigger: 'axis'
                // backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
                // color:'#1D1D1D',
                // borderWidth:'1',
                // borderColor:'#d6d6d6',
                // textStyle:{
                // 	color:'#1D1D1D',
                // }
            },
        series: [{
            name: '成交人数',
            type: 'line',
             symbol: 'none',
             smooth: 0.3,
             color: ['#3598FF'],
            data: data2
        },{
            name: '成交人次',
            type: 'line',
             symbol: 'none',
             smooth: 0.3,
             color: ['#FFA21E'],
            data:data3
        }]
    };
    myChart.setOption(option);
    },
    // 水印
    watermark(settings) {
   //默认设置
    var defaultSettings={
        watermark_txt0:"",
        watermark_txt1:"",
        watermark_txt2:"",//根据本业务需求  有三行 换行显示  创建三个节点
        watermark_x:100,//水印起始位置x轴坐标
        watermark_y:200,//水印起始位置Y轴坐标
        watermark_rows:20,//水印行数
        watermark_cols:20,//水印列数
        watermark_x_space:100,//水印x轴间隔
        watermark_y_space:50,//水印y轴间隔
        watermark_color:'#aaa',//水印字体颜色
        watermark_alpha:0.2,//水印透明度
        watermark_fontsize:'15px',//水印字体大小
        watermark_font:'微软雅黑',//水印字体
        watermark_width:210,//水印宽度
        watermark_height:30,//水印长度
        watermark_angle:15//水印倾斜度数
    };
    //采用配置项替换默认值，作用类似jquery.extend
    if(arguments.length===1&&typeof arguments[0] ==="object" )
    {
        var src=arguments[0]||{};
        var key=''
        for(key in src) 
        {
            if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
                continue;
            else if(src[key])
                defaultSettings[key]=src[key];
        }
    }
 
    var oTemp = document.createDocumentFragment();
 
    //获取页面最大宽度
    var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
    var cutWidth = page_width*0.0150;
    var page_width=page_width-cutWidth;
    //获取页面最大高度
    var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight)+450;
    // var page_height = document.body.scrollHeight+document.body.scrollTop;
    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
        defaultSettings.watermark_cols = parseInt((page_width-defaultSettings.watermark_x+defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
    }
    var x;
    var y;
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
 
            var mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.className = 'mask_div';
            ///三个节点
            var span0 = document.createElement('div');
            span0.appendChild(document.createTextNode(defaultSettings.watermark_txt0));
            // var span1 = document.createElement('div');
            // span1.appendChild(document.createTextNode(defaultSettings.watermark_txt1));
            // var span2 = document.createElement('div');
            // span2.appendChild(document.createTextNode(defaultSettings.watermark_txt2));
            mask_div.appendChild(span0);
            // mask_div.appendChild(span1);
            // mask_div.appendChild(span2);
            //设置水印div倾斜显示
            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "absolute";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            mask_div.style.pointerEvents='none';//pointer-events:none  让水印不遮挡页面的点击事件
            //mask_div.style.border="solid #eee 1px";
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = "center";
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        };
    };
    document.getElementById('watermarks').appendChild(oTemp);
}
     
   },
   components: {
     Datetime
   },
    watch: {
	 '$store.state.jurisdiction': function () {
	  //你需要执行的代码
	  this.ispermission();
  }
    }
 }
</script>

<style scoped lang="less">
.container{
      padding-top: 2.3rem;
          padding-bottom:2rem;
     .menus{
           width:92%;
    position: fixed;
    top: 0;
    left: 0;
    padding:4%;
        z-index: 22222222;
    background-color: #fff;
    padding-bottom: 0;
     border-bottom: 10px solid #F7F7F7;
    .menu{
         width:100%;
      display: flex;
      border: 1px solid #4A77B0;
    border-radius: 5px;
      .item{
        flex: 1;
            text-align: center;
    font-size: 0.34rem;
    color: #4A77B0;
    padding: 0.12rem 0;
      }
      .br{
        border-right: 1px solid #4A77B0;
      }
      .active{
      background-color: #4A77B0;
      color: #fff;
    }
    }
  }
  .currentStore{
    position: relative;
    height: 1.1rem;
    .item{
      position: relative;
      font-size: 0.3rem;
      font-weight: 500;
          padding: 0.3rem 0.4rem;
          float: left;
          .line{
               position: absolute;
    background-color: #D6D6D6;
    width: 3px;
    height: 0.45rem;
    right: -0.06rem;
    top: 0.33rem;
          }
          .lines{
                background-color: #4978B0;
    width: 4px;
    height: 0.38rem;
    left: 0.08rem;
    top: 0.4rem;
          }
          img{
            width: 0.32rem;
             vertical-align: middle;
    margin-left: 0.05rem;
          }
    }
     .distance{
           position: absolute;
           text-align: center;
           right:0.3rem;
           font-size: 0.3rem;
           top: 0.32rem;
           img{
             width: 0.18rem;
             float:none;
           }
     }
     .tip{
          position: absolute;
    font-size: 0.24rem;
    font-weight: 500;
    background: #ffffff;
    border: 3px solid #ffffff;
    -webkit-box-shadow: 0px 2px 10px 0px rgba(121, 121, 121, 0.5);
    box-shadow: 0px 2px 10px 0px rgba(121, 121, 121, 0.5);
    border-radius: 2px;
    padding: 0.15rem 0.3rem;
    width: 72%;
    line-height: 0.5rem;
    top: 0.9rem;
    left: 0.7rem;
    z-index: 9999;
     }
  }
   .msk {
  position:fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
      z-index: 99999999;
}
.stores {
  width: 50%;
  position: fixed;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  top: 0;
      z-index: 999999999;
  right: 0;
  .taocan:last-child {
    margin-bottom: 1.2rem;
  }
  .taocan {
    .ts {
      font-size: 0.3rem;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      border-radius: 5px;
      padding: 0.36rem 0;
      color: #1c1c1c;
      margin-top: 0.5rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 2px 0px rgba(2, 0, 250, 0.4);
    }
    .active {
      color: #4A77B0;
    }
  }
  .regions {
    width: 100% !important;
  }
  .region p:last-child,
  .regions p:last-child {
    margin-bottom: 1.2rem;
  }
  .region,
  .regions {
    float: right;
    width: 45%;
    text-align: center;
    height: 100%;
    font-size: 0.3rem;
    overflow-y: auto;
    .active {
      color: #4A77B0;
    }
    p {
      margin-bottom: 0.6rem;
    }
    p:first-child {
      margin-top: 0.4rem;
    }
  }
  .btn {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 0.36rem;
    .determine,
    .cancel {
      width: 55%;
      height: 1rem;
      line-height: 1rem;
      float: left;
      background-color: #fff;
    }
    .determine {
      background-color: #4A77B0;
      color: #fff;
    }
    .cancel {
      width: 45%;
      background-color: #f2f2f2;
    }
  }
}
.selectDate{
  background-color: #f7f7f7;
    padding: 0.2rem 4%;
    padding-left: 0.7rem;
    height: 0.6rem;
    .item1{
      position: relative;
          padding: 0.08rem 0rem;
    width: 1.5rem;
    border: 1px solid #4A77B0;
    border-radius: 4px;
    font-size: 0.26rem;
    padding-left: 0.2rem;
        background-color: #fff;
    font-weight: 500;
        float: left;
            margin-top: 0.02rem;
    margin-right: 0.5rem;
    img{
        width: 0.25rem;
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    }
    .options{
          width: 1.73rem;
    position: absolute;
    left: -0.02rem;
    box-shadow: 0px 2px 10px 0px rgba(121,121,121,0.5);
     border-radius:0px 0px 4px 4px;
    top: 0.58rem;
        z-index:9999;
      .opItem{
       padding: 0.12rem 0.15rem;
    background-color: #fff;
        border-radius:2px 2px 0px 0px;
      }
       .opItem:last-child{
        border-radius:0px 0px 2px 2px;
      }
      .opItem.active{
        background-color: #4A77B0;
        color: #fff;
      }
    }

    .months{
          position: absolute;
    width: 2.6rem;
    box-shadow:0px 2px 10px 0px rgba(121,121,121,0.5);
    background-color: #fff;
    top: 0.58rem;
    z-index: 99999;
    border-radius: 2px;
    left: 0;
    .item{
       float: left;
    width: 33.3%;
    text-align: center;
    padding: 0.1rem 0;
    font-size: 0.26rem;
    font-weight: 500;
    
    }
     .item.active{
      background-color: #4A77B0;
    color: #fff;
    }
    }
    }
    .item2{
          padding-top: 0.12rem;
      font-size: 0.26rem;
    }
}
.bkr{
             border-bottom: 1px solid #f7f7f7;
  margin: 0.3rem 0.3rem;
    padding-bottom: 0.3rem;
       }
.anl{
  border-top: 1px solid #f7f7f7;
   border-bottom: 1px solid #f7f7f7;
       margin-top: 0.3rem;
       
   .alnflex{
     display: flex;
       margin: 0rem 0.3rem;
       margin-top: 0.3rem;
     .item{
       flex: 1;
       text-align: center;
      -webkit-box-flex: 1;
      font-size: 0.26rem;
      color: #999999;
      .alitem1{
        img{
             width: 0.15rem;
    transform: rotate(180deg);
    vertical-align: middle;
    margin-top: -0.08rem;
        }
        span{
          color: #ff0000;
        }
        .clx{
          color: #26CB15;
        }
      }
      .alitem2{
        font-weight: 500;
        font-size: 0.4rem;
        color: #1d1d1d;
      }
     }
   }
}
.curve{
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
      position: relative;
      .zxImg{
          position: relative;
      }
  .curves{
       position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    margin: 0 auto;
     .item{
              position: absolute;
    left: 50%;
    height: 30%;
    // width: 50%;
    margin: 0% 0 0 -25%;
        .items{
          position: relative;
              float: left;
                  margin-right:30px;
          span{
          width: 0.15rem;
    height: 0.15rem;
    background-color: #3598FF;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    font-size: 0.22rem;
    vertical-align: middle;
    margin-top: -0.03rem;
    
          }
          span.active{
            background-color: #FFA21E;
          }
        }
        .items:last-child{
          margin-right: 0;
        }
     }
  }
}
.clx1{
  color: #999999 !important;
}
}
 
</style>
