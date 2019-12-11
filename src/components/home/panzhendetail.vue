<template>
 <div class='container'>
	  <div class="train_record">
					<div class="train_record1 flex-item1">
                   <div class="xl_record" id="selectCus"><span id="course_type">{{cusItemName}}</span></div>
					</div>
		         </div>
        <section>
			<div class="health_type">
				<div class="health_title">脊柱情况判别</div>
				<div class="write">
					<textarea name="" class="table1" rows="" cols="" id="spine" onfocus="this.blur()" readonly="readonly" maxlength="500" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="health_type" style="padding-top: 0;">
				<div class="health_title">亚健康判诊分析</div>
				<div class="write">
					<textarea name="" class="table1" rows="" cols="" id="sub_health" readonly="readonly" maxlength="500" onfocus="this.blur()" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature fhx">
				<span>亚健康师：<span class="name1" id="qm1"></span></span>
				<span id="time1" class="times"></span><input type="hidden" class="time1" value="" />
			</div>
			<div class="health_type">
				<div class="health_title">顾问全面健康管理方案</div>
				<div class="write">
					<textarea name="" class="table2" rows="" cols="" id="overall_health" readonly="readonly" onfocus="this.blur()" maxlength="500" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature fhx1">
			<span>顾问：<span class="name2" id="qm2"></span></span>
				<span id="time2" class="times"></span><input type="hidden" class="time2" value="" />
			</div>
			<div class="health_type">
				<div class="health_title">面部肌肤判诊分析</div>
				<div class="write">
					<textarea name="" rows="" class="table1" cols="" id="skin" readonly="readonly" maxlength="500" onfocus="this.blur()" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature fhx">
				<span>亚健康师：<span class="name1" id="qm3"></span></span>
				<span id="time3" class="times"></span><input type="hidden" class="time3" value="" />
			</div>
			<div class="health_type">
				<div class="health_title">顾问全面健康管理方案</div>
				<div class="write">
					<textarea name="" rows="" class="table2" cols="" id="overall_health1" readonly="readonly" maxlength="500" onfocus="this.blur()" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature" style="padding-bottom: 0.23rem;border-bottom: 1px solid #e6e6e6;">
				<span>顾问：<span class="name2" id="qm4"></span></span>
				<span id="time4" class="times"></span><input type="hidden" class="time4" value="" />
			</div>
		</section>
 </div>
</template>

<script>
import $ from 'jquery'
 export default {
   data () {
     return {
		 detailId:this.$route.query.id,

		 cusItemName:this.$route.query.itemName,
		
		  cusItemId:this.$route.query.itemid
     }
   },
   created(){
     this.getdetail()
	
   },
   methods: {
     getdetail(){
           this.instance.$get('/rest/wx/diagnosis/getDiagnosisById',{params: { 
              detailId:this.detailId
            }},res => {
      console.log(res);
           $("#spine").val(res.spine);
      	    $("#sub_health").val(res.subhealth);
      	      $("#qm1").text(res.subhealthWrite);
      	      if(res.subhealthWriteTime!=""){
      	      	 var resultTime1=res.subhealthWriteTime.split(" ");
      	      $("#time1").text("时间："+resultTime1[0]);
      	       $(".time1").val(res.subhealthWriteTime);
      	      }
      	     
      	       $("#overall_health").val(res.customerPlan);
      	         $("#qm2").text(res.customerPlanWrite);
      	          if(res.planWriteTime!=""){
      	      	 var resultTime2=res.planWriteTime.split(" ");
      	      $("#time2").text("时间："+resultTime2[0]);
      	            $(".time2").val(res.planWriteTime);
      	      }
      	          $("#skin").val(res.skin);
      	         $("#qm3").text(res.skinWrite);
      	            if(res.skinWriteTime!=""){
      	      	 var resultTime3=res.skinWriteTime.split(" ");
      	      $("#time3").text("时间："+resultTime3[0]);
      	            $(".time3").val(res.skinWriteTime);
      	      }
      	            $("#overall_health1").val(res.customerSkinPlan);
      	         $("#qm4").text(res.customerSkinPlanWrite);
      	           if(res.skinPlanWriteTime!=""){
      	      	 var resultTime4=res.skinPlanWriteTime.split(" ");
      	      $("#time4").text("时间："+resultTime4[0]);
      	            $(".time4").val(res.skinPlanWriteTime);
      	      }
         })
      },
	
     formatDates1(date) {
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? '0' + m : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var hour = date.getHours();
				hour = hour < 10 ? ('0' + hour) : hour;
				var minute = date.getMinutes();
				minute = minute < 10 ? ('0' + minute) : minute;
				var second = date.getSeconds();
				second = second < 10 ? ('0' + second) : second;
				return y + '-' + m + '-' + d + " " + hour + ":" + minute + ":" + second;
    },
   formatDate1(value) {
				var newDate = new Date(value);
				var time = this.formatDates1(newDate);
				return time;
	}
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
 select{border:none;background:none;outline: none;font-size: 0.42rem;appearance: none;}
    .backg {background-color: #fff}
 	section {
			border-bottom: 1px solid #e6e6e6;
		}
		
		.train_record {
			display: flex;
			padding: 0.25rem 0.3rem;
			background-color: #fff;
			border-bottom: 1px solid #E6E6E6;
			font-size: 0.3rem;
			color: #2C2E34;
		}
		
		.train_record .train_record1 {
			flex: 1;
		}
		
		.xl_record {
			font-size: 0.35rem;
			padding: 0.04rem 0;
			font-weight: bold;
		}
		
		.xl_record img {
			width: 0.3rem;
			vertical-align: middle;
			margin-left: 0.1rem;
		}
		
		.health_type {
			padding: 0.1rem 0.3rem;
			padding-bottom: 0;
		}
		
		.signature {
			padding: 0.05rem 0.3rem;
			display: flex;
			justify-content: space-between;
			font-size: 0.3rem;
		}
		
		.health_type .health_title {
			color: #4A77B0;
			font-size: 0.35rem;
			padding-top: 0.05rem;
		}
		
		.write {
			padding-top: 0.15rem;
		}
		
		.write textarea {
			resize: none;
			box-shadow: 0px 0px 2px 2px rgba(214, 214, 214, 0.3) inset;
			padding: 0.2rem 0.3rem;
			line-height: 0.4rem;
            font-size: 0.28rem;
            width:92%;
            outline: none;
		}
		
		.btn {
			width: 92%;
			height: 0.78rem;
			line-height: 0.78rem;
			font-size: 0.35rem;
			text-align: center;
			background-color: #4A77B0;
			margin: 0.5rem 4%;
			color: #fff;
			border-radius: 5px;
			// display: none;
		}
		
		.weui-picker__action:first-child {
			color: #666;
		}
		
		.signature .name {
			float: left;
		}
		
	textarea{
		background-color:#f7f7f7;
		border-radius:1px;
		-webkit-appearance: none;
		border:none;
	}
	.fhx{
		border-bottom: 1px solid #E6E6E6;
    margin: 0 20px;
    padding: 0.05rem 0;
    padding-bottom: 0.15rem;
	}
	.fhx1{
		    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 0.15rem;
    padding-left: 0.32rem;
	}
 
</style>
