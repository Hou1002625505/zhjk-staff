<template>
 <div class='container'>
   <div class="markrtG">
		<div class="user_backgr">
			<img :src="avatar" alt="" class="userImg"/>
		</div>
		<div class="market_list">
			<!-- <a href="add_client.html" class="client">
				<div class="clients">
					<img src="../../assets/images/addcard.png?v=1" style="margin-right: 0.2rem;"/>
					添加客户
				</div> 
				<div class="clients">
					<img src="../../assets/images/arrows.png" class="arrow"/>
				</div> 
			</a> -->
			<a href="javascript:;" class="shareCard" @click="tiyankafen()">
				<div class="shareCards">
					<img src="../../assets/images/sharecard.png?v=1" style="margin-right: 0.2rem;"/>
					分享体验卡券
				</div>
				<div class="shareCards"><img src="../../assets/images/arrows.png" class="arrow"/></div>
			</a>
			<a href="javascript:;" class="shareCard" @click="tiyankawan()">
				<div class="shareCards">
					<img src="../../assets/images/my_client.png" style="margin-right: 0.2rem;"/>
					体验卡客户查询
				</div>
				<div class="shareCards"><img src="../../assets/images/arrows.png" class="arrow"/></div>
			</a>
			<!-- <a href="../perfor_App/empPerformance.html" class="shareCard">
				<div class="shareCards">
					<img src="../../assets/images/yjcx.png" style="margin-right: 0.2rem;"/>
					业绩查询
				</div>
				<div class="shareCards"><img src="../../assets/images/arrows.png" class="arrow"/></div>
			</a> -->
		</div>
        </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      avatar:""
     }
   },
   created(){
      this.getqyUser()
   },
   methods: {
     getqyUser(){
    this.instance.$post('/rest/wx/customer/getQyUser',{},res => {
       console.log(res);
       if(res.status){
          this.avatar = res.rows[0].avatar
       }else{
            this.$vux.toast.text(res.message, "center");
           
       }
   })
     },
     tiyankafen(){
          this.$router.push({
                name: "fenxianglist",
                query: {
                  
                
                }
              });
     },
     tiyankawan(){
         this.$router.push({
                name: "tiyankayiling",
                query: {
                                  
                }
              }); 
     }
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
 .user_backgr{ 
		/*width: 100%;*/
		position: relative;
		height:220px; 
		
	}
	.markrtG{
		// display: none;
	}
	.heightback{ transition: height 0.3s;}  
		.heighttop{ transition: top 0.3s;}  
	/*.weui-loadmore{
		    margin: 10.5em auto;
	}*/
	.user_backgr img{
		width: 100%;
		height: 100%;
		display: block; 
		object-fit:cover;
	}
	.market_list{
		width: 100%;
		position: absolute;
		top: 185px;
	}
	.client,.shareCard{
		    width: 90%;
    margin-left: 5%;
    height: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    border-radius: 5px;
background:rgba(255,255,255,1);
box-shadow:2px 0px 20px rgba(81,118,171,0.3);
	}
	.shareCard{
		margin-top: 0.3rem;
	}
	.client .clients,.shareCard .shareCards{
		font-size: 0.33rem;
		font-family: "微软雅黑";
		color: #2C2E34;
		padding-left: 0.45rem;
		width: 80%;
	}
	.client .clients:nth-child(2),.shareCard .shareCards:nth-child(2){
		width: 20%;
	}
	.client .clients:nth-child(2),.shareCard .shareCards:nth-child(2){
		padding-left: 0;
    padding-right: 0.45rem;
	}
	.clients img,.shareCards img{
		width: 0.7rem;
		vertical-align: middle;
	}
	.arrow{
		width: 0.18rem !important; 
		float: right;
		padding-top: 0.6rem; 
	}
 
</style>
