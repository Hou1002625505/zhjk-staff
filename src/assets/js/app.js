var  service_ip= 'http://test.physicalclub.com/crm';
//var  service_ip= 'http://crm.physicalclub.com/';
// $(function(){
//   setHtmlFontSize();
// });
//   function setHtmlFontSize(){
// 		  	var w = window.innerWidth/7.5; document.documentElement.style.fontSize= w+"px";
// 		 }
//  window.addEventListener("resize",function(){setHtmlFontSize();});
function ajaxrequest(action, data, callback, errback) {
	jQuery.ajax({
		url: service_ip + action,
		timeout: 18000,
		type: "post",
		contentType:'application/json;charset=UTF-8',
		data: JSON.stringify(data),
		dataType: "json",
		success: function(msg) {
			 $('.weui-loadmore').hide();
			callback(msg)
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errback();
			 $('.weui-loadmore').hide();
			if(textStatus == "timeout") {
				WEUI.toast('加载超时，请重试')
			} else {
				WEUI.toast('请求失败')
			}
		}
	})
}
function ajaxrequest1(action, data, callback, errback) {
	showWaiting();
	jQuery.ajax({
		url: service_ip + action,
		timeout: 18000,
		type: "post",
		contentType:'application/json;charset=UTF-8',
		data: JSON.stringify(data),
		dataType: "json",
		success: function(msg) {
			callback(msg);
		closeWaiting();
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errback();
		closeWaiting();
			if(textStatus == "timeout") {
				WEUI.toast('加载超时，请重试')
			} else {
				WEUI.toast('请求失败')
			}
		}
	})
}
function ajaxrequest2(action, data, callback, errback) {
	jQuery.ajax({
		url: service_ip + action,
		timeout: 18000,
		type: "post",
		contentType:'application/json;charset=UTF-8',
		data: JSON.stringify(data),
		dataType: "json",
		success: function(msg) {
			callback(msg)
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errback();
			if(textStatus == "timeout") {
				WEUI.toast('加载超时，请重试')
			} else {
				WEUI.toast('请求失败')
			}
		}
	})
}
function showWaiting() {
	var strToast='<div id="loadingToast">'+
        '<div class="weui-mask_transparent"></div>'+
        '<div class="weui-toast">'+
            '<i class="weui-loading weui-icon_toast"></i>'+
            '<p class="weui-toast__content">请稍后...</p>'+
        '</div>'+
    '</div>';
    $("body").append(strToast);
}

function closeWaiting() {
	$("#loadingToast").remove();
}
//时间戳转标准时间
var formatDates = function (date) {
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
//  var   hour=date.getHours();
//  hour = hour < 10 ? ('0' + hour) : hour;  
//  var   minute=date.getMinutes();
//  minute = minute < 10 ? ('0' + minute) : minute;  
//  var   second=date.getSeconds();
//  second = second < 10 ? ('0' + second) : second;  
    return y + '-' + m + '-' + d ;
};

function formatDate(value,row, index){
	var newDate = new Date(value);
	var time = formatDates(newDate); 
	return time;
};

function getUrlParam(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
function stringToJSON(jsonStr) {
	return jQuery.parseJSON(jsonStr)
}

function jsonToString(jsonStr) {
	return jQuery.stringify(jsonStr)
}
Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
	}
	for(var k in o) {
		if(new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
		}
	}
	return fmt
};

function compareDate1(beginTime, endTime) {
	var beginTimes = beginTime.substring(0, 10).split('-');
	var endTimes = endTime.substring(0, 10).split('-');
	beginTime = beginTimes[1] + '-' + beginTimes[2] + '-' + beginTimes[0] + ' ' + beginTime.substring(10, 19);
	endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);
	var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;
	if(a < 0) {
		return true
	} else if(a > 0) {
		return false
	} else if(a == 0) {
		return false
	}
}

function systemNow() {
	var myDate = new Date();
	var month = myDate.getMonth() + 1;
	if(month < 10) {
		month = "0" + month
	}
	var date = myDate.getDate();
	if(date < 10) {
		date = "0" + date
	};
	var hours = myDate.getHours();
	if(hours < 10) {
		hours = "0" + hours
	};
	var minutes = myDate.getMinutes();
	if(minutes < 10) {
		minutes = "0" + minutes
	};
	var seconds = myDate.getSeconds();
	if(seconds < 10) {
		seconds = "0" + seconds
	};
	return myDate.getFullYear() + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
}

function getResultStr(resultstring) {
	xmlDoc = parser.parseFromString(data, "text/xml");
	var jsonda = xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue;
	return jsonda
}
var isPhone = /^((13[0-9])|(15[^4,\\D])|(170)|(18[0,3-9])|(14[5,7]))\d{8}$/;
var isEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var isCharAndNumber = /[^a-zA-Z0-9]/;
var isIDCard15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
var isIDCard18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
var isIDCard = /^([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{4}|\d{3}(x|X)))$/;
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];

function base64encode(str) {
	var out, i, len;
	var c1, c2, c3;
	len = str.length;
	i = 0;
	out = "";
	while(i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if(i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt((c1 & 0x3) << 4);
			out += "==";
			break
		}
		c2 = str.charCodeAt(i++);
		if(i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt((c2 & 0xF) << 2);
			out += "=";
			break
		}
		c3 = str.charCodeAt(i++);
		out += base64EncodeChars.charAt(c1 >> 2);
		out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		out += base64EncodeChars.charAt(c3 & 0x3F)
	}
	return out
}

function base64decode(str) {
	var c1, c2, c3, c4;
	var i, len, out;
	len = str.length;
	i = 0;
	out = "";
	while(i < len) {
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (i < len && c1 == -1);
		if(c1 == -1) {
			break
		}
		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (i < len && c2 == -1);
		if(c2 == -1) {
			break
		}
		out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if(c3 == 61) {
				return out
			}
			c3 = base64DecodeChars[c3]
		} while (i < len && c3 == -1);
		if(c3 == -1) {
			break
		}
		out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if(c4 == 61) {
				return out
			}
			c4 = base64DecodeChars[c4]
		} while (i < len && c4 == -1);
		if(c4 == -1) {
			break
		}
		out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
	}
	return out
}

function utf16to8(str) {
	var out, i, len, c;
	out = "";
	len = str.length;
	for(i = 0; i < len; i += 1) {
		c = str.charCodeAt(i);
		if((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i)
		} else if(c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
		} else {
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
		}
	}
	return out
}

function utf8to16(str) {
	var out, i, len, c;
	var char2, char3;
	out = "";
	len = str.length;
	i = 0;
	while(i < len) {
		c = str.charCodeAt(i++);
		switch(c >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				out += str.charAt(i - 1);
				break;
			case 12:
			case 13:
				char2 = str.charCodeAt(i++);
				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
				break;
			case 14:
				char2 = str.charCodeAt(i++);
				char3 = str.charCodeAt(i++);
				out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
				break
		}
	}
	return out
}

/**
页面访问埋点
*/
function addClick(pageName,pageNo){
	  $.ajax({
          type:"POST",
          url:service_ip+"/rest/wx/pageClick/addPageClick",
          data:{pageName:pageName,pageNo:pageNo},
          datatype: "html"
       });
      }