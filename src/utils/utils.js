import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.VITE_BASE_API,
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        config.headers['token'] = 'token'
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
