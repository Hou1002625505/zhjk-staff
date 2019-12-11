<template>
 <div class='container'>
    <div class="ques_list_wrap">
    <div class="ques_list">

        <div class="ques_item" @click="gfpclick()">
            <div class="item_left">
                <div class="title">Inbody检测</div>
                <div class="miaosu">
                    <p>采用极其精确的人体成份分析仪，</p>
                    <p>检查人体成份情况</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
              <!-- <div class="sanjiao" v-show="this.fangdong==1"><span>完成</span></div> -->
        </div>

         <div class="ques_item" @click="parclick()">
            <div class="item_left">
                <div class="title">体态静态评估</div>
                <div class="miaosu">
                    <p>通过评估发现你身上存在的一些</p>
                    <p>疼痛和活动受限的问题</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
           
              <div class="sanjiao" v-show="this.fangjing==0"><span>完成</span></div>
        </div>

        <div class="ques_item" @click="dongclick()">
            <div class="item_left">
                <div class="title">FMS功能性运动</div>
                <div class="miaosu">
                    <p>检测人体运动的对称性、弱链以及</p>
                    <p>局限性,对运动代偿进行跟踪测试</p>
                </div>
            </div>
             <div class="item_right">
                 <span>开始测试</span>
             </div>
              <div class="sanjiao" v-show="this.fangdong==0"><span>完成</span></div>
        </div>

    </div>
     <div class="addCustomer_finish" @click="finshpg()"><span>完成评估</span></div>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       gxId:this.$route.query.gxId,
       mobile:this.$route.query.mobile,
		customerName:this.$route.query.customerName,      
       fangdong:this.$route.query.fangdong,   
       fangjing:this.$route.query.fangjing,
       zhiqingid:this.$route.query.zhiqingid,
       jingid:this.$route.query.jingid,
       dongid:this.$route.query.dongid
     }
   },
   created(){

   },
   methods: {
     
     gfpclick(){
        
             this.$router.push({
                name: "inbodypic",
                query: {
                   gxId:this.gxId, 
                    mobile:this.mobile,   
                }
              });
        
         
     },
    //  体态静态评估
      parclick(){        

            this.$router.push({
                name: "jingpg",
                query: {
                   gxId:this.gxId, 
                   mobile:this.mobile,
                   fangdong:this.fangdong,
                   dongid:this.dongid,
                   zhiqingid:this.zhiqingid   
                }
              }); 
     },
     dongclick(){
        this.$router.push({
                name: "dongpg",
                query: {
                   gxId:this.gxId, 
                    mobile:this.mobile,
                    fangjing:this.fangjing,
                    jingid:this.jingid,
                    zhiqingid:this.zhiqingid   
                }
              }); 
     },
     finshpg(){
         console.log(this.gfpid)
        
         if(this.fangdong == undefined && this.fangjing == undefined){
             this.$vux.toast.text("请至少完成一项测试");
         }else{
           console.log(this.jingid)
            console.log(this.dongid)
            if(this.jingid == undefined){
              
                 this.instance.$post('/rest/wx/reception/updateSportsConsent',{
                  id:this.zhiqingid,
                  pacId:this.dongid
                 },res => {
                  console.log(res);
                })
            }else if(this.dongid == undefined){
               
                 this.instance.$post('/rest/wx/reception/updateSportsConsent',{
                    id:this.zhiqingid,
                  gxId:this.jingid
                 },res => {
                  console.log(res);
                })
            }else{
                
                  this.instance.$post('/rest/wx/reception/updateSportsConsent',{
                    id:this.zhiqingid,
                  gxId:this.jingid,
                  pacId:this.dongid
                 },res => {
                  console.log(res);
                })
            }
           
            this.$router.push({
                name: "ticepgbao",
                query: {
                   gxId:this.gxId, 
                   mobile:this.mobile    
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
