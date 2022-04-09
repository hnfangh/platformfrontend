
import axios from 'axios';
// 封装axios的http请求
const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 1000
  });

export default instance