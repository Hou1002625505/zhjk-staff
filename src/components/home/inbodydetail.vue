<template>
 <div class='container'>
      
        <div class="inbody_wrap"  v-for="(item,index) in inbodylist" :key="index" >
          <div class="inbody_jichu">
               <div class="inbody_jichu1">
                  <div class="title">
                      <p class="text1">Inbody体测</p>
                      <p class="gengduo">{{formatDate(testtime)}}</p>
                  </div>
                  <div class="lianjie">
                <div class="duibi" @click="duibimeth()"><span>对比分析</span><em class="jiantou"></em></div>
                <div class="lishi" @click="lishijilu()"><span>历史记录</span><em class="jiantou"></em></div> 
                </div>
            <div data-v-3e1d570a="" class="latestSide"> 
                <div data-v-3e1d570a="" class="assess clearfix">
                    <div data-v-3e1d570a="" class="score">
                    <div data-v-3e1d570a="" class="scores">
                    <p data-v-3e1d570a="">肌肉控制</p> 
                    <p data-v-3e1d570a="">{{item.muscle_control}}kg</p>
                    </div>
                    </div> 
                    <div data-v-3e1d570a="" class="pingGu">
                    <div data-v-3e1d570a="" class="circle1">
                    <div data-v-3e1d570a="" class="content">
                    <p data-v-3e1d570a="">健康评估</p> 
                    <p data-v-3e1d570a=""><span data-v-3e1d570a=""> {{item.fitness_score}} </span>分</p> 
                    <p data-v-3e1d570a="">内脏脂肪等级：{{item.visceral_fat_level}}</p> 
                    <div data-v-3e1d570a="" class="line"></div>
                    </div>
                    </div>
                    </div> 
                    <div data-v-3e1d570a="" class="muscle">
                    <div data-v-3e1d570a="" class="muscle1">
                    <p data-v-3e1d570a="">脂肪控制</p> 
                    <p data-v-3e1d570a="">{{item.fat_control}}kg</p>
                    </div>
                    </div>
                </div>
                 <div class="feipang_text1 feipang_text3">
                 <span class="xian"></span> <span class="text">肥胖指标</span>
                </div>


                <div class="sideContrast ">
         <div class="condition">
           <div class="cd">
             <p>体重</p>
             <p>{{item.weight}}<img :src="item.weight<item.weight_min?falling:(item.weight_min<=item.weight)&&(item.weight<=item.weight_max)?'':rising" alt="" v-if="!(item.weight_min<=item.weight)&&(item.weight<=item.weight_max)"></p>
           </div>
 
         </div>
          <div class="condition">
           <div class="cd" >
             <p>骨骼肌 </p>
             <p>{{item.skeletal_muscle_mass}}<img :src="item.skeletal_muscle_mass<item.skeletal_muscle_mass_min?falling:(item.skeletal_muscle_mass_min<=item.skeletal_muscle_mass)&&(item.skeletal_muscle_mass<=item.skeletal_muscle_mass_max)?'':rising" alt="" v-if="!(item.skeletal_muscle_mass_min<=item.skeletal_muscle_mass)&&(item.skeletal_muscle_mass<=item.skeletal_muscle_mass_max)"></p>
           </div>
         </div>
          <div class="condition">
           <div class="cd">
             <p>体脂肪 </p>
             <p>{{item.body_fat_mass}}<img :src="item.body_fat_mass<item.body_fat_mass_min?falling:(item.body_fat_mass_min<=item.body_fat_mass)&&(item.body_fat_mass<=item.body_fat_mass_max)?'':rising" alt="" v-if="!(item.body_fat_mass_min<=item.body_fat_mass)&&(item.body_fat_mass<=item.body_fat_mass_max)"></p>
           </div>
         </div>
          <div class="condition" style="width:26%">
           <div class="cd">
             <p>身体水分含量 </p>
             <p>{{item.total_body_water}}<img :src="item.total_body_water<item.total_body_water_min?falling:(item.total_body_water_min<=item.total_body_water)&&(item.total_body_water<=item.total_body_water_max)?'':rising" alt="" v-if="!(item.total_body_water_min<=item.total_body_water)&&(item.total_body_water<=item.total_body_water_max)"></p>
           </div>
         </div>
          <div class="condition">
           <div class="cd">
             <p>去脂体重 </p>
             <p>{{item.fat_free_mass}}<img :src="item.fat_free_mass<item.fat_free_mass_min?falling:(item.fat_free_mass_min<=item.fat_free_mass)&&(item.fat_free_mass<=item.fat_free_mass_max)?'':rising" alt="" v-if="!(item.fat_free_mass_min<=item.fat_free_mass)&&(item.fat_free_mass<=item.fat_free_mass_max)"></p>
           </div> 
         </div>
       </div> 
               
                
            </div>
             <div class="feipang_text1 feipang_text2">
                 <span class="xian"></span> <span class="text">肥胖指标</span>
             </div>
               </div>
               <div class="inbody_feipang">
                  <div class="zhushu1">
                      <div class="zhiliang">
                          <p><img src="../../assets/images/icon_bodymassindex@2x.png" ><span class="jinum">{{item.bmi}}</span><span class="danwei">kg/m<sup>2</sup></span>  </p>
                           <p class="name">身体质量指数</p>
                      </div>
                      <div class="tizhi">

                          <p><img src="../../assets/images/icon_physicalfitnesspercent@2x.png" ><span class="jinum">{{(item.percent_body_fat).toFixed(1)}}</span><span class="danwei">%</span>  </p>
                           <p class="name">体脂百分比</p>
                      </div>
                  </div>
                   <div class="zhushu2">
                        <div class="yaotun">
                             <p><img src="../../assets/images/icon_waisttohipratio@2x.png" ><span class="jinum">{{item.waist_hip_ratio}}</span><span class="danwei">%</span>  </p>
                           <p class="name">腰臀比</p>
                        </div>
                      <div class="jichu">
                           <p><img src="../../assets/images/icon_basicmetabolism@2x.png" ><span class="jinum">{{item.bmr}}</span><span class="danwei">kcal</span>  </p>
                           <p class="name">基础代谢</p>
                      </div>
                   </div>
               </div>
               <div class="tuijianka">
                   <p>推荐每天摄入的卡路里量：{{item.rbmr}}kcal</p>
               </div>
          </div>
          <div class="fengeline"></div>
           <div class="inbody_more">
               <div class="inbody_jirou">
                   <div class="jieduantext"><img src="../../assets/images/img_left@2x.png" ><span>节段肌肉</span><img src="../../assets/images/img_right@3x.png" ></div>
                 <div class="feipang_text1">
                  <span class="xian"></span> <span class="text">肌肉量 / 评估</span>
                 </div>
                   <div class="inbody_jirou_wrap">
                        <div class="left_wrap">
                            <div class="ltop">
                                <div class="jiroukg">{{(item.segment_lean_left_arm).toFixed(1)}}kg<span :class="{digao:etype3[1] != 1}">{{etype3[1]==0?'低':etype3[1]==1?'标准':'高'}}</span></div>
                                <div class="jirouline"></div>
                                <div class="jirouname">左上肢</div>
                            </div>
                            <div class="ldown">
                                <div class="jiroukg">{{(item.segment_lean_left_leg).toFixed(1)}}kg<span :class="{digao:etype3[4] != 1}">{{etype3[4]==0?'低':etype3[4]==1?'标准':'高'}}</span></div>
                                <div class="jirouline"></div>
                                <div class="jirouname">左下肢</div>
                            </div>
                        </div>
                       <div class="inbody_jirou_img"></div>
                        <div class="right_wrap">
                             <div class="rtop">
                                 <div class="jiroukg1"><span :class="{digao:etype3[0] != 1}">{{etype3[0]==0?'低':etype3[0]==1?'标准':'高'}}</span>{{(item.segment_lean_right_arm).toFixed(1)}}kg</div>
                                <div class="jirouline"></div>
                                <div class="jirouname">右上肢</div>
                             </div>
                             <div class="qugan">
                                   <div class="jiroukg1"><span :class="{digao:etype3[2] != 1}">{{etype3[2]==0?'低':etype3[2]==1?'标准':'高'}}</span>{{(item.segment_lean_trunk).toFixed(1)}}kg</div>
                                <div class="jirouline"></div>
                                <div class="jirouname">躯干</div>
                            </div>                       
                             <div class="rdown">
                                   <div class="jiroukg1"><span :class="{digao:etype3[3] != 1}">{{etype3[3]==0?'低':etype3[3]==1?'标准':'高'}}</span>{{(item.segment_lean_right_leg).toFixed(1)}}kg</div>
                                <div class="jirouline"></div>
                                <div class="jirouname">右下肢</div>
                             </div>
                        </div>
                     
                   </div>
               </div>
                <div class="fengeline"></div>
               <div class="inbody_zhifang">
                    <div class="jieduantext"><img src="../../assets/images/img_left@2x.png" ><span>节段脂肪</span><img src="../../assets/images/img_right@3x.png" ></div>
                   <div class="feipang_text1">
                     <span class="xian"></span> <span class="text">(体脂百分比 / 肌肉量 ) / 评估</span>
                     <p>*节段脂肪是推测值</p>
                   </div>
                   <div class="inbody_zhifang_wrap">
                       <div class="zltop">
                           <div class="zhiname">左上肢</div>
                            <div class="zhilength">
                                <div class="zhijindu" :style="{width:item.percent_segment_fat_left_arm+'%'}"></div>
                            </div>
                              <div class="zhivalue">
                                  <p>{{item.percent_segment_fat_left_arm}}%</p>
                                  <p class="line"></p>
                                  <p>{{item.lean_left_arm}}kg</p>
                              </div>
                              <div class="zhibiao" :class="{digao:etype3[6] != 1}">{{etype3[6]==0?'低':etype3[6]==1?'标准':'高'}}</div>                                 
                       </div>

                       <div class="zrtop">
                           <div class="zhiname">右上肢</div>
                            <div class="zhilength">
                                <div class="zhijindu"  :style="{width:item.percent_segment_fat_right_arm+'%'}"></div>
                            </div>
                              <div class="zhivalue">
                                  <p>{{item.percent_segment_fat_right_arm}}%</p>
                                  <p class="line"></p>
                                  <p>{{item.lean_right_arm}}kg</p>
                              </div>
                              <div class="zhibiao" :class="{digao:etype3[5] != 1}">{{etype3[5]==0?'低':etype3[5]==1?'标准':'高'}}</div> 
                       </div>
                       <div class="zqugan">
                            <div class="zhiname">躯干</div>
                            <div class="zhilength">
                                <div class="zhijindu"  :style="{width:item.percent_segment_fat_trunk+'%'}"></div>
                            </div>
                              <div class="zhivalue">
                                  <p>{{item.percent_segment_fat_trunk}}%</p>
                                  <p class="line"></p>
                                  <p>{{item.lean_trunk}}kg</p>
                              </div>
                              <div class="zhibiao" :class="{digao:etype3[7] != 1}">{{etype3[7]==0?'低':etype3[7]==1?'标准':'高'}}</div> 
                       </div>
                        <div class="zldown">
                             <div class="zhiname">左下肢</div>
                            <div class="zhilength">
                                <div class="zhijindu"  :style="{width:item.percent_segment_fat_left_leg+'%'}"></div>
                            </div>
                              <div class="zhivalue">
                                  <p>{{item.percent_segment_fat_left_leg}}%</p>
                                  <p class="line"></p>
                                  <p>{{item.lean_left_leg}}kg</p>
                              </div>
                              <div class="zhibiao" :class="{digao:etype3[9] != 1}">{{etype3[9]==0?'低':etype3[9]==1?'标准':'高'}}</div> 
                        </div>
                       <div class="zrdown">
                            <div class="zhiname">右下肢</div>
                            <div class="zhilength">
                                <div class="zhijindu"  :style="{width:item.percent_segment_fat_right_leg+'%'}"></div>
                            </div>
                              <div class="zhivalue">
                                  <p>{{item.percent_segment_fat_right_leg}}%</p>
                                  <p class="line"></p>
                                  <p>{{item.lean_right_leg}}kg</p>
                              </div>
                              <div class="zhibiao" :class="{digao:etype3[8] != 1}">{{etype3[8]==0?'低':etype3[8]==1?'标准':'高'}}</div> </div>                     
                   </div>
               </div>
                <div class="fengeline"></div><!--分割线 -->
               <div class="inbody_dianzu">
                   <div class="jieduantext"><img src="../../assets/images/img_left@2x.png" ><span>生物电阻值</span><img src="../../assets/images/img_right@3x.png" ></div>
                     <div class="inbody_dianzu_wrap">
                         <div class="dianzuname">
                             <div class="zu_wrap">
                                <div class="zuname" style="font-size:0.34rem;width:48%"><span style="padding-left:16%;">Z</span></div>
                                <div class="zu20" style="font-size:0.34rem;width:24%"><span>20KHZ</span></div>
                                <div class="zu100" style="font-size:0.34rem;"><span>100KHZ</span></div>
                            </div>
                         </div>
                          <div class="drtop">
                              <div class="zu_wrap">
                                <div class="zuname"><span class="yuand"></span>右上肢</div>
                                <div class="zu20">{{item.ira20}}</div>
                                <div class="zu100">{{item.ira100}}</div>
                               </div>
                         </div>
                          <div class="dltop">
                              <div class="zu_wrap">
                                <div class="zuname"><span class="yuand1"></span>左上肢</div>
                                <div class="zu20">{{item.ila20}}</div>
                                <div class="zu100">{{item.ila100}}</div>
                               </div>
                         </div>
                         <div class="dqugan">
                              <div class="zu_wrap">
                                <div class="zuname"><span class="yuand2"></span>躯干</div>
                                <div class="zu20">{{item.it20}}</div>
                                <div class="zu100">{{item.it100}}</div>
                               </div>
                         </div>
                         <div class="drdown">
                              <div class="zu_wrap">
                                <div class="zuname"><span class="yuand3"></span>右下肢</div>
                                <div class="zu20">{{item.irl20}}</div>
                                <div class="zu100">{{item.irl100}}</div>
                               </div>
                         </div>
                          <div class="dldown">
                              <div class="zu_wrap">
                                <div class="zuname"><span class="yuand4"></span>左下肢</div>
                                <div class="zu20">{{item.ill20}}</div>
                                <div class="zu100">{{item.ill100}}</div>
                               </div>
                         </div>
                     </div>
               </div>

           </div>
     </div>
   
     <div class="pickzanwujilu" v-show="noinbodyflag"><p>暂无记录</p></div>
 </div>
    
</template>

<script>
import $ from 'jquery'
 export default {
   data () {
     return {
      customerId:this.$route.query.cusid,   
      inbodylist:[],
       etype3:[],
        testtime:"",
        noinbodyflag:false,
         falling:require('../../assets/images/home_menu_increase@2x.png'),
         rising:require('../../assets/images/home_menu_increase拷贝@2x.png'),
     }
   },
   created(){
     this.getinbody()
   },
   methods: {
          getinbody(){

        // this.instance.$post('/rest/wx/bodyTest/getBodyTestLastByCus',{
        //      customerId:this.customerId
        //  },res => {

        // console.log(res);
        
        // if(res.rel){
            
        //     var data = res.rows;
        //     console.log(data)

        //     if(data == null){
        //         this.noinbodyflag = true; 
        //     }
        //     if(data.length>0){
        //         data.forEach(item => {
        //             this.testtime = item.testtime
        //             this.inbodylist.push(item.bodyTestDetail)
        //             console.log(item.bodyTestDetail.etype3)
        //             var etype = item.bodyTestDetail.etype3
        //             this.etype3 = Number(etype).toString().split('')
        //             var typelen = this.etype3.length;
        //              if(typelen < 10){
        //                var cha = 10 - typelen;
        //                 for(var i = 0;i < cha;i++){
        //                     this.etype3.unshift(0)
        //                 }
        //              }
        //             console.log(this.etype3[0])
        //         });
        //     }else{
        //         this.noinbodyflag = true;
        //     }

        // }

        // })

        var that = this;
         var data = {
      customerId:this.customerId
     };
     console.log(data)
       $.ajax({
    type:"post",   
    url:this.config.service_ip + "/rest/wx/bodyTest/getBodyTestLastByCus",
    async:false,
    //contentType: "application/json;charset=UTF-8",
    //dataType: "json",
    data:data,
    success: function(res){
      console.log(res)
      if(res.rel){
            
            var data = res.rows;
            console.log(data)

            if(data == null){
                that.noinbodyflag = true; 
            }
            if(data.length>0){
                data.forEach(item => {
                    that.testtime = item.testtime;
                  
                    if(item.bodyTestDetail==null){
                      
                       that.noinbodyflag = true;
                         return; 
                    }
                    that.inbodylist.push(item.bodyTestDetail)
                    console.log(item.bodyTestDetail.etype3)
                    var etype = item.bodyTestDetail.etype3
                    that.etype3 = Number(etype).toString().split('')
                    var typelen = that.etype3.length;
                     if(typelen < 10){
                       var cha = 10 - typelen;
                        for(var i = 0;i < cha;i++){
                            that.etype3.unshift(0)
                        }
                     }
                    console.log(that.etype3[0])
                   
                });
            }else{
               console.log(that.noinbodyflag)
                that.noinbodyflag = true;
            }

        }
    },

    error: function(res){
        console.log(res)
     alert(res.readyState )
    }
   });

     },
     duibimeth(){
       this.$router.push({
                name: "inbodyduibi",
                query: {
                  customerId:this.customerId
                
                }
              });
     },
     lishijilu(){
         this.$router.push({
                name: "inbodylishi",
                query: {
                  customerId:this.customerId
                
                }
              });
     },
      formatDate (date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        if(month<10){
            month="0"+month;
        }
        return year + '-' + month + '-' + day; 
    },
   },
   components: {
     
   }
 }
</script>

<style scoped lang="less">
.pickzanwujilu{position: fixed;right: 0;left:0;top:0;bottom:0;background: #fff;text-align: center;z-index: 9999;}
.pickzanwujilu p{font-size: 0.34rem;color:#333;margin-top: 4rem;}
 .lianjie{height:1rem;padding:0 4%;}
.lianjie .duibi{text-align:center;width:1.5rem;height:0.48rem;line-height:0.48rem;background: #3598FF;border-radius: 0.3rem;color:#fff;float:left;margin:0.2rem  0;}
.lianjie .duibi span{font-size: 0.24rem;color:#FFFFFF;position: relative;bottom:0.03rem;}
.lianjie .lishi{text-align:center;width:1.5rem;height:0.48rem;line-height:0.48rem;background: #3598FF;border-radius: 0.3rem;color:#fff;float:right;margin:0.2rem  0;}
.lianjie .lishi span{font-size: 0.24rem;color:#FFFFFF;position: relative;bottom:0.03rem;}
.jiantou{  
			display: inline-block;
			width: 7px;
		    height: 7px;
		    border-top: 1px solid #fff;
		    border-right: 1px solid #fff;
		    transform: rotate(45deg);
		    /*position: absolute;
		    right: 0.1rem;
        top:0.28rem;*/
       position: relative;bottom:0.03rem;
        }
.fengeline{width:100%;height:0.2rem;background:rgba(247,247,247,1);}




.latestSide {
  padding:0.32rem 0;
  
  .title {
    font-size: 0.38rem;
    padding: 0.3rem 0.35rem;
  }
  .assess {
    padding-bottom: 0.3rem;
    width: 92%;
    position: relative;
    padding:0 4%;
    .score {
      width: 28%;
      font-size: 0.28rem;
      text-align: center;
      float: left;
      color: #1c1c1c;
      margin-top: 0.5rem;
      .scores {
        float: left;
        p:first-child {
          font-size: 0.28rem;
          line-height: 0.46rem;
          color: #7A7A7A;
        }
        p:last-child {
             font-size: 0.35rem;
    color: #1d1d1d;
        }
      }
    }
    .pingGu {
      width: 44%;
      float: left;
      .circle,
      .circle1 {
        position: relative;
        width: 1.82rem;
        font-size: 0.24rem;
          color: #1c1c1c;
        margin: 0 auto;
        .content{
          position: relative;
              padding: 0.36rem 0.2rem;
    text-align: center;
    .line{
       position: absolute;
    width: 2rem;
    height: 1px;
    margin-left: 0rem;
    height: 1;
    bottom: 0.75rem;
    background: url(../../assets/images/circleLine.png) no-repeat;
    background-size: 100% 100%;
    }
        }
        p:nth-child(2){
          font-size: 0.5rem;
          line-height: 0.9rem;
        }
      }
      .circle1 {
     width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: -0.22rem;
    left: 48%;
    -webkit-transform: translate(-42%);
    transform: translate(-44%);
    border: 4px solid #3598FF;
    border-radius: 50%;
      }
    }

    .muscle {
      width: 28%;
      float: right;
      .muscle1 {
        font-size: 0.35rem;
        color: #1d1d1d;
        margin-bottom: 0.3rem;
            margin-top: 0.5rem;
            text-align:right;
        p:first-child {
          font-size: 0.28rem;
          line-height: 0.46rem;
          color: #7a7a7a;
        }
      }
    }
  }
  .sideContrast {
    display: flex;
    padding: 0 0.3rem;
    padding-top: 0.2rem;
    .condition {
      // flex: 1;
      // -webkit-flex: 1;
      text-align: center;
     
      .cd {
        float: left;
        position: relative;
        p {
          font-size: 0.24rem;
          color: #1c1c1c;
        }
        p:first-child {
          font-size: 0.24rem;
          color: #7a7a7a;
        }
      }
      .db {
        float: left;
        padding-top: 0.44rem;
        //padding-left: 0.1rem;
        font-size: 0.25rem;
        img {
          float: left;
          width: 0.14rem;
          //margin-right: 0.02rem;
          // padding-top: 0.08rem;
        }
      }
    }
  }
}

 .latestSide {
// padding: 0.6rem 0;
// padding-bottom: 0.35rem;
//   text-align: center;
//   .title {
//     font-size: 0.38rem;
//     text-align: left;
//     padding: 0.3rem 0.35rem;
//   }
//   .assess {
//     padding-bottom: 0.3rem;
//     width: 100%;
//     position: relative;
//     .score {
//       width: 26%;
//       font-size: 0.24rem;
//       text-align: center;
//       float: left;
//       color: #1c1c1c;
//       margin-top: 0.5rem;
//       .scores {
//         float: right;
//         p:first-child {
//           font-size: 0.24rem;
//           line-height: 0.46rem;
//           color: #7A7A7A;
//         }
//         p:last-child {
//              font-size: 0.35rem;
//     color: #1d1d1d;
//         }
//       }
//     }
//     .pingGu {
//       width: 48%;
//       float: left;
//       .circle,
//       .circle1 {
//         position: relative;
//         width: 1.82rem;
//         font-size: 0.24rem;
//           color: #1c1c1c;
//         margin: 0 auto;
//         .content{
//           position: relative;
//               padding: 0.44rem 0.2rem;
//     text-align: center;
//     .line{
//        position: absolute;
//     width: 2rem;
//     height: 1px;
//     margin-left: 0.06rem;
//     height: 1;
//     bottom: 0.812rem;
//     background: url(../../assets/images/circleLine.png) no-repeat;
//     background-size: 100% 100%;
//     }
//         }
//         p:nth-child(2){
//           font-size: 0.5rem;
//           line-height: 0.9rem;
//         }
//       }
//       .circle1 {
//      width: 2.5rem;
//     height: 2.5rem;
//     position: absolute;
//     top: -0.22rem;
//     left: 48%;
//     -webkit-transform: translate(-42%);
//     transform: translate(-44%);
//     border: 4px solid #7980F5;
//     border-radius: 50%;
//       }
//     }

//     .muscle {
//       width: 26%;
//       float: right;
//       .muscle1 {
//         font-size: 0.35rem;
//         color: #1d1d1d;
//         margin-bottom: 0.3rem;
//             margin-top: 0.5rem;
//             text-align: left;
//         p:first-child {
//           font-size: 0.24rem;
//           line-height: 0.46rem;
//           color: #7a7a7a;
//         }
//       }
//     }
//   }
  .sideContrast {
    padding: 0 0.3rem;
    padding-top: 0.35rem;
        overflow: hidden;
    .condition {
          width: 20%;
          float: left;
         // position: relative;
      .cd {
        float: left;
        position: relative;
        p {
          font-size: 0.35rem;
          color: #1c1c1c;
          img{
             width: 0.14rem;
             margin-left: 0.05rem;
          }
        }
        p:first-child {
          font-size: 0.24rem;
          color: #7a7a7a;
        }
      }
    
      .db {
            float: left;
    padding-left: 0.1rem;
    font-size: 0.25rem;
    position: absolute;
    right: -0.25rem;
    top: 0.08rem;
        img {
          float: left;
          width: 0.14rem;
          margin-right: 0.02rem;
          margin-top: 0.48rem;
        }
      }
    }
    .condition:first-child,.condition:last-child{
      width: 17%;
    }
    .condition:last-child{
      .cd{
        float:right;
      }
    }
  }
}

 .inbody_jichu1{ }
.inbody_jichu1 .title{height:1rem;line-height: 1rem;padding:0 4%;}
.inbody_jichu1 .text1{float: left;font-size:0.34rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(28,28,28,1);}
.inbody_jichu1 .gengduo{float:right;font-size:0.26rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:#1d1d1d;}
.gengduo img{width:0.25rem;height:0.16rem;padding-left:0.2rem;}
.inbody_jichu1 .time{font-size:0.26rem;
font-family:PingFang-SC-Medium;
font-weight:500;padding:0 4%;
color:rgba(29,29,29,1);padding-bottom: 0.3rem; }
.feipang_text1{padding-bottom: 0.3rem;}
.feipang_text2{padding:0 4% 0.3rem;}
.feipang_text3{padding:0.6rem 4% 0;}
.feipang_text1 .xian{display: inline-block; width:0.05rem;
height:0.3rem;position: relative;top:0.02rem;
background:rgba(73,120,176,1);}
.feipang_text1 .text{font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(28,28,28,1);}
.inbody_feipang{}
.inbody_feipang .zhushu1{width:100%;height:1rem;border-top:1px solid #D6D6D6;border-bottom:1px solid #D6D6D6; }
.inbody_feipang .zhushu2{width:100%;height:1rem;border-bottom:1px solid #D6D6D6;}
.inbody_feipang .zhiliang{width:49%;height:1rem;border-right:1px solid #D6D6D6;display: inline-block;}
.inbody_feipang .tizhi{width:49%;height:1rem;display: inline-block;}
.inbody_feipang .yaotun{width:49%;height:1rem;border-right:1px solid #D6D6D6;display: inline-block;}
.inbody_feipang .jichu{width:49%;height:1rem;display: inline-block;}
.inbody_feipang img{width:0.36rem;height:0.4rem;vertical-align: text-bottom; float: left;
    padding-left: 0.8rem;    margin-top: 0.1rem;}
.inbody_feipang .jinum{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(28,28,28,1);
padding:0 2% 0 8%;
}
.inbody_feipang .danwei{font-size:0.2rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(28,28,28,1);}
.inbody_feipang .name{
    font-size:0.2rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
padding-left:14%;
text-align: center;
}
.tuijianka{width:92%;margin:0.3rem auto;
height:0.8rem;line-height: 0.8rem;text-align: center;
background:rgba(53,152,255,1);
border-radius:40px;}
.tuijianka p{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);}
.inbody_jirou{padding:0 4%;}
 .inbody_jirou_img{
    float: left;
    background: url(../../assets/images/img_people@2x.png);
    width: 2rem;
    height: 4.46rem;
    background-size: 100%;
    margin-left:16%;
    }
    .inbody_jirou_wrap{height:4.8rem;position: relative;padding:0 1%;}
     .left_wrap{float: left;}
     .left_wrap .ldown{position: absolute;bottom: 0.3rem;}
    .jiroukg{}
    .jiroukg span{font-size:0.3rem;padding-left:0.2rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}
    .jiroukg1 span{font-size:0.3rem;padding-right:0.2rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}

    .digao{font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,0,0,1)!important;}
    .jirouline{height:1px;background: #D6D6D6;}
    .jirouname{}
    .right_wrap{float:right;text-align: right;}
     .right_wrap .qugan{padding-top:0.36rem;}
     .right_wrap .rdown{position: absolute;bottom: 0.3rem;right:0;}
     .inbody_zhifang{padding:0 4%;}
.feipang_text1 p{font-size:0.26rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(153,153,153,1);}
.inbody_zhifang_wrap{padding:0 1%;}
.zltop{height:1rem;}
.zhiname{display: inline-block; width:16%;font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;line-height: 1rem;
color:rgba(153,153,153,1);}
.zhilength{display: inline-block; width:52%;height:0.1rem;background:rgba(153,203,255,1);
border-radius:8px;line-height: 1rem;position: relative;bottom:0.06rem;}
.zhilength .zhijindu{height: 0.1rem;background:#3598FF;}
.zhivalue{display: inline-block; width:12%;font-size:0.26rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(28,28,28,1);
position: relative;top:0.14rem;
padding:0 2%;
}
.zhivalue p{}
.zhivalue .line{border:0.5px dashed  rgba(29,29,29,1);}
.zhibiao{display: inline-block; width:10%;font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;line-height: 1rem;
color:rgba(28,28,28,1);}

.jieduantext{text-align: center;padding:0.3rem 0 0.2rem;}
.jieduantext img{width:0.43rem;height:0.59rem;vertical-align: middle;}
.jieduantext span{padding:0 5%;}
 .inbody_dianzu{padding:0 4%;}
 .zuname{display: inline-block; width:50%;height:;font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}
.zuname .yuand{display: inline-block; width:0.1rem;
height:0.1rem;
background:rgba(199,88,255,1);
border-radius:5px;
margin-right: 2%

;}
.zuname .yuand1{display: inline-block; width:0.1rem;
height:0.1rem;
background:#F16C53;
border-radius:5px;
margin-right: 2%

;}
.zuname .yuand2{display: inline-block; width:0.1rem;
height:0.1rem;
background:#FF9E3F;
border-radius:5px;
margin-right: 2%

;}
.zuname .yuand3{display: inline-block; width:0.1rem;
height:0.1rem;
background:#FECD5D;
border-radius:5px;
margin-right: 2%

;}
.zuname .yuand4{display: inline-block; width:0.1rem;
height:0.1rem;
background:#4E88FF;
border-radius:5px;
margin-right: 2%

;}
.zu20{display: inline-block; width:26%;height:;font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}
.zu100{display: inline-block; width:20%;height:;font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}
.zu_wrap{height:1rem;line-height: 1rem}
</style>
