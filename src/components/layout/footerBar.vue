<template>
  <footer class="footer-wrapper df-c border-half-top">
    <div
      :class="$route.matched[0].path==item.path||$route.matched[0].path=='/experience/customerAnalysis'&&item.path=='/experience'||$route.matched[0].path=='/experience/staffAnalysis'&&item.path=='/experience'?'footers':''"
      v-for="(item, index) in footerBarList"
      :key="index"
      @click="visit(item.title,item.path)"
    >
      <img
        :src="$route.matched[0].path==item.path||$route.matched[0].path=='/experience/customerAnalysis'&&item.path=='/experience'||$route.matched[0].path=='/experience/staffAnalysis'&&item.path=='/experience'?item.activeUrl:item.url"
      >
      <p>{{item.title}}</p>
    </div>
  </footer>
</template>

<script>
 export default {
   data () {
     return {
       footerBarList:[
         {title: '首页', url:require('../../assets/images/tab_nor_icon1@2x.png'),activeUrl:require('../../assets/images/tab_set_icon1@2x.png'),path: '/home'},
         {title: '客户管理', url:require('../../assets/images/tab_nor_icon2@2x.png'),activeUrl:require('../../assets/images/tab_set_icon2@2x.png'), path: '/customer'},
         {title: '经营管理', url:require('../../assets/images/tab_nor_icon3@2x.png'),activeUrl:require('../../assets/images/tab_set_icon3@2x.png'), path: '/experience'},
         {title: '我的', url:require('../../assets/images/tab_nor_icon4@2x.png'),activeUrl:require('../../assets/images/tab_set_icon4@2x.png'), path: '/me'}
       ]
     }
   },
   methods:{
     visit(title,path){
       var operatingFlag=0;
       	if(this.$store.state.jurisdiction.length>0){
            this.$store.state.jurisdiction.forEach(item => {
             switch(title){
            case '客户管理':
              if(item.permissionName == '客户管理'){
               operatingFlag=1;
            }
                break;
              case '经营管理':
                	if(item.permissionName == '经营管理'){
               operatingFlag=1;
            }
                   break;
              } 
       });
         }
        if(operatingFlag==0&&path!='/home'&&path!='/me'){
                  this.config.showTip(this,"无权限访问");
           return;
        }
      	 this.$router.push({
                 path:path
           })
     }
   }
 }
</script>

<style scoped lang="less">
.footer-wrapper {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999999;
  background-color: #fff;
  font-size: 0.2rem;
  padding: 0.02rem 0;
  padding-bottom: 0;
  border-top: 1px solid #f7f7f7;
  left: 50%;
  margin-left: -50%;
  div {
    flex: 1;
    text-align: center;
    color: #252424;
    padding-top: 0.1rem;
    margin-bottom: 0.02rem;
    img {
      width: 0.45rem;
      margin-bottom: 0.03rem;
    }
  }
  div:nth-of-type(2) {
    img {
      margin-bottom: 0.099rem;
    }
    p {
      margin-top: 0.01rem;
    }
  }
  div:nth-of-type(3) {
    img {
      margin-bottom: 0.04rem;
    }
    p {
      margin-top: 0.01rem;
    }
  }
  div:nth-of-type(4) {
    img {
      width: 0.4rem;
    }
  }
}
.footers {
  background-color: #dce4f1;
  border-radius: 5px;
  // margin-bottom: 0.02rem;
  color: #4978b0 !important;
  // padding-top: 0.08rem;
}
.active {
  color: yellow !important;
}
</style>
