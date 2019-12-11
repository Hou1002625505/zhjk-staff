<template>
 <div class='container'>
     <div class='induibi_wrap'>
          <div class='induibi_wrap'>

               <div class='induibi_header'>
                   <div class='header_left'>
                      <p class="text">{{namestyle}}</p>
                      <p class="text1"><span v-show="showFlag!=6">{{namewei}}</span> <span v-show="showFlag==6">kg/m<sup>2</sup></span></p>
                   </div>
                    <div class='header_right'>
                        <p class="text">正常范围</p>
                         <p class="text1">{{namefanwei}}</p>
                   </div>
               </div>           
                <div class="fengeline"></div>
                 <div class='induibi_con'>
                   <p class="titlename titlename1">对比分析</p>

                   <div id="xianmain" style="width:100%;height:300px;"></div>
                   
                  <div class="tubiao_menu">
                        <div class="item" :class="{active:showFlag==1}" @click="flagmethod(1)"><span>体重</span></div>
                        <div class="item"  :class="{active:showFlag==2}" @click="flagmethod(2)"><span>骨骼肌</span></div>
                         <div class="item"  :class="{active:showFlag==3}" @click="flagmethod(3)"><span>体脂肪</span></div>
                        <div class="item"  :class="{active:showFlag==4}" @click="flagmethod(4)"><span>身体水分含量</span></div>
                         <div class="item"  :class="{active:showFlag==5}" @click="flagmethod(5)"><span>去脂体重</span></div>
                        <div class="item" :class="{active:showFlag==6}" @click="flagmethod(6)"><span>身体质量指数</span></div>
                         <div class="item" :class="{active:showFlag==7}" @click="flagmethod(7)"><span>体脂比</span></div>
                        <div class="item" :class="{active:showFlag==8}" @click="flagmethod(8)"><span>腰臀比</span></div>
                         <div class="item" :class="{active:showFlag==9}" @click="flagmethod(9)"><span>基础代谢</span></div>

                  </div>
                  <div class="tubiao_text">
                      <div class="miaosu" v-show="showFlag==1">
                       <p class="titlename">体重</p>
                        <p class="miaosutext">
                            体重body weight为 裸体或穿着已知重量的工作衣称量得到的身体重量。"体重增长除与骨的增长关系密切以外，还与肌肉，脂肪等的增长有关系。
                        </p>
                      </div>

                      <div class="miaosu"  v-show="showFlag==2">
                       <p class="titlename">骨骼肌</p>
                        <p class="miaosutext">
                            骨骼肌是分布于躯干、四肢的随意肌。肌纤维呈细长圆柱状，有多个至数百个细胞核，位于纤维的周缘部。肌的外面是由结缔组织构成的肌外膜。肌外膜内含血管和神经，伸入肌内将肌分隔为若干肌束，本身构成包裹肌束的肌束膜，并进而又伸入到每条肌纤维的周围，构成富含毛细血管和神经纤维的肌内膜。
                        </p>
                      </div>

                      <div class="miaosu"  v-show="showFlag==3">
                       <p class="titlename">体脂肪</p>
                        <p class="miaosutext">
                            体脂肪是人体组织的重要构成部分，也是提供热量的主要物质之一。体脂肪包括可见的皮下脂肪和看不见的内脏脂肪。体脂肪过多容易导致肥胖。肥胖还会增加罹患癌症的风险，如肾癌、甲状腺癌、胰腺癌、膀胱癌甚至乳腺癌的几率都会增高。
                        </p>
                      </div>

                      <div class="miaosu"  v-show="showFlag==4">
                       <p class="titlename">身体水分含量</p>
                        <p class="miaosutext">
                          身体体重和水分占比
                        </p>
                      </div>

                      <div class="miaosu"  v-show="showFlag==5">
                       <p class="titlename">去脂体重</p>
                        <p class="miaosutext">
                           去脂肪软体重 脂肪由C、H、O三种元素组成。 脂肪是由甘油和脂肪酸组成的三酰甘油酯，其中甘油的分子比较简单，而脂肪酸的种类和长短却不相同。　　 体重body weight 为裸体或穿着已知重量的工作衣称量得到的身体重量。　　 体脂百分比=（4.570/体密度―40142）乘以100％　　 体脂重=体脂百分比乘以体重（千克）　　 去脂体重=体重（千克）―体脂重（千克）
                        </p>
                      </div>

                      <div class="miaosu"  v-show="showFlag==6">
                       <p class="titlename">身体质量指数</p>
                        <p class="miaosutext">
                            BMI：身体质量指数(kg/m<sup>2</sup>)是一项通过计算体重(kg)和身高(m<sup>2</sup>)的比值来确定肥胖程度的指标。由于仅仅考虑了体重和身高，BMI只能判断其外在肥胖度。
                        </p>
                      </div>

                      <div class="miaosu"  v-show="showFlag==7">
                       <p class="titlename">体脂比</p>
                        <p class="miaosutext">
                            PBF：体脂百分比不仅仅考虑了体重，还考虑体脂肪在体重所占的比例来决定肥胖程度。体重不是判断肥胖的必然条件，就好比较多的肌肉量会导致更高的体重一样，在肥胖的诊断中，体脂百分率比体重更重要。
                        </p>
                      </div>
                      
                       <div class="miaosu"  v-show="showFlag==8">
                       <p class="titlename">腰臀比</p>
                        <p class="miaosutext">
                           腰和臀之间的周长比率通常用来判断腹部肥胖，因为它与其密切相关。女性WHR超过0.85，男性超过0.9可被认为是腹部肥胖。成年人中，腹部肥胖大多导致内脏脂肪的聚积，然而过多的脂肪分子增加了血浓度，继而会引起诸如高血压.心血管疾病.糖尿病等肥胖相关的疾病。
                        </p>
                      </div>

                       <div class="miaosu"  v-show="showFlag==9">
                       <p class="titlename">基础代谢</p>
                        <p class="miaosutext">
                           BMR是维持生命所需的基础的能量，例如身体机能和体内平衡。尽管身高和体重是一样的，但肌肉含量高的人需要更多的BMR，因此尽管摄入的卡路里是一样的，但需要消耗更多.与正常范围的值进行对比，当低于正常范围时，建议通过力量训练增加肌肉量。BMR通过乘以运动系数用来计算每天消耗的总能量值（TEE），1.3是基于较少运动量的系数。例）如果BMR=1200kcal,建议TEE为1200x1.3=1560kcal.
                        </p>
                      </div>
                  </div>
                </div>    
              
          </div>          
     </div>
 </div>
    
</template>

<script>

 export default {
   data () {
     return {
      showFlag:1,
      namestyle:'体重',
      namewei:'kg',
      namefanwei:"",
      customerId:this.$route.query.customerId, 
     zhishu1:[],
    tizhifang1:[],
    tizhibi1:[],
    gugeji1:[],
    tizhong1:[],
    yaotun1:[],
    jichu1:[],
    shuifen1:[],
    quzhi1:[],
    Date11:[],

    //范围
    zhishu1f:"",
    tizhifang1f:"",
    tizhibi1f:"",
    gugeji1f:"",
    tizhong1f:"",
    yaotun1f:"",
    jichu1f:"",
     shuifen1f:"",
    quzhi1f:"",
     }
   },
   created(){
     
   },
   mounted(){
    this.getduibiinfo()
   },
   methods: {
       formatDates (date) {
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var   hour=date.getHours();
    hour = hour < 10 ? ('0' + hour) : hour;  
    var   minute=date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;  
    var   second=date.getSeconds();
    second = second < 10 ? ('0' + second) : second;  
    return  m + '-' + d +" "+hour+":"+minute+":"+second;
},

 formatDate(value,row, index){
	var newDate = new Date(value);
	var time = this.formatDates(newDate); 
	return time;
},
    filDate(value){
		var filValue = value.split(' ');
	 	return filValue[0];
 	},
     getduibiinfo(){
       //从后端获取数据
		var zhishu = [];
		var tizhifang = [];
		var tizhibi = [];
		var gugeji = [];
		var tizhong = [];
		var yaotun = [];
        var jichu = [];
        var   shuifen= [];
        var   quzhi= [];

		var Date1 = [];
		var data = {
      customerId:this.customerId
     };
     var that = this;
		$.ajax({
			type:"post",
			url:that.config.service_ip + "/rest/wx/bodyTest/getBodyTestSixtByCus",
			async:false,
			//dataType:"json",
			data:data,
			success:function(res){
				console.log(res)
				var data = res.rows
								
				$.each(data, function(index,x) {

					var value = x.bodyTestDetail
					
					zhishu.push(value.bmi)
					tizhifang.push(value.body_fat_mass)
					tizhibi.push(value.percent_body_fat)
					gugeji.push(value.skeletal_muscle_mass)
					tizhong.push(value.weight)
					yaotun.push(value.waist_hip_ratio)
                    jichu.push(value.bmr)
                    shuifen.push(value.total_body_water)
                      quzhi.push(value.fat_free_mass)
					var testdate = x.testtime
					var dtae = that.formatDate(testdate)
					Date1.push(that.filDate(dtae))
					
                    that.zhishu1f=value.bmi_min+'~'+value.bmi_max
                    that.tizhifang1f=value.body_fat_mass_min+'~'+value.body_fat_mass_max
                    that.tizhibi1f=value.percent_body_fat_min+'~'+value.percent_body_fat_max
                    that.gugeji1f=value.skeletal_muscle_mass_min+'~'+value.skeletal_muscle_mass_max
                    that.tizhong1f=value.weight_min+'~'+value.weight_max
                    that.yaotun1f=value.waist_hip_ratio_min+'~'+value.waist_hip_ratio_max
                    that.jichu1f=value.bmr_min+'~'+value.bmr_max
                    that.quzhi1f = value.fat_free_mass_min+'~'+  value.fat_free_mass_max
                      that.shuifen1f = value.total_body_water_min+'~'+ value.total_body_water_max
                    that.namefanwei = value.weight_min+'~'+value.weight_max
       
       
		});
          that.zhishu1 = zhishu.reverse();
          that.tizhifang1 = tizhifang.reverse();
          that.tizhibi1 = tizhibi.reverse();
          that.gugeji1 = gugeji.reverse();
          that.tizhong1 = tizhong.reverse();
          that.yaotun1 = yaotun.reverse();
          that.jichu1 = jichu.reverse();
           that.quzhi1 = quzhi.reverse();
          that.shuifen1 = shuifen.reverse();
          that.Date11 = Date1.reverse();

          that.receivedata( that.tizhong1)



			},
			error:function(res){
				alert('出错了')
			}
		});


     },  
     flagmethod(flagid){
       this.showFlag = flagid
        if(flagid == 1){
            this.namestyle = '体重';
            this.namewei = 'kg'
            this.namefanwei = this.tizhong1f
             this.receivedata( this.tizhong1)
        }
       
        if(flagid == 2){
            this.namestyle = '骨骼肌';
            this.namewei = 'kg';
             this.namefanwei = this.gugeji1f
             this.receivedata( this.gugeji1)
        }
          if(flagid == 3){
            this.namestyle = '体脂肪';
            this.namewei = 'kg'
             this.namefanwei = this.tizhifang1f
             this.receivedata( this.tizhifang1)
        }
        if(flagid == 4){
            this.namestyle = '身体水分含量';
            this.namewei = '%'
            this.namefanwei = this.shuifen1f
             this.receivedata( this.shuifen1)
        }
        if(flagid == 5){
            this.namestyle = '去脂体重';
            this.namewei = 'kg'
              this.namefanwei = this.quzhi1f
             this.receivedata( this.quzhi1)
        }
         if(flagid == 6){
            this.namestyle = '身体质量指数';
             this.namefanwei = this.zhishu1f
             this.receivedata( this.zhishu1)
        }
         if(flagid == 7){
            this.namestyle = '体脂比';
            this.namewei = '%';
              this.namefanwei = this.tizhibi1f
             this.receivedata( this.tizhibi1)
        }
         if(flagid == 8){
            this.namestyle = '腰臀比';
            this.namewei = '%';
              this.namefanwei = this.yaotun1f
             this.receivedata( this.yaotun1)
        }
         if(flagid == 9){
            this.namestyle = '基础代谢';
            this.namewei = 'kcal';
              this.namefanwei = this.jichu1f
             this.receivedata( this.jichu1)
        }
     },
     receivedata(datavalue){
		
	
	var myChart = echarts.init(document.getElementById('xianmain'));
            
     var  option = {
     	
        xAxis: {
            type: 'category',
            boundaryGap: true,  
            data: this.Date11,
            axisLine:{
            	lineStyle:{
            		color:'#1C1C1C',
            		opacity:0.3
            	}
            },
           axisLabel:{
//          	formatter: function(){
//          		return ""
//          	}
              interval:0
          },
          axisTick:{
           show:true
         }
        },
        yAxis: {
            type: 'value',
           splitNumber:3,
            
            splitLine:{  
              show:true ,
               
           },  
            axisLine:{
            	lineStyle:{
            		color:'#1C1C1C',
                    opacity:0.2,
                    
            	}
            },
            axisLabel:{
//          	formatter: function(){
//          		return ""
//          	}
              
            },
          axisTick:{
           show:true
         }
        },
       
   
        series: [{
            data:datavalue,
            type: 'line',
            areaStyle: { color:'rgba(255,255,255,0.2)'},
            itemStyle: {   
                    //通常情况下：
                    normal:{  
                        color:'#1C1C1C',
                        borderWidth:1,
                        label : {show: true},
                        lineStyle:{
                             color:'#3598FF',
                             
                        }
                        
                    }
                   
                },
        }]
    };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }
   },
   components: {
    
   }
 }
</script>

<style scoped lang="less">
 .induibi_header{height:1.6rem;padding:0.3rem 0;}
.header_left{display: inline-block; width:49%;height:1.6rem;text-align: center;border-right: 1px solid #D6D6D6;}
.induibi_header .text{padding-top:0.4rem;font-size:0.32rem;color:#1C1C1C;}
.induibi_header .text1{font-size:0.3rem;color:#1C1C1C;} 
.header_right{display: inline-block; width:49%;height:1.6rem;text-align: center;}
 .fengeline{width:100%;height:0.2rem;background:rgba(247,247,247,1);}
 .titlename{
padding:0.3rem 4%;     
font-size:0.34rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}
 .titlename{
padding:0.3rem 4% 0;     
font-size:0.34rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(29,29,29,1);}
.tubiao{
    height: 2rem;
}
  .tubiao_menu{padding-left:4%; overflow-x:auto;white-space:nowrap;height:0.8rem;}
.tubiao_menu .item{display: inline-block; height:0.5rem;line-height: 0.5rem;
border:1px solid rgba(53,152,255,1);text-align: center;padding:0 0.2rem;
border-radius:25px;margin-right: 0.3rem}
.tubiao_menu .active{background:rgba(53,152,255,1);}
.tubiao_menu .active span{color:#fff!important;}
.tubiao_menu .item span{font-size: 0.26rem;color:#3598FF;}
.miaosutext{padding:0 4%;line-height: 0.5rem;}
</style>
