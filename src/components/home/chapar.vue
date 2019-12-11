<template>
 <div class='maintype'>
    <div class="question_wrap">
        <div class="question_jindu">
            <div class="numjindu">{{yiwan}} / 7</div>
            <div class="zhongchang">
               <div class="jindutiao" :style="{'width':(yiwan/7)*100+'%'}"></div>
               <div class="jinduyuan" :style="{'left':(yiwan/7)==1?0.96*100+'%':(yiwan/7)*100+'%'}"><span class="jinduxiaoyuan"></span></div>
            </div>
        </div>
          <div class="quesheight"></div>
        <div class="question_con">
             <div class="question_item"> 
             <div class="quetext">1、有心脏问题或者高血压?</div> 
            <mt-radio            
                v-model="value1"
                :options="['是', '否']">
            </mt-radio>
            </div>
             <div class="question_item"> 
             <div class="quetext">2、被诊断出有慢性疾病（心脏病和高血压除外）?</div>
            <mt-radio            
                v-model="value2"
                :options="['是', '否']">
            </mt-radio>
            </div>

             <div class="question_item"> 
             <div class="quetext">3、现阶段在服用治疗慢性疾病处方?</div>
            <mt-radio            
                v-model="value3"
               :options="['是', '否']">
            </mt-radio>
            </div>
            <div class="question_item"> 
             <div class="quetext">4、医生告知过您仅能参加医生推荐的体力活动？</div>
            <mt-radio            
                v-model="value4"
                :options="['是', '否']">
            </mt-radio>
            </div>
            
             <div class="question_item"> 
             <div class="quetext">5、做日常体育运动是否感觉到胸痛?</div>
            <mt-radio            
                v-model="value5"
                :options="['是', '否']">
            </mt-radio>
            </div>

             <div class="question_item"> 
             <div class="quetext">6、近6个月来，进行体力活动或运动时，出现过</div>
             <div class="quetext">头晕跌倒或失去知觉?</div>
            <mt-radio            
                v-model="value6"
               :options="['是', '否']">
            </mt-radio>
            </div>
             <div class="question_item"> 
             <div class="quetext">7、因体力活动或运动加重的骨或关键疼痛或</div>
             <div class="quetext">功能障碍?</div>
            <mt-radio            
                v-model="value7"
               :options="['是', '否']">
            </mt-radio>
            </div>

        </div>
    </div>
    <div class="addCustomer_finish" @click="wancheng()" v-if="hisIndex!=1"><span>完成</span></div>
    <div class="tanchuang_wrap" v-show="tanflag">
        <div class="tanchuang">
             <div class="tanchuang_header">
                 <p>温馨提示</p>
             </div>
              <div class="tanchuang_con">
                  <p>该客户Par-Q问卷不通过</p>
                  <p>不建议参加运动</p>
              </div>
               <div class="tanchuang_btn" @click="tanhide()">
                   <p>我知道了</p>
               </div>
        </div>
    </div>
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
       tanflag:false,
        gxId:this.$route.query.gxId,
       receptionId:this.$route.query.receptionId,
         fanggfp:this.$route.query.fanggfp,
       gfpid:this.$route.query.gfpid,
         parid:this.$route.query.parid,
       fangpar:this.$route.query.fangpar,//0通过 1未通过
            hisIndex:this.$route.query.hisIndex
      
     }
   },
   created(){
       this.getpar()
   },
    computed:{
       
       yiwan(){
           this.yiwanlist = []
           if(this.value1 != ""){
               this.yiwanlist.push(1)
           }
            if(this.value2 != ""){
               this.yiwanlist.push(1)
           }
           if(this.value3 != ""){
               this.yiwanlist.push(1)
           }
           if(this.value4 != ""){
               this.yiwanlist.push(1)
           } 

           if(this.value5 != ""){
               this.yiwanlist.push(1)
           }
           if(this.value6 != ""){
               this.yiwanlist.push(1)
           }
            if(this.value7 != ""){
               this.yiwanlist.push(1)
           }
         console.log(this.yiwanlist)    
       return this.yiwanlist.length
       }
     
   },
   methods: {
       getpar(){
        this.instance.$post('/rest/wx/reception/getParQById',{
            id:this.parid
        },res => {
        console.log(res);
          this.value1=res.rows[0].heartOHypertension
        this.value2=res.rows[0].chronicDisease
         this.value3=res.rows[0].treatment
          this.value4=res.rows[0].limitedActivity
           this.value5=res.rows[0].chestPain
            this.value6=res.rows[0].uncomfortable
            this.value7=res.rows[0].dyskinesia

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
     tanhide(){
       this.tanflag = false;
        var item={
                   gxId:this.gxId, 
                   receptionId:this.receptionId,
                   gfpid:this.gfpid,
                   fanggfp:this.fanggfp,
                   fangpar:this.fangpar,
                   parid:this.parid
                }
           this.$route.meta.partc=item;
     this.$router.back();
        // this.$router.push({
        //         name: "questionlist",
        //         query: {
        //            gxId:this.gxId, 
        //            receptionId:this.receptionId,
        //            gfpid:this.gfpid,
        //            fanggfp:this.fanggfp,
        //            fangpar:this.fangpar,
        //            parid:this.parid
        //         }
        //       });
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
     wancheng(){
        var data={
             parId:this.parid,
              heartOHypertension:this.value1,
              chronicDisease:this.value2,
              treatment:this.value3,
            limitedActivity:this.value4,
            chestPain:this.value5,
            uncomfortable:this.value6,
            dyskinesia:this.value7
          }
          if(this.value1 == "是" || this.value2 == "是" || this.value3 == "是" || this.value4 == "是" || this.value5 == "是" || this.value6 == "是" || this.value7 == "是"){
             data.status = 1;
           }else{
             data.status=0;
           }
          this.instance.$post('/rest/wx/reception/updHealthParQuestionnaire',data,res => {
        console.log(res);
         if(res.rel){
            if(this.value1 == "是" || this.value2 == "是" || this.value3 == "是" || this.value4 == "是" || this.value5 == "是" || this.value6 == "是" || this.value7 == "是"){
             this.fangpar = 1;
             this.tanflag = true;
           }else{
                    var item={
                   gxId:this.gxId, 
                   receptionId:this.receptionId,
                   gfpid:this.gfpid,
                   fanggfp:this.fanggfp,
                   fangpar:0,
                   parid:this.parid
                }
           this.$route.meta.partc=item;
     this.$router.back();
              //  this.$router.push({
              //   name: "questionlist",
              //   query: {
              //      gxId:this.gxId, 
              //      receptionId:this.receptionId,
              //      gfpid:this.gfpid,
              //      fanggfp:this.fanggfp,
              //      fangpar:this.fangpar,
              //      parid:this.parid
              //   }
              // });
           }
          
        }else{
            this.$vux.toast.text(res.msg, "center"); 
        }
    })
     }
   },
   mounted(){
       $('.mint-cell-wrapper').css('padding','0')
    //    $('input[type=radio]').prop('disabled','disabled')
        
   },
   updated(){
   
   },
   components: {
     
   }
 }
</script>

<style scoped lang="less">
.maintype{
        position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-y: auto;
    z-index: 2;
}
.tanchuang_wrap{position: fixed;top:0;left:0;right:0;left:0;background: rgba(0,0,0,0.3);width:100%;height:100%;z-index: 101;}
.tanchuang{width:60%;margin:3rem auto 0;}
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
.jindutiao{height:0.1rem;
background:rgba(53,152,255,1);
border-radius:5px;}
.jinduyuan{width:0.32rem;height:0.32rem;line-height: 0.32rem; background:rgba(31,141,255,0.5);
border-radius:50%;position: absolute;top:-80%;text-align: center;}
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
