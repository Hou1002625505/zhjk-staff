<template>
 <div class='container'>
     <div class="questionnaire">
         <div class="totals" v-for="(item,index) in questionnaireData" :key="index" v-if="item.gfpList||item.parList||item.summaryList">
             <div class="name">{{item.empName}} <div class="line"></div></div>
             <div class="totalcont">
                <div class="item" v-if="item.gfpList" @click="wqdetail(1,item.gfpList.gxId)">
                  <p class="p1">GFP与健康目标</p>
                   <p class="p2">接待日期：{{item.writeDate.split(" ")[0]}}</p>
                   <div class="btn">查看记录</div>
                   <div class="diamonds"></div>
                       <div class="diamonds" style="right:0;left: initial;"></div>
                       <div class="diamonds" style="bottom:0;top: initial;"></div>
                       <div class="diamonds" style="bottom:0;right:0;top: initial;left: initial;"></div>
                </div>
                <div class="item" v-if="item.parList" @click="wqdetail(2,item.parList.gxId)">
                  <p class="p1">PAR-Q问卷</p>
                   <p class="p2">接待日期：{{item.writeDate.split(" ")[0]}}</p>
                   <div class="btn">查看记录</div>
                   <div class="diamonds"></div>
                       <div class="diamonds" style="right:0;left: initial;"></div>
                       <div class="diamonds" style="bottom:0;top: initial;"></div>
                       <div class="diamonds" style="bottom:0;right:0;top: initial;left: initial;"></div>
                        <div class="sanjiao1" style="top:0;" v-if="item.parList.status==1"><span>未通过</span></div> 
                </div>
                 <div class="item"  v-if="item.summaryList" @click="wqdetail(3,item.summaryList.gxId)">
                  <p class="p1">顾问总结报告</p>
                   <p class="p2">接待日期：{{item.writeDate.split(" ")[0]}}</p>
                   <div class="btn">查看记录</div>
                   <div class="diamonds"></div>
                       <div class="diamonds" style="right:0;left: initial;"></div> 
                       <div class="diamonds" style="bottom:0;top: initial;"></div>
                       <div class="diamonds" style="bottom:0;right:0;top: initial;left: initial;"></div>
                </div>
             </div>
         </div>
     </div>
     <div class="noLi" v-show="nojs">暂无历史</div>
     <router-view></router-view>
 </div>
</template>

<script>
import { $ } from "jquery";
 export default {
   data () {
     return {
       gxingId:this.$route.query.filid,
        questionnaireData:[],
        nojs:false
     }
   },
   created(){
    this.changeMenu();
   },
   methods: {
     changeMenu(){
            this.instance.$post('/rest/wx/reception/getCusReceptionInfoById',{
                  gxId:this.gxingId
              },res => {
                console.log(JSON.stringify(res));
                if(res.status){
                  if(res.rows.length>0){
                    var fd=[];
                    res.rows.forEach(element => {
                      if(element.gfpList||element.parList||element.summaryList){
                     fd.push(element)
                    }
                    });
                    
 this.questionnaireData=fd;
 if(this.questionnaireData.length==0){
     this.nojs=true;
 }
                  }else{
                    this.nojs=true;
                  }
                 
                }
              })   
      
     },
    //  问券历史
    wqdetail(i,gxid){
      if(i==1){
         this.$router.push({
                name: "chagfps1",
                query: {
                   gxId:gxid,
                   hisIndex:1
                }
              });
      }else if(i==2){
           this.$router.push({
                name: "chapars1",
                query: {
                   gxId:gxid,  
                     hisIndex:1
                }
              }); 
      }else{
          this.$router.push({
                name: "chaguwenjies1",
                query: {
                   gxId:gxid
                }
              });
      }
    }
   },
   components: {

   },
     watch: {
    $route(to, from) {
      // console.log(from.meta.partc) 
       if(from.meta.tc!=undefined&&from.meta.tc!=""){
          this.fanggfp=from.meta.tc.fanggfp;
          this.fanggfpData=from.meta.tc;
       }
       if(from.meta.partc!=undefined&&from.meta.partc!=""){
          this.fangpar=from.meta.partc.fangpar;
          this.fangparData=from.meta.partc;
       }
        if(from.meta.wqhistory!=undefined&&from.meta.wqhistory!=""){
          this.wqhistory=1;
       }
    }
  }
 }
</script>

<style scoped lang="less">
.container{
  background-color: #f7f7f7;
     padding: 0 4%;
          width: 92% !important;
          height: initial !important;
          // padding-top: 0;
}
  .xitong_wrap{
      position: fixed;top:0;left:0;top:0;bottom: 0;background: rgba(0, 0, 0, 0.3);z-index: 4999;width:100%;height:100%;
  }
  .xitong_wra{margin-top:1rem;}
  .xitong_header{
      width:84%;height:1rem;line-height: 1rem; background:rgba(74,119,176,1);
border-radius:10px 10px 0px 0px;text-align: center;margin: 0 auto;
  }
    .xitong_header p{font-size: 0.36rem;color: #FFFFFF;}
     .xitong_con{
     background: #fff;width:78%;margin: 0 auto;padding:3%;border-radius: 0px 0px 10px 10px;
     padding-top: 0;
 }
    .xitong_con .tishi{
        height:1rem;
        line-height: 1rem;
        text-align: center;
    }
    .xitong_con .tishi p{font-size: 0.3rem;color: #999999;}
    .xitong_list{
       height:6.2rem;
       overflow-y:auto;
    }
    .xitong_list .active{border:1px solid rgba(74, 119, 176, 1);}
    .xitong_item:first-child{margin-top:0.04rem;}
    .xitong_item{ 
        width:92%;
        margin:0 auto;
        padding:0 3%;
        box-shadow:0px 0px 6px 0px rgba(73,120,176,0.4);
border-radius:5px;
       margin-bottom: 0.3rem;
    }
    .xitong_item .data{
        padding:0.08rem 0;
    }
    .xitong_item .ming{
       font-size: 0.3rem;color: #999999;
    }
    .xitong_item .value{
    font-size: 0.3rem;color: #1D1D1D;
    }
    .btn_wrap{height:0.8rem;padding-bottom: 0.3rem;
    padding-bottom: 0.1rem;
    padding-top: 0.3rem;
    }
    .bujie{width:45%;height:0.8rem;line-height: 0.8rem;text-align: center;border:1px solid rgba(74,119,176,1);
border-radius:10px;float: left;}
.bujie span{font-size: 0.36rem;color: #4A77B0;}
    .jixu{width:45%;height:0.8rem;line-height: 0.8rem;text-align: center;background: #4A77B0;
border-radius:10px;float: right;}
.jixu span{font-size: 0.36rem;color: #FFFFFF;}



		/*.weui-loadmore{
		    margin: 10.5em auto;
    }*/
    .borbottom{ border-bottom:1px solid rgba(247,247,247,0.5);}
	.weui-cell:before{
        left: 0;
        //  border-top:1px solid #e4e4e4 !important;
    }
	.weui-cell{
		padding: 13px 15px;
		
	}
	.weui-cells{
        margin-top:0;
        //border-top:1px solid #f7f7f7 !important;
    }
	.weui-check__label:active{
		background-color: #fff;
	}
	.weui-label{
		position: relative;
		color:#1D1D1D ;
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
    border-color: #d6d6d6;
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
    width: 100%;
    height: 0.85rem;
    line-height:0.85rem;
    font-size: 0.36rem;
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
	border-bottom: 1px solid #f7f7f7;
}
 ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999999;
    font-size: 0.28rem;
}
.menus{
  padding-top: 0.41rem;
  position: sticky;
    top: -1px;
    background-color: #f7f7f7;
    z-index:1;
    padding-bottom: 0.1rem;
  .title{
    font-size:0.4rem;
font-weight:bold;
color:rgba(29,29,29,1);
text-align: center;
  }
  .tip{
    font-size:0.24rem;
font-weight:400;
color:rgba(153,153,153,1);
text-align: center;
padding: 0.1rem 0;
  }
  .btn{
    display: flex;
    margin: 0.2rem 0;
    .item{
   flex: 1;
   text-align: center;
   border: 1px solid #4A77B0;
   height:0.73rem;
   line-height: 0.73rem;
   font-size: 0.34rem;
border-radius:0px 5px 5px 0px;
color: #4A77B0;
font-weight:500;
    }
    .item:first-child{
      border-right: none;
      border-radius:5px 0px 0px 5px;
    }
    .active{
      // border:none !important;
      background-color: #4A77B0;
      color: #fff;
    }
  }
}
 .ques_list_wrap{width:100%;background:#F7F7F7;}
  .ques_list{padding-top:0.1rem;}
  .ques_item{width:92%;height:2.4rem;background:rgba(255,255,255,1);border-radius:10px;padding:0 4%;position: relative;margin-bottom: 0.3rem}
  .item_left{float:left;}
  .item_left .title{font-size: 0.4rem;color:#1D1D1D;    margin-top: 0.35rem; padding-bottom: 0.1rem;}
   .item_left .miaosu{margin-top:0.1rem;}
   .item_left .miaosu p{font-size: 0.24rem;color:#999999;}
   .item_right{float:right; width:1.5rem;height:0.6rem;line-height:0.58rem;text-align: center; background:#4A77B0;border-radius:4px;
     margin-top:0.9rem;
   } 
   .item_right span{font-size: 0.26rem;color:#FFFFFF;} 
   .sanjiao{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_complete@2x.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
   }
   .sanjiao span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
    .sanjiao1{width:1.02rem;height:0.62rem;background:url(../../assets/images/img_notapproved@2x.png);background-size: 100%;position: absolute;right:0;
     text-align: right;
   }
   .sanjiao1 span{font-size: 0.2rem;color:#FFFFFF;position: relative;top:-0.1rem;}
.questionnaire{
  width: 98%;
  margin: 0 auto;
  .totals{
    padding:0.3rem 0; 
     .name{
       position: relative;
       width:1.3rem;
       margin-left: 0.3rem;
height:0.43rem;
line-height: 0.48rem;
text-align: center;
font-size:0.26rem;
font-weight:500;
color:rgba(255,255,255,1);
background:rgba(74,119,176,1);
border-radius:3px 3px 0px 0px;
.line{
   position: absolute;
        width:90%;
height:0.4rem;
border-radius:3px 3px 0px 0px;
border:1px dashed rgba(255,255,255,1);
top: 2px;
left: 4%;
}
     }
     .totalcont{
    width: 100%;
//  height:5rem;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 0px rgba(73,120,176,0.4);
border-radius:10px;
padding: 0.3rem 0 0.1rem  0;
.item{
  position: relative;
  width: 92%;
  height:1.6rem;
  margin: 0 auto;
background:rgba(247,247,247,1);
    margin-bottom: 0.2rem;
.p1{
  font-size:0.4rem;
font-weight:bold;
color:rgba(29,29,29,1);
padding-top: 0.25rem;
padding-left: 0.3rem;
}
.p2{
  font-size:0.24rem;
font-weight:500;
color:rgba(153,153,153,1);
padding-left: 0.3rem;
}
.btn{
  position: absolute;
  width:1.5rem;
height:0.6rem;
line-height: 0.6rem;
text-align: center;
background:rgba(74,119,176,1);
border-radius:2px;
font-size:0.26rem;
font-weight:500;
color:rgba(255,255,255,1);
right: 0.3rem;
top:0.49rem;
}
}
.diamonds{
  position: absolute;
  width: 0.15rem;
  height: 0.15rem;
  background-color: #fff;
  left: 0;
  top: 0;
}
     }
  }
}
.addG{
  position: relative;
  .zemsk{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
.addG .btn{
      width: 90%;
    height: 0.85rem;
    line-height: 0.85rem;
    font-size: 0.36rem;
    text-align: center;
    background: #5176AB;
    border-radius: 6px;
    margin: 0 auto;
    color: #fff;
    font-family: "\5FAE\8F6F\96C5\9ED1";
    margin-top: 0.3rem;
}
.tanchuang_wrap{position: fixed;top:0;left:0;right:0;left:0;background: rgba(0,0,0,0.3);width:100%;height:100%;z-index: 101;}
.tanchuang{    width: 70%;
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);}
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
.noLi{
 position: absolute;
    font-size: 0.34rem;
    text-align: center;
    font-weight: 500;
    color: #999999;
    padding-top: 3.24rem;
    padding-bottom: 1.2rem;
    width: 100%;
    left: 0;
}
</style>
