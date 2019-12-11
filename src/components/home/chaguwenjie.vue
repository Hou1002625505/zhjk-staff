<template>
 <div class='maintype'>
    <div class="question_wrap">
         <div class="question_jindu">
            <div class="numjindu">{{yiwan}} / 6</div>
            <div class="zhongchang">
               <div class="jindutiao" :style="{'width':(yiwan/6)*100+'%'}"></div>
               <div class="jinduyuan" :style="{'left':(yiwan/6)==1?0.96*100+'%':(yiwan/6)*100+'%'}"><span class="jinduxiaoyuan"></span></div>
            </div>
        </div>
        <div class="quesheight"></div>
        <div class="question_con">
             <div class="question_item"> 
             <div class="quetext">1、经济实力?</div> 
            <mt-radio            
                v-model="value1"
                :options="['弱', '一般','强']">
            </mt-radio>
            </div>

             <div class="question_item"> 
             <div class="quetext">2、购卡意愿?</div>
            <mt-radio            
                v-model="value2"
                :options="['弱', '一般','强']">
            </mt-radio>
            </div>

             <div class="question_item"> 
             <div class="quetext">3、购私教意愿?</div>
            <mt-radio            
                v-model="value3"
              :options="['弱', '一般','强','不知道']">
            </mt-radio>
            </div>
            <div class="question_item"> 
             <div class="quetext">4、购美容意愿？</div>
            <mt-radio            
                v-model="value4"
                :options="['弱', '一般','强','不知道']">
            </mt-radio>
            </div>
            
             <div class="question_item"> 
             <div class="quetext">5、购医美意愿?</div>
            <mt-radio            
                v-model="value5"
                :options="['弱', '一般','强','不知道']">
            </mt-radio>
            </div>

             <div class="question_item line"> 
             <div class="quetext line hang">6、抗拒原因?（可多选）</div>
              <div class="answer_wrap margintop">
                  <div class="item " :class="{active:(sixarr.toString()).indexOf('没时间')!=-1}" @click="selectanswer1('没时间')"><span>没时间</span></div>
                  <div class="item"  :class="{active:(sixarr.toString()).indexOf('要比较')!=-1}" @click="selectanswer1('要比较')"><span>要比较</span></div>
                  <div class="item"  :class="{active:(sixarr.toString()).indexOf('要商量')!=-1}" @click="selectanswer1('要商量')"><span>要商量</span></div>
                  <div class="item" :class="{active:(sixarr.toString()).indexOf('距离远')!=-1}" @click="selectanswer1('距离远')"><span>距离远</span></div>
                   <div class="item" :class="{active:(sixarr.toString()).indexOf('价格贵')!=-1}" @click="selectanswer1('价格贵')"><span>三头肌</span></div>
              </div>
               <div class="answer_wrap marginbottom">
                    <div class="item" :class="{active:(sixarr.toString()).indexOf('服务差')!=-1}" @click="selectanswer1('服务差')"><span>服务差</span></div>
                     <div class="item" :class="{active:(sixarr.toString()).indexOf('环境差')!=-1}" @click="selectanswer1('环境差')"><span>环境差</span></div>
                     <div class="item" :class="{active:(sixarr.toString()).indexOf('设备少')!=-1}" @click="selectanswer1('设备少')"><span>设备少</span></div>
                      <div class="item" :class="{active:(sixarr.toString()).indexOf('不能停车')!=-1}" @click="selectanswer1('不能停车')"><span>大腿</span></div>
               </div>
            </div>

            <div class="question_item"> 
             <div class="quetext">请对本次接待进行总结</div>            
            </div>
            <div>
                <textarea v-model="value6"></textarea>
            </div>
        </div>
    </div>
    <!-- <div class="addCustomer_finish" @click="jiefinish()"><span>完成</span></div> -->
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
             sixarr:[],
             value6:"",
       gxId:this.$route.query.gxId,
       receptionId:this.$route.query.receptionId,
       gfpid:this.$route.query.gfpid,
       parid:this.$route.query.parid,
     }
   },
   created(){
     this.getgujie()
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
       
           if(this.sixarr.length>0){
               this.yiwanlist.push(1)
           }  

           if(this.value5 != ""){
               this.yiwanlist.push(1)
           }
          
         console.log(this.yiwanlist)    
       return this.yiwanlist.length
       }
     
   },
   methods: {
       getgujie(){
          this.instance.$post('/rest/wx/reception/getAdviserSummaryById ',{
            user:this.gxId
        },res => {
        console.log(res);
          this.value1=res.rows[0].economicPower
        this.value2=res.rows[0].purchaseIntention
         this.value3=res.rows[0].personalIntention
          this.value4=res.rows[0].cosmetologyIntention
           this.value5=res.rows[0].beautyIntention
            this.value6=res.rows[0].summary          
            this.sixarr = res.rows[0].refusalReason

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
      jiefinish(){

         if(this.value1==""){
		 this.$vux.toast.text("请填写完整", "center");
		return;
	}else if(this.value2==""){
		 this.$vux.toast.text("请填写完整", "center");
		return;
	}else if(this.value3==""){
		 this.$vux.toast.text("请填写完整", "center");
		return;
	}else if(this.value4==""){
		 this.$vux.toast.text("请填写完整", "center");
		return;
	}else if(this.value5==""){
         this.$vux.toast.text("请填写完整", "center");
		return;
    }else if(this.value6==""){
          this.$vux.toast.text("请填写完整", "center");
		return;
    }else{ 
        this.instance.$post('/rest/wx/reception/addAdviserSummary',{
           gxId:this.gxId,
           receptionId:this.receptionId,
           gfpId:this.gfpid,
           parId:this.parid,
           economicPower:this.value1,
           purchaseIntention:this.value2,
           personalIntention:this.value3,
           cosmetologyIntention:this.value4,
           beautyIntention:this.value5,
           refusalReason:this.sixarr.join(','),         
           summary:this.value6,
         
        },res => {
        console.log(res);

        if(res.rel){
             this.$router.push({
                name: "customerDetail",
                query: {
                   filid:this.gxId
                  
                }
              });
        }else{
            this.$vux.toast.text(res.msg, "center"); 
        }

        })
    
        }

     }
   },
   mounted(){
       $('.mint-cell-wrapper').css('padding','0')
      
        
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
textarea{width:94%;height:1rem;background:rgba(247,247,247,1);
border:1px solid rgba(214,214,214,1);outline: none;resize:none;padding:3%;font-size: 0.3rem;color:#1D1D1D;}
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
