import axios from 'axios';
import { Message } from 'element-ui';

// create an axios instance
const service = axios.create({
    baseURL: 'http://127.0.0.1:9501/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
    // do something before request is sent
        var access_token = localStorage.getItem('token');

        if (access_token) {
            config.headers.Authorization = 'Bearer ' + access_token;
        }
        return config;
    },
    error => {
    // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

    /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
    response => {
        const res = response.data;
        return res;
    },
    error => {
        console.log('err' + error.statusCode); // for debug
        let message = '系统错误';
        switch (error.response.status) {
            case 400:
                message = error.response.data.message;
                break;
            case 403:
                message = '没有访问该接口权限';
                break;
        }
        Message({
            message: message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);
export default service;
