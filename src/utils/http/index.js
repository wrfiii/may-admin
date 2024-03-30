import serviceAxios from './axios';

export default (url, data) => {
    return serviceAxios({
        method: "post",
        url,
        data
    })
}

export function uploadImag(formData) {
    return serviceAxios({
        method: 'POST',
        data: formData,
        url: '/upload',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}

