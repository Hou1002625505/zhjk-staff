<template>
 <div class='container'>
       <div class="goumai_hetong_wrap">
			<p class="title">购买合同</p>
			<div class="jiben_info">
				<p class="title_text">一、基本信息</p>
				 <div class="qi_hui_fang_item" >
				  
				      <div class="qi_hui_data tongbianhao" style="display: none;">
				    	<div class="mingcheng1">合同编号：</div>
				    	<div class="fangvalue1" id="hetongbianhao"></div>
				    </div>
				     <div class="qi_hui_data">
				    	<div class="mingcheng1">客户姓名：</div>
				    	<div class="fangvalue1" id="name">{{htinfo[0].fldfirstname}}</div>
				    </div>
				     <div class="qi_hui_data">
				    	<div class="mingcheng1">性<em style="opacity: 0;">空格</em>别：</div>
				    	<div class="fangvalue1" id="sex">{{htinfo[0].fldsex==1?'男':htinfo[0].fldsex==0 || htinfo[0].fldsex==2?'女':'未知'}}</div>
				    </div>
				    <div class="qi_hui_data" style="padding-bottom: 0.2rem;">
				    	<div class="mingcheng1">客户电话：</div>
				    	<div class="fangvalue1" id="mobile">{{htinfo[0].fldworkphone}}</div>
				    </div>
			    </div>
			</div>
			<div class="chanpin_detail">
				<p class="title_text">二、产品明细</p>
				<div class="product_wrap">
					
					<div class="product_item_wrap"  v-for="(item,index) in produclist" :key="index">
					  <div class="product_item_padding">
					  <div class="product_item">
					    <div class="name">产品{{Alaba(index+1)}}</div>
					    <div class="value" id="tianjiapro"><p @click="tianjiapro()" v-show="item.flag">添加产品</p><img src="../../assets/images/btn_delete@2x.png"  v-show="item.itemflag" @click="delete1(index)"/></div>
				     </div>
					  <div class="product_item">
					    <div class="name">*产品名称：</div>
					    <div class="value"><input type="text" class="pro_name" placeholder="请填写产品名称"/></div>
				     </div>
				     <div class="product_item">
					    <div class="name">*产品金额：</div>
					    <div class="value"><input type="number"  class="pro_jine" placeholder="请填写产品金额" @keyup="totalpri()"/></div>
				     </div>
				     <div class="product_item">
					    <div class="name">产品说明：</div>
					    <div class="value"><input type="text"  class="pro_shuoming"  placeholder="请填写产品说明"/></div>
				     </div>
				     </div>
				   </div>
				   
				   <!--<div class="product_item_wrap">
					  <div class="product_item_padding">
					  <div class="product_item">
					    <div class="name">产品二</div>
					    <div class="value"><img src="../../assets/images/btn_delete@2x.png" /></div>
				     </div>
					   <div class="product_item">
					    <div class="name">*产品名称：</div>
					    <div class="value"><input type="text"  placeholder="请填写产品名称"/></div>
				     </div>
				     <div class="product_item">
					    <div class="name">*产品金额：</div>
					    <div class="value"><input type="text"   placeholder="请填写产品金额"/></div>
				     </div>
				     <div class="product_item">
					    <div class="name">产品说明：</div>
					    <div class="value"><input type="text"   placeholder="请填写产品说明"/></div>
				     </div>
				     </div>
				   </div>-->
				   
				</div>
				 <div class="explain">
				  	<textarea rows="4" id="fangtext" cols="50" class="textEx" placeholder="如有特殊约定,请在此填写."></textarea>
				  </div>
			</div>
			<div class="total_money">
				<p class="title_text">三、合计</p>
				<div class="jine">
					 <div class="qi_hui_data">
				    	<div class="mingcheng1">合计金额：</div>
				    	<div class="fangvalue1" id="totalpay"></div>
				    </div>

				     <div class="qi_hui_data" v-show="goumaiflag">
				    	<div class="mingcheng1">购买分店：</div>
				    	<div class="fangvalue1" id="mendian">{{htinfo[0].hospname}}</div>
				    </div>

						<div class="qi_hui_data" v-show="!goumaiflag">
				    	<div class="mingcheng1">购买分店：</div>
								<div class="fangvalue1" id="mendian" :class="{fangvalueborder:!selectflag}"> 
									<select v-model="selectedclub" :class="{select1:selectflag}" :disabled="selectflag">
                   <option v-for="(item,index) in clublist" :key="index" :value ="{'clubName':item.clubName,'sysClubCode':item.sysClubCode}">{{item.clubName}}</option>
                  </select>
									<span v-if="!selectflag" class="triangle_border_down"></span>
                </div>				   
				    </div>

				     <div class="qi_hui_data payme_wrap">
				    	<div class="paymethods">支付方式：</div>

				    	<div class="fangcheng">
				    		<div class="pay_fangshi" v-for="(item,index) in zhifutypelist" :key="index" :paymethid="item.dictionaryId" :paymethname="item.name"  :class="{active:sixarr.indexOf(item.dictionaryId)>=0}" @click="payindex1(item.dictionaryId)"><span>{{item.name}}</span></div>				    	
				    	</div>
				    </div>
				</div>
			</div>
			<div class="tishi_text">
				<p>温馨提示：</p>
				<p style="text-indent: 2em;">为保障您的合法权益，请您确认合同内容是否完整清晰</p>
				<p>销售人员无额外承诺，您已付款没拿卡的，请到前台办理欠</p>
				<p>货登记。</p>
			</div>
			<p class="gouxuan">
				<span class="check_wrap">
			              <input type="checkbox"  name="rufangjian"  @click="selectagree($event)"/>
			              <span class="xuanzhong" v-show="selectshow"></span>
			              <span class="noxuanzhong"></span>
			    </span>
			    <label @click="goumaixie()">本人已阅读并同意购买协议</label>
			</p>
			<div class="qianming_wrap">
				<div class="qianming">
					<div class="qianname"><span>客户签名：</span><input type="text" placeholder="点击签名" @click="fang()" class="pictrue2" readonly="readonly"><img id="pictrue" /></div>
					<div class="qiantime"><span>合同日期：</span><input type="text" id="qiandate"  readonly="readonly" v-model="this.currentTime"></div>
			    </div>
			</div>
			<div class="baocun_wrap">
				<div class="baocun3" @click="saveht()">
				   <span>保存</span>
			    </div>
			</div>
       <!-- <div>{{testfang}}</div>    -->
			<!-- <div id="xuanzhuan"  style="visibility:hidden;">
				<div id="signatureparent"><div id="signature"></div></div>
				<div id="tools">
					<div id="clear" @click="clear()"><span>清除</span></div>
					<div id="baocun" @click="baocun()"><span>确定</span></div>				
				</div>
			</div> -->
            <div id="xuanzhuan"  style="visibility:hidden;">
                <vueSignature ref="signature" :sigOption="option" :w="'800px'" :h="'500px'"></vueSignature> 
                <!-- <vueSignature ref="signature1" :sigOption="option"></vueSignature> -->
                <div  id="tools">
                <div @click="clear"  id="clear">清除</div>
                <div @click="save" id="baocun">确定</div>
               </div> 
            </div>
		</div>
		<div class="htxieyi_wrap" v-show="xieyiflag">
			  <div class="zhiqing_wrap">
        <div class="zhi_title">
            <p class="text">购买协议</p>
        </div>
        <p style="text-indent: 25px;font-weight:900;">           
        您（以下统称“会员”）通过网络页面点击确认接收《购买协议》（以下简称“本协议”），即视为您与深圳市中航健康时尚集团股份有限公司（以下简称“本公司”）已达成协议并接受本协议约定的全部内容，特别是免除或者限制责任的条款、管辖与违约责任条款，为了更好的履行相关服务及责任，请您在点击确认前认真阅读并理解以下购买协议。                       
        </p>
        <p style="margin-top:0.3rem;font-weight:900;">一、会籍购买服务</p>
         <p>1.	本协议包括《会籍申请表》、《会员手册》、会员卡所记载的信息以及在本公司内公共场所内不时公示的所有规定和公告。</p>
         <p>2.	本协议为本公司与会员之间签署的、关于双方权利义务关系的法律文件，一旦生效,对双方具有法律约束力。</p>
         <p>3.	会员应在签署本协议后立即一次性交足相应的会费及可能产生的其他相关费用。</p>
         <p>4.	会员按照前款规定签署本协议，并交纳全部相关费用后,本公司将向会员发放一张证明本协议项下法律关系存续和会员拥有会员身份的文件,即本公司会员卡（实物会员卡或电子会员卡）。</p>
         <p>5.	合法持有人持有的会员卡具有以下功能：</p>
         <p>   a)	证明本公司与会员之间存在本协议项下的法律关系</p>
          <p>  b)	对会员消费情况进行记录。</p>

         <p>6.	会员卡的合法持有人是指与本公司签署会员协议，并按照本协议的约定取得会员卡的人，及按照本协议及本公司的相关管理规定从其他会员处受让会员卡的持卡人。</p>
          <p>7.	完好、有效的会员卡是会员身份的识别证明。会员到本公司消费须出示会员卡并办妥相关的入场手续后，方可入场消费并享受相应会员权益。会员卡丢失、损坏或者失效的，会员应按照本公司的管理规定及时向本公司申请挂失、补办或者重新办理。否则，本公司有权拒绝入场消费。</p>
         <p>8.	本协议项下本公司为会员在购买会籍后附赠的相关服务内容等由会籍顾问填写在本协议内，具体起算及终止期限根据会员卡中记录为准，上述附赠服务内容系基于购买本公司会籍后的附条件及期限服务,请务必注意在期限内进行使用,逾期将不再享受上述附赠服务。</p>
         <p>9.	会员参加本公司服务项目时，应确保自己的身体处于适合参加本公司相关项目的状态,没有任何不适宜参加健身和美容项目的疾病、损伤等。</p>
         <p>10.	会员应确保其所填写之入会申请资料详实准确，及如日后有任何更改应立即通知本公司之客户服务部门，因资料不详或者变更后没有及时通知本公司而导致的一切不利后果由会员自行承担。</p>
         <p>11.	违反本协议任何约定的行为，均属违约行为。违约一方应当承担包括但不限于赔偿损失等形式的违约责任。</p>
            <p>12.	在本公司消费过程中，必须举止文明、语言规范、不大声喧哗，严格遵守本公司运营管理规定。</p>
         <p>13.	会员违约次数达2次以上，或持续违约达5天不予纠正的，或一次违约情形严重的，本公司有权解除本协议，终止会员卡的效力，取消其会员资格。</p>
          <p>14. 除本协议另有约定外,任何一方因任何理由提出解除或终止本协议的,应按国家法律、法规、规章及相关主管部门的规定处理。</p>
         <p>15.	本协议的解释权归本公司所有,本协议的任何变更经本公司在本公司会所内公告、会员签收等方式告知会员或不记名卡持有者后即生效。本公司本着诚实信用的原则，有权在协议有效期内根据物价水平、供应商价格以及人工调整等因素，对本公司服务项目的价格进行调整（每自然年度单个项目的价格调整不超过10%）</p>
            <p>16.	本人确认除了本会籍申请表所列明的赠送项目外，会所的工作人员没有承诺额外再赠送任何项目或其他特别服务。</p>
              <p style="margin-top:0.3rem;font-weight:900;">二、私教购买服务</p>
         <p>1.	私教课程的购买人必须为持有本公司有效会员卡的会员。</p>
          <p>2.	本协议生效后，本公司仅向本协议的签署会员提供私教服务，未经本公司书面同意，会    员不得将其在本协议项下购买的私教课程转让给任何第三人。</p>
           <p>3.	私教课程须在会员卡有效期内或会员卡对应的服务期内完成。会员卡有效期或对应的服务期届满后，会员未完成私教课程的，可以再该期限届满后30日内会员卡续期或重新办理会员卡，未完成的私教课程可以再续期或重新办理后的会员卡有效期内继续使用；不办理会员卡续期或更换的，本公司不能继续提供未完成的私教课程。</p>
            <p>4.	本公司将安排经验丰富的私人教练为会员热情、专业的私教服务，但本协议不构成对会员所期望的健身效果的承诺或保证，且本公司在必要时（包括但不限于提供私教服务的私人教练离职时等）可以为会员更换私人教练；会员有正当理由认为需要更换私人教练的，可以向本公司提出申请，经本公司同意后，可为会员更换私人教练。</p>
             <p>5.	会员应在购买前充分了解私教课程相关的内容。会员支付协议总价款后，除非发生国家规定本公司应予退款的情形，不得以任何理由要求退款（包括但不限以提供私教服务的私人教练离职为理由等），也不得要求将该款项转作购买本公司其他服务项目的费用。</p>
              <p>6.	私教课程的预约请提前一天与您的私人教练预约，预约成功后请提前15分钟到达会所。如您有特殊情况需要取消课程，请提前2小时通知您的私人教练，如果没有提前取消预约，私人教练有权利扣除您所预约的课程；如果由于您个人原因，导致您上课迟到，您的私人教练有权利扣除您迟到的时间，按照预约时间段给您提供服务。</p>
          <p>7.	私教课程的授课地限于购买会所，本公司之私人教练只在该会所为会员提供私教服务。</p>
          <p style="font-weight:900;">私教购买特别声明</p>
           <p style="font-weight:900;">1.	身体条件及体格检查建议：本公司不为会员提供任何形式的体检服务，本公司员工或私人教练对会员身体状况的任何了解与询问不应构成本公司对会员身体状况是否符合私教课程要求的任何承诺或保证。在签署本协议前，会员应自行到医疗机构进行体检，以确保会员身体具备接受本公司私教服务的条件，没有任何不宜接受私教服务的疾病、损伤或其他缺陷。因会员身体的任何疾病、损伤或其他缺陷导致的会员在接受私教服务时发生任何身体损害的，本公司不承担任何法律责任。</p>
              <p style="font-weight:900;">2.	限制使用：在签订本协议前，如果会员有任何身体方面的原因导致不能使用本公司的任一私教服务的，及在接受私教服务过程中，感到任何不适的，请及时告知私人教练。否则，如果发生身体损害，本公司不承担任何法律责任。</p>
              <p style="font-weight:900;">3.	会员在接受私教服务时，应严格遵守本公司以书面、口头或任何其他形式告知的安全规范、指引或建议;因会员不接受或违反本公司的安全规范、指引或建议导致会员遭受任何损害的，本公司对此不承担任何法律责任。</p>
                 <p style="font-weight:900;">4.	除非因本公司故意行为或重大过失行为导致外，因任何其他原因导致会员任何形式的人身损害的或达不到会员所期望的健身目标的，本公司均不承担任何法律责任。</p>
            <p>5.	本人确认除了本协议所列明的赠送项目外，会所的工作人员没有承诺额外再赠送任何项目或其他特别服务。</p>
            <p style="margin-top:0.3rem;font-weight:900;">三、违约责任</p>
            <p style="font-weight:900;">会员违反本协议约定，无故要求解除本协议或者终止本协议的，会员应向本公司支付会员购买总金额20%的违约金，违约金不足以弥补本公司损失的，会员应赔偿给本公司造成的全部损失。</p>
             <p style="margin-top:0.3rem;font-weight:900;">四、管辖</p>
             
             <p style="font-weight:900;">会员与本公司就本协议之间发生的任何纠纷或者争议，首先应友好协商解决，协商不成的，双方同意提交广东省深圳市罗湖区人民法院管辖。</p>
              <div style="text-align:center;"><p style="margin:0.3rem 0;"> 深圳市中航健康时尚集团股份有限公司</p> </div> 
    </div>
		</div>
		<div class="fangmask" v-show="maskshow1"><p>数据保存中</p></div>  
 </div>
</template>

<script>
import $ from "jquery"
import Imgsrc from  "../../assets/images/btn_delete@2x.png"
import { MessageBox } from "mint-ui";
 export default {
   data () {
     return {
			 testfang:'',
      filid:this.$route.query.filid,
      htinfo:[],
      zhifutypelist:[],
      payindex:"",
      dictionaryId:"",
	  dictionaryname:"",
	  selectshow:"",
		sixarr:[],
		goumaiflag:true,
		selectedclub:"",
		clublist:[],
		selectflag:false,
		fhospname:'',
		fpostcode:'',
		maskshow1:false,
		savehtFlag:false,
      produclist:[
          {flag:true,itemflag:false}       
      ],  
       html1:'<img src="'+Imgsrc+'" />',
       data_list:{
    
       "customerStatement": {
        "customerGxId":this.$route.query.filid ,
        "customerGxName":"",
        "customerGxSex":"",
        "customerGxMobile":"",
        "userId":"",
        "userCode":"",
        "userName":"",
        "customerSign": "" ,
        "remarks":"",
        "postcode":"",
        "hospname":""
    },
    "products": [
       
    ],
    "methods": [
       
    ]
},
option:{
        penColor:"rgb(0, 0, 0)",
        backgroundColor:"rgb(255,255,255)"
    },
	currentTime: this.config.formatDate(this.config.currentTime()),
	xieyiflag:false   
     }
   },
   created(){
      this.gethtinfo();
      this.getzhifutype();
			this.getQyUser();
			
   },
    beforeRouteLeave(to, from, next) {
		if (this.xieyiflag) {
			this.xieyiflag = false 
			next(false)
		} else {
			next()
		}
    },
   methods: {
       gethtinfo(){
            this.instance.$post('/rest/wx/customerGx/findCustomerGx',{
                fldclientid:this.filid
            },res => {
							this.getqueryclub();
                console.log(res);
                this.htinfo.push(res.rows[0])
                this.data_list.customerStatement.customerGxName = res.rows[0].fldfirstname;
                 this.data_list.customerStatement.customerGxSex = res.rows[0].fldsex;
								 this.data_list.customerStatement.customerGxMobile = res.rows[0].fldworkphone;
								 this.fpostcode = res.rows[0].postcode;
								 this.fhospname = res.rows[0].hospname;
            })
		 },
		 //查询员工会所
		 getqueryclub(){
       this.instance.$post('/rest/wx/customer/club/getUserClub',{},res => {
                console.log('查询员工会所');
								console.log(res)
								// var fangdata = [
								// 		{'clubName':'科技园','sysClubCode':16,'clubId':3},
								// 		{'clubName':'观澜湖国际健康中心','sysClubCode':18,'clubId':3}								
								// ]
								var defaultval = {
									'clubName':'','sysClubCode':''
								}
							 this.testfang = res;
								if(res.status){
                   var data = res.rows;
                  if(data.length>0){
										if(data.length==1){
											this.selectflag = true;
										}
											this.goumaiflag = false;
                   	defaultval.clubName = data[0].clubName
								    defaultval.sysClubCode = data[0].sysClubCode
                    this.selectedclub = defaultval	
                    data.forEach(item =>{
											this.clublist.push(item)
										})    
									}else{
									
										 this.data_list.customerStatement.postcode = this.fpostcode;
                     this.data_list.customerStatement.hospname = this.fhospname;
									}

								}else{
								 
								  this.data_list.customerStatement.postcode = this.fpostcode;
                  this.data_list.customerStatement.hospname = this.fhospname;
								}




            })
		 },
	   goumaixie(){
		   this.xieyiflag = true;
	   },
       getQyUser(){
            this.instance.$post('/rest/wx/customer/getQyUser',{
                fldclientid:this.filid
            },res => {
                console.log(res);              
                this.data_list.customerStatement.userId = res.rows[0].userId;
                 this.data_list.customerStatement.userCode = res.rows[0].userName;
                 this.data_list.customerStatement.userName = res.rows[0].realName;
                 
            })
	   },
	   selectagree(e){
		var el = e.currentTarget;
		if(el.checked){
          console.log(1)
         this.selectshow = true
         
      }else{
		  this.selectshow = false
	  }
	   },
       //获取支付方式
       getzhifutype(){
             this.instance.$post('/rest/wx/dictionnary/getDictionNaryTypeList',{
               typeCode:'payMethod'
            },res => {
                console.log(JSON.stringify(res));
                res.rows[0].dlist.forEach(item => {
                     this.zhifutypelist.push(item)
                });
               
                
            })
       },
       tianjiapro(){
          
           var item =   {flag:false,itemflag:true};
           this.produclist.push(item)
       },
       delete1(index){
           
           this.produclist.splice(index,1)
          console.log(index)
          console.log(this.produclist)
       },
       payindex1(id){
      var ids = this.sixarr.indexOf(id);
              if(ids>=0){
                  //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
                  this.sixarr.splice(ids,1);
              }else{
                  //选中该按钮
                  this.sixarr.push(id);
              }
console.log( this.sixarr)
		  
	   },
	   totalpri(){
         var totalPrice = 0;
			$('.pro_jine').each(function(){
				 var price = $(this).val()
				 if(price != undefined){
				 	 totalPrice += parseInt(price)
				 }
				
			})
			$('#totalpay').text(totalPrice+'.00元')
	   },
       fang(){			
		    $("#xuanzhuan").css("visibility","visible")
                
        },
       save(){
			var _this = this;
			var png = _this.$refs.signature.save()
			var jpeg = _this.$refs.signature.save('image/jpeg')
            var svg = _this.$refs.signature.save('image/svg+xml');
            var png1 = png.toString();
              var datavalue = this.config.filDate1(png1) 
             this.data_list.customerStatement.customerSign = datavalue
            $("#xuanzhuan").css("visibility","hidden");
            $('#pictrue').attr({src:'data:' + png,width:'80px',height:'70px'})
            $('.pictrue2').hide()
			console.log(png);
		},
		clear(){
			var _this = this;
			_this.$refs.signature.clear();
		},
		fromDataURL(url){
			var _this = this;
			_this.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...");
		},
        saveht(rate){
				
					console.log(this.selectedclub)
					if(this.clublist.length>0){
						 this.data_list.customerStatement.postcode = this.selectedclub.sysClubCode;
            this.data_list.customerStatement.hospname = this.selectedclub.clubName;
					}else{
						  this.data_list.customerStatement.postcode = this.fpostcode;
              this.data_list.customerStatement.hospname = this.fhospname;
					}
           this.data_list.customerStatement.remarks = $('#fangtext').val()
			var ary = this.data_list.products
			var zhifutype = this.data_list.methods
			console.log(ary)
			if(ary.length>0){
				ary.splice(0,ary.length);
			}
			if(zhifutype.length>0){
				zhifutype.splice(0,zhifutype.length);
			}
			if($('input[name=rufangjian]').is(':checked')){
				
			}else{
               
                  this.$vux.toast.text("请勾选我同意", "center");
			}
			if(this.data_list.customerStatement.customerSign==''){
				 this.$vux.toast.text("请签名", "center");
			}
			//获取添加产品
			var totalprice = 0;
			$('.product_item_padding').each(function(index){
			console.log($(this).find('.pro_name').val())
			var prod_list= {
            "productName": "",
            "price": "",
            "remarks": ""           
            }
			var producname = $(this).find('.pro_name').val();
			if(producname != ""){
				prod_list.productName = $(this).find('.pro_name').val();
			}else{
				this.$vux.toast.text("请填写产品名称","center")
				return false;
			}
			var price = parseInt($(this).find('.pro_jine').val());
			totalprice += price;
			prod_list.price = $(this).find('.pro_jine').val();
			prod_list.remarks = $(this).find('.pro_shuoming').val();
			ary.push(prod_list)
		 })

			console.log(1)
			console.log(totalprice);
			
			
			//获取选择的支付方式
			var sixarrdata = this.sixarr;
			if(sixarrdata.length>0){

				$('.fangcheng').find('.active').each(function(index){
                    var methname = $(this).attr('paymethname');		
					var methid= $(this).attr('paymethid');
					var zhitypelist = {                        
						"methodType": "",
						"methodName": "",
						"payAmount": ""                 
					}
					zhitypelist.methodType = methid
					zhitypelist.methodName = methname
					zhitypelist.payAmount = totalprice
                 zhifutype.push(zhitypelist)
				})

			}else{
				this.$vux.toast.text('请选择支付方式')
				return false;
			}
						console.log(this.data_list)
				if(this.savehtFlag){
					return;
				}
				this.savehtFlag=true;
                this.instance.$post('/rest/wx/customerGx/addCustomerStatement', this.data_list,res => {
			  console.log(JSON.stringify(res));
			  		this.savehtFlag=false;
			  if(res.status){
				 this.$route.meta.slide=2;
         this.$router.back();
			  }
					 },error=>{	this.savehtFlag=false; this.$refs.loadmore.onTopLoaded()},rate)
        },
        //阿拉伯数字转换为简写汉字
 Alaba(Num) {
    for (var i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "")//替换Num中的“,”
        Num = Num.replace(" ", "")//替换Num中的空格
    }    
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
  var  part = String(Num).split(".");
   var newchar = "";
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            //alert("位数过大，无法计算");
            return "";
        }//若数量超过拾亿单位，提示
      var  tmpnewchar = ""
       var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":  tmpnewchar = "零" + tmpnewchar;break;
            case "1": tmpnewchar = "一" + tmpnewchar; break;
            case "2": tmpnewchar = "二" + tmpnewchar; break;
            case "3": tmpnewchar = "三" + tmpnewchar; break;
            case "4": tmpnewchar = "四" + tmpnewchar; break;
            case "5": tmpnewchar = "五" + tmpnewchar; break;
            case "6": tmpnewchar = "六" + tmpnewchar; break;
            case "7": tmpnewchar = "七" + tmpnewchar; break;
            case "8": tmpnewchar = "八" + tmpnewchar; break;
            case "9": tmpnewchar = "九" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
            case 0: tmpnewchar = tmpnewchar; break;
            case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 4: tmpnewchar = tmpnewchar + "万"; break;
            case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 8: tmpnewchar = tmpnewchar + "亿"; break;
            case 9: tmpnewchar = tmpnewchar + "十"; break;
        }
        newchar = tmpnewchar + newchar;
    }   
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");      
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") == 0) {
        newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") == newchar.length - 1) {
        newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
}
   },
   updated() {
    $('.value').find('img').css({'width':'0.3rem','height':'0.3rem'});
      $('.value').find('p').css({'font-size':'0.24rem','color':'#4A77B0','border-bottom':'1px solid #4A77B0'});
 },
   components: {
   }
 }
</script>

<style scoped lang="less">
		.fangmask{position: fixed;top:0;left:0;bottom:0;right:0;background: rgba(0, 0, 0, 0.3);text-align: center;}
		.fangmask p{margin-top:5rem;font-size:0.34rem ;color:#fff ;}
    .triangle_border_down{
	      	margin-right: 0.1rem;
	      	display: inline-block;
			    width:0;
			    height:0;
			    border-width:8px 5px 0;
			    border-style:solid;
			    border-color:#999 transparent transparent;/*灰 透明 透明 */
			   /*margin:40px auto;*/
			    position:relative;
			}
    .htxieyi_wrap{
		width:100%;
		position:absolute;
		top:0;
		left:0;
		background: #fff;
		z-index:9999;
	} 
    .zhiqing_wrap{
     padding:0 3%;
 }
 .zhiqing_wrap p{
     font-size:0.3rem;color:#1D1D1D;
 }
 .zhi_title{text-align: center;}
 .zhi_title .text{font-size:0.36rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(29,29,29,1);
padding:3% 0}
   .qi_hui_fang_item{
				margin:0 auto ;
				
			/*	height:2.5rem;*/				
			}			
			.qi_hui_data{padding-top:0.12rem;}
			.qi_hui_data .mingcheng{display: inline-block;}
			.mingcheng img{width:0.18rem;height:0.3rem;}
			.mingcheng span{font-size: 0.3rem;color:#1D1D1D;}
			.qi_hui_data .fangvalue{display: inline-block;}
			.fangvalue img{width:0.18rem;height:0.3rem;}
			.fangvalue a{font-size: 0.3rem;color:#4978B0;text-decoration: underline;}
			
			.mingcheng1{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
			.fangvalue1{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
			.payme_wrap{height:1.5rem;}
			.paymethods{float: left;height:1.5rem;font-size: 0.3rem;color:#1D1D1D;}
			.fangcheng{}
	        .title{background: #fff;padding-top:0.3rem;text-align: center;font-size: 0.36rem;color:#1D1D1D;}
	        .jiben_info{background: #fff;padding:0 4%;
				}
				.fangvalueborder{border: 1px solid #999;}
			.fangvalue1 select{padding-right: 0.1rem;height:22px;line-height: 22px;outline: none;font-size: 0.3rem;color:#1D1D1D;
			background: #fff;-webkit-appearance: none;border: none;
			}
      .fangvalue1 .select1{ padding-right: 0.1rem;height:22px;line-height: 22px;  -webkit-appearance: none;
    -moz-appearance: none;border: none;background: #fff;color:#1D1D1D;font-size: 0.3rem;
    outline: none;}

			.title_text{font-size: 0.3rem;color:#4A77B0;padding:0.2rem 0 0 0;}	
			.chanpin_detail{background: #fff;margin-top:0.2rem;padding-bottom: 0.01rem;}
			.chanpin_detail .title_text{padding-left:4%;}
			.product_item_wrap{border-bottom: 1px solid #D6D6D6;padding-bottom: 0.3rem;}
			.product_wrap .product_item_wrap:last-child{
				border-bottom: 0;padding-bottom: 0.1rem;
			}
			.product_item_padding{padding-left:4%;}
		    .product_item{padding: 0.24rem  0;border-bottom: 1px solid #D6D6D6;}
		    .product_item .name{display: inline-block;font-size: 0.3rem;color:#1D1D1D;}
		    .product_item .value{display: inline-block;font-size: 0.3rem;color:#1D1D1D;float: right;padding-right: 4%;}
		    .product_item .value input{border: 0;outline: none;text-align:right;font-size: 0.3rem;color:#1D1D1D;background: #fff;}
		    .product_item .value p{font-size: 0.24rem;color: #4A77B0;border-bottom: 1px solid #4A77B0;}
		    .product_item .value img{width:0.3rem;height:0.3rem;}
		    input::-webkit-input-placeholder{
				font-family: "微软雅黑";
				font-size: 0.24rem;
				color: #999999;
			}
			.total_money{padding-left: 4%;background: #fff;margin-top: 0.2rem;}
			.pay_fangshi{display: inline-block; width:0.8rem;height:0.4rem;line-height: 0.4rem; background:#f7f7f7;text-align: center;
			  margin:0 0.2rem 0.25rem 0;
			}
			 .pay_fangshi.active{background:#f7f7f7}
			.pay_fangshi.active span{color: #4A77B0;}
			.pay_fangshi span{font-size: 0.24rem;line-height: 0.4rem; 
				color: #1D1D1D;}
			.tishi_text{padding: 0.3rem 4%;background: #fff;}
			.tishi_text p{font-size: 0.26rem;color:#4A77B0;line-height: 0.52rem;}
			.gouxuan{width:100%;background: #fff;text-align:center;padding:0.3rem 0;}
			.gouxuan label{font-size: 0.26rem;color:#1D1D1D;text-decoration: underline;padding-left: 0.1rem;vertical-align:middle;}
			textarea{width:96%;outline: none;font-size: 16px;}
			.explain{
				width: 92%;
	      margin:0.3rem auto;
			}
			
			.textEx{
	    padding: 0.18rem 2%;
    background: #fff;
    resize: none;
   border: none;
    border-radius: 3px;
    box-shadow:0px 2px 5px 0px rgba(104,104,104,0.4);
}
		
		textarea::-webkit-input-placeholder{
			font-family: "微软雅黑";
			color: #999;
			font-size: 14px;
		}
		.check_wrap{display: inline-block; width:0.3rem;height:0.3rem;position: relative;vertical-align: middle;}
			 .check_wrap input{width:0.3rem;height:0.3rem;position:absolute;top:0;left:0;z-index: 999;opacity: 0;}
             .xuanzhong{display: inline-block; width:0.3rem;height:0.3rem;background:url(../../assets/images/xuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;z-index: 998;}    
             .noxuanzhong{display: inline-block; width:0.3rem;height:0.3rem;background:url(../../assets/images/noxuanzhongf.png) no-repeat;background-size:100% ;position:absolute;top:0;left:0;}					
		    .qianming_wrap{background: #fff;height:1rem;width:100%;padding-top:0.5rem;}
		    .qianming{padding:0 4%;}
		    .qianming input{width:50%;border: none;border-bottom: 1px solid #D6D6D6;}
		     .qianname{float: left;width:46%;height:60px;position: relative;}
		     .qianname img{vertical-align: text-top;position: relative;top:-0.3rem;}
		     .qianname span{font-size:0.3rem ;color:#1D1D1D;}
		     .qiantime span{font-size:0.3rem ;color:#1D1D1D;}
		      .qiantime{float: right;width:46%;height:60px;}
		    .baocun_wrap{padding:0.6rem 4% 0.6rem 4% ;background: #fff;} 
		    .baocun3{width:100%;height:0.8rem;line-height: 0.8rem;text-align: center;background: #4978B0;border-radius: 10px;}
		    .baocun3 span{font-size: 0.36rem;color: #FFFFFF;} 
		   /* 签名*/
		  #signatureparent {
				color:#000;
				height:420px!important;width:100%!important;
             }
	#signature {
		/*border: 2px dotted black;*/
		/*background-color:lightgrey;*/
	}
 
	html.touch #content {
		/*float:left;*/
		width:100%;
	}
	
	html.borderradius #scrollgrabber {
		border-radius: 1em;
	}
	#displayarea img{width:30%;height:30px;}
	.jSignature{height:420px!important;width:100%!important;}
	/*#baocun{background: #999;}*/
	#xuanzhuan{position: fixed;top:0;left:0;right: 0;bottom: 0;background: #fff;z-index:999;}
	canvas{background-color: #fff!important;}
	#save{height:50px;width:80px;margin:0 auto;}
	@media only screen and (min-width: 500px) {
       #signatureparent {
		color:#000;
		height:200px!important;width:100%!important;
	  }
	  .jSignature{height:200px!important;width:100%!important;}
	}
	.box{padding: 0 0.3rem;}
	    .select{height:0.6rem;border: none;outline: none;padding-left:0.2rem;}
	    .zhiqingshu{padding:0 0.3rem;}
	    .zhiqingshu p{font-size:0.28rem;color:#2D2D2D;line-height: 0.4rem;}
	    #save{width:47%;height:0.6rem;line-height:0.6rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.4rem;}
	    
	     #save span,#baocun span,#clear span{font-size:0.28rem ;color:#fff;}
	     #baocun{float: right;width:47%;height:0.8rem;line-height:0.8rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.3rem;color:#fff;}
	     #clear{float:left;width:47%;height:0.8rem;line-height:0.8rem;background: #fff;border-radius: 10px;text-align: center;
	          margin-bottom: 0.3rem;font-size:0.28rem ;color:#4A77B0;border:1px solid rgba(74,119,176,1);border-radius:10px; }
	     #tools{height:0.8rem;padding:0 4%;}
	     .pictrue{vertical-align: middle;}
	     .box{padding: 0 0.3rem;background: #fff;}
	    .select{height:0.6rem;border: none;outline: none;padding-left:0.2rem;}
	    .zhiqingshu{padding:0 0.3rem;}
	    .zhiqingshu p{font-size:0.28rem;color:#2D2D2D;line-height: 0.4rem;}
	    #save{width:47%;height:0.6rem;line-height:0.6rem;background: #4A77B0;border-radius: 10px;text-align: center;
	          margin-bottom: 0.4rem;}
	    #clear span{font-size:0.28rem ;color:#4A77B0;}
	     #save span,#baocun span,{font-size:0.28rem ;color:#fff;}
	     #tools{height:0.8rem;padding:0 4%;}
	     .qianzi_wrap{height:60px;}
	     /*.qianzi_time{margin-bottom: 20px;}*/
	    #yuangongname{display: inline-block;color:#2D2D2D;}
</style>
