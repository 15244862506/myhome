import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx';

// 导入axios对象
import axios from "axios";
//把axios对象放到react组件的原型上面去，将来所以的react组件都可以访问到axios对象了
React.Component.prototype.axios = axios
// 给axios配置默认的全局路径
axios.defaults.baseURL = 'http://localhost:9999/'
// axios.defaults.baseURL = 'http://47.96.21.88:8086/'
// 给axios配置一个响应拦截器, 直接把data中的数据返回
axios.interceptors.response.use(function (response) {
  console.log(response.data);
  // 拦截到axios所有的请求，直接返回了响应结果中的data数据
  return response.data
},
  function (error) {
    console.log(error);
    return error
  })
// 配置请求拦截器。每次请求，除了login，都要添加上token值
// 配置请求拦截器，每次请求，除了login，都可以添加token值
axios.interceptors.request.use(
  function (config) {
    if (!window.location.href.endsWith('/login')) {
      config.headers.Authorization = localStorage.getItem('myToken')
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

ReactDOM.render(<App />, document.getElementById('root'));

