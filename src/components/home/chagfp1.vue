<template>
 <div class='container'>
    <div class="question_wrap">
        <div class="question_jindu">
            <div class="numjindu">9 / 9</div>
            <div class="zhongchang">
                <div class="jindutiao"></div>
               <div class="jinduyuan"><span class="jinduxiaoyuan"></span></div>
            </div>
        </div>
          <div class="quesheight"></div>
        <div class="question_con">
             <div class="question_item"> 
             <div class="quetext">1、您通过什么途径了解到的本品牌/门店/公司?</div> 
            <mt-radio            
                v-model="value1"
                :options="['路过', '朋友介绍', '线上广告','户外广告']">
            </mt-radio>
            </div>
             <div class="question_item"> 
             <div class="quetext">2、从门店到您哪个位置最近?</div>
            <mt-radio            
                v-model="value2"
                :options="['家', '公司', '两者都方便','两者都不方便']">
            </mt-radio>
            </div>

             <div class="question_item"> 
             <div class="quetext">3、有没有加入过其他的健身中心?</div>
            <mt-radio            
                v-model="value3"
                :options="['有', '没有']">
            </mt-radio>
            </div>
            <div class="question_item"> 
             <div class="quetext">4、有没有请过私人教练？</div>
            <mt-radio            
                v-model="value4"
                :options="['有', '没有']">
            </mt-radio>
            </div>

             <div class="question_item line"> 
             <div class="quetext line hang">5、您最想达到的目标是?（可多选)</div>
              <div class="answer_wrap margintop">
                  <div class="item " :class="{active:(fivearr.toString()).indexOf('减脂')!=-1}" ><span>减脂</span></div>
                  <div class="item"  :class="{active:(fivearr.toString()).indexOf('增肌')!=-1}" ><span>增肌</span></div>
                  <div class="item"  :class="{active:(fivearr.toString()).indexOf('塑形')!=-1}" ><span>塑形</span></div>
                  <div class="item" :class="{active:(fivearr.toString()).indexOf('身体素质')!=-1}" ><span>身体素质</span></div>
                   <div class="item" :class="{active:(fivearr.toString()).indexOf('心肺健康')!=-1}" ><span>心肺健康</span></div>
              </div>
               <div class="answer_wrap marginbottom">
                    <div class="item" :class="{active:(fivearr.toString()).indexOf('减压')!=-1}" @click="selectanswer('减压')"><span>减压</span></div>
               </div>
            </div> 
             
            <div class="question_item line"> 
             <div class="quetext line hang">6、您最想改善的部位是?（可多选）</div>
              <div class="answer_wrap margintop">
                  <div class="item " :class="{active:(sixarr.toString()).indexOf('胸')!=-1}" ><span>胸</span></div>
                  <div class="item"  :class="{active:(sixarr.toString()).indexOf('肩膀')!=-1}" ><span>肩膀</span></div>
                  <div class="item"  :class="{active:(sixarr.toString()).indexOf('背部')!=-1}" ><span>背部</span></div>
                  <div class="item" :class="{active:(sixarr.toString()).indexOf('二头肌')!=-1}" ><span>二头肌</span></div>
                   <div class="item" :class="{active:(sixarr.toString()).indexOf('三头肌')!=-1}" ><span>三头肌</span></div>
              </div>
               <div class="answer_wrap marginbottom">
                    <div class="item" :class="{active:(sixarr.toString()).indexOf('前臂')!=-1}" ><span>前臂</span></div>
                     <div class="item" :class="{active:(sixarr.toString()).indexOf('腹部')!=-1}" ><span>腹部</span></div>
                     <div class="item" :class="{active:(sixarr.toString()).indexOf('臀部')!=-1}" ><span>臀部</span></div>
                      <div class="item" :class="{active:(sixarr.toString()).indexOf('大腿')!=-1}" ><span>大腿</span></div>
                       <div class="item" :class="{active:(sixarr.toString()).indexOf('小腿')!=-1}" ><span>小腿</span></div>
               </div>
            </div>
            
             <div class="question_item"> 
             <div class="quetext">7、为了目标，每周可以锻炼几次?</div>
            <mt-radio            
                v-model="value5"
                :options="['1-2次', '2-3次', '3-4次','4次以上']">
            </mt-radio>
            </div>

             <div class="question_item"> 
             <div class="quetext">8、一般什么时间锻炼?</div>
            <mt-radio            
                v-model="value6"
                :options="['上午8:00-12:00', '下午12:00-18:00', '晚上18:00-22:00']">
            </mt-radio>
            </div>
             <div class="question_item"> 
             <div class="quetext">9、您设定目标后，觉得自己实现目标的可能性有</div>
              <div class="quetext">多大?</div>
            <mt-radio            
                v-model="value7"
                :options="['确定', '不确定', '如有人监督可能会完成']">
            </mt-radio>
            </div>

        </div>
    </div>
    <!-- <div class="addCustomer_finish" @click="finish()"><span>完成</span></div> -->
 </div>

</template>

<script>
import $ from "jquery";
 export default {
   data () {
     return {
       value1:"",
        value2:"",
         value3:"",
          value4:"",
           value5:"",
            value6:"",
             value7:"",
       fivearr:[],
       sixarr:[],
       answerlist:[this.value1,this.value2],
       gxId:this.$route.query.gxId,
        gfpid:this.$route.query.gfpid,
       receptionId:this.$route.query.receptionId,
       yiwanlist:[]
     }
   },
   created(){
        this.getgfp()
   },
   
   methods: {
       getgfp(){
        this.instance.$post('/rest/wx/reception/getGfpAndAimById',{
            user:this.gxId
        },res => {
        console.log(res);
          this.value1=res.rows[0].way
        this.value2=res.rows[0].position
         this.value3=res.rows[0].joinClub
          this.value4=res.rows[0].privateCoach
           this.value5=res.rows[0].fitTimes
            this.value6=res.rows[0].fitnessPeriod
            this.value7=res.rows[0].possibility
            this.fivearr = res.rows[0].requirement
            this.sixarr = res.rows[0].parts

      })
       },
     selectanswer(answ){
         var arr = this.fivearr
         if((arr.toString()).indexOf(answ)==-1){
               this.fivearr.push(answ)
                console.log( this.fivearr)
         }else{
              for(var i = 0;i<arr.length;i++){
             if(answ==arr[i]){
                this.fivearr.splice(i, 1);
             }
           }
           console.log( this.fivearr)
         }
        
         console.log(answ)
      

     },
     selectanswer1(answ){
         var arr = this.sixarr
         if((arr.toString()).indexOf(answ)==-1){
               this.sixarr.push(answ)
                console.log( this.sixarr)
         }else{
              for(var i = 0;i<arr.length;i++){
             if(answ==arr[i]){
                this.sixarr.splice(i, 1);
             }
           }
           console.log( this.sixarr)
         }
        
         console.log(answ)
      

     },
     finish(){
         console.log(this.fivearr.join(','))
        this.instance.$post('/rest/wx/reception/addGfpAndAimQuestionnaire',{
           gxId:this.gxId,
           receptionId:this.receptionId,
           way:this.value1,
           position:this.value2,
           joinClub:this.value3,
           privateCoach:this.value4,
           requirement:this.fivearr.join(','),
           parts:this.sixarr.join(','),
           fitTimes:this.value5,
           fitnessPeriod:this.value6,
           possibility:this.value7,
        },res => {
        console.log(res);
        if(res.rel){
             this.$router.push({
                name: "questionlist",
                query: {
                   gxId:this.gxId, 
                   receptionId:this.receptionId,
                   gfpid:res.msg,
                   fanggfp:1
                }
              });
        }else{
            this.$vux.toast.text(res.msg, "center"); 
        }
        })
    
     }
   },
   mounted(){
       $('.mint-cell-wrapper').css('padding','0')
       $('input[type=radio]').prop('disabled','disabled')
        
   },
   updated(){
   
   },
   components: {
     
   }
 }
</script>

<style scoped lang="less">
.margintop{margin-top: 0.2rem;}
.marginbottom{margin-bottom: 0.2rem;}
.line{border-bottom: 1px solid #D6D6D6}
.hang{line-height: 0.8rem!important;}
 .question_con{padding:0 0.3rem;}
 .quetext{
     height:0.8rem;
     line-height: 1rem;
     font-size:0.3rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:#1D1D1D;
}
.question_jindu{width:94%; height:1.36rem;background:rgba(247,247,247,1);padding:0 3%;position: fixed;top:0;left:0;z-index: 100;}
.numjindu{text-align: center;padding:0.16rem 0;}
.zhongchang{width:100%;height:0.1rem;
background:rgba(153,203,255,1);
border-radius:5px;position: relative;}
.jindutiao{width:100%; height:0.1rem;
background:rgba(53,152,255,1);
border-radius:5px;}
.jinduyuan{width:0.32rem;height:0.32rem;line-height: 0.32rem; background:rgba(31,141,255,0.5);
border-radius:50%;position: absolute;top:-80%;text-align: center;left:96%;}
.jinduxiaoyuan{display: inline-block; width:0.24rem;height:0.24rem;background:rgba(53,152,255,1);
border-radius:50%;}
.quesheight{height:1.36rem;}

.answer_wrap{padding:0.1rem 0;}
.answer_wrap .item{ width:17%;height:0.5rem;line-height: 0.5rem;text-align: center;background:rgba(247,247,247,1);
border-radius:4px;display: inline-block;margin-right:2%;}
.answer_wrap .active{background:#4A77B0;}
.answer_wrap .active span{color:#FFFFFF!important;}
.answer_wrap .item:last-child{margin-right:0;}
.answer_wrap .item span{font-size:0.24rem;color:#1D1D1D;}
.addCustomer_finish {
    margin: 0.3rem auto;
    width: 92%;
    margin-left: 4%;
    height: 48px;
    line-height:48px;
    font-size: 18px;
    text-align: center;
    background: #5176AB;
    border-radius: 6px;
    color: #fff;
    font-family: "微软雅黑";
    }
</style>
