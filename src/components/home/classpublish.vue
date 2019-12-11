<template>
    <div class="catain">
        <div class="catain_wrap">
           <div class="coursefabu_header">
              <div class="coursefabu_bg">
                 
               </div>
               <div class="coursefabu_selectdate">
                   <div class="selectdate_con">
                      <div class="text1 clear">
                           <p class="p1">起始日期</p>
                           <p class="p2">结束日期</p>
                           <img src="../../assets/images/shijianzhuangxiang.png" />
                      </div>
                      <div class="text2 clear" id="firstSelect">
                          <div class="left">
                              <input type="text"  v-model="startDate"/><span>{{week}}</span><img src="../../assets/images/cursetime.png" />
                               <datetime  v-model="startDate" :start-date="sDate" :end-date="eDate" @on-confirm="fangdate" class="fang"></datetime>
                          </div>
                         <div class="left right">
                              <input type="text"  v-model="endDate"/><span>{{week1}}</span><img src="../../assets/images/cursetime.png" />
                              <datetime  v-model="endDate" :start-date="sDate" :end-date="eDate" class="fang" @on-confirm="fangdate1"></datetime>
                          </div>
                      </div>
                   </div>
               </div>
           </div>
            
           <div class="coursefabu_con">
             
               <div class="quanxuanbtn"><img :src="quanxuanflag?quanxuanbtn1:quanxuanbtn" @click="clickquanxuan()"/> <span>全选</span></div>
        <div class="courselist_wrap">
            <div class="coursetable">
                    <div class="coursetime clear">
                        <div class="courseitem" v-for="(item,index) in times"  :key="index" @click="selectcoursetime(item.id)" :class="{courseitemactive:'',bottomright:item.id==35,bottomleft:item.xianshitime=='20:00'}">
                            <span >{{item.xianshitime}}</span>
                            <img :src="yixuantimes.indexOf(item.id)>=0?checkbtn:checkbtn1" v-if="item.xianshitime!=''"/>
                        </div>
                        
                    </div>
            </div>
            <div class="fabushuom">
                <p>注：选择8:00,表示选择时间为8:00-8:30</p>
               
            </div>          
        </div>

           </div>
           
        </div>
         <div class="coursefabubtn_wrapheight"></div>
         <div class="coursefabubtn_wrap">
              <div class="coursefabubtn" @click="coursequxiao">取消</div>
              <div class="coursefabubtn1" @click="surefabu">确定发布</div>
          </div>
          
    </div>
   
</template>

<script>
import { Datetime } from 'vux'
import { constants } from 'crypto';
export default {
    data(){
    return{
        currentTime:this.config.currentTime(),
        startDate:this.config.formatDate(this.config.currentTime()).replace(/-/g,'月').substring(5,10)+'日',
        endDate:this.config.formatDate(this.config.currentTime()).replace(/-/g,'月').substring(5,10)+'日',
        startDate1:this.config.formatDate(this.config.currentTime()),
        endDate1:this.config.formatDate(this.config.currentTime()),

        sDate:this.config.formatDate(this.config.currentTime()),
        eDate:this.config.dateAdd(this.config.currentTime(),14),
        week:'',
         week1:'',
         //times: ['06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00', '18:30','19:00', '19:30','20:00','20:30','21:00','21:30','','',''],
          times:[
             {xianshitime:'06:00',courseduan:'06:00-06:30',id:1},
              {xianshitime:'06:30',courseduan:'06:30-07:00',id:2},
               {xianshitime:'07:00',courseduan:'07:00-07:30',id:3},
                {xianshitime:'07:30',courseduan:'07:30-08:00',id:4},
                 {xianshitime:'08:00',courseduan:'08:00-08:30',id:5},
                 {xianshitime:'08:30',courseduan:'08:30-09:00',id:6},
                 {xianshitime:'09:00',courseduan:'09:00-09:30',id:7},
                   {xianshitime:'09:30',courseduan:'09:30-10:00',id:8},
                 {xianshitime:'10:00',courseduan:'10:00-10:30',id:9},
                  {xianshitime:'10:30',courseduan:'10:30-11:00',id:10},
                 {xianshitime:'11:00',courseduan:'11:00-11:30',id:11},
                 {xianshitime:'11:30',courseduan:'11:30-12:00',id:12},
                 {xianshitime:'12:00',courseduan:'12:00-12:30',id:13},
                  {xianshitime:'12:30',courseduan:'12:30-13:00',id:14},
                 {xianshitime:'13:00',courseduan:'13:00-13:30',id:15},
                  {xianshitime:'13:30',courseduan:'13:30-14:00',id:16},
                 {xianshitime:'14:00',courseduan:'14:00-14:30',id:17},
                  {xianshitime:'14:30',courseduan:'14:30-15:00',id:18},
                 {xianshitime:'15:00',courseduan:'15:00-15:30',id:19},
                  {xianshitime:'15:30',courseduan:'15:30-16:00',id:20},
                 {xianshitime:'16:00',courseduan:'16:00-16:30',id:21},
                  {xianshitime:'16:30',courseduan:'16:30-17:00',id:22},
                 {xianshitime:'17:00',courseduan:'17:00-17:30',id:23},
                  {xianshitime:'17:30',courseduan:'17:30-18:00',id:24},
                 {xianshitime:'18:00',courseduan:'18:00-18:30',id:25},                 
                  {xianshitime:'18:30',courseduan:'18:30-19:00',id:26},
                 {xianshitime:'19:00',courseduan:'19:00-19:30',id:27},
                  {xianshitime:'19:30',courseduan:'19:30-20:00',id:28},
                 {xianshitime:'20:00',courseduan:'20:00-20:30',id:29},
                  {xianshitime:'20:30',courseduan:'20:30-21:00',id:30},
                 {xianshitime:'21:00',courseduan:'21:00-21:30',id:31},
                  {xianshitime:'21:30',courseduan:'21:30-22:00',id:32},
                   {xianshitime:'22:00',courseduan:'22:00-22:30',id:33},
                 {xianshitime:'',courseduan:'',id:34},
                  {xianshitime:'',courseduan:'',id:35},
         ],
                  
         //quanxuantimes: ['06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00', '18:30','19:00', '19:30','20:00','20:30','21:00','21:30'],
         
         quanxuantimes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
         yixuantimes:[],
         quanxuanflag:false,
        quanxuanbtn:require("../../assets/images/quanxuan_nor@2x.png"),
         quanxuanbtn1:require("../../assets/images/quanxuan_nor1@2x.png"),
          checkbtn:require("../../assets/images/set_btn@2x.png"),
         checkbtn1:require("../../assets/images/nor_btn@2x.png"),
         fresult:[],
         userName:'',//工号
         UserClub:''//员工会所
        }
    },
    created(){
      var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
       this.week = weekArray[new Date().getDay()];
          this.week1 = weekArray[new Date().getDay()];
          this.getQyUser()
          this.getUserClub()
    },
    methods:{
        //获取工号
       getQyUser(){
            this.instance.$post('/rest/wx/customer/getQyUser',{
              
            },res => {
                console.log(res);              
                
                 this.userName = res.rows[0].userName;
                
                 
            })
       },
        //获取员工会所
       getUserClub(){
            this.instance.$post('/rest/wx/customer/club/getUserClub',{
              
            },res => {
                console.log(res);              
                
                 this.UserClub = res.rows[0].clubId;
                
                 
            })
       }, 
      fangdate(){
          this.startDate1 = this.startDate;
          var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");         
       this.week = weekArray[new Date(this.startDate.replace(/-/g,'/')).getDay()];
         this.startDate = this.startDate.replace(/-/g,'月').substring(5,10)+'日'
         
      }, 
      fangdate1(){
          this.endDate1 = this.endDate
           var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
       this.week1 = weekArray[new Date(this.endDate.replace(/-/g,'/')).getDay()];
         this.endDate = this.endDate.replace(/-/g,'月').substring(5,10)+'日'
        
      },
      clickquanxuan(){
          this.yixuantimes = [];
           this.quanxuantimes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
        if(this.quanxuanflag){
           this.quanxuanflag = false;
           this.yixuantimes = []
        }else{
            this.quanxuanflag = true;
            
            this.yixuantimes = this.quanxuantimes
             console.log(this.quanxuantimes)
            console.log(this.yixuantimes)
            
        }
      },
      selectcoursetime(id){
           var ids = this.yixuantimes.indexOf(id);
              if(ids>=0){
                  //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
                  this.yixuantimes.splice(ids,1);
              }else{
                  //选中该按钮
                  this.yixuantimes.push(id);
              }

      },
      surefabu(){
          
         console.log( this.yixuantimes)
          console.log('fffffff')
         
         var fyixuantimes = this.bubbleSort(this.yixuantimes)
         console.log(fyixuantimes)
         var shijianduan = [];
         var ftimes = this.times;
         for(var i = 0;i<fyixuantimes.length;i++){
             for(var j = 0;j<ftimes.length;j++){
                 if(fyixuantimes[i]==ftimes[j].id){
                    shijianduan.push(ftimes[j].courseduan)
                 }
             }
         }
         console.log(shijianduan)
        if(shijianduan.length==0){
             this.$vux.toast.text("请勾选发布时段", "center");
             return false;
        }
    
        var shijianduan1 =  this.formatArr(shijianduan)
         console.log(shijianduan1)
         //var shijianduan1 = shijianduan
         var shijianduan2 = this.fangstrong(shijianduan1) 
        
        console.log(shijianduan2)
         var shijianduanstr = shijianduan1.join(',')
         console.log('fffffff')
         console.log(this.startDate1)
          console.log(this.endDate1)
        var fdate = this.fcomputed(this.startDate1,this.endDate1)
        var fdatestr = fdate.join(',')
        console.log(fdatestr)
        
        this.instance.$post('/rest/wx/coach/course/releaseCourseTime',{
                coachCode:this.userName,
                clubId:this.UserClub,
                courseDate:fdatestr,
                courseTimeScopes:shijianduanstr
            },res => {
                console.log(res);              
                if(res.status){
                      this.$router.push({
                            name: "classhour"               
                      });
                }else{
                     this.$vux.toast.text(res.message, "center");
                }
                
                
                 
        })
      },
      coursequxiao(){
        this.$router.back();
      },
      //数组排序
      bubbleSort(arr){
         var len = arr.length;

            for (var i = 0; i < len - 1; i++) {

                for (var j = 0; j < len - 1 - i; j++) {

                    if (arr[j] > arr[j+1]) {       // 相邻元素两两对比

                        var temp = arr[j+1];       // 元素交换

                        arr[j+1] = arr[j];

                        arr[j] = temp;

                    }

                }

            }
            return arr;
      },
     formatArr(arr) {
            let currencyIndex =[0]
            let currencyItem = arr[0].split('-')[1]
            for(let j = 1 ; j < arr.length ; j++ ){
                if(arr[j].indexOf(currencyItem) > -1){
                    currencyItem = arr[j].split('-')[1]
                }else{
                    currencyItem = arr[j].split('-')[1]
                    currencyIndex.push(j)
                }
            }
            let fallyArr=[]
            for(let i = 0 ; i< currencyIndex.length ; i++ ) {
                    let endArr 
                    let starStr = arr[currencyIndex[i]].split('-')[0]
                        if(currencyIndex.length <2){
                            endArr = arr[arr.length - 1].split('-')[1]
                        }else{
                            if(i ==currencyIndex.length -1  ){
                                endArr = arr[arr.length - 1].split('-')[1]  
                            }else{
                                endArr = arr[currencyIndex[i+1]- 1].split('-')[1]  
                            }
                        
                        }
            
                    fallyArr.push(`${starStr}-${endArr}`)
            } 
            return fallyArr
         },
        fangstrong(arr1){
   var arr2 = []
for(var i = 0;i<arr1.length;i++){
    var arritem = arr1[i].split('-')[1]
     var arritemnum = parseInt(arritem.replace(/:/g,''))
     var arritem1 = arritem.split(':')[1]
     var arritemnum1 = 0;
     if(arritem1 == '30'){
        arritemnum1 = arritemnum-30
     	

     }else{
         arritemnum1 = arritemnum-70
     

     }
    var  arritemnum1str = '';
  var farrstr = arritemnum1.toString()
    if(farrstr.length==3){
    	
    	
    	arritemnum1str = '0'+ farrstr
    }else{
    	arritemnum1str = arritemnum1.toString()
    	  
    } 

     console.log(arritemnum1str)
     var arritemnum1str1 = arritemnum1str.substring(0,2)+':'+arritemnum1str.substring(2,4)
     console.log(arritemnum1str1)
     var zhongstr = '';
     if(arr1[i].split('-')[0]==arritemnum1str1){
        zhongstr = arr1[i].split('-')[0]
     }else{
        zhongstr = arr1[i].split('-')[0]+'-'+arritemnum1str1
     }
     console.log(zhongstr)
     arr2.push(zhongstr)

}
 return arr2;
  },
      //根据起始结束日期计算中间日期
      fcomputed(start,end){
          console.log(start)
           console.log(end)
           let dateArr = []
 let startArr = start.split('-')
 let endArr = end.split('-')
 let db = new Date()
 db.setFullYear(startArr[0], startArr[1] - 1, startArr[2])
 let de = new Date()
 de.setFullYear(endArr[0], endArr[1] - 1, endArr[2])
 let unixDb = db.getTime()
 let unixDe = de.getTime()
 let stamp
 const oneDay = 24 * 60 * 60 * 1000;
 for (stamp = unixDb; stamp <= unixDe;) {
   dateArr.push(this.config.formatDate(new Date(parseInt(stamp))))
   stamp = stamp + oneDay
 }
 return dateArr

 },  


    },
    components: {
     Datetime
   }
}
</script>
<style scoped lang="less">
.coursefabubtn_wrapheight{height: 1.4rem;}
.coursefabu_bg{width:100%;height:50px;border-bottom-right-radius:50%;
border-bottom-left-radius:50%;background: #4978B0; }
.coursefabu_selectdate{width:94%;
height:3rem;margin: -0.8rem auto 0;
background:rgba(255,255,255,1);
box-shadow:0px 2px 14px 0px rgba(174,174,174,0.5);
border-radius:0.2rem;}
.clear:after{content:'';display:block;clear:both;}
.clear{zoom:1;}
.selectdate_con{width:80%;margin:0 auto;border-bottom:1px solid #D6D6D6;padding-top:0.6rem;}
.selectdate_con .text1{position: relative;}
.selectdate_con .text2{padding:0.16rem 0;}
.selectdate_con .text2 .fang{    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;}
.selectdate_con .text1 img{width:0.34rem;height:0.34rem;position: absolute;top:6px;left:46.8%;}
.selectdate_con .p1{font-size:0.34rem;border-bottom:1px solid #D6D6D6;width:40%; 
font-family:PingFang-SC-Medium;float: left;
font-weight:500;
color:rgba(29,29,29,1);}
.selectdate_con .p2{font-size:0.34rem;border-bottom:1px solid #D6D6D6;width:40%;text-align: right;
font-family:PingFang-SC-Medium;float: right;
font-weight:500;
color:rgba(29,29,29,1);}
.selectdate_con .left{float:left;width:40%;position: relative;}
.selectdate_con .left input{width:60%;font-size:0.28rem;
font-family:PingFang-SC-Medium;
font-weight:500;outline: none;
color:rgba(29,29,29,1);}
.selectdate_con .left span{font-size:0.24rem;
font-family:PingFang-SC-Medium;
font-weight:500;padding-right: 0.16rem;
color:rgba(153,153,153,1);}
.selectdate_con .left img{width:0.15rem;height:0.23rem;vertical-align: middle;}
.selectdate_con .right{float: right;width:40%;margin-right:-0.1rem;position: relative;}
.coursetable{
        width:94%;margin:0 auto;
        
           border: 1px solid #D6D6D6;
           border-bottom:none;
           border-right:none;
           border-radius: 6px;
      .coursetime{
          //  border-bottom: 1px solid #D6D6D6;
        .courseitem{
          float: left;  
          width:13.956%;
          height:1rem;
          line-height: 1rem;
          text-align: center;
          border-right: 1px solid #D6D6D6;
          border-bottom: 1px solid #D6D6D6;
          position: relative;
          span{font-size:0.28rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:#1D1D1D;}
         img{width:0.3rem;position: absolute;top:0;right: 0;}

        }

      }
       .courseitemactive{border-right: none!important;}
      .bottomright{border-bottom-right-radius:6px!important;}
      .bottomleft{border-bottom-left-radius:6px!important;}
    }
.clear:after{content:'';display:block;clear:both;}
.clear{zoom:1;}
.fabushuom{padding:3% 3% 0 3%;}
.fabushuom p{font-size:0.24rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);}

.coursefabubtn{width:47%;float: left;
height:0.8rem;
line-height: 0.8rem;
text-align: center;
border:1px solid rgba(73,120,176,1);
border-radius:10px;
font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(73,120,176,1);
}
.coursefabubtn1{width:47%;float: right;
height:0.8rem;
line-height: 0.8rem;
text-align: center;
border:1px solid rgba(73,120,176,1);
background:rgba(73,120,176,1);
border-radius:10px;
font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:#fff;
}  
.coursefabubtn_wrap{
  position: fixed;
bottom: 0.34rem;
left:3%;
right:0;
width:94%;


}
.nocourse{text-align: center;padding-top:50%;}
.nocourse p{font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);}
.quanxuanbtn{padding:8% 0 3% 3%;}
.quanxuanbtn img{width:0.42rem;height:0.42rem;vertical-align: middle;}
.quanxuanbtn span{font-size:0.28rem;padding-left:0.1rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}  
</style>


