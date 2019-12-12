import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'rsvp';
Vue.use(Router);
sessionStorage.setItem("isBack", true);
window.addEventListener('popstate', () => {
  sessionStorage.setItem("isBack", false);
}, false)
// 导入组件
const home = () => import('../components/home/home.vue')
const empPerformance = () => import('../components/home/empPerformance.vue')
const yejidetail = () => import('../components/home/yeji_detail.vue')
const fenxiangmenu = () => import('../components/home/fenxiang_menu.vue')
const fenxianglist = () => import('../components/home/fenxianglist.vue')
const tiyankayiling = () => import('../components/home/tiyankayiling.vue')
const fenxianghaibao = () => import('../components/home/fenxianghaibao.vue')
const meirongshouye = () => import('../components/home/meirongshouye.vue')
const kehudang = () => import('../components/home/kehudang.vue')
const cusjiben = () => import('../components/home/cusjiben.vue')
const cusjibeninfo = () => import('../components/home/cusjibeninfo.vue')
const chajibeninfo = () => import('../components/home/chajibeninfo.vue')
const cusjibeninfobian = () => import('../components/home/cusjibeninfobian.vue')
const panzhenlist = () => import('../components/home/panzhenlist.vue')
const panzhenbiao = () => import('../components/home/panzhenbiao.vue')
const panzhendetail = () => import('../components/home/panzhendetail.vue')
const panzhenbian = () => import('../components/home/panzhenbian.vue')
const addmeicus = () => import('../components/home/addmeicus.vue')
const servicecode = () => import('../components/home/servicecode.vue')
const daibanlist1 = () => import('../components/home/daibanlist1.vue')
const daibanlist = () => import('../components/home/daibanlist.vue')
const cusjiedai = () => import('../components/home/cusjiedai.vue')
const questionlist = () => import('../components/home/question_list.vue')
const gfpquestion = () => import('../components/home/gfpquestion.vue')
const parquestion = () => import('../components/home/parquestion.vue')
const guwenjie = () => import('../components/home/guwenjie.vue')
const zhiqingImg = () => import('../components/home/zhiqingImg.vue')
const chagfp = () => import('../components/home/chagfp.vue')
const chagfp1 = () => import('../components/home/chagfp1.vue')
const chapar = () => import('../components/home/chapar.vue')
const chapar1 = () => import('../components/home/chapar1.vue')
const zhiqinglist = () => import('../components/home/zhiqinglist.vue')
const zhiqinginfo = () => import('../components/home/zhiqinginfo.vue')
const zhishow = () => import('../components/home/zhishow.vue')
const chaguwenjie = () => import('../components/home/chaguwenjie.vue')
const inbodylist = () => import('../components/home/inbodylist.vue')
const inbodydetail = () => import('../components/home/inbodydetail.vue')
const inbodyduibi = () => import('../components/home/inbodyduibi.vue')
const inbodylishi = () => import('../components/home/inbodylishi.vue')
const shoudianziht = () => import('../components/home/shoudianziht.vue')
const inbodydetailID = () => import('../components/home/inbodydetailID.vue')
const classhour = () => import('../components/home/classhour.vue')
const classpublish = () => import('../components/home/classpublish.vue')
const amymanagement = () => import('../components/home/amymanagement.vue')
const sideHistory = () => import('../components/customer/sideHistory.vue')
const customer = () => import('../components/customer/customerManagement.vue')
const customerDetail = () => import('../components/customer/customerDetail.vue')
const addclient = () => import('../components/customer/add_client.vue')
const yuandaihui = () => import('../components/customer/yuandaihui.vue')
const yuanlishi = () => import('../components/customer/yuanlishi.vue')
const bugenjin = () => import('../components/customer/bugenjin.vue')
const yuandengjieg = () => import('../components/customer/yuandengjieg.vue')
const yuannewhuifang = () => import('../components/customer/yuannew_huifang.vue')
const newhuifang = () => import('../components/customer/newhuifang.vue')
const goumaiht = () => import('../components/customer/goumaiht.vue')
const dianzihetong = () => import('../components/customer/dianzihetong.vue')
const hetongdetail = () => import('../components/customer/hetongdetail.vue')
const tcdetails = () => import('../components/customer/tc_details.vue')
const kedaihuifang = () => import('../components/customer/kedaihuifang.vue')
const kehuilishi = () => import('../components/customer/kehuilishi.vue')
const package_details = () => import('../components/customer/package_details.vue')
const tigetcus = () => import('../components/customer/tigetcus.vue')
const cuszhiqing = () => import('../components/customer/cuszhiqing.vue')
const jiedaidetail = () => import('../components/customer/jiedaidetail.vue')
const selectceshi = () => import('../components/customer/selectceshi.vue')
const inbodypic = () => import('../components/customer/inbodypic.vue')
const jingpg = () => import('../components/customer/jingpg.vue')
const dongpg = () => import('../components/customer/dongpg.vue')
const ticepgbao = () => import('../components/customer/ticepgbao.vue')
const ticepgbaoli = () => import('../components/customer/ticepgbaoli.vue')
const dianzihetxieyi = () => import('../components/customer/dianzihetxieyi.vue')
const todayadd = () => import('../components/customer/todayadd.vue')
const todayadddetail = () => import('../components/customer/todayadddetail.vue')
const todaycheng = () => import('../components/home/todaycheng.vue')

const experience = () => import('../components/experience/experienceManagement.vue')
const customerAnalysis = () => import('../components/experience/customerAnalysis.vue')
const staffAnalysis = () => import('../components/experience/staffAnalysis.vue')
const personalAchievement = () => import('../components/experience/personalAchievement.vue')
const me = () => import('../components/me/me.vue')
const targetbianji = () => import('../components/me/targetbianji.vue')
const parsontarget = () => import('../components/me/person_target.vue')
const tianjiatarget = () => import('../components/me/tianjiatarget.vue')
const yuanuppic = () => import('../components/me/yuanuppic.vue')
const newticepinggu = () => import('../components/home/newticepinggu.vue')

const Course = () => import('../components/home/course/Course.vue')
const Qr = () => import('../components/home/course/Qr.vue')
const Appointment = () => import('../components/home/course/Appointment.vue')

export default new Router({
  //mode:'history',
  base: '/per/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home/course',
      meta: { title: '团操课表', keepAlive: false },
      name: "course",
      component: Course,
    },
    {
      path: '/home/course/qr',
      meta: { title: '团操课程码', keepAlive: false },
      name: "qr",
      component: Qr
    },
    {
      path: '/home/course/appointment',
      meta: { title: '团操详情', keepAlive: false },
      name: "appointment",
      component: Appointment
    },
    {
      path: '/home',
      meta: { slide: 1, title: '中航健康', keepAlive: false },
      name: "home",
      component: home
    },
    {
      path: '/home/empPerformance',
      meta: { title: '业绩查询', keepAlive: false },
      name: "empPerformance",
      component: empPerformance
    },
    {
      path: '/home/classhour',
      meta: { title: '课时管理', keepAlive: false },
      name: "classhour",
      component: classhour
    },

    {
      path: '/home/shoudianziht',
      meta: { title: '电子合同', keepAlive: false },
      name: "shoudianziht",
      component: shoudianziht
    },


    {
      path: '/home/yejidetail',
      meta: { title: '业绩查询', keepAlive: false },
      name: "yejidetail",
      component: yejidetail
    },
    {
      path: '/home/fenxiangmenu',
      meta: { title: '体验卡', keepAlive: false },
      name: "fenxiangmenu",
      component: fenxiangmenu
    },
    {
      path: '/home/fenxianglist',
      meta: { title: '体验卡券', keepAlive: false },
      name: "fenxianglist",
      component: fenxianglist
    },
    {
      path: '/home/tiyankayiling',
      meta: { title: '体验卡券', keepAlive: false },
      name: "tiyankayiling",
      component: tiyankayiling
    },

    {
      path: '/home/meirongshouye',
      meta: { title: '我的客户', keepAlive: false },
      name: "meirongshouye",
      component: meirongshouye
    },
    {
      path: '/home/addmeicus',
      meta: { title: '添加会员', keepAlive: false },
      name: "addmeicus",
      component: addmeicus
    },

    {
      path: '/home/kehudang',
      meta: { title: '客户档案', keepAlive: false },
      name: "kehudang",
      component: kehudang
    },
    {
      path: '/home/cusjiben',
      meta: { title: '客户基本信息列表', keepAlive: false },
      name: "cusjiben",
      component: cusjiben
    },

    {
      path: '/home/cusjibeninfo',
      meta: { title: '客户基本信息', keepAlive: false },
      name: "cusjibeninfo",
      component: cusjibeninfo
    },
    {
      path: '/home/chajibeninfo',
      meta: { title: '客户基本信息', keepAlive: false },
      name: "chajibeninfo",
      component: chajibeninfo
    },
    {
      path: '/home/cusjibeninfobian',
      meta: { title: '客户基本信息', keepAlive: false },
      name: "cusjibeninfobian",
      component: cusjibeninfobian
    },
    {
      path: '/home/zhiqinglist',
      meta: { title: '客户知情书', keepAlive: false },
      name: "zhiqinglist",
      component: zhiqinglist
    },
    {
      path: '/home/zhiqinginfo',
      meta: { title: '客户知情书', keepAlive: false },
      name: "zhiqinginfo",
      component: zhiqinginfo
    },
    {
      path: '/home/zhishow',
      meta: { title: '客户知情书', keepAlive: false },
      name: "zhishow",
      component: zhishow
    },
    {
      path: '/home/panzhenlist',
      meta: { title: '健康判诊列表', keepAlive: false },
      name: "panzhenlist",
      component: panzhenlist
    },
    {
      path: '/home/panzhenbiao',
      meta: { title: '健康判诊列表', keepAlive: false },
      name: "panzhenbiao",
      component: panzhenbiao
    },
    {
      path: '/home/panzhendetail',
      meta: { title: '健康判诊列表', keepAlive: false },
      name: "panzhendetail",
      component: panzhendetail
    },
    {
      path: '/home/panzhenbian',
      meta: { title: '健康判诊列表', keepAlive: false },
      name: "panzhenbian",
      component: panzhenbian
    },
    {
      path: '/home/servicecode',
      meta: { title: '项目服务记录', keepAlive: false },
      name: "servicecode",
      component: servicecode
    },
    {
      path: '/home/fenxianghaibao',
      meta: { title: '分享体验卡券', keepAlive: false },
      name: "fenxianghaibao",
      component: fenxianghaibao
    },
    {
      path: '/home/cusjiedai',
      meta: { title: '问卷调查', keepAlive: false },
      name: "cusjiedai",
      component: cusjiedai,
      children: [
        {
          path: "gfpquestions",
          name: "gfpquestions",
          component: gfpquestion,
          meta: { title: 'GFP与健康目标' }
        },
        {
          path: "chagfps",
          name: "chagfps",
          component: chagfp,
          meta: { title: 'GFP与健康目标' }
        },
        {
          path: "parquestions",
          name: "parquestions",
          component: parquestion,
          meta: { title: 'PAR-Q问卷' }
        },
        {
          path: "chapars",
          name: "chapars",
          component: chapar,
          meta: { title: 'PAR-Q问卷' }
        },
        {
          path: "guwenjies",
          name: "guwenjies",
          component: guwenjie,
          meta: { title: '顾问接待总结报告' }
        },
        {
          path: "chaguwenjies",
          name: "chaguwenjies",
          component: chaguwenjie,
          meta: { title: '顾问接待总结报告' }
        }
      ]
    },
    {
      path: '/home/questionlist',
      meta: { title: '问卷调查', keepAlive: false },
      name: "questionlist",
      component: questionlist
    },
    {
      path: '/home/gfpquestion',
      meta: { title: 'GFP与健康目标', keepAlive: false },
      name: "gfpquestion",
      component: gfpquestion
    },
    {
      path: '/home/chagfp',
      meta: { title: 'GFP与健康目标', keepAlive: false },
      name: "chagfp",
      component: chagfp
    },
    {
      path: '/home/chagfp1',
      meta: { title: 'GFP与健康目标', keepAlive: false },
      name: "chagfp1",
      component: chagfp1
    },
    {
      path: '/home/chapar',
      meta: { title: 'PAR-Q问卷', keepAlive: false },
      name: "chapar",
      component: chapar
    },
    {
      path: '/home/chapar1',
      meta: { title: 'PAR-Q问卷', keepAlive: false },
      name: "chapar1",
      component: chapar1
    },
    {
      path: '/home/parquestion',
      meta: { title: 'PAR-Q问卷', keepAlive: false },
      name: "parquestion",
      component: parquestion
    },
    {
      path: '/home/guwenjie',
      meta: { title: '顾问接待总结报告', keepAlive: false },
      name: "guwenjie",
      component: guwenjie
    },

    {
      path: '/home/chaguwenjie',
      meta: { title: '顾问接待总结报告', keepAlive: false },
      name: "chaguwenjie",
      component: chaguwenjie
    },

    {
      path: '/home/inbodylist',
      meta: { title: '体测数据', keepAlive: false },
      name: "inbodylist",
      component: inbodylist
    },
    {
      path: '/home/inbodydetail',
      meta: { title: '体测数据', keepAlive: false },
      name: "inbodydetail",
      component: inbodydetail
    },
    {
      path: '/home/inbodydetailID',
      meta: { title: '体测数据', keepAlive: false },
      name: "inbodydetailID",
      component: inbodydetailID
    },
    {
      path: '/home/inbodyduibi',
      meta: { title: '体测数据对比', keepAlive: false },
      name: "inbodyduibi",
      component: inbodyduibi
    },
    {
      path: '/home/inbodylishi',
      meta: { title: '体测数据历史记录', keepAlive: false },
      name: "inbodylishi",
      component: inbodylishi
    },
    {
      path: '/home/classpublish',
      meta: { title: '课时发布', keepAlive: false },
      name: "classpublish",
      component: classpublish
    },
    {
      path: '/home/amymanagement',
      meta: { title: '我的预约', keepAlive: false },
      name: "amymanagement",
      component: amymanagement
    },


    {
      path: '/customer',
      component: customer,
      name: "customer",
      meta: { slide: 6, title: "客户管理", keepAlive: true }
    },

    {
      path: '/home/daibanlist1',
      component: daibanlist1,
      name: "daibanlist1",
      meta: { title: "待办", keepAlive: false }
    },
    {
      path: '/home/daibanlist',
      component: daibanlist,
      name: "daibanlist",
      meta: { title: "待办", keepAlive: false }
    },
    {
      path: '/customer/addclient',
      component: addclient,
      name: "addclient",
      meta: { slide: 1, title: "添加客户", keepAlive: false }
    },
    {
      path: '/customer/customerDetail',
      component: customerDetail,
      name: "customerDetail",
      meta: { title: "客户详情", keepAlive: false }
    },
    {
      path: '/customer/dianzihetxieyi',
      meta: { title: '电子合同购买协议', keepAlive: false },
      name: "dianzihetxieyi",
      component: dianzihetxieyi
    },
    {
      path: '/customer/yuandaihui',
      component: yuandaihui,
      name: "yuandaihui",
      meta: { title: "等待回访", keepAlive: false }
    },
    {
      path: '/customer/yuanlishi',
      component: yuanlishi,
      name: "yuanlishi",
      meta: { title: "回访历史", keepAlive: false }
    },
    {
      path: '/customer/bugenjin',
      component: bugenjin,
      name: "bugenjin",
      meta: { title: "不跟进客户", keepAlive: false }
    },
    {
      path: '/customer/hetongdetail',
      component: hetongdetail,
      name: "hetongdetail",
      meta: { title: "电子合同", keepAlive: false }
    },
    {
      path: '/customer/yuandengjieg',
      component: yuandengjieg,
      name: "yuandengjieg",
      meta: { title: "登记回访结果", keepAlive: false }
    },
    {
      path: '/customer/yuannewhuifang',
      component: yuannewhuifang,
      name: "yuannewhuifang",
      meta: { title: "新建回访计划", keepAlive: false }
    },
    {
      path: '/customer/newhuifang',
      component: newhuifang,
      name: "newhuifang",
      meta: { slide: 1, title: "新建回访计划", keepAlive: false }
    },

    {
      path: '/customer/dianzihetong',
      component: dianzihetong,
      name: "dianzihetong",
      meta: { title: "电子合同", keepAlive: false }
    },
    {
      path: '/customer/goumaiht',
      component: goumaiht,
      name: "goumaiht",
      meta: { slide: 1, title: "购买合同", keepAlive: false }
    },
    {
      path: '/customer/kedaihuifang',
      component: kedaihuifang,
      name: "kedaihuifang",
      meta: { title: "待回访", keepAlive: false }
    },
    {
      path: '/customer/kehuilishi',
      component: kehuilishi,
      name: "kehuilishi",
      meta: { title: "回访历史", keepAlive: false }
    },

    {
      path: '/customer/package_details',
      component: package_details,
      name: "package_details",
      meta: { title: "套餐详情", keepAlive: false }
    },

    {
      path: '/customer/tcdetails',
      component: tcdetails,
      name: "tcdetails",
      meta: { title: "套餐明细", keepAlive: false }
    },
    {
      path: '/customer/tigetcus',
      component: tigetcus,
      name: "tigetcus",
      meta: { title: "查找客户", keepAlive: false }
    },

    {
      path: '/customer/cuszhiqing',
      component: cuszhiqing,
      name: "cuszhiqing",
      meta: { title: "客户知情书", keepAlive: false }
    },
    {
      path: '/customer/jiedaidetail',
      component: jiedaidetail,
      name: "jiedaidetail",
      meta: { title: "问卷调查历史", keepAlive: false },
      children: [
        {
          path: "chagfps1",
          name: "chagfps1",
          component: chagfp,
          meta: { title: 'GFP与健康目标' }
        },
        {
          path: "chapars1",
          name: "chapars1",
          component: chapar,
          meta: { title: 'PAR-Q问卷' }
        },
        {
          path: "chaguwenjies1",
          name: "chaguwenjies1",
          component: chaguwenjie,
          meta: { title: '顾问接待总结报告' }
        }
      ]
    },
    {
      path: '/customer/selectceshi',
      meta: { title: '选择测试内容', keepAlive: false },
      name: "selectceshi",
      component: selectceshi
    },
    {
      path: '/customer/inbodypic',
      meta: { title: '体测评估', keepAlive: false },
      name: "inbodypic",
      component: inbodypic
    },
    {
      path: '/customer/jingpg',
      meta: { title: '体态静态评估', keepAlive: false },
      name: "jingpg",
      component: jingpg
    },
    {
      path: '/customer/dongpg',
      meta: { title: 'FMS功能性运动', keepAlive: false },
      name: "dongpg",
      component: dongpg
    },
    {
      path: '/customer/ticepgbao',
      meta: { title: '体测评估报告', keepAlive: false },
      name: "ticepgbao",
      component: ticepgbao
    },
    {
      path: '/customer/ticepgbaoli',
      meta: { title: '体测评估报告', keepAlive: false },
      name: "ticepgbaoli",
      component: ticepgbaoli
    },
    {
      path: '/customer/todayadddetail',
      meta: { title: '客户基本信息', keepAlive: false },
      name: "todayadddetail",
      component: todayadddetail
    },
    {
      path: '/customer/todayadd',
      meta: { title: '新增客户', keepAlive: false },
      name: "todayadd",
      component: todayadd
    },
    {
      path: '/customer/todaycheng',
      meta: { title: '成交客户', keepAlive: false },
      name: "todaycheng",
      component: todaycheng
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience,
      meta: { slide: 1, title: "经营管理", keepAlive: false }
    },
    {
      path: '/customer/sideHistory',
      name: 'sideHistory',
      component: sideHistory,
      meta: { title: '体测历史', keepAlive: false },
      children: [
        {
          path: "ticepgbaos1",
          name: "ticepgbaos1",
          component: ticepgbao,
          meta: { title: '体测评估报告' }
        },
        {
          path: "zhiqingImg1",
          name: "zhiqingImg1",
          component: zhiqingImg,
          meta: { title: '签署协议' }
        }
      ]
    },
    {
      path: '/me',
      component: me,
      meta: { slide: 1, title: "我的", keepAlive: false }
    },
    {
      path: '/me/parsontarget',
      component: parsontarget,
      name: "parsontarget",
      meta: { title: "个人目标", keepAlive: false }
    },
    {
      path: '/me/targetbianji',
      component: targetbianji,
      name: "targetbianji",
      meta: { title: "目标编辑", keepAlive: false }
    },
    {
      path: '/me/tianjiatarget',
      component: tianjiatarget,
      name: "tianjiatarget",
      meta: { title: "添加目标", keepAlive: false }
    },
    {
      path: '/experience/customerAnalysis',
      component: customerAnalysis,
      name: "customerAnalysis",
      meta: { title: "经营管理", keepAlive: false }
    },
    {
      path: '/experience/staffAnalysis',
      component: staffAnalysis,
      name: "staffAnalysis",
      meta: { title: "经营管理", keepAlive: false },
      children: [
        {
          path: "personalAchievement",
          name: "personalAchievement",
          component: personalAchievement,
          meta: { title: '个人业绩', keepAlive: false },
        }
      ]
    },
    {
      path: '/me/yuanuppic',
      component: yuanuppic,
      name: "yuanuppic",
      meta: { title: "上传照片", keepAlive: false }
    },
    {
      path: '/home/newticepinggu',
      meta: { title: '体测评估', keepAlive: false },
      name: "newticepinggu",
      component: newticepinggu,
      children: [
        {
          path: "cuszhiqings",
          name: "cuszhiqings",
          component: cuszhiqing,
          meta: { title: '客户知情书' }
        },
        {
          path: "inbodypics",
          name: "inbodypics",
          component: inbodypic,
          meta: { title: '体侧评估' }
        },
        {
          path: "jingpgs",
          name: "jingpgs",
          component: jingpg,
          meta: { title: '体态静态评估' }
        },
        {
          path: "dongpgs",
          name: "dongpgs",
          component: dongpg,
          meta: { title: 'FMS功能性运动' }
        },
        {
          path: "ticepgbaos",
          name: "ticepgbaos",
          component: ticepgbao,
          meta: { title: '体测评估报告' }
        },
        {
          path: "zhiqingImg",
          name: "zhiqingImg",
          component: zhiqingImg,
          meta: { title: '签署协议' }
        }
      ]
    },
  ]
})
