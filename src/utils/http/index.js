import serviceAxios from './axios';

export default (url, data) => {
    return serviceAxios({
        method: "post",
        url,
        data
    })
}
