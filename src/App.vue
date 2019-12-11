<template>
  <div id="app">
       
   <keep-alive>
         <router-view id="view" class="huancun" v-if="$route.meta.keepAlive"></router-view>
   </keep-alive>
   <router-view id="view" v-if="!$route.meta.keepAlive&&isRouterAlive"></router-view>
     <!-- <transition :name="animate" mode="out-in">
 <router-view id="view" v-if="!$route.meta.keepAlive"></router-view>
  </transition> -->
   <footerBar v-if="isShow"></footerBar>
  </div>
</template>

<script>
import footerBar from "./components/layout/footerBar.vue";
export default {
  data() {
    return {
      animate: "",
      isShow: true,
      isRouterAlive:true
    };
  },
  provide(){
      return{
          jurisdiction:this.jurisdiction,
          reload: this.reload
      }
  },
  created(){
   
     if (this.$route.fullPath == "/home" || this.$route.fullPath == "/customer" || this.$route.fullPath == "/experience" || this.$route.fullPath == "/experience/customerAnalysis" || this.$route.fullPath == "/experience/staffAnalysis" || this.$route.fullPath == "/me") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      this.jurisdiction()
  },
  methods:{
     jurisdiction(){
         this.instance.$post('/rest/wx/coach/plan/getUserFunctionPermission',{},res => {
					//  console.log('权限')
			//	console.log(JSON.stringify(res));			
				if(res.status){
          var data = res.rows;
          this.$store.state.jurisdiction=data;
				}  
			 })			 
      },
      reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == "/home" || to.path == "/customer" || this.$route.fullPath == "/experience" || this.$route.fullPath == "/experience/customerAnalysis" || this.$route.fullPath == "/experience/staffAnalysis"||to.path == "/me") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      var topath = to.path.split("/").length;
      var frompath = from.path.split("/").length;
      let isBack = sessionStorage.getItem("isBack");
      if (to.path == "/home" || to.path == "/customer" || to.path == "/experience" || to.path == "/me") {
        this.animate = "";
         if (isBack == "false") {
 this.animate = "slide-out";
         }
        sessionStorage.setItem("isBack",true);
      } else {
        if (isBack == "true") {
          this.animate = "slide-fade";
          // to.meta.keepAlive=false;
        } else {
         this.animate = "slide-out";
            // from.meta.keepAlive=true;
        }
        sessionStorage.setItem("isBack", true);
      }
    }
  },
  components: {
    footerBar
  }
};
</script>

<style lang="less">
#app {
  width: 100%;
  height:100%;
}
#view {
  width: 100%;
  height:100%;
}
.slide-fade-enter-active,
.slide-out-enter-active {
  transition: all .4s ease;
}
.slide-fade-enter,
.slide-out-leave-active {
  opacity: 0;
  // -webkit-transform: translate(100px);
  // transform: translate(100px);
}
.slide-fade-leave-active,
.slide-out-enter {
  opacity: 0;
  // -webkit-transform: translate(-100px);
  // transform: translate(-100px);
}

</style>
