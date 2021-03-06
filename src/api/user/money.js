import request from '@/plugin/axios/request'

/**
 * 获取指定账号资金信息
 * @param {Number} client_id
 * @returns
 */
export function getUserMoneyInfo(client_id) {
  return request({
    url: '/v1/user_money',
    method: 'post',
    params: {
      method: 'get.user.money.info'
    },
    data: {
      client_id
    }
  })
}
