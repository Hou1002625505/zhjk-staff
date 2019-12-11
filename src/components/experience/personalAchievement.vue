<template>
 <div class='container pos'>
<div class="info">
   <div class="headimg"><img :src="userInfo.headimg" alt="" @click="amplification"></div>
   <div class="name">
       <p>{{userInfo.userRealName}}</p>
       <p>{{userInfo.poisition}}（{{userInfo.userName}}）</p>
   </div>
   <div class="total">
       <div class="item">
           <p>{{userInfo.newCustomer}}</p>
            <p>今日新增</p>
       </div>
        <div class="item">
           <p>{{userInfo.visitCustomer}}</p>
            <p>待回访</p>
       </div>
        <div class="item">
           <p>{{userInfo.visitCustomered}}</p>
            <p>回访记录</p>
       </div>
   </div>
</div>
<div class="masp">
<div class="marketing" @click="cancel" style="margin-top:0;">
    <div class="capacity">
        <div class="item">销售执行力</div>
         <div class="item">
             <div class="selectDate" @click.stop="showmonth">{{selectmon}}<img src="../../assets/images/arrowx.png" alt=""> </div>
                  <div class="months" v-show="show2" style="width: 2.4rem;">
              <div :class="selectMonths==item?'item active':'item'" :style="{'color':item>currentTime.split('-')[1]?'#999999':''}" @click.stop="selectMonth(item)" v-for="(item,index) in months" :key="index">{{parseInt(item)}}</div>
            </div>
         </div>
    </div>
    <div class="salesComplete">
        <div class="item">
            <p>销售完成额</p>
            <p>{{personalData.sale_finish!=undefined?personalData.sale_finish:'0'}}</p>
        </div>
         <div class="item">
            <p>销售目标额</p>
            <p>{{personalData.sale_task!=undefined?personalData.sale_task:'0'}}</p>
        </div>
         <div class="item">
            <p>完成比例</p>
            <p>{{personalData.sale_fin_bl1!=undefined?personalData.sale_fin_bl1:'0'}}</p>
        </div>
    </div>
     <div class="salesComplete">
        <div class="item">
            <p>成交人数</p>
            <p>{{personalData.sale_rs!=undefined?personalData.sale_rs:'0'}}</p>
        </div>
         <div class="item">
            <p>成交人次</p>
            <p>{{personalData.sale_rc!=undefined?personalData.sale_rc:'0'}}</p>
        </div>
         <div class="item">
            <p></p>
            <p></p>
        </div>
    </div>
     <div class="salesComplete">
        <div class="item">
            <p>消耗完成额</p>
            <p>{{personalData.use_finish!=undefined?personalData.use_finish:'0'}}</p>
        </div>
         <div class="item">
            <p>消耗目标额</p>
            <p>{{personalData.use_task!=undefined?personalData.use_task:'0'}}</p>
        </div>
         <div class="item">
            <p>完成比例</p>
            <p>{{personalData.use_fin_bl1!=undefined?personalData.use_fin_bl1:'0'}}</p>
        </div>
    </div>
      <div class="salesComplete">
        <div class="item">
            <p>消费人数</p>
            <p>{{personalData.use_rs!=undefined?personalData.use_rs:'0'}}</p>
        </div>
         <div class="item">
            <p>消费人次</p>
            <p>{{personalData.use_rc!=undefined?personalData.use_rc:'0'}}</p>
        </div>
         <div class="item">
            <p></p>
            <p></p>
        </div>
    </div>
</div>

<div class="marketing" @click="cancel1">
    <div class="capacity">
        <div class="item">业绩能力（元）</div>
         <div class="item">
             <div class="selectDate"  @click.stop="selectDate">{{dateIndex==0?'半年':'一年'}} <img src="../../assets/images/arrowx.png" alt=""> </div>
                   <div class="options" v-show="show1">
           <div :class="dateIndex==0?'opItem active':'opItem'" @click.stop="selectTime(0)">半年</div>
           <div :class="dateIndex==0?'opItem':'opItem active'"  @click.stop="selectTime(1)">一年</div>
         </div>
         </div>
    </div>
     <div class="curves">
             <div class="item">
               <div class="items"><span class="circle"></span>销售完成额</div>
               <div class="items"><span class="circle active"></span>销售目标额</div>
             </div>
           </div>
                   <div id="box" style="width:100%;height:300px;"></div>
                    <div class="curves">
             <div class="item">
               <div class="items"><span class="circle"></span>消耗完成额</div>
               <div class="items"><span class="circle active"></span>消耗目标额</div>
             </div>
           </div>
                   <div id="box1" style="width:100%;height:300px;"></div>
</div>
<div class="marketing" @click="cancel1" style="overflow: hidden;">
    <div class="capacity">
        <div class="item">客户分布</div>
         <div class="item" style="text-align: right;">{{userInfo.totalCustomer!=undefined?userInfo.totalCustomer:0}}人 </div>
    </div>
    <div class="doughnut">
        <img src="../../assets/images/doughnut@2x.png" alt="">
        <div class="dynamic">
            <p>{{userInfo.act_act!=undefined?userInfo.act_act:0}}人</p>
            <p>活跃</p>
        </div>
         <div class="dynamic1">
            <p>{{userInfo.newCustomer!=undefined?userInfo.newCustomer:0}}人</p>
            <p>新增</p>
        </div>
         <div class="dynamic2">
            <p>{{userInfo.act_sleep!=undefined?userInfo.act_sleep:0}}人</p>
            <p>沉睡</p>
        </div>
         <div class="dynamic3">
            <p>{{userInfo.act_flow!=undefined?userInfo.act_flow:0}}人</p>
            <p>流失</p>
        </div>
    </div>
    <div class="description">
        <div class="subscription">
            <span></span>活跃
        </div>
         <div class="subscription">
            <span style="background-color:#1AD885"></span>新增
        </div>
         <div class="subscription">
            <span style="background-color:#FFA21E"></span>沉睡
        </div>
         <div class="subscription">
            <span style="background-color:#F16A1B"></span>流失
        </div>
    </div>
</div>
</div>
    <previewer :list="list" ref="previewer" ></previewer>
 </div>
</template>

<script>
import $ from "jquery";
import { Previewer } from 'vux';
 export default {
   data () {
     return {
        currentTime:this.config.formatDate(this.config.currentTime()),
        selectMonths:this.config.formatDate(this.config.currentTime()).split('-')[1],
        selectmon:'本月',
             months:['01','02','03','04','05','06','07','08','09','10','11','12'],
          show2:false,
          show1:false,
          dateIndex:0,
          userid:this.$route.query.id,
          clubid:this.$route.query.clubid,
          personalData:'',
          dataArrays:[],
            list: [
           
        ],
          userInfo:''
     }
   },
   created(){
      this.getfindIndex();
      this.analyzeCertain();
    //   this.getuserinfo();
   },
   methods: {
    //      getuserinfo(){
    // this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
    //   // console.log(JSON.stringify(res));
    //  this.watermark({watermark_txt0:res.rows[0].realName+'-'+res.rows[0].userName+' '+this.currentTime});
    // })
    //  },
        getfindIndex(){
    this.instance.$post('/rest/wx/customerGx/findIndexDataByUserName',{
        userName:this.userid
    },res => {
       console.log(JSON.stringify(res));
       if(res.status){
           this.userInfo=res.rows[0];
           var head= {src:this.userInfo.headimg}
           this.list.push(head)
       }
    })
        },
         // 头像点击
    amplification(){
this.$refs.previewer.show(0)
    },
         // 获取某个员工分析数据
    analyzeCertain(){
        var dateArray='',data1=[];
        for(var i=1;i<=12;i++){
            if(this.dateIndex==0){
                if(data1.length<6){
                    if(parseInt(this.config.formatDate(this.config.currentTime()).split('-')[1])<=6){
                         if(i==parseInt(this.config.formatDate(this.config.currentTime()).split('-')[1])){
                   data1.push("本月")
                }else{
                      data1.push(i+"月")
                }
                    }else{
                        if(i>6){
                               if(i==parseInt(this.config.formatDate(this.config.currentTime()).split('-')[1])){
                   data1.push("本月")
                }else{
                      data1.push(i+"月")
                } 
                        }
                    }
               
             }
            }else{
                if(i==parseInt(this.config.formatDate(this.config.currentTime()).split('-')[1])){
                   data1.push("本月")
                }else{
                      data1.push(i+"月")
                }
            }
         
            var d=i;
            if(d<10){
                d='0'+i;
            }
            if(dateArray==''){
                dateArray+=this.config.formatDate(this.config.currentTime()).split('-')[0]+d;
            }else{
                dateArray+=','+this.config.formatDate(this.config.currentTime()).split('-')[0]+d;
            }
        }
        this.dataArrays=data1;
        console.log(data1)
        var data={
           clubCode:this.clubid,
           startDate:dateArray,
           userId:this.userid
        }
     this.instance.$post('/rest/wx/report/getEmployeeAnalysisReport',data,res => {
       console.log(JSON.stringify(res));
         this.personalData='';
       if(res.status){
           var data2=[],data3=[],data4=[],data5=[];
           for(var j=0;j<res.rows.length;j++){
               var item=res.rows[j];
               if(item.date1==this.config.formatDate(this.config.currentTime()).split('-')[0]+this.selectMonths){
                 this.personalData=item;
               }
           }
        if(this.dateIndex==0){
                    // var data1= ['1月','2月','3月','4月','本月','6月'];
                    
              if(parseInt(this.config.formatDate(this.config.currentTime()).split('-')[1])<=6){
                  for(var k=1;k<=6;k++){
                        var d=k;
                          if(d<10){
                            d='0'+k;
                         }
                           for(var j=0;j<res.rows.length;j++){
               var item=res.rows[j];
            //    alert(item.date1+"**"+this.config.formatDate(this.config.currentTime()).split('-')[0]+d)
               if(item.date1==this.config.formatDate(this.config.currentTime()).split('-')[0]+d){
                 if(item.sale_finish){
                     data2.push(item.sale_finish)
                 }else{
                      data2.push(0)
                 }
                  if(item.sale_task){
                     data3.push(item.sale_task)
                 }else{
                      data3.push(0)
                 }
                 if(item.use_finish){
                     data4.push(item.use_finish)
                 }else{
                      data4.push(0)
                 }
                 if(item.use_task){
                     data5.push(item.use_task)
                 }else{
                      data5.push(0)
                 }
               }else{
                     data2.push(0)
                      data3.push(0)
                      data4.push(0)
                      data5.push(0)
               }
           }    
              }  
                        }else{
                           for(var k=7;k<=12;k++){
                        var d=k;
                          if(d<10){
                            d='0'+k;
                         }
                                         for(var j=0;j<res.rows.length;j++){
               var item=res.rows[j];
               if(item.date1==this.config.formatDate(this.config.currentTime()).split('-')[0]+d){
                 if(item.sale_finish){
                     data2.push(item.sale_finish)
                 }else{
                      data2.push(0)
                 }
                  if(item.sale_task){
                     data3.push(item.sale_task)
                 }else{
                      data3.push(0)
                 }
                  if(item.use_finish){
                     data4.push(item.use_finish)
                 }else{
                      data4.push(0)
                 }
                 if(item.use_task){
                     data5.push(item.use_task)
                 }else{
                      data5.push(0)
                 }
               }else{
                     data2.push(0)
                      data3.push(0)
                       data4.push(0)
                      data5.push(0)
               }
           }  
                          }
                        }
                   
        //   var data2= [120, 332, 301, 334, 390, 330, 320];
        //    var data3= [180, 182, 191, 234, 290, 330, 310];
        this.lineChart(this.dataArrays,data2,data3)
          this.lineChart1(this.dataArrays,data4,data5)
         }else{
                  for(var k=1;k<=12;k++){
                        var d=k;
                          if(d<10){
                            d='0'+k;
                         }
                           for(var j=0;j<res.rows.length;j++){
               var item=res.rows[j];
            //    alert(item.date1+"**"+this.config.formatDate(this.config.currentTime()).split('-')[0]+d)
               if(item.date1==this.config.formatDate(this.config.currentTime()).split('-')[0]+d){
                 if(item.sale_finish){
                     data2.push(item.sale_finish)
                 }else{
                      data2.push(0)
                 }
                  if(item.sale_task){
                     data3.push(item.sale_task)
                 }else{
                      data3.push(0)
                 }
                  if(item.use_finish){
                     data4.push(item.use_finish)
                 }else{
                      data4.push(0)
                 }
                 if(item.use_task){
                     data5.push(item.use_task)
                 }else{
                      data5.push(0)
                 }
               }else{
                     data2.push(0)
                      data3.push(0)
                         data4.push(0)
                      data5.push(0)
               }
           }    
              }  
                 this.lineChart(this.dataArrays,data2,data3)
                       this.lineChart1(this.dataArrays,data4,data5)
         } 
       }
        console.log(data2)
                        console.log(data3)
    })
    },
    // 水印
//     watermark(settings) {
//    //默认设置
//     var defaultSettings={
//         watermark_txt0:"",
//         watermark_txt1:"",
//         watermark_txt2:"",//根据本业务需求  有三行 换行显示  创建三个节点
//         watermark_x:100,//水印起始位置x轴坐标
//         watermark_y:200,//水印起始位置Y轴坐标
//         watermark_rows:20,//水印行数
//         watermark_cols:20,//水印列数
//         watermark_x_space:100,//水印x轴间隔
//         watermark_y_space:50,//水印y轴间隔
//         watermark_color:'#aaa',//水印字体颜色
//         watermark_alpha:0.2,//水印透明度
//         watermark_fontsize:'15px',//水印字体大小
//         watermark_font:'微软雅黑',//水印字体
//         watermark_width:210,//水印宽度
//         watermark_height:30,//水印长度
//         watermark_angle:15//水印倾斜度数
//     };
//     //采用配置项替换默认值，作用类似jquery.extend
//     if(arguments.length===1&&typeof arguments[0] ==="object" )
//     {
//         var src=arguments[0]||{};
//         var key=''
//         for(key in src) 
//         {
//             if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
//                 continue;
//             else if(src[key])
//                 defaultSettings[key]=src[key];
//         }
//     }
 
//     var oTemp = document.createDocumentFragment();
 
//     //获取页面最大宽度
//     var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
//     var cutWidth = page_width*0.0150;
//     var page_width=page_width-cutWidth;
//     //获取页面最大高度
//     var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);
//     // var page_height = document.body.scrollHeight+document.body.scrollTop;
//     //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
//     if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
//         defaultSettings.watermark_cols = parseInt((page_width-defaultSettings.watermark_x+defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
//         defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
//     }
//     //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
//     if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
//         defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
//         defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
//     }
//     var x;
//     var y;
//     for (var i = 0; i < defaultSettings.watermark_rows; i++) {
//         y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
//         for (var j = 0; j < defaultSettings.watermark_cols; j++) {
//             x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
 
//             var mask_div = document.createElement('div');
//             mask_div.id = 'mask_div' + i + j;
//             mask_div.className = 'mask_div';
//             ///三个节点
//             var span0 = document.createElement('div');
//             span0.appendChild(document.createTextNode(defaultSettings.watermark_txt0));
//             // var span1 = document.createElement('div');
//             // span1.appendChild(document.createTextNode(defaultSettings.watermark_txt1));
//             // var span2 = document.createElement('div');
//             // span2.appendChild(document.createTextNode(defaultSettings.watermark_txt2));
//             mask_div.appendChild(span0);
//             // mask_div.appendChild(span1);
//             // mask_div.appendChild(span2);
//             //设置水印div倾斜显示
//             mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//             mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//             mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//             mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//             mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//             mask_div.style.visibility = "";
//             mask_div.style.position = "absolute";
//             mask_div.style.left = x + 'px';
//             mask_div.style.top = y + 'px';
//             mask_div.style.overflow = "hidden";
//             mask_div.style.zIndex = "9999";
//             mask_div.style.pointerEvents='none';//pointer-events:none  让水印不遮挡页面的点击事件
//             //mask_div.style.border="solid #eee 1px";
//             mask_div.style.opacity = defaultSettings.watermark_alpha;
//             mask_div.style.fontSize = defaultSettings.watermark_fontsize;
//             mask_div.style.fontFamily = defaultSettings.watermark_font;
//             mask_div.style.color = defaultSettings.watermark_color;
//             mask_div.style.textAlign = "center";
//             mask_div.style.width = defaultSettings.watermark_width + 'px';
//             mask_div.style.height = defaultSettings.watermark_height + 'px';
//             mask_div.style.display = "block";
//             oTemp.appendChild(mask_div);
//         };
//     };
//     document.body.appendChild(oTemp);
// },
     showmonth(){
      this.show2=!this.show2;
    },
      // 选择月份
    selectMonth(month){
      if(month>this.currentTime.split('-')[1]){
        return;
      }
      this.selectMonths=month;
        this.selectmon=parseInt(month)+"月";
         this.show2=false;
         this.analyzeCertain();
    },
       selectDate(){
         this.show1=!this.show1;
    },
     selectTime(index){
  this.dateIndex=index;
   this.show1=false;
   this.analyzeCertain();
    },
    cancel(){
        this.show2=false;
    },
    cancel1(){
               this.show1=false;
    },
    // 折线图
    lineChart(data1,data2,data3){
         var myChart = echarts.init(document.getElementById("box"));
         myChart.clear();
        //  if(this.dateIndex==0){
        //             var data1= ['1月','2月','3月','4月','本月','6月'];
        //   var data2= [120, 332, 301, 334, 390, 330, 320];
        //    var data3= [180, 182, 191, 234, 290, 330, 310];
        //  }else{
        //   var data1= ['1月','2月','3月','4月','本月','6月','7月','8月','9月','10月','11月','12月'];
        //   var data2= [120, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390];
        //   var data3= [180, 182, 191, 234, 290, 330, 310,420, 632, 401, 134, 190];
        //  } 
  
   var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
            left: '0%',
            right: '13%',
            bottom: '3%',
            containLabel: true
        },
            //x轴信息样式
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:data1,
                //坐标轴颜色
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
            },
            yAxis: {
                type: 'value',
                  axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                }
            },
             axisLabel: {
             show:false
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
            },
            series: [
                //实线
                {
                    name:'销售完成额',
                    type:'line',
                    symbol:'circle',
                    symbolSize:8,
                    data:data2,
                    itemStyle:{
                        normal:{
                            color:'#3598FF',
                            borderColor:'#3598FF',
                            label : {show: true,color:'#1d1d1d'}
                        }
                    },
                },
                {
                    name:'销售目标额',
                    type:'line',
                    symbol:'circle',
                    symbolSize:8,
                    itemStyle:{
                        normal:{
                            color:'#1AD885',
                            borderColor:'#1AD885',  //拐点边框颜色
                            label : {show: true,color:'#1d1d1d'}
                        }
                    },
                    data:data3
                }
                
 
            ]
        };
myChart.setOption(option);
    },
    lineChart1(data1,data2,data3){
         var myChart = echarts.init(document.getElementById("box1"));
         myChart.clear();
        //  if(this.dateIndex==0){
        //             var data1= ['1月','2月','3月','4月','本月','6月'];
        //   var data2= [120, 332, 301, 334, 390, 330, 320];
        //    var data3= [180, 182, 191, 234, 290, 330, 310];
        //  }else{
        //   var data1= ['1月','2月','3月','4月','本月','6月','7月','8月','9月','10月','11月','12月'];
        //   var data2= [120, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390];
        //   var data3= [180, 182, 191, 234, 290, 330, 310,420, 632, 401, 134, 190];
        //  } 
  
   var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
            left: '0%',
            right: '13%',
            bottom: '3%',
            containLabel: true
        },
            //x轴信息样式
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:data1,
                //坐标轴颜色
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
            },
            yAxis: {
                type: 'value',
                  axisLine: {
                lineStyle: {
                    color: '#1d1d1d'
                }
            },
             axisLabel: {
             show:false
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
            },
            series: [
                //实线
                {
                    name:'消耗完成额',
                    type:'line',
                    symbol:'circle',
                    symbolSize:8,
                    data:data2,
                    itemStyle:{
                        normal:{
                            color:'#3598FF',
                            borderColor:'#3598FF',
                            label : {show: true,color:'#1d1d1d'}
                        }
                    },
                },
                {
                    name:'消耗目标额',
                    type:'line',
                    symbol:'circle',
                    symbolSize:8,
                    itemStyle:{
                        normal:{
                            color:'#1AD885',
                            borderColor:'#1AD885',  //拐点边框颜色
                            label : {show: true,color:'#1d1d1d'}
                        }
                    },
                    data:data3
                }
                
 
            ]
        };
myChart.setOption(option);
    }
   },
     components: {
    Previewer
  },
 destroyed () {
   $(".mask_div").remove();
}
 }
</script>

<style scoped lang="less">
.pos{
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    padding-top: 0;
        z-index: 99;
}
.container{
    .masp{
        width: 100%;
        background-color: #f7f7f7;
            padding-bottom: 0.05rem;
    }
    .info{
        width: 100%;
        background-color: #4978B0;
            border-bottom: 0.3rem solid #f7f7f7;
        .headimg{
            text-align: center;
                padding-top: 0.35rem;
                padding-bottom: 0.1rem;
            img{
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                    border: 3px solid #fff;
            }
        }
        .name{
            text-align: center;
            font-size: 0.3rem;
            font-weight: 500;
            color: #fff;
            p:last-child{
   font-size: 0.24rem;
            }
        }
        .total{
            display: flex;
                padding: 0.35rem 0;
            .item{
                text-align: center;
                flex: 1;
                font-size: 0.36rem;
                color: #fff;
                font-weight: 500;
                p:last-child{
                    font-size: 0.24rem;
                }
            }
        }
    }
    .marketing{
            position: relative;
        width: 92%;
        background-color: #fff;
        margin: 0.3rem auto;
        border-radius: 10px;
        .capacity{
            display: flex;
                padding: 0.2rem 0.3rem;
    border-bottom: 1px solid #f7f7f7;
            .item{
                position: relative;
                flex: 1;
                .selectDate{
                    background-color: #4978B0;
                    width: 1rem;
                        text-align: center;
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.24rem;
                    border-radius: 2px;
                    padding: 0.03rem 0.05rem;
                    float: right;
                    margin-top: 0.03rem;
                    img{
                        width: 0.23rem;
                            margin-left: 0.05rem;
                    }
                }
     .months{
          position: absolute;
    width: 2.6rem;
    box-shadow:0px 2px 10px 0px rgba(121,121,121,0.5);
    background-color: #fff;
    top: 0.58rem;
    z-index: 9999;
    border-radius: 2px;
        right: 0;
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
    .options{
          width: 1.73rem;
    position: absolute;
 right: 0;
    box-shadow: 0px 2px 10px 0px rgba(121,121,121,0.5);
     border-radius:0px 0px 4px 4px;
top: 0.49rem;
        z-index: 99999;
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
            }
        }
        .salesComplete{
            display: flex;
            .item{
                flex: 1;
                font-size: 0.24rem;
                font-weight: 500;
                color: #999;
                text-align: center;
                    padding: 0.4rem 0;
                        border-right: 1px dotted #f7f7f7;
    border-bottom: 1px dotted #f7f7f7;
                p:last-child{
                    color: #1d1d1d;
                    font-weight: bold;
                    font-size: 0.36rem;
                }
            }
            .item:last-child{
                border-right: none;
            }
        }
        .curves{
       position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    margin: 0.3rem auto;
     .item{
              position: absolute;
    left: 50%;
    height: 30%;
    // width: 50%;
    margin: 0% 0 0 -34%;
        .items{
          position: relative;
              float: left;
                  margin-right:30px;
          span{
          width: 0.15rem;
    height: 0.15rem;
    background-color: #00A0E9;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    font-size: 0.22rem;
    vertical-align: middle;
    margin-top: -0.03rem;
    
          }
          span.active{
            background-color: #1AD885;
          }
        }
        .items:last-child{
          margin-right: 0;
        }
     }
  }
  .doughnut{
      text-align: center;
      position: relative;
      img{
          width: 92%;
          margin: 1rem auto;
      }
      .dynamic,.dynamic1,.dynamic2,.dynamic3{
          position: absolute;
          font-size: 0.3rem;
          font-weight: 500;
              top: 0.59rem;
    line-height: 0.5rem;
    left: 0.35rem;
          p:last-child{
         font-size: 0.24rem;
          }
      }
      .dynamic1{
right: 0.35rem;
    left: inherit;
      }
      .dynamic2{
         bottom: 0.68rem;
          top: inherit;
      }
      .dynamic3{
          top: inherit;
           bottom: 0.68rem;
           left: inherit;
           right: 0.35rem;
      }
  }
  .description{
      padding: 0 10%;
          width: 100%;
              text-align: center;
    padding-bottom: 0.8rem;
      .subscription{
          width: 20%;
          float: left;
          font-size: 0.24rem;
          font-weight: 500;
          span{
                 width: 0.15rem;
    height: 0.15rem;
    background-color: #00A0E9;
    border-radius: 50%;
    display: inline-block;
        margin-right:0.1rem;
          }
      }
  }
    }
}
 
</style>
