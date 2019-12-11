<template>
 <div class='container'>
    <div class="tigetcus_wrap">
       <div class="search">
           <img class="pic1" src="../../assets/images/icon_search@2x.png" @click="getcusinfo()"/>
           <input type="search" placeholder="请输入手机号码查找会员" id="search" v-model="custel"  @keyup.enter="getcusinfo()"  @keyup="feng()">
           <img class="pic2" src="../../assets/images/icon_delete@2x.png" @click="deleteinfo()"/>
       </div>
       <div class="xitong_list">

               <div class="xitong_item"  v-for="(item,index) in telcusinfolist" :key="index" @click="selectcus(item.gxId,item.mobile,item.customerName)">
                     <div class="data">
                     <span class="ming">客户姓名： </span><span class="value">{{tihuan(item.customerName)}}</span>                   
                   </div>
                   <div class="data">
                        <span class="ming">健身顾问： </span><span class="value">{{tihuan(item.primaryName)}}</span>
                   </div>
                    <div class="data">
                        <span class="ming">私教顾问： </span><span class="value">{{tihuan(item.operName)}}</span>
                   </div>
                    <div class="data">
                        <span class="ming">是否已做体测评估：</span><span class="value">{{tihuan(item.isReception)==0?'是':'否'}}</span>
                   </div>
               </div>
              
            </div>
        <div class=""></div>
    </div>
 </div>

</template>

<script>
 export default {
   data () {
     return {
      custel:"",
      telcusinfolist:[],
      ticeflag:0
     }
   },
   methods: {
     feng(){
       console.log(1)
       if(this.custel.length==11){
          this.getcusinfo()
       }
     },        
     getcusinfo(){
        if(this.custel == "" || this.custel.length<11){
            this.$vux.toast.text("手机号码为空或格式错误");
            return;
        }
      this.instance.$post('/rest/wx/reception/getCustomerDossierByTest',{
          mobile:this.custel
      },res => {
       console.log(res);
        this.telcusinfolist = []
       if(res.status){
          
           var data = res.rows;
           if(data.length>0){
                    
           data.forEach(item => {
               this.telcusinfolist.push(item)
           });
           
           }else{
              this.$vux.toast.text("没有该客户，请添加客户");
           }
           
       }
     })
    
     },
      //查询会员最近一次体测记录
      gettice(){
         this.instance.$post('/rest/wx/reception /getBodyTestLastByCus',{
             mobile:this.custel
         },res => {
        console.log(res);
        if(res.rel){
             this.ticeflag = 0;
            var data = res.rows;
            if(data.length>0){
                this.ticeflag = 1;
            }
        }
        })
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
     selectcus(gxId1,mobile1,customerName1){
         this.$router.push({
                name: "cuszhiqing",
                 query: {
                 gxId:gxId1,
                 mobile:mobile1,
                 customerName:customerName1
                
                }               
              });
     }
   },
   components: {
   
   }
 }
</script>

<style scoped lang="less">
  .tigetcus_wrap{padding:0 3%}
  .search{width:100%;height:0.7rem;background:rgba(247,247,247,1);
border-radius:4px;position: relative;margin-top:0.3rem;overflow: hidden;}
  .search input{width:70%; height:0.7rem;background:rgba(247,247,247,1);position: absolute;bottom:0.02rem;left:9%;padding-left: 2%;outline: none;font-size: 0.3rem;}
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
</style>
