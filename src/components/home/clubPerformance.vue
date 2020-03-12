<template>
 <div class='container'>
   <div class="yeji">
      <!-- <input type="text"  v-model="endDate"/> -->
                              <datetime  v-model="endDate"  class="fang" @on-confirm="fangdate1"></datetime>
                              <div class="daochu"  @click="daochu()">查看</div>
   </div>
   <!-- <div class="coursefabu_selectdate">
                   <div class="selectdate_con">
                      <div class="text2 clear" id="firstSelect" style="text-align:center;"> -->
                          <!-- <span class="ss">至</span> -->
                          <!-- <div class="left">
                              <input type="text"  v-model="startDate"/>
                               <datetime  v-model="startDate"  @on-confirm="fangdate" class="fang"></datetime>
                          </div> -->
                         <!-- <div class="left right" >
                              <input type="text"  v-model="endDate"/>
                              <datetime  v-model="endDate"  class="fang" @on-confirm="fangdate1"></datetime>
                          </div>
                      </div>
                   </div>
                   	<a class="daochu" href="javascript:;" @click="daochu()">导出列表</a>
               </div> -->
               <!-- <div class='yeji_wrapf'>
	   <div>	   
		<div class="Performance_left">
			<ul>
				<li>会所编号</li>
				<li>会所</li>
				<li>今日完成总额（含订金）</li>
				<li>本月完成总额（含订金）</li>
				<li>本月收款金额排名</li>
				<li>本月收款金额排名</li>
			</ul> 
		</div>
		   <div style="position: fixed;top: 0.8rem;left:0;right:0;bottom:0;overflow: auto;z-index: 0;">
				<div class="Performance_right">
					<ul v-for="(item,index) in telcusinfolist" :key="index" v-if="index>0">
						<li class="tb-option0" ><span>{{item.clubId}}</span></li>
						<li class="tb-option1" ><span>{{item.clubName}}</span></li>
						<li class="tb-option2" ><span>{{item.todayMoney}}</span></li>
						<li class="tb-option3" ><span>{{item.mothMoney}}</span></li>
						<li class="tb-option5" ><span>{{item.moneySort}}</span></li>
						<li class="tb-option6" ><span>{{item.percentSort}}</span></li>
					</ul>
				</div>
			</div>	
	</div>
    </div> -->
               <!-- <div class="content">
                   <div class="topTitle">
                       <div class="item">会所编号</div>
                        <div class="item">会所</div>
                         <div class="item">今日完成总额（含订金）</div>
                         <div class="item">本月完成总额（含订金）</div>
                        <div class="item">月完成率</div>
                      <div class="item">本月收款金额排名</div>
                      <div class="item">本月收款金额排名</div>
                   </div>
                   <div class="data">
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                       <div>3123</div>
                   </div>
               </div> -->
 </div>
 <!-- 查询 -->
</template>

<script>
import { Datetime } from 'vux'
import $ from 'jquery'
 export default {
   data () {
     return {
   startDate:this.config.formatDate(this.config.currentTime()).substring(0,10),
        endDate:this.config.formatDate(this.config.currentTime()).substring(0,10),
        telcusinfolist:[]
     }
   },
   created(){
   
//   this.getvalue();
   },
   mounted(){
  $(".vux-cell-value").text("日期："+$(".vux-cell-value").text())
   },
   methods: {
  fangdate(){
         this.startDate = this.startDate;
        //  this.getvalue();
         
      }, 
      fangdate1(){
        
         this.endDate = this.endDate;
         $(".vux-cell-value").text("日期："+this.endDate)
        //   this.getvalue();
        
      },
       getvalue(){
                this.instance.$post('/rest/wx/perfor/getClubPerformanceList',{
         	startDate:this.endDate.replace(/-/g,''),
				endDate:this.endDate.replace(/-/g,'')
      },res => {
       console.log(JSON.stringify(res));
        this.telcusinfolist = []
       if(res.status){
           if(res.rows.length>0){
     this.telcusinfolist=res.rows;
           }
       }
     })
       },
       daochu(){
           location.href =this.config.service_ip+ "/rest/wx/perfor/exportClubPerformance?startDate="+this.endDate.replace(/-/g,'')+"&endDate="+this.endDate.replace(/-/g,'');
       }
   },
   components: {
  Datetime
   }
 }
</script>

<style scoped lang="less">
.coursefabu_selectdate{width:100%;top: 30%;
position: relative;
border-radius:0.2rem;}
.clear:after{content:'';display:block;clear:both;}
.clear{zoom:1;}
.selectdate_con{margin:0 auto;}
.selectdate_con .text1{position: relative;}
.selectdate_con .text2{padding:0.16rem 0;display: flex}
.selectdate_con .text2 .fang{    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;}
.selectdate_con .text1 img{width:0.34rem;height:0.34rem;position: absolute;top:6px;left:46.8%;}
.selectdate_con .p1{font-size:0.34rem;border-bottom:1px solid #D6D6D6;width:40%; 
font-family:PingFang-SC-Medium;float: left;
font-weight:500;
color:rgba(29,29,29,1);}
.selectdate_con .p2{font-size:0.34rem;border-bottom:1px solid #D6D6D6;width:40%;text-align: right;
font-family:PingFang-SC-Medium;float: right;
font-weight:500;
color:rgba(29,29,29,1);}
.selectdate_con .left{float:left;text-align: center;position: relative;flex: 1;
text-align: center;}
.selectdate_con .left input{font-size:0.28rem;
text-align: center;
font-family:PingFang-SC-Medium;
font-weight:500;outline: none;
color:rgba(29,29,29,1);}
.selectdate_con .left span{font-size:0.24rem;
font-family:PingFang-SC-Medium;
font-weight:500;padding-right: 0.16rem;
color:rgba(153,153,153,1);}
.selectdate_con .left img{width:0.15rem;height:0.23rem;vertical-align: middle;}
.selectdate_con .right{text-align: center;margin-right:-0.1rem;position: relative;}
.coursetable{
        width:94%;margin:0 auto;
        
           border: 1px solid #D6D6D6;
           border-bottom:none;
           border-right:none;
           border-radius: 6px;
      .coursetime{
          //  border-bottom: 1px solid #D6D6D6;
        .courseitem{
          float: left;  
          width:13.956%;
          height:1rem;
          line-height: 1rem;
          text-align: center;
          border-right: 1px solid #D6D6D6;
          border-bottom: 1px solid #D6D6D6;
          position: relative;
          span{font-size:0.28rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:#1D1D1D;}
         img{width:0.3rem;position: absolute;top:0;right: 0;}

        }

      }
       .courseitemactive{border-right: none!important;}
      .bottomright{border-bottom-right-radius:6px!important;}
      .bottomleft{border-bottom-left-radius:6px!important;}
    }
.clear:after{content:'';display:block;clear:both;}
.clear{zoom:1;}
.fabushuom{padding:3% 3% 0 3%;}
.fabushuom p{font-size:0.24rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);}

.coursefabubtn{width:47%;float: left;
height:0.8rem;
line-height: 0.8rem;
text-align: center;
border:1px solid rgba(73,120,176,1);
border-radius:10px;
font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(73,120,176,1);
}
.coursefabubtn1{width:47%;float: right;
height:0.8rem;
line-height: 0.8rem;
text-align: center;
border:1px solid rgba(73,120,176,1);
background:rgba(73,120,176,1);
border-radius:10px;
font-size:0.36rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:#fff;
}  
.coursefabubtn_wrap{
  position: fixed;
bottom: 0.34rem;
left:3%;
right:0;
width:94%;


}
.yeji{
      position: absolute;
    width: 100%;
    top: 48%;
    transform: translateY(-50%);
}
.nocourse{text-align: center;padding-top:50%;}
.nocourse p{font-size:0.3rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);}
.quanxuanbtn{padding:8% 0 3% 3%;}
.quanxuanbtn img{width:0.42rem;height:0.42rem;vertical-align: middle;}
.quanxuanbtn span{font-size:0.28rem;padding-left:0.1rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}  
 .daochu {
width: 3rem;
    height: 0.85rem;
    line-height: 0.85rem;
    font-size: 0.4rem;
    color: #fff;
    background: #5176ab;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
        margin-bottom: 30px;
}
.content{
    width: 100%;
    overflow: scroll;
    margin-top: 0.05rem;
    .topTitle{
        display: flex;
        .item{
            font-size: 0.28rem;
    color: #2c2e34;
    height: 0.82rem;
    line-height: 0.82rem;
    padding: 0 0.3rem;
        text-align: center;
        -webkit-flex:1 0 auto;
        flex:1 0 auto;
            border: 1px solid #e4e4e4;
                background: #d1d0d0;
        }
    }
.data{
     display: flex;
    div{
         text-align: center;
        -webkit-flex:1 0 auto;
        flex:1 0 auto;
    width: 2.45rem;
    height: 0.82rem;
    line-height: 0.82rem;
    text-align: center;
    border: 0.5px solid #e4e4e4;
    word-wrap: break-word;
    overflow: hidden;
    font-size: 0.22rem;
    vertical-align: top;
    }
}
}
.yeji_wrapf{ 
	position:absolute; 
        overflow:scroll; 
        -webkit-overflow-scrolling: touch; 
        top:0.8rem; 
        left:0; 
        bottom:0; 
        right:0;
  }
.yeji_wrapf em{font-style: normal;}
.yeji_wrapf li{list-style: none;}
.yeji_wrapf a{text-decoration: none;}
.yeji_wrapf table {
	empty-cells: show;
	border-collapse: collapse;
         /*margin:0 auto;*/
}
       /* tr{display: inline-block;}*/
.yeji_wrapf tr td:nth-child(1) {
	background: #D1D0D0;
/*font-size:0.28rem;color:#2C2E34;position: fixed;left: 0;*/
	width: 2.3rem;
	height: 1.05rem;
	line-height: 1.05rem;
	padding: 0!important;
	text-align: center;
	font-size: 16px;
}

.yeji_wrapf table td ,
       .yeji_wrapf table th {
        	/*display: inline-block;*/
	white-space: nowrap;
	border: 1px solid #E4E4E4;
	padding: 0.35rem 0.4rem;
}

.yeji_wrapf tbody {
	background: #fff;
}

/*.pos {
	position: fixed;
	left: 0;
}*/

 .yeji_wrapf .table_bottom {
	position: fixed;
	bottom: 0.05rem;
	left: 2.55rem;
	color:rgba(145,145,145,1);
}

.yeji_wrapf .daochu {
	display: inline-block;
	width: 1.4rem;
	height: 0.45rem;
	line-height: 0.45rem;
	font-size: 0.24rem;
	color: #fff;
	background: rgba(81,118,171,1);
	text-align: center;
	position: fixed;
	right: 0.1rem;
	top: 0.05rem;
	border-radius: 4px;
	z-index: 200;
}

/*.Perform_top_wrap{height:0.6rem;width:100%;}*/
.yeji_wrapf .Perform_top{
	position: fixed;
	top:0.18rem;
	left:0.3rem;
	height:0.6rem;
    color:rgba(145,145,145,1);
    font-size: 12px;
}
.yeji_wrapf .Performance_left {
	position: fixed;
	top:0.8rem;
	left: 0;
	z-index: 100;
}

.Performance_left ul {
}

.yeji_wrapf .Performance_left ul li {
	background: #D1D0D0;
	font-size: 0.2rem;
	color: #2C2E34;
	width: 2.5rem;
	height: 0.82rem;
	line-height:0.82rem;
	text-align: center;
    border: 1px solid #E4E4E4;
        overflow-y: auto;
}

.yeji_wrapf .Performance_right {
	position: absolute;
	top: 0rem;
	left: 2.5rem;
	background: #fff;
    z-index: -99;
      width: 100%;
    display: flex;
     border-right:1px solid #E4E4E4;
}

.Performance_right ul {
      -webkit-flex:1 0 auto;
        flex:1 0 auto;
}

.yeji_wrapf .Performance_right ul li {
	height: 0.856rem;
	box-sizing: border-box;
}

.yeji_wrapf .Performance_right ul li span {
	display: inline-block;
	width: 2.45rem;
	height: 100%;
	line-height: 0.82rem;
	text-align: center;
    border:0.5px solid #E4E4E4;
        border-left: 0;
	/*word-break: break-all;*/
      word-wrap: break-word;
	overflow: hidden;
	font-size: 0.22rem;
    vertical-align: top;
        overflow-y: auto;
}

.yeji_wrapf .dataspan{line-height: 0.4rem!important;}
.yeji_wrapf .tb-option4{overflow: hidden;}
.ss{
        position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1.3rem;
    display: inline-block;
    font-size: 0.3rem;
    z-index: 999;
}
</style>
