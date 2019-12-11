<template>
 <div class='container'>
	  <div class="train_record">
					<div class="train_record1 flex-item1">
                    <div class="xl_record" id="selectCus">
                <select v-model="cusItemName" @change="selopation(cusItemName)">
                    <option v-for="(item,index) in courseList" :key="index">{{item.name}}</option>
                           
                 </select><img src="../../assets/images/unfold_icon.png" /></div>
					</div>
		         </div>
   <section>
			<div class="health_type">
				<div class="health_title">脊柱情况判别</div>
				<div class="write">
					<textarea name="" class="table1" @click="metab1()" :class="{backg:back1}" rows="" cols="" id="spine"  maxlength="500" :readonly="readonlyflag1" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="health_type" style="padding-top: 0;">
				<div class="health_title">亚健康判诊分析</div>
				<div class="write">
					<textarea name="" class="table1" rows=""  @click="metab1()" cols="" id="sub_health" :class="{backg:back1}" maxlength="500" :readonly="readonlyflag1" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature fhx">
				<span>亚健康师：<span class="name1" id="qm1">{{realName1}}</span></span>
				<span id="time1" class="times">{{time1}}</span><input type="hidden" class="time1" :value="datatime1" />
			</div>
			<div class="health_type">
				<div class="health_title">顾问全面健康管理方案</div>
				<div class="write">
					<textarea name="" class="table2" rows=""  @click="metab2()" cols="" id="overall_health" :class="{backg:back}" maxlength="500" :readonly="readonlyflag" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature fhx1">
			<span>顾问：<span class="name2" id="qm2">{{realName}}</span></span>
				<span id="time2" class="times">{{time}}</span><input type="hidden" class="time2" :value="datatime" />
			</div>
			<div class="health_type">
				<div class="health_title">面部肌肤判诊分析</div>
				<div class="write">
					<textarea name="" rows="" class="table1" cols=""  @click="metab1()" id="skin"  maxlength="500" :class="{backg:back1}" :readonly="readonlyflag1" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature fhx">
				<span>亚健康师：<span class="name1" id="qm3">{{realName1}}</span></span>
				<span id="time3" class="times">{{time1}}</span><input type="hidden" class="time3" :value="datatime1" />
			</div>
			<div class="health_type">
				<div class="health_title">顾问全面健康管理方案</div>
				<div class="write">
					<textarea name="" rows="" class="table2" cols=""  @click="metab2()" id="overall_health1" :class="{backg:back}" maxlength="500" :readonly="readonlyflag" onkeyup="this.value=this.value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'')"></textarea>
				</div>
			</div>
			<div class="signature" style="padding-bottom: 0.25rem;border-bottom: 1px solid #e6e6e6;">
				<span>顾问：<span class="name2" id="qm4">{{realName}}</span></span>
				<span id="time4" class="times">{{time}}</span><input type="hidden" class="time4" :value="datatime" />
			</div>
					<div class="btn" v-show="saveflag" @click="mesave()">保存</div>
		</section>
 </div>
</template>

<script>
import $ from 'jquery'
 export default {
   data () {
     return {
		 customerId:this.$route.query.customerId,
        realName:"",//顾问
         realName1:"",
         time:"",
          time1:"",
          datatime:"",
          datatime1:"",
        js:"",
        xs:"",
        saveflag:false,
        readonlyflag:true,
         readonlyflag1:true,
         back:false,
         back1:false,
		 cusItemName:"",
		  courseList:[],
		  cusItemId:""
     }
   },
   created(){
     this.getusery()
	 this.dictionnary1()
   },
   methods: {
     getusery(){
          this.instance.$post('/rest/wx/customer/getQyUser',{
              
           },res => {
       console.log(res);
      
        var roles =  res.rows[0].roles
        console.log(roles)
       roles.forEach( item1=>{
         console.log(item1)
        if(item1.roleName=="SPA技师"){
            this.realName1 = res.rows[0].realName
            this.readonlyflag1 = false;
            this.time1 = '时间：'+ this.config.formatDate(this.config.currentTime())
            this.datatime1 = this.formatDate1(this.config.currentTime())
            this.back1 = true;
            this.js="SPA技师";
            this.saveflag = true;
            
        }else if(item1.roleName=="销售"){
               this.realName = res.rows[0].realName
                this.readonlyflag = false;
               this.time =  '时间：'+this.config.formatDate(this.config.currentTime())
                this.datatime = this.formatDate1(this.config.currentTime())
                this.back = true;
                this.xs="销售";
                 this.saveflag = true;
        }
       })
              
   })
      },
	  metab1(){
		  if(this.xs=="销售"&&this.js!="SPA技师"){
					
						this.$vux.toast.text("您不是亚健康师，不能填写");
					
				}else if(this.xs!="销售"&&this.js!="SPA技师"){
				this.$vux.toast.text("您既不是亚健康师也不是顾问，不能填写");  
				}
	  },
	   metab2(){
		  if(this.js=="SPA技师"&&this.xs!="销售"){
				
						this.$vux.toast.text("您不是顾问，不能填写");
				
				}else if(this.xs!="销售"&&this.js!="SPA技师"){
				this.$vux.toast.text("您既不是亚健康师也不是顾问，不能填写");  
				}
	  },
	   dictionnary1(){
          this.instance.$post('/rest/wx/dictionnary/getdictionnarylist', {
              typeCode: "spaItemType"
      }, res => {
        console.log(res);
        var data = res.rows;
				for(var i = 0; i < data.length; i++) {
					var item = data[i];
					if(i==0){
						this.cusItemName=item.name  
					}
					this.courseList.push(item)
				}
              
      })
      },
	  mesave(){
        var typelist = this.courseList;
             for(var i =0;i<typelist.length;i++){
                if(this.cusItemName==typelist[i].name){
                this.cusItemId = typelist[i].dictionaryId
                }
              } 
             var spIne = $.trim($("#spine").val());
				var sub_health = $.trim($("#sub_health").val());
				var overall_health = $.trim($("#overall_health").val());
				var skIn = $.trim($("#skin").val());
				var overall_health1 = $.trim($("#overall_health1").val());
				
				var	content = 0;
			
				if(this.cusItemid == "") {
				this.$vux.toast.text("请选择项目类型");
					return false;
				}
				$("textarea").each(function() {
					if($(this).val() != "") {
						content = 1;
					}
				})
				if(content == 0) {
					this.$vux.toast.text("请填写对应内容");
					return false;
				}

			    this.instance.$post('/rest/wx/diagnosis/addDiagnosis',{
                   customerId: this.customerId,
					cusItemId: this.cusItemId,
					spine: spIne,
					subhealth: sub_health,
					subhealthWrite: $("#qm1").text(),
					subhealthWriteTime: $(".time1").val(),
					customerPlan: overall_health,
					customerPlanWrite: $("#qm2").text(),
					planWriteTime:$(".time2").val(),
					skin: skIn,
					skinWrite: $("#qm3").text(),
					skinWriteTime: $(".time3").val(),
					customerSkinPlan: overall_health1,
					customerSkinPlanWrite:$("#qm4").text(),
					skinPlanWriteTime:$(".time4").val()
				},res => {
             console.log(res);
             if(res.status){
                 this.$router.push({
                name: "panzhenlist",
                query: {               
                  customerId:this.customerId,               
                
                }
              });
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
		background-color:#F7f7f7;
		 border-radius:1px;
		-webkit-appearance: none;
		border: none;
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
