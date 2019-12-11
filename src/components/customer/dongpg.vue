<template>
 <div class='maintype'>

     <div class="jian1" v-show="jian5flag">
         <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/1jian.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">肩部灵活性</p>
                    <p class="miaosu miao">站立,一手从腋下屈肘,另一</p>
                    <p class="miaosu">手从肩上屈肘伸至背后靠近</p>
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">

                    <div class="fenshu_left">                   
                    <div class="answer">
                        <span style="padding-right:1%;">左:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="shoulderFlexibilityL" v-model="shoulderFlexibilityL"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityL.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="shoulderFlexibilityL" v-model="shoulderFlexibilityL"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityL.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="shoulderFlexibilityL" v-model="shoulderFlexibilityL"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityL.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="shoulderFlexibilityL" v-model="shoulderFlexibilityL"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityL.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>

                </div>

                     <div class="fenshu_right">
                       <div class="answer">
                        <span style="padding-right:1%;">右:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="shoulderFlexibilityR" v-model="shoulderFlexibilityR"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityR.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="shoulderFlexibilityR" v-model="shoulderFlexibilityR"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityR.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="shoulderFlexibilityR" v-model="shoulderFlexibilityR"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityR.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="shoulderFlexibilityR" v-model="shoulderFlexibilityR"/>
                        <span class="xuanzhong" v-show="(shoulderFlexibilityR.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                     </div>
                </div>
            </div>
         </div>
         <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                     <p>上下两手间距离大于1.5只手长度</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>2分</span>
                 </div>
                 <div class="fentext3">
                     <p>上下两手间距离大于一只手长度而小于1.5</p>
                     <p>只手长度</p>
                 </div>
            </div>  
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>3分</span>
                 </div>
                 <div class="fentext">
                     <p>上下两手间距离小于一只手长度</p>
                 </div>
            </div>
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian5pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian5next()">
                 <p>下一个动作</p>
             </div>
          </div>
     </div>

     <!-- f2 -->
      <div class="jian1" v-show="jian2flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/1.jpg" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">背阔肌长度</p>
                    <p class="miaosu miao">靠墙静蹲，呼气双手上举，吸气复原</p>
                    <p class="miaosu"></p>
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">

                    <div class="fenshu_left">                   
                    <div class="answer">
                        <span style="padding-right:1%;">左:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="latissimusDorsiL" v-model="latissimusDorsiL"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiL.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="latissimusDorsiL" v-model="latissimusDorsiL"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiL.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="latissimusDorsiL" v-model="latissimusDorsiL"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiL.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="latissimusDorsiL" v-model="latissimusDorsiL"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiL.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>

                </div>

                     <div class="fenshu_right">
                       <div class="answer">
                        <span style="padding-right:1%;">右:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="latissimusDorsiR" v-model="latissimusDorsiR"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiR.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="latissimusDorsiR" v-model="latissimusDorsiR"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiR.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="latissimusDorsiR" v-model="latissimusDorsiR"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiR.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="latissimusDorsiR" v-model="latissimusDorsiR"/>
                        <span class="xuanzhong" v-show="(latissimusDorsiR.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                     </div>
                </div>
            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>1分</span>
                 </div>
                 <div class="fentext3">
                     <p>1.静蹲膝关节60-90°  </p>
                      <p>2.下背部贴于墙面  </p>
                       <p> 3.双手伸直掌心相对上举，双手低于鼻尖</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>2分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.静蹲膝关节60-90°  </p>
                      <p>2.下背部贴于墙面  </p>
                       <p> 3.双手伸直掌心相对上举，手在鼻尖与墙之间</p>
                 </div>
            </div>  
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>3分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.静蹲膝关节60-90°  </p>
                      <p>2.下背部贴于墙面  </p>
                       <p> 3.双手伸直掌心相对上举，手碰到墙壁</p>
                 </div>
            </div>
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian2pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian2next()">
                 <p>下一个动作</p>
             </div>
          </div>
       </div>

         <!-- f3 -->
      <div class="jian1" v-show="jian6flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/2zhu.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">主动直膝抬腿</p>
                    <p class="miaosu miao">仰卧，呼气单腿抬向头顶</p>
                    <p class="miaosu">方向，吸气复原</p>
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">
                    <div class="fenshu_left">                   
                    <div class="answer">
                        <span style="padding-right:1%;">左:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="legLiftL" v-model="legLiftL"/>
                        <span class="xuanzhong" v-show="(legLiftL.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="legLiftL" v-model="legLiftL"/>
                        <span class="xuanzhong" v-show="(legLiftL.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="legLiftL" v-model="legLiftL"/>
                        <span class="xuanzhong" v-show="(legLiftL.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="legLiftL" v-model="legLiftL"/>
                        <span class="xuanzhong" v-show="(legLiftL.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>

                </div>

                     <div class="fenshu_right">
                       <div class="answer">
                        <span style="padding-right:1%;">右:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="legLiftR" v-model="legLiftR"/>
                        <span class="xuanzhong" v-show="(legLiftR.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="legLiftR" v-model="legLiftR"/>
                        <span class="xuanzhong" v-show="(legLiftR.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="legLiftR" v-model="legLiftR"/>
                        <span class="xuanzhong" v-show="(legLiftR.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="legLiftR" v-model="legLiftR"/>
                        <span class="xuanzhong" v-show="(legLiftR.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                     </div>
                </div>

            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                     <p>1.测试杆位于膝关节下方 </p>
                    
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>2分</span>
                 </div>
                 <div class="fentext">
                    <p>1.测试杆位于大腿中点与膝关节之间 </p>
                     
                 </div>
            </div>  
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>3分</span>
                 </div>
                 <div class="fentext">
                    <p>1.测试杆位于大腿中点上方  </p>
                     
                 </div>
            </div>
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian6pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian6next()">
                 <p>下一个动作</p>
             </div>
          </div>
       </div>

        <!-- f4 -->
      <div class="jian1" v-show="jian3flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/3kua.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">跨栏上步</p>
                    <p class="miaosu miao">单腿站立，双手抓直杆置</p>
                    <p class="miaosu">于颈后，呼气将抬起腿</p>
                    <p class="miaosu">跨过绳子，吸气收回来</p>
                   
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">
                    <div class="fenshu_left">                   
                    <div class="answer">
                        <span style="padding-right:1%;">左:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="legBalanceL" v-model="legBalanceL"/>
                        <span class="xuanzhong" v-show="(legBalanceL.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="legBalanceL" v-model="legBalanceL"/>
                        <span class="xuanzhong" v-show="(legBalanceL.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="legBalanceL" v-model="legBalanceL"/>
                        <span class="xuanzhong" v-show="(legBalanceL.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="legBalanceL" v-model="legBalanceL"/>
                        <span class="xuanzhong" v-show="(legBalanceL.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>

                </div>

                     <div class="fenshu_right">
                       <div class="answer">
                        <span style="padding-right:1%;">右:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="legBalanceR" v-model="legBalanceR"/>
                        <span class="xuanzhong" v-show="(legBalanceR.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="legBalanceR" v-model="legBalanceR"/>
                        <span class="xuanzhong" v-show="(legBalanceR.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="legBalanceR" v-model="legBalanceR"/>
                        <span class="xuanzhong" v-show="(legBalanceR.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="legBalanceR" v-model="legBalanceR"/>
                        <span class="xuanzhong" v-show="(legBalanceR.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                     </div>
                </div>

            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                     <p>1.脚碰到测试绳；身体失去平衡 </p>
                    
                 </div>
            </div>
             <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>2分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.髋、膝、踝关节在矢状面上不成一条直线 </p>
                     <p>2.腰部有移动；双手握测试杆与地面不平行  </p>
                  
                 </div>
            </div>  
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>3分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.髋、膝、踝关节在矢状面内成一直线 </p>
                     <p>2.腰部几乎没有明显移动  </p>
                     <p> 3.双手握测试杆保持与地面平行  </p>
                 </div>
            </div>
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian3pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian3next()">
                 <p>下一个动作</p>
             </div>
          </div>
       </div>
       <!-- f5 -->
      <div class="jian1" v-show="jian8flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/4zhuan.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">转动稳定性</p>
                    <p class="miaosu miao">身体俯卧，抬起同侧手和腿，使身体保持在同一个水平面内，保持腰椎自然伸直</p>                 
                   <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">
                    <div class="fenshu_left">                   
                    <div class="answer">
                        <span style="padding-right:1%;">左:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="handedTouchL" v-model="handedTouchL"/>
                        <span class="xuanzhong" v-show="(handedTouchL.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="handedTouchL" v-model="handedTouchL"/>
                        <span class="xuanzhong" v-show="(handedTouchL.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="handedTouchL" v-model="handedTouchL"/>
                        <span class="xuanzhong" v-show="(handedTouchL.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="handedTouchL" v-model="handedTouchL"/>
                        <span class="xuanzhong" v-show="(handedTouchL.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>

                </div>

                  <div class="fenshu_right">
                       <div class="answer">
                        <span style="padding-right:1%;">右:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="handedTouchR" v-model="handedTouchR"/>
                        <span class="xuanzhong" v-show="(handedTouchR.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="handedTouchR" v-model="handedTouchR"/>
                        <span class="xuanzhong" v-show="(handedTouchR.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="handedTouchR" v-model="handedTouchR"/>
                        <span class="xuanzhong" v-show="(handedTouchR.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="handedTouchR" v-model="handedTouchR"/>
                        <span class="xuanzhong" v-show="(handedTouchR.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                     </div>

                </div>

            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                     <p>1.运动员不能以对侧肢体上抬方式完成标准测试动作 </p>
                    
                 </div>
            </div>
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>2分</span>
                 </div>
                 <div class="fentext3">
                    <p>1运动员能以对侧肢体上抬方式完成标准测试 </p>
                     <p>2.动作，同时保持腰椎自然伸直姿势，躯干与  </p>
                     <p>3.地面平行，肘膝与测试板边线在同一平面内  </p>
                 </div>
            </div>  
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>3分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.运动员能以同侧肢体上抬方式完成标准测试动作 </p>
                     <p>2.同时保持腰椎自然伸直姿势，躯干与地面平行  </p>
                     <p> 3.，肘膝与测试板边线在同一平面内  </p>
                 </div>
            </div>
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian8pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian8next()">
                 <p>下一个动作</p>
             </div>
          </div>
       </div>
         <!-- f6 -->
      <div class="jian1" v-show="jian1flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/7guo.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">过顶深蹲</p>
                    <p class="miaosu miao">双脚打开脚尖朝前，屈髋</p>
                    <p class="miaosu">屈膝吸气往下，呼气往上</p>
                    <p class="miaosu">双手伸直向上</p>
                   
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                 <div class="fenshu_con">
                    <div class="fenshu_left">                   
                    <div class="answer">
                       
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="squat" v-model="squat"/>
                        <span class="xuanzhong" v-show="(squat.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="squat" v-model="squat"/>
                        <span class="xuanzhong" v-show="(squat.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="squat" v-model="squat"/>
                        <span class="xuanzhong" v-show="(squat.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="squat" v-model="squat"/>
                        <span class="xuanzhong" v-show="(squat.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                </div>
                </div>

            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                    <p>1.脚跟下垫上木板之后还不能按要求完成动作 </p>
                   
                 </div>
            </div> 
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>2分</span>
                 </div>
                 <div class="fentext">
                    <p>1.脚跟下垫上木板上木板之后按照要求完成动作</p>
        
                 </div>
            </div>  
             <div class="fenbiaozhun_text3">
                 <div class="fennum3">
                      <span>3分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.测试杆在头的正上方;躯干和小腿平 </p>
                     <p>2.行或与地面垂直;下蹲时大腿低于水   </p>
                     <p> 3.平线;保持双膝与双脚方向一致  </p>
                   
                 </div>
            </div>
         </div>
         <div style="height:0.8rem;"></div>
         <div class="nextshow" @click="jian1next()">
            <p>下一个动作</p>
          </div>
       </div>
              <!-- f7 -->
      <div class="jian1" v-show="jian4flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/5zhi.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">直线箭步</p>
                    <p class="miaosu miao">双脚前后站立在木板上屈髋屈膝吸气往下，呼气往上，双手下，呼气往上，双手一上一下从背后抓住直杆</p>
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">
                    <div class="fenshu_left">                   
                    <div class="answer">
                        <span style="padding-right:1%;">左:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="advanceJungeL" v-model="advanceJungeL"/>
                        <span class="xuanzhong" v-show="(advanceJungeL.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="advanceJungeL" v-model="advanceJungeL"/>
                        <span class="xuanzhong" v-show="(advanceJungeL.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="advanceJungeL" v-model="advanceJungeL"/>
                        <span class="xuanzhong" v-show="(advanceJungeL.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="advanceJungeL" v-model="advanceJungeL"/>
                        <span class="xuanzhong" v-show="(advanceJungeL.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>

                </div>

                     <div class="fenshu_right">
                       <div class="answer">
                        <span style="padding-right:1%;">右:</span>
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="advanceJungeR" v-model="advanceJungeR"/>
                        <span class="xuanzhong" v-show="(advanceJungeR.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="advanceJungeR" v-model="advanceJungeR"/>
                        <span class="xuanzhong" v-show="(advanceJungeR.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="advanceJungeR" v-model="advanceJungeR"/>
                        <span class="xuanzhong" v-show="(advanceJungeR.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="advanceJungeR" v-model="advanceJungeR"/>
                        <span class="xuanzhong" v-show="(advanceJungeR.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                     </div>
                </div>

            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                    <p>1.失去平衡</p>
                    
                 </div>
            </div> 
             <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>2分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.躯干出现晃动；不能保持双脚踩在测试板</p>
                     <p>2.上；后膝不能接触测试板 </p>
                  
                    
                 </div>
            </div>  
             <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>3分</span>
                 </div>
                 <div class="fentext3">
                    <p>1.躯干基本没有晃动；保持双脚踩在测 </p>
                     <p>2.试板上；后膝接触测试板  </p>
                   
                     
                 </div>
            </div>
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian4pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian4next()">
                 <p>下一个动作</p>
             </div>
          </div>
       </div>
       
         <!-- f8 -->
      <div class="jian1" v-show="jian7flag">
            <div  class="jianguan_hed_wrap">
            <div class="jianguan_hed">
                <div class="pic_wrap">
                    <div class="pic">
                        <img src="../../assets/images/6qu.png" />
                    </div>
                </div>
                <div class="text_wrap">
                    <p class="title">躯干稳定性俯卧撑</p>
                    <p class="miaosu miao">身体俯卧，双手置于地面</p>
                    <p class="miaosu">呼气将身体平直撑离地面</p>
                    <p class="xian"></p>
                </div>
            </div>
            <div class="fenshu_wrap">
                <p style="padding-top:0.1rem;font-size:0.32rem;color:#1D1D1D;font-weight:bold;">请根据客户的动作进行评分</p>
                <div class="fenshu_con">

                    <div class="fenshu_left">                   
                    <div class="answer">
                        <div class="checkbox_wrap">           
                        <span class="check_wrap">
                        <input type="radio"   value="0" name="trunkStability" v-model="trunkStability"/>
                        <span class="xuanzhong" v-show="(trunkStability.toString()).indexOf('0')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >0分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"  value="1" name="trunkStability" v-model="trunkStability"/>
                        <span class="xuanzhong" v-show="(trunkStability.toString()).indexOf('1')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >1分</label>
                        </div>

                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="2" name="trunkStability" v-model="trunkStability"/>
                        <span class="xuanzhong" v-show="(trunkStability.toString()).indexOf('2')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >2分</label>
                        </div>
                        
                        <div class="checkbox_wrap">
                    
                        <span class="check_wrap">
                        <input type="radio"   value="3" name="trunkStability" v-model="trunkStability"/>
                        <span class="xuanzhong" v-show="(trunkStability.toString()).indexOf('3')!=-1"></span>
                        <span class="noxuanzhong"></span>
                        </span>
                        <label >3分</label>
                        </div>
                    </div>
                </div>
 
                   


                </div>

            </div>
         </div>
           <div class="fenbiaozhun">
             <p class="pbz">评分标准</p>
              <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>0分</span>
                 </div>
                 <div class="fentext3">
                     <p>测试过程中任何时候，运动员感觉身体某部位</p>
                     <p>出现疼痛</p>
                 </div>
            </div>
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>1分</span>
                 </div>
                 <div class="fentext">
                    <p>不能按照要求完成动作</p>
                   
                 </div>
            </div> 
             <div class="fenbiaozhun_text">
                 <div class="fennum">
                      <span>2分</span>
                 </div>
                 <div class="fentext">
                    <p>降低难度完成动作，全过程保持腰椎自然伸直姿势</p>
                     
                 </div>
            </div> 
             <div class="fenbiaozhun_text2">
                 <div class="fennum2">
                      <span>3分</span>
                 </div>
                 <div class="fentext3">
                    <p>标准俯卧姿势完成动作；全过程保持</p>
                      <p>腰椎自然伸直姿势</p>
                 </div>
            </div> 
         </div>
         <div class="nextshowheight"></div>
         <div class="nextshow1" >
             <div class="pr" @click="jian7pr()">
                 <p>上一个动作</p>
             </div>
              <div class="ne" @click="jian7next()">
                 <p>下一个动作</p>
             </div>
          </div>
       </div>
        <!-- f9 -->
        <div class="jian1" v-show="jian9flag">
           <div class="indiv_title"><span id="seletTime">任意选择其中项目进行测试</span></div>
               <div class="addG">
		<div class="weui-cells weui-cells_form">
  
        <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">肺活量(ml)</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="sell" v-model="vitalCapacity"   oninput="if(value.length>5)value=value.slice(0,5)"/>
                
            </div>
        </div>
        <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">台阶指数(cm)</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="melting" v-model="stepIndex"   oninput="if(value.length>5)value=value.slice(0,5)"/>
                  
            </div>
        </div>
          <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">握力(kg)</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="add" v-model="grip"   oninput="if(value.length>3)value=value.slice(0,3)"/>
                 
            </div>
        </div>
          <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">俯卧撑(个）</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="repeated" v-model="pushUp"  oninput="if(value.length>4)value=value.slice(0,4)"/>
                  
            </div>
        </div>
         <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">仰卧起坐(个）</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="make" v-model="sitUp"   oninput="if(value.length>4)value=value.slice(0,4)"/>
                 
            </div>
        </div>
         <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">坐位体前屈(cm)</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="make" v-model="sitAndReach"   oninput="if(value.length>3)value=value.slice(0,3)"/>
                 
            </div>
        </div>
         <div class="weui-cell line">
            <div class="weui-cell__hd" ><label class="weui-label">选择反应时间(s)</label></div>
            <div class="weui-cell__bd arrow">
            	<input  class="weui-input painput" type="number" name="" id="make" v-model="selectiveReactivity"   oninput="if(value.length>4)value=value.slice(0,4)"/>
                 
            </div>
        </div>
        </div> 
     </div>
     <div class="save" @click="jian9next()">下一步</div>
    </div>

    <!-- f10 -->
        <div class="jian1" v-show="jian10flag">
            <div class="zhongjie_hea">
                <div class="pic"><img src="../../assets/images/img_snap@2x.png" ></div>
                 <p class="wancheng">完成评估</p>
                 <p class="tianxie">请填写顾客体能动态总结</p>
            </div>
             <div class="zhengjie">
                <textarea v-model="summary" placeholder="请填写总结"></textarea>
            </div>
             <div class="save" @click="finsho()">完成</div>
        </div>
     
 </div>

</template>

<script>
 export default {
   data () {
     return {
      gxId:this.$route.query.gxId,   
      mobile:this.$route.query.mobile,
     fangjing:this.$route.query.fangjing,
      jingid:this.$route.query.jingid,
      zhiqingid:this.$route.query.zhiqingid,
     shoulderFlexibilityL:"",
      shoulderFlexibilityR:"",
      jian1flag:true,
      jian2flag:false,
      latissimusDorsiR:"",
      latissimusDorsiL:"",
      jian3flag:false,
      legLiftL:"",
      legLiftR:"",
      jian4flag:false,
      legBalanceL:"",
      legBalanceR:"",
      jian5flag:false,
      handedTouchL:"",
       handedTouchR:"",
      jian6flag:false,
      squat:"",
      jian7flag:false,
      advanceJungeL:"",
      advanceJungeR:"",
      jian8flag:false,
      trunkStability:"",
      jian9flag:false,
      vitalCapacity:"",
        stepIndex:"",
        grip:"",
        pushUp:"",
        sitUp:"",
        sitAndReach:"",
        selectiveReactivity:"",
        jian10flag:false,
        summary:"",


     }
   },
   methods: {
     jian1next(){
          if(this.squat == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
          
       this.jian1flag=false;
        this.jian2flag=false;

        this.jian3flag=true;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
     
      jian2next(){
           if(this.latissimusDorsiR == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
           if(this.latissimusDorsiL == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=true;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian3next(){
           if(this.legBalanceR == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
           if(this.legBalanceL == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=true;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian4next(){
           if(this.advanceJungeR == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
           if(this.advanceJungeL == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=true;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
     jian5next(){
           if(this.shoulderFlexibilityR == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
          if(this.shoulderFlexibilityL == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=true;
         this.jian7flag=false;
         this.jian8flag=false;
     },
     jian6next(){
         if(this.legLiftR == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
           if(this.legLiftL == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=true;
         this.jian8flag=false;
     },
     jian7next(){
         if(this.trunkStability == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=true;
     },
      jian8next(){
          if(this.handedTouchL == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
           if(this.handedTouchR == ""){
            this.$vux.toast.text("请选择分数");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
          this.jian9flag=true;
     },
     jian9next(){
         if(this.vitalCapacity == "" && this.stepIndex == "" && this.grip == "" && this.pushUp == "" && this.sitUp == "" && this.sitAndReach == "" && this.selectiveReactivity == ""){
            this.$vux.toast.text("请填写完整");
            return;
          }
       this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
          this.jian9flag=false;
           this.jian10flag=true;
     },
     jian2pr(){
         this.jian1flag=true;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian3pr(){
         this.jian1flag=true;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian4pr(){
         this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=true;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian5pr(){
         this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=true;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian6pr(){
         this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=true;
        this.jian6flag=false;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian7pr(){
         this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=true;
         this.jian7flag=false;
         this.jian8flag=false;
     },
      jian8pr(){
         this.jian1flag=false;
        this.jian2flag=false;
        this.jian3flag=false;
        this.jian4flag=false;
        this.jian5flag=false;
        this.jian6flag=false;
         this.jian7flag=true;
         this.jian8flag=false;
     },
     finsho(){
          if(this.summary == ""){
            this.$vux.toast.text("请填写总结");
            return;
          }
           this.instance.$post('/rest/wx/reception/addDynamicEvaluation',{
                gxId:this.gxId, 
                mobile:this.mobile ,
               shoulderFlexibilityL:this.shoulderFlexibilityL,
                shoulderFlexibilityR:this.shoulderFlexibilityR,
                
                latissimusDorsiR:this.latissimusDorsiR,
                latissimusDorsiL:this.latissimusDorsiL,
                
                legLiftL:this.legLiftL,
                legLiftR:this.legLiftR,
                
                legBalanceL:this.legBalanceL,
                legBalanceR:this.legBalanceR,
                
                handedTouchL:this.handedToucL,
                handedTouchR:this.handedToucR,
                squat:this.squat,
                
                advanceJungeL:this.advanceJungeL,
                advanceJungeR:this.advanceJungeR,
                
                trunkStability:this.trunkStability,
            
                vitalCapacity:this.vitalCapacity,
                    stepIndex:this.stepIndex,
                    grip:this.grip,
                    pushUp:this.pushUp,
                    sitUp:this.sitUp,
                    sitAndReach:this.sitAndReach,
                    selectiveReactivity:this.selectiveReactivity,      
                    summary:this.summary,
           },res => {
             console.log(res);
             if(res.rel){
                    var data={
               fangdong:0,
               dongid:res.message
           }
            this.$route.meta.dongpgItem=data;
     this.$router.back();
            //      this.$router.push({
            //     name: "selectceshi",
            //      query: {
            //        gxId:this.gxId, 
            //        mobile:this.mobile,
            //        fangdong:0,
            //        dongid:res.message,
            //        fangjing:this.fangjing,
            //        jingid:this.jingid,
            //        zhiqingid:this.zhiqingid
            //     }               
            //   });
             }
           })
         
     }
   },
   mounted(){
      $('.painput').css({"position":"relative","right":"18px"})
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
  .jianguan_hed_wrap{border-bottom:1px solid rgba(214,214,214,1);}
         .jianguan_hed{height:3.8rem;padding:3% 4% 0;position: relative;}
         .pic_wrap{float:left;width:38%;height:3.2rem;background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);padding:3%;margin-right: 4%;
border-radius:10px;}
         .pic_wrap .pic{width:100%;height:100%;}
         .pic_wrap img{width:100%;height:100%;border: none;}
           .text_wrap{float:right;width:50%;}
         .text_wrap .title{font-size:0.36rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(74,119,176,1);}
.text_wrap .miao{ padding-top:0.2rem;}
         .text_wrap .miaosu{
            
             font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}      
          .text_wrap .xian{width:0.3rem;height:5px;background:rgba(74,119,176,1);position: absolute;bottom:0.4rem;}
         .fenshu_wrap{padding:0 4%;}
 .checkbox_wrap{display: inline-block;flex:1;text-align: center;}
  .checkbox_wrap1{display: inline-block;}
  .fang_wrap1{display: inline-block;margin-top: 0.2rem;}
  .fang_wrap2{margin:0.2rem 0 0 1.15rem;}
  .checkbox_wrap label{font-size:0.3rem;color:#2D2D2D;vertical-align: middle;margin-left: 0.1rem;position: relative;top:0.02rem;}
   .checkbox_wrap1 label{font-size:0.26rem;color:#2D2D2D;vertical-align: middle;margin-right: 0.12rem;}
      .check_wrap{display: inline-block; width:0.4rem;height:0.4rem;position: relative;vertical-align: middle;}
  .check_wrap input{width:0.4rem;height:0.4rem;position:absolute;top:0;left:0;z-index: 999;opacity: 0;}
  .xuanzhong{display: inline-block; width:0.4rem;height:0.4rem;background:url(../../assets/images/xuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;z-index: 998;}
    
     .noxuanzhong{display: inline-block; width:0.4rem;height:0.4rem;background:url(../../assets/images/noxuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;}
     .answer{display: flex;}
     .fenshu_left{padding:0.2rem 0;}
     .fenshu_right{padding-bottom:0.2rem;}
      .fenbiaozhun{padding:0 4%;}
        .fenbiaozhun .pbz{font-size:0.32rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(29,29,29,1);
padding:4% 0;
}
.fenbiaozhun_text{width:100%;height:0.9rem;border:1px solid rgba(214,214,214,1);border-radius:4px;margin-bottom: 0.3rem;}
.fenbiaozhun_text2{width:100%;height:1.16rem;border:1px solid rgba(214,214,214,1);border-radius:4px;margin-bottom: 0.3rem;}
.fenbiaozhun_text3{width:100%;height:1.64rem;border:1px solid rgba(214,214,214,1);border-radius:4px;margin-bottom: 0.3rem;}
.fenbiaozhun_text4{width:100%;height:2rem!important;border:1px solid rgba(214,214,214,1);border-radius:4px;margin-bottom: 0.3rem;}
.fenbiaozhun_text5{width:100%;height:2.6rem!important;border:1px solid rgba(214,214,214,1);border-radius:4px;margin-bottom: 0.3rem;}
.fennum{width:14%; float: left;text-align: center;border-right: 1px solid #D6D6D6;line-height: 0.9rem;}
.fennum2{width:14%; float: left;text-align: center;border-right: 1px solid #D6D6D6;line-height: 1.16rem;}
.fennum3{width:14%; float: left;text-align: center;border-right: 1px solid #D6D6D6;line-height: 1.64rem;}
.fennum4{width:14%; float: left;text-align: center;border-right: 1px solid #D6D6D6;line-height: 2rem;}
.fennum5{width:14%; float: left;text-align: center;border-right: 1px solid #D6D6D6;line-height: 2.6rem;}
.fennum span{font-size: 0.26rem;color:#1D1D1D;}
.fentext{float: left;width:82%;line-height: 0.9rem; }
//.fentext2{float: left;width:82%; }
.fentext3{float: left;width:82%;}
.fentext p{font-size: 0.26rem;color:#1D1D1D;padding-left: 2%;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;}
.fentext3 p{font-size: 0.26rem;color:#1D1D1D;padding-left: 2%;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;padding-top:0.1rem;}
.nextshowheight{width:100%;height:0.8rem;}
.nextshow{width:100%;height:0.8rem;line-height:0.8rem; background:rgba(74,119,176,1);text-align: center;position: fixed;left:0;bottom: 0;}
.nextshow1{width:100%;height:0.8rem;line-height:0.8rem; background:rgba(74,119,176,1);position: fixed;left:0;bottom: 0;}
.nextshow1 .pr{display: inline-block; width:50%;text-align: center;background:#fff;border-top:1px solid #D6D6D6;}
.pr p{color:#4A77B0;}
.nextshow1 .ne{display: inline-block;width:44%;text-align: center;background:rgba(74,119,176,1);}
.ne p{color:#fff;}
.nextshow p{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);}
.nextshow1 p{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
}

.yuan{
    position: absolute;
    top:50%;
    right: 30px;
    margin-top:-12px;
    color: #999999;
}
.save {
			width: 92%;
			padding: 0.2rem 0;
			border-radius: 5px;
			font-size: 0.38rem;
			margin: 0 auto;
			background-color: #4978B0;
			color: #fff;
			text-align: center;
			margin-top: 0.9rem;
        }
        .indiv_title {
			padding: 0.3rem 0;
			text-align: center;
			font-size: 0.30rem;
            border-bottom: 1px solid #f7f7f7;
            background: #f7f7f7;
		}
.addG{
		// padding-top: 0.28rem;
	}
		/*.weui-loadmore{
		    margin: 10.5em auto;
	}*/
	.weui-cell:before{
		left: 0;
	}
	.weui-cell{
		padding: 14px 15px;
		
	}
	.weui-cells{
		margin-top:0;
	}
	.weui-check__label:active{
		background-color: #fff;
	}
	.weui-label{
        width:205px!important;
		position: relative;
		color:#2C2E34 ;
		font-family: "微软雅黑";
	}
	.weui-cells:after{
		position: inherit;
	}
	.weui-cell:before,.weui-cells:before{
	
		border-top:none;
	}
	.customers:after{
		border:none !important;
	}
	[class*=" weui-icon-"], [class^=weui-icon-]{
		    vertical-align: bottom;
	}
	.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{
		color: #4A77B0;
	}
	.weui-cells_form input, .weui-cells_form label[for]{
		text-align: right;
	}
	input::-webkit-input-placeholder{
		color: #919191;
		font-family: "微软雅黑";
	}
	 .arrow:after {
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 16px;
}
.explain{
	width: 92%;
	margin: 0.3rem 4%;
}
.customers:after{
	content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
 .w1:after{
	content: "*";
	    position: absolute;
	        /*right: 27px;*/
    font-size: 20px;
    top: -2px;
}
.textEx{
	    padding: 0.18rem 0.2rem;
    background: #fff;
    resize: none;
    /*border: 1px solid #919191;*/
    border-radius: 3px;
   box-shadow: 0px 0px 5px 0px rgba(104,104,104,0.4) inset;
}
textarea::-webkit-input-placeholder{
	font-family: "微软雅黑";
	color: #919191;
}
 textarea{width:94%;outline: none;font-size: 16px;border: none;}
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
    /*日期*/
   .weui-picker__action{
   	color: #919191;
   	font-family: "微软雅黑";
   }
   .weui-picker__action:last-child{
   	   	color: #5176AB;
   	font-family: "微软雅黑";
   }
   /*客户来源*/
  .shangke_type {
	background: #fff;
	position: absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
.shangke_type_header {
	height:1rem;
	line-height: 1rem;
	text-align: center;
	margin: 0.5rem 0;
}
.shangke_type_header span {
	font-size:0.36rem;
	color:#2C2E34;
}
.item_box {
	text-align: center;
	    margin-top: 1.3rem;
}

.item_box .item {
	display: block;
	width: 38%;
	margin-bottom: 0.3rem;
	float: left;
	margin: 0 6%;
}
.item_box .item span {
	    display: inline-block;
    width: 90%;
    height: 0.66rem;
    line-height: 0.66rem;
    margin-bottom: 35px;
    border: 1px solid #5176AB;
    border-radius: 5px;
    font-size: 0.3rem;
    color: #2C2E34;
}
.item_box .item span.active{
	background-color:#5176AB ;
	color: #fff;
}
.zk{
	padding-left: 32px;
}
.line{
	border-bottom:  1px solid #f7f7f7;
}
.zhongjie_hea{width:100%;margin:0 auto;text-align: center}
.zhongjie_hea .pic{padding:0.6rem 0 0.4rem;}
.zhongjie_hea .pic img{width:0.91rem;height:1.01rem;}
.zhongjie_hea .wancheng{font-size:0.36rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(29,29,29,1);}
.zhongjie_hea .tianxie{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);
padding:0.2rem 0;}
.zhengjie{width:94%;margin:0.4rem auto;}
textarea{width:93.8%;height:3.06rem;background:#F7F7F7;
border:1px solid rgba(214,214,214,1);outline: none;resize:none;padding:3%;font-size: 0.3rem;color:#1D1D1D;}
</style>
