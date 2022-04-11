import request from '@/utils/request'

export function login(params) {
    return request({
      url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_login',
      method: 'get',
      params
    })
}

export function register(params) {
    return request({
      url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_reg',
      method: 'get',
      params
    })
}

