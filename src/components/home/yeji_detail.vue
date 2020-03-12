<template>
 <div class='container'>
    <div class='yeji_wrapf'>
    <div class="Perform_top_wrap">
			<p class="Perform_top">可左右滑动</p>
			<a class="daochu" href="javascript:;" @click="daochu()">导出列表</a>
		  </div>
	   <div>	   
		<div class="Performance_left">
			<ul>
				<li>日期</li>
				<li>会员姓名</li>
				<li>卡号</li>
				<li>产品编号</li>
				<li>产品名称</li>
				<li>流水单号</li>
				<li>销售业绩</li>
				<li>当天配合私教</li>
				<li>当月配合私教</li>
				<li>消耗业绩</li>
				<li>固定提成</li>
				<li>业绩类别</li>
			</ul>
		</div>
		   <div style="position: fixed;top:0;left:0;right:0;bottom:0;overflow: auto;z-index: 0;">
				<div class="Performance_right">
					<ul>
						<li class="tb-option0" ></li>
						<li class="tb-option1" ></li>
						<li class="tb-option2" ></li>
						<li class="tb-option3" ></li>
						<li class="tb-option4" ></li>
						<li class="tb-option5" ></li>
						<li class="tb-option6" ></li>
						<li class="tb-option7" ></li>
						<li class="tb-option8" ></li>
						<li class="tb-option9" ></li>
						<li class="tb-option10" ></li>
						<li class="tb-option11" ></li>
					</ul>
				</div>
			</div>	
	</div>
		<p class="table_bottom">有什么疑问请咨询前台</p>
    </div>
 </div>
</template>

<script>
import $ from 'jquery'
 export default {
   data () {
     return {
     typevalue:this.$route.query.detailtype,
     fangvalue:this.$route.query.selfmouth   
     }
   },
   created(){

   },
   methods: {
       getvalue(){
            var type = this.typevalue;
           if(type==2){
			var data = {
				type:2,
				date:'201710'
			};
			
		}
		
		if(type==3){
			var data = {
				type:3,
				date:'201710'
			};
			
		}
		
		if(type==4){
			var data = {
				type:4,
				date:this.fangvalue
			};
			
		}
			
			
			$.ajax({
				type:"post",
				url:this.config.service_ip+"/rest/wx/perfor/getPerformanceListDetail",
				async:false,
				contentType: "application/json;charset=UTF-8",
		        //dataType: "json",
				data:JSON.stringify(data),
				success: function(res){
					console.log(res);
					var len = res.length;
					var pwid = len * 2.5 + 'rem';
//					var table =document.getElementById("table_info3");
// 					var rows = table.rows.length;
                   $('.Performance_right').width(pwid)
					$.each(res, function(index,x) {
						var arr = x.mediname  
						var arr1 = x.autonumb
//						console.log(arr1.length) 
						$('.tb-option0').append('<span>'+x.strcreadate+'</span>')
						$('.tb-option1').append('<span>'+x.fldFirstName+'</span>')
						$('.tb-option2').append('<span>'+x.caseid+'</span>')
						$('.tb-option3').append('<span>'+x.mediCode+'</span>')
						$('.tb-option4').append('<span class="dataspan"><em>'+x.mediname+'</em></span>')
						$('.tb-option5').append('<span>'+x.autonumb+'</span>')
						$('.tb-option6').append('<span>'+x.price3+'</span>')
						$('.tb-option7').append('<span>'+x.price7+'</span>')
						$('.tb-option8').append('<span>'+x.price11+'</span>')
						$('.tb-option9').append('<span>'+x.price2+'</span>')
						$('.tb-option10').append('<span>'+x.price1+'</span>')
						$('.tb-option11').append('<span>'+x.option_name+'</span>')
				
					});
				},
				error: function(res){
					 alert(res.status)
				}
			});
       },
       daochu(){
           location.href =this.config.service_ip+ "/rest/wx/perfor/exportDetail?type="+this.typevalue+"&date="+this.fangvalue+""
       }
   },
   mounted(){
      this.getvalue()
   },
   components: {

   }
 }
</script>

<style  lang="less">
.yeji_wrapf{ 
	position:absolute; 
        overflow:scroll; 
        -webkit-overflow-scrolling: touch; 
        top:0; 
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
	top:0.6rem;
	left: 0;
	z-index: 100;
}

.Performance_left ul {
}

.yeji_wrapf .Performance_left ul li {
	background: #D1D0D0;
	font-size: 0.28rem;
	color: #2C2E34;
	width: 2.5rem;
	height: 0.82rem;
	line-height: 0.82rem;
	text-align: center;
	border: 1px solid #E4E4E4;
}

.yeji_wrapf .Performance_right {
	position: absolute;
	top: 0.6rem;
	left: 2.5rem;
	background: #fff;
	z-index: -99;
}

.Performance_right ul {
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
	/*word-break: break-all;*/
      word-wrap: break-word;
	overflow: hidden;
	font-size: 0.22rem;
	vertical-align: top;
}

.yeji_wrapf .dataspan{line-height: 0.4rem!important;}
.yeji_wrapf .tb-option4{overflow: hidden;}
 
</style>
