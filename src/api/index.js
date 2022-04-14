import request from '@/utils/request'

// 登录
export function login(params) {
    return request({
      url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_login',
      method: 'get',
      params
    })
}

// 注册
export function register(params) {
    return request({
      url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_reg',
      method: 'get',
      params
    })
}

// 修改资料
export function changeUserinfo(params) {
  return request({
    url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_updateqy',
    method: 'get',
    params
  })
}

// 获取用户信息
export function getUserinfo(params) {
  return request({
    url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_userinfo',
    method: 'get',
    params
  })
}

//修改密码

export function updatePassword(params) {
  return request({
    url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_updatepwd',
    method: 'get',
    params
  })
}

//添加模版
export function addTemplate(params) {
  return request({
    url: '/app/index.php?i=1&c=entry&m=qicheng_messenger&do=api_tongyong',
    method: 'get',
    params
  })
}
