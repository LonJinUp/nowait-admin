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
      if(config.method === 'post') {
        // config.data.id =  '16'
      }else{
        // config.params.qyid =  '16'
      }
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
      return res
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