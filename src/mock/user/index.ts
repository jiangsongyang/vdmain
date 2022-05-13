export default [
  {
    url: '/mock/login', // 模拟登录的链接
    method: 'post', // 请求方式
    timeout: 500, // 超时时间
    statusCode: 200, // 返回的http状态码
    response: {
      // 返回的结果集
      code: 200,
      message: '登录成功',
      data: {
        token: 'vdmain-mock-token',
      },
    },
  },
  {
    url: '/mock/getUserInfo', // 模拟登录的链接
    method: 'get', // 请求方式
    timeout: 500, // 超时时间
    statusCode: 200, // 返回的http状态码
    response: {
      // 返回的结果集
      code: 200,
      message: '获取成功',
      data: {
        userName: 'admin',
      },
    },
  },
]
