<template>
 <div class='maintype'>
     <div class="zhengmian_wrap" v-show="zhengflag">
     <div class="picwrap">
         <div class="piccon">
            <div class="picimg" @click="imgclick()">
                <input style="display:none;" type="file" name="file" accept="image/*"   id='uploadFile' @change="readLocalFile()" />
                <img class="fangimg" src="../../assets/images/img_camera@2x.png" v-show="znopic">
                 <img :src="imgs[0]" v-show="zpic"   style="width:70%;height:100%;">                 
            </div>
            <p>正面</p>
             <div class="close" v-show="imgs[0]">
                    <img src="../../assets/images/btn_photodelete@2x.png" @click="deletpic()">
            </div> 
         </div>            
     </div>
     <div class="jingcon">
       <div class="jingcon_title">
           <p>一、站姿正面眼观评估：</p>
       </div>

       <div class="quesitem">
           <p>1、眼睛、耳尖</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio" id="fcf1"  value="平行" name="eyes" v-model="eyes"/>
              <span class="xuanzhong" v-show="(eyes.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label for="fcf1">平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio" id="fcf2"  value="向左倾斜" name="eyes" v-model="eyes"/>
              <span class="xuanzhong" v-show="(eyes.toString()).indexOf('向左倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label for="fcf2">向左倾斜</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio" id="fcf3"  value="向右倾斜" name="eyes" v-model="eyes"/>
              <span class="xuanzhong" v-show="(eyes.toString()).indexOf('向右倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label for="fcf3">向右倾斜</label>
            </div>
           </div> 
       </div>
       
        <div class="quesitem">
           <p>2、肩峰</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio" id="fcf4"  value="平行" name="frontAcromion" v-model="frontAcromion"/>
              <span class="xuanzhong" v-show="(frontAcromion.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label for="fcf4">平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio" id="fcf5"  value="向左倾斜" name="frontAcromion" v-model="frontAcromion"/>
              <span class="xuanzhong" v-show="(frontAcromion.toString()).indexOf('向左倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label for="fcf5">向左倾斜</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio" id="fcf6"  value="向右倾斜" name="frontAcromion" v-model="frontAcromion"/>
              <span class="xuanzhong" v-show="(frontAcromion.toString()).indexOf('向右倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label for="fcf6">向右倾斜</label>
            </div>
           </div> 
       </div>

       <div class="quesitem">
           <p>3、乳头位置</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio" id="fcf7"  value="平行" name="nippleLocation" v-model="nippleLocation"/>
              <span class="xuanzhong" v-show="(nippleLocation.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label for="fcf7">平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio" id="fcf8"  value="偏左" name="nippleLocation" v-model="nippleLocation"/>
              <span class="xuanzhong" v-show="(nippleLocation.toString()).indexOf('偏左')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label for="fcf8">偏左</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio" id="fcf9"  value="向右倾斜" name="nippleLocation" v-model="nippleLocation"/>
              <span class="xuanzhong" v-show="(nippleLocation.toString()).indexOf('向右倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label for="fcf9">向右倾斜</label>
            </div>
           </div> 
       </div>

      <div class="quesitem">
           <p>4、肚脐</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="navel" v-model="navel"/>
              <span class="xuanzhong" v-show="(navel.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="向左倾斜" name="navel" v-model="navel"/>
              <span class="xuanzhong" v-show="(navel.toString()).indexOf('向左倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >向左倾斜</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="偏右" name="navel" v-model="navel"/>
              <span class="xuanzhong" v-show="(navel.toString()).indexOf('偏右')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >偏右</label>
            </div>
           </div> 
       </div>

         
         <div class="quesitem">
           <p>5、髂前上棘</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"   value="平行" name="ilium" v-model="ilium"/>
              <span class="xuanzhong" v-show="(ilium.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="偏左" name="ilium" v-model="ilium"/>
              <span class="xuanzhong" v-show="(ilium.toString()).indexOf('偏左')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >偏左</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"   value="向右倾斜" name="ilium" v-model="ilium"/>
              <span class="xuanzhong" v-show="(ilium.toString()).indexOf('向右倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >向右倾斜</label>
            </div>
           </div> 
       </div>
       

          <div class="quesitem">
           <p>6、手指尖高度</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"   value="平行" name="fingertipHeight" v-model="fingertipHeight"/>
              <span class="xuanzhong" v-show="(fingertipHeight.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="偏左" name="fingertipHeight" v-model="fingertipHeight"/>
              <span class="xuanzhong" v-show="(fingertipHeight.toString()).indexOf('偏左')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >偏左</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"   value="向右倾斜" name="fingertipHeight" v-model="fingertipHeight"/>
              <span class="xuanzhong" v-show="(fingertipHeight.toString()).indexOf('向右倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >向右倾斜</label>
            </div>
           </div> 
           
       </div>
       
    <div class="quesitem">
           <p>7、髌骨</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="patella" v-model="patella"/>
              <span class="xuanzhong" v-show="(patella.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="向左倾斜" name="patella" v-model="patella"/>
              <span class="xuanzhong" v-show="(patella.toString()).indexOf('向左倾斜')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >向左倾斜</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="偏右" name="patella" v-model="patella"/>
              <span class="xuanzhong" v-show="(patella.toString()).indexOf('偏右')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >偏右</label>
            </div>
           </div> 
       </div>
       
       <div class="quesitem">
           <p>8、腿型（备注：双腿并拢测试）</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="正常" name="legType" v-model="legType"/>
              <span class="xuanzhong" v-show="(legType.toString()).indexOf('正常')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >正常</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="X型腿" name="legType" v-model="legType"/>
              <span class="xuanzhong" v-show="(legType.toString()).indexOf('X型腿')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >X型腿</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="O型腿" name="legType" v-model="legType"/>
              <span class="xuanzhong" v-show="(legType.toString()).indexOf('O型腿')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >O型腿</label>
            </div>
           </div> 
       </div>

       <div class="quesitem">
           <p>9、足弓</p>
           <p>左</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="archFoot" v-model="archFoot"/>
              <span class="xuanzhong" v-show="(archFoot.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="高足弓" name="archFoot" v-model="archFoot"/>
              <span class="xuanzhong" v-show="(archFoot.toString()).indexOf('高足弓')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >高足弓</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="平足" name="archFoot" v-model="archFoot"/>
              <span class="xuanzhong" v-show="(archFoot.toString()).indexOf('平足')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >平足</label>
            </div>
           </div>
           <p>右</p>
        <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="archFoot1" v-model="archFoot1"/>
              <span class="xuanzhong" v-show="(archFoot1.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="高足弓" name="archFoot1" v-model="archFoot1"/>
              <span class="xuanzhong" v-show="(archFoot1.toString()).indexOf('高足弓')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >高足弓</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="平足" name="archFoot1" v-model="archFoot1"/>
              <span class="xuanzhong" v-show="(archFoot1.toString()).indexOf('平足')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >平足</label>
            </div>
           </div> 

       </div>
        <div class="zhengjie">
          <textarea v-model="frontComments" placeholder="请填写评语"></textarea>
      </div>
     </div>
     <div class="nextshow" @click="zhengnext()">
         <p>下一步</p>
     </div>

    </div>
    <!-- 侧面 -->
    <div class="cemian_wrap" v-show="ceflag">
        <div class="picwrap">
         <div class="piccon">
             <div class="picimg" @click="imgclick1()">
                <input style="display:none;" type="file" accept="image/*"   id='uploadFile1' @change="readLocalFile1()" />
                <img src="../../assets/images/img_camera@2x.png" v-show="znopic1" class="fangimg">
                 <img :src="imgs1[0]" v-show="zpic1"   style="width:70%;height:100%;">                 
            </div>
            <p>侧面</p>
             <div class="close"  v-show="imgs1[0]">
                    <img src="../../assets/images/btn_photodelete@2x.png" @click="deletpic1()">
            </div> 
         </div>            
     </div>
     <div class="jingcon">
       <div class="jingcon_title">
           <p>二、站姿侧面眼观评估：</p>
       </div>

        <div class="quesitem">
           <p>1、头</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="中立位" name="head" v-model="head"/>
              <span class="xuanzhong" v-show="(head.toString()).indexOf('中立位')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >中立位</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="前引" name="head" v-model="head"/>
              <span class="xuanzhong" v-show="(head.toString()).indexOf('前引')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >前引</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="后仰" name="head" v-model="head"/>
              <span class="xuanzhong" v-show="(head.toString()).indexOf('后仰')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >后仰</label>
            </div>
           </div> 
       </div>
       <div class="quesitem">
           <p>2、耳朵</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="ear" v-model="ear"/>
              <span class="xuanzhong" v-show="(ear.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="偏前" name="ear" v-model="ear"/>
              <span class="xuanzhong" v-show="(ear.toString()).indexOf('偏前')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >偏前</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="偏后" name="ear" v-model="ear"/>
              <span class="xuanzhong" v-show="(ear.toString()).indexOf('偏后')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >偏后</label>
            </div>
           </div> 
       </div>
      <div class="quesitem">
           <p>3、肱骨头中点</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="humerus" v-model="humerus"/>
              <span class="xuanzhong" v-show="(humerus.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="偏前" name="humerus" v-model="humerus"/>
              <span class="xuanzhong" v-show="(humerus.toString()).indexOf('偏前')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >偏前</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="偏后" name="humerus" v-model="humerus"/>
              <span class="xuanzhong" v-show="(humerus.toString()).indexOf('偏后')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >偏后</label>
            </div>
           </div> 
       </div>
        <div class="quesitem">
           <p>4、股骨在转子</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="femur" v-model="femur"/>
              <span class="xuanzhong" v-show="(femur.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="偏前" name="femur" v-model="femur"/>
              <span class="xuanzhong" v-show="(femur.toString()).indexOf('偏前')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >偏前</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="偏后" name="femur" v-model="femur"/>
              <span class="xuanzhong" v-show="(femur.toString()).indexOf('偏后')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >偏后</label>
            </div>
           </div> 
       </div>
       <div class="quesitem">
           <p>5、骨盆</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="sidePelvis" v-model="sidePelvis"/>
              <span class="xuanzhong" v-show="(sidePelvis.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="前倾" name="sidePelvis" v-model="sidePelvis"/>
              <span class="xuanzhong" v-show="(sidePelvis.toString()).indexOf('前倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >前倾</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="后倾" name="sidePelvis" v-model="sidePelvis"/>
              <span class="xuanzhong" v-show="(sidePelvis.toString()).indexOf('后倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >后倾</label>
            </div>
           </div> 
       </div>
      <div class="quesitem">
           <p>6、膝关节中点</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="kneeJoint" v-model="kneeJoint"/>
              <span class="xuanzhong" v-show="(kneeJoint.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="偏前" name="kneeJoint" v-model="kneeJoint"/>
              <span class="xuanzhong" v-show="(kneeJoint.toString()).indexOf('偏前')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >偏前</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="偏后" name="kneeJoint" v-model="kneeJoint"/>
              <span class="xuanzhong" v-show="(kneeJoint.toString()).indexOf('偏后')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >偏后</label>
            </div>
           </div> 
       </div>
        <div class="zhengjie">
          <textarea v-model="sideComment" placeholder="请填写评语"></textarea>
       </div>

     </div>
      <div class="nextshow" @click="cenext()">
         <p>下一步</p>
     </div>
    </div>
    <!-- 背面 -->
    <div class="beimian_wrap" v-show="beiflag">
         <div class="picwrap">
         <div class="piccon">
            <div class="picimg" @click="imgclick2()">
                <input style="display:none;" type="file" accept="image/*"   id='uploadFile2' @change="readLocalFile2()" />
                <img src="../../assets/images/img_camera@2x.png" v-show="znopic2" class="fangimg">
                 <img :src="imgs2[0]" v-show="zpic2"   style="width:70%;height:100%;">                 
            </div>
            <p>背面</p>
             <div class="close"  v-show="imgs2[0]">
                    <img src="../../assets/images/btn_photodelete@2x.png" @click="deletpic2()">
            </div> 
         </div>            
     </div>
     <div class="jingcon">
       <div class="jingcon_title">
           <p>三、站姿背面眼观评估：</p>
       </div>
       
       <div class="quesitem">
           <p>1.耳尖</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="平行" name="earTip" v-model="earTip"/>
              <span class="xuanzhong" v-show="(earTip.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="左侧倾" name="earTip" v-model="earTip"/>
              <span class="xuanzhong" v-show="(earTip.toString()).indexOf('左侧倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >左侧倾</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="右侧倾" name="earTip" v-model="earTip"/>
              <span class="xuanzhong" v-show="(earTip.toString()).indexOf('右侧倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >右侧倾</label>
            </div>
           </div> 
       </div>
      <div class="quesitem">
           <p>2、肩峰</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="平行" name="backAcromion" v-model="backAcromion"/>
              <span class="xuanzhong" v-show="(backAcromion.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="前凸" name="backAcromion" v-model="backAcromion"/>
              <span class="xuanzhong" v-show="(backAcromion.toString()).indexOf('前凸')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >前凸</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="右侧倾" name="backAcromion" v-model="backAcromion"/>
              <span class="xuanzhong" v-show="(backAcromion.toString()).indexOf('右侧倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >右侧倾</label>
            </div>
           </div> 
       </div>
        <div class="quesitem">
           <p>3、肩胛骨</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="平行" name="scapula" v-model="scapula"/>
              <span class="xuanzhong" v-show="(scapula.toString()).indexOf('平行')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >平行</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="左侧倾" name="scapula" v-model="scapula"/>
              <span class="xuanzhong" v-show="(scapula.toString()).indexOf('左侧倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >左侧倾</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="后缩" name="scapula" v-model="scapula"/>
              <span class="xuanzhong" v-show="(scapula.toString()).indexOf('后缩')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >后缩</label>
            </div>
           </div> 
       </div>  
      
      <div class="quesitem">
           <p>4、脊椎</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="vertebra" v-model="vertebra"/>
              <span class="xuanzhong" v-show="(vertebra.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="S型" name="vertebra" v-model="vertebra"/>
              <span class="xuanzhong" v-show="(vertebra.toString()).indexOf('S型')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >S型</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="左侧屈" name="vertebra" v-model="vertebra"/>
              <span class="xuanzhong" v-show="(vertebra.toString()).indexOf('左侧屈')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >左侧屈</label>
            </div>
           </div> 
          
            <div class="checkbox_wrap" style="padding:0 0 0.2rem 3%;">        
            <span class="check_wrap">
              <input type="radio"  value="右侧屈" name="vertebra" v-model="vertebra"/>
              <span class="xuanzhong" v-show="(vertebra.toString()).indexOf('右侧屈')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >右侧屈</label>
            </div>          
       </div>

      <div class="quesitem">
           <p>5、骨盆</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="适中" name="backPelvis" v-model="backPelvis"/>
              <span class="xuanzhong" v-show="(backPelvis.toString()).indexOf('适中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >适中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="左侧倾" name="backPelvis" v-model="backPelvis"/>
              <span class="xuanzhong" v-show="(backPelvis.toString()).indexOf('左侧倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >左侧倾</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="后侧倾" name="backPelvis" v-model="backPelvis"/>
              <span class="xuanzhong" v-show="(backPelvis.toString()).indexOf('后侧倾')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >后侧倾</label>
            </div>
           </div> 
       </div>
       <div class="quesitem">
           <p>6、跟健</p>
           <div class="answer">
            <div class="checkbox_wrap">           
            <span class="check_wrap">
              <input type="radio"  value="正中" name="heelTendon" v-model="heelTendon"/>
              <span class="xuanzhong" v-show="(heelTendon.toString()).indexOf('正中')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >正中</label>
            </div>
            
             <div class="checkbox_wrap">
           
            <span class="check_wrap">
              <input type="radio"  value="内翻" name="heelTendon" v-model="heelTendon"/>
              <span class="xuanzhong" v-show="(heelTendon.toString()).indexOf('内翻')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
             <label >内翻</label>
            </div>

            <div class="checkbox_wrap">
         
            <span class="check_wrap">
              <input type="radio"  value="外翻" name="heelTendon" v-model="heelTendon"/>
              <span class="xuanzhong" v-show="(heelTendon.toString()).indexOf('外翻')!=-1"></span>
              <span class="noxuanzhong"></span>
            </span>
            <label >外翻</label>
            </div>
           </div> 
       </div>
      <div class="zhengjie">
          <textarea v-model="backComment" placeholder="请填写评语"></textarea>
       </div>
    </div>
      <div class="nextshow" @click="beinext()">
         <p>完成</p>
     </div>

    </div>

 </div>

</template>

<script>
 export default {
   data () {
     return {
     zhengflag:true,
      ceflag:false,
      beiflag:false,
       gxId:this.$route.query.gxId,  
      mobile:this.$route.query.mobile,
        fangdong:this.$route.query.fangdong,   
         dongid:this.$route.query.dongid,
           zhiqingid:this.$route.query.zhiqingid,
     eyes:"",
     frontAcromion:"",
     nippleLocation:"",
     navel:"",
     ilium:"",
     fingertipHeight:"",
     patella:"",
     legType:"",
     archFoot:"",
     file1:"",//正面照片
     frontComments:"",
     //侧面
     head:"",
     ear:"",
     humerus:"",
     femur:"",
     sidePelvis:"",
     kneeJoint:"",
     file2:"",
     sideComment:"",//侧面评语
     //背面
     earTip:"",
     backAcromion:"",
     scapula:"",
     vertebra:"",
     backPelvis:"",
     heelTendon:"",
     backComment:"",
     file3:"",//背面照片
     imgs:[],
     znopic:true,
     zpic:false,
     imgs1:[],
     znopic1:true,
     zpic1:false,
      imgs2:[],
     znopic2:true,
     zpic2:false,
     archFoot1:""
     }
   },
   methods: {
     imgclick(){
       document.getElementById("uploadFile").click();
     },
      imgclick1(){
       document.getElementById("uploadFile1").click();
     },
      imgclick2(){
       document.getElementById("uploadFile2").click();
     },
     deletpic(){
         this.imgs = [];
         this.file1 = "";
         this.znopic = true;
         this.zpic = false;
     },
      deletpic1(){
         this.imgs1 = []
         this.file2 = ""
         this.znopic1 = true;
         this.zpic1 = false;
     },
      deletpic2(){
         this.imgs2 = []
         this.file3 = ""
          this.znopic2 = true;
         this.zpic2 = false;
     },
     //图片压缩
    ImgToBase64(file, maxLen, callBack) {
    var img = new Image();

    var reader = new FileReader();//读取客户端上的文件
    reader.onload = function () {
        var url = reader.result;//读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
        img.src = url;//reader读取的文件内容是base64,利用这个url就能实现上传前预览图片
    };
    img.onload = function () {
        //生成比例
        var width = img.width, height = img.height;
        //计算缩放比例
        var rate = 1;
        if (width >= height) {
            if (width > maxLen) {
                rate = maxLen / width;
            }
        } else {
            if (height > maxLen) {
                rate = maxLen / height;
            }
        };
        img.width = width * rate;
        img.height = height * rate;
        //生成canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var base64 = canvas.toDataURL('image/jpeg', 0.9);
        callBack(base64);
    };
    reader.readAsDataURL(file);
},
     readLocalFile(){
     
           var localFile = document.getElementById("uploadFile").files[0];

            
                    var current=this;
                 
                  // this. ImgToBase64(localFile,720,function(base64){
                  //   console.log(base64)
                  //   current.imgs.push(base64)
                  //   current.file1 = base64
                  // }) 
               
                lrz(localFile,{quality: 0.4}).then(function (rst) {            
                  // 处理成功会执行   
                  console.log(rst.base64);
                   current.imgs.push(rst.base64)
                  current.file1 = rst.base64
                })
                .catch(function (err) {
                           
                    alert(err)
                    // 处理失败会执行
                })
                .always(function () {
                 
                    // 不管是成功失败，都会执行
                });;             
                   this.znopic = false;
                    this.zpic = true;
                   
               
     },
     readLocalFile1(){


           var localFile = document.getElementById("uploadFile1").files[0];

            
                  var current=this;

                  //  this. ImgToBase64(localFile,720,function(base64){
                  //   current.imgs1.push(base64)
                  //   current.file2 = base64
                  // })   
                     lrz(localFile,{quality: 0.4}).then(function (rst) {
                
                  // 处理成功会执行
                  console.log(rst.base64);
                   current.imgs1.push(rst.base64)
                  current.file2 = rst.base64
                })
                .catch(function (err) {
                           
                    alert(err)
                    // 处理失败会执行
                })
                .always(function () {
                 
                    // 不管是成功失败，都会执行
                });;            
                   this.znopic1 = false;
                    this.zpic1 = true;
               
     },
      readLocalFile2(){


           var localFile = document.getElementById("uploadFile2").files[0];

                var current=this;
         
                  //  this. ImgToBase64(localFile,720,function(base64){
                  //   current.imgs2.push(base64)
                  //    current.file3 = base64
                  // })
                   lrz(localFile,{quality: 0.4}).then(function (rst) {
               
                  // 处理成功会执行
                  console.log(rst.base64);
                   current.imgs2.push(rst.base64)
                  current.file3 = rst.base64
                })
                .catch(function (err) {
                           
                    alert(err)
                    // 处理失败会执行
                })
                .always(function () {
                 
                    // 不管是成功失败，都会执行
                });;             
                   this.znopic2 = false;
                    this.zpic2 = true;
               
     },
     zhengnext(){
          
     if(this.eyes == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
      if(this.frontAcromion == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.nippleLocation == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.navel == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.ilium == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.fingertipHeight == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.patella == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.legType == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.archFoot == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.file1 == ""){
       this.$vux.toast.text("请拍照");
       return;
     }
     if(this.frontComments == ""){
       this.$vux.toast.text("请填写评语");
       return;
     }

         this.zhengflag = false;
         this.ceflag = true;

     },
      cenext(){
        
         if(this.head == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
      if(this.ear == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
      if(this.humerus == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
      if(this.femur == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
      if(this.sidePelvis == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
      if(this.kneeJoint == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.file2 == ""){
       this.$vux.toast.text("请拍照");
       return;
     }
     if(this.sideComment == ""){
       this.$vux.toast.text("请填写评语");
       return;
     }

         this.ceflag = false;
          this.beiflag = true;
     },
     beinext(){
       
     if(this.earTip == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.backAcromion == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.scapula == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.vertebra == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.backPelvis == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
       if(this.heelTendon == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.backComment == ""){
       this.$vux.toast.text("请填写完整");
       return;
     }
     if(this.file3 == ""){
       this.$vux.toast.text("请拍照");
       return;
     }

      this.instance.$post('/rest/wx/reception/addStaticEvaluation',{
        gxId:this.gxId, 
        mobile:this.mobile ,
         eyes:this.eyes,
          frontAcromion:this.frontAcromion,
          nippleLocation:this.nippleLocation,
          navel:this.navel,
          ilium:this.ilium,
          fingertipHeight:this.fingertipHeight,
          patella:this.patella,
          legType:this.legType,
          archFoot:this.archFoot,
          frontImg:this.config.filDate1(this.file1) ,//正面照片
          frontComments:this.frontComments,
          //侧面
          head:this.head,
          ear:this.ear,
          humerus:this.humerus,
          femur:this.femur,
          sidePelvis:this.sidePelvis,
          kneeJoint:this.kneeJoint,
          sideImg:this.config.filDate1(this.file2),
          sideComment:this.sideComment,//侧面评语
          //背面
          earTip:this.earTip,
          backAcromion:this.backAcromion,
          scapula:this.scapula,
          vertebra:this.vertebra,
          backPelvis:this.backPelvis,
          heelTendon:this.heelTendon,
          backComment:this.backComment,
          backImg:this.config.filDate1(this.file3)//背面照片
      },res => {
        console.log(res);
         if(res.rel){
           var data={
               fangjing:0,
               jingid:res.message
           }
            this.$route.meta.jingItem=data;
     this.$router.back();
          //  this.$router.push({
          //       name: "selectceshi",
          //        query: {
          //         gxId:this.gxId, 
          //          mobile:this.mobile,
          //          fangjing:0,
          //          jingid:res.message,
          //          fangdong:this.fangdong,
          //          dongid:this.dongid,
          //          zhiqingid:this.zhiqingid
          //       }               
          // });
         }else{
          this.$vux.toast.text(res.msg);
         }
        
    })
       
         
     }   
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
.picwrap{width:100%;background:rgba(247,247,247,1);padding:3% 0;}
  .piccon{width:50%;height:4.98rem;background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);padding:0 3%;
border-radius:10px;margin: 3% auto;text-align: center;position: relative;}

.picimg{width:100%;height:4rem; background:rgba(247,247,247,1);position: relative;top:0.2rem;border-radius:10px;}
.close{position: absolute;top:-0.2rem;right:-0.1rem;}
.close img{width:0.4rem;height:0.4rem;}
.piccon p{margin-top:0.3rem;}
//  .picimg img{width:70%;height:100%;}
.picimg .fangimg{width:1rem;margin-top:1.52rem;}
.jingcon{}
.jingcon_title{height:1rem;line-height: 1rem;padding-left:3%;border-bottom:1px solid #f7f7f7;}
.jingcon_title p{font-size:0.32rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(29,29,29,1);}
.quesitem{border-bottom:1px solid #f7f7f7;}
.quesitem p{
   padding:2% 3% 1%;
 font-size:0.32rem;
font-family:PingFang-SC-Medium;
font-weight:normal;
color:rgba(29,29,29,1);
}
.answer{display: flex;  padding:2% 3%;}
.checkbox_wrap{display: inline-block;flex:1;text-align: left;}
  .checkbox_wrap1{display: inline-block;}
  .fang_wrap1{display: inline-block;margin-top: 0.2rem;}
  .fang_wrap2{margin:0.2rem 0 0 1.15rem;}
  .checkbox_wrap label{font-size:0.3rem;color:#2D2D2D;vertical-align: middle;margin-left: 0.2rem;position: relative;top:0.02rem;}
   .checkbox_wrap1 label{font-size:0.26rem;color:#2D2D2D;vertical-align: middle;margin-right: 0.12rem;}
      .check_wrap{display: inline-block; width:0.4rem;height:0.4rem;position: relative;vertical-align: middle;}
  .check_wrap input{width:0.4rem;height:0.4rem;position:absolute;top:0;left:0;z-index: 999;opacity: 0;}
  .xuanzhong{display: inline-block; width:0.4rem;height:0.4rem;background:url(../../assets/images/xuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;z-index: 998;}
    
     .noxuanzhong{display: inline-block; width:0.4rem;height:0.4rem;background:url(../../assets/images/noxuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;}
.zhengjie{width:94%;margin:0.4rem auto;}
textarea{width:93.8%;height:1rem;background:#F7F7F7;
border:1px solid rgba(214,214,214,1);outline: none;resize:none;padding:3%;font-size: 0.3rem;color:#1D1D1D;}
.nextshow{width:100%;height:0.8rem;line-height:0.8rem; background:rgba(74,119,176,1);text-align: center;}
.nextshow p{font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);}
</style>
