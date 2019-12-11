<template>
 <div class='container'>
     <mt-loadmore :top-method="loadTop"   :max-distance="150"
                 @top-status-change="handleTopChange" ref="loadmore">
                  <div slot="top" class="mint-loadmore-top">
                    <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                    <span v-show="topStatus === 'loading'">
                            <mt-spinner type="triple-bounce" class="loading-more" :size="20"></mt-spinner>
                  </span>
                    <span v-show="topStatus === 'drop'">松开刷新</span>
                  </div>
     
		  <div
			class="datacontent"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="isMoreLoading"
			:infinite-scroll-immediate-check="true"
			infinite-scroll-distance="10"
		>
       <div class="qi_hui_fang_wrap">
			
			<div class="qi_hui_fang_con1">
				
				
				  <div class="qi_hui_fang_item" v-for="(item,index) in gethetongList" :key="index" @click="htdetail(item.customerStatement.statementId)">
				   <div class="chanpin_ming">
				    	<div class="channame">产品名称：</div>
				    	<div class="fangvalue6">
				    		<p v-show="nameshow!=index">{{item.products[0].productName}}</p>
				    		<div class="p_wrap" v-show="nameshow==index">
					    		<p v-for="(item1,index) in item.products" :key="index">{{item1.productName}}</p>
					    		
				    		</div>
				    	</div>
				    	<!-- <div class="shengyuehao" v-show="item.products.length>1">...</div> -->
				    	<div class="jiantou" v-show="item.products.length>1" :class="nameshow==index?'fangarrow1':'fangarrow'" @click.stop="productshow(index)"></div>
				    </div>
				      <div class="qi_hui_data">
				    	<div class="mingcheng1">合同编号：</div>
				    	<div class="fangvalue1">{{item.customerStatement.statementCode}}</div>
				    </div>
				     <div class="qi_hui_data">
				    	<div class="mingcheng1">合计金额：</div>
				    	<div class="fangvalue1">{{item.methods[0].payAmount}}.00元</div>
				    </div>
					
				     <div class="qi_hui_data" style="padding-bottom: 0.2rem;">
				    	<div class="mingcheng1">合同日期：</div>
				    	<div class="fangvalue1">{{filDate(item.customerStatement.createDate)}}</div>
						<div class="hetongcexiao" @click.stop="item.customerStatement.status==1&&quxiaoshow(item.customerStatement.statementId)" :class="{fangactiv:item.customerStatement.status==0}">{{item.customerStatement.status==1?'撤销合同':item.customerStatement.status==2?'等待确认':item.customerStatement.status==0?'合同失效':''}}</div>
				    </div>

			    </div>


			</div>
             
				
		</div>
    	</div>
        <div class="zanwujilu" v-show="nodatazan">
					<div class="title">暂无数据</div>
					<!--<div class="title">你可以手动添加客户信息</div>-->
					<!--<p>更好的管理会员上课安排</p>-->
			   </div>		
		 <div class="tianjia" @click="tianjiaht()"></div> 
      </mt-loadmore>

	  <div class="quxiao_tanchuang" v-show="quxiaohui" id="apply">
			<div class="tuanchuang_wrap" :style="{top:fangtop}">
				<div class="tuanchuang_header"><span>请选择撤销原因</span></div>
				<div class="tuanchuang_con">
					<div class="item" v-for="(item,index) in quxiaoyuanlist" :key="index">
						<em>{{item.name}}</em>
						<span class="check_wrap">
			              <input type="radio"  :value="item.name" name="rufangjian" v-model="selecttypevalue" @change="fangfuck"/>
			              <span class="xuanzhong" v-show="item.name==selecttypevalue"></span>
			              <span class="noxuanzhong"></span>
			            </span>
			        </div>
					<div class="textarea_wrap" v-show="textareavalueflag"><textarea maxlength="100" v-model="textareavalue" placeholder="请填写其他原因"></textarea></div>							       			        
				</div>
				
				<div class="tuanchuang_bottom">
					<div class="fangfou" @click="quxiaohide()">
						<span style="font-size:0.3rem;color:#1D1D1D;">再想想</span>
					</div>
					<div class="fangsure" id="quxiaohuif_sure" @click="quhuisure()">
						<span style="font-size:0.3rem;color:#1D1D1D;">确定</span>
					</div>
				</div>
				<div class="tuanchuang_close" @click="quxiaohide()">
					<img src="../../assets/images/icon_chose@2x.png" />
				</div>
			</div>			
		</div>   
 </div>
</template>

<script>
 export default {
   data () {
     return {
      filid:this.$route.query.filid,
      index: "",
      topStatus: "",
      loading: 0,
      show: false,
      pageVal: 1,
      pageSize: 10,
      pageCount: 1,
      isLoading: false, // 加载中转菊花
      isMoreLoading: true, // 加载更多中
      noMore: false, // 是否还有更多 
			gethetongList:[],
			nameshow:-1,
			nodatazan:false,
			quxiaohui:false,
			quxiaoyuanlist:[],
			selecttypevalue:"",//取消回访原因
			hetongceid:'',
			textareavalue:'',
			textareavalueflag:false,
			fangtop:'20%'
     }
   },
   created(){
	      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    window.onresize = function() {
        var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (clientHeight - nowClientHeight > 60 ) {//因为ios有自带的底部高度
			//键盘弹出的事件处理
			
         this.fangtop = 0;
        }
        else {
            //键盘收起的事件处理
        	  this.fangtop = '20%';
        } 
    };

		 this.gethetongval()
		 this.quxiaoyuanyin()
		
   },
   methods: {
	   quxiaoyuanyin(){
       this.instance.$post('/rest/wx/dictionnary/getDictionNaryTypeList',{
           typeCode:'HTCX'
       },res => {
				  console.log('取消原因')
				 console.log(res)
       console.log(res.rows[0].dlist);
        var data = res.rows[0].dlist;
        data.forEach(item=>{
			
			    if(item.name=='其他'){
                 this.quxiaoyuanlist.push(item)
				}else{
				 this.quxiaoyuanlist.unshift(item) 	
				}
            
        })
     
   })
		},
		  quxiaoshow(value){
      
        this.hetongceid = value;
	  this.quxiaohui = true;
	  this.textareavalueflag = false;
	  this.textareavalue = '';
	},
	 quxiaohide(){
	  this.quxiaohui = false;
	  
      this.selecttypevalue="";//取消回访原因
    },
	quhuisure(rate){
		
       if(this.selecttypevalue != ""){
		   if(this.selecttypevalue=='其他'){
			   if(this.textareavalue==''){
					this.$vux.toast.text("请填写原因", "center");
					return false;
			   }else{
                    this.selecttypevalue = this.textareavalue
			   }
			  
		   }
         this.instance.$post('/rest/wx/customerGx/cancellationStatemen',{
           tid:this.hetongceid,
           type:this.selecttypevalue
         },res => {
        console.log(JSON.stringify(res));
          if(res.status){
			  this.pageVal = 1
                this.quxiaohui = false;
                 this.gethetongList = [];
				 this.gethetongval()//取消成功重新获取列表
				  
      this.selecttypevalue="";//取消回访原因
          }
         this.$refs.loadmore.onTopLoaded()        
             
    },error=>{ this.$refs.loadmore.onTopLoaded()},rate)

       }else{
            this.$vux.toast.text("请选择原因", "center");
       }
	},
	fangfuck(){
		
      if(this.selecttypevalue=='其他'){
		  this.textareavalueflag = true
	  }else{
		   this.textareavalueflag = false
	  }
	},
		   filDate: function (value){
    var filValue = value.split(' ');
    return filValue[0];
},
      gethetongval(rate){
          this.instance.$post('/rest/wx/customerGx/getCustomerStatementList',{
            pageFlag:true,
			pageNo:this.pageVal,
            pageSize:this.pageSize,
			fldclientid:this.filid
	 },res => {
		console.log(res);
		 if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
            if (res.rows.length == 0) {
							this.show = true;
							this.nodatazan = true;
            } else {
							this.show = false;
							this.nodatazan = false;
            }
          }
          if (this.loading == 1) {
            this.gethetongList = [];
          }
		res.rows.forEach( item =>{
			
                this.gethetongList.push(item)
			
            
		})
      
         this.pageCount = Math.ceil(res.total/this.pageSize);
          this.isMoreLoading = false;
          this.isLoading = false;
          this.loading = 0;        
              
    },error=>{ 
		  if (this.pageVal == 1) {
            this.$refs.loadmore.onTopLoaded();
          }
	},rate)
			},
			//点击合同列表
			htdetail(tid){
        this.$router.push({
                name: "hetongdetail",
                query: {
                  tid: tid
                
                }
              });
			},
			productshow(ind){
        if(this.nameshow !=ind){
					this.nameshow =ind
				}else{
					this.nameshow = 999
				}
        
			},
			tianjiaht(){
          this.$router.push({
                name: "goumaiht",
                query: {
                  filid: this.filid
                
                }
              });
			},
			  // 下拉刷新状态
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      // 下拉刷新数据的操作
      setTimeout(() => {
		// 隐藏下拉刷新方法
		 this.pageVal = 1;
        this.loading = 1;
        this.gethetongval(1)
      
      }, 300);
	},
	 loadMore() {
      this.pageVal += 1; // 增加分页
      this.isMoreLoading = true; // 设置加载更多中
      this.isLoading = true; // 加载中
      if (this.pageVal > this.pageCount) {
        this.isMoreLoading = true; // 设置加载更多中
        this.isLoading = false; // 加载中
        this.noMore = true;
        if (this.yyList.length == 0) {
          this.noMore = false;
        }
        return false;
      }
      this.gethetongval(1);
    }
	 },
	  watch: {
            $route (to, from) {
       if(from.meta.slide==2){
				 	 this.pageVal = 1;
        this.loading = 1;
          this.gethetongval();
						from.meta.slide=1;
					
       }
   }
  },
   components: {
   }
 }
</script>

<style scoped lang="less">
  .hetongcexiao{width:1.5rem;
height:0.5rem;float: right;
line-height: 0.54rem;
text-align: center;
background:#ffffff;
border:1px solid rgba(74,119,176,1);
border-radius:6px;
font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(74,119,176,1);
position: relative;
}
.fangactiv{border:1px solid #999;color:#999;}
.focusState {position: absolute;}
.textarea_wrap{}
.textarea_wrap textarea{width:92%;height:0.8rem;resize: none;padding:0.2rem 4%;border-radius:4px; }
 .quxiao_tanchuang{position: fixed;top:0;left:0;right:0;bottom: 0;background: rgba(0,0,0,0.6);}
.tuanchuang_wrap{width:70%;position: absolute;left:15%;top:20%;}
.tuanchuang_header{width:100%;
					height:1rem;
					background:rgba(73,120,176,1);
					border-radius:10px 10px 0px 0px;line-height:1rem;text-align: center;}
.tuanchuang_header span{font-size: 0.36rem;color:#fff;}
.tuanchuang_con{background: #fff;padding:0 4%;}
.tuanchuang_con .item{padding:0.25rem 0;}
.tuanchuang_con .item em{font-size: 0.3rem;color:#1D1D1D;}
.check_wrap{display: inline-block; width:0.4rem;height:0.4rem;position: relative;vertical-align: middle;float:right;}
	.check_wrap input{width:0.4rem;height:0.4rem;position:absolute;top:0;left:0;z-index: 999;opacity: 0;}
	.xuanzhong{display: inline-block; width:0.4rem;height:0.4rem;background:url(../../assets/images/xuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;z-index: 998;}    
	.noxuanzhong{display: inline-block; width:0.4rem;height:0.4rem;background:url(../../assets/images/noxuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;}					
	.tuanchuang_bottom{width:100%;height:1rem;border-top:1px solid #D6D6D6;background:rgba(255,255,255,1);border-radius: 0 0 10px 10px;}
	.tuanchuang_bottom .fangfou{display: inline-block;width:49%;height:1rem;line-height: 1rem;text-align: center;border-right: 1px solid #D6D6D6;}
	.tuanchuang_bottom .fangsure{display: inline-block;width:48%;height:1rem;line-height: 1rem;text-align: center;}
	.tuanchuang_close{width:0.6rem;margin:0.4rem auto 0;}
	.tuanchuang_close img{width:0.6rem;height:0.6rem;}
  .triangle_border_down{
	      	
	      	display: inline-block;
			    width:0;
			    height:0;
			    border-width:8px 5px 0;
			    border-style:solid;
			    border-color:#999 transparent transparent;/*灰 透明 透明 */
			   /*margin:40px auto;*/
			    position:relative;
			}
			 
			.qi_hui_fang_item{
				margin:0.3rem auto ;
				padding:0 3%;
				width:86%;
			/*	height:2.5rem;*/
				background:rgba(255,255,255,1);
				box-shadow:0px 0px 6px 0px rgba(73,120,176,0.3);
				border-radius:10px;
			}
			
			.qi_hui_data{padding-top:0.12rem;}
			.qi_hui_data .mingcheng{display: inline-block;}
			.mingcheng img{width:0.18rem;height:0.3rem;}
			.mingcheng span{font-size: 0.3rem;color:#1D1D1D;}
			.qi_hui_data .fangvalue{display: inline-block;}
			.fangvalue img{width:0.18rem;height:0.3rem;}
			.fangvalue a{font-size: 0.3rem;color:#4978B0;text-decoration: underline;}
			
			.mingcheng1{display: inline-block;font-size: 0.3rem;color:#999999;}
			.fangvalue1{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
			
		     .tianjia {
			position: fixed;
			bottom: 0;
			left: 45%;
			width: 1rem;
			height: 1rem;
			background: url(../../assets/images/btn_add@2x_1.png);
			background-size: 100%;
		}
		.zanwujilu {
			margin-top: 30%;
			text-align: center;
		}
		.zanwujilu .title {
			color: #919191;
			font-size: 0.3rem;
			
		}
		
		.zanwujilu p {
			color: #919191;
			font-size: 0.28rem;
		}
		.chanpin_ming{overflow: hidden;padding-top:0.2rem;}
		.chanpin_ming .channame{float: left;font-size:0.3rem ;color: #4A77B0;}
		.chanpin_ming .fangvalue6{float: left;max-width:60%;}
		.fangvalue6 p{font-size:0.3rem ;color: #4A77B0;width:100%;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;}
		.fangarrow{float: left; background: url(../../assets/images/btn_nor_down@2x.png) no-repeat;background-size: 100%;width:0.25rem;height:0.16rem;margin:0.14rem 0 0 0.2rem;}
		.fangarrow1{float: left; background: url(../../assets/images/btn_set_up@2x.png) no-repeat;background-size: 100%;width:0.25rem;height:0.16rem;margin:0.14rem 0 0 0.2rem;}
		.shengyuehao{float: left;font-size:0.3rem ;color: #4A77B0;padding-left: 0.1rem;}
</style>
