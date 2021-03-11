/*
 * @Description: 全局http请求处理
 * @Author: wgm
 * @Date: 2021-03-01 16:07:31
 */
import axios from 'axios';

// const isProduction = process.env.NODE_ENV === "production";

const instance = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

// 拦截请求
instance.interceptors.request.use(
  (config) => {
  // Do something before request is sent
  return config;
  },
  (error) => {
  // Do something with request error
  return Promise.reject(error);
  }
);

// 拦截响应
instance.interceptors.response.use(
  (response) => {
  if (response.status === 200) {
    return response?.data;
  }

  // 可以弹出错误
  // Message.error("服务错误");
  return response;
  },
  (error) => {
    // Do something with response error
    return error;
  }
);

// 包装请求
interface IParams {
  [key: string]: any
}
export default function request(url: string, method = 'get', params: IParams = {}, config: IParams  = {}) {
  const option = Object.assign({}, config);
   // 设置 url
  option.url = url;

  // 设置请求数据
    option.method = method;
  if ((method === 'get' || method === 'delete') && params instanceof Object) {
    option.params = params;
  } else if (method) {
    option.data = params;
  }

  return instance({
    ...option
  });
}
