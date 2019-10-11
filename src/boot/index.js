import config from './config.js'
import $http from './http'
import apiResources from './resource'

export default {
  /**
     * @method 测试api
     * @param id id
     * @param {*} 姓名
     */
  login (phone, password) {
    let params = {
      phone,
      password
    }
    return $http.get(config.baseUrl.concat(apiResources.login), params)
  },
  getGoodMusic () {
    let params = {

    }
    return $http.get(config.baseUrl.concat(apiResources.getGoodMusic), params)
  },
  getGoodMusicDetail (id) {
    let params = {
      id
    }
    return $http.get(config.baseUrl.concat(apiResources.getGoodMusicDetail), params)
  },
  getSongUrl (id) {
    let params = {
      id
    }
    return $http.get(config.baseUrl.concat(apiResources.getSongUrl), params)
  }
}
