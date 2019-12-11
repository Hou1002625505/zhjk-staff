<template>
 <div class='container'>
    <div class="ques_list_wrap">
    <div class="ques_list">
        <div class="ques_item" @click="gfpclick()">
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
              <div class="sanjiao" v-show="this.fanggfp==1"><span>完成</span></div>
        </div>

         <div class="ques_item" @click="parclick()">
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
             <div class="sanjiao1" v-show="this.fangpar==1"><span>未通过</span></div> 
              <div class="sanjiao" v-show="this.fangpar==0"><span>通过</span></div>
        </div>

    </div>
     <div class="addCustomer_finish" @click="xiayibu()"><span>下一步</span></div>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       gxId:this.$route.query.gxId,
       receptionId:this.$route.query.receptionId,
       fanggfp:this.$route.query.fanggfp,
       gfpid:this.$route.query.gfpid,
       parid:this.$route.query.parid,
       fangpar:this.$route.query.fangpar,
     }
   },
   methods: {
     gfpclick(){
         if(this.fanggfp==1){
             this.$router.push({
                name: "chagfp",
                query: {
                   gxId:this.gxId, 
                  parid:this.parid,
                    gfpid:this.gfpid,
                    fangpar:this.fangpar,
                     fanggfp:this.fanggfp     
                }
              });
         }else{
          this.$router.push({
                name: "gfpquestion",
                query: {
                   gxId:this.gxId, 
                   receptionId:this.receptionId,
                    parid:this.parid,
                    gfpid:this.gfpid,
                   fangpar:this.fangpar,
                     fanggfp:this.fanggfp 
                }
              });
         }
         
     },
      parclick(){
         if(this.fangpar==0 || this.fangpar==1){

            this.$router.push({
                name: "chapar",
                query: {
                   gxId:this.gxId, 
                   parid:this.parid,
                    gfpid:this.gfpid,
                  fangpar:this.fangpar,
                    fanggfp:this.fanggfp     
                }
              }); 
           

         }else{
            this.$router.push({
                name: "parquestion",
                query: {
                   gxId:this.gxId, 
                   receptionId:this.receptionId,
                    fangpar:this.fangpar,
                     fanggfp:this.fanggfp, 
                     parid:this.parid,
                    gfpid:this.gfpid
                }
              });
         } 
         

     },
     xiayibu(){
         console.log(this.gfpid)
         if(this.gfpid == undefined && this.parid == undefined){
             this.$vux.toast.text("请至少完成一项问卷");
         }else{
           this.$router.push({
                name: "guwenjie",
                query: {
                   gxId:this.gxId, 
                   receptionId:this.receptionId,  
                  gfpid:this.gfpid,
                  parid:this.parid
                
                }
              });
         }
           
     }
   },
   components: {
   
   }
 }
</script>

<style scoped lang="less">
  .ques_list_wrap{width:100%;height:100%;background:#F7F7F7;}
  .ques_list{padding:0 3%;padding-top:0.3rem;}
  .ques_item{width:94%;height:2.4rem;background:rgba(255,255,255,1);border-radius:10px;padding:0 3%;position: relative;margin-bottom: 0.3rem}
  .item_left{float:left;}
  .item_left .title{font-size: 0.4rem;color:#1D1D1D; margin-top:0.45rem;}
   .item_left .miaosu{margin-top:0.1rem;}
   .item_left .miaosu p{font-size: 0.24rem;color:#999999;}
   .item_right{float:right; width:1.5rem;height:0.6rem;line-height:0.6rem;text-align: center; background:#4A77B0;border-radius:4px;
     margin-top:0.9rem;
   } 
   .item_right span{font-size: 0.3rem;color:#FFFFFF;} 
   .sanjiao{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_complete@2x.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
   }
   .sanjiao span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
    .sanjiao1{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_notapproved@2x.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
   }
   .sanjiao1 span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
   .addCustomer_finish {
    margin: 0.3rem auto 0;
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
