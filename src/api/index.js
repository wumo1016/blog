import request from '@p/request'
export function Post(url, data) {
  return request({
    url,
    method: 'post',
    data
  })
}
export function Put(url, data) {
  return request({
    url,
    method: 'put',
    data
  })
}
export function Get(url, params) {
  return request({
    url,
    method: 'get',
    params
  })
}
export default {
  Get,
  Put,
  Post
}
