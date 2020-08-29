import axios from 'axios'
import apiURL from './api.js'
// import Qs from 'qs'

import cookie from 'js-cookie'

// axios默认配置
//axios.defaults.timeout = 5000;          // 超时时间
axios.defaults.baseURL = apiURL.apiUrl;  // 默认地址
//**整理数据格式**
// axios.defaults.transformRequest = function (data) {
//     data = Qs.stringify(data);
//     return data;
// };

// **路由请求拦截**
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
        //判断是否存在ticket，即判断用户是否登录，如果存在的话，则每个http header都加上ticket
        if (cookie.get("ticket")) {
            //用户每次操作，都将cookie设置成2小时
            cookie.set("ticket", cookie.get("ticket"),1/12)
            //每个http header都加上ticket
            config.headers.token = cookie.get("ticket");
            // //每个http header都加上personnelid
            // if(sessionStorage.loginStaffInfo){
            //     config.headers.personnelid = sessionStorage.personnelid;
            // }
        }
        return config;
    },
    error => {
        return Promise.reject(error.response);
    });

// **路由响应拦截**
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.resultCode=="401") {
            console.log("response.data.resultCode是401")
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
//      cookie.del("ticket")
            window.location.href=' http://localhost:7001/'
            return
        }else{
            return response;
        }
    },
    error => {
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });
export default axios;
