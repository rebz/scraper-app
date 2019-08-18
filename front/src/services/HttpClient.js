const axios = require('axios')
// const token = null
const config = {
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        common: {
            // 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
            // 'X-Requested-With': 'XMLHttpRequest',
            // 'Authorization': `Bearer ${token}`,
            // 'Accept': 'application/json',
        }
    }
}
const HttpClient = axios.create(config)

// const isLoggedInInterceptor = (config => {
//     console.info('isLoggedInInterceptor -- config')
//     /** Add logging here */
//     return config;
// }, error => {
//     console.info('isLoggedInInterceptor -- error')
//     return Promise.reject(error);
// });

/** Adding the request interceptors */
// api.interceptors.request.use(isLoggedInInterceptor);
// api.interceptors.request.use(authInterceptor);
// api.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
HttpClient.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.request.status === 401) {
            window.location = '/login'
        }
        // TODO : handle error response
        return Promise.reject(error)
    }
)

export { HttpClient }
