import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
    baseURL: '',
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

service.interceptors.request.use(
    config => {
      // do something before request is sent
      return config
    },
    error => {
      error.message = '网络连接失败，请稍后重试'
      Message({
        message: error.message,
        type: 'error'
      })
     
      return Promise.reject(error)
    }
  )
  

// response interceptor
service.interceptors.response.use(
    response => {
      const res = response.data
      if (res && res.errorCode === 'IDS-M009') {
        window.location = "/login"
      }else{
        return res
      }
    },
    error => {
          // eslint-disable-next-line
        error.message = '网络连接失败，请稍后重试'
        Message({
          message: error.message,
          type: 'error'
        })
      return Promise.reject(error)
    }
  )
  
  export default service