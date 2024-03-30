import axios from 'axios'


const serviceAxios = axios.create({
    baseURL: "/api", // 基础请求地址
    timeout: 10000, // 请求超时设置
    withCredentials: true, // 跨域请求是否需要携带 cookie
});

serviceAxios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
serviceAxios.interceptors.response.use(
    (res) => {
        let data = res.data;
        // 处理自己的业务逻辑，比如判断 token 是否过期等等
        // 代码块\
        return data;
    },
    (error) => {
        return Promise.reject(message);
    }
);


export default serviceAxios