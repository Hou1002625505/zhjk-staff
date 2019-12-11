<template>
 <div class='container'>
          <div class="cus_xuanxiang_wrap">
        	<div class="mycustomer_header">
        		<div class="touxiang">
        			<div class="userImg">
        			<img :src="head" class="pictrue" />
        			<p class="customer_name">{{name}}</p></div>
        		</div>
        	</div>
        	<div class="xuanxiang_list">
        		<div class="xuanxiang_item" @click="cusjiben()">
	        		<div class="yewu_ico"><img src="../../assets/images/jiben_info.png" /></div>
					<div class="yewu_text yewu_text1">
						<div class="jianshen_text">客户基本信息</div>					
					</div>
					<div class="yewu_sanjiao item"><span class="arrow"></span></div>
				</div>
				<div class="xuanxiang_item" @click="cuszhiqing()">
	        		<div class="yewu_ico"><img src="../../assets/images/zhiqingshu.png" /></div>
					<div class="yewu_text yewu_text1">
						<div class="jianshen_text">客户知情书</div>					
					</div>
					<div class="yewu_sanjiao item"><span class="arrow"></span></div>
				</div>
				<div class="xuanxiang_item" @click="panzhen()">
	        		<div class="yewu_ico"><img src="../../assets/images/panzhenbiao.png" /></div>
					<div class="yewu_text yewu_text1">
						<div class="jianshen_text">健康判诊表</div>					
					</div>
					<div class="yewu_sanjiao item"><span class="arrow"></span></div>
				</div>
				<div class="xuanxiang_item" @click="fuwu()">
	        		<div class="yewu_ico"><img src="../../assets/images/xiaokaojilu.png" /></div>
					<div class="yewu_text yewu_text1">
						<div class="jianshen_text">项目服务记录</div>					
					</div>
					<div class="yewu_sanjiao item"><span class="arrow"></span></div>
				</div>
	
        	</div>
        </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        name:this.$route.query.name,
        head:this.$route.query.head,
        customerId:this.$route.query.customerId,
        sex:this.$route.query.sex,
        mobile:this.$route.query.mobile
     }
   },
   created(){

   },
   methods: {
    cusjiben(){
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
	},
	cuszhiqing(){
		 this.$router.push({
                name: "zhiqinglist",
                query: {
                  name:this.name,
                  head:this.head,
                  customerId:this.customerId,
                  sex:this.sex,
                  mobile:this.mobile
                
                }
              });
	},
	panzhen(){
		 this.$router.push({
                name: "panzhenlist",
                query: {
                  name:this.name,
                  head:this.head,
                  customerId:this.customerId,
                  sex:this.sex,
                  mobile:this.mobile
                
                }
              });
	},
	fuwu(){
	   this.$router.push({
                name: "servicecode",
                query: {
                  name:this.name,
                  head:this.head,
                  customerId:this.customerId,
                  sex:this.sex,
                  mobile:this.mobile
                
                }
              });	
	}
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
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
    margin-top: 16px;
    right: 16px;
}
  .mycustomer_header{background: #4A77B0;width:100%;height:3.2rem;background: url(../../assets/images/head_bg@2x.png) no-repeat;background-size: 100% 100%;}
		 .touxiang{width:100%;text-align: center;padding-top: 0.48rem;}
	  .touxiang img{width:1.5rem;height:1.5rem;border-radius:50%;margin-top: 0.1rem;}
	  .touxiang p{color:#fff;font-size:0.3rem;padding-top: 0.3rem;}
	  .xuanxiang_list{padding-left: 0.3rem;}
	  .xuanxiang_item{width:100%;height:1.2rem;border-bottom:1px solid #f7f7f7;}
	 .yewu_ico,.yewu_text,.yewu_sanjiao{float: left;}
	 .yewu_ico{/*padding-left: 0.45rem;*/}
	 .yewu_ico img{width:0.8rem;height:0.8rem;padding-top:0.2rem;}
	 .yewu_text{padding-left:0.45rem; width:5rem;}
	 .yewu_text1{height:1.2rem;line-height: 1.2rem;}
	 .yewu_text2{padding-top:0.72rem;}
	 .yewu_sanjiao{padding-top: 0.4rem;}
	 .yewu_sanjiao img{width:0.21rem;height:0.38rem;}
	 .jianshen_text{font-size:0.3rem;color:#2D2D2D;}
	 .touxiang .userImg{
	 		width: 1.7rem;
	 	height: 1.7rem;
	 	border-radius: 50%;
	 		border: 1px solid rgba(255,255,255,0.5);
	 	    margin: 0 auto;
    text-align: center;
	 }
	 	  .item{position: absolute;right: 0.3rem;}
 
</style>
