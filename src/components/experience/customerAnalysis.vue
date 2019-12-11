<template>
 <div class='container watermarks'>
     <!-- 菜单 -->
      <div class="menus">
              <div class="menu">
             <div  class="item" @click="experience">经营概况</div>
              <div class="item active">客户分析</div> 
               <div class="item"  @click="staff">员工分析</div>
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
    <!-- 客户分析 -->
<div class="alysis" @click="cancleTip(1)"> 
  <div class="currentStore bF"  style="padding: 0 4%;height: 1.1rem;"> 
            <div class="item" style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>客户分析<img src="../../assets/images/my_menu_question@2x.png" alt=""  @click.stop="tipShow(1)"/></div>
            <div class="tip" v-show="tip1">
          <p>日活：最近一天消费人数，以手机号码去重统计；</p>
          <p>周活：最近一周消费人数，以手机号码去重统计；</p>
           <p>月活：最近一月消费人数，以手机号码去重统计；</p>
        </div>
          </div>
          <div class="column">
       <div id="chart1" style="width:5rem;height:300px;"></div>
      <div class="proportion">
         <div class="proportion1"><span class="square" style="background-color:#1AD885;"></span><span>新增</span>{{analyze.length>0?statistics(1):0}}人</div>
        <div class="proportion1"><span class="square"></span><span>活跃</span>{{analyze.length>0?statistics(2):0}}人</div>
        <div class="proportion1"><span class="square" style="background-color:#FFA21E;"></span><span>沉睡</span>{{analyze.length>0?statistics(3):0}}人</div>
        <div class="proportion1"><span class="square" style="background-color:#F16A1B;"></span><span>流失</span>{{analyze.length>0?statistics(4):0}}人</div>
      </div>
      </div>
       <div class="anl">
           <div class="alnflex bkr">
             <div class="item" style="border-right: 1px solid #f7f7f7;">
               <p class="alitem1">日活</p>
               <p class="alitem2">{{analyze.length>0?statistics(5):0}}人</p>
             </div>
             <div class="item" style="    border-right: 1px solid #f7f7f7;">
               <p class="alitem1">周活</p>
               <p class="alitem2">{{analyze.length>0?statistics(6):0}}人</p>
             </div>
              <div class="item">
               <p class="alitem1">月活</p>
               <p class="alitem2">{{analyze.length>0?statistics(7):0}}人</p>
             </div>
           </div>
      </div>
</div>
<!-- 年龄分布 -->
  <div class="distribution" >
      <div class="currentStore bF" > 
        <div class="title">
            <div class="item"  style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>年龄分布
            </div>
             <div class="lookBl" @click.stop="Click1"><x-switch title="" v-model="value" ></x-switch><span>查看比例</span></div></div>
             <!-- 柱状图 -->
             <div class="histogram" > 
              
             <div class="curves" >
             <div class="item">
               <div class="items"  @click.stop="selectCoursePurpose(1)"><img :src="Listids.indexOf(1)>=0?gouxuanImgActive1:gouxuanImg1" alt="" >男</div>
               <div class="items"  @click.stop="selectCoursePurpose(2)"><img :src="Listids.indexOf(2)>=0?gouxuanImgActive2:gouxuanImg2" alt="" >女</div>
               <div class="items"  @click.stop="selectCoursePurpose(3)"><img :src="Listids.indexOf(3)>=0?gouxuanImgActive3:gouxuanImg3" alt="" >未知</div>
             </div>
           </div> 
            <div class="hisTitle" v-show="!show1">共{{totalPeople}}人</div>
               <div id="box" style="width:100%;height:400px;" :class="!show1?'btstyle':''"></div>
             <div class="equinox"  v-show="!show1">
               <div class="eqitem1">
                 <div class="items"> <span class="circles" ></span><span>20以下</span></div>
                     <div class="items"><span class="circles" style="background-color:#3CD927;"></span><span>31-40</span></div>
                     <div class="items"><span class="circles" style="background-color:#AC27D9;"></span><span>60以上</span></div>
               </div>
                   <div class="eqitem2">
                   <div class="items"><span class="circles" style="background-color:#FFA21E;"></span><span>20-24</span></div>
                   <div class="items"><span class="circles" style="background-color:#27B5D9;"></span><span>41-50</span></div>
               </div>
                  <div class="eqitem3">
                   <div class="items"><span class="circles" style="background-color:#B8D927;"></span><span>25-30</span></div>
                   <div class="items"><span class="circles" style="background-color:#278CD9;"></span><span>51-60</span></div>
               </div>
                 </div>
            </div>
          </div>
  </div> 
  <!-- 消费能力 -->
   <div class="distribution"  @click="cancleTip(2)">
      <div class="currentStore bF"  style="padding-bottom:0.6rem;"> 
        <div class="title">
            <div class="item" style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>消费能力<img src="../../assets/images/my_menu_question@2x.png" alt=""  @click.stop="tipShow(2)"/>
            </div>
              <div class="tip" v-show="tip2">
          <p>消费能力：最近一年的交款金额统计;</p>
        </div>
             <div class="lookBl" @click.stop="Click2"><x-switch title="" v-model="value1"></x-switch><span>查看比例</span></div></div>
                     <div class="curves" >
             <div class="item">
               <div class="items"  @click.stop="selectCoursePurpose1(1)"><img :src="Listids1.indexOf(1)>=0?gouxuanImgActive1:gouxuanImg1" alt="" >男</div>
               <div class="items"  @click.stop="selectCoursePurpose1(2)"><img :src="Listids1.indexOf(2)>=0?gouxuanImgActive2:gouxuanImg2" alt="" >女</div>
               <div class="items"  @click.stop="selectCoursePurpose1(3)"><img :src="Listids1.indexOf(3)>=0?gouxuanImgActive3:gouxuanImg3" alt="" >未知</div>
             </div>
           </div> 
                   <div class="histogram" > 
                        <div class="hisTitle" v-show="!show2">共{{totalPeople1}}人</div>
                   
                       <div id="box1" style="width:100%;height:400px;margin-top: -0.3rem;" :class="!show2?'btstyle':''"></div>
                  <div class="equinox"  v-show="!show2">
               <div class="eqitem1" style="width: 25%;">
                 <div class="items"> <span class="circles" ></span><span>5000以下</span></div>
                     <div class="items"><span class="circles" style="background-color:#3CD927;"></span><span>3~5万元</span></div>
                     <div class="items"><span class="circles" style="background-color:#AC27D9;"></span><span>18~28万元</span></div>
               </div>
                   <div class="eqitem2" style="width: 40%;text-align: left;">
                     <div class="uhp" style="padding-left: 20%;">
                   <div class="items"><span class="circles" style="background-color:#FFA21E;"></span><span>5001~1万元</span></div>
                   <div class="items"><span class="circles" style="background-color:#27B5D9;"></span><span>5~10万元</span></div>
                    <div class="items"><span class="circles" style="background-color:#D9279C;"></span><span>28~38万元</span></div></div>
               </div>
                  <div class="eqitem3" style="width: 25%;">
                   <div class="items"><span class="circles" style="background-color:#B8D927;"></span><span>1~3万元</span></div>
                   <div class="items"><span class="circles" style="background-color:#278CD9;"></span><span>10~18万元</span></div>
                      <div class="items"><span class="circles" style="background-color:#F6FF00;"></span><span>38万元以上</span></div>
               </div>
                 </div>
              </div>
          </div>
  </div> 
  <!-- 消费频次 -->
   <div class="distribution"  @click="cancleTip(3)">
      <div class="currentStore bF"  style="padding-bottom:2rem;"> 
        <div class="title">
            <div class="item" style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>月消费频次<img src="../../assets/images/my_menu_question@2x.png" alt=""  @click.stop="tipShow(3)"/>
           
            </div>
             <div class="tip" v-show="tip3">
          <p>月消费频次：最近3个月消费总次数/3</p>
        </div>
            <!-- <div class="dateMenu">
               <div :class="dateIndex==0?'item active':'item'" @click="selectTime(0)">周</div>
                <div :class="dateIndex==1?'item active':'item'" @click="selectTime(1)">月</div>
             </div> -->
           </div>
            <div class="curves" >
             <div class="item">
               <div class="items"  @click.stop="selectCoursePurpose2(1)"><img :src="Listids2.indexOf(1)>=0?gouxuanImgActive1:gouxuanImg1" alt="" >男</div>
               <div class="items"  @click.stop="selectCoursePurpose2(2)"><img :src="Listids2.indexOf(2)>=0?gouxuanImgActive2:gouxuanImg2" alt="" >女</div>
               <div class="items"  @click.stop="selectCoursePurpose2(3)"><img :src="Listids2.indexOf(3)>=0?gouxuanImgActive3:gouxuanImg3" alt="" >未知</div>
             </div>
           </div> 
                 <div id="box2" style="width:100%;height:400px;margin-top: -0.3rem;"></div>
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
import { XSwitch,XCircle } from 'vux'
 export default {
   data () {
     return {
         currentTime:this.config.formatDate(this.config.currentTime()),
         show:false,
      show1:true,
      show2:true,
      allStore:0,
      dateIndex:0,
      storesList:"",
      storeNameList:"",
        percent: 50,
      num:"",
      value:false,
      value1:false,
      area:"",
      shopName1:"",
      tip1:false,
       tip2:false,
        tip3:false,
        analyze:[],
        Listids:[1,2,3],
        Listids1:[1,2,3],
        Listids2:[1,2,3],
        totalPeople:0,
         totalPeople1:0,
        gouxuanImg1:require('../../assets/images/men_nor_icon@2x.png'),
        gouxuanImg2:require('../../assets/images/woman_nor_icon@2x.png'),
        gouxuanImg3:require('../../assets/images/unknow_nor_icon@2x.png'),
        gouxuanImgActive1:require('../../assets/images/men_icon@2x.png'),
        gouxuanImgActive2:require('../../assets/images/woman_icon@2x.png'),
        gouxuanImgActive3:require('../../assets/images/unknown_icon@2x.png')
     }
   },
    created(){
           
               this.club(); 
         this.getuserinfo();
   },
     mounted(){
this.ispermission();
     },
//     mounted(){
//          this.chartHis();
//       var selectRecords=localStorage.getItem("selectRecords");
//       if(selectRecords!=null){
//         var selectRecords1=JSON.parse(selectRecords);
//         if(selectRecords1.value){
//           this.value=true;
//           this.show1=false;
//           this.pieHistograms();
//         }else{
//            this.value=false;
//           this.show1=true;
//             this.cascadingHistograms();
//         }
//         if(selectRecords1.value1){
//           this.value1=true;
//           this.show2=false;
//           this.pieHistograms1();
//         }else{
//            this.value1=false;
//           this.show2=true;
//             this.monolayerHistograms();
//         }

//        this.dateIndex=selectRecords1.dateIndex;
//        this.monolayerHistograms1();
    
//       }else{
//              this.cascadingHistograms();
// this.monolayerHistograms();
// this.monolayerHistograms1();
//       }
 
//    },
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
     //   所有门店
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
         this.analysisReport();
            // this.area = res.rows[0].area;
          }
       })
    },
    // 客户分析
    analysisReport(){
         this.instance.$post('/rest/wx/report/getCustomerAnalysisReport',{
           clubCode:this.num+"",
           startDate:this.config.formatDate(this.config.currentTime()).split('-')[0]+this.config.formatDate(this.config.currentTime()).split('-')[1]
         },res => {
   console.log(JSON.stringify(res));
        if (res.status) {
          this.analyze=res.rows;
                this.chartHis();
                var selectRecords=localStorage.getItem("selectRecords");
      if(selectRecords!=null){
        var selectRecords1=JSON.parse(selectRecords);
        if(selectRecords1.value){
          this.value=true;
          this.show1=false;
          this.pieHistograms();
        }else{
           this.value=false;
          this.show1=true;
            this.cascadingHistograms();
        }
        if(selectRecords1.value1){
          this.value1=true;
          this.show2=false;
          this.pieHistograms1();
        }else{
           this.value1=false;
          this.show2=true;
            this.monolayerHistograms();
        }

       this.dateIndex=selectRecords1.dateIndex;
       this.monolayerHistograms1();
    
      }else{
             this.cascadingHistograms();
this.monolayerHistograms();
this.monolayerHistograms1();
      }
        //  console.log(data1)
              //   this.cascadingHistograms();
              //  this.monolayerHistograms();
              //  this.monolayerHistograms1();
          }
       })
    },
    //统计
    statistics(id){
      var total=0;
       this.analyze.forEach(element => {
         if(id==1){
            if(element.act_add!=undefined){
            total+=element.act_add;
         }
         }else if(id==2){
            if(element.act_act!=undefined){
            total+=element.act_act;
         }
         }else if(id==3){
            if(element.act_sleep!=undefined){
            total+=element.act_sleep;
         }
         }else if(id==4){
            if(element.act_flow!=undefined){
            total+=element.act_flow;
         }
         }else if(id==5){
            if(element.act_day!=undefined){
            total+=element.act_day;
         }
         }else if(id==6){
            if(element.act_week!=undefined){
            total+=element.act_week;
         }
         }else if(id==7){
            if(element.act_month!=undefined){
            total+=element.act_month;
         }
         }
        
       });
       return total;
    },
    // 计算百分比
   GetPercent(num, total) {
    /// <param name="num">当前数</param>
    /// <param name="total">总数</param>
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00)+"%";
   },
      experience(){
     this.$router.replace({
                name: "experience"
              });
     },
     tipShow(id){
      if(id==1){
        this.tip1=true;
      }else if(id==2){
 this.tip2=true;
      } if(id==3){
        this.tip3=true;
      }
     },
     cancleTip(id){
if(id==1){
        this.tip1=false;
      }else if(id==2){
 this.tip2=false;
      } if(id==3){
        this.tip3=false;
      }
     },
     staff(){
       this.$router.replace({
                name: "staffAnalysis"
        });
     },
      showStore(){
        this.show=true;
     },
      cancel() {
      this.show = false;
    },
     throughCity(){
        this.allStore=1;
    },
     selectShop(shopname, clubId, sysClubCode) {
      this.shopName1 = shopname;
        this.show = false;
        this.num=sysClubCode;
        var data={
          sysClubCode:clubId,
          shopName:shopname
        }
           localStorage.setItem("storeInfo",JSON.stringify(data))
            this.addCookie("storeTime",10800,10800); 
        this.analysisReport();
    },
     change(clubid, area, clubName) {
      this.num = clubid;
      this.area = area;
      this.allStore=0;
    },
    selectTime(id){
      this.dateIndex=id;
      this.monolayerHistograms1();
        var data={
        'value':this.value,
         'value1':this.value1,
          'dateIndex':this.dateIndex
      }
   localStorage.setItem("selectRecords",JSON.stringify(data))
    },
    // 开关
      Click1() {
        this.show1=!this.show1;
      this.value=!this.value;
      if(this.value){
           this.pieHistograms();
      }else{
        this.cascadingHistograms();
      }
      var data={
        'value':this.value,
         'value1':this.value1,
          'dateIndex':this.dateIndex
      }
   localStorage.setItem("selectRecords",JSON.stringify(data))
    },
      Click2() {
        this.show2=!this.show2;
      this.value1=!this.value1;
      if(this.value1){
           this.pieHistograms1();
      }else{
        this.monolayerHistograms();
      }
     var data={
        'value':this.value,
         'value1':this.value1,
          'dateIndex':this.dateIndex
      }
   localStorage.setItem("selectRecords",JSON.stringify(data))
    },
    // 环形图
    chartHis(){
   var chart1 = echarts.init(document.getElementById("chart1"));
	    chart1.clear();
	// 圆环图各环节的颜色
	var color = ['#1AD885','#00A0E9', '#FFA21E', '#F16A1B'];
  var datac1=0,datac2=0,datac3=0,datac4=0;
    this.analyze.forEach(element => {
            if(element.act_add!=undefined){
            datac1+=element.act_add;
         }
            if(element.act_act!=undefined){
            datac2+=element.act_act;
         }
            if(element.act_sleep!=undefined){
            datac3+=element.act_sleep;
         }
            if(element.act_flow!=undefined){
            datac4+=element.act_flow;
         }
        
       });
	// 圆环图各环节的名称和值(系列中各数据项的名称和值)
	var data =[{  
                    name:'新增',
	                value:datac1
	            },{  
                    name:'活跃',
	                value:datac2
	            },{
                name:'沉睡',
	                value: datac3
	            },{
                name:'流失',
	                value: datac4
	            }];
	  
	// 指定图表的配置项和数据
	var option = {
		
	    // 提示框
	    tooltip: {
	        show: true,                 // 是否显示提示框
	        formatter: '{b}</br>人数:{c}'      // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
	    },
	    
	    // 系列列表
	    series: [{
	        name: '圆环图系列名称',         // 系列名称
	        type: 'pie',                    // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
	        radius: ['30%', '40%'],         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
	        hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
	        color: color,                   // 圆环图的颜色
	        label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
	            normal: {
	                show: true,             // 是否显示标签[ default: false ]
	                position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                  formatter: '{d}%',  // 标签内容
                  textStyle:{
                    color:'#1d1d1d'
                  }
	            }
	        },
	        labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
	            normal: {
	                show: true,             // 是否显示视觉引导线。
	                length: 5,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
	                length2:5
	            }
	        },
	        data: data                      // 系列中的数据内容数组。
	    }]
	};
	
	// 使用刚指定的配置项和数据显示图表
	chart1.setOption(option)
    },
    // 层叠柱状图
    cascadingHistograms(){
      var myChart = echarts.init(document.getElementById("box"));
      myChart.clear();
    var dataMouth = ['20以下','20-24','25-30','31-40','41-50','51-60','60以上'];//x轴
   var data1=[],data2=[],data3=[];
             this.analyze.forEach(element => {
                if(element.fldsex==1){
                  if(element.age_20x){
                    data1.push(element.age_20x)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_2024){
                    data1.push(element.age_2024)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_2530){
                    data1.push(element.age_2530)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_3140){
                    data1.push(element.age_3140)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_4150){
                    data1.push(element.age_4150)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_5160){
                    data1.push(element.age_5160)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_60s){
                    data1.push(element.age_60s)
                  }else{
                      data1.push(0)
                  }
                }
                 if(element.fldsex==2){
                  if(element.age_20x){
                    data2.push(element.age_20x)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_2024){
                    data2.push(element.age_2024)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_2530){
                    data2.push(element.age_2530)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_3140){
                    data2.push(element.age_3140)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_4150){
                    data2.push(element.age_4150)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_5160){
                    data2.push(element.age_5160)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_60s){
                    data2.push(element.age_60s)
                  }else{
                      data2.push(0)
                  }
                }
                 if(element.fldsex==3){
                  if(element.age_20x){
                    data3.push(element.age_20x)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_2024){
                    data3.push(element.age_2024)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_2530){
                    data3.push(element.age_2530)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_3140){
                    data3.push(element.age_3140)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_4150){
                    data3.push(element.age_4150)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_5160){
                    data3.push(element.age_5160)
                  }else{
                      data3.push(0)
                  }
                  if(element.age_60s){
                    data3.push(element.age_60s)
                  }else{
                      data3.push(0)
                  }
                }
             });
    //显示数据，可修改
    // var data1 = [1100, 1606, 2154, 1658, 1643, 641,345];//男
    // var data2 = [3000, 4587, 3841, 3214, 2811, 1532, 1089];//女
    //  var data3 = [350, 606, 977, 543, 888,553, 550];//未知
    //总计
    var n='',n1='',n2='';
    for(var j=0;j<this.Listids.length;j++){
        if(this.Listids[j]==1){
                n=1;
        }
        if(this.Listids[j]==2){
                n1=2;
        }
         if(this.Listids[j]==3){
              n2=3;
        }
    }
    if(n==''){
      data1=[0,0,0,0,0,0,0]
    }
    if(n1==''){
      data2=[0,0,0,0,0,0,0]
    }
    if(n2==''){
      data3=[0,0,0,0,0,0,0]
    }
    var dataTotal = function() {
        var datas = [];
        for (var i = 0; i < data1.length; i++) {
            datas.push(data1[i] + data2[i]+data3[i]);
        }
        return datas;
    }();
   var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {          
                type : 'shadow'     
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : dataMouth,
                 "axisLine":{       //y轴
          "show":false
        },
        "axisTick":{       //y轴刻度线
          "show":false
        },
                    axisLabel:{
               interval: 0
            },
                splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 0,
           type: 'dotted'
      }
　　}
            }
        ],
        yAxis : [
            {
                type : 'value',
            // interval: 10000,
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
            },
      
            
        ],
        series : [
            {
                name:'未知',
                type:'bar',
                stack:'sum',
                 barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#D6D6D6'
                    }
                },
                data:data3
            },
            {
                name:'男',
                type:'bar',
                stack:'sum',
                barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#00A0E9'
                    }
                },
                data:data1
            },
             {
                name:'女',
                type:'bar',
                stack:'sum',
                barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#FF688D'
                    }
                },
                data:data2
            },
            {
                name: '总计',
                type: 'bar',
                stack: 'sum',
                label: {
                    normal: {
                        offset:['50', '80'],
                        show: true,
                        position: 'insideBottom',
                        formatter:'{c}',
                        textStyle:{ color:'#000' }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(128, 128, 128, 0)'
                    }
                },
                data: dataTotal
            }
 
        ]
    };
myChart.setOption(option);
    },
    // 饼图
    pieHistograms(){
              var myChart = echarts.init(document.getElementById("box"));
              myChart.clear();
               var data1=[],data2=[],data3=[];
             this.analyze.forEach(element => {
                if(element.fldsex==1){
                  if(element.age_20x){
                    data1.push(element.age_20x)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_2024){
                    data1.push(element.age_2024)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_2530){
                    data1.push(element.age_2530)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_3140){
                    data1.push(element.age_3140)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_4150){
                    data1.push(element.age_4150)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_5160){
                    data1.push(element.age_5160)
                  }else{
                      data1.push(0)
                  }
                   if(element.age_60s){
                    data1.push(element.age_60s)
                  }else{
                      data1.push(0)
                  }
                }
                 if(element.fldsex==2){
                  if(element.age_20x){
                    data2.push(element.age_20x)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_2024){
                    data2.push(element.age_2024)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_2530){
                    data2.push(element.age_2530)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_3140){
                    data2.push(element.age_3140)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_4150){
                    data2.push(element.age_4150)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_5160){
                    data2.push(element.age_5160)
                  }else{
                      data2.push(0)
                  }
                   if(element.age_60s){
                    data2.push(element.age_60s)
                  }else{
                      data2.push(0)
                  }
                }
                 if(element.fldsex==3){
                  if(element.age_20x){
                    data3.push(element.age_20x)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_2024){
                    data3.push(element.age_2024)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_2530){
                    data3.push(element.age_2530)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_3140){
                    data3.push(element.age_3140)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_4150){
                    data3.push(element.age_4150)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_5160){
                    data3.push(element.age_5160)
                  }else{
                      data3.push(0)
                  }
                   if(element.age_60s){
                    data3.push(element.age_60s)
                  }else{
                      data3.push(0)
                  }
                }
             });
    //显示数据，可修改
    // var data1 = [1100, 1606, 2154, 1658, 1643, 641,345];//男
    // var data2 = [3000, 4587, 3841, 3214, 2811, 1532, 1089];//女
    //  var data3 = [350, 606, 977, 543, 888,553, 550];//未知

       var n='',n1='',n2='';
    for(var j=0;j<this.Listids.length;j++){
        if(this.Listids[j]==1){
                n=1;
        }
        if(this.Listids[j]==2){
                n1=2;
        }
         if(this.Listids[j]==3){
              n2=3;
        }
    }
    if(n==''){
      data1=[0,0,0,0,0,0,0]
    }
    if(n1==''){
      data2=[0,0,0,0,0,0,0]
    }
    if(n2==''){
      data3=[0,0,0,0,0,0,0]
    }

    //总计
    var btData=[];
    var that=this;
     that.totalPeople=0;
    var dataTotal =function () {
        var datas = [];
        for (var i = 0; i < data1.length; i++) {
            datas=(data1[i]?data1[i]:0) + (data2[i]?data2[i]:0)+(data3[i]?data3[i]:0);
           
                        that.totalPeople+=datas;
            if(i==0){ 
               var data={value:datas,name:'20以下',itemStyle:{normal:{color:'#D82743'}}}
               btData.push(data);
            }else if(i==1){
              var data={value:datas,name:'20-24',itemStyle:{normal:{color:'#FFA21E'}}}
               btData.push(data);
            }else if(i==2){
              var data={value:datas,name:'25-30',itemStyle:{normal:{color:'#B8D927'}}}
               btData.push(data);
            }else if(i==3){
              var data={value:datas,name:'31-40',itemStyle:{normal:{color:'#3CD927'}}}
               btData.push(data);
            }else if(i==4){
              var data={value:datas,name:'41-50',itemStyle:{normal:{color:'#27B5D9'}}}
               btData.push(data);
            }else if(i==5){
              var data={value:datas,name:'51-60',itemStyle:{normal:{color:'#278CD9'}}}
               btData.push(data);
            }else if(i==6){
              var data={value:datas,name:'60以上',itemStyle:{normal:{color:'#AC27D9'}}}
               btData.push(data);
            }
               
        }
    }();
    console.log(btData)
              var option ={  
            tooltip : {  
                trigger: 'item',  
                formatter: "{a} <br/>{b} : {c} 人"  
            },  
             grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
            calculable : true,  
            series : [  
                {  
                    name:'年龄分布',  
                    type:'pie',  
                    radius : '50%',//饼图的半径大小  
                    label:{            //饼图图形上的文本标签
                            normal:{
                                show:true,
                                position:'outside', //标签的位置
                                textStyle : {
                                    fontWeight : 300 ,
                                    fontSize : 10   //文字的字体大小
                                },
                                formatter:'{d}%'

                                
                            }
                        },
                    data:btData
                }  
            ]  
        };
              myChart.setOption(option);
    },
     pieHistograms1(){
              var myChart = echarts.init(document.getElementById("box1"));
              myChart.clear();
                var data1=[],data2=[],data3=[];
             this.analyze.forEach(element => {
                  if(element.level_5kx){
                    if(element.fldsex==1){
                       data1.push(element.level_5kx)
                    }else if(element.fldsex==2){
                       data2.push(element.level_5kx)
                    }else{
                       data3.push(element.level_5kx)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_5k1W){
                    if(element.fldsex==1){
                       data1.push(element.level_5k1W)
                    }else if(element.fldsex==2){
                       data2.push(element.level_5k1W)
                    }else{
                       data3.push(element.level_5k1W)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_1w3w){
                     if(element.fldsex==1){
                       data1.push(element.level_1w3w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_1w3w)
                    }else{
                       data3.push(element.level_1w3w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_3w5w){
                       if(element.fldsex==1){
                       data1.push(element.level_3w5w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_3w5w)
                    }else{
                       data3.push(element.level_3w5w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_5w10w){
                       if(element.fldsex==1){
                       data1.push(element.level_5w10w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_5w10w)
                    }else{
                       data3.push(element.level_5w10w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_10w18w){
                       if(element.fldsex==1){
                       data1.push(element.level_10w18w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_10w18w)
                    }else{
                       data3.push(element.level_10w18w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_18w28w){
                       if(element.fldsex==1){
                       data1.push(element.level_18w28w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_18w28w)
                    }else{
                       data3.push(element.level_18w28w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                    if(element.level_28w38w){
                        if(element.fldsex==1){
                       data1.push(element.level_28w38w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_28w38w)
                    }else{
                       data3.push(element.level_28w38w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                    if(element.level_38ws){
                        if(element.fldsex==1){
                       data1.push(element.level_38ws)
                    }else if(element.fldsex==2){
                       data2.push(element.level_38ws)
                    }else{
                       data3.push(element.level_38ws)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
             });
    //显示数据，可修改
    // var data1 = [1100, 1606, 2154, 1658, 1643, 641,345];//男
    // var data2 = [3000, 4587, 3841, 3214, 2811, 1532, 1089];//女
    //  var data3 = [350, 606, 977, 543, 888,553, 550];//未知

       var n='',n1='',n2='';
    for(var j=0;j<this.Listids1.length;j++){
        if(this.Listids1[j]==1){
                n=1;
        }
        if(this.Listids1[j]==2){
                n1=2;
        }
         if(this.Listids1[j]==3){
              n2=3;
        }
    }
    if(n==''){
      data1=[0,0,0,0,0,0,0,0,0]
    }
    if(n1==''){
      data2=[0,0,0,0,0,0,0,0,0]
    }
    if(n2==''){
      data3=[0,0,0,0,0,0,0,0,0]
    }

    //总计
    var btData=[];
    var that=this;
     that.totalPeople1=0;
    var dataTotal =function () {
        var datas = [];
        for (var i = 0; i < data1.length; i++) {
          datas=(data1[i]?data1[i]:0) + (data2[i]?data2[i]:0)+(data3[i]?data3[i]:0);
                        that.totalPeople1+=datas;
            if(i==0){ 
               var data={value:datas,name:'5000以下',itemStyle:{normal:{color:'#D82743'}}}
               btData.push(data);
            }else if(i==1){
              var data={value:datas,name:'5001~1万元',itemStyle:{normal:{color:'#FFA21E'}}}
               btData.push(data);
            }else if(i==2){
              var data={value:datas,name:'1~3万元',itemStyle:{normal:{color:'#B8D927'}}}
               btData.push(data);
            }else if(i==3){
              var data={value:datas,name:'3~5万元',itemStyle:{normal:{color:'#3CD927'}}}
               btData.push(data);
            }else if(i==4){
              var data={value:datas,name:'5~10万元',itemStyle:{normal:{color:'#27B5D9'}}}
               btData.push(data);
            }else if(i==5){
              var data={value:datas,name:'10~18万元',itemStyle:{normal:{color:'#278CD9'}}}
               btData.push(data);
            }else if(i==6){
              var data={value:datas,name:'18~28万元',itemStyle:{normal:{color:'#AC27D9'}}}
               btData.push(data);
            }else if(i==7){
              var data={value:datas,name:'28~38万元',itemStyle:{normal:{color:'#D9279C'}}}
               btData.push(data);
            }else if(i==8){
              var data={value:datas,name:'38万元以上',itemStyle:{normal:{color:'#F6FF00'}}}
               btData.push(data);
            }
               
        }
    }();
    console.log(btData)
              var option ={  
            tooltip : {  
                trigger: 'item',  
                formatter: "{a} <br/>{b} : {c} 人"  
            },  
             grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
            calculable : true,  
            series : [  
                {  
                    name:'消费能力',  
                    type:'pie',  
                    radius : '50%',//饼图的半径大小  
                    label:{            //饼图图形上的文本标签
                            normal:{
                                show:true,
                                position:'outside', //标签的位置
                                textStyle : {
                                    fontWeight : 300 ,
                                    fontSize : 10   //文字的字体大小
                                },
                                formatter:'{d}%'

                                
                            }
                        },
                    data:btData
                }  
            ]  
        };
              myChart.setOption(option);
    },
    // 消费能力柱状图
    monolayerHistograms(){
      var myChart = echarts.init(document.getElementById("box1"));
      myChart.clear();
    var dataMouth = ['5千以下','5001~1万','1~3万','3~5万','5~10万','10~18万','18~28万','28~38万','38万以上'];//x轴
         
    //显示数据，可修改
    // var data1 = [4200, 2256, 2643, 1768, 1457, 654,512,102,12];
     var data1=[],data2=[],data3=[];
             this.analyze.forEach(element => {
                  if(element.level_5kx){
                    if(element.fldsex==1){
                       data1.push(element.level_5kx)
                    }else if(element.fldsex==2){
                       data2.push(element.level_5kx)
                    }else{
                       data3.push(element.level_5kx)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_5k1W){
                    if(element.fldsex==1){
                       data1.push(element.level_5k1W)
                    }else if(element.fldsex==2){
                       data2.push(element.level_5k1W)
                    }else{
                       data3.push(element.level_5k1W)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_1w3w){
                     if(element.fldsex==1){
                       data1.push(element.level_1w3w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_1w3w)
                    }else{
                       data3.push(element.level_1w3w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_3w5w){
                       if(element.fldsex==1){
                       data1.push(element.level_3w5w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_3w5w)
                    }else{
                       data3.push(element.level_3w5w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_5w10w){
                       if(element.fldsex==1){
                       data1.push(element.level_5w10w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_5w10w)
                    }else{
                       data3.push(element.level_5w10w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_10w18w){
                       if(element.fldsex==1){
                       data1.push(element.level_10w18w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_10w18w)
                    }else{
                       data3.push(element.level_10w18w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_18w28w){
                       if(element.fldsex==1){
                       data1.push(element.level_18w28w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_18w28w)
                    }else{
                       data3.push(element.level_18w28w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                    if(element.level_28w38w){
                        if(element.fldsex==1){
                       data1.push(element.level_28w38w)
                    }else if(element.fldsex==2){
                       data2.push(element.level_28w38w)
                    }else{
                       data3.push(element.level_28w38w)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                    if(element.level_38ws){
                        if(element.fldsex==1){
                       data1.push(element.level_38ws)
                    }else if(element.fldsex==2){
                       data2.push(element.level_38ws)
                    }else{
                       data3.push(element.level_38ws)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
             });
              var n='',n1='',n2='';
    for(var j=0;j<this.Listids1.length;j++){
        if(this.Listids1[j]==1){
                n=1;
        }
        if(this.Listids1[j]==2){
                n1=2;
        }
         if(this.Listids1[j]==3){
              n2=3;
        }
    }
    if(n==''){
      data1=[0,0,0,0,0,0,0,0,0]
    }
    if(n1==''){
      data2=[0,0,0,0,0,0,0,0,0]
    }
    if(n2==''){
      data3=[0,0,0,0,0,0,0,0,0]
    }
               var dataTotal = function() {
        var datas = [];
        for (var i = 0; i < data1.length; i++) {
            datas.push(data1[i] + data2[i]+data3[i]);
        }
        return datas;
    }();
      var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {          
                type : 'shadow'     
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : dataMouth,
                 "axisLine":{       //y轴
          "show":false
        },
        "axisTick":{       //y轴刻度线
          "show":false
        },
                    axisLabel:{
               interval: 0,
               fontSize:8
            },
                splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 0,
           type: 'dotted'
      }
　　}
            }
        ],
        yAxis : [
            {
                type : 'value',
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
            },
      
            
        ],
        series : [
            {
                name:'未知',
                type:'bar',
                stack:'sum',
                 barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#D6D6D6'
                    }
                },
                data:data3
            },
            {
                name:'男',
                type:'bar',
                stack:'sum',
                barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#00A0E9'
                    }
                },
                data:data1
            },
             {
                name:'女',
                type:'bar',
                stack:'sum',
                barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#FF688D'
                    }
                },
                data:data2
            },
            {
                name: '总计',
                type: 'bar',
                stack: 'sum',
                label: {
                    normal: {
                        offset:['50', '80'],
                        show: true,
                        position: 'insideBottom',
                        formatter:'{c}',
                        textStyle:{ color:'#000' }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(128, 128, 128, 0)'
                    }
                },
                data: dataTotal
            }
 
        ]
    };
myChart.setOption(option);
    },
    // 月消费频次
     monolayerHistograms1(){
      var myChart = echarts.init(document.getElementById("box2"));
      myChart.clear();
          var dataMouth = ['1次','2-3次','4-5次','6-8次','9-12次','12次以上'];//x轴
      // if(this.dateIndex==0){
      //      var dataMouth = ['1次','2-3次','4-5次','6-8次','9-12次','12次以上'];//x轴
      //       var data1 = [3012, 4672, 3876, 2543,2167, 1654,1143];
      // }else{
      //      var dataMouth = ['1-5次','6-10次','11-20次','21-40次','41-60次','61-80次','90次'];//x轴
      //       var data1 = [2965, 4672, 2576, 2453,1588, 421,87];
      // }
      var data1=[],data2=[],data3=[];
             this.analyze.forEach(element => {
                  if(element.level_C1){
                    if(element.fldsex==1){
                       data1.push(element.level_C1)
                    }else if(element.fldsex==2){
                       data2.push(element.level_C1)
                    }else{
                       data3.push(element.level_C1)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_C23){
                    if(element.fldsex==1){
                       data1.push(element.level_C23)
                    }else if(element.fldsex==2){
                       data2.push(element.level_C23)
                    }else{
                       data3.push(element.level_C23)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_C45){
                     if(element.fldsex==1){
                       data1.push(element.level_C45)
                    }else if(element.fldsex==2){
                       data2.push(element.level_C45)
                    }else{
                       data3.push(element.level_C45)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_C68){
                       if(element.fldsex==1){
                       data1.push(element.level_C68)
                    }else if(element.fldsex==2){
                       data2.push(element.level_C68)
                    }else{
                       data3.push(element.level_C68)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_C912){
                       if(element.fldsex==1){
                       data1.push(element.level_C912)
                    }else if(element.fldsex==2){
                       data2.push(element.level_C912)
                    }else{
                       data3.push(element.level_C912)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                   if(element.level_C12s){
                       if(element.fldsex==1){
                       data1.push(element.level_C12s)
                    }else if(element.fldsex==2){
                       data2.push(element.level_C12s)
                    }else{
                       data3.push(element.level_C12s)
                    }
                  }else{
                    if(element.fldsex==1){
                       data1.push(0)
                    }else if(element.fldsex==2){
                       data2.push(0)
                    }else{
                       data3.push(0)
                    }
                  }
                  
             });
              var n='',n1='',n2='';
    for(var j=0;j<this.Listids2.length;j++){
        if(this.Listids2[j]==1){
                n=1;
        }
        if(this.Listids2[j]==2){
                n1=2;
        }
         if(this.Listids2[j]==3){
              n2=3;
        }
    }
    if(n==''){
      data1=[0,0,0,0,0,0]
    }
    if(n1==''){
      data2=[0,0,0,0,0,0]
    }
    if(n2==''){
      data3=[0,0,0,0,0,0]
    }
               var dataTotal = function() {
        var datas = [];
        for (var i = 0; i < data1.length; i++) {
            datas.push(data1[i] + data2[i]+data3[i]);
        }
        return datas;
    }();
      var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {          
                type : 'shadow'     
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : dataMouth,
                 "axisLine":{       //y轴
          "show":false
        },
        "axisTick":{       //y轴刻度线
          "show":false
        },
                    axisLabel:{
               interval: 0
            },
                splitLine: {
        show: true,
        lineStyle:{
           color: ['#d6d6d6'],
           width: 0,
           type: 'dotted'
      }
　　}
            }
        ],
        yAxis : [
            {
                type : 'value',
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
            },
      
            
        ],
        series : [
            {
                name:'未知',
                type:'bar',
                stack:'sum',
                 barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#D6D6D6'
                    }
                },
                data:data3
            },
            {
                name:'男',
                type:'bar',
                stack:'sum',
                barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#00A0E9'
                    }
                },
                data:data1
            },
             {
                name:'女',
                type:'bar',
                stack:'sum',
                barWidth : 30,
                itemStyle:{
                    normal:{
                        color:'#FF688D'
                    }
                },
                data:data2
            },
            {
                name: '总计',
                type: 'bar',
                stack: 'sum',
                label: {
                    normal: {
                        offset:['50', '80'],
                        show: true,
                        position: 'insideBottom',
                        formatter:'{c}',
                        textStyle:{ color:'#000' }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(128, 128, 128, 0)'
                    }
                },
                data: dataTotal
            }
 
        ]
    };
 
    //显示数据，可修改
myChart.setOption(option);
    },
         selectCoursePurpose(id){
             var ids = this.Listids.indexOf(id);
              if(ids>=0){
                if(this.Listids.length>1){
                    this.Listids.splice(ids,1);
                }
                  //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
              }else{
                  //选中该按钮
                  this.Listids.push(id);
              }
               if(this.value){
           this.pieHistograms();
      }else{
        this.cascadingHistograms();
      }
        
              
       },
       selectCoursePurpose1(id){
             var ids = this.Listids1.indexOf(id);
              if(ids>=0){
                if(this.Listids1.length>1){
                    this.Listids1.splice(ids,1);
                }
                  //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
              }else{
                  //选中该按钮
                  this.Listids1.push(id);
              }
               if(this.value1){
           this.pieHistograms1();
      }else{
        this.monolayerHistograms();
      }  
       },
          selectCoursePurpose2(id){
             var ids = this.Listids2.indexOf(id);
              if(ids>=0){
                if(this.Listids2.length>1){
                    this.Listids2.splice(ids,1);
                }
                  //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
              }else{
                  //选中该按钮
                  this.Listids2.push(id);
              }
        this.monolayerHistograms1();
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
     XSwitch,
     XCircle
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
      padding-top: 2.4rem;
    padding-bottom: 2rem;
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
      img{
            width: 0.32rem;
             vertical-align: middle;
    margin-left: 0.05rem;
          }
    }
  }
  .bF{
         border-bottom: 1px solid #f7f7f7; 
  }
  .currentStore{
    padding-bottom: 0.1rem;
    position: relative;
   .btnMsk{
     position: absolute;
     width: 50%;
     height: 1rem;
     right: 0;
     
   }
    .title{
      position: relative;
      border-bottom: 1px solid #f7f7f7;
              padding: 0 3%;
    height: 1.1rem;
               .dateMenu{
                      width: 22%;
    display: -webkit-box;
    display: flex;
        float: right;
    margin-top: 0.32rem;
    border: 1px solid #4A77B0;
                .item{
                  -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
        font-size: 0.24rem;
    color: #4A77B0;
    padding: 0.02rem 0;
                }
                .item.active{
                   background-color: #4A77B0;
      color: #fff;
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
          .people{
            font-size: 0.24rem;
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
     .lookBl{
       float: right;
           padding-top: 0.20rem;
              //  margin-right: 1rem;
       span{
         font-size: 0.24rem;
        font-weight: bold;
          margin-top: 0.15rem;
    display: inline-block;

       }
     }
      .histogram {
      .hisTitle{
        font-size:0.3rem;
        padding:0.2rem 0.3rem;
font-weight:500;
margin-top: 0.8rem;
      }
      .equinox{
        overflow: hidden;
        font-size: 0.24rem;
        padding-bottom: 0.2rem;
            .items{
          span.circles{
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            background-color:#D82743;
            border-radius: 50%;
            margin-right: 0.2rem;
          }
        }
        .eqitem1{
       width: 20%;
    float: left;
    padding-left: 6%;
       
        }
         .eqitem2{
              width: 50%;
               float: left;
                   text-align: center;
         }
         .eqitem3{
           width: 20%;
            float: left;
         }
        
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
.column{
  padding: 0 0.6rem;
  position: relative;
      margin-bottom: -1.5rem;
  overflow: hidden;
  width: 82%;
 .proportion{
    font-size: 0.28rem;
    position: absolute;
    top: 0.32rem;
    right: 0.6rem;
    line-height: 0.6rem;
   .proportion1{
     span.square{
       display: inline-block;
       width: 0.25rem;
       height:0.25rem;
       background-color: #00A0E9;
       vertical-align: middle;
       border-radius: 2px;
       margin-top: -0.05rem;
     }
     span{
           margin-right: 0.35rem;
     }
   }
 }
}
.anl{
  border-top: 1px solid #f7f7f7;
   border-bottom: 1px solid #f7f7f7;
       margin-top: 0.3rem;
      padding: 0.3rem 0;
   .alnflex{
     display: flex;
     .item{
       flex: 1;
       text-align: center;
      -webkit-box-flex: 1;
      font-size: 0.26rem;
          padding: 0.5rem 0;
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
 .circle,.circle1{
   width: 2rem;
   height: 2rem;
   margin-top: 0.8rem;
      transform: rotate(-90deg);
      float: left;
    margin-right: 1rem;
 }
 .circle1{
   position: absolute;
    transform: rotate(-165deg);
    top: 2.3rem;
 }
 .distribution{
    border-top: 10px solid #f7f7f7;
    .curves{
       position: absolute;
    left: 0;
    right: 0;
    top: 1.2rem;
    margin: 0 auto;
    z-index: 999;
     .item{
              position: absolute;
    left: 50%;
    height: 30%;
    // width: 50%;
    font-size: 0.24rem;
    margin: 0% 0 0 -25%;
        .items{
          position: relative;
              float: left;
                  margin-right:20px;
                  text-align: center;
          span{
              background-color: #00A0E9;
    display: inline-block;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    font-size: 0.22rem;
    vertical-align: middle;
        margin-top: 0.06rem;
    width: 0.3rem;
    height: 0.3rem;
          }
          span.active{
            background-color: #FFA21E;
          }
          img{
            width: 0.3rem;
            height: 0.3rem;
                margin-top: -0.05rem;
    margin-right: 0.1rem;
          }
        }
        .items:last-child{
          margin-right: 0;
        }
     }
  }
 }
 #box,#box1,#box2{
   margin-top: 0.1rem;
 }
 .btstyle{
margin-top: -1.6rem !important;
margin-bottom: -1rem !important;
 }
 #chart1{
       margin-left: -1.2rem;
           margin-top: -1.2rem;

 }
}
 
</style>
