<template>
<div class="fangc watermarks" :class="{'notScroll':monthshow || yejishow || gangweishow}">
 <div class='container'>
     <!-- 菜单 -->
      <div class="menus">
             <div class="menu">
             <div  class="item br" @click="experience">经营概况</div>
              <div class="item " @click="analysis">客户分析</div>
               <div class="item active">员工分析</div>
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
    <!-- 员工成绩排名 -->
    <div id="watermarks" ref="watermarks">
<div class="alysis"> 
  <div class="currentStore"  style="padding: 0 4%;"> 
            <div class="item" style="font-size:0.34rem;font-weight:bold;padding-right: 0.2rem;"><span class="line lines"></span>员工成绩排名</div>
   </div>
      <div class="search_wrap">
      <div class="search">
           <img class="pic1" src="../../assets/images/icon_search@2x.png" @click="getcusinfo()"/>
           <input type="search" placeholder="请输入员工工号或姓名查找" id="search" v-model="custel"  @keyup.enter="getcusinfo()" >
           <img class="pic2" src="../../assets/images/icon_delete@2x.png" @click="deleteinfo()"/>
       </div> 
      </div>
      <div class="alysis_shuaixuan">
          <div class="alysis_yuefen" @click.stop="selmonthshow()">
            <span :class="monthvalue!=''?'active':''">{{monthvalue}}月</span>&nbsp&nbsp<em class="triangle_border_down"></em>
          </div>
          <div class="alysis_yeji" @click.stop="selyejishow()">
            <span :class="yejivalue!=''?'active':''">{{yejivalue}}</span>&nbsp&nbsp<em class="triangle_border_down"></em>            
          </div>
          <div class="alysis_gangwei" @click.stop="selgangweishow()">
             <span :class="gangweivalue!=''?'active':''">{{gangweivalue==''?'岗位':gangweivalue}}</span>&nbsp&nbsp<em class="triangle_border_down"></em> 
          </div>
      </div>
      <div class="fangline" v-show="!monthshow && !yejishow && !gangweishow"></div> 
      <div class="yuefen_xuanze_wrap">
        <div class="fangyue" v-show="monthshow" @click="fangyueme">
          <div class="yuefen_xuanze clear" >
              <div class="item"  v-for="(item,index) in yuearray" :key="index" @click.stop="selectmonth(item)" :class="{'active':item>monthvalue1,'active1':item==monthvalue}">{{item}}月</div>      
          </div>
       </div>
       </div>
       <div class="yeji_xuanze_wrap">
       <div class="fangyue" v-show="yejishow" @click="fangyueme">  
      <div class="yeji_xuanze clear" >
          <div class="xiaoshouyeji" @click="selectyeji('销售业绩')" :class="yejivalue=='销售业绩'?'active':''">
             销售业绩
          </div>
           <div class="xiaokaoyeji" @click="selectyeji('消耗业绩')" :class="yejivalue=='消耗业绩'?'active':''">
             消耗业绩
          </div>
      </div>
      </div>
      </div>
      <div class="gangwei_xuanze_wrap">
         <div class="fangyue" v-show="gangweishow" @click="fangyueme">
      <div class="gangwei_xuanze clear" >
          <div class="item" :class="gangweivalue==item.titleName?'active':''" v-for="(item,index) in gangweiarray" :key="index" @click="selectgangwei(item.titleName)">
             {{item.titleName}}
          </div>
      </div>
       </div>
      </div>    
</div>
<!-- 员工成绩排名列表 -->
<div class="yejiranking">
   <div class="yejiitem" @click="yejidetail(item.operid)" v-for="(item,index) in employeeData1" :key="index"  v-if="gangweivalue==''||item.titleName==gangweivalue">
      <div class="yejiitem_info clear">
           <div class="xuhao">
              <span>{{index+1}}</span>
           </div>
           <div class="name">
             {{item.opername}}
           </div>
           <div class="xian">
        
           </div>
           <div class="club">
              {{item.name1}}  
           </div>
            <div class="gangwei">
              <span class="yuan"></span>&nbsp&nbsp<span class="text">{{item.titleName}}</span>
           </div>
     </div>
     <div class="yejiitem_con clear">
       <div class="item fz1">
         <p class="numbe"><span>{{yejivalue=="销售业绩"?item.sale_finish:item.use_finish}}</span>元</p>
         <p class="name">{{yejivalue=="销售业绩"?'销售':'消耗'}}完成额</p>
       </div>
        <div class="item fz">
         <p class="numbe"><span>{{yejivalue=="销售业绩"?item.sale_task:item.use_task}}</span>元</p>
         <p class="name">{{yejivalue=="销售业绩"?'销售':'消耗'}}目标额</p>
       </div>
         <div class="item fz">
         <p class="numbe"><span>{{yejivalue=="销售业绩"?item.sale_rs:item.use_rs}}</span>人</p>
         <p class="name">{{yejivalue=="销售业绩"?'成交':'消费'}}人数&nbsp&nbsp&nbsp&nbsp</p>
       </div>
         <div class="item fz">
         	<div  style="width:1rem;height:1rem;position:absolute;top:-0.1rem;left:10%;">
					 <x-circle
						:percent="yejivalue=='销售业绩'?parseInt(item.sale_fin_bl1.replace(/%/g,''))>=100?100:parseInt(item.sale_fin_bl1.replace(/%/g,'')):parseInt(item.use_fin_bl1.replace(/%/g,''))>=100?100:parseInt(item.use_fin_bl1.replace(/%/g,''))"
						:trail-width = "6"
						:stroke-width="6"
						trail-color = "#F7F7F7"
						stroke-color="#FFAD39">
						<span style="color:#FFAD39;font-size:0.2rem">{{yejivalue=='销售业绩'?item.sale_fin_bl1:item.use_fin_bl1}}</span>
                     </x-circle>
					 </div>
       </div>
       <div class="item"></div>
     </div>
   </div>
   <div class="noDate" v-if="employeeData.length==0&&ksj">无数据</div>
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
    <transition name="slide" mode="out-in">
          <router-view></router-view>
  </transition>
 </div>
 
 </div>   
</template>

<script>
import { XSwitch,XCircle  } from 'vux'
import $ from "jquery";
 export default {
   data () {
     return {
         currentTime:this.config.formatDate(this.config.currentTime()),
         show:false,
      show1:false,
      show2:false,
      allStore:0,
      storesList:"",
      storeNameList:"",
        percent: 50,
      num:"",
      value:false,
      area:"",
      shopName1:"",
      yuearray:[1,2,3,4,5,6,7,8,9,10,11,12],
      gangweiarray:'',//岗位数据
      employeeData:[],//员工数据
      employeeData1:[],//员工数据
      monthvalue:'',
     monthvalue1:'',
     yejivalue:'销售业绩',
     gangweivalue:'',
       currentTime:this.config.formatDate(this.config.currentTime()),
       monthshow:false,
       yejishow:false,
       gangweishow:false,
       ksj:false,
       positionInfo:'',
       custel:''
        
     }
   },
    created(){
         this.club();
            this.getGxdict();
         this.computedmonth();
           this.getuserinfo();
   },
      mounted(){
this.ispermission();
     },
   computed:{

   },
   methods: {
      getuserinfo(){
    this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
      // console.log(JSON.stringify(res));
      this.positionInfo=res.rows[0];
     this.watermark({watermark_txt0:res.rows[0].realName+'-'+res.rows[0].userName+' '+this.currentTime});
    })
     },
    //  获取岗位
    getGxdict(){
     this.instance.$post('/rest/wx/customerGx/getGxDictTitleSale',{},res => {
       console.log(JSON.stringify(res));
       if(res.status){
          this.gangweiarray=res.rows;
       }
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
    // 获取员工分析数据
    analyze(){
      this.ksj=false;
      var months=this.monthvalue;
      if(months<10){
        months='0'+months;
      }
      var dates=this.config.formatDate(this.config.currentTime()).split('-')[0]+months;
        var data={
           clubCode:this.num+"",
           startDate:dates
        }
    
        if(this.custel!=''){
              var re = /^[0-9]+.?[0-9]*$/; 
        　if (re.test(this.custel)) {
           data.userId=this.custel;
　　}else{
   data.userName=this.custel;
}
         
        }
    this.instance.$post('/rest/wx/report/getEmployeeAnalysisReport',data,res => {
     //  console.log(JSON.stringify(res));
       if(res.status){
         this.ksj=true;
         this.employeeData=res.rows;
         var ds=[];
             this.employeeData1=[];
         this.employeeData.forEach(element => {
            if(!element.use_finish){
element.use_finish=0;
            }
            if(!element.use_task){
element.use_task=0;
            }
             if(!element.sale_finish){
element.sale_finish=0;
            }
            if(!element.sale_task){
element.sale_task=0;
            }
            if(element.sale_fin_bl1.replace(/%/g,'')!=0){
                    this.employeeData1.push(element);
            }else{
              ds.push(element);
            }
         });
           this.employeeData1.sort(this.compare('sale_fin_bl1'))
           ds.sort(this.compare1('sale_finish'));
           console.log(JSON.stringify(ds))
             this.employeeData1 = this.employeeData1.concat(ds);
         //  console.log(JSON.stringify(this.employeeData))
       }
    })
    },
     compare(d){
    return function(a,b){
        var value1 = a[d].replace(/%/g,'');
        var value2 = b[d].replace(/%/g,'');
        // console.log(value2+"**"+value1)
              return value2-value1;
    

    }
},
   compare1(d){
    return function(a,b){
        var value1 = a[d]
        var value2 = b[d]
        // console.log(value2+"**"+value1)
              return value2-value1;
    

    }
},
    // 搜索
    getcusinfo(){
this.analyze();
    },
     //进页面计算月份
     computedmonth(){
       var month = this.config.formatDate(this.config.currentTime()).split('-')[1];
       var month1 = month.split('')[0];
       if(month1==0){
         this.monthvalue1 = month.split('')[1];
         this.monthvalue = month.split('')[1];       
       }else{
           this.monthvalue1 = month;
          this.monthvalue = month;
       }
     
     },
     //选择月份
     selmonthshow(){
       this.monthshow = ! this.monthshow ;
           this.yejishow = false;
             this.gangweishow = false;
             if(this.monthshow){
               this.onTouchMove(true);
             }else{
               this.onTouchMove(false);
             }
     },
     selectmonth(value){
       if(value>this.monthvalue1){
         return;
       }
       this.monthvalue = value;
       this.monthshow = false;
       this.analyze();
    },
    //选择业绩
     selyejishow(){
       this.yejishow = ! this.yejishow ;
        this.monthshow = false;
        this.gangweishow = false;
     },
     selectyeji(value){
       this.yejivalue = value;
       this.yejishow = false;
        var ds=[];
             this.employeeData1=[];
        // 排序
       if(this.yejivalue=='销售业绩'){
          this.employeeData.forEach(element => {
            if(element.sale_fin_bl1.replace(/%/g,'')!=0){
                    this.employeeData1.push(element);
            }else{
              ds.push(element);
            }
         });
           this.employeeData1.sort(this.compare('sale_fin_bl1'))
           ds.sort(this.compare1('sale_finish'));
             this.employeeData1 = this.employeeData1.concat(ds);
       }else{
          this.employeeData.forEach(element => {
            if(element.use_fin_bl1.replace(/%/g,'')!=0){
                    this.employeeData1.push(element);
            }else{
              ds.push(element);
            }
         });
           this.employeeData1.sort(this.compare('use_fin_bl1'))
           ds.sort(this.compare1('use_finish'));
             this.employeeData1 = this.employeeData1.concat(ds);
       }
     },
      //选择岗位
       selgangweishow(){
       this.gangweishow = ! this.gangweishow ;
        this.yejishow = false;
        this.monthshow = false;
     },
     selectgangwei(value){
       if(this.gangweivalue==value){
         this.gangweivalue='';
       }else{
                this.gangweivalue = value;
       }
       this.gangweishow = false;
     },
     fangyueme(){
        this.yejishow = false ;
        this.monthshow = false;
        this.gangweishow = false; 
     },
     deleteinfo(){
       this.custel = '';
       this.analyze();
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
     
            this.analyze();
            // this.area = res.rows[0].area;
          }
       })
    },
     onTouchMove(inFlag) {
       
       var preHandler=function(e){e.preventDefault();};
  if (inFlag) {
    document.body.addEventListener('touchmove', preHandler, false);
  } else {
   document.body.removeEventListener('touchmove', preHandler, false);
  }
},
       experience(){
     this.$router.replace({
                name: "experience"
              });
     },
     analysis(){
            this.$router.replace({
                name: "customerAnalysis"
              });
     },
      yejidetail(userid){
        this.$router.push({ 
                name: "personalAchievement", 
                query:{
                  id:userid,
                  clubid:this.num
                }              
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
        this.num=clubId;
        this.show = false;
        this.custel='';
          var data={
          sysClubCode:clubId,
          shopName:shopname
        }
           localStorage.setItem("storeInfo",JSON.stringify(data));
                  this.addCookie("storeTime",10800,10800); 
        this.analyze();
    },
     change(clubid, area, clubName) {
      this.num = clubid;
      this.area = area;
      this.allStore=0;
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
    var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);
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
    document.body.appendChild(oTemp);
      }
   },
   components: {
     XSwitch,
     XCircle 
   },
    watch: {
    $route(to, from) {
      console.log(from)
     if(from.name=='personalAchievement'){
   setTimeout(()=>{
  this.watermark({watermark_txt0:this.positionInfo.realName+'-'+this.positionInfo.userName+' '+this.currentTime});
         },10)
     }
    },
    '$store.state.jurisdiction': function () {
	  //你需要执行的代码
	  this.ispermission();
  }
  },
  destroyed(){
    $(".mask_div").remove();
  }
 }
</script>

<style scoped lang="less">
.notScroll {
    overflow: hidden!important; 
}
.container{
      padding-top: 2.4rem;
    padding-bottom: 2rem;
    background: #f7f7f7;
    height: 70%;
    overflow-y: auto;
     .menus{
           width:92%;
    position: fixed;
    top: 0;
    left: 0;
    padding:4%;
        z-index: 2;
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
  .bF{
         border-bottom: 1px solid #f7f7f7; 
  }
  .currentStore{
    position: relative;
    overflow: hidden;
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
       span{
         font-size: 0.24rem;
        font-weight: bold;
          margin-top: 0.15rem;
    display: inline-block;

       }
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
  padding: 0 1rem;
  overflow: hidden;
 .proportion{
   padding-top: 1.1rem;
   font-size: 0.28rem;
   .proportion1{
     span.square{
       display: inline-block;
       width: 0.25rem;
       height:0.25rem;
       background-color: #897EFF;
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
 }
}
.search_wrap{padding:0 4%;}
 .search{width:100%;height:0.7rem;background:rgba(247,247,247,1);
border-radius:35px;position: relative;overflow: hidden;}
  .search input{width:70%; height:0.7rem;background:rgba(247,247,247,1);position: absolute;bottom:0.02rem;left:9%;padding-left: 2%;outline: none;font-size: 0.3rem;}
  .search img{width:0.36rem;height:0.36rem;}
  .search .pic1{position: absolute;top:0.15rem;left:3%;}
  .search .pic2{position: absolute;top:0.15rem;right:3%;}
    .triangle_border_down{
	      	
	      	display: inline-block;
			    width:0;
			    height:0;
			    border-width:8px 5px 0;
			    border-style:solid;
			    border-color:#1D1D1D transparent transparent;/*灰 透明 透明 */
			   /*margin:40px auto;*/
			    position:relative;
      }
       .triangle_border_active{
	      	
	      	display: inline-block;
			    width:0;
			    height:0;
			    border-width:0 5px 8px 5px;
			    border-style:solid;
			    border-color: transparent transparent #4A77B0 transparent;
			    // margin:40px auto;
			    position:relative;
      }
       .alysis{background: #fff;}         
      .alysis_shuaixuan{padding:0 4%;height:0.8rem;margin-top:0.3rem;}
      .alysis_shuaixuan span{font-size:0.28rem;color:#1D1D1D;}
      .alysis_shuaixuan .active{color:#4A77B0;}
      .alysis_yuefen{float: left;width:33%;}
       .alysis_yeji{float: left;}
        .alysis_gangwei{float: right;}
        .clear:after{content:'';display:block;clear:both;}
        .clear{zoom:1;}  
    .yuefen_xuanze_wrap{position: relative;}
     .fangyue{position: absolute;top:0;left:0;bottom: 0;right: 0;height:400px; background: rgba(0, 0, 0, 0.3); z-index:101;}    
    .yuefen_xuanze{width:100%;background: #fff;position: absolute;top:-0.01rem;left:0;z-index:100;}
    .yuefen_xuanze .item{float: left;
    text-align: center;
    width: 33.33%;
    margin-bottom: 0.3rem;}
    .yuefen_xuanze .active{color: rgb(153, 153, 153)!important;}
    .yuefen_xuanze .active1{color: #4A77B0!important;} 
    .fangline{height:0.3rem;width: 100%;background: #f7f7f7;} 
    .yeji_xuanze_wrap{position: relative;}    
    .yeji_xuanze{padding:4%;width:100%;background: #fff; position: absolute;top:-0.01rem;left:0;z-index:100;}
    .yeji_xuanze .active{color:#4A77B0;}
    .xiaoshouyeji{float:left;width: 50%;}
    .xiaokaoyeji{float:left;width: 50%;}
    .gangwei_xuanze_wrap{position: relative;}  
      .gangwei_xuanze{width:92%;background: #fff;padding:0 4%;position: absolute;top:-0.01rem;left:0;z-index:100;}
     .gangwei_xuanze .active{color:#4A77B0;}
   .gangwei_xuanze .item{float: left;
    width: 50%;
    margin-bottom: 0.3rem;} 
    .yejiranking{background: #f7f7f7;}
    .yejiitem{width:90%;margin:0 auto;
height:1.8rem;
background:rgba(255,255,255,1);
border-radius:10px;
padding:0.1rem 2% 0;
margin-bottom: 0.3rem;
}
.yejiitem_info{height:0.4rem;line-height: 0.4rem;}
.yejiitem_info .xuhao{margin-top:0.04rem; float: left;border-radius: 2px; width:6%;margin-right: 4%; height:0.3rem;line-height: 0.26rem;text-align: center;background: #FFA21E;}
.yejiitem_info .xuhao span{font-size: 0.2rem;color:#FFFFFF;}
.yejiitem_info .name{width:18%;float: left;font-size: 0.3rem;color:#1D1D1D; overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap}
.yejiitem_info .xian{margin-top:0.06rem;float: left;width:3px;
height:0.26rem;
background:rgba(214,214,214,1);}
.yejiitem_info .club{float: left;font-size: 0.24rem;color:#989898;margin-left: 4%;}
.yejiitem_info .gangwei{float: left;font-size: 0.22rem;color:#1D1D1D;margin-left: 17%;}
@media screen and (max-width: 373px) {
   .gangwei{
margin-left: 8% !important;
   }
   .yejiitem_con .fz{
         margin-left: 3% !important;
   }
}
 .gangwei .yuan{
   margin-bottom: 0.04rem;
   width:5px;display: inline-block;
height:5px;
background:rgba(74,119,176,1);
border-radius:50%;}
.gangwei .text{}
.yejiitem_con{margin-top:0.3rem;}
.yejiitem_con .numbe{font-size: 0.26rem;color:#1D1D1D;}
.yejiitem_con .name{font-size: 0.24rem;color:#999999;}
.yejiitem_con .item{float:left;}
.yejiitem_con .fz1{margin-left: 11%;}
.yejiitem_con .fz{margin-left: 6%;position: relative;}
.noDate{
  text-align: center;
    color: #999;
    padding-top: 2rem;
}
#watermarks{
  // overflow: hidden;
  // height: 100%;
  // overflow-y: auto;
  // -webkit-overflow-scrolling: touch;
}

</style>
