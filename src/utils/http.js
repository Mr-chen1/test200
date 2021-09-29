//数据请求封装

import axios from 'axios'
import { Toast } from "vant";
const clyhttp=axios.create({
    baseURL:'https://m.maizuo.com',
    timeout:10000,
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"163247429019795504267265"}'
        
    }
})

//拦截器,请求数据前,还未发起请求前,做些什么事情(触发vant的加载图标)
clyhttp.interceptors.request.use(function(config){
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      duration:0
    });
    return config
},function(error){
    return Promise.reject(error)
})

//拦截器,在请求数据后,得到数据前执行
clyhttp.interceptors.response.use(function(config){
    Toast.clear()
    return config
},function(error){
    Toast.clear()
    return Promise.reject(error)
})
export default clyhttp