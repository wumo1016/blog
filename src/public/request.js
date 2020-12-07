import axios from 'axios'
import { Message } from 'element-ui'
class NewAxios {
  handleError = (error) => {
    const { status } = error
    Message({
      message: error.data.Message ? `${error.data.Message}` : `${status} 出现错误`,
      type: 'error'
    })
    return Promise.reject(error)
  }
  create(options) {
    return (options) => {
      const instance = axios.create({
        baseURL: '/api/',
        timeout: 1000 * 30,
      })
      instance.interceptors.request.use(
        config => {
          return config
        },
        error => Promise.reject(error)
      )
      instance.interceptors.response.use(
        response => {
          const { Code } = response.data
          if (Code === 1) {
            return this.handleError(response)
          } else {
            return response.data
          }
        },
        error => error.response ? this.handleError(error.response) : Promise.reject(error)
      )
      return instance(options)
    }
  }
}
export default new NewAxios().create()
