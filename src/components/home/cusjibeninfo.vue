<template>
 <div class='container'>
    <div class="train_record tianjiaxiang">
					<div class="train_record1 flex-item1">
                    <div class="xl_record" id="selectCus">
                <select v-model="cusItemName">
                    <option v-for="(item,index) in courseList" :key="index">{{item.name}}</option>
                           
                 </select><img src="../../assets/images/unfold_icon.png" /></div>
					</div>
		  </div>
    <div class="customer_info">
                  <div class="custitle"><span>会员档案</span></div>
           <div class="jibenkeqing">
            <div class="shenqingk"><span class="title_fcf"></span><span class="title-text">基本客情</span></div>
         <div class="jiben_info">          
          <div class="jiben_info_item"><span class="item1">姓名：<input type="text"   name="name" v-model="name"/> </span><span  class="item2">性别：<input type="text"  name="sex" v-model="sex"/> </span></div>
         <div class="jiben_info_item"><span  class="item1">出生日期：<input  type="text" readonly="readonly"  name="birthday" id="birthday" v-model="birthday"/><datetime  v-model="birthday" :start-date="sDate" :end-date="eDate" class="fang"></datetime> </span><span  class="item2">入会时间：<input type="text" readonly="readonly"  name="addTime" id="addTime"  v-model="addTime"/><datetime  v-model="addTime" class="fang"></datetime> </span></div>         
         <div class="jiben_info_item"><span class="item1">身高(cm)：<input type="text"   name="cm"  v-model="height"/> </span><span  class="item2">体重(kg)：<input type="text"  name="weight" v-model="weight"/> </span></div>
         <div class="jiben_info_item"><span class="item1">车牌：<input type="text"  name="carNum" v-model="carNum"/> </span><span  class="item2">繁忙时段：<input type="text" name="buzyTime" v-model="buzyTime"/> </span></div>
         <div class="jiben_info_item1">联系电话：<input type="text"   name="mobile" readonly="readonly" v-model="mobile"/></div>
         <div class="jiben_info_item1">E-MAIL：<input type="text" name="email" id="email" v-model="email"/></div>
          <div class="jiben_info_item1">联系地址：<input type="text" name="adress" v-model="adress"/></div>
         </div>
         <div class="jia_qingkuang">家庭情况：
            <div class="checkbox_wrap"  style="margin-left:0.26rem;">
           <label for="fcf1">已婚</label>
           <span class="check_wrap">
             <input type="radio" id="fcf1" value="1" name="jiating" v-model="jiating" />
             <span class="xuanzhong" v-show="(jiating.toString()).indexOf(1)!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label for="fcf2">未婚</label>
            <span class="check_wrap">
              <input type="radio" id="fcf2"  value="0" name="jiating" v-model="jiating"/>
              <span class="xuanzhong" v-show="(jiating.toString()).indexOf(0)!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label for="fcf3">怀孕</label>
            <span class="check_wrap">
              <input type="radio" id="fcf3"  value="2" name="jiating" v-model="jiating" />
              <span class="xuanzhong" v-show="(jiating.toString()).indexOf(2)!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
             </div>
            <div class="zhiye"><span style="position: relative;top:0.3rem;">职业：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin">
          <label for="fcf4">白领</label>
          <span class="check_wrap">
            <input type="radio" id="fcf4"  value="白领" name="zhiye" v-model="zhiye"/>
            <span class="xuanzhong"  v-show="(zhiye.toString()).indexOf('白领')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label for="fcf5">居家</label>
           <span class="check_wrap">
             <input type="radio" id="fcf5" value="居家" name="zhiye" v-model="zhiye"/>
             <span class="xuanzhong"  v-show="(zhiye.toString()).indexOf('居家')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label for="fcf6">自由职业</label>
           <span class="check_wrap">
             <input type="radio" id="fcf6" value="自由职业" name="zhiye" v-model="zhiye"/>
             <span class="xuanzhong"  v-show="(zhiye.toString()).indexOf('自由职业')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label for="fcf7">其他</label>
            <span class="check_wrap">
              <input type="radio" id="fcf7" value="其他" name="zhiye" v-model="zhiye"/>
              <span class="xuanzhong" v-show="(zhiye.toString()).indexOf('其他')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>    
            </div>
            


  <div class="aihao"><span style="position: relative;top:0.8rem;">兴趣爱好：</span>
              <div class="fang_wrap1"> 
                <div class="checkbox_wrap" style="margin-left:0.3rem;">
           <label for="fcf8">旅游</label>
           <span class="check_wrap">
             <input type="checkbox" id="fcf8"  value="旅游" name="aihao" v-model="aihao"/>
             <span class="xuanzhong" v-show="(aihao.toString()).indexOf('旅游')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label for="fcf9">运动</label>
            <span class="check_wrap">
              <input type="checkbox" id="fcf9" value="运动" name="aihao" v-model="aihao"/>
              <span class="xuanzhong" v-show="(aihao.toString()).indexOf('运动')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label for="fcf10">音乐</label>
            <span class="check_wrap">
              <input type="checkbox" id="fcf10" value="音乐" name="aihao" v-model="aihao"/>
              <span class="xuanzhong" v-show="(aihao.toString()).indexOf('音乐')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              </div>
              <div class="fang_wrap2">
               <div class="checkbox_wrap">
             <label for="fcf11">舞蹈</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf11" value="舞蹈" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('舞蹈')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
                <div class="checkbox_wrap">
             <label for="fcf12">服装</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf12" value="服装" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('服装')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
               <div class="checkbox_wrap">
             <label for="fcf13">时尚造型</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf13" value="时尚造型" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('时尚造型')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
           </div>
           <div class="fang_wrap2">
               <div class="checkbox_wrap">
             <label for="fcf14">珠宝</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf14" value="珠宝" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('珠宝')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
                <div class="checkbox_wrap">
             <label for="fcf15">家庭</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf15" value="家庭" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('家庭')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
               <div class="checkbox_wrap">
             <label for="fcf16">文学</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf16" value="文学" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('文学')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
           </div> 
           <div class="fang_wrap2">
             <div class="checkbox_wrap">
             <label for="fcf17">其他</label>
             <span class="check_wrap">
               <input type="checkbox" id="fcf17" value="其他" name="aihao" v-model="aihao"/>
               <span class="xuanzhong" v-show="(aihao.toString()).indexOf('其他')!=-1"></span>
               <span class="noxuanzhong"></span>
             </span>
               </div>
           </div>
             </div>

          <div class="shenqingk" style="margin-top:0.25rem;"><span class="title_fcf"></span><span class="title-text">身体情况</span></div>
           <div class="jia_qingkuang">望神：
            <div class="checkbox_wrap" style="padding-left: 0.25rem;">
           <label>有神</label>
           <span class="check_wrap">
             <input type="checkbox" value="有神" name="wangshen" v-model="wangshen"/>
             <span class="xuanzhong" v-show="(wangshen.toString()).indexOf('有神')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >失神</label>
            <span class="check_wrap">
              <input type="checkbox"   value="失神" name="wangshen" v-model="wangshen"/>
              <span class="xuanzhong" v-show="(wangshen.toString()).indexOf('失神')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >少神</label>
            <span class="check_wrap">
              <input type="checkbox" value="少神" name="wangshen" v-model="wangshen"/>
              <span class="xuanzhong" v-show="(wangshen.toString()).indexOf('少神')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
             </div>
            
             <div class="jia_qingkuang">忘面色：
            <div class="checkbox_wrap paddin3">
           <label>明润含蓄</label>
           <span class="check_wrap">
             <input type="checkbox" value="明润含蓄" name="wangmian" v-model="wangmian"/>
             <span class="xuanzhong" v-show="(wangmian.toString()).indexOf('明润含蓄')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >面色晦暗</label>
            <span class="check_wrap">
              <input type="checkbox" value="面色晦暗" name="wangmian" v-model="wangmian"/>
              <span class="xuanzhong" v-show="(wangmian.toString()).indexOf('面色晦暗')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>             
             </div>
            
              <div class="zhiye"><span style="position: relative;top:0.3rem;">望形体：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin3">
          <label >肥胖</label>
          <span class="check_wrap">
            <input type="checkbox"   value="肥胖" name="wangxing" v-model="wangxing"/>
            <span class="xuanzhong" v-show="(wangxing.toString()).indexOf('肥胖')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >乏力</label>
           <span class="check_wrap">
             <input type="checkbox"  value="乏力" name="wangxing" v-model="wangxing"/>
             <span class="xuanzhong" v-show="(wangxing.toString()).indexOf('乏力')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >形瘦</label>
           <span class="check_wrap">
             <input type="checkbox"  value="形瘦" name="wangxing" v-model="wangxing"/>
             <span class="xuanzhong" v-show="(wangxing.toString()).indexOf('形瘦')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap" style="position: relative; left:-0.05rem;">
            <label >气短</label>
            <span class="check_wrap">
              <input type="checkbox"  value="气短" name="wangxing" v-model="wangxing"/>
              <span class="xuanzhong" v-show="(wangxing.toString()).indexOf('气短')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>    
            </div>
          
               <div class="zhiye"><span style="position: relative;top:0.3rem;">舌象：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin">
          <label >淡红舌</label>
          <span class="check_wrap">
            <input type="checkbox"   value="淡红舌" name="shexiang" v-model="shexiang"/>
            <span class="xuanzhong" v-show="(shexiang.toString()).indexOf('淡红舌')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >淡白舌</label>
           <span class="check_wrap">
             <input type="checkbox"  value="淡白舌" name="shexiang" v-model="shexiang"/>
             <span class="xuanzhong" v-show="(shexiang.toString()).indexOf('淡白舌')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >红舌</label>
           <span class="check_wrap">
             <input type="checkbox"  value="红舌" name="shexiang" v-model="shexiang"/>
             <span class="xuanzhong" v-show="(shexiang.toString()).indexOf('红舌')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >胖大舌</label>
            <span class="check_wrap">
              <input type="checkbox"  value="胖大舌" name="shexiang" v-model="shexiang"/>
              <span class="xuanzhong" v-show="(shexiang.toString()).indexOf('胖大舌')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >齿痕舌</label>
            <span class="check_wrap">
              <input type="checkbox"  value="齿痕舌" name="shexiang" v-model="shexiang"/>
              <span class="xuanzhong" v-show="(shexiang.toString()).indexOf('齿痕舌')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>    
            </div>
         
          <div class="jia_qingkuang">苔象：
            <div class="checkbox_wrap paddin">
           <label>薄苔</label>
           <span class="check_wrap">
             <input type="checkbox" value="薄苔" name="taixiang" v-model="taixiang"/>
             <span class="xuanzhong" v-show="(taixiang.toString()).indexOf('薄苔')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >厚苔</label>
            <span class="check_wrap">
              <input type="checkbox"   value="厚苔" name="taixiang" v-model="taixiang"/>
              <span class="xuanzhong" v-show="(taixiang.toString()).indexOf('厚苔')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >燥苔</label>
            <span class="check_wrap">
              <input type="checkbox" value="燥苔" name="taixiang" v-model="taixiang"/>
              <span class="xuanzhong" v-show="(taixiang.toString()).indexOf('燥苔')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
             </div>
          
                   <div class="zhiye"><span style="position: relative;top:0.3rem;">饮食习惯：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.3rem;">
          <label >清淡</label>
          <span class="check_wrap">
            <input type="checkbox"   value="清淡" name="yinshi" v-model="yinshi"/>
            <span class="xuanzhong" v-show="(yinshi.toString()).indexOf('清淡')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >辛辣</label>
           <span class="check_wrap">
             <input type="checkbox"  value="辛辣" name="yinshi" v-model="yinshi"/>
             <span class="xuanzhong" v-show="(yinshi.toString()).indexOf('辛辣')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >甜口</label>
           <span class="check_wrap">
             <input type="checkbox"  value="甜口" name="yinshi" v-model="yinshi"/>
             <span class="xuanzhong" v-show="(yinshi.toString()).indexOf('甜口')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >咸口</label>
            <span class="check_wrap">
              <input type="checkbox"  value="咸口" name="yinshi" v-model="yinshi"/>
              <span class="xuanzhong" v-show="(yinshi.toString()).indexOf('咸口')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>              
          </div>    
            </div>
          
            <div class="shuimian"><span style="position: relative;top:0.3rem;">睡眠质量：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.3rem;">
          <label >较好</label>
          <span class="check_wrap">
            <input type="checkbox"   value="较好" name="shuimian" v-model="shuimian"/>
            <span class="xuanzhong" v-show="(shuimian.toString()).indexOf('较好')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >一般</label>
           <span class="check_wrap">
             <input type="checkbox"  value="一般" name="shuimian" v-model="shuimian"/>
             <span class="xuanzhong" v-show="(shuimian.toString()).indexOf('一般')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >失眠</label>
           <span class="check_wrap">
             <input type="checkbox"  value="失眠" name="shuimian" v-model="shuimian"/>
             <span class="xuanzhong" v-show="(shuimian.toString()).indexOf('失眠')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap" style="position: relative;left:-0.01rem;">
            <label >易醒</label>
            <span class="check_wrap">
              <input type="checkbox"  value="易醒" name="shuimian" v-model="shuimian"/>
              <span class="xuanzhong" v-show="(shuimian.toString()).indexOf('易醒')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
               <div class="checkbox_wrap">
            <label >多梦</label>
            <span class="check_wrap">
              <input type="checkbox"  value="多梦" name="shuimian" v-model="shuimian"/>
              <span class="xuanzhong" v-show="(shuimian.toString()).indexOf('多梦')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="shui_time">睡眠时间：<input type="tel"  id="slep_time" name="slep_time" v-model="shuimiantime" oninput="if(value>23)value=23"/>小时</div>
            </div>

            <div class="zhiye"><span style="position: relative;top:0.3rem;">生活习惯：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.3rem;">
          <label >吸烟</label>
          <span class="check_wrap">
            <input type="checkbox"   value="吸烟" name="shenghuo" v-model="shenghuo"/>
            <span class="xuanzhong" v-show="(shenghuo.toString()).indexOf('吸烟')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >喝酒</label>
           <span class="check_wrap">
             <input type="checkbox"  value="喝酒" name="shenghuo" v-model="shenghuo"/>
             <span class="xuanzhong" v-show="(shenghuo.toString()).indexOf('喝酒')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >甜口</label>
           <span class="check_wrap">
             <input type="checkbox"  value="甜口" name="shenghuo" v-model="shenghuo"/>
             <span class="xuanzhong" v-show="(shenghuo.toString()).indexOf('甜口')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >三餐不定时</label>
            <span class="check_wrap">
              <input type="checkbox"  value="三餐不定时" name="shenghuo" v-model="shenghuo"/>
              <span class="xuanzhong" v-show="(shenghuo.toString()).indexOf('三餐不定时')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >长期服用药物</label>
            <span class="check_wrap">
              <input type="checkbox"  value="长期服用药物" name="shenghuo" v-model="shenghuo"/>
              <span class="xuanzhong" v-show="(shenghuo.toString()).indexOf('长期服用药物')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>    
            </div>

             <div class="paibian"><span style="position: relative;top:0.5rem;">排便情况：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.3rem;">
          <label >每天1次</label>
          <span class="check_wrap">
            <input type="checkbox"   value="每天1次" name="paibian" v-model="paibian"/>
            <span class="xuanzhong" v-show="(paibian.toString()).indexOf('每天1次')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >便秘</label>
           <span class="check_wrap">
             <input type="checkbox"  value="便秘" name="paibian" v-model="paibian"/>
             <span class="xuanzhong" v-show="(paibian.toString()).indexOf('便秘')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >两天1次</label>
           <span class="check_wrap">
             <input type="checkbox"  value="两天1次" name="paibian" v-model="paibian"/>
             <span class="xuanzhong" v-show="(paibian.toString()).indexOf('两天1次')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >便溏</label>
            <span class="check_wrap">
              <input type="checkbox"  value="便溏" name="paibian" v-model="paibian"/>
              <span class="xuanzhong" v-show="(paibian.toString()).indexOf('便溏')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >每天2次</label>
            <span class="check_wrap">
              <input type="checkbox"  value="每天2次" name="paibian" v-model="paibian"/>
              <span class="xuanzhong" v-show="(paibian.toString()).indexOf('每天2次')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >每天3次或以上</label>
            <span class="check_wrap">
              <input type="checkbox"  value="每天3次或以上" name="paibian" v-model="paibian"/>
              <span class="xuanzhong" v-show="(paibian.toString()).indexOf('每天3次或以上')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>              
          </div>
            </div>

           <div class="jiati_title"><span></span>生理情况</div>
            <div class="shengli"><span style="position: relative;top:0.3rem;">月经：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin">
          <label >正常</label>
          <span class="check_wrap">
            <input type="checkbox"   value="正常" name="yuejing" v-model="yuejing"/>
            <span class="xuanzhong" v-show="(yuejing.toString()).indexOf('正常')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >紊乱</label>
           <span class="check_wrap">
             <input type="checkbox"  value="紊乱" name="yuejing" v-model="yuejing"/>
             <span class="xuanzhong" v-show="(yuejing.toString()).indexOf('紊乱')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >量多</label>
           <span class="check_wrap">
             <input type="checkbox"  value="量多" name="yuejing" v-model="yuejing"/>
             <span class="xuanzhong" v-show="(yuejing.toString()).indexOf('量多')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >痛经</label>
            <span class="check_wrap">
              <input type="checkbox"  value="痛经" name="yuejing" v-model="yuejing"/>
              <span class="xuanzhong" v-show="(yuejing.toString()).indexOf('痛经')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳房胀痛</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳房胀痛" name="yuejing" v-model="yuejing"/>
              <span class="xuanzhong" v-show="(yuejing.toString()).indexOf('乳房胀痛')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>    
            </div>
          
           <div class="shengli"><span style="position: relative;top:0.3rem;">经血：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin">
          <label >颜色鲜红</label>
          <span class="check_wrap">
            <input type="checkbox"   value="颜色鲜红" name="jingxue" v-model="jingxue"/>
            <span class="xuanzhong" v-show="(jingxue.toString()).indexOf('颜色鲜红')!=-1" ></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >颜色淡红</label>
           <span class="check_wrap">
             <input type="checkbox"  value="颜色淡红" name="jingxue" v-model="jingxue"/>
             <span class="xuanzhong" v-show="(jingxue.toString()).indexOf('颜色淡红')!=-1" ></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >血块</label>
           <span class="check_wrap">
             <input type="checkbox"  value="血块" name="jingxue" v-model="jingxue"/>
             <span class="xuanzhong" v-show="(jingxue.toString()).indexOf('血块')!=-1" ></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >颜色暗红</label>
            <span class="check_wrap">
              <input type="checkbox"  value="颜色暗红" name="jingxue" v-model="jingxue"/>
              <span class="xuanzhong" v-show="(jingxue.toString()).indexOf('颜色暗红')!=-1" ></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>           
          </div>    
            </div>
          
                   <div class="zhiye"><span style="position: relative;top:0.3rem;">白带：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin">
          <label >正常</label>
          <span class="check_wrap">
            <input type="checkbox"   value="正常" name="baidai" v-model="baidai"/>
            <span class="xuanzhong" v-show="(baidai.toString()).indexOf('正常')!=-1" ></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >多</label>
           <span class="check_wrap">
             <input type="checkbox"  value="多" name="baidai" v-model="baidai"/>
             <span class="xuanzhong" v-show="(baidai.toString()).indexOf('多')!=-1" ></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >带血丝</label>
           <span class="check_wrap">
             <input type="checkbox"  value="带血丝" name="baidai" v-model="baidai"/>
             <span class="xuanzhong" v-show="(baidai.toString()).indexOf('带血丝')!=-1" ></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >有异味</label>
            <span class="check_wrap">
              <input type="checkbox"  value="有异味" name="baidai" v-model="baidai"/>
              <span class="xuanzhong" v-show="(baidai.toString()).indexOf('有异味')!=-1" ></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>           
          </div>    
            </div>
           
                <div class="jiati_title"><span></span>曾接受过的整形或微创疗程及时间：</div>             
              <div class="zhengxiang">
                <div class="zhengxing_item"><span class="jinsiduiqi">1、金丝植入：</span>
                 <div class="checkbox_wrap1">
            <label >是</label>
            <span class="check_wrap">
              <input type="radio"  name="jinsi" value="是" v-model="jinsiflag"/>
              <span class="xuanzhong" v-show="(jinsiflag.toString()).indexOf('是')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <span class="jin_wrap"><input type="text"  placeholder="请选择时间" readonly="readonly" name="time" id="jinsi" v-model="jinsi" /><datetime  v-model="jinsi"  class="fang"></datetime></span>
            <div class="checkbox_wrap">
            <label >否</label>
            <span class="check_wrap">
              <input type="radio"   name="jinsi" value="否" id="jinsifou"  v-model="jinsiflag"/>
              <span class="xuanzhong" v-show="(jinsiflag.toString()).indexOf('否')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
                </div>
                <div class="zhengxing_item"><span class="jinsiduiqi">2、肉毒素注射：</span>
                 <div class="checkbox_wrap1" >
            <label >是</label>
            <span class="check_wrap">
              <input type="radio"   name="roudu" value="是" v-model="jinsiflag1"/>
              <span class="xuanzhong" v-show="(jinsiflag1.toString()).indexOf('是')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
               <span class="jin_wrap"><input type="text"  placeholder="请选择时间" readonly="readonly" name="time" id="jinsi" v-model="jinsi1" /><datetime  v-model="jinsi1"  class="fang"></datetime></span>
          
              <div class="checkbox_wrap">
            <label >否</label>
            <span class="check_wrap">
              <input type="radio"  name="roudu" value="否" id="roudufou" v-model="jinsiflag1"/>
              <span class="xuanzhong" v-show="(jinsiflag1.toString()).indexOf('否')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
                </div>
                <div class="zhengxing_item"><span class="jinsiduiqi">3、注射填充：</span>
                 <div class="checkbox_wrap1">
            <label >是</label>
            <span class="check_wrap">
              <input type="radio"   name="zhuse" value="是"  v-model="jinsiflag2"/>
              <span class="xuanzhong" v-show="(jinsiflag2.toString()).indexOf('是')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
             <span class="jin_wrap"><input type="text"  placeholder="请选择时间" readonly="readonly" name="time" id="jinsi" v-model="jinsi2" /><datetime  v-model="jinsi2"  class="fang"></datetime></span>
          
              <div class="checkbox_wrap">
            <label >否</label>
            <span class="check_wrap">
              <input type="radio"   name="zhuse" value="否" id="zhusefou"  v-model="jinsiflag2"/>
              <span class="xuanzhong"  v-show="(jinsiflag2.toString()).indexOf('否')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
                </div>
                <div class="zhengxing_item"><span class="jinsiduiqi">4、面部整形手术：</span>
                 <div class="checkbox_wrap1">
            <label >是</label>
            <span class="check_wrap">
              <input type="radio"   name="mianshoushu" value="是"  v-model="jinsiflag3"/>
              <span class="xuanzhong"  v-show="(jinsiflag3.toString()).indexOf('是')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
             <span class="jin_wrap"><input type="text"  placeholder="请选择时间" readonly="readonly" name="time" id="jinsi" v-model="jinsi3" /><datetime  v-model="jinsi3"  class="fang"></datetime></span>
          
              <div class="checkbox_wrap">
            <label >否</label>
            <span class="check_wrap">
              <input type="radio"   name="mianshoushu" value="否" id="mianshoushufou"  v-model="jinsiflag3"/>
              <span class="xuanzhong"  v-show="(jinsiflag3.toString()).indexOf('否')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
                </div>
                <div class="zhengxing_item"><span class="jinsiduiqi">5、果酸换肤：</span>
                 <div class="checkbox_wrap1">
            <label >是</label>
            <span class="check_wrap">
              <input type="radio"   name="guoshan" value="是"  v-model="jinsiflag4"/>
              <span class="xuanzhong" v-show="(jinsiflag4.toString()).indexOf('是')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <span class="jin_wrap"><input type="text"  placeholder="请选择时间" readonly="readonly" name="time" id="jinsi" v-model="jinsi4" /><datetime  v-model="jinsi4"  class="fang"></datetime></span>
          
              <div class="checkbox_wrap">
            <label >否</label>
            <span class="check_wrap">
              <input type="radio"   name="guoshan" value="否" id="guoshanfou"  v-model="jinsiflag4"/>
              <span class="xuanzhong" v-show="(jinsiflag4.toString()).indexOf('否')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
                </div>
              </div>
             


                   <div class="pifu"><span style="position: relative;top:0.3rem;">皮肤性质：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.26rem;">
          <label>干性</label>
          <span class="check_wrap">
            <input type="checkbox" value="干性" name="xingzhi" v-model="xingzhi">
            <span class="xuanzhong" v-show="(xingzhi.toString()).indexOf('干性')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label>油性</label>
           <span class="check_wrap">
             <input type="checkbox" value="油性" name="xingzhi" v-model="xingzhi">
             <span class="xuanzhong" v-show="(xingzhi.toString()).indexOf('油性')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label>混合性</label>
           <span class="check_wrap">
             <input type="checkbox" value="混合性" name="xingzhi" v-model="xingzhi">
             <span class="xuanzhong" v-show="(xingzhi.toString()).indexOf('混合性')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label>中性</label>
            <span class="check_wrap">
              <input type="checkbox" value="中性" name="xingzhi" v-model="xingzhi">
              <span class="xuanzhong" v-show="(xingzhi.toString()).indexOf('中性')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
               <div class="checkbox_wrap">
            <label>敏感性</label>
            <span class="check_wrap">
              <input type="checkbox" value="敏感性" name="xingzhi" v-model="xingzhi">
              <span class="xuanzhong" v-show="(xingzhi.toString()).indexOf('敏感性')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
               <div class="checkbox_wrap">
            <label>问题性</label>
            <span class="check_wrap">
              <input type="checkbox" value="问题性" name="xingzhi" v-model="xingzhi">
              <span class="xuanzhong" v-show="(xingzhi.toString()).indexOf('问题性')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              
          </div>
          <div class="shui_time1">备注：<input type="text" id="xingzhibeizhu" v-model="xingzhibei"></div>
            </div>


          <div class="pifutanxing">皮肤弹性：
            <div class="checkbox_wrap" style="position: relative;left:-0.28rem;">
           <label >好</label>
           <span class="check_wrap">
             <input type="checkbox"  value="好" name="tanxing" v-model="tanxing">
             <span class="xuanzhong" v-show="(tanxing.toString()).indexOf('好')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >尚可</label>
            <span class="check_wrap">
              <input type="checkbox"  value="尚可" name="tanxing" v-model="tanxing">
              <span class="xuanzhong" v-show="(tanxing.toString()).indexOf('尚可')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >不佳</label>
            <span class="check_wrap">
              <input type="checkbox" value="不佳" name="tanxing" v-model="tanxing">
              <span class="xuanzhong" v-show="(tanxing.toString()).indexOf('不佳')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
             </div>  
             
              <div class="shengli"><span style="position: relative;top:0.3rem;">角质：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap paddin" style="position: relative;left:-0.08rem;">
          <label >正常</label>
          <span class="check_wrap">
            <input type="checkbox"   value="正常" name="jiaozhi" v-model="jiaozhi"/>
            <span class="xuanzhong" v-show="(jiaozhi.toString()).indexOf('正常')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >肥厚</label>
           <span class="check_wrap">
             <input type="checkbox"  value="肥厚" name="jiaozhi" v-model="jiaozhi"/>
             <span class="xuanzhong" v-show="(jiaozhi.toString()).indexOf('肥厚')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >粗厚</label>
           <span class="check_wrap">
             <input type="checkbox"  value="粗厚" name="jiaozhi" v-model="jiaozhi"/>
             <span class="xuanzhong" v-show="(jiaozhi.toString()).indexOf('粗厚')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap" style="position: relative;left:-0.1rem;">
            <label >偏薄</label>
            <span class="check_wrap">
              <input type="checkbox"  value="偏薄" name="jiaozhi" v-model="jiaozhi"/>
              <span class="xuanzhong" v-show="(jiaozhi.toString()).indexOf('偏薄')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>             
          </div>    
            </div>

           <div class="jia_qingkuang1">皮脂量：
            <div class="checkbox_wrap paddin3">
           <label>正常</label>
           <span class="check_wrap">
             <input type="checkbox" value="正常" name="pifuliang"  v-model="pifuliang"/>
             <span class="xuanzhong" v-show="(pifuliang.toString()).indexOf('正常')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >局部过多</label>
            <span class="check_wrap">
              <input type="checkbox" value="局部过多" name="pifuliang" v-model="pifuliang"/>
              <span class="xuanzhong" v-show="(pifuliang.toString()).indexOf('局部过多')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>             
           </div> 
           
           <div class="jia_qingkuang1">含水量：
            <div class="checkbox_wrap paddin3">
           <label>正常</label>
           <span class="check_wrap">
             <input type="checkbox" value="正常" name="hanshuiliang" v-model="hanshuiliang"/>
             <span class="xuanzhong" v-show="(hanshuiliang.toString()).indexOf('正常')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >缺乏</label>
            <span class="check_wrap">
              <input type="checkbox" value="缺乏" name="hanshuiliang" v-model="hanshuiliang"/>
              <span class="xuanzhong" v-show="(hanshuiliang.toString()).indexOf('缺乏')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>             
           </div> 
          
            <div class="jia_qingkuang1">敏感度：
            <div class="checkbox_wrap paddin3">
           <label>易过敏</label>
           <span class="check_wrap">
             <input type="checkbox" value="易过敏" name="mingandu" v-model="mingandu"/>
             <span class="xuanzhong" v-show="(mingandu.toString()).indexOf('易过敏')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
            </div>                            
           </div>
           
            <div class="pifutanxing1">UV敏感度：
            <div class="checkbox_wrap" style="margin-left:0.2rem;">
           <label >晒即红</label>
           <span class="check_wrap">
             <input type="checkbox"  value="晒即红" name="UV" v-model="UV">
             <span class="xuanzhong" v-show="(UV.toString()).indexOf('晒即红')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div> 
              <div class="checkbox_wrap">
            <label >易晒黑</label>
            <span class="check_wrap">
              <input type="checkbox"  value="易晒黑" name="UV" v-model="UV">
              <span class="xuanzhong" v-show="(UV.toString()).indexOf('易晒黑')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             </div>            
             </div>
            
                    <div class="pifu1"><span style="position: relative;top:0.3rem;">过敏史：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap">
          <label>酒精</label>
          <span class="check_wrap">
            <input type="checkbox" value="酒精" name="guomin" v-model="guomin">
            <span class="xuanzhong" v-show="(guomin.toString()).indexOf('酒精')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label>海鲜</label>
           <span class="check_wrap">
             <input type="checkbox" value="海鲜" name="guomin" v-model="guomin">
             <span class="xuanzhong" v-show="(guomin.toString()).indexOf('海鲜')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label>化妆品</label>
           <span class="check_wrap">
             <input type="checkbox" value="化妆品" name="guomin" v-model="guomin">
             <span class="xuanzhong" v-show="(guomin.toString()).indexOf('化妆品')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap" style="position: relative;left:-0.06rem;">
            <label>高蛋白质食物</label>
            <span class="check_wrap">
              <input type="checkbox" value="高蛋白质食物" name="guomin" v-model="guomin">
              <span class="xuanzhong" v-show="(guomin.toString()).indexOf('高蛋白质食物')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
        
          </div>
          <div class="shui_time1">其他过敏史：<input type="text" id="qitaguomin" v-model="guominbei"></div>
            </div>

                    <div class="paibian"><span style="position: relative;top:0.5rem;">皮肤问题：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.3rem;">
          <label >过敏</label>
          <span class="check_wrap">
            <input type="checkbox"   value="过敏" name="pifuques" v-model="pifuques"/>
            <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('过敏')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >暗疮</label>
           <span class="check_wrap">
             <input type="checkbox"  value="暗疮" name="pifuques" v-model="pifuques"/>
             <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('暗疮')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >色斑</label>
           <span class="check_wrap">
             <input type="checkbox"  value="色斑" name="pifuques" v-model="pifuques"/>
             <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('色斑')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >皱纹</label>
            <span class="check_wrap">
              <input type="checkbox"  value="皱纹" name="pifuques" v-model="pifuques"/>
              <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('皱纹')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >毛孔粗大</label>
            <span class="check_wrap">
              <input type="checkbox"  value="毛孔粗大" name="pifuques" v-model="pifuques"/>
              <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('毛孔粗大')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >干燥缺水</label>
            <span class="check_wrap">
              <input type="checkbox"  value="干燥缺水" name="pifuques" v-model="pifuques"/>
              <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('干燥缺水')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >松弛下垂</label>
            <span class="check_wrap">
              <input type="checkbox"  value="松弛下垂" name="pifuques" v-model="pifuques"/>
              <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('松弛下垂')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >其他</label>
            <span class="check_wrap">
              <input type="checkbox"  value="其他" name="pifuques" v-model="pifuques"/>
              <span class="xuanzhong" v-show="(pifuques.toString()).indexOf('其他')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
            </div>

                        <div class="paibian1"><span style="position: relative;top:2rem;">乳房状况：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:0.3rem;">
          <label >晦暗</label>
          <span class="check_wrap">
            <input type="checkbox"   value="晦暗" name="rufang" v-model="rufang"/>
            <span class="xuanzhong" v-show="(rufang.toString()).indexOf('晦暗')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >干燥</label>
           <span class="check_wrap">
             <input type="checkbox"  value="干燥" name="rufang" v-model="rufang"/>
             <span class="xuanzhong" v-show="(rufang.toString()).indexOf('干燥')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >饱满</label>
           <span class="check_wrap">
             <input type="checkbox"  value="饱满" name="rufang" v-model="rufang"/>
             <span class="xuanzhong" v-show="(rufang.toString()).indexOf('饱满')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >松弛</label>
            <span class="check_wrap">
              <input type="checkbox"  value="松弛" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('松弛')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >外扩</label>
            <span class="check_wrap">
              <input type="checkbox"  value="外扩" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('外扩')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >萎缩</label>
            <span class="check_wrap">
              <input type="checkbox"  value="萎缩" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('萎缩')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >副乳</label>
            <span class="check_wrap">
              <input type="checkbox"  value="副乳" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('副乳')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >扁平</label>
            <span class="check_wrap">
              <input type="checkbox"  value="扁平" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('扁平')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳房胸斑</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳房胸斑" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳房胸斑')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >乳房大小不一</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳房大小不一" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳房大小不一')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳房青筋暴露</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳房青筋暴露" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳房青筋暴露')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              
          </div>          
          <div class="fang_wrap2">
           <div class="checkbox_wrap">
            <label >乳房胸斑</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳房胸斑" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳房胸斑')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >腋下淋巴肿大</label>
            <span class="check_wrap">
              <input type="checkbox"  value="腋下淋巴肿大" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('腋下淋巴肿大')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
           <div class="fang_wrap2">
           <div class="checkbox_wrap">
            <label >目前正患有乳腺疾病</label>
            <span class="check_wrap">
              <input type="checkbox"  value="目前正患有乳腺疾病" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('目前正患有乳腺疾病')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳头挺立</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳头挺立" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳头挺立')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
           <div class="checkbox_wrap">
            <label >乳头凹陷</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳头凹陷" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳头凹陷')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳头皱折</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳头皱折" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳头皱折')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
           <div class="checkbox_wrap">
            <label >经前／后乳房胀痛</label>
            <span class="check_wrap">
              <input type="checkbox"  value="经前经后乳房胀痛" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('经前经后乳房胀痛')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳晕发黑</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳晕发黑" name="rufang" v-model="rufang"/>
              <span class="xuanzhong" v-show="(rufang.toString()).indexOf('乳晕发黑')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
            </div>

            <div class="xiongbu"><span style="position: relative;top:0.3rem;">胸部护理目的：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:-0.2rem;">
          <label >增大</label>
          <span class="check_wrap">
            <input type="checkbox"   value="增大" name="xiongbuhu" v-model="xiongbuhu"/>
            <span class="xuanzhong" v-show="(xiongbuhu.toString()).indexOf('增大')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >紧实</label>
           <span class="check_wrap">
             <input type="checkbox"  value="紧实" name="xiongbuhu" v-model="xiongbuhu"/>
             <span class="xuanzhong" v-show="(xiongbuhu.toString()).indexOf('紧实')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >保健</label>
           <span class="check_wrap">
             <input type="checkbox"  value="保健" name="xiongbuhu" v-model="xiongbuhu"/>
             <span class="xuanzhong" v-show="(xiongbuhu.toString()).indexOf('保健')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >产后恢复</label>
            <span class="check_wrap">
              <input type="checkbox"  value="产后恢复" name="xiongbuhu" v-model="xiongbuhu"/>
              <span class="xuanzhong" v-show="(xiongbuhu.toString()).indexOf('产后恢复')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>              
          </div>         
            </div>

                    <div class="rufangjian"><span style="position: relative;top:0.8rem;">乳房健康状况：</span>
             <div class="fang_wrap1"> 
               <div class="checkbox_wrap" style="margin-left:-0.2rem;">
          <label >乳腺增生</label>
          <span class="check_wrap">
            <input type="checkbox"   value="乳腺增生" name="rufangjian" v-model="rufangjian"/>
            <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('乳腺增生')!=-1"></span>
            <span class="noxuanzhong"></span>
          </span>
            </div> 
             <div class="checkbox_wrap">
           <label >纤维瘤</label>
           <span class="check_wrap">
             <input type="checkbox"  value="纤维瘤" name="rufangjian" v-model="rufangjian"/>
             <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('纤维瘤')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             <div class="checkbox_wrap">
           <label >乳腺炎</label>
           <span class="check_wrap">
             <input type="checkbox"  value="乳腺炎" name="rufangjian" v-model="rufangjian"/>
             <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('乳腺炎')!=-1"></span>
             <span class="noxuanzhong"></span>
           </span>
             </div>
             </div>
             <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >小叶增生</label>
            <span class="check_wrap">
              <input type="checkbox"  value="小叶增生" name="rufangjian" v-model="rufangjian"/>
              <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('小叶增生')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >淋巴肿大</label>
            <span class="check_wrap">
              <input type="checkbox"  value="淋巴肿大" name="rufangjian" v-model="rufangjian"/>
              <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('淋巴肿大')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
           <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >腺管堵塞</label>
            <span class="check_wrap">
              <input type="checkbox"  value="腺管堵塞" name="rufangjian" v-model="rufangjian"/>
              <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('腺管堵塞')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
              <div class="checkbox_wrap">
            <label >乳腺囊肿</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳腺囊肿" name="rufangjian" v-model="rufangjian"/>
              <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('乳腺囊肿')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>
          </div>
          <div class="fang_wrap2">
              <div class="checkbox_wrap">
            <label >乳腺肿块</label>
            <span class="check_wrap">
              <input type="checkbox"  value="乳腺肿块" name="rufangjian" v-model="rufangjian"/>
              <span class="xuanzhong" v-show="(rufangjian.toString()).indexOf('乳腺肿块')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
              </div>              
          </div>
            </div>
            
          <div class="jiati_wrap">
          <div class="jiati_title"><span></span>假体</div>
          <div class="jiati_item"><span>假体类型：</span><input type="text"  id="jiatilei" v-model="jiatilei"/> </div>
          <div class="jiati_item" ><span>手术时间：</span><span class="jin_wrap"><input type="text" id="showDatePicker" v-model="jiatileitime"  placeholder="请选择时间" readonly="readonly"  /><datetime  v-model="jiatileitime" class="fang"></datetime></span> </div>
          <div class="jiati_item"><span>目前情况：</span><input type="text"  id="muqian" v-model="muqian"/> </div>
         </div> 
         
         <div class="shenti_question">
          <div class="jiati_title"><span></span>身体情况</div>
          <div class="bingshi">是否有患乳腺纤维瘤/囊肿<input type="text" />直径<input type="text" name="xw" v-model="rucm"/>CM</div>
             <div class="bingshi">是否患有子宫肌瘤/囊肿<input type="text" />直径<input type="text" name="jl"  v-model="zigcm"/>CM</div>
             <div class="bingshi1">是否有乳腺、生殖系统癌症家族病史：</div>       
             <div class="textarer"><input type="text" name="ls"  maxlength="20" v-model="yichuan"/></div>
         </div>
         
         <div class="tijiao" @click="tijiaoinfo()"><span>提交</span></div>
        </div>
    </div>
     <!-- 出生日期 -->
     <mt-datetime-picker
    ref="picker"
    type="date"
    v-model="birthday1"
	 :startDate="startDate"
    :endDate="eDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm"
    >
  </mt-datetime-picker>

   <mt-datetime-picker
    ref="picker1"
    type="date"
    v-model="addTime1"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm1"
    >
  </mt-datetime-picker>

   <mt-datetime-picker
    ref="picker2"
    type="date"
    v-model="ajinsi"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm2"
    >
  </mt-datetime-picker>

  <mt-datetime-picker
    ref="picker3"
    type="date"
    v-model="ajinsi1"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm3"
    >
  </mt-datetime-picker>

  <mt-datetime-picker
    ref="picker4"
    type="date"
    v-model="ajinsi2"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm4"
    >
  </mt-datetime-picker>

  <mt-datetime-picker
    ref="picker5"
    type="date"
    v-model="ajinsi3"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm5"
    >
  </mt-datetime-picker>

  <mt-datetime-picker
    ref="picker6"
    type="date"
    v-model="ajinsi4"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm6"
    >
  </mt-datetime-picker>

   <mt-datetime-picker
    ref="picker7"
    type="date"
    v-model="ajiatileitime"
	 :startDate="startDate"
     year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
   @confirm="handleConfirm7"
    >
  </mt-datetime-picker>

 </div>
</template>

<script>
import { Datetime } from 'vux'
import $ from 'jquery'
 export default {
   data () {
     return {
       	startDate:new Date('1965-1-1'),
       customerId:this.$route.query.customerId,
      name:"",
      sex:"",
      age:"",
      weight:"",
      height:"",
      addTime:"",
       addTime1:new Date('1990'),
      adress:"",
      carNum:"",
      email:"",
      mobile:"",
      birthday:"",
      birthday1:new Date('1970'),
      buzyTime:"",
      
      jinsi:"",
      jinsi1:"",
      jinsi2:"",
      jinsi3:"",
      jinsi4:"",
      ajinsi:new Date('1990'),
      ajinsi1:new Date('1990'),
      ajinsi2:new Date('1990'),
      ajinsi3:new Date('1990'),
      ajinsi4:new Date('1990'),
       jinsiflag:[],
      jinsiflag1:[],
       jinsiflag2:[],
        jinsiflag3:[],
         jinsiflag4:[],
         
       jiating:"",
       zhiye:"",
       aihao:[],
       wangshen:[],
       wangmian:[],
       wangxing:[],
       shexiang:[],
       taixiang:[],
       yinshi:[],
       shuimian:[],
       shuimiantime:"",
       shenghuo:[],
       paibian:[],
       yuejing:[],
       jingxue:[],
       baidai:[],
       xingzhi:[],
       xingzhibei:"",
       tanxing:[],
       jiaozhi:[],
       pifuliang:[],
       hanshuiliang:[],
       mingandu:[],
       UV:[],
       guomin:[],
       guominbei:"",
       pifuques:[],
       rufang:[],
       xiongbuhu:[],
       rufangjian:[],
       jiatilei:"",
       jiatileitime:"",
        ajiatileitime:new Date('1990'),
       muqian:"",
       rucm:"",
       zigcm:"",
       yichuan:"",
    courseList:[],
     cusItemId:"",//项目id
    cusItemName:"",//项目名字
      eDate:new Date(),
      sDate:'1950-01-01',
      eDate:'2019-01-01',
     }
   },
   created(){
      this.getinfo()
      this.dictionnary1()
   },
   methods: {
    filDate(value) {
			var filValue = value.split(' ');
			return filValue[0];
    },
     formatDate:function (date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        if(month<10){
            month="0"+month;
        }
        return year + '-' + month + '-' + day; 
    },
    //获取用户基本信息
     getinfo(){
        this.instance.$post('/rest/wx/customer/findc',{
          customerId:this.customerId
        },res => {
       console.log(res);
        this.name= res.rows[0].name;
       this.sex= res.rows[0].sex
        // this.age= res.rows[0].
        this.weight= res.rows[0].weight
        this.height= res.rows[0].height
        this.addTime=this.filDate(res.rows[0].addTime)
        this.adress= res.rows[0].adress
        this.carNum= res.rows[0].carNum
        this.email= res.rows[0].email
        this.mobile= res.rows[0].mobile
        this.birthday=this.filDate( res.rows[0].birthday)
        this.buzyTime= res.rows[0].buzyTime
   })
     },
      dictionnary1(){
          this.instance.$post('/rest/wx/dictionnary/getdictionnarylist', {
              typeCode: "spaItemType"
      }, res => {
        console.log(res);
        var data = res.rows;
				for(var i = 0; i < data.length; i++) {
					var item = data[i];
					if(i==0){
						this.cusItemName=item.name
					}
					this.courseList.push(item)
				}
              
      })
      },
     openPicker() {
         console.log(1)
         this.$refs.picker.open();
    },
     handleConfirm(){
          console.log(this.birthday1)
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.birthday1))
		   this.birthday = this.config.formatDate(this.birthday1)
    },
     openPicker1() {
         console.log(1)
         this.$refs.picker1.open();
    },
     handleConfirm1(){
          console.log(this.addTime1)
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.addTime1))
		   this.addTime = this.config.formatDate(this.addTime1)
    },
     openPicker3() {
         console.log(1)
         this.$refs.picker2.open();
    },
     handleConfirm2(){
          console.log(this.jinsi)
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.ajinsi))
		   this.jinsi = this.config.formatDate(this.ajinsi)
    },
     openPicker4() {
         console.log(1)
         this.$refs.picker3.open();
    },
     handleConfirm3(){
        
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.ajinsi1))
		   this.jinsi1 = this.config.formatDate(this.ajinsi1)
    },
      openPicker5() {
         console.log(1)
         this.$refs.picker4.open();
    },
     handleConfirm4(){
        
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.ajinsi2))
		   this.jinsi2 = this.config.formatDate(this.ajinsi2)
    },
     openPicker6() {
         console.log(1)
         this.$refs.picker5.open();
    },
     handleConfirm5(){
        
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.ajinsi3))
		   this.jinsi3 = this.config.formatDate(this.ajinsi3)
    },
     openPicker7() {
         console.log(1)
         this.$refs.picker6.open();
    },
     handleConfirm6(){
        
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.ajinsi4))
		   this.jinsi4 = this.config.formatDate(this.ajinsi4)
    },
     openPicker8() {
         console.log(1)
         this.$refs.picker7.open();
    },
     handleConfirm7(){
        
          $('.v-modal').css('opacity','0')
           console.log(this.config.formatDate(this.ajiatileitime))
		   this.jiatileitime = this.config.formatDate(this.ajiatileitime)
    },
    tijiaoinfo(){
       var typelist = this.courseList;
             for(var i =0;i<typelist.length;i++){
                if(this.cusItemName==typelist[i].name){
                this.cusItemId = typelist[i].dictionaryId
                }
              } 
       console.log(this.jiating)
       var data = {
 	 customerId:this.customerId,
   name:this.name,
    sex:this.sex,
    age:this.age,
    weight:this.weight,
    height:this.height,
    addTime:this.addTime,
    adress:"",
    carNum:this.carNum,
    email:this.email,
    mobile:this.mobile,
    birthday:this.birthday,
    buzyTime:this.buzyTime,

   	 marriageStatus:this.jiating,
   	 profession:this.zhiye,
   	 hobby:this.aihao.join(','),
 	 cusItemId:this.cusItemId,
 	 detailId:"",
 	 ws:this.wangshen.join(','),
   	 ms:this.wangmian.join(','),
   	 xt:this.wangxing.join(','),
   	 sx:this.shexiang.join(','),
   	 tx:this.taixiang.join(','),
   	 ys:this.yinshi.join(','),
   	 sm:this.shuimian.join(','),
   	 sj:this.shuimiantime,
      sh:this.shenghuo.join(','),
      
   	 pb:this.paibian.join(','),
   	 yj:this.yuejing.join(','),
   	 yx:this.jingxue.join(','),
      bd:this.baidai.join(','),
      
   	 js:this.jinsi,
     rds:this.jinsi1,
     tc:this.jinsi2,
     mb:this.jinsi3,
     gs:this.jinsi4,

     px:this.xingzhi.join(','),
     pt:this.tanxing.join(','),
     jz:this.jiaozhi.join(','),
     pz:this.pifuliang.join(','),
     sl:this.hanshuiliang.join(','),
     mg:this.mingandu.join(','),
     uv:this.UV.join(','),
     gm:this.guomin.join(','),
     pw:this.pifuques.join(','),

     rf:this.rufang.join(','),
     xh:this.xiongbuhu.join(','),
     rj:this.rufangjian.join(','),

     jx:this.jiatilei,//假体类型
     ss:this.jiatileitime,
     mq:this.muqian,
     xw:this.rucm,
     jl:this.zigcm,
     ls:this.yichuan,
      itemName:this.cusItemName,
     question:""
   }
   console.log('888')
   console.log(data)     
       this.instance.$post('/rest/wx/customerSpa/addCustomerSpaDetails',
      data
       ,res => {
       console.log(res);
       if(res.status){
         this.$router.push({
                name: "cusjiben",
                query: {
                  name:this.name,
                  head:this.head,
                  customerId:this.customerId,
                  sex:this.sex,
                  mobile:this.mobile
                
                }
              });
       }
   })

    }
   },
    mounted(){
  
   },
   components: {
      Datetime
   }
 }
</script>

<style scoped lang="less">
.jin_wrap{position: relative;}
.fang{width:100%;height:100%;position: absolute;top:0;left: 0;opacity: 0;}
select{border:none;background:none;outline: none;font-size: 0.42rem;appearance: none;}
   .jia_qingkuang{height:0.8rem;line-height: 0.8rem;padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     .jia_qingkuang1{height:0.8rem;line-height: 0.8rem;padding-left: 0.2rem;}
     .pifutanxing{height:0.8rem;line-height: 0.8rem;padding-left: 0.2rem;}
     .pifutanxing1{height:0.8rem;line-height: 0.8rem;padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     .zhiye{height:1.35rem;padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     .xiongbu{height:1.35rem;padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     .shengli{height:1.35rem;padding-left: 0.2rem;}
     .paibian{height:1.9rem;padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     .paibian1{height:5.4rem;padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     .aihao,.shuimian,.rufangjian{height:2.7rem; padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
     
     .pifu{height:2.45rem; padding-left: 0.2rem;}
     .pifu1{height:2.45rem; padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;}
  .checkbox_wrap{display: inline-block;margin-left: 0.5rem;}
  .checkbox_wrap1{display: inline-block;}
  .fang_wrap1{display: inline-block;margin-top: 0.2rem;}
  .fang_wrap2{margin:0.2rem 0 0 1.15rem;}
  .checkbox_wrap label{font-size:0.26rem;color:#2D2D2D;vertical-align: middle;margin-right: 0.12rem;position: relative;top:0.02rem;}
   .checkbox_wrap1 label{font-size:0.26rem;color:#2D2D2D;vertical-align: middle;margin-right: 0.12rem;}
  .check_wrap{display: inline-block; width:0.3rem;height:0.3rem;position: relative;vertical-align: middle;}
  .check_wrap input{width:0.3rem;height:0.3rem;position:absolute;top:0;left:0;z-index: 999;opacity: 0;}
  .xuanzhong{display: inline-block; width:0.3rem;height:0.3rem;background:url(../../assets/images/xuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;z-index: 998;}
    
     .noxuanzhong{display: inline-block; width:0.3rem;height:0.3rem;background:url(../../assets/images/noxuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;}
      .customer_info{font-size:0.26rem ;color:#2D2D2D;overflow: hidden;}
      .paddin{padding-left: 0.3rem;}
      .paddin3{}
      .shenqingk{ height:0.6rem;line-height:0.8rem; padding-left: 0.2rem;border-bottom: 1px solid #E6E6E6;
       position: relative;
      }
      .title_fcf{display: inline-block; width:1.6rem; height:0.42rem; background: url(../../assets/images/custitle_bg.png)no-repeat;background-size: 100%;
       position: absolute;top:0;left:0;
      }
      .title-text{position: absolute;top:-0.17rem;left:0.2;color:#fff;}
      .zhengxiangtitle{height:0.8rem;line-height:0.8rem; padding-left: 0.2rem;color:#4A77B0;}
      .shui_time{margin-top: 0.6rem;} 
      .shui_time input{width:16%;border: none;border-bottom: 1px solid #999;outline: none;padding-left:4% ;}
      .shui_time1{margin-top: 0.6rem;} 
      .shui_time1 input{width:50%;border: none;border-bottom: 1px solid #999;outline: none;padding-left:4% ;}
     
      .zhengxiang{padding-left:0.3rem ;border-bottom: 1px solid #E6E6E6;} 
      .zhengxiang input{width:22%;border: none;border-bottom: 1px solid #999;outline: none;margin-left: 3%;}
      .zhengxing_item{height:0.8rem;margin-top: 0.24rem;}
      .custitle{width:70%;height:20px;line-height:20px; background: url(../../assets/images/biaotizhuangshi.png)no-repeat;background-size: 100%;margin: 0.3rem auto;
                text-align: center;font-size: 0.3rem;color: #2D2D2D; 
      }
      .custitle span{position: relative;top:-0.08rem;}
      .jiben_info_item{height:0.7rem;line-height: 0.7rem;}
      .jiben_info_item1{padding-left: 3%;height:0.7rem;line-height: 0.7rem;border-bottom:1px solid #E6E6E6 ;}
      .jiben_info_item1 input{width:70%;border:none ;outline: none;}
      .jiben_info_item .item1{height:0.7rem; padding-left: 3%; display: inline-block;width:46%;border-right:1px solid #E6E6E6 ;border-bottom:1px solid #E6E6E6 ;position: relative; }
      .jiben_info_item .item2{height:0.7rem; padding-left: 3%;display: inline-block;width:46%;border-bottom:1px solid #E6E6E6 ;position: relative;}
       .jiben_info_item .item1 input{width:60%;border:none ;outline: none;}
      .jiben_info_item .item2 input{width:60%;border:none ;outline: none;}
      .jiati_title{padding-left: 0.3rem; height:0.6rem;height:0.6rem;line-height: 0.6rem; color:#4A77B0;}
      .jiati_title span{display: inline-block;width:2px;height:0.22rem;background: #4A77B0;position: relative;top:0.02rem;right: 0.1rem;}  
      .jiati_item{height:0.8rem;line-height: 0.8rem;padding-left: 3%;}
       .jiati_item span{}
       .jiati_item input{width:76%;border: none;border-bottom: 1px solid #E6E6E6;outline: none;} 
       .jiati_wrap{border-bottom:1px solid #E6E6E6 ;}
       .bingshi{padding-left: 0.2rem;height:0.6rem;}
       .bingshi1{padding-left: 0.2rem;height:0.6rem;}
       .bingshi1 input{width:26%;border: none;border-bottom: 1px solid #E6E6E6;outline: none;margin-left:0.2rem;}       
       .bingshi input{width:16%;border: none;border-bottom: 1px solid #E6E6E6;outline: none;margin-left:0.2rem;}
       .shenti_question{margin-bottom: 0.3rem;}
       .liaocheng{height:1.31rem;padding-left:0.2rem;border-bottom:1px solid #E6E6E6 ;}
       .liaocheng p{padding-top: 0.2rem;}
       .liaocheng p input{width:60%;border: none;border-bottom:1px solid #E6E6E6 ;}
       .queren{padding-top: 0.1rem;}
       .queren p{padding:0 0.2rem;line-height:0.4rem;}
       .guke{padding:0.4rem 0 0 0.2rem;}
       .guke input{width:26%;margin-right: 0.3rem;border: none;border-bottom:1px solid #E6E6E6 ;}
       .tijiao{margin:0.6rem auto; width:40%;height:0.6rem;line-height: 0.6rem; background:#4A77B0;border-radius:10px;text-align: center;}
       .tijiao span{font-size:0.28rem;color:#fff;}
       .textarer{padding:0 0.2rem;}
       .textarer input{width:90%;height:1rem;outline: none;padding:0 0.3rem;background: #fff;border: 1px solid #E6E6E6;}
       
       .train_record {
			display: flex;
			padding: 0.25rem 0.3rem;
			background-color: #fff;
			border-bottom: 1px solid #E6E6E6;
			font-size: 0.3rem;
			color: #2C2E34;
		}
		
		.train_record .train_record1 {
			flex: 1;
		}
		
		.xl_record {
			font-size: 0.35rem;
			padding: 0.04rem 0;
			font-weight: bold;
		}
		
		.xl_record img {
			width: 0.3rem;
			vertical-align: middle;
			margin-left: 0.1rem;
		}
		
		.jinsiduiqi{
			display: inline-block;width:34%;
		}
 
</style>
