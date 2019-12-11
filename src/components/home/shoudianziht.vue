<template>
 <div class='container'>
    <div class="tigetcus_wrap">
       <div class="search">
           <img class="pic1" src="../../assets/images/icon_search@2x.png" @click="getcusinfo()"/>
           <input type="search" placeholder="请输入姓名/卡号/手机号码查找会员" id="search" v-model="custel"  @keyup.enter="getcusinfo()"  @keyup="feng()">
           <img class="pic2" src="../../assets/images/icon_delete@2x.png" @click="deleteinfo()"/>
       </div>
       <div class="mycustomer_list">		    	
				<div class="mycustomer_item"  v-for="(item1,index) in telcusinfolist" :key="index" @click="selectcus(item1.fldclientid)">
				  <div class="mycustomer_fang">
        			<!-- <div class="yewu_ico"><img src="../../assets/images/default.png" /></div> -->
					<div class="yewu_text yewu_text2">
						<div class="jianshen_text fangname">{{item1.fldfirstname}}</div>
						<div class="fangtel"><div class="itemtel">{{item1.fldworkphone}}</div><div class="item" v-show="item1.sameMobileCount>1"><span v-show="item1.sameMobileCount<=99">{{item1.sameMobileCount}}</span><span  v-show="item1.sameMobileCount>99">99+</span></div></div>						
					</div>
				   <div class="yewu_sanjiao item">
				   	  <div class="jianshen_text1">卡号：{{item1.firstRegistCard}}</div>
					   <div class="jianshen_text1">最后到店:{{ item1.lastVisit?filDate(item1.lastVisit): item1.lastVisit }}</div>
				   </div>
				  </div>
               </div>     
			</div>
       
    </div>
 </div>

</template>

<script>
 export default {
   data () {
     return {
      custel:"",
      telcusinfolist:[],
      ticeflag:0,
      gonghao:""
     }
   },
     created(){
	   this.getgonghao()
	    
   },
   methods: {
        getgonghao(){
         this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
          console.log(res.rows[0].userName);
		  this.gonghao = res.rows[0].userName;
        
       })
}, 
        filDate: function (value){
    var filValue = value.split(' ');
    return filValue[0];
},
     feng(){
      
        if(this.config.Trim(this.custel,'g').length>=11){
          this.getcusinfo()
       }
     },        
     getcusinfo(rate){
      
         if(this.custel.trim()==""){           
          this.$vux.toast.text("请输入姓名或手机号码", "center");
      		return;
       }
      this.instance.$post('/rest/wx/customerGx/findCustomerGx',{
          pageFlag:true,
          pageNo:1,
          pageSize:15,
          dimField:this.config.Trim(this.custel,'g'),
		  //userId:this.gonghao
        
      },res => {
       console.log(res);
      
       if(res.status){ 
             this.telcusinfolist = []         
           var data = res.rows;
           if(data.length>0){                  
           data.forEach((item,i) => {
               //this.telcusinfolist.push(item)
               console.log(item)
               this.$set(this.telcusinfolist,i,item)             
           });          
           }

           console.log(this.telcusinfolist)
       }else{
           this.$vux.toast.text('没有记录');
       }

     },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
    
     },
    
      tihuan(item){
			
			if(item ==undefined || item ==null){
				item = "无"
			}else{
				return item
			}
			return item
        },
     deleteinfo(){
       this.custel = ""
     },
     selectcus(gxId1){
         this.$router.push({
                name: "dianzihetong",
                 query: {
                 filid:gxId1,
                
                
                }               
              });
     }
   },
   components: {
   
   }
 }
</script>

<style scoped lang="less">
   .tigetcus_wrap{padding-top:0.3rem;}
  .search{width:92%;height:0.7rem;background:rgba(247,247,247,1);;
border-radius:4px;position: relative;margin:0 auto 0.3rem;overflow: hidden;}
  .search input{width:74%; height:0.7rem;background:rgba(247,247,247,1);position: absolute;bottom:0.02rem;left:9%;padding-left: 2%;outline: none;font-size: 0.3rem;}
  .search img{width:0.36rem;height:0.36rem;}
  .search .pic1{position: absolute;top:0.15rem;left:3%;}
  .search .pic2{position: absolute;top:0.15rem;right:3%;}
   .xitong_list{
     margin-top:0.3rem;
    }
    .xitong_list .active{border:1px solid rgba(74, 119, 176, 1);}
    .xitong_item:first-child{margin-top:0.04rem;}
    .xitong_item{
        width:92%;
        margin:0 auto;
        padding:0 3%;
        box-shadow:0px 0px 6px 0px rgba(73,120,176,0.4);
border-radius:10px;
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
       .mycustomer_item:first-child{border-top:1px solid rgba(230, 230, 230, 1);}
     .mycustomer_item {
			width: 100%;
			height: 1.2rem;
			border-bottom: 1px solid rgba(230, 230, 230, 1);
		}
		.mycustomer_fang{padding-right: 3%;}
		.mycustomer_list{
			padding: 0 0 0 0.3rem;
		}
		.yewu_ico,
		.yewu_text
		{
			float: left;
		}
		.yewu_ico{width:11.4%;}
		.yewu_sanjiao {
			float: left;
			padding-top: 0.2rem;
			width:46%;
		}
		
		.yewu_ico img {
			width: 100%;
			height: 0.8rem;
			margin-top: 0.2rem;
			border-radius: 0.1rem;
			border: 1px solid #f8f8f8;
		}
		
		.yewu_text {
			padding-left: 4%;
			width: 48%;
		}
		
		.yewu_text1 {
			height: 2.2rem;
			line-height: 2.2rem;
		}
		
		.yewu_text2 {
			padding-top: 0.2rem;
		}
		
		
		.yewu_sanjiao img {
			width: 0.21rem;
			height: 0.38rem;
		}
		
		.jianshen_text {
			font-size: 0.32rem;
			color: #1D1D1D;
			width:100%;
			word-break:keep-all;/* 不换行 */  
		    whitewhite-space:nowrap;/* 不换行 */  
		    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */  
		    text-overflow:ellipsis;
		}
		.fangtel{
			font-size: 0.24rem!important;
			color: #1D1D1D!important;
			width:100%;
			
		}
	   .fangtel	.itemtel{width:50%; display: inline-block;}
	   .fangtel	.item{ position: relative;top:-0.16rem; display: inline-block; height: 0.3rem;line-height: 0.3rem;text-align: center;background:red;padding:0 0.1rem;border-radius: 50%;}
	    .fangtel .item span{
			font-size: 0.2rem;color: #fff;
		}
		.jianshen_text1 {
			font-size: 0.26rem;
			color: #989898;
			overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
		}
		.item1{
			color: #989898 !important;
		}
</style>
