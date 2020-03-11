<template>
 <div class='container'>
  <img class="generateImg" :src="dataURL" />
		<!-- <div class="middle-warp" v-for="(item,index) in ImgList" :key="index" :style="{width:item.imgWidth+'px',height:item.imgHeight+'px'}" v-show="middleflag">>
			<div id="content" class="middle-content" ref="content">
				<div id="shareContent" class="share-content">
					<div class="share-product">
						<img class="pd-img" :src="shareImages" />
						<div class="pd-bottom">
						</div>
						<div id="qrcode" class="pd-qrcode" :style="{top:parseInt(item.qrCodeTop)+10+'px',left:parseInt(item.qrCodeLeft)+10+'px'}">
                            <qrcode :value="qrvalue" :size="qrwidth" :fg-color="fgColor"></qrcode>
                        </div>
					</div>
				</div>
			</div>
		</div>
		<div class="finall"></div> -->
       <div class="weui-loadmore">
			<i class="weui-loading"></i>
			<span class="weui-loadmore__tips">正在加载</span>
		</div>
        <div v-show="middleflag" ref="content" v-for="(item,index) in ImgList" :key="index"  :style="{ background:'url('+shareImages+') no-repeat',backgroundSize:100+'%', width:item.imgWidth+'px',height:item.imgHeight+'px',position:'relative'}">
              <qrcode :style="{position:'absolute',top:parseInt(item.qrCodeTop)+10+'px',left:parseInt(item.qrCodeLeft)+10+'px'}" :value="qrvalue" :size="qrwidth" :fg-color="fgColor"></qrcode>
        </div>
      </div>

</template>

<script>
// import {html2canvas} from 'html2canvas'
import { Qrcode } from 'vux'
 export default {
   data () {
     return {
       userCode1: this.$route.query.code,
        couponId1: this.$route.query.id,
        packageName1:this.$route.query.name ,  
        states:"",
        ImgList:[],
        qrwidth:"",
        qrheight:"",
        shareTitle:"",
        shareDes:"",
        shareImages:"",
        qrvalue:"",
        dataURL:"",
        middleflag:true,
        fgColor: '#000000'
     }
   },
   created(){
       this.getstates()
   },
   methods: {
     getstates(){  
         this.instance.$post('/rest/wx/coupon/makeCouponParam',{
            userCode: this.userCode1,
			couponId:  this.couponId1,
			packageName:  this.packageName1
         },res => {
       console.log(res);
       if(res.status){
           this.states = res.message;
           console.log(888888)
           console.log(this.states)
           this.getmoban(1)
       }
       })
     },
     getmoban(rate){
         this.instance.$post('/rest/wx/imgtemplate/getImgTemplateList',{
             couponId: this.couponId1
         },res => {
       console.log(res);
       if(res.status){
           this.ImgList.push(res.rows[0])
           this.qrwidth = parseInt(res.rows[0].qrCodeWidth)-20
            this.qrheight =  parseInt(res.rows[0].qrCodeHeight)-20
            this.shareTitle = res.rows[0].title
            this.shareDes =  res.rows[0].content
            this.shareImages = this.config.service_ip+ "/template/image/" + res.rows[0].templateName;            
           console.log( this.qrwidth)
           this.getmessage(1)
       }
      
      },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
     },
     //生成短链接
     getmessage(rate){
          this.instance.$post('/rest/wx/shortLink/makeShortLink',{
			 linkName:this.packageName1,
			 //测试
			//  url:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8cde01241502db2b&redirect_uri=http%3A%2F%2Ftest.physicalclub.com%2Frest%2Fwx%2Flogin%2FsaleLink&response_type=code&scope=snsapi_userinfo&state=" + this.states + "#wechat_redirect"
			//正式
			 url:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0c02c2653bfc3cfa&redirect_uri=http%3A%2F%2Fcrm.physicalclub.com%2Frest%2Fwx%2Flogin%2FsaleLink&response_type=code&scope=snsapi_userinfo&state=" + this.states + "#wechat_redirect"
         },res => {
             console.log('生成短链接')
       console.log(res);
       if(res.status){
           this.qrvalue = res.message;
           console.log('123')
           console.log(this.qrvalue) 
		   this.$nextTick(function () {
             this.toImage()
         })             
       }else{
		   //测试
		    //  this.qrvalue = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8cde01241502db2b&redirect_uri=http%3A%2F%2Ftest.physicalclub.com%2Fcrm%2Frest%2Fwx%2Flogin%2FsaleLink&response_type=code&scope=snsapi_userinfo&state=" + this.states + "#wechat_redirect"; 
		   //正式
		   this.qrvalue = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0c02c2653bfc3cfa&redirect_uri=http%3A%2F%2Fcrm.physicalclub.com%2Fcrm%2Frest%2Fwx%2Flogin%2FsaleLink&response_type=code&scope=snsapi_userinfo&state=" + this.states + "#wechat_redirect";
        this.$nextTick(function () {
              this.toImage()
         }) 
      }
      },error=>{ this.$refs.loadmore.onTopLoaded()},rate)
     },
     toImage(){
        html2canvas(this.$refs.content,{
            backgroundColor: null
        }).then((canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            this.dataURL = dataURL;
            this.middleflag = false;
              $('.weui-loadmore').hide();
              this.fenxiangjs()
        });
},
//分享
fenxiangjs(){
    var _that = this;
    //alert(location.href)
     var fang = location.href.split("#")[0];
    // var cheng = location.href.split("#")[1];
	//  var feng = cheng.substr(1)
	// var feng1 = fang +feng
 var link = fang;
 //alert(link)
		var data = {
			code: 1003,
			url: link
        }
		$.ajax({
			type: "post",
			url: this.config.service_ip + "/rest/wx/login/getQYparam", 
			data: data,
			success: function(res) {
                    console.log('签名') 
                    console.log(res) 
				 //alert(res.signature) 
				wx.config({
                    beta:true,
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
					appId: "wx5f8f3a976bb14c88", // 公众号的唯一标识
					timestamp: res.timestamp, // 生成签名的时间戳
					nonceStr: res.nonce_str, // 生成签名的随机串
					signature: res.signature, // 签名
					jsApiList: [
                        'checkJsApi',
						"onMenuShareTimeline",
						"onMenuShareAppMessage"
					] // 需要使用的JS接口列表
				});
                // wx.error(function(res) {alert('验证失败')});
                	//			分享好友,朋友圈
            wx.ready(function(res) {
                wx.onMenuShareAppMessage({
                    title: _that.shareTitle,
                    desc: _that.shareDes,
                    link: location.href,
                    imgUrl: _that.shareImages,
                    trigger: function(res) {},
                    success: function(res) {},
                    cancel: function(res) {},
                    fail: function(res) { }
                });
                wx.onMenuShareTimeline({
                    title: _that.shareDes + "【" + _that.shareTitle + "】",
                    link: location.href,
                    imgUrl:_that.shareImages,
                    trigger: function(res) {},
                    success: function(res) {},
                    cancel: function(res) {},
                    fail: function(res) {}
                });
            });
			},
			error: function() {
				alert('网络请求中断,请稍后重试!')
			}
		});
},
   },
   mounted(){
   
   },
   components: {
      Qrcode
   }
 }
</script>

<style scoped lang="less">
.weui-loadmore {
                position: absolute;
                top:0;
                left:0;
                width: 100%;
                height:100%;
                z-index: 9999999;
                background: #fff;
			}
            img{
                width: 100%;
                height: auto;
                vertical-align: bottom;
            }
  			.share-save-img {
				height: 50px;
				width: 100%;
				text-align: center;
				line-height: 50px;
				font-size: 14px;
				color: white;
			}
			
			.middle-warp {
				/*width: 746px;
				height: 1206px;*/
				position: absolute;
				top: 0;
			}
			
			.share-save-img:active {
				color: #19B5FE;
			}
			/*分享内容*/
			
			.share-content {
				position: relative;
				width: 100%;
				height: 100%;
				/*height: 300px;*/
				/*margin: auto;*/
				/*background-color: white;*/
			}
			
			.share-content .share-close {
				z-index: 99;
				position: absolute;
				top: -15px;
				right: -15px;
				width: 50px;
				height: 50px;
				padding: 15px;
				opacity: .8;
			}
			/*分享*/
			
			.share-content.radius {
				border-radius: 15px;
				background-color: #FAFAFA;
				color: white;
			}
			
			.share-product {
				position: relative;
				background-color: #fff;
			}
			
			.share-product .pd-bottom {
				padding: 20px 130px 10px 10px;
			}
			
			.share-product .pd-name {
				font-size: 13px;
				line-height: 19px;
				text-align: left;
				height: 58px;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				color: black;
			}
			
			.share-product .pd-price-act {
				margin-top: 18px;
				font-size: 30px;
				text-align: left;
				color: #FF5039;
			}
			
			.share-product .pd-price-old {
				padding-bottom: 6px;
				margin-top: 8px;
				font-size: 12px;
				text-align: left;
				color: #999;
			}
			
			.share-product .pd-qrcode {
				position: absolute;
			}
			
			.share-product .qr-logo {
				z-index: 999;
				position: absolute;
				right: 45px;
				bottom: 74px;
				width: 28px;
				border: 2px solid white;
				border-radius: 8px;
			}
			
			.share-product .pd-scan-tip {
				position: absolute;
				right: 12px;
				bottom: 15px;
				font-size: 11px;
				color: #888;
			}
			
			.share-product .shareqr-logo {
				z-index: 99;
				position: absolute;
				left: 20px;
				top: 0;
				width: 90px;
			}
			
			.share-product .ticket-icon {
				z-index: 99;
				position: absolute;
				left: 50%;
				top: 260px;
				margin-left: -55px;
				width: 110px;
			}
			
			.scale-content .share-welfare .qr-logo {
				z-index: 99;
				position: absolute;
				left: 50%;
				top: 520px;
				width: 60px;
				height: 60px;
				margin-left: -30px;
				border-radius: 10px;
				border: 4px solid white;
			}
			
			.finall {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				background-color: #fff;
				z-index: 99999;
			}
			
			.generateImg {
				width: 100%;
				position: absolute;
				z-index: 999999;
			}
 
</style>
