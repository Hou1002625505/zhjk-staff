//输出通用axios实例
import axios from 'axios';
import $this from '../util/config';
// 测试环境
axios.defaults.baseURL = 'http://test.physicalclub.com/crm';
// 生产环境
 //axios.defaults.baseURL = 'http://crm.physicalclub.com';
//设置超时时间
// axios.defaults.timeout = 30000;
//post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 

export default {
  $post(url, data, success, error, status) {
    if (status != 1) {
      $this.showWaiting();
    }
    return axios.post(url, data).then(function (res) { if (status != 1) { $this.closeWaiting(); } success && success(res.data) }).catch(function (err) {
      if (status != 1) { $this.closeWaiting(); }
      // $this.showError();//请求错误
      error && error()
    });
  },
  $get(url, data, success, error, status) {
    if (status != 1) {
      $this.showWaiting();
    }
    return axios.get(url, data).then(function (res) { if (status != 1) { $this.closeWaiting(); } success && success(res.data) }).catch(function (err) {
      if (status != 1) { $this.closeWaiting(); }
      // $this.showError();//请求错误
      error && error()
    });
  }
}