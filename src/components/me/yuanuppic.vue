<template>
    <div class="catain">
        <div class="pic_wrap">
          <form method="post" id="uploadPictureForm" name="uploadPictureForm" enctype="multipart/form-data">
            <div class="picimg" @click="imgs==''&&imgclick()" style="margin-top:0rem;" :class="{fpicimg:imgs==''}">
                <input style="display:none;" type="file" name="files" accept="image/*" ref="uploadFile"  id='uploadFile' @change="readLocalFile()"  />
                <img class="fangimg" src="../../assets/images/small add_pho@2x.png" v-show="znopic">
                 <img :src="imgs[0]" v-show="zpic"   style="width:100%;height:100%;border-radius:10px;">                 
                  <div class="close" v-show="imgs[0]">
                    <img src="../../assets/images/btn_photodelete@2x.png" @click.stop="deletpic()">
                  </div>
                <div class="pictrueshang" v-show="pstatus==3">
                     <p>审核未通过</p>
                     <div class="chongxinbtn" @click="imgclick()">重新上传</div>
                   </div>
                    <div class="pictrueshang" v-show="pstatus==2">
                     <p>审核通过</p>
                     <div class="chongxinbtn" @click="imgclick()">重新上传</div>
                   </div>
                    <div class="pictrueshang" v-show="pstatus==1">
                     <p>审核中</p>
                     <div class="chongxinbtn" @click="imgclick()">重新上传</div>
                   </div> 
            </div>
             <div class="picimg" @click="imgs1==''&&imgclick1()" :class="{fpicimg:imgs1==''}">
                <input style="display:none;" type="file" name="files" accept="image/*"   id='uploadFile1' @change="readLocalFile1()" />
                <img class="fangimg" src="../../assets/images/small add_pho@2x.png" v-show="znopic1">
                 <img :src="imgs1[0]" v-show="zpic1"   style="width:100%;height:100%;border-radius:10px;">                 
                  <div class="close" v-show="imgs1[0]">
                    <img src="../../assets/images/btn_photodelete@2x.png" @click.stop="deletpic1()">
                  </div>
                   <div class="pictrueshang" v-show="pstatus1==3">
                     <p>审核未通过</p>
                     <div class="chongxinbtn" @click="imgclick1()">重新上传</div>
                   </div>
                    <div class="pictrueshang" v-show="pstatus1==2">
                     <p>审核通过</p>
                     <div class="chongxinbtn" @click="imgclick1()">重新上传</div>
                   </div>
                    <div class="pictrueshang" v-show="pstatus1==1">
                     <p>审核中</p>
                     <div class="chongxinbtn" @click="imgclick1()">重新上传</div>
                   </div>
            </div>
             <div class="picimg" @click="imgs2==''&&imgclick2()" style="margin-bottom:0.3rem;" :class="{fpicimg:imgs2==''}">
                <input style="display:none;" type="file" name="files" accept="image/*"   id='uploadFile2' @change="readLocalFile2()" />
                <img class="fangimg" src="../../assets/images/small add_pho@2x.png" v-show="znopic2">
                 <img :src="imgs2[0]" v-show="zpic2"   style="width:100%;height:100%;border-radius:10px;">                 
                  <div class="close" v-show="imgs2[0]">
                    <img src="../../assets/images/btn_photodelete@2x.png" @click.stop="deletpic2()">
                  </div>
                   <div class="pictrueshang" v-show="pstatus2==3">
                     <p>审核未通过</p>
                     <div class="chongxinbtn" @click="imgclick2()">重新上传</div>
                   </div>
                    <div class="pictrueshang" v-show="pstatus2==2">
                     <p>审核通过</p>
                     <div class="chongxinbtn" @click="imgclick2()">重新上传</div>
                   </div>
                    <div class="pictrueshang" v-show="pstatus2==1">
                     <p>审核中</p>
                     <div class="chongxinbtn" @click="imgclick2()">重新上传</div>
                   </div>  
            </div>
            <!-- <input type="hidden" name="picId" id="fpicId"  /> -->
						<input type="hidden" name="status" id="ffstatus"  value="1"/>
            </form>
        </div>
        <!-- <div class="picbottom_textheight"></div> -->
        <div class="picbottom_text">
           <p>每人只能上传3张代表突出自己的形象生活照,你的形象将会给到所有的用户看到，请务必把照片拍的好看一些。</p>
           <div class="fabubottom" @click="fabuflag&&picupbtn()">发布</div>
           
        </div>
        <!-- 弹窗 -->
        <div class="fangtan_wrap" v-show="fangtanflag">
            <div class="fangtancon">
              <p>提交成功,审核通过后将展示到小程序</p>
              <div class="fangsured" @click="fangtanme()"><span>确定</span></div>
            </div>
        </div>
         <loading v-model="showLoading" :text="loadText"></loading>
    </div>
</template>

<script>
import { Loading } from 'vux'
export default {
  inject: [ 'reload' ],
    data(){
        return{
                imgs:[],
                znopic:true,
                zpic:false,
                imgs1:[],
                znopic1:true,
                zpic1:false,
                  imgs2:[],
                znopic2:true,
                zpic2:false,
                picid:'',
                pstatus:'',
                 picid1:'',
                pstatus1:'',
                 picid2:'',
                pstatus2:'',
                fabuflag:false,
                bloberjinzhi:'',
                bloberjinzhi1:'',
                bloberjinzhi2:'',
                fangtanflag:false,
                 showLoading: false,
                loadText: '发布中',

        }
    },
    created(){
      this.getfabudatalist()     
    },
    methods:{
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
         if(this.picid!=''){
          
         this.instance.$post('rest/wx/coach/delCoachLifePicture',{
              picId:this.picid
            },res => {
                console.log(res);              
                if(res.status){
                
                  this.$vux.toast.text("删除成功", "center");
                 this.pstatus = '';
                }                
            })
            }
     },
       deletpic1(){
         this.imgs1 = []
         this.file2 = ""
         this.znopic1 = true;
         this.zpic1 = false;
         if(this.picid1!=''){
         this.instance.$post('rest/wx/coach/delCoachLifePicture',{
              picId:this.picid1
            },res => {
                console.log(res);              
                if(res.status){
               
                  this.$vux.toast.text("删除成功", "center");
                 this.pstatus1 = '';
                }                
            })
            }
     },
      deletpic2(){
         this.imgs2 = []
         this.file3 = ""
          this.znopic2 = true;
         this.zpic2 = false;
         if(this.picid2!=''){
         this.instance.$post('rest/wx/coach/delCoachLifePicture',{
              picId:this.picid2
            },res => {
                console.log(res);              
                if(res.status){
              
                  this.$vux.toast.text("删除成功", "center");
                 this.pstatus2 = '';
                }                
            })
            }
     },
     fangtanme(){
       this.fangtanflag = false;
        this.reload()
     },
     //发布按钮
     picupbtn(){
       this.showLoading = true;
       if(this.imgs.length==0&&this.imgs1.length==0&&this.imgs2.length==0){
         
             this.$vux.toast.text("未添加照片", "center");
            return false;
       }
       this.fabuflag = false;
       //$('#fpicId').val('');
        //  var form = document.getElementById("uploadPictureForm");
        //  var formdata = new FormData(form);
        var formdata = new FormData();
         //var status1 = formdata.get('status');
        // var files1 = formdata.getAll('files');
      
        formdata.append('files',this.bloberjinzhi);
         formdata.append('files',this.bloberjinzhi1);
          formdata.append('files',this.bloberjinzhi2);
         formdata.append('status',1);
        let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            var that = this
             this.$http.post('/rest/wx/coach/uploadCoachLifePic', formdata, config).then(function (res) {              
                //that.$vux.toast.text("提交成功,审核通过后将展示到小程序", "center");
                //alert('提交成功,审核通过后将展示到小程序')
               that.showLoading = false;
                that.fangtanflag = true;
              if (res.rel) {
                /*这里做处理*/
                alert('成功了')
              }
            })
      //  $.ajax({
		  //           url: this.config.service_ip + "/rest/wx/coach/uploadCoachLifePic",
		  //           type: 'POST',
		  //           data: formdata,
		  //           cache:false,
		  //           traditional: true,
		  //           contentType: false,
		  //           processData: false,
		  //           success: function (data) {
		             
		  //           }
		  //       });
       
      //  $('#uploadPictureForm').form('submit', {
			// 			type : "POST",
			// 			url :this.config.service_ip + "/rest/wx/coach/uploadCoachLifePic",
			// 			success: (data)=> {
      //         alert('成功')
			// 				console.log(data)
						
			// 				// var date = JSON.parse(data);
			// 				// if(date.rel){  											              			 
			// 			  //  alert('成功')
			                    
      //         // } else { 
                
      //         //  alert('提示:'+date.msg)  
      //         // }

      //         },
      //         onLoadError:()=>{
      //            alert('失败')
      //         }
			// 			})
     },
     //获取发布照片
     getfabudatalist(){
          this.instance.$post('/rest/wx/coach/getCoachPictureInfo',{
              
            },res => {
                console.log(res);              
                if(res.status){
                  var data = res.rows;
                  if(data.length>0){
                      var pictrue = data[0].thumbnail
                  }
                  if(data.length>1){
                  
                      var pictrue1 = data[1].thumbnail
                  }
                   if(data.length>2){
                      var pictrue2 = data[2].thumbnail
                  }
                  if(pictrue){
                      this.picid = data[0].picId
                      this.pstatus =  data[0].status
                      var fstr = this.config.service_ip+'/images/'+pictrue
                      this.imgs.push(fstr)
                       this.znopic = false;
                        this.zpic = true;
                  }
                   if(pictrue1){
                     
                      this.picid1 = data[1].picId
                      this.pstatus1 =  data[1].status
                       var fstr1 = this.config.service_ip+'/images/'+pictrue1
                      this.imgs1.push(fstr1)
                       this.znopic1 = false;
                        this.zpic1 = true;
                  }
                   if(pictrue2){
                      this.picid2 = data[2].picId
                      this.pstatus2 =  data[2].status
                       var fstr2 = this.config.service_ip+'/images/'+pictrue2
                      this.imgs2.push(fstr2)
                       this.znopic2 = false;
                        this.zpic2 = true;
                  }
                }
                
                 
            })
     },
    readLocalFile(){
        var obj = document.getElementById("uploadFile");    
        var localFile = document.getElementById("uploadFile").files[0];           
        var current=this;
        this.imgs = []
        var reader = new FileReader();
         console.log(localFile.type)
                //读取文件过程方法			
            reader.onload = function(e) {
              console.log("成功读取....");
              
              var image = new Image();
              
              image.src = e.target.result;
                    image.onload=function(){
                      console.log('fangcf')
                        var width = image.width;
                        var height = image.height;
                        if(height>width){
                           
                            current.$vux.toast.text("图片应为横屏图片！", "center");
                            return false;
                        }else{
                            current.fabuflag = true;
                      
                      if(current.picid!=''){
                    current.instance.$post('rest/wx/coach/delCoachLifePicture',{
                          picId:current.picid
                        },res => {
                            console.log(res);              
                            if(res.status){               
                            current.pstatus = '';
                            }                
                        })
                        }   
                  lrz(localFile,{quality: 0.4}).then(function (rst) {
                
                  // 处理成功会执行
                  console.log(rst.base64);
                   current.imgs.push(rst.base64)
                  current.file1 = rst.base64;
                  var fangtypeer = current.upload(rst.base64,localFile.type);
                  console.log(fangtypeer)
                  current.bloberjinzhi = fangtypeer;
                })
                .catch(function (err) {
                           
                    alert(err)
                    // 处理失败会执行
                })
                .always(function () {
                 
                    // 不管是成功失败，都会执行
                });            
                 current.znopic = false;
                 current.zpic = true;
                        }
            
            }  
            } 
             reader.readAsDataURL(localFile)                                                    
           
                 
               
     },
     readLocalFile1(){


           var localFile = document.getElementById("uploadFile1").files[0];           
                  var current=this;                  
                var obj = document.getElementById("uploadFile1");
                 this.imgs1 = []  
                        //读取文件过程方法
                  var reader = new FileReader();      			
                  reader.onload = function(e) {
                    console.log("成功读取....");
                    
                    var image = new Image();
                    
                    image.src = e.target.result;
                          image.onload=function(){
                            console.log('fangcf')
                              var width = image.width;
                              var height = image.height;
                              if(height>width){
                                 
                                  current.$vux.toast.text("图片应为横屏图片！", "center");
                                  return false;
                              }else{
                                
                                current.fabuflag = true;
                  
                    if(current.picid1!=''){
         current.instance.$post('rest/wx/coach/delCoachLifePicture',{
              picId:current.picid1
            },res => {
                console.log(res);              
                if(res.status){               
                 current.pstatus1 = '';
                }                
            })
            }   
                     lrz(localFile,{quality: 0.4}).then(function (rst) {
                
                  // 处理成功会执行
                  console.log(rst.base64);
                   current.imgs1.push(rst.base64)
                  current.file2 = rst.base64
                   var fangtypeer = current.upload(rst.base64,localFile.type);
                  console.log(fangtypeer)
                  current.bloberjinzhi1 = fangtypeer;
                })
                .catch(function (err) {
                           
                    alert(err)
                    // 处理失败会执行
                })
                .always(function () {
                 
                    // 不管是成功失败，都会执行
                });;                              
                   current.znopic1 = false;
                  current.zpic1 = true;    
                              }
                          };
                    
                    
                  }
                  reader.readAsDataURL(localFile)
                 
                  
               
     },
      readLocalFile2(){


           var localFile = document.getElementById("uploadFile2").files[0];

                var current=this;
                 var obj = document.getElementById("uploadFile2");  
                   this.imgs2 = []
                       //读取文件过程方法
                  var reader = new FileReader();      			
                  reader.onload = function(e) {
                    console.log("成功读取....");
                    
                    var image = new Image();
                    
                    image.src = e.target.result;
                          image.onload=function(){
                            console.log('fangcf')
                              var width = image.width;
                              var height = image.height;
                              if(height>width){
                                
                                  current.$vux.toast.text("图片应为横屏图片！", "center");
                                  return false;
                              }else{
                                
                                 current.fabuflag = true;
                  
                    if(current.picid2!=''){
         current.instance.$post('rest/wx/coach/delCoachLifePicture',{
              picId:current.picid2
            },res => {
                console.log(res);              
                if(res.status){              
                 current.pstatus2 = '';
                }                
            })
            }
              
                   lrz(localFile,{quality: 0.4}).then(function (rst) {
               
                  // 处理成功会执行
                  console.log(rst.base64);
                   current.imgs2.push(rst.base64)
                  current.file3 = rst.base64
                   var fangtypeer = current.upload(rst.base64,localFile.type);
                  console.log(fangtypeer)
                  current.bloberjinzhi2 = fangtypeer;
                })
                .catch(function (err) {
                           
                    alert(err)
                    // 处理失败会执行
                })
                .always(function () {
                 
                    // 不管是成功失败，都会执行
                });;             
                   current.znopic2 = false;
                  current.zpic2 = true;
                                
                      
                              }
                          };
                    
                    
                  }
                  reader.readAsDataURL(localFile)
                
                 
               
     },
     upload(basestr,type){
       
         var text = window.atob(basestr.split(",")[1]);
        var buffer = new ArrayBuffer(text.length);
        var ubuffer = new Uint8Array(buffer);
       
 
        for (var i = 0; i < text.length; i++) {
            ubuffer[i] = text.charCodeAt(i);
        }
 
        var Builder = window.WebKitBlobBuilder;
        var blob;
 
        if (Builder) {
            var builder = new Builder();
            builder.append(buffer);
            blob = builder.getBlob(type);
        } else {
            blob = new window.Blob([buffer], {type: type});
        }
 
    
        // var formdata = new FormData();
        // formdata.append("imagefile", blob);
        return blob;
     }
    },
    components: {
    Loading
  }
}
</script>
<style scoped>
  .fangtan_wrap{position: fixed;top:0;left:0;bottom: 0;right: 0;background: rgba(0,0,0,0.5);}
  .fangtancon{width:70%;height:2.5rem;background: #fff;z-index:999;margin:3.5rem auto 0;border-radius:10px;text-align: center;position: relative;}
  .fangtancon p{
      font-size: 0.28rem;padding-top:0.7rem;
  }
  .fangtancon .fangsured{position: absolute;bottom:0;left:0;right:0;height:0.8rem;line-height: 0.8rem;border-top:1px solid #f7f7f7;}
  .pictrueshang{position: absolute;top:0;left:0;bottom: 0;right: 0;background: rgba(0,0,0,0.5);border-radius:10px;}
  .pictrueshang p{font-size:0.3rem;
font-family:PingFang-SC-Medium;padding-top:1.16rem;
font-weight:500;
color:rgba(255,255,255,1);}
  .pictrueshang .chongxinbtn{width:1.3rem;
height:0.5rem;margin:0.2rem auto 0;
line-height: 0.5rem;
text-align: center;
background:rgba(73,120,176,1);
border-radius:4px;
font-size:0.24rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
}
  .pic_wrap{padding:0 4%;}
  .fpicimg{border:2px dotted rgba(214,214,214,1);}
  .picimg{margin-top:0.2rem; width:100%;height:3.6rem;position: relative;top:0.2rem;border-radius:10px;text-align: center;}
.close{position: absolute;top:-0.2rem;right:-0.1rem;}
.close img{width:0.4rem;height:0.4rem;}
.piccon p{margin-top:0.3rem;}
/* .picimg img{width:70%;height:100%;} */
.picimg .fangimg{width:0.4rem;margin-top:1.5rem;}
.picbottom_textheight{height:2.1rem;}
.picbottom_text{padding:0 4%;height:2.1rem;}
.picbottom_text p{font-size:0.26rem;
font-family:PingFang-SC-Medium;
font-weight:500;padding:0.1rem 0 0.2rem 0;
color:rgba(29,29,29,1);}
.fabubottom{width:100%;height:0.8rem;line-height:0.8rem;text-align:center; background:rgba(73,120,176,1);
border-radius:10px;font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);}
</style>

