import axios from 'axios';
import { Message } from 'element-ui';
import router from '@/router/index'
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
        response => {
            if(response.data && response.data.code == 1000){
                return response.data.data
            }else{
                if(response.data.code == 2000){
                    console.log(response.data)
                    Message({
                        message: response.data.msg,
                        type: 'error',
                        duration: 3 * 1000
                    });
                }
                return Promise.reject(response.data.msg)
            }

        },
        error => {
            let message = '系统错误';
            switch (error.response.status) {
                case 400:
                    message = error.response.data.message;
                    break;
                case 401:
                    message = '请登录';
                    break;
                case 403:
                    message = '没有权限';
                    break;
            }
            Message({
                message: message,
                type: 'error',
                duration: 3 * 1000
            });
            //router.push({path:'/home'})
            // return Promise.reject(error);
        }
    )

export default service;
