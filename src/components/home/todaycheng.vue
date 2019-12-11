<template>
 <div class='container'>
     <div class="headerbg" v-show="!zanwuflag"></div>
      <div class="mycustomer_list">		    	
				<div class="mycustomer_item"  v-for="(item1,index) in addList" :key="index" @click="glass(item1.caseid)">
				  <div class="mycustomer_fang">
        			<div class="yewu_ico"><img src="../../assets/images/default.png" /></div>
					<div class="yewu_text yewu_text2">
						<div class="jianshen_text fangname">{{item1.fldFirstName}}</div>
						<div class="fangtel"><div class="itemtel">{{item1.mediCode}}</div></div>						
					</div>
				  </div>
               </div>     
	 </div> 
     <div class="zanwujilu" id="bugenzanwu" v-show="zanwuflag">
					<div class="title">暂无数据</div>					
	</div>
     
 </div>  
</template>

<script>
import { Datetime } from 'vux'
 export default {
   data () {
     return {
      addList:[],
      zanwuflag:false
     }
   },
   created(){
      this.getaddlist()
   },
   methods: {
     getaddlist(){
       this.instance.$post('/rest/wx/employee/getDealCustomerByEmp',{},res => {
          console.log(res);
          if(res.status){
              var data = res.rows;
              data.forEach(item => {
              this.addList.push(item)
          });
          }else{
              this.zanwuflag = true;
          }
         

		})
     },
     glass(filid){
         this.$router.push({
                name: "customerDetail",
                query:{
                     filid: filid
                }              
         });
     },
   },
   components: {
    
   }
 }
</script>

<style scoped lang="less">
     .headerbg{height:0.3rem;width:100%;background: #f7f7f7;}
     .mycustomer_item:first-of-type{border-top: 1px solid rgba(214,214,214,0.5);}
     .mycustomer_item {
			width: 100%;
			height: 1.2rem;
			border-bottom: 1px solid #f7f7f7
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
			width:38%;
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
			width: 46%;
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
        .zanwujilu {
			margin-top: 45%;
			text-align: center;
		}
		.zanwujilu .title {
			color: #919191;
			font-size: 0.36rem;
			
		}
</style>
