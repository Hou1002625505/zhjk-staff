import {MessageBox,Indicator} from "mint-ui";
export default {
    service_ip1: "http://test.physicalclub.com",//测试域名
    service_ip: "http://test.physicalclub.com/crm",//测试接口域名
  
        //  service_ip1: "http://crm.physicalclub.com",//生产域名
        //  service_ip: "http://crm.physicalclub.com", //生产接口域名
     
    formatDate:function (date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        if(month<10){
            month="0"+month;
        }
        return year + '-' + month + '-' + day; 
    },
    formatDate1: function (date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        return year + '-' + month;
    },
    formatDate2:function (date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        if(month<10){
            month="0"+month;
        }
        return year + '/' + month + '/' + day; 
    },
    dateAdd: function (date, days) {
        if (days == undefined || days == '') {
            days = 1;
        }
        var date = new Date(date);
        date.setDate(date.getDate() + days);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var mm = "'" + month + "'";
        var dd = "'" + day + "'";

        //单位数前面加0
        if (mm.length == 3) {
            month = "0" + month;
        }
        if (dd.length == 3) {
            day = "0" + day;
        }
        var time = date.getFullYear() + "-" + month + "-" + day
        return time;
    },
    // 去除所有空格
    Trim: function (str, is_global) {

        var result;

        result = str.replace(/(^\s+)|(\s+$)/g, "");

        if (is_global.toLowerCase() == "g") {

            result = result.replace(/\s/g, "");

        }

        return result;

    },
    // 当前时间
    currentTime:function(){
        var myDate = new Date(); //获取系统当前时间
        var todaydate = myDate.getTime(); //获取当前时间
        return todaydate;
    },
    // 提示框
    showTip:function (em,msg) {
        em.$vux.toast.text(msg, 'top')
    },
    // 成功提示
    showSuccess: function (em, msg) {
        em.$vux.toast.show({
            text: msg,
            onShow() {
                console.log('Plugin: I\'m showing')
            }
        })
    },
    //错误弹框
    // showError:function(){
    //     MessageBox("温馨提示", "请求错误");
    // },
    showtan: function (value) {
        MessageBox("温馨提示", value);
    },
    showWaiting:function(){  //数据加载动画
        Indicator.open({
            text: "正在加载...",
            spinnerType: "fading-circle"
        });
    },
     closeWaiting:function(){ //关闭加载动画
        Indicator.close();
    },
//计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
    distance:function (lat1, lng1, lat2, lng2) {
        var radLat1 = lat1 * Math.PI / 180.0;
        var radLat2 =lat2 * Math.PI / 180.0;
    var a = radLat1 - radLat2;
        var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(1);
    return s;
},
//数组对象排序
    sortId:function (a, b){
        return a.distance - b.distance
      },
     // 数组对象中去掉重复的对象
     deteleObject:function(arr,name) {
     var hash = {};
  return arr.reduce(function (item, next) {
    hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
    return item;
  }, []);
},

   tihuan:function (item){

    if (item == undefined || item == null) {
        item = ""
    } else {
        return item
    }
    return item
},
    filDate: function (value){
    var filValue = value.split(' ');
    return filValue[0];
},
    filDate1: function(value) {
    var filValue = value.split(',');
    return filValue[1];
}
}