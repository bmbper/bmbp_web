import axios, { Axios, getAdapter } from "axios";

// 添加请求拦截器
axios.interceptors.request.use(function (config:any) {
    // 在提取Token
    if (!config.headers) {
        config.headers = {};
    }
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    const token = window.localStorage.getItem("bmbpToken");
    config.headers["Authorization"] = token;
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response:any) {
    let data = response.data;
    if (data.error) {
      return {
        code: data.error.code,
        msg: data.error.name,
        data: response.config.url
      };
    } else {
      return data;
    }
  }, function (error) {
    let errJson = error.toJSON();
      return {
        code: errJson.status,
        msg: errJson.msg,
        data: errJson.code
      };
  });

const BmbpHttp = {
  get: (url: string, params: any)=>{

  }
}
export default BmbpHttp;
