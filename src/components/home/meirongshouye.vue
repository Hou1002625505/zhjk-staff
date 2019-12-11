<template>
 <div class='container'>
   		<div class="msk"></div>
		<div class="mycustomer_wrap">
			<div class="mycustomer_header">
					<div class="srach">
					<img src="../../assets/images/searchicon@2x.png" class="search" id="sousuo" @click="searchcus()"/>
					<input type="search" placeholder="请输入姓名或手机号码查找会员" id="search" v-model="searchval" @input="searchcus()"/>
				</div>
				
				<!-- <div  class="daiban" @click="medaiban()">
					<img src="../../assets/images/daiban.png" />
					<p>待办</p>
					<span class="corner">{{totaldai}}</span>
				</div> -->
				<div class="daiban"  @click="medaiban()">
		    		<img src="../../assets/images/qi_home_daiban.png"  />
		    		<p>待办</p>
						<span class="corner">{{totaldai}}</span>
		    	</div>

				<div class="touxiang">
					<div class="userImg"><img :src="avatar" class="pictrue" /></div>
					<p class="coursename">{{realName}}</p>
				</div>
			</div>
			<div class="mycustomer_list">

				<div class="mycustomer_item" v-for="(item,index) in getcoustomList" :key="index" @click="cusdang(item.realName!=''&&item.realName?item.realName:item.name,item.head,item.customerId,item.sex,item.mobile)">
        			<div class="yewu_ico"><img :src="item.head" /></div>
					<div class="yewu_text yewu_text2">
						<div class="jianshen_text">{{item.realName!=''&&item.realName?item.realName:item.name}}</div>
						<div class="jianshen_text1">{{item.mobile}}</div>						
					</div>
				   <div class="yewu_sanjiao item"><span class="arrow"></span></div>
        	    </div>        	           	   

			</div>
		</div>
        <div class="tianjia" @click="addmei()"></div>
		<div class="zanwujilu" style="display: none;">
			<div class="title">暂无会员信息</div>
			<p>你可以手动添加会员信息</p>
			<!--<p>更好的管理会员上课安排</p>-->
		</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
	   getcoustomList:[],
	   searchCoustomList:[],
       avatar:"",
       realName:"",
       daibanFlag:false,
       positions:"",
       js:"",
	   xs:"",
	   searchval:"",
	   totaldai:""
     }
   },
   created(){
     this.getcoustom()
   },
   methods: {
	   searchcus(){
		   if(this.searchval.trim()!=''){

		
           var customers=[];
            //   console.log(this.searchCustomerList)
               var dataSearch=JSON.stringify(this.searchCoustomList);
               this.getcoustomList=JSON.parse(dataSearch);
             this.getcoustomList.forEach(element => {
         if((element.name?element.name.indexOf(this.searchval)!=-1:''.indexOf(this.searchval)!=-1)||(element.realName?element.realName.indexOf(this.searchval)!=-1:''.indexOf(this.searchval)!=-1)||(element.mobile?element.mobile.indexOf(this.searchval)!=-1:''.indexOf(this.searchval)!=-1)){
                  // console.log(JSON.stringify(element))
                  if(element.name.indexOf(this.searchval)!=-1){
                    element.name=element.name;
                    element.realName=element.name;
                  }else if(element.realName.indexOf(this.searchval)!=-1){
                     element.name=element.realName;
                          element.realName=element.realName;
                  }
                    customers.push(element);
                }
             });

	  this.getcoustomList=customers;
	     }else{
               this.getcoustomList=this.searchCoustomList;
		 }
    //      var searchContent= this.searchval;
	// 	  var data={};
	// 	 searchContent= this.config.Trim(searchContent,'g')
    //   	if(searchContent==""){
    //   		this.$vux.toast.text("请输入姓名或手机号码");
    //   		return false;
    //   	}else if(isNaN(searchContent)){
    //   			data.name=searchContent;
    //   	}else{
    //   		if(searchContent.length!=11){
    //   		this.$vux.toast.text("输入手机号码不正确");
    //   		return false;
    //   		}
    //   		data.mobile=searchContent;
	// 	  }
	// 	   this.instance.$post('/rest/wx/customer/findc',
	// 		   data
	// 	   ,res => {
	//    console.log(res);
	//    if(res.status){
	// 	 this.getcoustomList = [];
	// 	 var data = res.rows;
	// 	 data.forEach(item =>{
	// 		 this.getcoustomList.push(item)
	// 	 })
	//    }else{
    //     this.$vux.toast.text(res.message)
	//    }
    //         })
	   },
      getcoustom(){
           this.instance.$post('/rest/wx/customer/getCustomerListByPage',{
               page:1,
      		rows:20
           },res => {
       console.log(JSON.stringify(res));
       res.results.forEach(item => {
		   this.getcoustomList.push(item);
		   this.searchCoustomList.push(item);
       });
       this.getusery()
   })
      },
      getusery(){
          this.instance.$post('/rest/wx/customer/getQyUser',{
              
           },res => {
       console.log(res);
       this.realName = res.rows[0].realName
        this.avatar = res.rows[0].avatar
        var roles =  res.rows[0].roles
        console.log(roles)
       roles.forEach( item1=>{
         console.log(item1)
         if(item1.roleName=="SPA技师"){
         
            this.js="SPA技师";
            this.positions = "SPA技师";
            
        }else if(item1.roleName=="销售"){
             
                this.xs="销售";
                 this.positions = "销售";
				}
       })
        
     	if(this.positions!=""){
					 if(this.js!=""&&this.xs!=""){
					this.positions="SPA技师";
				}
          this.dainum()            
				}
      
   })
	  },
	  dainum(){
         this.instance.$post('/rest/wx/records/countUntreatedRecord',{
								name:this.positions
							},res => {
				 console.log(88888);				
			 console.log(res);
			 if(res.rel){
				 
				 if(res.total!=0){
					 this.totaldai = res.total;
				}
			 }else{
				 this.$vux.toast.text(res.message)
			 }
		
           })
			},
      cusdang(name,head,customerId,sex,mobile){
         this.$router.push({
                name: "kehudang",
                query: {
                  name:name,
                  head:head,
                  customerId:customerId,
                  sex:sex,
                  mobile:mobile
                
                }
              });
	  },
	  addmei(){
		 
		  this.$router.push({
                name: "addmeicus",
                query: {
                
                
                }
              });
	  },
     medaiban(){
			  // this.$router.push({
        //         name: "daibanlist",
        //         query: {
        //           name:'SPA技师'
                
        //         }
        //       });
       if(this.js=="SPA技师"){
          this.$router.push({
                name: "daibanlist",
                query: {
                  name:'SPA技师'
                
                }
              });
			 }else if(this.xs=="销售"){
             this.$router.push({
                name: "daibanlist1",
                query: {
                  name:'销售'
                
                }
              });
			 }

			},
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
 .msk{
			position: fixed;
            width: 100%;
            height: 100%;
             top: 0;
             z-index: 9999999;
             display: none;
		}
		.weui-loadmore_line .weui-loadmore__tips{
			top: -0.9rem;
		}
		.weui-loadmore_line{
			border: none;
		}
		
		.mycustomer_header {
			background: #4A77B0;
			width: 100%;
			height: 3.3rem;
		}
		
		.srach {
			position: relative;
			width: 80%;
			margin: 0 auto;
			height: 0.7rem;
			padding-top: 0.2rem;
			text-align: center;
		}
		
		.srach input {
			width: 85%;
			height: 0.7rem;
			line-height: 0.42rem;
			color: #fff;
			font-size: 0.29rem; 
			padding-left: 0.28rem;
			text-align: center;
			background: rgba(255, 255, 255, 0.2);
			border-radius: 30px;
			outline: none;
			border: none;
		}
		
		.srach input::-webkit-input-placeholder {
			color: #E4E4E4;
			font-size: 0.29rem; 
		}
		
		.search {
			position: absolute;
			width: 0.28rem;
			top: 0.42rem;
			left: 0.8rem;
		}
		
		.item {
			position: absolute;
			right: 0.3rem;
		}
		
		.daiban {
			position: relative;
			text-align: center;
			position: absolute;
			right: 5%;
			top: 0.22rem;
		}
		
		.daiban img {
			width: 0.38rem;
			//height: 0.47rem;
		}
		
		.daiban p {
			font-size: 0.2rem;
			color: #fff;
			margin-top: -0.15rem;
		}
		
		.corner {
			position: absolute;
			background-color: #FF0000;
			color: #fff;
			border-radius: 45px;
			width: 0.42rem;
			text-align: center;
			font-size: 0.2rem;
			top: -0.13rem;
			left: 0.3rem;
		}
		
		.touxiang {
			width: 100%;
			text-align: center;
			padding-top: 0.38rem;
		}
		
		.touxiang img {
			width: 1.1rem;
			height: 1.1rem;
			border-radius: 50%;
			margin-top: 0.1rem;
		}
		
		.touxiang p {
			color: #fff;
			font-size: 0.3rem;
			margin-top: 0.08rem;
		}
		.mycustomer_item {
			width: 100%;
			height: 1.2rem;
			border-bottom: 1px solid #f7f7f7;
		}
		.mycustomer_list{
			padding: 0 0 0 0.3rem;
		}
		.yewu_ico,
		.yewu_text,
		.yewu_sanjiao {
			float: left;
		}
		
		.yewu_ico {
			/*padding-left: 0.45rem;*/
		}
		
		.yewu_ico img {
			width: 0.8rem;
			height: 0.8rem;
			margin-top: 0.2rem;
			border-radius: 0.1rem;
			border: 1px solid #f8f8f8;
		}
		
		.yewu_text {
			padding-left: 0.3rem;
			width: 5rem;
		}
		
		.yewu_text1 {
			height: 2.2rem;
			line-height: 2.2rem;
		}
		
		.yewu_text2 {
			padding-top: 0.2rem;
		}
		
		.yewu_sanjiao {
			padding-top: 0.4rem;
		}
		
		.yewu_sanjiao img {
			width: 0.21rem;
			height: 0.38rem;
		}
		
		.jianshen_text {
			font-size: 0.3rem;
			color: #000;
		}
		
		.jianshen_text1 {
			font-size: 0.26rem;
			color: #989898;
		}
		.item1{
			color: #989898 !important;
		}
		
		.tianjia {
			position: fixed;
			bottom: 0.1rem;
			left: 45%;
			width: 1rem;
			height: 1rem;
			background: url(../../assets/images/btn_add@2x_1.png);
			background-size: 100%;
		}
		
		.zanwujilu {
			margin-top: 3rem;
			text-align: center;
		}
		.zanwujilu .title {
			color: #919191;
			font-size: 0.36rem;
			padding-bottom: 0.3rem;
		}
		
		.zanwujilu p {
			color: #919191;
			font-size: 0.28rem;
		}
		
		.sizes {
			font-size: 0.23rem;
		}
		
		.touxiang .userImg {
			width: 1.3rem;
			height: 1.3rem;
			border-radius: 50%;
			border: 1px solid rgba(255,255,255,0.5);
			margin: 0 auto;
			text-align: center;
		}
		.mycustomer_list .mycustomer_item:last-child{
		margin-bottom: 1.2rem;
	}
 
</style>
