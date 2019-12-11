<template>
 <div class='container'>
     <div class='acontainer'>
     <div class="seachtop"></div>
    <div class="seach"><input type="number" id="search_val" v-model="custel" placeholder="可输入手机号码查找其他会员"/><span id="search_wrap"><img src="../../assets/images/qi_seach1.png" /><em @click="searchinfo()">搜索</em></span></div>
     <div class="privaye_list_wrap" >
       <div class="privaye_list" v-for="(item,index) in cuslist" :key="index" @click="chatice(item.customerId)">
        	    <div class="xingming"><img src="../../assets/images/huiyuan_nan.png" /><span class="name">{{item.realName!=''&&item.realName?item.realName:item.name}}</span><span class="qudaiyue"><span>查看数据</span></span></div>
        	    <div class="tel"><span>手机号码</span><span class="numb">{{item.mobile}}</span></div>
        	    <div class="dianziID"><span>会员电子ID</span><span class="numb">{{item.customerCode}}</span></div>
       </div>
    </div>
    <!-- <div class="seach_result">
         <div class="privaye_list" v-for="(item,index) in custellist" :key="index" @click="chatice(item.customerId)">
        	    <div class="xingming"><img src="../../assets/images/huiyuan_nan.png" /><span class="name">{{item.name}}</span><span class="qudaiyue"><span>查看数据</span></span></div>
        	    <div class="tel"><span>手机号码</span><span class="numb">{{item.mobile}}</span></div>
        	    <div class="dianziID"><span>会员电子ID</span><span class="numb">{{item.customerCode}}</span></div>
       </div>
    </div>  -->
    <div class="zanwujilu" v-show="nodata">
        <div class="title">暂无会员信息</div>
        <p>你可以手动添加会员信息</p>
        <!--<p>更好的管理会员上课安排</p>-->
    </div>
    <div class="tianjiawrap"></div>
    <div id="foot-bg" @click="addcusto()"></div>

 </div>
 </div>
    
</template>

<script>

 export default {
   data () {
     return {
       cuslist:[],
       nodata:false,
       custel:"",
       custellist:[]
     }
   },
   created(){
      this.getcuslist()
   },
   methods: {
       addcusto(){
         this.$router.push({
                name: "addmeicus",
                query: {                             
                  inbodflag:1
                }
              });
       },
     getcuslist(){
         this.instance.$post('/rest/wx/customer/getCustomerListByPage',{
             page:1,
             rows:500
         },res => {
        console.log(JSON.stringify(res));
         var data = res.results;
        if(data.length>0){
            data.forEach(item => {
                this.cuslist.push(item);
                this.custellist.push(item);
            });
        }else{
           this.nodata = true;
        }
      })
     },
     searchinfo(){
       if(this.config.Trim(this.custel,'g').length>10){
          
            //   var customers=[];
            // //   console.log(this.searchCustomerList)
            //    var dataSearch=JSON.stringify(this.custellist);
            //    this.cuslist=JSON.parse(dataSearch);
            //  this.cuslist.forEach(element => {
            //     if(element.mobile?element.mobile.indexOf(this.custel)!=-1:''.indexOf(this.custel)!=-1){
            //       // console.log(JSON.stringify(element))
            //         customers.push(element);
            //     }
            //  });
            //   this.cuslist=customers;
           this.instance.$post('/rest/wx/customer/findc',{
               mobile:this.config.Trim(this.custel,'g')
           },res => {
        console.log(res);
        if(res.status){
            this.cuslist = [];
            this.custellist = [];
            this.nodata = false;
           var data =res.rows;
           data.forEach(item =>{
               this.cuslist.push(item);
               this.custellist.push(item)
           })
        }else{
           this.$vux.toast.text("没有信息，请检查手机号码是否正确");  
        }
           })

       }else{
         if(this.config.Trim(this.custel,'g')==''){
                 this.cuslist=this.custellist;
         }else{
           this.$vux.toast.text("手机号码格式错误");
         }
           
       }
     },
     chatice(cusid1){
         this.$router.push({
                name: "inbodydetail",
                query: {
                  cusid:cusid1
                
                }
              });
     }
   },
   components: {
     
   }
 }
</script>

<style scoped lang="less">
.acontainer{background: #f7f7f7;min-height: 100%;}
  .privaye_list_wrap{margin-top: 0.3rem;padding:0 0.3rem;position: relative;}
		 .seach_result{margin-top: 0.3rem;padding:0 0.3rem;position: relative;}
		 .privaye_list{ width:91%;height:2.48rem;background:#fff ;margin: 0 auto 0.3rem;padding:0 0.3rem;border-radius:4px 4px 0 0;}
	    .privaye_list .xingming{padding-top:0.15rem;}
	    .xingming img{width:0.6rem;height:0.6rem;vertical-align:middle;}
	    .xingming .name{position: relative;top:0.06rem; font-size:0.3rem;color:#000;padding-left: 0.3rem;margin-top:-0.1rem;}
	     .privaye_list .tel,.dianziID{padding-top:0.3rem;position: relative;}
	     .tel .numb,.dianziID .numb{position: absolute;right: 0;}
	      .privaye_list .dianziID{} 
	      .qudaiyue{float: right; display: inline-block;padding:0 0.3rem;height:0.6rem;line-height:0.6rem;text-align:center;background: #4a77b0;border-radius: 20px;} 
	      .qudaiyue span{font-size:0.3rem;color:#fff;}
	       .qudaiyue1{float: right; display: inline-block;padding:0 0.3rem; height:0.6rem;line-height:0.6rem;text-align:center;background: #FF7F91;border-radius: 20px;} 
	      .qudaiyue1 span{font-size:0.3rem;color:#fff;}
	      .tianjiawrap{width:100%;height:1rem;}
	      #foot-bg{position: fixed;bottom:0.1rem;left:45%; width:1rem;height:1rem;background: url(../../assets/images/btn_add@2x.png);background-size:100%;}
	         .msk{    width: 70%;height: 100%;position: absolute;top: 0;}
	      .zanwujilu{margin-top:3rem;text-align: center;}
	      .zanwujilu .title{color:#919191;font-size:0.36rem;padding-bottom: 0.3rem;}
	      .zanwujilu p{color:#919191 ;font-size:0.28rem;}
          .sizes{font-size: 0.23rem;}
          .seachtop{height:0.3rem;}
	      .seach{margin:0 auto 0.3rem; width:92%;height:0.7rem;background:#fff;border-radius:20px;position: relative;}
	      .seach input{width:62%;height:0.7rem;padding-left:0.3rem;border: none;margin-left: 0.2rem;outline:none;font-size: 0.3rem;}
	      #search_wrap{display: inline-block;width:25%; height:0.7rem;padding-left: 5%;font-size: 0.3rem;color:#fff;background:#4a77b0;
	                  position: absolute;top:0;right:0;border-radius:0 20px 20px 0 ;
	      }
	      #search_wrap img{width:0.4rem;height:0.4rem;padding:0.15rem 0.1rem 0 0;}
	      #search_wrap em{position: relative;top:-0.1rem;}
	      #search_val{border-radius: 20px 0 0 20px;}
	      input::-webkit-input-placeholder{font-size: 0.26rem;}
 
</style>
