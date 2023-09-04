import axios from 'axios'
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'
import _ from 'lodash-es'

// utils
export function sortQueryObject(queryObject: object) {
  return _.fromPairs(_.sortBy(_.toPairs(queryObject), 0))
}

axios.interceptors.request.use(
  async function (config) {
    // 在发送请求之前做些什么

    config.params = sortQueryObject(config.params)
    return config
  },
  async function (error) {
    // 对请求错误做些什么

    console.log('error in request interceptor')
    console.log(error)
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  async function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response
  },
  async function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    console.log('error in response interceptor')
    console.log(error)
    return Promise.reject(error)
  },
)

export default axios
